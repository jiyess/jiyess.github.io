---
layout: archive
title: "Publications"
permalink: /publications/
description: Ye Ji's publications in reversed chronological order.
nav: true
nav_order: 1
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}", target="_blank">my Google Scholar profile</a>.</u>
{% endif %}

## Refereed Journal Papers

### 2024
---

- **Ye, Ji**, Matthias Möller, Ying-Ying Yu, & Chun-Gang Zhu. (2024). Boundary parameter matching for isogeometric analysis using Schwarz–Christoffel mapping. ***Engineering with Computers***, 1-19. [[**Full Article**]](https://doi.org/10.1007/s00366-024-02020-z)
  <details>
    <summary><strong>Abstract</strong></summary>
    Isogeometric analysis has brought a paradigm shift in integrating computational simulations with geometric designs across engineering disciplines. This technique necessitates analysis-suitable parameterization of physical domains to fully harness the synergy between Computer-Aided Design and Computer-Aided Engineering analyses. Existing methods often fix boundary parameters, leading to challenges in elongated geometries such as fluid channels and tubular reactors. This paper presents an innovative solution for the boundary parameter matching problem, specifically designed for analysis-suitable parameterizations. We employ a sophisticated Schwarz–Christoffel mapping technique, which is instrumental in computing boundary correspondences. A refined boundary curve reparameterization process complements this. Our dual-strategy approach maintains the geometric exactness and continuity of input physical domains, overcoming limitations often encountered with the existing reparameterization techniques. By employing our proposed boundary parameter matching method, we show that even a simple linear interpolation approach can effectively construct a satisfactory analysis-suitable parameterization. Our methodology offers significant improvements over traditional practices, enabling the generation of analysis-suitable and geometrically precise models, which is crucial for ensuring accurate simulation results. Numerical experiments show the capacity of the proposed method to enhance the quality and reliability of isogeometric analysis workflows.
  </details>

---

- Yi Zhang, **Ye Ji**, & Chun-Gang Zhu. (2024). Multi-patch parameterization method for isogeometric analysis using singular structure of cross-field. ***Computers & Mathematics with Applications***, 162, 61-78. [[**Full Article**]](https://doi.org/10.1016/j.camwa.2024.03.001)
  <details>
    <summary><strong>Abstract</strong></summary>
    Isogeometric analysis is an innovative numerical paradigm with the potential to bridge the gap between Computer-Aided Design and Computer-Aided Engineering. However, constructing analysis-suitable parameterizations from a given boundary representation remains a critical challenge in the isogeometric design-through-analysis pipeline, particularly for computational domains with complex geometries, such as high-genus cases. To tackle this issue, we propose a multi-patch parameterization method for computational domains grounded in the singular structure of cross-fields. Initially, the vector field functions over the computational domain are solved using the boundary element method. The cross-field is then obtained through the one-to-one mapping between the vector field and the cross-field. Subsequently, we acquire the position information and topological connection relations of singularities and streamlines by analyzing the singular structure of the cross-field. Moreover, we introduce a simple and effective method for computing streamlines. We propose a novel segmentation strategy to divide the computational domain into several quadrilateral NURBS sub-patches. Once the multi-patch structure is established, we develop two methods to construct analysis-suitable multi-patch parameterizations. The first method is a direct generalization of the barrier function-based approach, while the second method yields smoother parameterizations by incorporating the interface control points of sub-patches into the optimization model. Numerical experiments demonstrate the effectiveness and robustness of the proposed method.
  </details>

---

- Meng-Yun Wang, **Ye Ji**, Lin Lan & Chun-Gang Zhu. (2024). MS-GIFT: Multi-Sided Geometry-Independent Field ApproximaTion Approach for Isogeometric Analysis. ***Computer-Aided Design***, 173, 103731. [[**Full Article**]](https://doi.org/10.1016/j.cad.2024.103731) 
  <details>
    <summary><strong>Abstract</strong></summary>
    The Geometry-Independent Field approximaTion (GIFT) technique, an extension of isogeometric analysis (IGA), allows for separate spaces to parameterize the computational domain and approximate solution field. Based on the GIFT approach, this paper proposes a novel IGA methodology that incorporates toric surface patches for multi-sided geometry representation, while utilizing B-spline or truncated hierarchical B-spline (THB-spline) basis for analysis. By creating an appropriate bijection between the parametric domains of distinct bases for modeling and approximation, our method ensures smoothness within the computational domain and combines the compact support of B-splines or the local refinement potential of THB-splines, resulting in more efficient and precise solutions. To enhance the quality of parameterization and consequently boost the accuracy of downstream analysis, we suggest optimizing the composite toric parameterization. Numerical examples validate the effectiveness and superiority of our suggested approach.
  </details>

---

- Ying-Ying Yu, Xin Li, & **Ye Ji**. (2024). On Intersections of B-Spline Curves. Mathematics, 12(9), 1344. [[**Full Article**]](https://doi.org/10.3390/math12091344)
  <details>
    <summary><strong>Abstract</strong></summary>
    Bézier and B-spline curves are foundational tools for curve representation in computer graphics and computer-aided geometric design, with their intersection computation presenting a fundamental challenge in geometric modeling. This study introduces an innovative algorithm that quickly and effectively resolves intersections between Bézier and B-spline curves. The number of intersections between the two input curves within a specified region is initially determined by applying the resultant of a polynomial system and Sturm’s theorem. Subsequently, the potential region of the intersection is established through the utilization of the pseudo-curvature-based subdivision scheme and the bounding box detection technique. The projected Gauss-Newton method is ultimately employed to efficiently converge to the intersection. The robustness and efficiency of the proposed algorithm are demonstrated through numerical experiments, demonstrating a speedup of 3 to 150 times over traditional methods.
  </details>

---

- **Ye Ji** & Matthias Möller. (2024). Mesh Generation for Twin-Screw Compressors by Spline-Based Parameterization Using Preconditioned Anderson Acceleration. In: ***13th International Conference on Compressors and Their Systems***, 77-87. [[**Full Article**]](https://link-springer-com.tudelft.idm.oclc.org/chapter/10.1007/978-3-031-42663-6_7) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Constructing high-quality structured meshes is a crucial preprocessing step in the simulation-based analysis of positive displacement machines and, in particular, rotary twin-screw compressors. Instead of creating these meshes directly, we resort to the computational paradigm of IsoGeometric Analysis (IGA) that integrates geometric modeling and numerical simulations in a unified spline-based formalism. In this paper, we propose an efficient approach for generating high-order analysissuitable parameterizations of rotary twin-screw compressor geometries from their boundary representation adopting the concept of elliptic grid generation and applying the IGA formalism. As this approach involves the solution of nonlinear systems of equations, we speed up the computation by using a block-diagonal Jacobianpreconditioned Anderson acceleration algorithm. Our numerical results demonstrate the effectiveness and efficiency of the proposed workflow. The so-created parameterizations can be easily turned into high-quality structured meshes suitable for simulation-based compressor analysis.
  </details>

---

- Lin Lan, **Ye Ji**, Meng-Yun Wang & Chun-Gang Zhu. (2024). Full-LSPIA: A least-squares progressive-iterative approximation method with optimization of weights and knots for NURBS curves and surfaces. ***Computer-Aided Design***, 115303. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0010448523002051) 
  <details>
    <summary><strong>Abstract</strong></summary>
    The Least-Squares Progressive-Iterative Approximation (LSPIA) method offers a powerful and intuitive approach for data fitting. Non-Uniform Rational B-splines (NURBS) are a popular choice for approximation functions in data fitting, due to their robust capabilities in shape representation. However, a restriction of the traditional LSPIA application to NURBS is that it only iteratively adjusts control points to approximate the provided data, with weights and knots remaining static. To enhance fitting precision and overcome this constraint, we present Full-LSPIA, an innovative LSPIA method that jointly optimizes weights and knots alongside control points adjustments for superior NURBS curves and surfaces creation. We achieve this by constructing an objective function that incorporates control points, weights, and knots as variables, and solving the resultant optimization problem. Specifically, control points are adjusted using LSPIA, while weights and knots are optimized through the LBFGS method based on the analytical gradients of the objective function with respect to weights and knots. Additionally, we present a knot removal strategy known as Decremental Full-LSPIA. This strategy reduces the number of knots within a specified error tolerance, and determines optimal knot locations. The proposed Full-LSPIA and Decremental Full-LSPIA maximize the strengths of LSPIA, with numerical examples further highlighting the superior performance and effectiveness of these methods. Compared to the classical LSPIA, Full-LSPIA offers greater fitting accuracy for NURBS curves and surfaces while maintaining the same number of control points, and automatically determines suitable weights and knots. Moreover, Decremental Full-LSPIA yields fitting results with fewer knots while maintaining the same error tolerance.
  </details>

---

### 2023
---

- Ying-Ying Yu, **Ye Ji**, & Chun-Gang Zhu. (2023). Sufficient condition for injectivity of NURBS volumes by tangent cones. ***Journal of Computational and Applied Mathematics***, 432, 115303. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0377042723002479) 
  <details>
    <summary><strong>Abstract</strong></summary>
    NURBS method is the standard mathematical method for describing the shapes of curves/surfaces/volumes, and it is extensively used in computer-aided design, computer-aided manufacturing, and computer graphics. The injectivity of NURBS volumes means that they do not have self-intersections. Since the injectivity of parameterizations depend on the signs of their Jacobian functions, and the Jacobian of a NURBS volume is determined by the determinant of its tangent vectors in three directions, we first propose a method to compute the bounding vectors of the tangent cones of NURBS volume in this paper. Then the sufficient condition for the injectivity of NURBS volume is proposed. A checking algorithm is also presented. Some examples are given to verify the effectiveness of the algorithm.
  </details>

---

- **Ye Ji**, Ke-Wang Chen, Matthias Möller, & Cornelis Vuik. (2023). On an improved PDE-based elliptic parameterization method for isogeometric analysis using preconditioned Anderson acceleration. ***Computer Aided Geometric Design***, 102, 102191. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0167839623000237) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Constructing an analysis-suitable parameterization for the computational domain from its boundary representation plays a crucial role in the isogeometric design-through-analysis pipeline. PDE-based elliptic grid generation is an effective method for generating high-quality parameterizations with rapid convergence properties for the planar case. However, it may generate non-uniform grid lines, especially near the concave/convex parts of the boundary. In the present work, we introduce a novel scaled discretization of harmonic mappings in the Sobolev space $H^1$ to remit it. Analytical Jacobian matrices for the involved nonlinear equations are derived to accelerate the computation. To enhance the numerical stability and the speed of convergence, we propose a simple and yet effective preconditioned Anderson acceleration framework instead of using computationally expensive Newton-type iteration. Three preconditioning strategies are suggested, namely diagonal Jacobian, block-diagonal Jacobian, and full Jacobian. Furthermore, we discuss a delayed update strategy of the preconditioner, i.e., the preconditioner is updated every few steps to reduce the computational cost per iteration. Numerical experiments demonstrate the effectiveness and efficiency of our improved parameterization approach and the computational efficiency of our preconditioned Anderson acceleration scheme.
  </details>

---

- **Ye Ji**, Meng-Yun Wang, Ying-Ying Yu, & Chun-Gang Zhu. (2023) "Curvature-based r-adaptive isogeometric analysis with injectivity-preserving multi-sided domain parameterization." *Journal of Systems Science and Complexity*, 36(1), 53--76. [[**Full Article**]](https://link.springer.com/article/10.1007/s11424-022-1293-3) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Inspired by the r-refinement method in isogeometric analysis, in this paper, the authors propose a curvature-based r-adaptive isogeometric method for planar multi-sided computational domains parameterized by toric surface patches. The authors construct three absolute curvature metrics of isogeometric solution surface to characterize its gradient information, which is more straightforward and effective. The proposed method takes the internal weights as optimization variables and the resulting parameterization is analysis-suitable and injectivity-preserving with a theoretical guarantee. Several PDEs are solved over multi-sided computational domains parameterized by toric surface patches to demonstrate the effectiveness and efficiency of the proposed method.
  </details>

---

- Meng-Yun Wang, **Ye Ji**, & Chun-Gang Zhu. (2023). Degree elevation and knot insertion for generalized Bézier surfaces and their application to isogeometric analysis. ***Journal of Computational Mathematics***, TBA, TBA. (DOI: 10.4208/jcm.2301-m2022-0116)
  <details>
    <summary><strong>Abstract</strong></summary>
    Generalized B{\'e}zier (GB) surfaces proposed by V{\'a}rady et al. are a multi-sided general- ization of classical tensor product B{\'e}zier surfaces with a simple control structure and inherit most of the nice properties from B{\'e}zier surfaces. However, the original degree elevation changes the geometry of GB surfaces such that it is undesirable in many applications, e.g., isogeometric analysis (IGA). In this paper, we propose an improved degree elevation algo- rithm for GB surfaces keeping not only the geometry but also the parameter consistency. Based on the knot insertion of B-splines, a novel knot insertion algorithm for GB surface is also proposed. Then the proposed degree elevation and knot insertion algorithms are employed to increase the degree of freedom (DOF) for multi-sided domain parameterized by GB surface in IGA, corresponding to the traditional p-, h-, and k-refinements. Numerical examples demonstrate the effectiveness and superiority of our method.
  </details>

---

- Yu Wang, Ling-Zhi Jin, Hang Yang, Peng Hao, **Ye Ji**, & Bo Wang. (2023). Isogeometric-based mapping modeling and buckling analysis of stiffened panels. ***Thin-Walled Structures***, 186, 110676. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0263823123001544) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Modeling and analysis of stiffened panels are two key technologies in the design of aerospace thin-walled structures. For the stiffened panels with complex geometry, classical finite element analysis (FEA) and conventional isogeometric analysis (IGA) based on explicit geometry usually require time-consuming and labor-intensive geometric processing, and additional coupling matrices to be ready for analysis. In this study, a new method for modeling and buckling analysis of stiffened panels is proposed, which provides a more efficient and simpler way. During the modeling process, the stiffeners are treated as curves on surfaces, which is not explicitly defined using the control-point-based representation of curves, but implicitly defined using parameter curves in the parametric space of the surface. Mapping modeling provides more accurate geometric description and transfer the complex modeling problems (three-dimensional space) of stiffeners on free-form surface into simple modeling problems in the regular parametric space (two-dimensional space). During the buckling analysis process, a new mapped stiffener element based on mapping modeling is proposed, which can model the section of the eccentric stiffener without changing the geometry. The precise normal information of the Non-Uniform Rational B-Splines (NURBS) surface can ensure that the stiffeners are perpendicular to the skin. In addition, the coupling of the stiffener and the skin is automatic, without any additional coupling matrix. This buckling analysis framework realizes the complete integration of modeling and analysis. Furthermore, for the stiffened panels with cutouts, the trimmed surface analysis (TSA) method is extended to be used for the numerical integration of the trimmed stiffeners, which means that no additional geometric process is required. Finally, four numerical examples of different types of stiffened panels are constructed, involving metal, trimmed surface, classical grid-stiffener, free-form surface, variable-stiffness composites, and curvilinear grid-stiffener. Several numerical examples of static and buckling analysis of stiffened panels with high fidelity demonstrate the effectiveness of the proposed framework.
  </details>

---

### 2022

- **Ye Ji**, Meng-Yun Wang, Yu Wang, & Chun-Gang Zhu. (2022) "Curvature-based r-adaptive planar NURBS parameterization method for isogeometric analysis using bi-level approach." *Computer-Aided Design*, 150, 103305. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0010448522000756) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Localized and anisotropic features extensively exist in various physical phenomena. The present work focuses on the r-adaptive parameterization technique for isogeometric analysis (IGA), which aims to acquire higher numerical accuracy while keeping the degrees of freedom constant. The principal feature is utilizing the so-called absolute principal curvature of the IGA solution surfaces to characterize numerical errors instead of posteriori error estimations, which establishes the relation between analysis results and geometric quantity. The bijectivity is a fundamental requirement for analysis-suitable parameterization. With the cooperation of a minor regularization and common line search criteria, the proposed method guarantees the bijectivity of the resulting parameterizations. The bi-level approach with two refinement levels of the same geometry is employed: a coarse level (design model) to update the parameterization and a fine level (analysis model) to perform the isogeometric simulation. Moreover, we develop several detailed algorithms for explaining the sensitivity propagation from the design model to the analysis model and analytically computing the sensitivity, which allows accurate calculation of sensitivity and enhances the robustness during a gradient-based optimization. Several examples and comparisons are presented to demonstrate the effectiveness and efficiency of the proposed method. As an application, we apply the proposed method to a two-dimensional linear heat transfer problem with a moving Gaussian heat source, which is a simplified model for the additive manufacturing application. The proposed r-adaptive technique effectively captures the thermal history of the problem.
  </details>

---

- **Ye Ji**, Meng-Yun Wang, Mao-Dong Pan, Yi Zhang, & Chun-Gang Zhu. (2022) "Penalty function-based volumetric parameterization method for isogeometric analysis." *Computer Aided Geometric Design*, 94, 102081. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0167839622000176) 
  <details>
    <summary><strong>Abstract</strong></summary>
    In isogeometric analysis, constructing bijective and low-distorted parameterizations is a fundamental task. Compared with the planar problem, the volumetric case is more challenging in both robustness and efficiency. In this paper, we present a robust and efficient volumetric parameterization method based on the idea of penalty functions and the Jacobian regularization technique. The proposed method does not require an already bijective initialization and thus avoids an extra foldover elimination step. The main contributions of this work lie in three aspects. First, a new objective function that characterizes the volume distortion is established using the Divergence Theorem. Second, we employ a novel penalty function for the Jacobian regularization. The full analytical gradient of the objective function is also deduced to enhance the numerical stability in gradient-based optimization. Third, we develop a reduced numerical integration strategy to accelerate the new algorithm. Several numerical examples demonstrate that our method significantly outperforms the current competitive approaches both in terms of robustness and efficiency.
  </details>

---

- **Ye Ji**, Jing-Gai Li, Ying-Ying Yu, & Chun-Gang Zhu. (2022) "h-Refinement method for toric parameterization of planar multi-sided computational domain in isogeometric analysis." *Computer Aided Geometric Design*, 93, 102065. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0167839622000012) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Toric surface patches are a class of multi-sided surface patches that can represent multi-sided domains without mesh degeneration. In this paper, we propose an improved subdivision algorithm for toric surface patches, which subdivides an N-sided toric surface patch into N rational tensor product B{\'e}zier surface patches. By the proposed subdivision algorithm, a $C^k$-continuous spline surface composed of piecewise toric surface patches is subdivided into a set of rational tensor product B{\'e}zier surface patches with $G^k$-continuity. Additionally, after subdivision, toric surface patches are compatible with CAD systems. Combining the subdivision algorithm with the classical knot insertion algorithm of non-uniform rational B-splines, we develop a novel h-refinement scheme for isogeometric analysis with planar toric parameterizations. Several numerical examples are given to demonstrate the effectiveness and numerical stability of the presented method.
  </details>

---

### 2021

- **Ye Ji**, Ying-Ying Yu, Meng-Yun Wang, & Chun-Gang Zhu. (2021). "Constructing high-quality planar NURBS parameterization for isogeometric analysis by adjustment control points and weights." *Journal of Computational and Applied Mathematics*, 396, 113615. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0377042721002375) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Parameterization of computational domains is a crucial step in isogeometric analysis (IGA). Non-Uniform Rational B-Spline (NURBS) is a standard tool in the CAD/CAM industry due to its powerful capability for shape representation. In this paper, we propose several sufficient conditions and a necessary condition for injective NURBS parameterizations of computational domains, taking into account both the control points and weights. Based on these conditions, an algorithm for the injectivity checking of NURBS parameterization is proposed. By taking both the internal control points and weights as optimization variables, we present an effective and robust approach for parameterizing planar computational domains. With the internal control points and weights updating alternately, the resulting parameterization is constructed by solving an unconstrained optimization problem whose objective function is a weighted sum of corrected Winslow functional and uniformity functional. Finally, the proposed checking algorithm is applied to verify the injectivity of the resulting parameterizations. Numerical examples demonstrate the effectiveness and robustness of the proposed method and show superior parameterization quality performance over the state-of-the-art approaches.
  </details>

---

- Ying-Ying Yu, **Ye Ji**, Jing-Gai Li, & Chun-Gang Zhu. (2021). "Conditions for injectivity of toric volumes with arbitrary positive weights." *Computers & Graphics*, 97, 88--98. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0097849321000686) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Parameterizations, which map parametric domains into certain domains, are widely used in computer aided design, computer aided geometric design, computer graphics, isogeometric analysis, and related fields. The parameterizations of curves, surfaces, and volumes are injective means that they do not have self-intersections. A 3D toric volume is defined via a set of 3D control points with weights that correspond to a set of finite 3D lattice points. Rational tensor product or tetrahedral B{\'e}zier volumes are special cases of toric volumes. In this paper, we proved that a toric volume is injective for any positive weights if and only if the lattice points set and control points set are compatible. An algorithm is also presented for checking the compatibility of the two sets by the mixed product of three vectors. Some examples illustrate the effectiveness of the proposed method. Moreover, we improve the algorithm based on the properties and results of clean and empty tetrahedrons in combinatorics.
  </details>

---

- Jing-Gai Li, **Ye Ji**, & Chun-Gang Zhu. (2021). "De Casteljau algorithm and degree elevation of toric surface patches." *Journal of Systems Science and Complexity*, 34(1), 21--46. [[**Full Article**]](https://link.springer.com/article/10.1007/s11424-020-9370-y) 
  <details>
    <summary><strong>Abstract</strong></summary>
    De Casteljau algorithm and degree elevation of B{\'e}zier and NURBS curves/surfaces are two important techniques in computer aided geometric design. This paper presents the de Casteljau algorithm and degree elevation of toric surface patches, which include tensor product and triangular rational B{\'e}zier surfaces as special cases. Some representative examples of toric surface patches with common shapes are illustrated to verify these two algorithms. Moreover, the authors also apply the degree elevation of toric surface patches to isogeometric analysis. And two more examples show the effectiveness of proposed method.
  </details>

---

### 2020

- Xue-Feng Zhu, **Ye Ji**, Chun-Gang Zhu, Ping Hu, & Zheng-Dong Ma. (2020). "Isogeometric analysis for trimmed CAD surfaces using multi-sided toric surface patches." *Computer Aided Geometric Design*, 79, 101847. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S0167839620300340) 
  <details>
    <summary><strong>Abstract</strong></summary>
    We propose a new isogeometric method using Toric surface patches for trimmed CAD planar surfaces. This method converts each trimmed spline element into a Toric surface patch with conforming boundary representation and converts each non-trimmed spline element into a B{\'e}zier element. Because the Toric surface patches are a multi-sided generalization of classical B{\'e}zier surface patches, all trimmed and non-trimmed elements of a trimmed CAD surface have a unified geometric representation using Toric surface patches. Toric surface patches share the advantages of isogeometric continuum elements in that they can exactly model the geometry and can be easily implemented in standard finite-element code architectures. Several numerical examples are used to demonstrate the reliability of the proposed method.
  </details>

---

- Ying-Ying Yu, **Ye Ji**, & Chun-Gang Zhu. (2020). "An improved algorithm for checking the injectivity of 2D toric surface patches." *Computers & Mathematics with Applications*, 79(10), 2973--2986. [[**Full Article**]](https://www.sciencedirect.com/science/article/pii/S089812212030002X) 
  <details>
    <summary><strong>Abstract</strong></summary>
    Injective parametrizations are widely used both in theory and in applications. The injectivity of parameteric curves and surfaces means that there are no self-intersections. Toric surface patch is defined by a set of integer lattice points and corresponding control points and weights, which includes rational tensor product and triangle Bézier patches as special cases. In 2011, Sottile and Zhu presented a geometric method to check the injectivity of 2D toric surface patches. In this paper, we present an improved algorithm of their method. The complexity of the improved algorithm is reduced from $O(n^3)$ to $O(n^2)$, where $n = \# (A)$. Some examples are shown to illustrate the effectiveness of our algorithm. Moreover, the algorithm is also applied to check the injectivity of parameterization in isogeometric analysis.
  </details>

--- 

## Refereed Conference Papers




