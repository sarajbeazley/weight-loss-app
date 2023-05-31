import { Routes, Route, Link } from "react-router-dom";
import Form from "./Form"

<Routes>
<Route
path='/form'
element={<Form form={Form} />}
/>
<Link to="/form">Form</Link>
</Routes>