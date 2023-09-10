---
title: "Penalty function-based volumetric parameterization method for isogeometric analysis"
collection: talks
type: "Conference proceedings talk"
permalink: /talks/2022-gmp-penalty
venue: "International Conference on Geometric Modeling and Processing (GMP) 2022"
date: 2022-05-12
location: "Okinawa, Japan. (Online)" 
---

[Slides](../files/pdf/slides/2022-gmp-penalty/2022-gmp-penalty.pdf),
[Photo1](../images/talks/2022-05-12-gmp-penalty/GMP2022_p1.jpg),
[Photo2](../images/talks/2022-05-12-gmp-penalty/GMP2022_p2.jpg),
[Conference Link](https://indico.oist.jp/event/13/)

In isogeometric analysis, constructing bijective and low-distorted parameterizations is a fundamental task. Compared with the planar problem, the volumetric case is more challenging in both robustness and efficiency. In this paper, we present a robust and efficient volumetric parameterization method based on the idea of penalty functions and the Jacobian regularization technique. The proposed method does not require an already bijective initialization and thus avoids an extra foldover elimination step. The main contributions of this work lie in three aspects. First, a new objective function that characterizes the volume distortion is established using the Divergence Theorem. Second, we employ a novel penalty function for the Jacobian regularization. The full analytical gradient of the objective function is also deduced to enhance the numerical stability in gradient-based optimization. Third, we develop a reduced numerical integration strategy to accelerate the new algorithm. Several numerical examples demonstrate that our method significantly outperforms the current competitive approaches both in terms of robustness and efficiency.
