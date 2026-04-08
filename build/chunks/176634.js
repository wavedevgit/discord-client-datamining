/** chunk id: 176634 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(64700),
    a = n(621466),
    r = n(654108);

function l(e) {
    let {
        onPasteFiles: t,
        onPasteBackgroundText: n
    } = e;
    i.useEffect(() => {
        let e = e => {
            let i = e.clipboardData?.files;
            if (null != i && i.length > 0) null != t && (e.preventDefault(), e.stopPropagation(), t(i));
            else if (null != n && !(0, r.A)((0, a.BF)(e))) {
                let t = e.clipboardData?.getData("text");
                null != t && (e.preventDefault(), e.stopPropagation(), n(t))
            }
        };
        return document.addEventListener("paste", e, !0), () => {
            document.removeEventListener("paste", e, !0)
        }
    }, [t, n])
}