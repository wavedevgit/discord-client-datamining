/** chunk id: 57990, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(989349),
    i = n.n(l),
    a = n(253932),
    r = n(954571),
    s = n(815484),
    o = n(403918),
    u = n(652215);

function d(e) {
    let {
        text: t,
        emojiInfo: n,
        clearAfter: l,
        analyticsContext: d,
        createdAtMs: c,
        prompt: m,
        analyticsLocations: f
    } = e, p = t.trim();
    if (!(p.length > 0) && null == n) return a.G2.updateSetting(void 0);
    {
        let e = a.G2.updateSetting({
            text: p.length > 0 ? p : "",
            expiresAtMs: null != l && l !== o.yt.DONT_CLEAR ? String(i()().add((0, s.A)(l), "ms").toDate().getTime()) : "0",
            emojiId: null != n && null != n.id ? n.id : "0",
            emojiName: null != n ? n.name : "",
            createdAtMs: String(c ?? i()().toDate().getTime())
        });
        return r.default.track(u.HAw.CUSTOM_STATUS_UPDATED, {
            location: null != d ? d.location : null,
            emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
            text_len: p.length,
            clear_after: null != l ? `${l}` : null,
            prompt_type: m?.value,
            location_stack: f
        }), e
    }
}