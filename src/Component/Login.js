class Login  extends Component {
    
    render() { 
        return (
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username </label>
                        <input type="email" placeholder="Masukan username anda"  required/>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" placeholder="Password" />
                </div>

             
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>   
            </form> 
         );
    }
}
 
export default Login ;