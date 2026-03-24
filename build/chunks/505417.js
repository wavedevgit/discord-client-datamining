/** chunk id: 505417 params = (module,exports,require) **/
n.d(t, {
    l: () => a
});
var i = n(985018);

function a(e) {
    let {
        isVoiceChannel: t,
        isHubGuild: n,
        isOwnInvite: a,
        isGuest: r,
        isStage: l,
        isStream: s
    } = e;
    if (t)
        if (a)
            if (s) return i.intl.string(i.t.N85DCl);
            else if (l) return i.intl.string(i.t.TJQcNv);
    else if (r) return i.intl.string(i.t.mJyBir);
    else return i.intl.string(i.t.lxTgP9);
    else if (s) return i.intl.string(i.t.Mnvc3C);
    else if (l) return i.intl.string(i.t.FdPNr5);
    else if (r) return i.intl.string(i.t.f4gmrf);
    else return i.intl.string(i.t.H39rEY);
    return n ? a ? i.intl.string(i.t.UxmnHx) : i.intl.string(i.t.sigPEf) : a ? i.intl.string(i.t["oU/lsl"]) : i.intl.string(i.t.BoQUFf)
}