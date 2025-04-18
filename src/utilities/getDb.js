const getData =()=>{
    const checkData = localStorage.getItem('readList')
    if(checkData){
        const setStoredData = JSON.parse(checkData)
        return setStoredData
    }
    else{
        return []
    }

}
const setData =(id)=>{
    // console.log(id)
    const setStoredData = getData()
    if(setStoredData.includes(id)){
        alert("sorry book already added")
    }
    else{
        setStoredData.push(id)
        const data = JSON.stringify(setStoredData)
        localStorage.setItem('readList',data)
    }

}
export {setData,getData}