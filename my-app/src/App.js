import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsChild from "./components/MethodsAsPropsChild";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import { SearchBar3 } from "./components/SearchBar3";
import HooksCounter from "./components/HooksCounter";
import ClassCounter from "./components/ClassCounter";
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseStateWithObjects from "./components/UseStateWithObjects";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterContainer from "./components/UseEffectCounterContainer";
import HTTPRequests from "./components/HTTPRequests";
import HTTPPost from "./components/HTTPPost";
import HTTPHooks from "./components/HTTPHooks";

function App() {
  return (
    <div className="App">
     <FunctionalGreeting />
     <FunctionalGreetingWithProps greeting=" Nice to Meet you" name="Bob" age="300"/>
     <StatefulGreeting greeting1="I'm a Stateful Class component " />
     <EventsFunctional />
     <EventsClass />
     <EventBinding />
     <ConditionalRenderingClass />
     <ConditionalRenderingFunctional connected={true} />
     <NestingComponents />
     <MethodsAsPropsChild />
     <MethodsAsPropsParent />
     <RenderingLists />
     <LifeCyclesCDM />
     <LifeCyclesCDU />
     <LifeCyclesCWU />
     <ControlledForm />
     <UncontrolledForm />
     <SearchBar3 />
     <HooksCounter />
     <ClassCounter />
     <ControlledFormHooks />
     <UseStateWithArrays />
     <UseStateWithObjects />
     <UseEffectCounter />
     <UseEffectCounterContainer />
     <HTTPRequests />
     <HTTPPost />
     <HTTPHooks />
    </div>
  );
}

export default App;
