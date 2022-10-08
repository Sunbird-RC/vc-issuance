import '../index.css';

export const RegisterIssuerPage = () => {
    return (<>
        <div className='header-component'>
            <img className = "logo" src="sunbird_logo.svg" alt="mobile logo"/>
        </div>
        <div className='register-issuer-body'>
            <div className='register-issuer-container'>
                <div className='container-content'>
                    <h3>Register as Issuer</h3>
                </div>

                <div className='container-content'>
                    <div className='registration-form-card'>
                        <div className='form-subtitle'>Basic Details</div>

                        <div className='container-content'>
                            <label id = "fileUpload" className='logo-image-picker add-logo-text'>
                                Add Logo
                            </label>
                            <input id = "fileUpload" type="file" className="file_upload" />
                        </div>

                        <div className='container-content'>
                            <label id='name' className='label-text'>Issuer Name</label>
                            <input id='name' className = "text-input" placeholder="Enter Your Organization's Name"  aria-label='Issuer Name'>
                            </input>
                        </div>

                        <div className='container-content'>
                            <label id='websiteURL' className='label-text'>Website URL</label>
                            <input id = "websiteURL" className = "text-input" placeholder="Enter Your Organization's Website URL" >
                            </input>
                        </div>

                        <div className='form-subtitle'>Verify as Issuer</div>

                        <div className='container-content'>
                            <label id='GSTIN' className='label-text'>GSTIN <span className='label-text label-text-optional'>(optional)</span></label>
                            <div className='input-button-row'>
                                <input id="GSTIN" className = "text-input text-input-inline" placeholder="Enter Your Organization's GSTIN" />
                                <button className='register-button register-text-button'>Verify</button>
                            </div>
                            <div className='label-subtitle'>Enter GSTIN number to verify. You can do the verification later.</div>
                        </div>
                        <div className='container-content register-button-div'>
                            <button className='register-button'>
                                Register
                            </button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </>)
}