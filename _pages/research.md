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
    <p class="research-item__links"><strong>↳</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0377042721002375" target="_blank">JCAM 2021</a> · <a href="https://www.sciencedirect.com/science/article/pii/S0167839623000237" target="_blank">CAGD 2023</a></p>
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
    <p class="research-item__links"><strong>↳</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0167839622000176" target="_blank">CAGD 2022</a></p>
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
    <p class="research-item__links"><strong>↳</strong> <a href="https://doi.org/10.1016/j.camwa.2024.03.001" target="_blank">CAMWA 2024</a> · <a href="https://link.springer.com/article/10.1007/s11424-020-9370-y" target="_blank">JSSC 2021</a> · <a href="https://www.sciencedirect.com/science/article/pii/S0167839622000012" target="_blank">CAGD 2022</a> · <a href="https://link.springer.com/article/10.1007/s11424-022-1293-3" target="_blank">JSSC 2023</a> · <a href="https://doi.org/10.4208/jcm.2301-m2022-0116" target="_blank">JCM 2023</a> · <a href="https://doi.org/10.1016/j.cad.2024.103731" target="_blank">CAD 2024</a></p>
  </div>
</div>

<div class="research-item research-item--reverse">
  <figure class="research-item__fig">
    <img src="/images/research/research-solver.jpg" alt="Residual convergence of preconditioned Anderson acceleration versus Newton iteration for a parameterization PDE">
    <figcaption><span class="lang lang--en">Residual convergence: preconditioned Anderson acceleration vs Newton</span><span class="lang lang--zh">残差收敛：预处理 Anderson 加速 vs Newton 迭代</span></figcaption>
  </figure>
  <div class="research-item__body">
    <h2><span class="lang lang--en">Fast Solvers — Preconditioned Anderson Acceleration</span><span class="lang lang--zh">快速求解器 —— 预处理 Anderson 加速</span></h2>
    <p class="lang lang--en">The nonlinear PDEs behind high-quality parameterization can be slow and fragile to solve with Newton-type iteration. I introduced a <strong>preconditioned Anderson acceleration</strong> framework — with diagonal, block-diagonal and full-Jacobian preconditioners and a delayed-update strategy — that converges far faster and more robustly while avoiding expensive Newton solves.</p>
    <p class="lang lang--zh">高质量参数化背后的非线性 PDE 用 Newton 类迭代求解往往又慢又脆弱。我提出了一套<strong>预处理 Anderson 加速</strong>框架（含对角、块对角、全 Jacobian 预处理及延迟更新策略），在避免昂贵 Newton 求解的同时收敛更快、更稳健。</p>
    <p class="research-item__links"><strong>↳</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0167839623000237" target="_blank">CAGD 2023 (GMP Best Paper)</a></p>
  </div>
</div>

<div class="research-item">
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

<div class="research-item research-item--reverse">
  <figure class="research-item__fig">
    <img src="/images/research/barrier_patch.png" alt="Analysis-suitable structured B-spline mesh (parameterization) of the additive-manufacturing part">
    <video autoplay loop muted playsinline preload="metadata" poster="/images/research/research-am-poster.jpg" aria-label="Semi-analytical isogeometric thermal simulation of a metal additive-manufacturing part (temperature field over time)">
      <source src="/videos/research-am.mp4" type="video/mp4">
    </video>
    <figcaption><span class="lang lang--en">Analysis-suitable spline mesh of the part (top) and its semi-analytical IGA thermal field (bottom)</span><span class="lang lang--zh">零件的分析适用样条网格（上）与其半解析 IGA 温度场（下）</span></figcaption>
  </figure>
  <div class="research-item__body">
    <h2><span class="lang lang--en">Metal Additive Manufacturing</span><span class="lang lang--zh">金属增材制造</span></h2>
    <p class="lang lang--en">Thermal modelling of <strong>laser powder bed fusion (LPBF)</strong> is dominated by steep, fast-moving gradients that conventional FEM resolves only at prohibitive cost. I work on a <strong>semi-analytical isogeometric</strong> framework that splits the temperature field into an analytical point-source solution and a spline-based correction enforcing the boundary conditions — giving accurate part-scale thermal histories on complex CAD geometries with large speed-ups (up to 258×) over conventional FEM.</p>
    <p class="lang lang--zh">激光粉末床熔融（<strong>LPBF</strong>）的热建模充满陡峭、快速移动的温度梯度，传统有限元只能以高昂代价求解。我参与的<strong>半解析等几何</strong>框架将温度场分解为解析点源解与基于样条、施加边界条件的修正场——在复杂 CAD 几何上给出准确的零件级热历史，并较传统有限元最高提速 258 倍。</p>
    <p class="research-item__links"><strong>↳</strong> <a href="https://doi.org/10.1016/j.cma.2026.118992" target="_blank">CMAME 2026</a> · <a href="https://doi.org/10.1016/j.ijheatmasstransfer.2025.127059" target="_blank">Int. J. Heat &amp; Mass Transfer 2025</a></p>
  </div>
</div>

<h2><span class="lang lang--en">Emerging directions</span><span class="lang lang--zh">新兴方向</span></h2>
<p class="lang lang--en">I am extending these ideas to <strong>large-deformation fluid–structure interaction</strong> (recasting mesh motion as successive domain parameterization) and the <strong>isogeometric lattice Boltzmann method</strong> for flows over curved boundaries.</p>
<p class="lang lang--zh">我正将这些思想拓展到<strong>大变形流固耦合</strong>（将网格运动重构为连续的区域参数化）与面向曲边界流动的<strong>等几何格子玻尔兹曼方法</strong>。</p>
<p class="research-item__links"><strong>↳</strong> <a href="https://arxiv.org/abs/2604.27537" target="_blank">FSI (arXiv 2026)</a> · <a href="https://arxiv.org/abs/2509.11427" target="_blank">IGA-LBM (arXiv 2025)</a></p>

<p style="margin-top:1.6em;">
  <a href="/publications/"><span class="lang lang--en">→ See all publications</span><span class="lang lang--zh">→ 查看全部论文成果</span></a>
</p>
