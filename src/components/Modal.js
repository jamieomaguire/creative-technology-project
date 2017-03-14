export const Modal = () => {

    const closeModal = () => {
        let modal = document.querySelector('.Modal')
        modal.style.visibility = "hidden"
    }
    
     return (
        <div className="Modal">
            <div className="Modal-inner">
                <h3>Please sign in to access this feature :)</h3>
                <a className="Modal-link" href="javascript:void(0)">Sign in</a>
                <a className="Modal-link" href="javascript:void(0)">Don't have an account? Register here</a>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )  
}