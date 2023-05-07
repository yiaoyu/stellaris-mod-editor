<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useMainStore } from "../../stores/main"
import { useEventStore } from "../../stores/events/event"
import type * as types from "../../stores/events/event"
const mainStore = useMainStore()
const st = useEventStore()
onBeforeMount(()=>{
    mainStore.getCurrContent("event")
	loadSetting()
})
//load setting
function loadSetting(){
	if(localStorage.getItem("eventItem")){
		st.event = JSON.parse(localStorage.getItem("eventItem")!)
		st.mainOutput = JSON.parse(localStorage.getItem("eventMain")!)
		st.localOutput = JSON.parse(localStorage.getItem("eventLocal")!)
	}
}
const mainTextarea = ref<HTMLInputElement | null>(null)
const localTextarea = ref<HTMLInputElement | null>(null)
//generate event template
function generateEvent(event:types.Event):string{
    //triggerDesc or desc
    let desc = ``
    if(event.triggerDesc){
        desc = `desc = {
		text = ${event.namespace}.${event.eventId}.desc.conditional
		trigger = {
			text = ${event.namespace}.${event.eventId}.desc.conditional
			success_text =
			fail_text =
		}
		exclusive_trigger = {
			
		}
    }`
    }else{
        desc = `desc = ${event.namespace}.${event.eventId}.desc`
    }
    //triggerPicture or picture
    let picture = ``
    if(event.triggerPicture){
        picture = `picture = {
		picture = 
		trigger = {  }
		exclusive_trigger = {
			
		}
	}`
    }else{
        picture = `picture = GFX_evt_exploding_ship`
    }
    //showSound or not
    let showSound = ``
    if(event.showSound){
        showSound = `show_sound = event_ship_explosion`
    }
    //hideWindow or not
    let hideWindow = ``
    if(event.hideWindow){
        hideWindow = `\n\thide_window = yes`
    }
    //is Diplomatic
    let diplomatic = ``
    if(event.diplomatic){
        diplomatic = `\n\tdiplomatic = yes
	custom_gui = "enclave_curator_option"
	picture_event_data = {
		portrait = event_target:contact_empire
		planet_background = event_target:contact_empire
		graphical_culture = event_target:contact_empire
		city_level = event_target:contact_empire
		room = event_target:contact_empire.ruler
	}`
    }
    //don't autoSelect
    let autoSelect = ``
    if(!event.autoSelect){
        autoSelect = `\n\tauto_select = no`
    }
    //don't forceOpen
    let forceOpen = ``
    if(!event.forceOpen){
        forceOpen = `\n\tforce_open = no`
    }
    //don't autoOpens
    let autoOpens = ``
    if(!event.autoOpens){
        autoOpens = `\n\tauto_opens = no`
    }
    //don't trackable
    let trackable = ``
    if(!event.trackable){
        trackable = `\n\ttrackable = no`
    }
    //is fireOnlyOnce
    let fireOnlyOnce = ``
    if(event.fireOnlyOnce){
        fireOnlyOnce = `\n\tis_triggered_only = yes`
    }
    //is MTTH
    let MTTH = ``
    if(event.isMTTH){
        MTTH = `\n\tmean_time_to_happen = {
		years = 100
		modifier = {
			# Modifier statement(s)
		}
	}`
    }
    //has trigger
    let trigger = ``
    if(event.trigger){
        trigger = `trigger = {
		# Condition statement(s)
	}`
    }
    //has immediate
    let immediate = ``
    if(event.immediate){
        immediate = `\n\timmediate = {
		# Effect statement(s)
	}`
    }
    //options
    let options = `\n\t`
    for(let i=0;i<event.options;i++){
        //option has trigger
        let optionTrigger = ``
        if(event.optionTrigger){
        	optionTrigger = `trigger = {
			# Condition statement(s)
        }`
        }
        //option has exclusiveTrigger
        let optionExclusiveTrigger = ``
        if(event.optionExclusiveTrigger){
            optionExclusiveTrigger = `\n\t\texclusive_trigger = {
			# Condition statement(s)
        }`
        }
        //option has allow
        let optionAllow = ``
        if(event.optionAllow){
            optionAllow = `\n\t\tallow = {
			# Condition statement(s)
        }`
        }
        //option has customTooltip
        let optionCustomTooltip = ``
        if(event.optionCustomTooltip){
            optionCustomTooltip = `\n\t\tcustom_tooltip = ${event.namespace}.${event.eventId}.${String.fromCharCode(97+i)}.tooltip`
        }
        //option has tooltip
        let optionTooltip = ``
        if(event.optionTooltip){
            optionTooltip = `\n\t\ttooltip = {
			# effect statement(s)
		}`
        }
        //option has hiddenEffect
        let optionHiddenEffect = ``
        if(event.optionHiddenEffect){
            optionHiddenEffect = `\n\t\thidden_effect = {
			# effect statement(s)
		}`
        }
        let option =`\n\toption = {
		name = ${event.namespace}.${event.eventId}.${String.fromCharCode(97+i)}
		${optionTrigger}${optionExclusiveTrigger}${optionAllow}${optionCustomTooltip}${optionTooltip}${optionHiddenEffect}
	}`
        options = options.concat(option)
    }
    //has abortTrigger
    let abortTrigger = ``
    if(event.abortTrigger){
        abortTrigger = `\n\tabort_trigger = {
		# Condition statement(s)
	}`
    }
    //has abortEffect
    let abortEffect = ``
    if(event.abortEffect){
        abortEffect = `\n\tabort_effect = {
		# effect statement(s)
	}`
    }
    //has after
    let after = ``
    if(event.after){
        after = `\n\tafter = {
		# effect statement(s)
	}`
    }
    return `${event.eventType} = {
\tid = ${event.namespace}.${event.eventId}
\ttitle = ${event.namespace}.${event.eventId}.name
\t${desc}
\t${picture}
\tlocation = ${event.location}
\t${showSound}${hideWindow}${diplomatic}${autoSelect}${forceOpen}${autoOpens}${trackable}${fireOnlyOnce}${MTTH}
\t${trigger}${immediate}${options}${abortTrigger}${abortEffect}${after}
}`
}
//generate localisation template
function generateLocalisation(event:types.Event):string{
	let options = ``
	for(let i=0;i<event.options;i++){
        let option = `\n${event.namespace}.${event.eventId}.${String.fromCharCode(97+i)}:0 ""`
		if(event.optionCustomTooltip){
			option = option.concat(`\n${event.namespace}.${event.eventId}.${String.fromCharCode(97+i)}.tooltip:0 ""`)
		}
        options = options.concat(option)
    }
	return `${event.namespace}.${event.eventId}.name:0 ""
${event.namespace}.${event.eventId}.desc:0 ""${options}
`
}
//generate main and localisation
function generate(){
	st.mainOutput = generateEvent(st.event)
	st.localOutput = generateLocalisation(st.event)
}
</script>

<template>
<section class="controller">
	<h4>基础配置</h4><div></div><div></div>
	<div>
		<span>event type:</span>
		<select v-model="st.event.eventType">
			<option>event</option>
			<option>country_event</option>
			<option>planet_event</option>
			<option>fleet_event</option>
			<option>ship_event</option>
			<option>pop_faction_event</option>
			<option>pop_event</option>
			<option>observer_event</option>
			<option>system_event</option>
			<option>starbase_event</option>
			<option>leader_event</option>
			<option>espionage_operation_event</option>
			<option>first_contact_event</option>
			<option>agreement_event</option>
		</select>
	</div>
	<div>
		<label for="namespace">namespace:</label>
		<input id="namespace" type="text" v-model="st.event.namespace"/>
	</div>
	<div>
		<label for="eventId">ID:</label>
		<input id="eventId" type="number" min="0" v-model="st.event.eventId"/>
	</div>

	<div>
		<label for="triggerDesc">trigger desc:</label>
		<input id="triggerDesc" type="checkbox" v-model="st.event.triggerDesc"/>
	</div>
	<div>
		<label for="triggerPicture">trigger picture:</label>
		<input id="triggerPicture" type="checkbox" v-model="st.event.triggerPicture"/>
	</div>
	<div></div>
	<h4>进阶配置</h4><div></div><div></div>
	<div>
		<label for="showSound">show sound:</label>
		<input id="showSound" type="checkbox" v-model="st.event.showSound"/>
	</div>
	<div>
		<label for="location">location:</label>
		<input id="location" type="text" v-model="st.event.location"/>
	</div>
	<div>
		<label for="hideWindow">hide window:</label>
		<input id="hideWindow" type="checkbox" v-model="st.event.hideWindow"/>
	</div>

	<div>
		<label for="diplomatic">diplomatic:</label>
		<input id="diplomatic" type="checkbox" v-model="st.event.diplomatic"/>
	</div>
	<div>
		<label for="autoSelect">auto select:</label>
		<input id="autoSelect" type="checkbox" v-model="st.event.autoSelect"/>
	</div>
	<div>
		<label for="forceOpen">force open:</label>
		<input id="forceOpen" type="checkbox" v-model="st.event.forceOpen"/>
	</div>

	<div>
		<label for="autoOpens">auto opens:</label>
		<input id="autoOpens" type="checkbox" v-model="st.event.autoOpens"/>
	</div>
	<div>
		<label for="trackable">trackable:</label>
		<input id="trackable" type="checkbox" v-model="st.event.trackable"/>
	</div>
	<div>
		<label for="fireOnlyOnce">fire only once:</label>
		<input id="fireOnlyOnce" type="checkbox" v-model="st.event.fireOnlyOnce"/>
	</div>
	<h4>触发与代码段</h4><div></div><div></div>
	<div>
		<label for="istriggeredOnly">is triggered only:</label>
		<input id="istriggeredOnly" type="checkbox" v-model="st.event.isTriggeredOnly"/>
	</div>
	<div>
		<label for="MTTH">MTTH:</label>
		<input id="MTTH" type="checkbox" v-model="st.event.isMTTH"/>
	</div>
	<div></div>

	<div>
		<label for="trigger">trigger:</label>
		<input id="trigger" type="checkbox" v-model="st.event.trigger"/>
	</div>
	<div>
		<label for="immediate">immediate:</label>
		<input id="immediate" type="checkbox" v-model="st.event.immediate"/>
	</div>
	<div>
		<label for="after">after:</label>
		<input id="after" type="checkbox" v-model="st.event.after"/>
	</div>
	<div>
		<label for="abortTrigger">abort trigger:</label>
		<input id="abortTrigger" type="checkbox" v-model="st.event.abortTrigger"/>
	</div>
	<div>
		<label for="abortEffect">abort effect:</label>
		<input id="abortEffect" type="checkbox" v-model="st.event.abortEffect"/>
	</div>
	<div></div>
	<h4>事件选项</h4><div></div><div></div>
	<div>
		<label for="options">number of options:</label>
		<input id="options" type="number" min="0" max="10" v-model="st.event.options"/>
	</div>
	<div></div>
	<div></div>

	<div>
		<label for="optionCustomTooltip">option custom tooltip:</label>
		<input id="optionCustomTooltip" type="checkbox" v-model="st.event.optionCustomTooltip"/>
	</div>
	<div>
		<label for="optionTooltip">option tooltip:</label>
		<input id="optionTooltip" type="checkbox" v-model="st.event.optionTooltip"/>
	</div>
	<div>
		<label for="optionHiddenEffect">option hidden effect:</label>
		<input id="optionHiddenEffect" type="checkbox" v-model="st.event.optionHiddenEffect"/>
	</div>

	<div>
		<label for="optionAllow">option allow:</label>
		<input id="optionAllow" type="checkbox" v-model="st.event.optionAllow"/>
	</div>
	<div>
		<label for="optionTrigger">option trigger:</label>
		<input id="optionTrigger" type="checkbox" v-model="st.event.optionTrigger"/>
	</div>
	<div>
		<label for="optionExclusiveTrigger">option exclusive trigger</label>
		<input id="optionExclusiveTrigger" type="checkbox" v-model="st.event.optionExclusiveTrigger"/>
	</div>
</section>
<button @click="mainStore.saveSetting('event',st.event,st.mainOutput,st.localOutput)" id="save-btn">保存模板</button>
<button @click="mainStore.removeSetting('event')" id="remove-btn">恢复默认</button>
<button @click="generate()" id="generate-btn">生成模板</button>
<div class="section-title">
    <h4>事件模板：</h4>
    <button @click="mainStore.copyTextArea(mainTextarea!)">复制</button>
</div>
<textarea v-model="st.mainOutput" ref="mainTextarea" class="main-textarea" wrap="off"></textarea>
<div class="section-title">
    <h4>本地化模板：</h4>
    <button @click="mainStore.copyTextArea(localTextarea!)">复制</button>
</div>
<textarea v-model="st.localOutput" ref="localTextarea" class="local-textarea" wrap="off"></textarea>
</template>

<style scoped lang="less">
@import "../../assets/base.less";
	.controller{
		display:grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(11, 1fr);
		max-width: 900px;
		div{
			height: 32px;
			label{
				padding-right: 5px;
			}
			span{
				padding-right: 5px;
			}
		}
		h4{
			margin: 10px 0px 0px 0px;
		}
	}
	#remove-btn{
		margin-left: 10px;
	}
	#save-btn{
		margin-left: 10px;
	}
	#generate-btn{
		padding: 8px;
		width: 30%;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 10%;
		background-color: @green-light;
		color: #FFF;
		border: none;
	}
    textarea{
        font-family: 'Courier New', monospace;
        font-size: 14px;
        tab-size: 2rem;
    }
    .section-title{
        padding: 10px 0px;
        button{
            float: right;
            margin-right: 50%;
        }
        h4{
			display: inline;
		}
    }
    .main-textarea{
        min-height: 400px;
        min-width: 400px;
        width: 50%;
    }
    .local-textarea{
        min-height: 200px;
        min-width: 400px;
        width: 50%;
    }
</style>