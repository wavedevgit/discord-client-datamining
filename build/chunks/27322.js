/** Chunk was on web.js **/
/** chunk id: 27322, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(353640),
    o = n(110259),
    s = n(554146),
    l = n(342494),
    c = n(397927),
    u = n(359549),
    d = n(793574),
    f = n(688810),
    p = n(139286),
    _ = n(627363),
    h = n(826673),
    m = n(379848),
    g = n(49999),
    E = n(985018),
    y = n(529071);
let b = (0, a.v)(e => ({
        activeEntryId: null,
        setActiveEntryId: t => e({
            activeEntryId: t
        })
    })),
    O = e => {
        let {
            entry: t,
            isFirstApplicationOccurrence: n,
            targetElementRef: a
        } = e, {
            data: O
        } = (0, _.YY)(t.extra.application_id), {
            analyticsLocations: v
        } = (0, f.Ay)(d.A.CLOUD_PLAY_POPOVER), A = (0, u.A)({
            application: O,
            analyticsLocations: v
        }), I = (0, h.JZ)(s.M.CLOUD_PLAY_NEW_BADGE), S = null != A && !I && n, {
            activeEntryId: T,
            setActiveEntryId: C
        } = b(), N = T === t.id, w = S && N ? [s.M.CLOUD_PLAY_POPOVER] : [], [R, P] = (0, m.kn)(w), D = R === s.M.CLOUD_PLAY_POPOVER;
        i.useEffect(() => {
            S && null === T && C(t.id)
        }, [T, S, t.id, C]);
        let L = () => {
            null == A || A()
        };
        i.useEffect(() => () => {
            D && (P(g.i.USER_DISMISS), C(null))
        }, [D, P, C]);
        let [x, M] = i.useState(!1);
        i.useEffect(() => {
            D && !x && M(!0)
        }, [D, x]), (0, p.A)({
            name: o.ImpressionNames.CLOUD_PLAY_CTA,
            type: o.ImpressionTypes.VIEW,
            properties: {
                location_stack: v
            }
        }, {
            disableTrack: !x
        }, [x]);
        let j = () => {
            P(g.i.USER_DISMISS), C(null)
        };
        return (0, r.jsx)(l.AM, {
            title: E.intl.string(E.t["+WNDtV"]),
            body: E.intl.string(E.t["5QKxGI"]),
            targetElementRef: a,
            shouldShow: D,
            position: "left",
            caretConfig: {
                align: "center"
            },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: y.A
            },
            actions: [{
                icon: c.hpF,
                text: E.intl.string(E.t["jaYS/h"]),
                onClick: L
            }],
            onRequestClose: j
        })
    },
    v = e => {
        let {
            entry: t,
            isFirstApplicationOccurrence: n,
            targetElementRef: i
        } = e;
        return (0, r.jsx)(O, {
            entry: t,
            targetElementRef: i,
            isFirstApplicationOccurrence: n
        })
    }