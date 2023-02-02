import '../../App.scss'
import { useEffect } from 'react'
import { color_nav } from '../../Navbar/NavbarManager'
import PageNames_ from '../../Navbar/pageNames'
import diss from './pdfs/DISS.pdf'
import NNpdf from './pdfs/Neural_notes.pdf'
import Laplace from './pdfs/NDLaplace.pdf'




const MathematicsPage = () => {
  useEffect(() => {
    color_nav(PageNames_.MATH)
  })

  return (

    <div className='main'>
      <div className='white-text margin-l20pt'>
        <h1>Mathematics</h1>
      </div>

      <div className='flex-col'>

        <div className='medium-container white-text thin-text scroll-vertical padding_l20 padding_r20'>
          <h2>From Geometry to Black Holes</h2>
          <div className='smaller-text abstract'>
            <h4>Abstract</h4>
            <p className='thin-text'>This project aims to give an insight into both the mathematics, and physics behind Einstein’s famous theory of general
              relativity. The first section in this document tackles the subject of differential geometry, starting with an introduction to
              manifolds and tensors, before moving on to define important concepts such as covariant differentiation, connections, and
              geodesics. We conclude the first section with a discussion about curvature, and derive the Riemann curvature tensor along
              with the Ricci tensor and scalar, which are used to define the Einstein tensor.
            </p>
            <p className='thin-text'>
              In the second section, we begin by discussing the famous equivalence principle, and reformulate Newtons first law, so that
              it is valid in curved space-time, at which point, the importance of geodesics will become apparent. Einsteins field equations
              are then derived by means of minimising the Einstein-Hilbert action, and relating the result back to Newtonian gravity.
              Section 2.5 - 2.7 then deals with perhaps the most famous consequence of the theory, black-holes.
            </p>
          </div>
          <a className='show_button' href={diss}>Show PDF</a>
        </div>


        <div className='medium-container white-text thin-text scroll-vertical padding_l20 padding_r20 margin_t40pt'>
          <h2>Notes on Feedforward Neural Networks</h2>
          <div className='smaller-text abstract'>
            <h4>Abstract</h4>
            <p className='thin-text'>
              This document came in to being while I was building a neural net framework in Python. The main reason for typing up these
              notes was because I was forever losing my handwritten notes! 
            </p>
          </div>
          <a className='show_button' href={NNpdf}>Show PDF</a>
        </div>          

        <div className='medium-container white-text thin-text scroll-vertical padding_l20 padding_r20 margin_t40pt'>
          <h2>A Solution to the N-dimensional Laplace Equation</h2>
          <div className='smaller-text abstract'>
            <h4>Abstract</h4>
            <p className='thin-text'>
              Boredem does crazy things to us humans. I completed this solution to the n-dimensional Laplace equation whilst working
              as a customer service agent at EE and was desperate for a challenge!
            </p>
          </div>
          <a className='show_button' href={Laplace}>Show PDF</a>

          
        </div>

      </div>


    </div>

  )
}

export default MathematicsPage