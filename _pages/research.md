---
layout: archive
title: "Research"
title_zh: "研究"
permalink: /research/
author_profile: true
---

<p class="research-intro">
  <span class="lang lang--en">My research builds mathematically robust bridges from CAD geometry to simulation: high-quality spline parameterizations that let a single model be both designed and analysed, together with the fast, reliable methods that make this practical for complex and industrial problems.</span>
  <span class="lang lang--zh">我的研究致力于在 CAD 几何与仿真之间架起数学上稳健的桥梁：构造高质量的样条参数化，使同一套模型既可用于设计又可直接用于分析，并发展使之在复杂与工业问题中切实可行的快速、可靠方法。</span>
</p>

<div class="research-item">
  <figure class="research-item__fig">
    <img src="/images/research/research-asg-parameterization.jpg" alt="Scaled-Jacobian quality field of an analysis-suitable spline parameterization of a butterfly-shaped domain">
    <figcaption><span class="lang lang--en">Scaled-Jacobian quality of an analysis-suitable parameterization</span><span class="lang lang--zh">分析适用参数化的 Scaled-Jacobian 质量分布</span></figcaption>
  </figure>
  <div class="research-item__body">
    <h2><span class="lang lang--en">Analysis-Suitable Parameterization for IGA</span><span class="lang lang--zh">面向 IGA 的分析适用参数化</span></h2>
    <p class="lang lang--en">A bijective, high-quality map from a parameter domain to the physical geometry is the foundation of isogeometric analysis. I develop <strong>optimisation-based</strong> and <strong>PDE-based</strong> constructions that guarantee a strictly positive Jacobian (injectivity) and control element quality — so a single spline model serves both design and simulation, with no mesh conversion and no foldovers.</p>
    <p class="lang lang--zh">从参数域到物理几何的双射、高质量映射是等几何分析的基础。我发展了<strong>基于优化</strong>与<strong>基于 PDE</strong>的构造方法，保证 Jacobian 严格为正（单射性）并控制单元质量——使同一套样条模型同时服务于设计与仿真，无需网格转换、无翻转。</p>
    <p class="research-item__links"><strong>↳</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0167839623000237" target="_blank">CAGD 2023</a> · <a href="https://www.sciencedirect.com/science/article/pii/S0010448523002051" target="_blank">Computer-Aided Design 2024</a></p>
  </div>
</div>

<div class="research-item research-item--reverse">
  <figure class="research-item__fig">
    <img src="/images/research/research-volumetric.jpg" alt="Trivariate volumetric spline parameterization of a duck-shaped solid with quality colouring">
    <figcaption><span class="lang lang--en">Trivariate (volumetric) parameterization of a 3D solid</span><span class="lang lang--zh">三维实体的三变量（体）参数化</span></figcaption>
  </figure>
  <div class="research-item__body">
    <h2><span class="lang lang--en">Volumetric (Trivariate) Parameterization</span><span class="lang lang--zh">三维（体）参数化</span></h2>
    <p class="lang lang--en">Engineering parts are three-dimensional. I extend analysis-suitable parameterization to <strong>trivariate volumetric</strong> spline models, producing watertight, regular interiors for solids with non-trivial shape and topology — the geometric input that downstream 3D simulation actually needs.</p>
    <p class="lang lang--zh">工程部件是三维的。我将分析适用参数化拓展到<strong>三变量（体）</strong>样条模型，为形状与拓扑非平凡的实体生成无缝、正则的内部——这正是后续三维仿真真正需要的几何输入。</p>
  </div>
</div>

<div class="research-item">
  <figure class="research-item__fig">
    <img src="/images/research/research-multipatch.jpg" alt="Multi-patch decomposition of a complex domain into structured spline patches">
    <figcaption><span class="lang lang--en">Multi-patch decomposition of a complex domain</span><span class="lang lang--zh">复杂区域的多片分解</span></figcaption>
  </figure>
  <div class="research-item__body">
    <h2><span class="lang lang--en">Multi-Patch &amp; Multi-Sided Parameterization</span><span class="lang lang--zh">多片与多边参数化</span></h2>
    <p class="lang lang--en">Complex domains rarely map from a single square. I construct <strong>multi-patch</strong> and <strong>multi-sided</strong> parameterizations with consistent interfaces, including boundary-parameter matching with Schwarz–Christoffel tools, to assemble reliable IGA models of intricate geometries.</p>
    <p class="lang lang--zh">复杂区域很难由单个正方形映射得到。我构造具有一致交界的<strong>多片</strong>与<strong>多边</strong>参数化，并结合 Schwarz–Christoffel 工具进行边界参数匹配，从而拼装出复杂几何的可靠 IGA 模型。</p>
  </div>
</div>

<div class="research-item research-item--reverse">
  <figure class="research-item__fig">
    <img src="/images/research/research-twinscrew.jpg" alt="Structured spline mesh with quality field on the intermeshing rotors of a twin-screw machine">
    <figcaption><span class="lang lang--en">Structured spline mesh on intermeshing twin-screw rotors</span><span class="lang lang--zh">双螺杆啮合转子上的结构化样条网格</span></figcaption>
  </figure>
  <div class="research-item__body">
    <h2><span class="lang lang--en">Industrial Structured Meshing for Twin-Screw Machines</span><span class="lang lang--zh">双螺杆机械的工业结构化网格生成</span></h2>
    <p class="lang lang--en">With industry, I generate <strong>fast, robust structured spline meshes</strong> for the intermeshing rotors of twin-screw compressors and expanders — geometry that deforms continuously as the rotors turn. This work received the <strong>ICSM 2024 Best Paper Award</strong> and underpins the <strong>SplineMesh / Scorg™</strong> toolchain.</p>
    <p class="lang lang--zh">我与工业界合作，为双螺杆压缩机/膨胀机相互啮合的转子（随转动连续变形的几何）生成<strong>快速、稳健的结构化样条网格</strong>。该工作获 <strong>ICSM 2024 最佳论文奖</strong>，并支撑 <strong>SplineMesh / Scorg™</strong> 工具链。</p>
    <p class="research-item__links"><strong>↳</strong> <a href="https://iopscience.iop.org/article/10.1088/1757-899X/1322/1/012014" target="_blank">ICSM 2024</a> · <a href="https://doi.org/10.1007/s00366-024-02020-z" target="_blank">Engineering with Computers 2024</a></p>
  </div>
</div>

<h2><span class="lang lang--en">Solvers &amp; emerging directions</span><span class="lang lang--zh">求解器与新兴方向</span></h2>
<p class="lang lang--en">Underlying these constructions is a <strong>preconditioned Anderson acceleration</strong> scheme that makes the nonlinear parameterization solvers fast and robust. I am extending these ideas to <strong>large-deformation fluid–structure interaction</strong>, the <strong>isogeometric lattice Boltzmann method</strong>, and <strong>semi-analytical IGA for thermal simulation in metal additive manufacturing</strong> (up to 258× faster than conventional FEM on complex CAD geometries).</p>
<p class="lang lang--zh">支撑这些构造的是一种<strong>预处理 Anderson 加速</strong>格式，使非线性参数化求解器既快又稳。我正将这些思想拓展到<strong>大变形流固耦合</strong>、<strong>等几何格子玻尔兹曼方法</strong>，以及<strong>金属增材制造热仿真的半解析 IGA</strong>（在复杂 CAD 几何上最高较传统有限元提速 258 倍）。</p>

<p style="margin-top:1.6em;">
  <a href="/publications/"><span class="lang lang--en">→ See all publications</span><span class="lang lang--zh">→ 查看全部论文成果</span></a>
</p>
