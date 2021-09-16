import React from "react";
import '../css/preloader.css'

function PreLoader() {
    return (
        <>
            <div id="preloader">
                <div class="alignment">
                    <div class="v-align center-middle">
                        <div id="heart-on-center" class="spinner-animation">
                            <i class="de-icon-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default PreLoader