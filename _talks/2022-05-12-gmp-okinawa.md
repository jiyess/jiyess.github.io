---
title: "Penalty function-based volumetric parameterization method for isogeometric analysis"
collection: talks
type: "Conference talk"
permalink: /talks/2022-05-12-gmp-okinawa
redirect_from:
  - /talks/2022-gmp-penalty
venue: "International Conference on Geometric Modeling and Processing (GMP 2022)"
date: 2022-05-12
location: "Online"
---

[Slides](/files/pdf/slides/2022-gmp-penalty/2022-gmp-penalty.pdf),
[Photo 1](/images/talks/2022-05-12-gmp-okinawa/photo-1.jpg),
[Photo 2](/images/talks/2022-05-12-gmp-okinawa/photo-2.jpg),
[Conference Link](https://indico.oist.jp/event/13/)

In isogeometric analysis, constructing bijective and low-distortion parameterizations is a fundamental task. Compared with the planar problem, the volumetric case is more challenging in terms of both robustness and efficiency. In this paper, we present a robust and efficient volumetric parameterization method based on the idea of penalty functions and the Jacobian regularization technique. The proposed method does not require a bijective initialization and thus avoids an extra foldover elimination step. The main contributions of this work are threefold. First, a new objective function that characterizes the volume distortion is established using the divergence theorem. Second, we employ a novel penalty function for the Jacobian regularization, and derive the full analytical gradient of the objective function to enhance the numerical stability of gradient-based optimization. Third, we develop a reduced numerical integration strategy to accelerate the new algorithm. Several numerical examples demonstrate that our method significantly outperforms competing state-of-the-art approaches in terms of both robustness and efficiency.

Keywords: **Isogeometric Analysis**, **Volumetric Parameterization**, **Penalty Function**, **Jacobian Regularization**, **Reduced Numerical Integration**
