import classes from './Counter.module.css';

const Counter = () => {
    const toggleCounterHandler = () => {}

    return (
        <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>-- COUNTER VALUE --</div>
        <button onClick={toggleCounterHandler}>Toggle counter</button>
        </main>
    );
};

export default Counter;