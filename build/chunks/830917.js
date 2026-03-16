/** chunk id: 830917 params = (module,exports,require) **/
function l(e) {
    let {
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: l,
        maxDimensions: i,
        imageRotation: r = 0
    } = e, a = t.naturalWidth / t.width, s = function(e, t) {
        let {
            x: n,
            y: l
        } = e;
        switch (t) {
            case 90:
                return {
                    x: l, y: -n
                };
            case 180:
                return {
                    x: -n, y: -l
                };
            case 270:
                return {
                    x: -l, y: n
                };
            default:
                return {
                    x: n, y: l
                }
        }
    }(l, r), u = r % 180 != 0, o = n.width * a, c = n.height * a, d = Math.min(o, i.width), m = Math.min(c, i.height), h = (u ? n.height : n.width) / 2, g = (u ? n.width : n.height) / 2, x = (t.width / 2 - h - s.x) * a, j = (t.height / 2 - g - s.y) * a, f = u ? c : o, _ = u ? o : c, {
        x: b,
        y: E
    } = function(e, t, n) {
        switch (n) {
            case 0:
                return {
                    x: 0, y: 0
                };
            case 90:
                return {
                    x: 0, y: -e
                };
            case 180:
                return {
                    x: -e, y: -t
                };
            case 270:
                return {
                    x: -t, y: 0
                }
        }
    }(o, c, r);
    return i.width < o && (b *= i.width / o), i.height < c && (E *= i.height / c), {
        sourceX: x,
        sourceY: j,
        sourceWidth: f,
        sourceHeight: _,
        destinationX: b,
        destinationY: E,
        destinationWidth: u ? m : d,
        destinationHeight: u ? d : m,
        canvasWidth: d,
        canvasHeight: m
    }
}

function i(e) {
    let {
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: i,
        maxDimensions: r,
        imageRotation: a = 0
    } = e, {
        sourceX: s,
        sourceY: u,
        sourceWidth: o,
        sourceHeight: c,
        destinationX: d,
        destinationY: m,
        destinationWidth: h,
        destinationHeight: g,
        canvasWidth: x,
        canvasHeight: j
    } = l({
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: i,
        maxDimensions: r,
        imageRotation: a
    }), f = document.createElement("canvas");
    f.width = x, f.height = j;
    let _ = f.getContext("2d");
    return null != _ && (_.rotate(a * Math.PI / 180), _.drawImage(t, s, u, o, c, d, m, h, g)), f.toDataURL("image/png")
}

function r(e, t, n) {
    let l = e.naturalWidth / e.naturalHeight,
        r = t,
        a = n;
    e.naturalWidth > e.naturalHeight ? r /= l : a *= l;
    let s = {
        height: r,
        width: a
    };
    return i({
        image: e,
        cropDimensions: {
            width: e.width,
            height: e.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: s
    })
}
n.d(t, {
    R7: () => l,
    h_: () => r,
    iL: () => i
})