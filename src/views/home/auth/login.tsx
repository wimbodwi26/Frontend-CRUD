import { type FC, useState, useContext } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../../../hooks/auth/useLogin";
import Cookies from "js-cookie";
import { AuthContext } from "../../../Context/AuthContext";

interface ValidationErrors {
    [key: string]: string;
}

export const Login: FC = () => {
    const navigate = useNavigate();
    const { mutate, isPending } = useLogin();
    const { setIsAuthenticated } = useContext(AuthContext)!;
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<ValidationErrors>({});
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        mutate({
            username,
            password
        }, {
            onSuccess: (data: any) => {
                Cookies.set('token', data.data.token);

                Cookies.set('user', JSON.stringify({
                    id: data.data.id,
                    name: data.data.name,
                    username: data.data.username,
                    email: data.data.email
                }));

                setIsAuthenticated(true);

                navigate('/admin/dashboard');
            },
            onError: (error: any) => {
                setErrors(error.response.data.errors);
            }
        })
    }
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card border-0 rounded-4 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-bold text-center">LOGIN</h4>
                        <hr />
                        {errors.Error && <div className="alert alert-danger mt-2 rounded-4">Username or Password is incorrect</div>}
                        <form onSubmit={handleLogin}>
                            <div className="form-group mb-3">
                                <label className="mb-1 fw-bold">Username</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />
                                {errors.Username && <div className="alert alert-danger mt-2 rounded-4">{errors.Username}</div>}
                            </div>

                            <div className="form-group mb-3">
                                <label className="mb-1 fw-bold">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                {errors.Password && <div className="alert alert-danger mt-2 rounded-4">{errors.Password}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary w-100 runded-4" disabled={isPending}>
                                {isPending ? 'Loading...' : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login