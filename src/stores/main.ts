import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const currContent = ref("home")
    //get current view
    function getCurrContent(name:string){
        currContent.value = name
    }
    //copy template
    function copyTextArea(textarea:HTMLInputElement){
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
    }
    //save setting
    function saveSetting(name:string,item:any,main:any,local:any){
        localStorage.setItem(name+"Item",JSON.stringify(item))
        localStorage.setItem(name+"Main",JSON.stringify(main))
        localStorage.setItem(name+"Local",JSON.stringify(local))
        window.alert("保存成功！")
    }
    //remove setting
    function removeSetting(name:string){
        localStorage.removeItem(name+"Item")
        localStorage.removeItem(name+"Main")
        localStorage.removeItem(name+"Local")
        window.alert("已恢复为默认值！")
        location.reload()
    }
    return { 
        currContent,
        getCurrContent,
        copyTextArea,
        saveSetting,
        removeSetting,
    }
})
