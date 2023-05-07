import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
export interface Event{
    //basic info
    eventType:string
    namespace:string
    eventId:number
    //desc and pic
    triggerDesc:boolean
    triggerPicture:boolean
    //detail
    showSound:boolean
    location:string
    hideWindow:boolean
    diplomatic:boolean
    autoSelect:boolean
    forceOpen:boolean
    autoOpens:boolean
    trackable:boolean
    fireOnlyOnce:boolean
    //trigger type
    isTriggeredOnly:boolean
    isMTTH:boolean
    //basic content
    trigger:boolean
    immediate:boolean
    after:boolean
    //abort
    abortTrigger:boolean
    abortEffect:boolean
    //option
    options:number
    optionTrigger:boolean
    optionExclusiveTrigger:boolean
    optionAllow:boolean
    optionCustomTooltip:boolean
    optionTooltip:boolean
    optionHiddenEffect:boolean
}
export const useEventStore = defineStore('event', () => {
    const event = ref<Event>({
        eventType: 'country_event',
        namespace: 'my_event',
        eventId: 1,
        triggerDesc: false,
        triggerPicture: false,
        showSound: true,
        location: 'ROOT',
        hideWindow: false,
        diplomatic: false,
        autoSelect: true,
        forceOpen: true,
        autoOpens: true,
        trackable: true,
        fireOnlyOnce: false,
        isTriggeredOnly: true,
        isMTTH: false,
        trigger: true,
        immediate: true,
        after: false,
        abortTrigger: false,
        abortEffect: false,
        options: 1,
        optionTrigger: true,
        optionExclusiveTrigger: false,
        optionAllow: false,
        optionCustomTooltip: true,
        optionTooltip: false,
        optionHiddenEffect: true
    })
    const mainOutput = ref("")
    const localOutput = ref("")
    return {
        event,
        mainOutput,
        localOutput,
    }
})
