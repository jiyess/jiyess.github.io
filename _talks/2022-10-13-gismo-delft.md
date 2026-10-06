---
title: "Implementation of analysis-suitable parameterization construction using G+Smo"
collection: talks
type: "Workshop talk"
permalink: /talks/2022-10-13-gismo-delft
redirect_from:
  - /talks/2022-10-12-gismo-delft
  - /talks/2022-gismo-implementation
venue: "G+Smo Developer Days and preCICE Meeting 2022"
date: 2022-10-13
location: "Delft, Netherlands"
---

[Slides](/files/pdf/slides/2022-gismo-implementation/2022-gismo-implementation.pdf),
[Photo 1](/images/talks/2022-10-13-gismo-delft/talk-1.jpg),
[Photo 2](/images/talks/2022-10-13-gismo-delft/talk-2.jpg),
[Photo 3](/images/talks/2022-10-13-gismo-delft/angelos.jpg),
[Workshop Link](https://github.com/gismo/gismo/wiki/G-Smo-Developer-Days-2022-and-preCICE-meeting)

In this talk, I presented the implementation of our analysis-suitable parameterization methods in the open-source G+Smo library. The goal is to construct bijective spline parameterizations with low angle and area/volume distortion from a given boundary representation, formulated as an unconstrained optimization of MIPS-type angle distortion and area/volume distortion energies. I introduced the newly integrated HLBFGS optimizer and walked through the implementation of the barrier function-based method (foldover elimination followed by quality improvement) and the penalty function-based method, which untangles and minimizes distortion in a single optimization problem. I also compared timings of the G+Smo and MATLAB implementations, including an OpenMP-parallel version, and showed multi-patch, THB-spline and twin-screw rotary compressor examples.

Keywords: **Isogeometric Analysis**, **Analysis-Suitable Parameterization**, **G+Smo**, **Open-Source Software**
