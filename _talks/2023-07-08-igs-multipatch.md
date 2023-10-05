---
title: "Multi-patch parameterization method for isogeometric analysis using singular structure of cross-field"
collection: talks
type: "Poster Presentation"
permalink: /talks/2023-07-08-igs-multiPatch
venue: "The International Geometry Summit 2023 (IGS’23)"
date: 2023-07-08
location: "Genova, Italy" 
---

[Abstract](../files/pdf/slides/2023-07-08-igs-MultiPatch/IGS2023_abstract.pdf), 
[Poster](../files/pdf/slides/2023-07-08-igs-MultiPatch/IGS2023_poster.pdf),
[Conference Link](https://igs2023.imati.cnr.it)

The cutting-edge numerical methodology of isogeometric analysis offers the potential to seamlessly integrate Computer-Aided Design and Computer-Aided Engineering, effectively bridging the gap between the two domains. Most Computer-Aided Design systems focus exclusively on the boundary representation of models during the design phase, whereas a spline-based mapping is essential in the analysis stage, commonly referred to as domain parameterization. However, generating analysis-suitable parameterizations from existing boundary representations continues to be a considerable challenge in the isogeometric design-through-analysis process, especially for computational domains featuring intricate geometries, such as high-genus cases. 

To tackle this challenge, we propose a cross-field-based multi-patch parameterization method for computational domains. Initially, we employ the boundary element method to solve vector field functions across the computational domain. Subsequently, we create a one-to-one mapping between the vector field and the cross-field, thereby obtaining the cross-field. By analyzing the singular structure of the cross-field, we ascertain the position information and topological connection relations of singularities and streamlines. Furthermore, we introduce a simple and effective technique for computing streamlines. 

We introduce a novel segmentation strategy for dividing the computational domain into several quadrilateral NURBS sub-patches. After establishing the multi-patch structure, we devise two techniques for generating analysis-suitable multi-patch parameterizations. The first technique expands upon the barrier function-based approach [ji et al. 2021](https://www.sciencedirect.com/science/article/pii/S0377042721002375), while the second technique yields smoother parameterizations by including the control points at the interfaces of the sub-patches within the optimization model.

Numerical experiments showcase the effectiveness and robustness of the proposed method, highlighting its potential to enhance the isogeometric analysis process.

Joint work with Yi Zhang and [Chun-Gang Zhu](http://faculty.dlut.edu.cn/zhu/zh_CN/index.htm). 

