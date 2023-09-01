import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats"); // JSON
  

  if(data){
    const handledData = {
      "管理學院": 0,
      "社會科學院": 0,
      "電資/工學院": 0,
      "其他": 0
    };
    for(const [key, value] of Object.entries(data)){
      if(key.includes("管理") || key.includes("企業") || key.includes("會計")){
        handledData["管理學院"] += value;
      }
      else if(key.includes("經濟") || key.includes("社會") ){
        handledData["社會科學院"] += value;
      }
      else if(key.includes("工程") || key.includes("電資")){
        handledData["電資/工學院"] += value;
      }
      else{
        handledData["其他"] += value;
      }
    }
    return {
      labels: handledData && Object.keys(handledData),
      values: handledData && Object.values(handledData)
    };
  }
  else {
    return {
      labels: data && Object.keys(data),
      values: data && Object.values(data)
    };
  }
  
};

export default useAcademystats;
