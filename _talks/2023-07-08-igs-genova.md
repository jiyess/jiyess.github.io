---
title: "Multi-patch parameterization method for isogeometric analysis using singular structure of cross-field"
collection: talks
type: "Poster presentation"
permalink: /talks/2023-07-08-igs-genova
redirect_from:
  - /talks/2023-07-08-igs-multiPatch
venue: "International Geometry Summit (IGS 2023)"
date: 2023-07-08
location: "Genoa, Italy"
---

[Abstract](/files/pdf/slides/2023-07-08-igs-MultiPatch/IGS2023_abstract.pdf),
[Poster](/files/pdf/slides/2023-07-08-igs-MultiPatch/IGS2023_poster.pdf),
[Conference Link](https://igs2023.imati.cnr.it)

The cutting-edge numerical methodology of isogeometric analysis offers the potential to seamlessly integrate computer-aided design (CAD) and computer-aided engineering (CAE), effectively bridging the gap between the two domains. Most CAD systems focus exclusively on the boundary representation of models during the design phase, whereas the analysis stage requires a spline-based mapping of the interior, commonly referred to as domain parameterization. However, generating analysis-suitable parameterizations from existing boundary representations remains a considerable challenge in the isogeometric design-through-analysis process, especially for computational domains with intricate geometries, such as high-genus cases.

To tackle this challenge, we propose a cross-field-based multi-patch parameterization method for computational domains. First, we employ the boundary element method to solve for vector field functions over the computational domain. Next, we construct a one-to-one mapping between the vector field and the cross-field, thereby obtaining the cross-field. By analyzing the singular structure of the cross-field, we determine the positions and topological connections of singularities and streamlines. Furthermore, we introduce a simple and effective technique for computing streamlines.

We introduce a novel segmentation strategy for dividing the computational domain into several quadrilateral NURBS sub-patches. After establishing the multi-patch structure, we devise two techniques for generating analysis-suitable multi-patch parameterizations. The first technique extends the barrier function-based approach of [Ji et al. 2021](https://www.sciencedirect.com/science/article/pii/S0377042721002375), while the second yields smoother parameterizations by including the control points at the interfaces of the sub-patches in the optimization model.

Numerical experiments demonstrate the effectiveness and robustness of the proposed method, highlighting its potential to enhance the isogeometric analysis process.

Joint work with Yi Zhang and [Chun-Gang Zhu](http://faculty.dlut.edu.cn/zhu/zh_CN/index.htm).

Keywords: **Isogeometric Analysis**, **Multi-Patch Parameterization**, **Cross-Field**, **Domain Segmentation**, **High-Genus Domains**
