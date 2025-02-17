import React from "react";
import Navbar from "./Navbar";
import laptop from "../images/grade.jpg"
import course from "../images/course_grades.jpg"
import assessment from "../images/assessment_grades.jpg"
import overall from "../images/overall_grades.jpg"
import quality from '../images/quality.jpg'
import grade from "../images/gradeA.jpeg"
import scheme from "../images/scheme.jpeg"
import track from "../images/track.jpg"
import analysis from "../images/analysis.jpg"
import Footer from './FooterPage'



const LandingPage = ()=>{
    return(

        <div>
            <Navbar/>
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
                <div className=" justify-center mt-40 ml-20">
                    <div className="text-5xl leading-13">
                        <p>Find missing grades <br/>for your courses.</p>
                    </div>
                    <div className="pt-5 text-lg">
                        <p>Manage your grades and stay organized.</p>
                    </div>
                    <div className="bg-black mt-20 ml-0" style={{ marginLeft:'0px '}}>                
                        <input type="none" style={{backgroundColor: 'black', width: '50%'}}/>
                    </div>
                </div>

                <div >
                    <img src={laptop} alt="girl typing" className="shadow-xl"
                    style={{height: '450px', width: '400px', marginTop:'100px', marginLeft:'100px', borderRadius:'5px'}}/>
                </div>
            </div>
            <div className="text-3xl text-center" style={{marginTop:'200px'}}>
                <p>Grade Categories</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-11  text-xl">
                <div className="ml-12 pr-1">
                    <img src={course} alt="girl typing"
                    style={{height: '300px', width: '245px', paddingRight: '0px', borderRadius:'5px'}}/>
                    <p className="mt-2">Course Grades</p>
                </div>
                <div className="pl-7">
                    <img src={assessment} alt="assessment on laptop"
                    style={{height: '300px', width: '245px', borderRadius:'5px' }}/>
                    <p className="mt-2">Assessment Grades</p>
                </div>
                <div className="pl-5">
                    <img src={laptop} alt="laptop"
                    style={{height: '300px', width: '245px', borderRadius:'5px'}}/>
                    <p className="mt-2">Assignment Grades</p>
                </div>
                <div className="mr-12 pl-5">
                    <img src={overall} alt="overall picture"
                    style={{height: '300px', width: '245px', borderRadius:'5px'}}/>
                    <p className="mt-2">Overall Grades</p>
                </div>
            </div>
            <div className="text-center text-3xl" style={{margin: '80px', marginTop:'150px'}}>
                <p>
                    Grades are crucial for academic success
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 mx-12">
                <div>
                    <p className="text-2xl pl-4">Featured</p>
                    <p className="pl-4 pt-2">Our grading system is fair and transparent</p>
                    <button className=" mt-16 mb-2  px-4 ml-4" style={{ border: '1px solid gray', height: '30px'}}>View all</button>
                </div>
                <div>
                    <img src={quality} alt="Accurate grades" style={{height: '250px', borderRadius:'5px'}}/>
                    <p className="pt-3">Even-handed and candid procedures in grading.</p>
                </div>
                <div>
                    <img src={scheme} alt="Good grading system" style={{height: '250px', width: '250px', borderRadius:'5px'}}/>
                    <p className="pt-3"></p>Our equitable and precise grading system ensures fairness.
                </div>
                <div>
                    <img src={grade} alt="Good scores" style={{height: '250px', width:'250px', borderRadius:'5px'}}/>
                    <p className="pt-3">Transparent, unprejudiced grading with clarity.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-7 mx-12 " style={{marginTop: "200px"}}>
                <div>
                    <img src={track} alt="Tracking effectively" style={{marginBottom: '20px', borderRadius:'5px'}}/>
                    <a href="" className="text-black text-lg" >How to track your grades effectively</a>
                </div>
                <div>
                    <img src={analysis} alt="Analysing grades" style={{marginBottom: '20px', borderRadius:'5px'}}/>
                    <a href="" className="text-black text-lg">How to analyze your grades and improve</a>
                </div>
            </div>
            <div className="text-2xl text-center" style={{marginTop: '100px'}}>
                <p>Get updates on your grades, Subscribe to our <br/> Newsletter</p>
            </div>
            <div style={{display: 'inline-block'}}>
                <div style={{marginTop: '35px'}}>
                    <input type="text" placeholder="Enter your email address here..." className="px-2 box-border-12" style={{marginLeft: '375px', border: '1px solid gray', height: '30px', width:'350px'}}/>
                
                    <button style={{ backgroundColor: 'gray', border: '1px solid gray', height: '30px', width:'100px'}}>Submit</button>
                </div>
            </div>
           <Footer/>
        </div>
        
    );
};

export default LandingPage;