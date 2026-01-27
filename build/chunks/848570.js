/** Chunk was on web.js **/
/** chunk id: 848570, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
}), n(896048);
var r = n(64700),
    i = n(143236),
    a = n(719442),
    o = n(264322),
    s = n(861382),
    l = n(267102),
    c = n(253932),
    u = n(408018),
    d = n(870748),
    f = n(414940),
    p = n(407315),
    _ = n(119707),
    h = n(913728),
    m = n(113001),
    g = n(2368),
    E = n(999978);
n(665611);
var y = n(552046),
    b = n(270265),
    O = n(236576),
    v = n(350971),
    A = n(18722),
    I = n(551483);

function S(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            S(e, t, n[t])
        })
    }
    return e
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function N(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function w(e) {
    let t = r.useContext(l.Ay),
        n = c.SI.useSetting(),
        [i] = r.useState(() => {
            let r = (0, a.ie)();
            return r.children = (0, u.x7)(""), r.selection = {
                anchor: I.K,
                focus: I.K
            }, R(N(T({}, e), {
                editor: r,
                windowContext: t,
                previewMarkdown: n
            })), r
        });
    return r.useEffect(() => {
        let e = () => i.onChange();
        return s.A.addChangeListener(e), o.Ay.addChangeListener(e), () => {
            s.A.removeChangeListener(e), o.Ay.removeChangeListener(e)
        }
    }, [i]), r.useEffect(() => {
        i.previewMarkdown !== n && (i.previewMarkdown = n, i.onChange())
    }, [i, n]), i
}

function R(e) {
    var t, n, r;
    let {
        editor: a,
        chatInputType: o,
        channel: s,
        canUseCommands: l,
        canOnlyUseTextCommands: c,
        windowContext: u,
        previewMarkdown: I,
        forTests: S,
        onChangeStart: T,
        onChangeEnd: C,
        updateState: N
    } = e, w = a, {
        onChange: R
    } = w;
    w.chatInputType = o, w.windowContext = u, w.previewMarkdown = I, w.composition = null, w.events = new i.EventEmitter, w.isMac = "MacIntel" === navigator.platform, w.onChange = () => {
        w.events.emit("onChange"), R()
    }, w = (0, b.o)(w, !0 === S), w = (0, y.A)(w), w = (0, E.A)(w), (null == (t = o.commands) ? void 0 : t.enabled) && (w = (0, d.A)(w, s, !0 === l, !0 === c)), w = (0, g.Ay)(w, s.guild_id, s.id), (null == (n = o.markdown) ? void 0 : n.disableBlockQuotes) || (w = (0, f.A)(w)), (null == (r = o.markdown) ? void 0 : r.disableCodeBlocks) || (w = (0, p.Ay)(w)), S && (w = (0, v.A)(w)), w = (0, m.A)(w), w = (0, _.A)(w), w = (0, O.A)(w), w = (0, A.A)(w, T, C), w = (0, h.A)(w, e => {
        let {
            newValue: t,
            newSelection: n
        } = e;
        return N(w, "undo", {
            value: t,
            selection: n
        })
    })
}