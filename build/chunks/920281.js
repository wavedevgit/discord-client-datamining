/** chunk id: 920281, original params: e,t,r (module,exports,require) **/
r.d(t, {
    d: () => d
}), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162), r(508300);
var s = r(344390),
    i = r(141931),
    n = r(742459),
    l = r(430452),
    a = r(392128),
    o = r(985018);
let c = ["GQgGHISKZ5aYqYeYhX9isDUHGw", "bAgKFITWhoVvmHVRuokCdjVQaA", "XAgGDIJ/ipadd3iCiYUcWpCZBA", "HRkGDIT5aXRneomGdlvUawB7qA", "I9gNDISmlqqPmHiKd3isTp/5lg", "XxgGBIIwT2ZGpneUeZev6fWLXQ", "KzsKNIZDeYmfd3ihe1bXfr8Jxg", "J9cRDIJ6iHd/d4h4eIUJf5LyRw", "DggKFIQwtndKe3hVfXnAWQmddQ", "WggKDILeh3ePZpd6l4jln1b5SQ", "4PgJJIJVl3eAaod2iJeHj7tE8Q"];
async function d(e) {
    var t;
    let r, {
            width: d,
            height: u,
            types: f = [i.fS.CAMERA, i.fS.SCREEN, i.fS.WINDOW]
        } = e,
        h = l.Ay.getVideoDevices(),
        x = (0, n.A)(l.Ay.getMediaEngine(), f, {
            width: d,
            height: u
        }),
        p = (0, a.e)(),
        m = await p,
        _ = await x,
        g = _.filter(e => e.id.startsWith(i.fS.SCREEN)).map(e => {
            let t = e.name;
            return "Entire screen" === t ? t = o.intl.string(o.t.R4wpLN) : /^Screen \d+$/.test(t) && (t = o.intl.formatToPlainString(o.t["y/R7n4"], {
                index: parseInt(t.split(" ")[1])
            })), {
                ...e,
                name: t
            }
        }),
        j = (t = _.filter(e => e.id.startsWith(i.fS.WINDOW)), r = {}, m.forEach(e => {
            r[e.id] = e
        }), t.forEach(e => {
            r[e.id] = e
        }), Object.values(r)),
        v = [];
    return f.includes(i.fS.CAMERA) && (v = Object.entries(h).filter(e => {
        let [t, r] = e;
        return !r.disabled
    }).map((e, t) => {
        let [r, i] = e, n = c[t % c.length], l = Uint8Array.from(atob(n), e => e.charCodeAt(0)), a = (0, s.V1)(l);
        return {
            id: "camera:" + i.id,
            name: i.name,
            url: a
        }
    })), {
        windowSources: j,
        screenSources: g,
        cameraSources: v
    }
}