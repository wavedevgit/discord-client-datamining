/** Chunk was on 92917 **/
/** chunk id: 81437, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(157559),
    i = n(734057),
    l = n(576705),
    a = n(994500),
    s = n(694318),
    o = n(652215),
    c = n(985018);

function u(e, t) {
    if (a.A.isBlockedForMessage(e)) return r.A.show({
        title: c.intl.string(c.t["j7eA/g"]),
        body: c.intl.formatToPlainString(c.t.dTNNgr, {
            name: e.author.username
        }),
        confirmText: c.intl.string(c.t.BddRzS)
    }), !1;
    if (a.A.isIgnoredForMessage(e)) return r.A.show({
        title: c.intl.string(c.t.XyWoKV),
        body: c.intl.formatToPlainString(c.t["8t8doK"], {
            name: e.author.username
        }),
        confirmText: c.intl.string(c.t.BddRzS)
    }), !1;
    if ((0, s.kf)(e)) {
        let n = i.A.getChannel(e.channel_id);
        return (null == n ? void 0 : n.isPrivate()) || l.A.can(o.xBc.MODERATE_MEMBERS, n) ? r.A.show({
            title: c.intl.string(c.t["cZcG+P"]),
            body: c.intl.formatToPlainString(c.t["1YTWty"], {
                name: e.author.username
            }),
            confirmText: c.intl.string(c.t["+TSRGD"]),
            cancelText: c.intl.string(c.t["ETE/oC"]),
            onConfirm: t
        }) : r.A.show({
            title: c.intl.string(c.t["6vJKFk"]),
            body: c.intl.formatToPlainString(c.t.zKNgPF, {
                name: e.author.username
            }),
            confirmText: c.intl.string(c.t.BddRzS)
        }), !1
    }
    return !0
}