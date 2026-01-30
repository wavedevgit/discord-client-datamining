/** chunk id: 646648, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    o = n(833349),
    s = n(90644),
    l = n(353411),
    c = n(879945),
    u = n(939496),
    d = n(993401),
    f = n(652215),
    p = n(996988),
    _ = n(985018),
    h = n(380297);

function m(e) {
    var t, n, m, g, E;
    let {
        user: y,
        activity: b,
        onAction: O
    } = e, {
        themeType: v
    } = (0, u.E)(), A = (0, l._B)(b, y), I = (0, l.J$)(b, y);
    if (!(0, s.A)(b) || !(0, o.A)(b, f.jUm.PLAY) && !(0, o.A)(b, f.jUm.SYNC)) return null;
    let S = e => {
            null == e || e.stopPropagation(), null == O || O({
                action: "PRESS_PLAY_ON_SPOTIFY_BUTTON"
            }), A.onClick()
        },
        T = e => {
            e.stopPropagation(), null == O || O({
                action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON"
            }), I.onClick()
        };
    return v === p.d.MODAL_V2 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.m, {
            text: I.tooltip,
            children: (0, r.jsx)(d.FD, {
                text: null != (g = I.label) ? g : _.intl.string(_.t.eU3inB),
                onClick: T,
                disabled: I.disabled,
                loading: I.loading
            })
        }), (0, r.jsx)(i.m, {
            text: A.tooltip,
            children: (0, r.jsx)(d.FD, {
                text: null != (E = A.label) ? E : _.intl.string(_.t.rRffNz),
                onClick: S,
                disabled: A.disabled,
                loading: A.loading
            })
        })]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: h.FS,
            children: (0, r.jsx)(i.m, {
                text: A.tooltip,
                children: (0, r.jsx)(d.FD, {
                    icon: () => (0, r.jsx)(c.A, {}),
                    text: null != (t = A.label) ? t : _.intl.string(_.t.rRffNz),
                    onClick: S,
                    disabled: A.disabled,
                    loading: A.loading,
                    fullWidth: !0
                })
            })
        }), (0, r.jsx)(d.q3, {
            icon: a.J2m,
            tooltipText: null != (n = I.tooltip) ? n : _.intl.string(_.t.eU3inB),
            "aria-label": null != (m = I.label) ? m : _.intl.string(_.t.eU3inB),
            disabled: I.disabled,
            loading: I.loading,
            onClick: T
        })]
    })
}