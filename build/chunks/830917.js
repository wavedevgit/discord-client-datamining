/** chunk id: 830917 params = (module,exports,require) **/
function a(t) {
    let {
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: a,
        maxDimensions: n,
        imageRotation: r = 0,
        flipHorizontal: h = !1
    } = t, o = e.naturalWidth / e.width, _ = function(t, e) {
        let i, a, {
                x: n,
                y: r
            } = t,
            h = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 90:
                i = r, a = -n;
                break;
            case 180:
                i = -n, a = -r;
                break;
            case 270:
                i = -r, a = n;
                break;
            default:
                i = n, a = r
        }
        return {
            x: h ? -i : i,
            y: a
        }
    }(a, r, h), l = r % 180 != 0, d = i.width * o, s = i.height * o, u = Math.min(d, n.width), c = Math.min(s, n.height), g = (l ? i.height : i.width) / 2, w = (l ? i.width : i.height) / 2, y = (e.width / 2 - g - _.x) * o, m = (e.height / 2 - w - _.y) * o, p = l ? s : d, x = l ? d : s, {
        x: v,
        y: b
    } = function(t, e, i) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (a) switch (i) {
            case 0:
                return {
                    x: -t, y: 0
                };
            case 90:
                return {
                    x: -e, y: -t
                };
            case 180:
                return {
                    x: 0, y: -e
                };
            case 270:
                return {
                    x: 0, y: 0
                }
        } else switch (i) {
            case 0:
                return {
                    x: 0, y: 0
                };
            case 90:
                return {
                    x: 0, y: -t
                };
            case 180:
                return {
                    x: -t, y: -e
                };
            case 270:
                return {
                    x: -e, y: 0
                }
        }
    }(d, s, r, h);
    return n.width < d && (v *= n.width / d), n.height < s && (b *= n.height / s), {
        sourceX: y,
        sourceY: m,
        sourceWidth: p,
        sourceHeight: x,
        destinationX: v,
        destinationY: b,
        destinationWidth: l ? c : u,
        destinationHeight: l ? u : c,
        canvasWidth: u,
        canvasHeight: c
    }
}

function n(t) {
    let {
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: n,
        maxDimensions: r,
        imageRotation: h = 0,
        flipHorizontal: o = !1
    } = t, {
        sourceX: _,
        sourceY: l,
        sourceWidth: d,
        sourceHeight: s,
        destinationX: u,
        destinationY: c,
        destinationWidth: g,
        destinationHeight: w,
        canvasWidth: y,
        canvasHeight: m
    } = a({
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: n,
        maxDimensions: r,
        imageRotation: h,
        flipHorizontal: o
    }), p = document.createElement("canvas");
    p.width = y, p.height = m;
    let x = p.getContext("2d");
    if (null != x) {
        o && x.scale(-1, 1);
        let t = o ? -h : h;
        x.rotate(t * Math.PI / 180), x.drawImage(e, _, l, d, s, u, c, g, w)
    }
    return p.toDataURL("image/png")
}

function r(t, e, i) {
    let a = t.naturalWidth / t.naturalHeight,
        r = e,
        h = i;
    t.naturalWidth > t.naturalHeight ? r /= a : h *= a;
    let o = {
        height: r,
        width: h
    };
    return n({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: o
    })
}
i.d(e, {
    R7: () => a,
    h_: () => r,
    iL: () => n
})