/** chunk id: 932340 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(397927),
    s = n(966871),
    o = n(447404),
    d = n(186111),
    c = n(430452),
    u = n(734066),
    A = n(274372),
    _ = n(915618),
    h = n(361157),
    m = n(798817),
    g = n(696016),
    p = n(985018);

function E(e) {
    let {
        canShowReminder: t = !1
    } = e, E = (0, _.A)(c.Ay), {
        showClipsHeaderEntrypoint: I
    } = u.L_.useConfig({
        location: "ClipsButton"
    }), {
        hasNewClips: f,
        lastClipsSession: C,
        remindersEnabled: T,
        hasAnyClipAnimations: N
    } = (0, r.cf)([A.A], () => ({
        hasNewClips: A.A.getNewClipIds().length > 0,
        lastClipsSession: A.A.getLastClipsSession(),
        remindersEnabled: A.A.getSettings().remindersEnabled,
        hasAnyClipAnimations: A.A.hasAnyClipAnimations()
    })), S = null != C && C.newClipIds.length > 0, x = (0, h.K)(e => e.clipsButtonRef), v = (0, h.K)(e => e.setClipsButtonRef), b = (0, r.bG)([d.A], () => d.A.hasLayers()), {
        preventIdle: y,
        allowIdle: O
    } = (0, o.o)("animation");

    function L() {
        (0, l.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("42784"), n.e("72897")]).then(n.bind(n, 543428));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            modalKey: g.nm
        })
    }
    return (a.useEffect(() => (N ? y() : O(), () => O()), [N, y, O]), I && E) ? (0, i.jsxs)(i.Fragment, {
        children: [null != x && t && T && S && !(0, l.ueM)() && !b && (0, i.jsx)(m.A, {
            clipIconRef: x,
            lastClipsSession: C,
            onOpenClipsGallery: L
        }), (0, i.jsx)("div", {
            ref: v,
            children: (0, i.jsx)(s.A, {
                icon: l.xgA,
                showBadge: f,
                tooltip: p.intl.string(p.t.MXaLEM),
                onClick: L
            })
        })]
    }) : null
}