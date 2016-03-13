var OX = OX || function(f, i) {
    var c = {},
        b, j, h, l, a = {},
        n, k, e = "OX_sd";
    var m = function() {
        var o = 0;
        return function() {
            if (o) {
                return
            }
            g();
            o = 1
        }
    }();

    function g() {
        var p, o;
        if (!k.isFramed()) {
            p = k.getCookie(e);
            if (parseInt(p)) {
                p++
            } else {
                p = 1
            }
            o = new Date(k.now() + 1200000).toGMTString();
            k.cookie(e, p, o);
            n._requestArgs.sd = p
        }
    }

    function d(s, q) {
        var o, x, w, p = {},
            u = {},
            t, v, r;
        if (s.vars) {
            for (var y in s.vars) {
                if (s.vars.hasOwnProperty(y)) {
                    p["c." + escape(y)] = s.vars[y]
                }
            }
            s.vars = null
        }
        if (s.gw) {
            t = s.gw;
            s.gw = null
        }
        if ("") {
            u.oxns = ""
        }
        if (j) {
            u.ju = j
        }
        if (h) {
            u.jr = h
        }
        u.cb = k.rand();
        v = k.merge([s, u, p, k.contextArgs()]);
        r = k.serialize(v);
        o = k.template(k.Templates.GW_URL, {
            gw: t || b,
            v: "1.0",
            r: q,
            q: r
        });
        x = k.ensureRightProtocol(o);
        w = k.template(k.Templates.SCRIPT, {
            src: o,
            id: "ox_" + q + "_" + k.rand()
        });
        k.write(w)
    }
    n = function(p) {
        var o = new OX.AdRequest(p, {
            url: j = j || k.detectPageURL(),
            ref: h = h || k.detectRefererURL(),
            gw: b
        });
        c[o.get("o")] = o;
        return o
    };
    n._customVars = {};
    n._requestArgs = {};
    n.addHook = function(p, o) {
        if (!a[o]) {
            a[o] = []
        }
        a[o].push(p)
    };
    n.addVariable = function(q, s, r, p) {
        var o = n._customVars,
            t = (r || "c") + "." + q;
        if (p || !o[t]) {
            o[t] = []
        }
        o[t].push(s)
    };
    n.appendTag = function(o) {
        k.write(o)
    };
    n.dflt = function(q, r, o) {
        var p = c[q];
        p && p.dflt(r, o)
    };
    n.ifrmHTML = function(q, r, o) {
        var p = c[q];
        p && p.ifrmHTML(r, o)
    };
    n.frameCreatives = function(o) {
        l = o
    };
    n.getFramed = function() {
        return l
    };
    n.getHooksByType = function(o) {
        return a[o]
    };
    n.init = function() {
        k = OX.utils;
        m()
    };
    n.load = function(o) {
        n(o).load()
    };
    n.requestAd = function(o) {
        n(o).fetchAds()
    };
    n.recordAction = function(o) {
        d(o, n.Resources.RAJ)
    };
    n.recordSegments = function(q) {
        var o, r = {};
        if (q.expires) {
            o = Date.parse(q.expires);
            if (o < new Date()) {
                return
            }
        }
        for (var p in q) {
            if (q.hasOwnProperty(p)) {
                switch (p) {
                    case "add":
                        r.as = q[p];
                        break;
                    case "del":
                        r.ds = q[p];
                        break;
                    default:
                        r[p] = q[p]
                }
            }
        }
        d(r, n.Resources.RSJ)
    };
    n.renderCreative = function(o) {
        k.write(o)
    };
    n.setGateway = function(o) {
        b = k.ensureRightProtocol(o)
    };
    n.setPageURL = function(o) {
        j = o
    };
    n.setRefererURL = function(o) {
        h = o
    };
    n.Hooks = {
        ON_AD_REQUEST: 1,
        ON_AD_RESPONSE: 2,
        ON_ADUNIT_CREATED: 3,
        ON_ADUNIT_INITIALIZED: 4,
        ON_ADUNIT_RENDER_START: 5,
        ON_ADUNIT_RENDER_FINISH: 6,
        ON_AD_RENDER_START: 7,
        ON_AD_RENDER_FINISH: 8,
        ON_AD_DEFAULTED: 9,
        ON_AD_NOT_DEFAULTED: 10
    };
    n.Modes = {
        IMMEDIATE: 1,
        DEFERRED: 2
    };
    n.Resources = {
        ACJ: "acj",
        RAJ: "raj",
        RDF: "rdf",
        RR: "rr",
        RI: "ri",
        RSJ: "rsj",
        RE: "re"
    };
    n.GeoLocationSources = {
        GPS: 1,
        IP_ADDRESS: 2,
        USER_REGISTRATION: 3
    };
    n.shareFrameContents = false;
    return n
}(window, document);
OX.utils = OX.utils || function(h, a, c) {
    var e, g = "w",
        d = true,
        f = 1000000;

    function b(j, i) {
        if (j.attachEvent) {
            j.attachEvent("onload", i)
        } else {
            j.onload = i
        }
    }
    e = {
        IMAGE_BEACON_TEMPLATE: "<div style='position:absolute;left:0px;top:0px;visibility:hidden;'><img src='{src}'/></div>",
        append: function(j, i) {
            j.parentNode.insertBefore(i, j.nextSibling);
            return i
        },
        attachListener: function(k, i, j) {
            if (k.addEventListener) {
                k.addEventListener(i, j, false)
            } else {
                if (k.attachEvent) {
                    k.attachEvent("on" + i, j)
                }
            }
        },
        beacon: function(i) {
            var j = e.ensureRightProtocol(i);
            (new Image()).src = j
        },
        getImgBeacon: function(i) {
            var j = e.ensureRightProtocol(i);
            return e.template(e.IMAGE_BEACON_TEMPLATE, {
                src: j
            })
        },
        contextArgs: function() {
            var p = e.detectWindowDims(),
                l = {
                    res: screen.width + "x" + screen.height + "x" + screen.colorDepth,
                    plg: e.detectPlugins(),
                    ch: a.charset || a.characterSet,
                    tz: (new Date()).getTimezoneOffset()
                },
                q = a.getElementsByTagName("meta"),
                j;
            if (p) {
                l.ws = p[0] + "x" + p[1]
            }
            l.ifr = e.inIframe() ? 1 : 0;
            if (l.ifr) {
                try {
                    tWin = h.top;
                    tDoc = h.top.document;
                    tDims = e.detectWindowDimensions(tWin, tDoc);
                    if (tDims) {
                        l.tws = tDims.width + "x" + tDims.height
                    }
                } catch (k) {}
            } else {
                l.tws = l.ws
            }
            for (var m = 0; m < q.length; m++) {
                j = q[m];
                if (j.name && j.name === "viewport") {
                    l.vmt = 1;
                    break
                }
            }
            if (OX.browser_id && OX.browser_id.get() != undefined) {
                l.bi = OX.browser_id.get()
            }
            if (OX.tp_xdi_tapad) {
                OX.tp_xdi_tapad.sync()
            }
            if (OX.tp_presync_criteo) {
                var n = OX.tp_presync_criteo.get();
                l["tp.presync.criteo"] = n.id;
                l["tp.presync.criteo.status"] = n.status
            }
            if (OX.tp_presync_mediamath) {
                var o = OX.tp_presync_mediamath.get();
                l["tp.presync.mediamath"] = o.id;
                l["tp.presync.mediamath.status"] = o.status
            }
            return l
        },
        create: function(j) {
            var i = a.createElement("div");
            i.innerHTML = j;
            return i.firstChild
        },
        cookie: function(k, l, i) {
            if (d) {
                var j = k + "=";
                j += (l || "") + ";path=/;";
                if (e.defined(i)) {
                    j += "expires=" + i + ";"
                }
                try {
                    a.cookie = j
                } catch (m) {}
            }
        },
        createScript: function(j) {
            var i = a.createElement("script");
            i.type = "text/javascript";
            j.id && (i.id = j.id);
            j.src && (i.src = j.src);
            return i
        },
        defined: function(i) {
            return typeof i != "undefined"
        },
        detectWindowDims: function() {
            var k = a.documentElement,
                i = h.innerWidth,
                j = h.innerHeight;
            i = e.defined(i) ? i : k.clientWidth;
            j = e.defined(j) ? j : k.clientHeight;
            if (e.defined(i) && e.defined(j)) {
                return [i, j]
            }
        },
        detectWindowDimensions: function(n, m) {
            var l = m.documentElement,
                j = m.getElementsByTagName("body")[0],
                k = n.innerWidth || l.clientWidth || j.clientWidth,
                i = n.innerHeight || l.clientHeight || j.clientHeight;
            return {
                width: k,
                height: i
            }
        },
        detectPlugins: function() {
            var k, j = "OX_plg",
                l = "ShockwaveFlash.ShockwaveFlash",
                i = {
                    swf: {
                        activex: [l, l + ".3", l + ".4", l + ".5", l + ".6", l + ".7"],
                        plugin: /flash/gim
                    },
                    sl: {
                        activex: ["AgControl.AgControl"],
                        plugin: /silverlight/gim
                    },
                    pdf: {
                        activex: ["acroPDF.PDF.1", "PDF.PdfCtrl.1", "PDF.PdfCtrl.4", "PDF.PdfCtrl.5", "PDF.PdfCtrl.6"],
                        plugin: /adobe\s?acrobat/gim
                    },
                    qt: {
                        activex: ["QuickTime.QuickTime", "QuickTime.QuickTime.4"],
                        plugin: /quicktime/gim
                    },
                    wmp: {
                        activex: ["WMPlayer.OCX"],
                        plugin: /(windows\smedia)|(Microsoft)/gim
                    },
                    shk: {
                        activex: ["SWCtl.SWCtl", "SWCt1.SWCt1.7", "SWCt1.SWCt1.8", "SWCt1.SWCt1.9", l + ".1"],
                        plugin: /shockwave/gim
                    },
                    rp: {
                        activex: ["RealPlayer", "rmocx.RealPlayer G2 Control.1"],
                        plugin: /realplayer/gim
                    }
                };
            return function() {
                var o, q, n = "",
                    m = [];
                if (k) {
                    return k
                }
                try {
                    if (a.cookie) {
                        o = a.cookie.split((escape(j) + "="));
                        if (2 <= o.length) {
                            q = o[1].split(";");
                            if (q[0]) {
                                if (q[0].indexOf("|") >= 0) {
                                    return unescape(q[0].split("|").join(","))
                                }
                            }
                        }
                    }
                } catch (u) {}
                for (var t in i) {
                    if (i.hasOwnProperty(t)) {
                        if (h.ActiveXObject) {
                            for (var s = 0; s < i[t].activex.length; ++s) {
                                try {
                                    ActiveXObject(i[t].activex[s]);
                                    m.push(t);
                                    break
                                } catch (u) {}
                            }
                        } else {
                            for (var r = 0; r < c.plugins.length; ++r) {
                                if (c.plugins[r].name.match(i[t].plugin)) {
                                    m.push(t);
                                    break
                                }
                            }
                        }
                    }
                }
                if (h.postMessage) {
                    m.push("pm")
                }
                k = n = m.join(",");
                e.cookie(j, m.join("|"));
                return n
            }
        }(),
        detectPageURL: function() {
            var i;
            try {
                i = top.location.href
            } catch (j) {}
            return i || e.detectRefererURL()
        },
        detectProtocol: function() {
            return location.protocol
        },
        detectRefererURL: function() {
            var i = a.referrer;
            try {
                i = top.document.referrer
            } catch (l) {
                if (parent) {
                    try {
                        i = parent.document.referrer
                    } catch (k) {}
                }
            }
            if (!i && opener) {
                try {
                    i = opener.location.href
                } catch (j) {}
            }
            return i || ""
        },
        each: function(m, n) {
            if (e.isArray(m)) {
                for (var l = 0; l < m.length; l++) {
                    n(m[l], l)
                }
            } else {
                for (var j in m) {
                    if (m.hasOwnProperty(j)) {
                        n(j, m[j])
                    }
                }
            }
        },
        ensureRightProtocol: function(j) {
            var i;
            if (j) {
                i = j.indexOf("//");
                if (i != 5 && i != 6) {
                    j = "http://" + j
                }
                return (e.detectProtocol() == "https:") ? j.replace("http:", "https:") : j
            }
        },
        get: function(i) {
            return a.getElementById(i)
        },
        getCookie: function(i) {
            try {
                var j = a.cookie.split(i + "=");
                if (j.length == 2) {
                    return j[1].split(";")[0]
                }
            } catch (k) {}
        },
        getMedium: function() {
            return g
        },
        setMedium: function(i) {
            g = i
        },
        ieVersion: (function() {
            var l = 0,
                i, j;
            if (c) {
                try {
                    i = c.userAgent;
                    if (c.appName == "Microsoft Internet Explorer") {
                        j = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
                        if (j.exec(i) != null) {
                            l = parseFloat(RegExp.$1)
                        }
                    } else {
                        if (c.appName == "Netscape") {
                            j = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
                            if (j.exec(i) != null) {
                                l = parseFloat(RegExp.$1)
                            }
                        }
                    }
                } catch (k) {}
                return l
            }
        })(),
        intersection: function(m, l) {
            var j = {},
                k, i = [];
            if (!e.isValidArray(m) || !e.isValidArray(l)) {
                return i
            }
            for (k = 0; k < m.length; k++) {
                j[m[k]] = true
            }
            for (k = 0; k < l.length; k++) {
                if (j[l[k]]) {
                    i.push(l[k])
                }
            }
            return i
        },
        isArray: function(i) {
            return Object.prototype.toString.call(i) === "[object Array]"
        },
        isEmpty: function(j) {
            for (var i in j) {
                if (j.hasOwnProperty(i)) {
                    return false
                }
            }
            return true
        },
        isFramed: function() {
            return h.self != h.top
        },
        isFriendlyFramed: function() {
            if (!e.isFramed()) {
                return false
            }
            try {
                h.parent.document.getElementsByTagName("body");
                return true
            } catch (i) {
                return false
            }
        },
        isUnfriendlyFramed: function() {
            return e.isFramed() && !e.isFriendlyFramed()
        },
        isIE: 0,
        lastScript: function() {
            var i = a.getElementsByTagName("script");
            return i[i.length - 1]
        },
        merge: function(m) {
            var j, n;
            if (e.isArray(m)) {
                j = {};
                for (var l = 0; l < m.length; l++) {
                    n = m[l];
                    for (var k in n) {
                        if (n.hasOwnProperty(k)) {
                            j[k] = n[k]
                        }
                    }
                }
            }
            return j
        },
        now: function() {
            return (new Date()).getTime()
        },
        postMessage: function(j) {
            var i = false;
            if (h.addEventListener) {
                h.addEventListener("message", j, i)
            } else {
                if (h.attachEvent) {
                    h.attachEvent("onmessage", j, i)
                }
            }
        },
        createFrameElement: function(j, k, i) {
            var m;
            try {
                m = (e.isIE && j) ? a.createElement('<iframe name="' + j + '">') : a.createElement("iframe")
            } catch (l) {
                m = a.createElement("iframe")
            }
            if (j) {
                m.setAttribute("id", j);
                m.setAttribute("name", j)
            }
            m.setAttribute("width", k);
            m.setAttribute("height", i);
            m.setAttribute("frameSpacing", "0");
            m.setAttribute("frameBorder", "no");
            m.setAttribute("scrolling", "no");
            return m
        },
        produceFrame: function(i) {
            var p, j, o = 'javascript:window["contents"]',
                v, x = i.hookNode,
                k = i.name,
                m = i.width,
                y = i.height,
                l = i.onStart,
                n = i.onFinish,
                s = i.onSuccess,
                r = k + "_contents",
                w = e.template(e.Templates.IFRAME_DOC, {
                    title: i.title || "OpenX",
                    head: i.headHTML,
                    body: i.bodyHTML
                });
            p = e.createFrameElement(k, m, y);
            if (i.replace) {
                e.replace(x, p)
            } else {
                x.innerHTML = "";
                x.appendChild(p)
            }
            j = (e.isIE && (e.ieVersion < 11)) || h.opera;
            if (j) {
                p.src = o
            }
            if (j) {
                try {
                    n && b(p, n);
                    p.contentWindow.contents = w;
                    l && l();
                    p.src = o
                } catch (q) {
                    var u = p;
                    p = e.createFrameElement(k, m, y);
                    h[r] = w;
                    o = e.template(e.Templates.IFRAME_JS_URI, {
                        contentsVar: r,
                        domain: a.domain
                    });
                    n && b(p, n);
                    p.src = o;
                    l && l();
                    e.replace(u, p)
                }
            } else {
                try {
                    v = p.contentWindow || p.contentDocument;
                    if (v.document) {
                        v = v.document
                    }
                    n && b(p, n);
                    if (v) {
                        v.open("text/html", "replace");
                        l && l();
                        v.write(w);
                        v.close()
                    }
                } catch (t) {
                    if (!i.isRetry) {
                        i.hookNode = p;
                        i.replace = true;
                        i.isRetry = true;
                        h.setTimeout(function() {
                            e.produceFrame(i)
                        }, 0)
                    }
                }
            }
            s && s(p)
        },
        rand: function() {
            return Math.floor(Math.random() * 9999999999) + ""
        },
        remove: function(i) {
            i.parentNode.removeChild(i)
        },
        replace: function(j, i) {
            j.parentNode.replaceChild(i, j);
            return i
        },
        replaceOrRemove: function(i, k, j) {
            if (!i) {
                k && e.remove(k)
            } else {
                if (k) {
                    return e.replace(k, i)
                } else {
                    return e.append(j, i)
                }
            }
        },
        serialize: function(j) {
            var l = "",
                k;
            if (typeof j === "object") {
                for (var i in j) {
                    if (j.hasOwnProperty(i)) {
                        k = j[i];
                        if (e.defined(k) && (k !== null)) {
                            if (e.isArray(k)) {
                                k = k.join(",")
                            }
                            l += i + "=" + escape(k) + "&"
                        }
                    }
                }
            }
            if (l.length > 1) {
                l = l.substr(0, l.length - 1)
            }
            return l
        },
        store: function() {
            var n = "1",
                o = 630720000000,
                l = "|",
                q, i, p, k = {};
            try {
                q = localStorage;
                q.setItem(n, n);
                q.removeItem(n);
                i = 1
            } catch (m) {
                if (c.cookieEnabled && d) {
                    p = 1
                }
            }

            function j(u, t) {
                var w = "OX_" + u,
                    s, r;
                if (i) {
                    r = q.getItem(w);
                    t && q.removeItem(w)
                } else {
                    if (p) {
                        r = e.getCookie(w);
                        t && e.cookie(w)
                    } else {
                        r = k[w];
                        t && (delete k[w])
                    }
                }
                if (r) {
                    s = r.split(l);
                    for (var v = 0; v < s.length; v++) {
                        s[v] = unescape(s[v])
                    }
                    if (s.length === 1) {
                        return s[0]
                    } else {
                        return s
                    }
                }
            }
            return {
                put: function(t, x) {
                    var v = "OX_" + t,
                        w, r, s;
                    if (e.isArray(x)) {
                        r = [];
                        for (var u = 0; u < x.length; u++) {
                            r.push(escape(x[u]))
                        }
                        w = r.join(l)
                    } else {
                        w = escape(x)
                    }
                    if (i) {
                        q.setItem(v, w)
                    } else {
                        if (p) {
                            s = new Date(e.now() + o).toGMTString();
                            e.cookie(v, w, s)
                        } else {
                            k[v] = w
                        }
                    }
                },
                get: function(r) {
                    return j(r)
                },
                remove: function(r) {
                    return j(r, 1)
                }
            }
        }(),
        template: function(t, o, k, p) {
            o = o || {};
            var m = "",
                l = false,
                r = "",
                j, k = k || "{",
                p = p || "}",
                s, n;
            for (var q = 0; q < t.length; q++) {
                j = t.charAt(q);
                if (!l && j === k) {
                    l = true
                } else {
                    if (l && j === p) {
                        s = o[m];
                        if (e.defined(s) && s !== null) {
                            n = s
                        } else {
                            n = ""
                        }
                        r += n;
                        l = false;
                        m = ""
                    } else {
                        if (l) {
                            m += j
                        } else {
                            r += j
                        }
                    }
                }
            }
            return r
        },
        Templates: {
            SCRIPT: "<script type='text/javascript' id='{id}' src='{src}'><\/script>",
            IFRAME_DOC: "<!DOCTYPE html><html><head><title>{title}</title><base target='_top'/>{head}</head><body style='margin:0;padding:0'>{body}</body></html>",
            GW_URL: "{gw}/{v}/{r}?{q}",
            IFRAME_JS_URI: "javascript:document.open();document.domain='{domain}';document.write(window.parent['{contentsVar}']);window.parent['{contentsVar}']=null;setTimeout('document.close()',5000)"
        },
        write: function(i) {
            a.readyState !== "complete" && a.write(i)
        },
        isCookieEnabled: function() {
            return c.cookieEnabled && d
        },
        isHeaderBidderEnabled: function() {
            var i = OX.dfp_bidder_config;
            return i && !e.isEmpty(i)
        },
        isValidDIM: function(i) {
            if (i > f) {
                return false
            } else {
                if (isNaN(i)) {
                    return false
                }
            }
            return true
        },
        isEmpty: function(i) {
            for (var j in i) {
                if (i.hasOwnProperty(j)) {
                    return false
                }
            }
            return true
        },
        isSubset: function(j, i) {
            var l, k;
            if (!e.isValidArray(j) || !e.isValidArray(i)) {
                return false
            }
            if (j.length < i.length) {
                return false
            }
            for (l = 0; l < i.length; l++) {
                for (k = 0; k < j.length; k++) {
                    if (i[l] === j[k]) {
                        break
                    }
                    if (k === j.length - 1) {
                        return false
                    }
                }
            }
            return true
        },
        isValidArray: function(i) {
            return i && e.isArray(i) && i.length !== 0
        },
        inIframe: function() {
            return h.self !== h.top
        },
        getPosition: function(k) {
            var j, i;
            if (!k) {
                return null
            }
            if (k.tagName === "SCRIPT") {
                i = a.createElement("div");
                e.append(k, i);
                j = i.getBoundingClientRect();
                e.remove(i)
            } else {
                j = k.getBoundingClientRect()
            }
            return {
                top: Math.round(j.top),
                left: Math.round(j.left)
            }
        },
        getPositionById: function(j, k) {
            var i = j.getElementById(k);
            return e.getPosition(i)
        },
        getAdPosition: function(l, m) {
            var j, i, o = h,
                n = h.document;
            if (h.parent != h.top) {
                return null
            }
            try {
                l = h.frameElement ? h.frameElement : l;
                if (e.inIframe()) {
                    o = h.parent;
                    n = h.parent.document
                }
                j = e.detectWindowDimensions(o, n);
                if (!e.isValidDIM(j.width) || !e.isValidDIM(j.height)) {
                    return null
                }
                if (m) {
                    i = e.getPositionById(n, l);
                    if (i == null) {
                        return null
                    }
                } else {
                    i = e.getPosition(l)
                }
                if (!e.isValidDIM(i.left) || !e.isValidDIM(i.top)) {
                    return null
                }
                return {
                    browserDims: j,
                    adUnitStartPos: i
                }
            } catch (k) {
                return null
            }
        }
    };
    if (e.ieVersion) {
        e.isIE = 1
    }
    return e
}(window, document, navigator);
/*@cc_on OX.utils.isIE=1;@*/
;
OX.AdRequest = OX.AdRequest || function(K, A) {
    var O = OX.utils,
        e = O.rand(),
        F, l = {},
        v, t = false,
        h, o, m = {},
        f = {},
        x, g, a, I, y, s = {},
        P = false,
        u = {
            o: e
        },
        q = {
            mode: null,
            auid: null,
            record_tmpl: null,
            ad_units: []
        },
        C = 2048,
        w = "OX_" + e,
        G = "ox_" + OX.Resources.ACJ + "_" + e,
        L = "<iframe src='{src}' width='0' height='0' style='display:none;'></iframe>",
        j = this,
        M = OX.Hooks,
        E = OX.Modes;

    function r() {
        return (u.rm > 0) && (u.rd > 0) && (u.rc < u.rm)
    }

    function d() {
        if ((u.rd > 0) && (u.rm > 0) && (!u.rc)) {
            u.rc = 0
        }
    }

    function p() {
        var k = j.createAdRequestURL(),
            R = u.rc && ("_" + u.rc),
            Q = G + (R || ""),
            i = O.createScript({
                id: Q,
                src: k
            });
        return i
    }

    function b(T, S) {
        var k = f[T] || [],
            Q = OX.getHooksByType(T) || [],
            V = Q.concat(k),
            U;
        if (V) {
            for (var R = 0; R < V.length; R++) {
                U = V[R];
                U.apply(this, S)
            }
        }
    }

    function D(Q) {
        var i, R, k;
        if (Q) {
            i = O.template(L, {
                src: Q
            });
            k = O.create(i);
            if (a) {
                O.replace(a, k)
            } else {
                if (R = document.body) {
                    R.appendChild(k)
                }
            }
        }
    }

    function H() {
        u.rc++;
        setTimeout(function() {
            j.refreshAds()
        }, 1000 * u.rd)
    }

    function B(k) {
        var i;
        if (k) {
            i = document.createComment(" " + k.replace(/--/g, "- -"))
        }
        g = O.replaceOrRemove(i, g, x)
    }

    function n() {
        var k = "ma",
            i = "js";
        O.setMedium(k);
        F = F.replace(/\/m?w$/, "/" + k);
        u.sp = i;
        delete u.ju;
        delete u.jr
    }

    function z(k, i, S) {
        var R = new XMLHttpRequest(),
            T = k.split("?");
        try {
            T[1] = T[1].replace(/(^|&)callback=[^&]*$/, "");
            T[1] = T[1].replace(/(^|&)callback=.*?&/, "$1")
        } catch (Q) {}
        R.open("POST", T[0]);
        R.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        R.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    i && i(JSON.parse(this.responseText))
                } else {
                    P = false;
                    s = {};
                    delete u.openrtb;
                    S && S()
                }
            }
        };
        R.send(T[1])
    }

    function c() {
        var S, W, R, k, V, T = "",
            U = [];
        if (true && !O.isHeaderBidderEnabled()) {
            S = u.auid || [];
            for (var Q = 0; Q < S.length; Q++) {
                W = S[Q];
                R = l[W];
                k = R.get("anchor");
                if (!k && q.mode === E.IMMEDIATE) {
                    k = O.lastScript()
                }
                V = O.getAdPosition(k, false);
                if (V) {
                    T = V.browserDims.width + "x" + V.browserDims.height;
                    U.push(V.adUnitStartPos.left + "," + V.adUnitStartPos.top)
                } else {
                    U.push("")
                }
            }
            j.setBrowserDims(T);
            j.setAdUnitLocation(U.join("|"))
        }
    }
    j.addAdUnit = function(Q) {
        var k = j.getOrCreateAdUnit(Q),
            i;
        if (!u.auid) {
            u.auid = []
        }
        u.auid.push(Q)
    };
    j.addContentTopic = function(i) {
        u.tid = u.tid || [];
        u.tid.push(i)
    };
    j.addHook = function(k, i) {
        if (!f[i]) {
            f[i] = []
        }
        f[i].push(k)
    };
    j.addPage = function(i) {
        u.pgid = u.pgid || [];
        u.pgid.push(i)
    };
    j.addVariable = function(k, R, Q, i) {
        var S = (Q || "c") + "." + k;
        if (i || !m[S]) {
            m[S] = []
        }
        m[S].push(R)
    };
    j.createAdRequestURL = function() {
        var k, i, R = "";
        d();
        c();
        if (!O.isEmpty(s)) {
            try {
                u.openrtb = JSON.stringify(s)
            } catch (Q) {}
        }
        i = O.merge([u, m, O.contextArgs(), OX._customVars, OX._requestArgs]);
        R && (R += "&");
        R += O.serialize(i);
        if (I) {
            R += "&r=" + escape(I)
        }
        k = O.template(O.Templates.GW_URL, {
            gw: F,
            v: "1.0",
            r: OX.Resources.ACJ,
            q: R
        });
        if (!O.isEmpty(s) && k.length > C) {
            P = true
        }
        return k
    };
    j.dflt = function(Q, i) {
        var k = l[Q];
        k && k.dflt(i)
    };
    j.ifrmHTML = function(Q, i) {
        var k = l[Q];
        k && k.set("iframe_html", i)
    };
    j.disableFeature = function(i) {
        u.df = u.df || [];
        u.df.push(i)
    };
    j.disableMarket = function() {
        j.disableFeature("m")
    };
    j.disableSegmentation = function() {
        u.ns = 1
    };
    j.enableFeature = function(i) {
        u.ef = u.ef || [];
        u.ef.push(i)
    };
    j.enableMarket = function() {
        j.enableFeature("m")
    };
    j.enableSegmentation = function() {
        u.ns = null
    };
    j.fetchAds = function() {
        var k, i;
        b(M.ON_AD_REQUEST, [j]);
        k = j.createAdRequestURL();
        if (P) {
            z(k, window[w], j.fetchAds)
        } else {
            i = O.template(O.Templates.SCRIPT, {
                src: k,
                id: G
            });
            O.write(i)
        }
    };
    j.fetchAdsComplete = function() {
        switch (q.mode) {
            case E.IMMEDIATE:
                j.showAdUnit(q.auid);
                break;
            case E.DEFERRED:
                for (var i in l) {
                    if (l.hasOwnProperty(i)) {
                        if (l[i].get("anchor")) {
                            j.showAdUnit(i)
                        }
                    }
                }
                break;
            default:
        }
        if (u.auid && u.auid.length === 1) {
            if (u.rc === 0) {
                j.addHook(function() {
                    r() && H()
                }, OX.Hooks.ON_ADUNIT_RENDER_FINISH)
            }
        } else {
            r() && H()
        }
    };
    j.frameCreatives = function(i) {
        v = i
    };
    j.getOrCreateAdUnit = function(i) {
        if (!l[i]) {
            l[i] = new OX.AdUnit(i, j.get("o"));
            q.ad_units.push(l[i]);
            b(M.ON_ADUNIT_CREATED, [l[i]])
        }
        return l[i]
    };
    j.get = function(i) {
        return q.hasOwnProperty(i) ? q[i] : u[i]
    };
    j.getQueryArgs = function() {
        return u
    };
    j.getProperties = function() {
        return q
    };
    j.isResponseEmpty = function() {
        var k, i;
        if (!(y && y.ads && y.ads.adunits && (k = y.ads.adunits[0]) && (i = k.chain) && i.length)) {
            return true
        } else {
            return false
        }
    };
    j.getRecordTemplate = function() {
        if (y && y.ads) {
            return y.ads.record_tmpl
        }
        return ""
    };
    j.loadAdResponse = function(Q) {
        var S = Q.ads,
            U = Q.ads.adunits,
            k, T;
        x = x || O.get(G);
        y = Q;
        D(S.pixels);
        B(q.debug = S.debug);
        for (var R = 0; R < U.length; R++) {
            k = U[R];
            if (k.refresh_delay) {
                u.rd = k.refresh_delay
            }
            if (k.refresh_max) {
                u.rm = k.refresh_max
            }
            d();
            if (r()) {
                v = 1
            }
            T = function(i) {
                b(M.ON_ADUNIT_INITIALIZED, [i])
            };
            j.getOrCreateAdUnit(k.auid).load({
                adunit: k,
                rt: S.record_tmpl,
                oninit: T,
                chain: S.chain
            })
        }
    };
    j.load = function() {
        var k, Q, i = j.createAdRequestURL();
        b(M.ON_AD_REQUEST, [j]);
        v = 1;
        if (P) {
            z(i, window[w], j.load)
        } else {
            k = p();
            Q = document.head || document.body;
            if (Q) {
                Q.appendChild(k);
                x = k
            } else {
                x = O.append(O.lastScript(), k)
            }
        }
    };
    j.refreshAds = function() {
        var k, i = j.createAdRequestURL();
        b(M.ON_AD_REQUEST, [j]);
        if (P) {
            z(i, window[w], j.load)
        } else {
            k = p();
            x = O.replace(x, k)
        }
    };
    j.setAdUnitFallback = function(k, i) {
        j.getOrCreateAdUnit(k).set("fallback", i)
    };
    j.setAdUnitImpBeacon = function(k, i) {
        j.getOrCreateAdUnit(k).set("imp_beacon", i)
    };
    j.setAdUnitMarketFloor = function(k, i) {
        j.getOrCreateAdUnit(k);
        u.aumf = u.aumf || [];
        u.aumf.push(k + ":" + i)
    };
    j.setAdUnitNGFloor = function(k, i) {
        j.getOrCreateAdUnit(k);
        u.aungf = u.aungf || [];
        u.aungf.push(k + ":" + i)
    };
    j.setAdUnitSlotId = function(k, i) {
        j.getOrCreateAdUnit(k).set("anchor", O.get(i))
    };
    j.setAnchorTarget = function(i) {
        u.tg = i
    };
    j.setBrowserDims = function(i) {
        u.dims = i
    };
    j.setAdUnitLocation = function(i) {
        u.adxy = i
    };
    j.setClickRedirectURL = function(i) {
        I = i
    };
    j.setGateway = function(i) {
        F = O.ensureRightProtocol(i)
    };
    j.setMode = function(i) {
        q.mode = i
    };
    j.setPageURL = function(i) {
        u.ju = O.ensureRightProtocol(i)
    };
    j.setRefererURL = function(i) {
        u.jr = i
    };
    j.setRefreshDelay = function(i) {
        u.rd = i
    };
    j.setRefreshMax = function(i) {
        u.rm = i
    };
    j.setTest = function(i) {
        u.test = i ? "true" : null
    };
    j.setUserID = function(i) {
        u.xid = i
    };
    j.setBidderEligibility = function(i) {
        u.be = i ? 1 : 0
    };
    j.setCacheEnabled = function(i) {
        u.ce = i ? 1 : 0
    };
    j.setCoords = function(i) {
        if (i.latitude && i.longitude) {
            u.lat = i.latitude;
            u.lon = i.longitude;
            u.lt = i.source || OX.GeoLocationSources.GPS
        }
    };
    j.setAdSizes = function(i) {
        u.aus = u.aus ? u.aus + "|" : "";
        u.aus = u.aus + i.join(",")
    };
    j.setAppName = function(i) {
        if (i) {
            u["app.name"] = i;
            n()
        }
    };
    j.setAppBundleID = function(i) {
        if (i) {
            u["app.bundle"] = i;
            n()
        }
    };
    j.setAppStoreURL = function(i) {
        if (i) {
            u.url = O.ensureRightProtocol(i);
            n()
        }
    };
    j.setAPIFrameworks = function(i) {
        if (i.toString()) {
            u.af = i.toString();
            n()
        }
    };
    j.addDeviceID = function(Q, R) {
        var i = {
                "did.ia": "did.iat",
                "did.adid": "did.adid.enabled"
            },
            k;
        if (Q.type && Q.id) {
            k = (R || "did.") + Q.type;
            u[k] = Q.id;
            if (i.hasOwnProperty(k) && Q.hasOwnProperty("tracking")) {
                u[i[k]] = !!Q.tracking
            }
            n()
        }
    };
    j.setOpenRTBParameters = function(k) {
        var i;
        if (Object.prototype.toString.call(k) === "[object Object]") {
            s = k
        } else {
            if (typeof k === "string") {
                try {
                    i = JSON.parse(k);
                    this.setOpenRTBParameters(i)
                } catch (Q) {}
            }
        }
    };
    j.addOpenRTBParameter = function(U, V) {
        var T = U.split("."),
            R = s,
            W, Q, k;
        for (var S = 0; S < T.length; S++) {
            W = T[S];
            if (S === T.length - 1) {
                R[W] = V;
                break
            }
            Q = W.match(/(\w+)\[(\d+)\]/);
            if (Q) {
                W = Q[1];
                k = Q[2];
                R[W] = R[W] || [];
                R[W][k] = R[W][k] || {};
                R = R[W][k]
            } else {
                R[W] = R[W] || {};
                R = R[W]
            }
        }
    };
    j.showAdUnit = function(Q) {
        var k = l[Q],
            i;
        if (k) {
            i = function() {
                if (t) {
                    return 0
                }
                if (k.get("framed")) {
                    return 1
                }
                if (O.defined(v)) {
                    return v
                }
                return !!OX.getFramed()
            }();
            k.render({
                framed: i,
                onAdUnitRenderStart: function() {
                    b(M.ON_ADUNIT_RENDER_START, [k])
                },
                onAdUnitRenderFinish: function() {
                    b(M.ON_ADUNIT_RENDER_FINISH, [k])
                },
                onAdRenderStart: function() {
                    b(M.ON_AD_RENDER_START, [k])
                },
                onAdRenderFinish: function(S, T, R) {
                    b(M.ON_AD_RENDER_FINISH, [S, T, R])
                },
                onAdDefaulted: function(S, T, R) {
                    b(M.ON_AD_DEFAULTED, [S, T, R])
                },
                onAdNotDefaulted: function(S, T, R) {
                    b(M.ON_AD_NOT_DEFAULTED, [S, T, R])
                },
                shareFrameContents: OX.shareFrameContents
            })
        }
    };
    window[w] = function(i) {
        j.loadAdResponse(i);
        b(M.ON_AD_RESPONSE, [j]);
        j.fetchAdsComplete()
    };
    u.callback = w;
    j.setGateway(K && K.gw || A.gw);
    j.setPageURL(K && K.url || A.url);
    j.setRefererURL(K && K.ref || A.ref);
    if (!window.postMessage) {
        j.disableFeature("c")
    }
    if (K) {
        j.setMode(E.IMMEDIATE);
        q.auid = K.auid;
        K.auid && j.addAdUnit(q.auid);
        K.tid && j.addContentTopic(K.tid);
        K.aumf && j.setAdUnitMarketFloor(q.auid, K.aumf);
        K.aungf && j.setAdUnitNGFloor(q.auid, K.aungf);
        K.tg && j.setAnchorTarget(K.tg);
        K.imp_beacon && j.setAdUnitImpBeacon(q.auid, K.imp_beacon);
        K.slot_id && j.setAdUnitSlotId(q.auid, K.slot_id);
        K.fallback && j.setAdUnitFallback(q.auid, K.fallback);
        K.test && j.setTest(K.test);
        K.userid && j.setUserID(K.userid);
        K.r && j.setClickRedirectURL(K.r);
        K.rd && j.setRefreshDelay(K.rd);
        K.rm && j.setRefreshMax(K.rm);
        K.md && j.disableMarket();
        K.ns && j.disableSegmentation();
        K.coords && j.setCoords(K.coords);
        K.openrtb && j.setOpenRTBParameters(K.openrtb);
        K.appName && j.setAppName(K.appName);
        K.appBundle && j.setAppBundleID(K.appBundle);
        K.appStoreURL && j.setAppStoreURL(K.appStoreURL);
        K.af && j.setAPIFrameworks(K.af);
        if (K.deviceIDs) {
            for (var N = 0; N < K.deviceIDs.length; N++) {
                j.addDeviceID(K.deviceIDs[N])
            }
        }
        if (K.vars) {
            for (var J in K.vars) {
                K.vars.hasOwnProperty(J) && j.addVariable(J, K.vars[J])
            }
        }
        if (K.ef) {
            for (var N = 0; N < K.ef.length; N++) {
                j.enableFeature(K.ef[N])
            }
        }
        if (K.df) {
            for (var N = 0; N < K.df.length; N++) {
                j.disableFeature(K.df[N])
            }
        }
        if (O.defined(K.frameCreatives)) {
            v = K.frameCreatives
        }
        K.forceUnframed && (t = true);
        K.onResponse && j.addHook(K.onResponse, M.ON_AD_RESPONSE);
        K.onAdUnitRender && j.addHook(K.onAdUnitRender, M.ON_ADUNIT_RENDER_START);
        K.onAdUnitLoaded && j.addHook(K.onAdUnitLoaded, M.ON_ADUNIT_RENDER_FINISH)
    } else {
        j.setMode(E.DEFERRED)
    }
};
OX.AdUnit = OX.AdUnit || function(T, k) {
    var V = OX.utils,
        i = this,
        B = OX.Resources,
        U = T,
        G = k,
        S, O, s, M, l, I, E, t = {
            adunit_id: T,
            anchor: null,
            rm_anchor: null
        },
        v = false,
        K = "dflt",
        r = "dflt",
        g = "loaded",
        c = "flash",
        A = "rich_media",
        a = "ox_" + G + "_" + U,
        n = parseInt("2500") || 2500,
        W = 0,
        H = "<script type='text/javascript'>var OX_swfobject = window.parent.OX.swfobject(window, document, navigator);<\/script>",
        x, j = a + "_ch_{i}",
        y = V.IMAGE_BEACON_TEMPLATE,
        L = "<script type='text/javascript'>(new Image()).src='{src}'{suffix}<\/script>",
        w = "<script type='text/javascript'>(function() {attachListener(window, 'message', dflt);function dflt(e) {if (e.data === '#data#') {signalDefaultTo(window.parent);var frames = window.parent.frames;for (var i = 0; i < frames.length; i++) {signalDefaultTo(frames[i]);}window.frameElement.style.display = 'none';}}function signalDefaultTo(win) {try {win.OX.dflt('#rid#','#auid#',#index#);} catch(e) {var msg = JSON.stringify({action : '#data#',params : ['#rid#','#auid#',#index#]});win.postMessage(msg, '*');}}function attachListener(target, type, listener) {if (target.addEventListener) {target.addEventListener(type, listener, false);} else {target.attachEvent('on' + type, listener);}}})();<\/script>",
        z = "<script type='text/javascript'>window.onload = function() {var html = document.documentElement.innerHTML;window.parent.OX.ifrmHTML('[rid]', '[auid]', html);};<\/script>";
    var J = function(X) {
        this.renderStrategy = X
    };
    J.prototype.render = function(X) {
        return this.renderStrategy(X)
    };

    function D(Y) {
        var X = x,
            Z = {
                medium: V.getMedium(),
                rtype: B.RI,
                txn_state: Y.ts
            };
        if (V.isHeaderBidderEnabled()) {
            X += "&bs={bs}";
            Z.bs = ""
        }
        return V.template(X, Z)
    }

    function Q(X) {
        q(X)
    }

    function q(Y) {
        var aa = t.fallback,
            Z, X, ab = function() {
                Y.onAdRenderFinish(i, S, 0);
                Y.onAdUnitRenderFinish()
            };
        if (S && S.html && (i.get("type") !== c)) {
            Z = D(S);
            X = F(y, {
                src: Z
            });
            S.html = S.html + X
        }
        if (i.get("is_fallback")) {
            aa = t.fallback || (S && S.html)
        } else {
            if (S && S.html) {
                aa = S.html + (t.imp_beacon || "")
            }
        }
        if (aa) {
            Y.onAdUnitRenderStart();
            if (Y.framed) {
                R(aa, a, i.get("type") === c ? H : "", i.get("width") || i.get("primary_width"), i.get("height") || i.get("primary_height"), Y.onAdRenderStart, ab, Y.shareFrameContents)
            } else {
                Y.onAdRenderStart();
                u(aa);
                ab()
            }
        }
    }

    function P(X) {
        E = V.now();
        I = X;
        I.onAdUnitRenderStart();
        d(0)
    }

    function m(Y) {
        var X, Z;
        if (S && S.html) {
            X = V.template(x, {
                medium: V.getMedium(),
                rtype: B.RR,
                txn_state: S.ts
            });
            Z = F(y, {
                src: X
            });
            S.html = Z + S.html
        }
        q(Y)
    }

    function d(ac) {
        var ae = "",
            Z = "",
            ai = "",
            ad = "",
            Y, af, ag, ab = "",
            aa, ah = "",
            X = t.chain,
            aj = V.template(j, {
                i: ac
            });
        S = X[ac];
        O = ac;
        if (!I.renderTest) {
            ag = V.template(x, {
                medium: V.getMedium(),
                rtype: B.RR,
                txn_state: S.ts
            });
            if (v && (ac < X.length - 1)) {
                ag += "&cts=";
                ab = " + new Date().getTime();"
            }
            Z = F(L, {
                src: ag,
                suffix: ab
            })
        }
        if (ac < X.length - 1) {
            C();
            ae = V.template(w, {
                data: K,
                rid: G,
                auid: U,
                index: ac
            }, "#", "#");
            S.dflting = 1;
            Y = f(ac);
            af = function() {
                Y();
                I.onAdRenderFinish(i, S, ac)
            }
        } else {
            if (i.get("type") === c) {
                ae = H
            } else {
                if (!I.renderTest) {
                    aa = D(S);
                    ai = F(L, {
                        src: aa,
                        suffix: ah
                    })
                }
            }
            if (i.get("is_fallback")) {
                ad = t.fallback || (S && S.html)
            } else {
                if (S && S.html) {
                    ad = S.html + (t.imp_beacon || "")
                }
            }
            af = function() {
                I.onAdRenderFinish(i, S, ac);
                I.onAdUnitRenderFinish()
            }
        }
        R(Z + (ad || S.html) + ai, aj, ae, S.width, S.height, I.onAdRenderStart, af, I.shareFrameContents)
    }

    function N() {
        return (V.now() - E) > t.chain_timeout
    }

    function f(X) {
        return function() {
            window.setTimeout(function() {
                var aa = t.chain[X],
                    Y = X + 1,
                    Z;
                aa[g] = 1;
                if (aa.hasOwnProperty(r)) {
                    if (N()) {
                        Y = t.chain.length - 1
                    }
                    d(Y)
                } else {
                    I.onAdNotDefaulted(i, aa, X);
                    if (!I.renderTest) {
                        Z = D(S);
                        if (v) {
                            Z += "&cte=" + V.now()
                        }
                        V.beacon(Z)
                    }
                    I.onAdUnitRenderFinish()
                }
            }, W)
        }
    }

    function R(aa, X, ab, ag, Z, ah, ac, ai) {
        var af = (t.pre_html || "") + aa + (t.post_html || ""),
            ad = "",
            Y, ae;
        if (ai) {
            ad = V.template(z, {
                rid: G,
                auid: U
            }, "[", "]")
        }
        Y = (t.head_html || "") + ab + ad;
        if (V.isUnfriendlyFramed() && i.get("type") === A) {
            p(X, ag, Z, Y, af, ah, ac)
        } else {
            e(X, ag, Z, Y, af, ah, ac)
        }
        i.set("iframe_id", X)
    }

    function p(X, ae, Z, ad, aa, af, ac) {
        h(ab, Y);

        function ab(ag) {
            window.parent.postMessage(JSON.stringify({
                action: "render_ad",
                params: [X, ae, Z, ad, aa]
            }), "*");
            af();
            V.attachListener(window, "message", function(ah) {
                if (ah.source === ag.contentWindow && ah.data === X) {
                    ac()
                }
            })
        }

        function Y() {
            if (t.chain && t.chain.length > O + 1) {
                d(O + 1)
            } else {
                e(X, ae, Z, ad, aa, af, ac)
            }
        }
    }

    function e(ae, Y, ac, ab, X, Z, ad) {
        var aa;
        if (V.isFriendlyFramed() && i.get("type") === A) {
            if (!t.rm_anchor) {
                t.rm_anchor = document.createElement("div");
                V.append(window.frameElement, t.rm_anchor)
            }
            aa = t.rm_anchor;
            window.frameElement.style.display = "none"
        } else {
            if (!t.anchor) {
                t.anchor = document.createElement("div");
                if (!document.body && V.isFramed()) {
                    V.write("<body style='margin:0;padding:0'></body>");
                    document.body.appendChild(t.anchor)
                } else {
                    V.append(V.lastScript(), t.anchor)
                }
            }
            aa = t.anchor
        }
        V.produceFrame({
            hookNode: aa,
            replace: true,
            name: ae,
            width: Y,
            height: ac,
            headHTML: ab,
            bodyHTML: X,
            onStart: Z,
            onFinish: ad,
            onSuccess: function(af) {
                if (aa === t.rm_anchor) {
                    t.rm_anchor = af
                } else {
                    t.anchor = af
                }
            }
        })
    }

    function h(ae, ac) {
        var Z = document.referrer,
            ab = Z.split("/"),
            Y = ab[0] + "//" + ab[2],
            X = Y + "/ox_buster.html",
            ad, aa;
        ad = V.createFrameElement("", 0, 0);
        ad.style.display = "none";
        ad.src = X;
        document.body.appendChild(ad);
        V.attachListener(window, "message", function(af) {
            if (af.source === ad.contentWindow) {
                aa = true
            }
        });
        V.attachListener(ad, "load", function() {
            setTimeout(function() {
                aa ? ae(ad) : ac()
            }, 100)
        });
        h = function(ag, af) {
            aa ? ag(ad) : af()
        }
    }

    function u(X) {
        var Z = (t.pre_html || "") + X + (t.post_html || ""),
            Y = Z;
        if (!document.body && V.isFramed()) {
            Y = "<body style='margin:0;padding:0'>" + Z + "</body>"
        }
        V.write(Y)
    }

    function C() {
        V.attachListener(window, "message", function(X) {
            try {
                var Z = JSON.parse(X.data);
                if (Z.action === K) {
                    OX.dflt.apply(OX, Z.params)
                }
            } catch (Y) {}
        });
        C = function() {}
    }

    function b(X) {
        var Y = V.template(x, {
            medium: V.getMedium(),
            rtype: B.RDF,
            txn_state: X.ts
        });
        if (v) {
            Y += "&cte=" + V.now()
        }
        V.beacon(Y)
    }
    var o = [{
        shouldDefer: function() {
            return (window.mraid && typeof mraid.isViewable === "function" && !mraid.isViewable())
        },
        defer: function(X) {
            mraid.addEventListener("viewableChange", (function() {
                var Y = false;
                return function(Z) {
                    if (!Y && Z) {
                        V.beacon(X);
                        Y = true
                    }
                }
            })())
        }
    }, {
        shouldDefer: function() {
            return typeof trackImpressionHelper === "function"
        },
        defer: function(X) {
            var Y = trackImpressionHelper;
            trackImpressionHelper = function() {
                V.beacon(X);
                Y()
            }
        }
    }];

    function F(aa, ad, ae, ab) {
        var Y = ad.src,
            X = "",
            ac;
        for (var Z = 0; Z < o.length; Z++) {
            ac = o[Z];
            if (ac.shouldDefer()) {
                ac.defer(Y);
                return X
            }
        }
        X = V.template(aa, ad, ae, ab);
        return X
    }
    i.dflt = function(Y) {
        var Z = t.chain[Y],
            X = Y + 1;
        if (Z[r]) {
            return
        }
        Z[r] = 1;
        b(S);
        I.onAdDefaulted(i, Z, Y);
        if (V.isUnfriendlyFramed() && Z.type === A) {
            window.parent.postMessage(JSON.stringify({
                action: "restore_busted_frame"
            }), "*")
        } else {
            if (V.isFriendlyFramed() && Z.type === A) {
                window.frameElement.style.display = ""
            }
        }
        if (!I.renderTest) {
            if (Z.hasOwnProperty(g)) {
                if (N()) {
                    X = t.chain.length - 1
                }
                d(X)
            }
        }
    };
    i.get = function(X) {
        return t.hasOwnProperty(X) ? t[X] : (S && S[X])
    };
    i.set = function(X, Y) {
        t[X] = Y
    };
    i.getProperties = function() {
        return V.merge([t, S])
    };
    i.load = function(Z) {
        var Y = Z.adunit,
            aa;
        x = Z.rt;
        for (var X in Y) {
            if (Y.hasOwnProperty(X)) {
                t[X] = Y[X]
            }
        }
        if (t.size) {
            aa = t.size.split("x");
            t.primary_width = aa[0];
            t.primary_height = aa[1]
        }
        t.chain_timeout = t.chain_timeout || n;
        if (Z.chain) {
            if (t.chain && t.chain.length > 0) {
                if (t.chain.length > 1) {
                    s = new J(P)
                } else {
                    S = t.chain && t.chain[0];
                    s = new J(m)
                }
            } else {
                s = new J(Q)
            }
        } else {
            S = t.chain && t.chain[0];
            s = new J(q)
        }
        M = 1;
        l = 0;
        Z.oninit && Z.oninit(i)
    };
    i.render = function(Y) {
        var ab, X = i.get("height"),
            Z = i.get("width");
        if (V.isFramed()) {
            try {
                ab = V.detectWindowDimensions(window, document);
                if (ab.height < X) {
                    window.frameElement.height = X;
                    window.frameElement.style.height = X + "px"
                }
                if (ab.width < Z) {
                    window.frameElement.width = Z;
                    window.frameElement.style.width = Z + "px"
                }
            } catch (aa) {}
        }
        if (l) {
            return
        }
        i.set("framed", Y.framed);
        if (!M) {
            s = new J(Q)
        }
        s.render(Y);
        l = 1
    }
};
/*! SWFObject v2.2 <http://code.google.com/p/swfobject/> is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> */
;
OX.swfobject = function(N, j, t) {
    var P = OX.utils.defined,
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        N = N || window,
        j = j || document,
        t = t || navigator,
        T = false,
        U = [h],
        o = [],
        M = [],
        H = [],
        l, Q, D, B, I = false,
        a = false,
        n, F, m = true,
        L = function() {
            var aa = P(j.getElementById) && P(j.getElementsByTagName) && P(j.createElement),
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (P(t.plugins) && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(P(t.mimeTypes) && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (P(N.ActiveXObject)) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!L.w3) {
                return
            }
            if ((P(j.readyState) && j.readyState == "complete") || (!P(j.readyState) && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!I) {
                if (P(j.addEventListener)) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (L.ie && L.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (N == top) {
                        (function() {
                            if (I) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (L.wk) {
                    (function() {
                        if (I) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (I) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        I = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function J(X) {
        if (I) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (P(N.addEventListener)) {
            N.addEventListener("load", Y, false)
        } else {
            if (P(j.addEventListener)) {
                j.addEventListener("load", Y, false)
            } else {
                if (P(N.attachEvent)) {
                    i(N, "onload", Y)
                } else {
                    if (typeof N.onload == "function") {
                        var X = N.onload;
                        N.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        N.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            G()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (P(Z.GetVariable)) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        L.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                G()
            })()
        } else {
            G()
        }
    }

    function G() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (L.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (E(o[af].swfVersion) && !(L.wk && L.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                O(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && P(Z.SetVariable)) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (P(Y.SetVariable)) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && E("6.0.65") && (L.win || L.mac) && !(L.wk && L.wk < 312)
    }

    function O(aa, ab, X, Z) {
        a = true;
        D = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (!P(aa.width) || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (!P(aa.height) || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = L.ie && L.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + N.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (P(ab.flashvars)) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (L.ie && L.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (L.ie && L.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (L.win && L.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (L.wk && L.wk < 312) {
            return X
        }
        if (aa) {
            if (!P(ai.id)) {
                ai.id = Y
            }
            if (L.ie && L.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                M[M.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (L.ie && L.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        H[H.length] = [Z, X, Y]
    }

    function E(Z) {
        var Y = L.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (L.ie && L.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            F = null
        }
        if (!n || F != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (L.ie && L.win && P(j.styleSheets) && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            F = X
        }
        if (L.ie && L.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && P(j.createTextNode)) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (I && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function K(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && P(encodeURIComponent) ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (L.ie && L.win) {
            window.attachEvent("onunload", function() {
                var ac = H.length;
                for (var ab = 0; ab < ac; ab++) {
                    H[ab][0].detachEvent(H[ab][1], H[ab][2])
                }
                var Z = M.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(M[aa])
                }
                for (var Y in L) {
                    L[Y] = null
                }
                L = null;
                for (var X in OX_swfobject) {
                    OX_swfobject[X] = null
                }
                OX_swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (L.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (L.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (L.w3 && !(L.wk && L.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                J(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (P(am.flashvars)) {
                                am.flashvars += "&" + ai + "=" + escape(Z[ai])
                            } else {
                                am.flashvars = ai + "=" + escape(Z[ai])
                            }
                        }
                    }
                    if (E(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            O(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: L,
        getFlashPlayerVersion: function() {
            return {
                major: L.pv[0],
                minor: L.pv[1],
                release: L.pv[2]
            }
        },
        hasFlashPlayerVersion: E,
        createSWF: function(Z, Y, X) {
            if (L.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (L.w3 && A()) {
                O(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (L.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (L.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: J,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return K(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return K(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (L.ie && L.win) {
                            l.style.display = "block"
                        }
                    }
                    if (D) {
                        D(B)
                    }
                }
                a = false
            }
        }
    }
};
var OX_swfobject = OX_swfobject || OX.swfobject(window, document, navigator);
OX.ud = OX.ud || {};
OX.browser_id = OX.browser_id || function() {
    var c = OX.utils,
        f = "BI",
        g = "OX_u",
        b, a = false;

    function d() {
        var i = new Date().getTime();
        var h = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(k) {
            var j = (i + Math.random() * 16) % 16 | 0;
            i = Math.floor(i / 16);
            return (k == "x" ? j : (j & 3 | 8)).toString(16)
        });
        return h
    }

    function e() {
        return c.getCookie(g) != undefined
    }
    b = {
        get: function() {
            if (e()) {
                return undefined
            }
            var h = c.store.get(f);
            if (h == undefined) {
                c.store.put(f, d());
                return undefined
            } else {
                return h
            }
        }
    };
    return b
}();
OX.tp_xdi_tapad = OX.tp_xdi_tapad || function() {
    var g = OX.utils,
        b = "{ep}?{arg}",
        d = "tapestry.tapad.com/tapestry/1",
        h = "1955",
        e = "b",
        c = "_",
        i = "BI",
        a = "166499c5-908b-47b6-86b9-86d039ad5a9a",
        f;
    f = {
        sync: function() {
            var l = g.store.get(i);
            if (!l || !a || a === "undefined") {
                return
            }
            var k = [e, l, a].join(c);
            var m = g.serialize({
                ta_partner_id: h,
                ta_partner_did: k,
                ta_format: "png"
            });
            var j = g.template(b, {
                ep: d,
                arg: m
            });
            (new Image()).src = g.ensureRightProtocol(j)
        }
    };
    return f
}();
! function() {
    OX.init();
    OX.setGateway("http://oncampusweb-d.openx.net/w");
    var d;
    while (window.OX_cmds && (d = OX_cmds.shift())) {
        if (typeof d === "function") {
            d()
        }
    }
    var e = window.OX_reporter_cmds;
    if (!e) {
        try {
            e = window.top.OX_reporter_cmds
        } catch (c) {}
    }
    for (var a in e) {
        if (typeof e[a] === "function") {
            e[a](window)
        }
    }
    var b;
    while (window.OX_ads && (b = OX_ads.shift())) {
        b.hasOwnProperty("slot_id") ? OX.load(b) : OX.requestAd(b)
    }
}();