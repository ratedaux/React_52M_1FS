import axios from "axios";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { ErrorMessage } from "../../components/ErrorMessage/styles";
import Spinner from "../../components/Spinner/Spinner";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useEffect, useState } from "react";
import "./styles";
import { Lesson11Wrapper, List, ListItem } from "./styles";

interface Fact {
	text: string;
	id: number;
}

/**
 * Загружает и отображает случайные факты о котах.
 */
function Lesson11() {
	const URL = "https://catfact.ninja/fact";

	const [catFacts, setCatFacts] = useState<Fact[]>([]);
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	/**
	 * Получает случайный факт о котах и обновляет состояние.
	 * @async
	 */
	const getCatFact = async () => {
		try {
			setError("");
			setIsLoading(true);

			const result = await axios.get(URL);

			// Создаем новый массив, чтобы избежать мутации состояния
			setCatFacts(prevFacts => [
				...prevFacts,
				{
					text: result.data.fact,
					id: new Date().getTime(),
				},
			]);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Обработчик клика для загрузки нового факта о котах.
	 */
	const handleClickGetCatFact = () => {
		getCatFact();
	};

	/**
	 * Обработчик клика для удаления всех фактов.
	 */
	const handleClickDeleteAllData = () => {
		setCatFacts([]);
	};

	/**
	 * Обработчик клика для удаления текущего факта.
	 * @param {number} id Уникальный идентификатор удаляемого факта
	 */
	const handleClickDeleteData = (id: number) => {
		setCatFacts(prevFacts => prevFacts.filter(prevFact => prevFact.id !== id));
	};

	/**
	 * Загружает первый факт о котах при монтировании компонента.
	 * Эффект выполнится только один раз при первом рендере.
	 */
	useEffect(() => {
		getCatFact();
	}, []);

	return (
		<Lesson11Wrapper>
			<Toolbar>
				<ButtonIcon
					size="24"
					icon="download"
					title="Get more info"
					onClick={handleClickGetCatFact}
				/>

				{catFacts.length > 0 && (
					<ButtonIcon
						size="24"
						icon="clear_all"
						title="Delete all data"
						style={{
							marginLeft: "5px",
							backgroundColor: "#F44336",
						}}
						onClick={handleClickDeleteAllData}
					/>
				)}
			</Toolbar>
			{catFacts.length >= 0 && (
				<List>
					{catFacts.map((catFact, i) => (
						<ListItem key={catFact.id}>
							<div>{catFact.text}</div>
							<ButtonIcon
								size="24"
								icon="delete"
								title="Delete"
								style={{
									marginTop: "10px",
									backgroundColor: "#F44336",
								}}
								onClick={() => handleClickDeleteData(catFact.id)}
							/>
						</ListItem>
					))}
				</List>
			)}
			{error && <ErrorMessage>{error}</ErrorMessage>}
			{isLoading && <Spinner />}
		</Lesson11Wrapper>
	);
}

export default Lesson11;