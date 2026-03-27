/** chunk id: 830917 params = (module,exports,require) **/
function i(e) {
    let {
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: i,
        maxDimensions: a,
        imageRotation: r = 0
    } = e, o = t.naturalWidth / t.width, s = function(e, t) {
        let {
            x: n,
            y: i
        } = e;
        switch (t) {
            case 90:
                return {
                    x: i, y: -n
                };
            case 180:
                return {
                    x: -n, y: -i
                };
            case 270:
                return {
                    x: -i, y: n
                };
            default:
                return {
                    x: n, y: i
                }
        }
    }(i, r), l = r % 180 != 0, c = n.width * o, _ = n.height * o, d = Math.min(c, a.width), A = Math.min(_, a.height), u = (l ? n.height : n.width) / 2, g = (l ? n.width : n.height) / 2, m = (t.width / 2 - u - s.x) * o, h = (t.height / 2 - g - s.y) * o, L = l ? _ : c, x = l ? c : _, {
        x: C,
        y: N
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
    }(c, _, r);
    return a.width < c && (C *= a.width / c), a.height < _ && (N *= a.height / _), {
        sourceX: m,
        sourceY: h,
        sourceWidth: L,
        sourceHeight: x,
        destinationX: C,
        destinationY: N,
        destinationWidth: l ? A : d,
        destinationHeight: l ? d : A,
        canvasWidth: d,
        canvasHeight: A
    }
}

function a(e) {
    let {
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: a,
        maxDimensions: r,
        imageRotation: o = 0
    } = e, {
        sourceX: s,
        sourceY: l,
        sourceWidth: c,
        sourceHeight: _,
        destinationX: d,
        destinationY: A,
        destinationWidth: u,
        destinationHeight: g,
        canvasWidth: m,
        canvasHeight: h
    } = i({
        image: t,
        cropDimensions: n,
        cropOriginCoordinates: a,
        maxDimensions: r,
        imageRotation: o
    }), L = document.createElement("canvas");
    L.width = m, L.height = h;
    let x = L.getContext("2d");
    return null != x && (x.rotate(o * Math.PI / 180), x.drawImage(t, s, l, c, _, d, A, u, g)), L.toDataURL("image/png")
}

function r(e, t, n) {
    let i = e.naturalWidth / e.naturalHeight,
        r = t,
        o = n;
    e.naturalWidth > e.naturalHeight ? r /= i : o *= i;
    let s = {
        height: r,
        width: o
    };
    return a({
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
    R7: () => i,
    h_: () => r,
    iL: () => a
})