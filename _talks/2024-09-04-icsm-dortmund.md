---
title: "Yet another structured mesh generator for screw machines simulations"
collection: talks
type: "Conference talk"
permalink: /talks/2024-09-04-icsm-dortmund
redirect_from:
  - /talks/2024-09-04-ICSM
venue: "International Conference on Screw Machines (ICSM 2024)"
date: 2024-09-04
location: "Dortmund, Germany"
---

[Slides](/files/pdf/slides/2024-09-04-ICSM/ICSM2024-slides.pdf),
[Photo](/images/talks/2024-09-04-icsm-dortmund/talk.jpg)

High-quality structured mesh generation is essential for the numerical simulation and design optimization of screw machines, particularly rotary twin-screw compressors used in high-pressure gas production. Existing meshing techniques often struggle to accurately capture their intricate geometries, limiting their application potential. This paper proposes a novel isogeometric analysis (IGA)-based mesh generation approach specifically tailored to twin-screw compressors. Our method leverages high-order B-spline parameterizations derived from boundary representations to enable efficient and precise mesh generation. A novel boundary correspondence technique using Schwarz–Christoffel mapping is introduced to further enhance mesh quality and preserve critical profile features. Additionally, we integrate elliptic grid generation techniques within the IGA framework, combined with a block-diagonal Jacobian-preconditioned Anderson acceleration algorithm, to efficiently solve the associated nonlinear systems. Built upon the open-source Geometry + Simulation Modules (G+Smo) library, this approach generates high-quality structured meshes that meet the stringent requirements of screw machine simulations, providing a viable alternative for design optimization.

Keywords: **Structured Mesh Generation**, **Twin-Screw Machines**, **Isogeometric Analysis**, **Schwarz–Christoffel Mapping**, **Anderson Acceleration**
