import { useState, type FC, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SidebarMenu from "../../../components/SidebarMenu";
import { useUsersCreate } from "../../../hooks/auth/user/useUserCreate";

interface ValidationErrors {
    [key: string]: string;
}

const UserCreate: FC = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errors, setErrors] = useState<ValidationErrors>({});

    const { mutate, isPending } = useUsersCreate();

    const storeUser = async (e: FormEvent) => {
        e.preventDefault();

        mutate(
            { name, username, email, password },
            {
                onSuccess: () => {
                    navigate('/admin/users');
                },
                onError: (error: any) => {
                    if (error?.response?.data?.data?.errors) {
                        setErrors(error.response.data.data.errors);
                    }
                },
            }
        );
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-header">
                            ADD USER
                        </div>
                        <div className="card-body">
                            <form onSubmit={storeUser}>
                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                    {errors.name && (
                                        <div className="alert alert-danger mt-2 rounded-4">{errors.name}</div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Username</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control"
                                        placeholder="Username"
                                    />
                                    {errors.username && (
                                        <div className="alert alert-danger mt-2 rounded-4">{errors.username}</div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                    {errors.email && (
                                        <div className="alert alert-danger mt-2 rounded-4">{errors.email}</div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                    {errors.password && (
                                        <div className="alert alert-danger mt-2 rounded-4">{errors.password}</div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-md btn-primary rounded-4 shadow-sm border-0"
                                    disabled={isPending}
                                >
                                    {isPending ? 'Saving...' : 'Save'}
                                </button>

                                <Link
                                    to="/admin/users"
                                    className="btn btn-md btn-secondary rounded-4 shadow-sm border-0 ms-2"
                                >
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCreate;
