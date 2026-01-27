/** Chunk was on 52390 **/
/** chunk id: 541702, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(311907),
    l = n(517019),
    i = n(287809);

function a(e) {
    let t = e.nsfw,
        n = !1 === (0, r.bG)([i.default], () => {
            var e;
            return null == (e = i.default.getCurrentUser()) ? void 0 : e.nsfwAllowed
        }),
        a = !(0, r.bG)([l.A], () => l.A.didAgree(e.guild_id));
    return t && (a || n)
}