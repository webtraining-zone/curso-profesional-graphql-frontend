import React, {Fragment} from 'react';

class Home extends React.Component {

  render() {
    return (
        <Fragment>
          <section className="b-image-container">
            <div className="container">

              <div className="row">
                <div className="col-12 offset-sm-3 col-sm-6 offset-md-2 col-md-8">

                  <img src="/static/images/learning.png" alt="Learning"
                       className="text-center img-fluid"/>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="alert alert-danger">Esta aplicación es el resultado de
                    nuestro <a
                        href="https://webtraining.zone/cursos/curso-de-creacion-de-apis-con-graphql-y-nodejs/"
                        target="_blank" rel="noopener noreferrer">Curso de Creación de APIs con
                      GraphQL y Node.js</a>, si te gustaría aprender cómo crearla completamente
                    desde cero, te
                    invitamos a <a
                        href="https://webtraining.zone/aportacion/curso-de-creacion-de-apis-con-graphql-y-nodejs/1"
                        target="_blank" rel="noopener noreferrer">adquirir este curso en este
                      enlace</a>.
                  </div>
                  <div className="embed-responsive embed-responsive-16by9 mb-5">
                    <iframe
                        src="https://player.vimeo.com/video/305567763?title=0&app_id=122963"
                        width="640"
                        height="360" frameBorder="0" allowFullScreen=""
                        className="embed-responsive-item mb -5"></iframe>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <footer className="b-footer mb-5">Created with ❤️ by&nbsp;
                    <a href="https://webtraining.zone" target="_blank">Webtraining</a>. Images are
                    proprietary of their
                    corresponding publishers, books in this demo are just displayed as examples
                    and for academic purposes strictly.
                  </footer>
                </div>
              </div>

            </div>
          </section>

        </Fragment>);
  }
}

export default Home;
