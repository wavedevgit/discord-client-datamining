/** chunk id: 495565 params = (module,exports,require) **/
a.d(t, {
    r: () => l
}), a(321073);
var n = a(64700),
    r = a(575593),
    i = a(985018);
let s = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return i.intl.formatToPlainString(i.t["/0Yndu"], {
            num: e.bundledProducts?.length
        });
        let a = e.bundledProducts ?? [],
            n = [],
            s = !1;
        for (let e of a) switch (e.type) {
            case r.R.AVATAR_DECORATION:
                n.push(i.intl.formatToPlainString(i.t.Ntv9Jt, {
                    itemName: e.name
                }));
                break;
            case r.R.PROFILE_EFFECT:
                n.push(i.intl.formatToPlainString(i.t["3Y8q7a"], {
                    itemName: e.name
                }));
                break;
            case r.R.NAMEPLATE:
                n.push(i.intl.formatToPlainString(i.t["2keXky"], {
                    itemName: e.name
                })), s = !0
        }
        if (s) {
            let e = n.join(", ").replace(/, ([^,]*)$/, " & $1");
            return i.intl.formatToPlainString(i.t.Ofrqj6, {
                joinedItems: e
            })
        }
        let l = n.join(" & ");
        return i.intl.formatToPlainString(i.t.Ofrqj6, {
            joinedItems: l
        })
    },
    l = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, n.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === r.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let a = s(e, t);
                    return e.summary.replace("{joinedItems}", a)
                }
                return e.summary
            }
            switch (e?.type) {
                case r.R.AVATAR_DECORATION:
                    return i.intl.string(i.t["3lv7q2"]);
                case r.R.PROFILE_EFFECT:
                    return i.intl.string(i.t.VhJL72);
                case r.R.NAMEPLATE:
                    return i.intl.string(i.t.ik37EZ);
                case r.R.BUNDLE:
                    return s(e, t);
                default:
                    return ""
            }
        }, [e, t])
    }