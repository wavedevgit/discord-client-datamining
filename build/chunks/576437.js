/** Chunk was on 97492 **/
/** chunk id: 576437, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(379848),
    o = n(832248),
    c = n(201805),
    u = n(253932),
    d = n(186111),
    p = n(461213),
    h = n(954571),
    f = n(130802),
    g = n(652215),
    m = n(49999),
    b = n(654487);
let A = e => {
    let {
        children: t,
        isForceShowSharingPopout: n,
        setIsForceShowSharingPopout: A,
        popoutTargetRef: y
    } = e, _ = function(e) {
        let {
            isForceShowSharingPopout: t
        } = e, {
            isQuestBarEmpty: n,
            hasLoadedQuestBar: r
        } = (0, c.c9)({
            location: b.rE.CONFLICT_CHECKS
        }), l = u.tz.useSetting(), s = (0, i.bG)([d.A], () => d.A.getLayers().includes(g.zgK.USER_SETTINGS)), a = (0, i.bG)([p.A], () => p.A.getStatus()), {
            isOpen: h
        } = (0, o.A)();
        if ((n && r || t) && !s && !h && !__OVERLAY__) {
            if (!l && a === g.clD.INVISIBLE) return t ? f.u5.ActivityAndStatus : f.u5.ActivityAndStatusNux;
            if (!l) return t ? f.u5.Activity : f.u5.ActivityNux;
            if (a === g.clD.INVISIBLE) return t ? f.u5.Status : f.u5.StatusNux
        }
        return null
    }({
        isForceShowSharingPopout: n
    });
    (0, l.useEffect)(() => {
        n && h.default.track(g.HAw.OPEN_POPOUT, {
            type: "SharingPrivacyPopout"
        })
    }, [n]);
    let O = n ? [] : [s.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(a.Ay, {
        contentTypes: O,
        children: e => {
            let {
                visibleContent: l,
                markAsDismissed: i
            } = e, a = l === s.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(f.zd, {
                showPopout: a,
                popoutState: _,
                handleClose: () => {
                    i(m.i.USER_DISMISS), A(!1)
                },
                popoutTargetRef: y,
                children: t
            })
        }
    })
}