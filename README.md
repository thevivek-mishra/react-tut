#Component Life Cycle Phases

1.Mounting Phase (Component Creation Started)
---This phase occurs when an instance of a component is being created and inseted into the DOM

2.Updating Phase (Component Update)
---This phase occurs when a component is being re-rendered as a result of chages to either its props or state

3.Unmounting Phase (Removal from the DOM)
---This phase occurs when a component is being removed from the DOM

### Component life cycle method
---Component lifecycle method are special methods that get called at various stages of a component's life

1.Mounting Phase 

i constructor()
ii getDerivedStateFromProps()
iii render()
iv componentDidMount()

2.Updating Phase

i getDerivedStateFromProps()
ii shouldComponentUpdate()
iii render()
iv getSnapshotBeforeUpdate()
v ComponentDidUpdate()

3.Unmounting Phase
i componentWillUnmount()

### Constructor()

constructor is a special method that is called when an instance of the class is created.
--Constructor is used for initializing the component's state or performing any setup that is needed before the component is rendered

### role of super() keyword
---super keyword is used in the constructor of a class component to call the constructor of the parent class.
---This is necessary to ensure that the initialization logic of the parent class is executed

### role of reder() method
---Render() method returs the React elements that will be rendered to the DOM

### How the State can be maintained in a class component ??

---Two step process to maintain state:
1 This.setState() method is used to update the state
2 this.state property is used to render the update state in DOM

### ComponentDidMount 
---componentDidMount() lifecycle method in React is the part of mounting phase and is called after a component has been rendered to the DOM.
---Mostly used for side effects. for example external data fetching or setting up subscriptions.

