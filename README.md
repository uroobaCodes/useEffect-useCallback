# 🔍 Learning About Closures

This is ony of the projects from john smilga's react tutorial. I have learned react from Codecademy as well but I am trying to gain more insights into the hooks that weren't part of the course. 

# 📜 Key Learning Points:

**1- when we dont use 'useCallback', why did we put the fetchData() INSIDE useEffect?**

Javascript functions are recreated each time the component re-renders. So, yes, the fetchData() is being re-created with every re-run. Since we did not memoiz the function with useCallback (meaning only recreate when dependecies change, otherwise React will cache (store) the function from initial render to memory), its lifecycle is dependent on useEffect. 

We can do this when we (a) dont need the function to be used elsewhere in the code and (b) when we dont need to optimize the function ourselves because it is passed as a prop to children. optimize means re-create when dependencies change.

We are using the fetchData inside the useEffect, it won't be re-created outside of the useEffect, it won't perform unnecessarily and since it is not dependent on external dependencies, (url, arrays) it won't need to re-create again when dependecies change. Even if it was dependent on external dependencies, with useEffect it wont get recreated if those dependencies change. 

We do provide the empt dependecy array so the effect could only run once. To prevent any inifnite loops. 

**2- What happens when we use the function inside useCallback?**

The fetchData function can now be called programmatically, not just automatically in useEffect. Meaning, it can be reused elsewhere in the component (e.g., for manual re-fetching via a button). By wrapping it in useCallback, the function is memoized so it maintains a stable reference across renders, unless the dependencies we describe change. It is also important to describe those dependencies, else React will cache the function from the first render and all of the closures that the function creates will remain stale. It could lead to bugs. 

By memoizing with useCallback, fetchData won't be recreated on every render, preventing unnecessary updates or dependency issues.

Since, in our particular example, we are calling fetchData() inside the useEffect, to ensure that it only runs once, but we still ADD the fetchData to the dependency array of useEffect so whenever anything changes in the function, useEffect can re-run it again so we recieve updated values from the function. 

**📒 Personal Notes:**

💥 Our function memoized so it won't re-create unless dependencies in the useCallback change

💥 it will only run when the component mounts

💥 any changes in the useCallback dependency array with re-create the function, this will trigger the useEffect to re-run the function with updated values

💥 so the only reason I see of useEffect is for controlling the lifecycle of the function call.

### 🔮 Future Learning
Hopefully, I will be using a combination of these hooks in my projects as well. The course was quite advanced and I still am trying trying to wrap my head around the information overload. 

### 😊 Contact me
If you have any suggestions or want to share knowledge about React hooks, feel free to reach out!

🌟 GitHub: uroobaCodes 🌟 Email: urooba.codes@gmail.com
