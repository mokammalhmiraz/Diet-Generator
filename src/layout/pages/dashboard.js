import React, { useState } from "react";
import "./dashboard.css";
import meal1 from "../../assests/images/meal-list-1.png";
import meal2 from "../../assests/images/meal-list-2.png";
import meal3 from "../../assests/images/meal-list-3.png";
import meal4 from "../../assests/images/meal-list-4.png";

function Dashboard() {
    const [activePlan, setActivePlan] = useState(null);
    return (
        <>
            <div className="container">
                <h3>Meal Plan</h3>
                {/* Day Long Section */}
                <div className="meal">
                    <div className="day" onClick={() => setActivePlan(activePlan === "dayLong" ? null : "dayLong")}>
                        <div className="bg">
                            <h4>Day Long</h4>
                        </div>
                    </div>
                </div>
                {activePlan === "dayLong" && (
                    <div>
                    <h4>Day Long Meal Plan</h4>
                    <div className="row">
                        <div className="col-12">
                            <div className="meal-plan">
                                <div className="wrap">
                                    <div>
                                        <h5>Breakfast</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal1} alt=""/>
                                </div>
                                <div className="wrap">
                                    <div>
                                        <h5>Lunch</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal2} alt="" />
                                </div>
                                <div className="wrap">
                                    <div>
                                        <h5>Dinner</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal3} alt="" />
                                </div>
                                <div className="wrap">
                                    <div>
                                        <h5>Snacks</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                )}
                
                {/* Weekly Section */}
                <div className="weekly">
                    <div className="day" onClick={() => setActivePlan(activePlan === "weekly" ? null : "weekly")}>
                        <div className="bg">
                            <h4>Weekly</h4>
                        </div>
                    </div>
                </div>
                {activePlan === "weekly" && (
                    <div>
                    <h4>Weekly Meal Plan</h4>
                    <div className="row">
                        <div className="col-12">
                            <div className="meal-plan">
                                <div className="wrap">
                                    <div>
                                        <h5>Breakfast</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal1} alt=""/>
                                </div>
                                <div className="wrap">
                                    <div>
                                        <h5>Lunch</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal2} alt="" />
                                </div>
                                <div className="wrap">
                                    <div>
                                        <h5>Dinner</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal3} alt="" />
                                </div>
                                <div className="wrap">
                                    <div>
                                        <h5>Snacks</h5>
                                        <ul>
                                            <li>Oatmeal with furit and nuts for fiber and protain.</li>
                                            <li>Veggie omelet with whole-grain toast for balanced carbs and healthy fats.</li>
                                        </ul>
                                    </div>
                                    <img src={meal4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                )}
                
            </div>
        </>
    );
};

export default Dashboard;