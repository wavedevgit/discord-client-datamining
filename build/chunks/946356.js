/** Chunk was on web.js **/
/** chunk id: 946356, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(101928),
    c = n(195898),
    u = n(939496),
    d = n(436466);
let f = Object.assign(i.forwardRef(function(e, t) {
    let {
        user: n,
        displayProfile: i,
        themeType: a,
        className: f,
        pendingThemeColors: p,
        themeOverride: _,
        children: h,
        forceShowPremium: m = !1,
        forceUserTheme: g = !1
    } = e, {
        theme: E,
        primaryColor: y,
        secondaryColor: b
    } = (0, l.A)({
        user: n,
        displayProfile: i,
        pendingThemeColors: p,
        isPreview: m,
        forceUserTheme: g
    }), {
        profileThemeStyle: O,
        profileThemeClassName: v
    } = (0, c.A)({
        theme: null != _ ? _ : E,
        themeType: a,
        primaryColor: y,
        secondaryColor: b,
        forceUserTheme: g
    });
    return (0, r.jsx)("div", {
        className: o()(d.A7, v, f),
        style: O,
        ref: t,
        children: (0, r.jsx)("div", {
            className: d.vW,
            children: (0, r.jsx)(s.wXn, {
                theme: null != _ ? _ : E,
                children: (0, r.jsx)(u.U, {
                    themeType: a,
                    theme: null != _ ? _ : E,
                    primaryColor: y,
                    secondaryColor: b,
                    userId: n.id,
                    children: h
                })
            })
        })
    })
}), {
    Overlay: i.forwardRef(function(e, t) {
        let {
            children: n,
            className: i
        } = e;
        return (0, r.jsx)("div", {
            ref: t,
            className: o()(d.Lw, i),
            children: n
        })
    })
})