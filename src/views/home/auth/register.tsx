import { type FC, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useRegister } from "../../../hooks/auth/useRegister";

interface ValidationErrors {
    [key: string]: string;
}

const Register: FC = () => {
    const navigate = useNavigate();
    const { mutate, isPending } = useRegister(); 

    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [error, setError] = useState<ValidationErrors>({});

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        mutate(
            { name, username, email, password },
            {
                onSuccess: () => navigate('/login'),
                onError: (error: any) => {
                    setError(error.response?.data?.errors || {});
                }
            }
        );
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card border-0 rounded-4 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-bold text-center">REGISTER</h4>
                        <hr />
                        <form onSubmit={handleRegister}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label className="mb-1 fw-bold">Full Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control"
                                            placeholder="Full Name"
                                        />
                                        {error?.Name && (
                                            <div className="alert alert-danger mt-2 rounded-4">{error.Name}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label className="mb-1 fw-bold">Username</label>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                        {error?.Username && (
                                            <div className="alert alert-danger mt-2 rounded-4">{error.Username}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label className="mb-1 fw-bold">Email address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            placeholder="Email address"
                                        />
                                        {error?.Email && (
                                            <div className="alert alert-danger mt-2 rounded-4">{error.Email}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label className="mb-1 fw-bold">Password</label>
                                        <input
                                            type="password"
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                        {error?.Password && (
                                            <div className="alert alert-danger mt-2 rounded-4">{error.Password}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 rounded-4" disabled={isPending}>
                                {isPending ? 'Loading...' : 'Register'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
