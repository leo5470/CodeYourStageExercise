import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  const { data } = studentId ? useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`) : {}; // 避免學號為空時不斷送出請求
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  }
};

export default useSkills;
