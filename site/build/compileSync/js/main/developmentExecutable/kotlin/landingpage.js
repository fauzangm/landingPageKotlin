(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kobweb-kobweb-core.js', './kobweb-kobweb-silk.js', './androidx-runtime.js', './html-internal-html-core-runtime.js', './kobweb-kobweb-silk-widgets.js', './html-html-core.js', './kobweb-kobweb-compose.js', './kobweb-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kobweb-kobweb-core.js'), require('./kobweb-kobweb-silk.js'), require('./androidx-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-kobweb-silk-widgets.js'), require('./html-html-core.js'), require('./kobweb-kobweb-compose.js'), require('./kobweb-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'landingpage'.");
    }
    if (typeof this['kobweb-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'kobweb-kobweb-core' was not found. Please, check whether 'kobweb-kobweb-core' is loaded prior to 'landingpage'.");
    }
    if (typeof this['kobweb-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'kobweb-kobweb-silk' was not found. Please, check whether 'kobweb-kobweb-silk' is loaded prior to 'landingpage'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'landingpage'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'landingpage'.");
    }
    if (typeof this['kobweb-kobweb-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'kobweb-kobweb-silk-widgets' was not found. Please, check whether 'kobweb-kobweb-silk-widgets' is loaded prior to 'landingpage'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'landingpage'.");
    }
    if (typeof this['kobweb-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'kobweb-kobweb-compose' was not found. Please, check whether 'kobweb-kobweb-compose' is loaded prior to 'landingpage'.");
    }
    if (typeof this['kobweb-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'landingpage'. Its dependency 'kobweb-compose-html-ext' was not found. Please, check whether 'kobweb-compose-html-ext' is loaded prior to 'landingpage'.");
    }
    root.landingpage = factory(typeof landingpage === 'undefined' ? {} : landingpage, this['kotlin-kotlin-stdlib-js-ir'], this['kobweb-kobweb-core'], this['kobweb-kobweb-silk'], this['androidx-runtime'], this['html-internal-html-core-runtime'], this['kobweb-kobweb-silk-widgets'], this['html-html-core'], this['kobweb-kobweb-compose'], this['kobweb-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_kobweb_silk_widgets, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.yd;
  var Unit_getInstance = kotlin_kotlin.$_$.e4;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_initSilkHook = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.zb;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.hd;
  var isObject = kotlin_kotlin.$_$.ea;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.f;
  var protoOf = kotlin_kotlin.$_$.qa;
  var objectMeta = kotlin_kotlin.$_$.pa;
  var VOID = kotlin_kotlin.$_$.ne;
  var setMetadataFor = kotlin_kotlin.$_$.ra;
  var removeClass = kotlin_kotlin.$_$.me;
  var hasClass = kotlin_kotlin.$_$.le;
  var toString = kotlin_kotlin.$_$.he;
  var toInt = kotlin_kotlin.$_$.lc;
  var charSequenceLength = kotlin_kotlin.$_$.g9;
  var toBoolean = kotlin_kotlin.$_$.jc;
  var isBlank = kotlin_kotlin.$_$.tb;
  var removeSuffix = kotlin_kotlin.$_$.ac;
  var get_AppGlobalsLocal = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var to = kotlin_kotlin.$_$.ie;
  var mapOf = kotlin_kotlin.$_$.a7;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.d;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.d;
  var toModifier$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.e;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.j8;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Surface$composable = kotlin_com_varabyte_kobweb_kobweb_silk_widgets.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Image$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var take = kotlin_kotlin.$_$.q7;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.d8;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Link$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.b;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.b8;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var THROW_ISE = kotlin_kotlin.$_$.id;
  var Enum = kotlin_kotlin.$_$.wc;
  var classMeta = kotlin_kotlin.$_$.h9;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var TopCenter_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.e8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$HeaderKt, 'ComposableSingletons$HeaderKt', objectMeta);
  setMetadataFor(SectionModel, 'SectionModel', classMeta, Enum);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(ComposableSingletons$MainSectionKt, 'ComposableSingletons$MainSectionKt', objectMeta);
  setMetadataFor(Constant, 'Constant', objectMeta);
  setMetadataFor(Image, 'Image', objectMeta);
  setMetadataFor(Res, 'Res', objectMeta);
  setMetadataFor(Theme, 'Theme', classMeta, Enum);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    var tmp$ret$1;
    // Inline function 'org.w3c.dom.get' call
    var tmp0_get = status.children;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_get;
    tmp$ret$1 = tmp$ret$0[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    var tmp$ret$3;
    // Inline function 'org.w3c.dom.get' call
    var tmp1_get = status.children;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_get;
    tmp$ret$3 = tmp$ret$2[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    var tmp$ret$5;
    // Inline function 'org.w3c.dom.get' call
    var tmp2_get = status.children;
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = tmp2_get;
    tmp$ret$5 = tmp$ret$4[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    var tmp$ret$6;
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    tmp$ret$6 = o;
    var eventSource = new EventSource('/api/kobweb-status', tmp$ret$6);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_rg5mft_k$(true);
    Companion_getInstance().set_svddio_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_v74gir_k$(main$lambda_0);
    set_initSilkHook(main$lambda_1);
    router.navigateTo$default_mld8fs_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable$composable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:86)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1049063675, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:113)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1157688605, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it, $dirty));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      renderWithDeferred$composable(tmp$ret$6, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1157688605, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:113)');
        }
        $it($composer_0, 14 & $$dirty);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1049063675, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.text.isNotEmpty' call
        var tmp0_isNotEmpty = $status.className;
        tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
        if (tmp$ret$0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotBlank' call
      tmp$ret$0 = !isBlank(text);
      if (tmp$ret$0) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$composable$default_hbww1s_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_e5hf00_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    updateTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1432601359, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (main.kt:112)');
        }
        $router.renderActivePage$composable_ebhbpl_k$(ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1953125703, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:112)');
        }
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1432601359, true, main$lambda$lambda$lambda($router));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        MyApp$composable(tmp$ret$6, $composer_0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:109)');
        }
        var tmp_0 = [get_AppGlobalsLocal().provides_3e53yf_k$(mapOf(to('title', 'LandingPage')))];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'main.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1953125703, true, main$lambda$lambda($router));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function updateTheme(ctx) {
  }
  function MyApp(content) {
    illegalDecoyCallException('MyApp');
  }
  function MyApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-649409500);
    sourceInformation($composer_0, 'C(MyApp$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-649409500, $dirty, -1, 'com.eduside.landingpage.MyApp$composable (MyApp.kt:21)');
      }
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'com.eduside.landingpage.MyApp$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 727832289, true, MyApp$composable$lambda(content, $dirty));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'com.eduside.landingpage.MyApp$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      SilkApp$composable(tmp$ret$6, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MyApp$composable$lambda_0(content, $changed));
    }
  }
  function MyApp$composable$lambda$lambda($content, $$dirty) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(409320327, $changed, -1, 'com.eduside.landingpage.MyApp$composable.<anonymous>.<anonymous> (MyApp.kt:23)');
        }
        $content($composer_0, 14 & $$dirty);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function MyApp$composable$lambda($content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(727832289, $changed, -1, 'com.eduside.landingpage.MyApp$composable.<anonymous> (MyApp.kt:22)');
        }
        var tmp_0 = minHeight(toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100));
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'com.eduside.landingpage.MyApp$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 409320327, true, MyApp$composable$lambda$lambda($content, $$dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.eduside.landingpage.MyApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        Surface$composable(tmp_0, null, null, null, null, tmp$ret$6, $composer_0, 196608, 30);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function MyApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Header() {
    illegalDecoyCallException('Header');
  }
  function LeftSide() {
    illegalDecoyCallException('LeftSide');
  }
  function RightSide() {
    illegalDecoyCallException('RightSide');
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(906640361, $changed, -1, 'com.eduside.landingpage.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous> (Header.kt:26)');
      }
      LeftSide$composable($composer_0, 0);
      RightSide$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_2$lambda_derfuo($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1963172122, $changed, -1, 'com.eduside.landingpage.components.ComposableSingletons$HeaderKt.lambda-2.<anonymous> (Header.kt:34)');
      }
      var tmp = Image_getInstance().get_logo_wopywk_k$();
      Image$composable(tmp, 'Logo Image', null, false, null, $composer_0, 54, 28);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_3$lambda_ssq529($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(930673529, $changed, -1, 'com.eduside.landingpage.components.ComposableSingletons$HeaderKt.lambda-3.<anonymous> (Header.kt:51)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = take(values(), 6);
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.eduside.landingpage.components.ComposableSingletons$HeaderKt.lambda-3.<anonymous>.<anonymous>' call
        var tmp0_modifier = fontWeight(fontSize(fontFamily(padding(Companion_getInstance_1(), VOID, get_px(30)), [Constant_getInstance().get_FONT_FAMILIY_o3ee5e_k$()]), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$());
        var tmp1_path = element.get_path_wos8ry_k$();
        var tmp2_text = element.get_tittle_jyr6rb_k$();
        Link$composable(tmp1_path, tmp2_text, tmp0_modifier, null, null, null, false, null, $composer_0, 0, 248);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(906640361, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1963172122, false, ComposableSingletons$HeaderKt$lambda_2$lambda_derfuo));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(930673529, false, ComposableSingletons$HeaderKt$lambda_3$lambda_ssq529));
  }
  protoOf(ComposableSingletons$HeaderKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$HeaderKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$HeaderKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$HeaderKt_instance;
  function ComposableSingletons$HeaderKt_getInstance() {
    if (ComposableSingletons$HeaderKt_instance == null)
      new ComposableSingletons$HeaderKt();
    return ComposableSingletons$HeaderKt_instance;
  }
  function Header$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1342929231);
    sourceInformation($composer_0, 'C(Header$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1342929231, $changed, -1, 'com.eduside.landingpage.components.Header$composable (Header.kt:19)');
      }
      var tmp = padding_0(fillMaxWidth(Companion_getInstance_1(), get_percent(80)), get_px(50));
      var tmp_0 = SpaceBetween_getInstance();
      var tmp_1 = CenterVertically_getInstance();
      Row$composable(tmp, tmp_0, tmp_1, null, ComposableSingletons$HeaderKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 25008, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Header$composable$lambda($changed));
    }
  }
  function LeftSide$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1971265024);
    sourceInformation($composer_0, 'C(LeftSide$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1971265024, $changed, -1, 'com.eduside.landingpage.components.LeftSide$composable (Header.kt:33)');
      }
      Row$composable(null, null, null, null, ComposableSingletons$HeaderKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 15);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(LeftSide$composable$lambda($changed));
    }
  }
  function RightSide$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1671117871);
    sourceInformation($composer_0, 'C(RightSide$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1671117871, $changed, -1, 'com.eduside.landingpage.components.RightSide$composable (Header.kt:43)');
      }
      var tmp = padding_1(backgroundColor(borderRadius(fillMaxWidth(Companion_getInstance_1()), get_px(50)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), get_px(20));
      var tmp_0 = End_getInstance();
      Row$composable(tmp, tmp_0, null, null, ComposableSingletons$HeaderKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24624, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(RightSide$composable$lambda($changed));
    }
  }
  function Header$composable$lambda($$changed) {
    return function ($composer, $force) {
      Header$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LeftSide$composable$lambda($$changed) {
    return function ($composer, $force) {
      LeftSide$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RightSide$composable$lambda($$changed) {
    return function ($composer, $force) {
      RightSide$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var SectionModel_Home_instance;
  var SectionModel_About_instance;
  var SectionModel_Service_instance;
  var SectionModel_Portofolio_instance;
  var SectionModel_Experience_instance;
  var SectionModel_Contact_instance;
  var SectionModel_Testimonial_instance;
  var SectionModel_Achievement_instance;
  function values() {
    return [SectionModel_Home_getInstance(), SectionModel_About_getInstance(), SectionModel_Service_getInstance(), SectionModel_Portofolio_getInstance(), SectionModel_Experience_getInstance(), SectionModel_Contact_getInstance(), SectionModel_Testimonial_getInstance(), SectionModel_Achievement_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Home':
        return SectionModel_Home_getInstance();
      case 'About':
        return SectionModel_About_getInstance();
      case 'Service':
        return SectionModel_Service_getInstance();
      case 'Portofolio':
        return SectionModel_Portofolio_getInstance();
      case 'Experience':
        return SectionModel_Experience_getInstance();
      case 'Contact':
        return SectionModel_Contact_getInstance();
      case 'Testimonial':
        return SectionModel_Testimonial_getInstance();
      case 'Achievement':
        return SectionModel_Achievement_getInstance();
      default:
        SectionModel_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SectionModel_entriesInitialized;
  function SectionModel_initEntries() {
    if (SectionModel_entriesInitialized)
      return Unit_getInstance();
    SectionModel_entriesInitialized = true;
    SectionModel_Home_instance = new SectionModel('Home', 0, 'home', 'Home', '', '#home');
    SectionModel_About_instance = new SectionModel('About', 1, 'about', 'About', 'Why hire me?', '#about');
    SectionModel_Service_instance = new SectionModel('Service', 2, 'service', 'Service', 'Iam Good at', '#service');
    SectionModel_Portofolio_instance = new SectionModel('Portofolio', 3, 'portofolio', 'Portofolio', 'My Work', '#portofolio');
    SectionModel_Experience_instance = new SectionModel('Experience', 4, 'experience', 'Experience', 'Work Experience', '#experience');
    SectionModel_Contact_instance = new SectionModel('Contact', 5, 'contact', 'Contact', 'Get In Touch', '#contact');
    SectionModel_Testimonial_instance = new SectionModel('Testimonial', 6, 'testimonial', 'Testimonial', 'Happy Costumer', '#testimonial');
    SectionModel_Achievement_instance = new SectionModel('Achievement', 7, 'achievement', 'Achievement', 'Personal Achievement', '#achievement');
  }
  function SectionModel(name, ordinal, id, tittle, subtittle, path) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
    this.tittle_1 = tittle;
    this.subtittle_1 = subtittle;
    this.path_1 = path;
  }
  protoOf(SectionModel).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(SectionModel).get_tittle_jyr6rb_k$ = function () {
    return this.tittle_1;
  };
  protoOf(SectionModel).get_subtittle_hlfk3p_k$ = function () {
    return this.subtittle_1;
  };
  protoOf(SectionModel).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  function SectionModel_Home_getInstance() {
    SectionModel_initEntries();
    return SectionModel_Home_instance;
  }
  function SectionModel_About_getInstance() {
    SectionModel_initEntries();
    return SectionModel_About_instance;
  }
  function SectionModel_Service_getInstance() {
    SectionModel_initEntries();
    return SectionModel_Service_instance;
  }
  function SectionModel_Portofolio_getInstance() {
    SectionModel_initEntries();
    return SectionModel_Portofolio_instance;
  }
  function SectionModel_Experience_getInstance() {
    SectionModel_initEntries();
    return SectionModel_Experience_instance;
  }
  function SectionModel_Contact_getInstance() {
    SectionModel_initEntries();
    return SectionModel_Contact_instance;
  }
  function SectionModel_Testimonial_getInstance() {
    SectionModel_initEntries();
    return SectionModel_Testimonial_instance;
  }
  function SectionModel_Achievement_getInstance() {
    SectionModel_initEntries();
    return SectionModel_Achievement_instance;
  }
  function HomePage() {
    illegalDecoyCallException('HomePage');
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(567480495, $changed, -1, 'com.eduside.landingpage.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:20)');
      }
      MainSection$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(567480495, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(614912398);
    sourceInformation($composer_0, 'C(HomePage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(614912398, $changed, -1, 'com.eduside.landingpage.pages.HomePage$composable (Index.kt:14)');
      }
      var tmp = fillMaxSize(Companion_getInstance_1());
      var tmp_0 = Top_getInstance();
      var tmp_1 = CenterHorizontally_getInstance();
      Column$composable(tmp, tmp_0, tmp_1, null, ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 25008, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MainSection() {
    illegalDecoyCallException('MainSection');
  }
  function MainBackground() {
    illegalDecoyCallException('MainBackground');
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(13382037, $changed, -1, 'com.eduside.landingpage.section.ComposableSingletons$MainSectionKt.lambda-1.<anonymous> (MainSection.kt:22)');
      }
      MainBackground$composable($composer_0, 0);
      Header$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainSectionKt() {
    ComposableSingletons$MainSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(13382037, false, ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i));
  }
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainSectionKt_instance;
  function ComposableSingletons$MainSectionKt_getInstance() {
    if (ComposableSingletons$MainSectionKt_instance == null)
      new ComposableSingletons$MainSectionKt();
    return ComposableSingletons$MainSectionKt_instance;
  }
  function MainSection$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1131914227);
    sourceInformation($composer_0, 'C(MainSection$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1131914227, $changed, -1, 'com.eduside.landingpage.section.MainSection$composable (MainSection.kt:17)');
      }
      var tmp = maxWidth(Companion_getInstance_1(), get_px(Constant_getInstance().get_SECTION_WIDTH_r5pabh_k$()));
      var tmp_0 = TopCenter_getInstance();
      Box$composable(tmp, tmp_0, null, ComposableSingletons$MainSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3120, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MainSection$composable$lambda($changed));
    }
  }
  function MainBackground$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(801736838);
    sourceInformation($composer_0, 'C(MainBackground$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(801736838, $changed, -1, 'com.eduside.landingpage.section.MainBackground$composable (MainSection.kt:29)');
      }
      var tmp0_modifier = objectFit(fillMaxSize(Companion_getInstance_1()), Companion_getInstance_3().get_Cover_i8910u_k$());
      var tmp1_src = Image_getInstance().get_background_stpfw7_k$();
      Image$composable(tmp1_src, 'Background Image', tmp0_modifier, false, null, $composer_0, 54, 24);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(MainBackground$composable$lambda($changed));
    }
  }
  function MainSection$composable$lambda($$changed) {
    return function ($composer, $force) {
      MainSection$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MainBackground$composable$lambda($$changed) {
    return function ($composer, $force) {
      MainBackground$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_$stableprop() {
    return 0;
  }
  function Constant() {
    Constant_instance = this;
    this.SECTION_WIDTH_1 = 1920;
    this.FONT_FAMILIY_1 = 'Roboto';
    this.$stable_1 = 0;
  }
  protoOf(Constant).get_SECTION_WIDTH_r5pabh_k$ = function () {
    return this.SECTION_WIDTH_1;
  };
  protoOf(Constant).get_FONT_FAMILIY_o3ee5e_k$ = function () {
    return this.FONT_FAMILIY_1;
  };
  var Constant_instance;
  function Constant_getInstance() {
    if (Constant_instance == null)
      new Constant();
    return Constant_instance;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function Image() {
    Image_instance = this;
    this.background_1 = 'background.svg';
    this.logo_1 = 'logo.svg';
    this.$stable_1 = 0;
  }
  protoOf(Image).get_background_stpfw7_k$ = function () {
    return this.background_1;
  };
  protoOf(Image).get_logo_wopywk_k$ = function () {
    return this.logo_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Res() {
    Res_instance = this;
    this.$stable_1 = 0;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_Gray_instance;
  var Theme_LightGray_instance;
  var Theme_LighterGray_instance;
  function values_0() {
    return [Theme_Primary_getInstance(), Theme_Secondary_getInstance(), Theme_Gray_getInstance(), Theme_LightGray_getInstance(), Theme_LighterGray_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Primary':
        return Theme_Primary_getInstance();
      case 'Secondary':
        return Theme_Secondary_getInstance();
      case 'Gray':
        return Theme_Gray_getInstance();
      case 'LightGray':
        return Theme_LightGray_getInstance();
      case 'LighterGray':
        return Theme_LighterGray_getInstance();
      default:
        Theme_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#00A78E', rgb(0, 167, 142));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#121D34', rgb(18, 29, 52));
    Theme_Gray_instance = new Theme('Gray', 2, '#CFCFCF', rgb(207, 207, 207));
    Theme_LightGray_instance = new Theme('LightGray', 3, '#EDEDED', rgb(237, 237, 237));
    Theme_LighterGray_instance = new Theme('LighterGray', 4, '#F9F9F9', rgb(249, 249, 249));
  }
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.hex_1 = hex;
    this.rgb_1 = rgb;
  }
  protoOf(Theme).get_hex_18j4ge_k$ = function () {
    return this.hex_1;
  };
  protoOf(Theme).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function Theme_Secondary_getInstance() {
    Theme_initEntries();
    return Theme_Secondary_instance;
  }
  function Theme_Gray_getInstance() {
    Theme_initEntries();
    return Theme_Gray_instance;
  }
  function Theme_LightGray_getInstance() {
    Theme_initEntries();
    return Theme_LightGray_instance;
  }
  function Theme_LighterGray_getInstance() {
    Theme_initEntries();
    return Theme_LighterGray_instance;
  }
  main();
  return _;
}));

//# sourceMappingURL=landingpage.js.map
