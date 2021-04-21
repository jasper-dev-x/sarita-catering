import React from "react";

export default function AboutPage() {

    return (
        <div className="d-flex flex-fill justify-content-center px-3 py-3 pb-5 bg-warning user-select-none">
            <div className="align-self-center card border-warning px-md-5" style={ { borderWidth: 3, borderRadius: 20 } }>
                <div className="card-body">
                    <h5 className="card-title text-center mb-3" >
                        <span className="display-5 txt fw-bold">Satisfying One Taste Bud at a Time . . .</span>
                    </h5>
                    <hr className="bg-dark"></hr>

                    <div className="card-text lead px-1">
                        <p>
                            Chef Sarita is the founder and owner of <span className="txt">Sarita Catering</span> LLC.
                        The kitchen is the place where shes gets to explore and bring to life amazing dishes for any
                        events or themes, all while enjoying every moment of it. Chef Sarita always had a passion for
                        cooking since she was a child helping her grandmother make iconic Puerto Rican cuisine. Dishes
                        like Rellenos de Papa, Sorullos, Limber de Coco and Arroz con Dulce. Her passion for the craft
                        has only grown over the years.
                        </p>
                        <hr className="bg-warning"></hr>
                        <p>
                            She decided to turn her passion into a career and <span className="txt">Sarita Catering</span> was
                        born. After some time cooking from her own kitchen she realized it was time to take a leap of faith and
                        take <span className="txt">Sarita Catering</span> to the next level. She attended and graduated from
                        <span className="fst-italic"> International Culinary Center</span> with a degree in
                        <span className="fst-italic"> Professional Culinary Arts</span>. Not only is she
                        <span className="fst-italic"> Serv Safe Certified</span> but she had the plessure of working at the
                        <span className="fst-italic"> Mercer Kitchen </span> in NYC.
                        </p>
                        <hr className="bg-warning"></hr>
                        <p>
                            She also has had the pleasure to cook for some people you might know, Marc Jacobs, Jada &amp; Jaden Smith,
                            Kim Kardashian, Maluma . . . You get the idea!
                        Book <span className="txt">Sarita Catering</span> LLC. to taste the love Chef Sarita puts into her craft.
                        Cooking isn't just a job or a hobby or a way to eat . . . its an art.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}