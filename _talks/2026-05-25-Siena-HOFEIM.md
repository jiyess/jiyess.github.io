---
title: "Efficient Thermal Simulation in Metal Additive Manufacturing via Semi-Analytical Isogeometric Analysis"
collection: talks
type: "poster presentation"
permalink: /talks/2026-05-25-Siena/
venue: "High-Order Finite Element and Isogeometric Methods (HOFEIM)"
date: 2026-05-25
location: "Siena, Italy"
---

[Poster](../files/pdf/slides/2026-05-25-Siena/HOFEIM2026_poster.pdf),
[Slides](../files/pdf/slides/2026-05-25-Siena/poster_pitch.pdf),
[Photo1](../images/talks/2026-05-25-Siena/hofeim.jpg),
[Photo2](../images/talks/2026-05-25-Siena/pic2.jpg),
[Photo3](../images/talks/2026-05-25-Siena/pic3.jpg)

This poster presents a semi-analytical isogeometric framework for efficient thermal simulation in Laser Powder Bed Fusion (LPBF). The proposed method decomposes the temperature field into an analytical point-source solution, which captures the rapidly moving laser heat input, and a smooth numerical correction field, which enforces boundary conditions on realistic geometries. By discretizing the correction field with NURBS-based Isogeometric Analysis (IGA), the method avoids scan-wise remeshing and overcomes the limitations of classical image-source techniques for complex CAD geometries. Numerical examples demonstrate accurate temperature prediction on curved boundaries, thin-wall structures, and free-form parts, with substantial efficiency gains compared with conventional FEM. At matched accuracy, the method achieves CPU speed-ups of up to 80× over Abaqus C3D4 and 258× over Abaqus C3D20, highlighting its potential for high-fidelity and computationally efficient LPBF process simulation.