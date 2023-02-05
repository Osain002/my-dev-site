
import diss from './pdfs/DISS.pdf'
import NNpdf from './pdfs/Neural_notes.pdf'
import Laplace from './pdfs/NDLaplace.pdf'



const Projects = [
  {
    Title: "From Geometry to Black Holes",
    abstract: `<p className='thin-text'>This project aims to give an insight into both the mathematics, and physics behind Einstein’s famous theory of general
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
            </p>`,
    pdf: diss,
    id: "proj1",
  },

  {
    Title: "Notes on Feedforward Neural Networks",
    abstract: `This document came in to being while I was building a neural net framework in Python. The main reason for typing up these
              notes was because I was forever losing my handwritten notes!`,
    pdf: NNpdf,
    id: "proj2",
  },

  {
    Title: "A Solution to the N-dimensional Laplace Equation",
    abstract: `Boredem does crazy things to us humans. I completed this solution to the n-dimensional Laplace equation whilst working
    as a customer service agent at EE and was desperate for a challenge!`,
    pdf: Laplace,
    id: "proj3",
  }
]


export default Projects