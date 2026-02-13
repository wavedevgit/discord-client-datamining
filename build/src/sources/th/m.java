package th;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    private final n[] f49428a = new n[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f49429b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f49430c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f49431d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f49432e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f49433f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final n f49434g = new n();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f49435h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f49436i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f49437j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f49438k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f49439l = true;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        static final m f49440a = new m();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(n nVar, Matrix matrix, int i10);

        void b(n nVar, Matrix matrix, int i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final l f49441a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f49442b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f49443c;

        /* renamed from: d  reason: collision with root package name */
        public final b f49444d;

        /* renamed from: e  reason: collision with root package name */
        public final float f49445e;

        c(l lVar, float f10, RectF rectF, b bVar, Path path) {
            this.f49444d = bVar;
            this.f49441a = lVar;
            this.f49445e = f10;
            this.f49443c = rectF;
            this.f49442b = path;
        }
    }

    public m() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f49428a[i10] = new n();
            this.f49429b[i10] = new Matrix();
            this.f49430c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f49435h[0] = this.f49428a[i10].k();
        this.f49435h[1] = this.f49428a[i10].l();
        this.f49429b[i10].mapPoints(this.f49435h);
        if (i10 == 0) {
            Path path = cVar.f49442b;
            float[] fArr = this.f49435h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f49442b;
            float[] fArr2 = this.f49435h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f49428a[i10].d(this.f49429b[i10], cVar.f49442b);
        b bVar = cVar.f49444d;
        if (bVar != null) {
            bVar.a(this.f49428a[i10], this.f49429b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f49435h[0] = this.f49428a[i10].i();
        this.f49435h[1] = this.f49428a[i10].j();
        this.f49429b[i10].mapPoints(this.f49435h);
        this.f49436i[0] = this.f49428a[i11].k();
        this.f49436i[1] = this.f49428a[i11].l();
        this.f49429b[i11].mapPoints(this.f49436i);
        float[] fArr = this.f49435h;
        float f10 = fArr[0];
        float[] fArr2 = this.f49436i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float j10 = j(cVar.f49443c, i10);
        this.f49434g.n(0.0f, 0.0f);
        g k10 = k(i10, cVar.f49441a);
        k10.b(max, j10, cVar.f49445e, this.f49434g);
        this.f49437j.reset();
        this.f49434g.d(this.f49430c[i10], this.f49437j);
        if (this.f49439l && (k10.a() || m(this.f49437j, i10) || m(this.f49437j, i11))) {
            Path path = this.f49437j;
            path.op(path, this.f49433f, Path.Op.DIFFERENCE);
            this.f49435h[0] = this.f49434g.k();
            this.f49435h[1] = this.f49434g.l();
            this.f49430c[i10].mapPoints(this.f49435h);
            Path path2 = this.f49432e;
            float[] fArr3 = this.f49435h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f49434g.d(this.f49430c[i10], this.f49432e);
        } else {
            this.f49434g.d(this.f49430c[i10], cVar.f49442b);
        }
        b bVar = cVar.f49444d;
        if (bVar != null) {
            bVar.b(this.f49434g, this.f49430c[i10], i10);
        }
    }

    private void g(int i10, RectF rectF, PointF pointF) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    pointF.set(rectF.right, rectF.top);
                    return;
                } else {
                    pointF.set(rectF.left, rectF.top);
                    return;
                }
            }
            pointF.set(rectF.left, rectF.bottom);
            return;
        }
        pointF.set(rectF.right, rectF.bottom);
    }

    private e i(int i10, l lVar) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return lVar.s();
                }
                return lVar.q();
            }
            return lVar.i();
        }
        return lVar.k();
    }

    private float j(RectF rectF, int i10) {
        float[] fArr = this.f49435h;
        n nVar = this.f49428a[i10];
        fArr[0] = nVar.f49448c;
        fArr[1] = nVar.f49449d;
        this.f49429b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f49435h[1]);
        }
        return Math.abs(rectF.centerX() - this.f49435h[0]);
    }

    private g k(int i10, l lVar) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return lVar.o();
                }
                return lVar.p();
            }
            return lVar.n();
        }
        return lVar.h();
    }

    public static m l() {
        return a.f49440a;
    }

    private boolean m(Path path, int i10) {
        this.f49438k.reset();
        this.f49428a[i10].d(this.f49429b[i10], this.f49438k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f49438k.computeBounds(rectF, true);
        path.op(this.f49438k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void n(c cVar, int i10, float[] fArr) {
        th.c cVar2;
        if (fArr == null) {
            cVar2 = h(i10, cVar.f49441a);
        } else {
            cVar2 = new th.c(fArr[i10]);
        }
        i(i10, cVar.f49441a).b(this.f49428a[i10], 90.0f, cVar.f49445e, cVar.f49443c, cVar2);
        float a10 = a(i10);
        this.f49429b[i10].reset();
        g(i10, cVar.f49443c, this.f49431d);
        Matrix matrix = this.f49429b[i10];
        PointF pointF = this.f49431d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f49429b[i10].preRotate(a10);
    }

    private void o(int i10) {
        this.f49435h[0] = this.f49428a[i10].i();
        this.f49435h[1] = this.f49428a[i10].j();
        this.f49429b[i10].mapPoints(this.f49435h);
        float a10 = a(i10);
        this.f49430c[i10].reset();
        Matrix matrix = this.f49430c[i10];
        float[] fArr = this.f49435h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f49430c[i10].preRotate(a10);
    }

    public void d(l lVar, float f10, RectF rectF, Path path) {
        e(lVar, f10, rectF, null, path);
    }

    public void e(l lVar, float f10, RectF rectF, b bVar, Path path) {
        f(lVar, null, f10, rectF, bVar, path);
    }

    public void f(l lVar, float[] fArr, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f49432e.rewind();
        this.f49433f.rewind();
        this.f49433f.addRect(rectF, Path.Direction.CW);
        c cVar = new c(lVar, f10, rectF, bVar, path);
        for (int i10 = 0; i10 < 4; i10++) {
            n(cVar, i10, fArr);
            o(i10);
        }
        for (int i11 = 0; i11 < 4; i11++) {
            b(cVar, i11);
            c(cVar, i11);
        }
        path.close();
        this.f49432e.close();
        if (!this.f49432e.isEmpty()) {
            path.op(this.f49432e, Path.Op.UNION);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d h(int i10, l lVar) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return lVar.t();
                }
                return lVar.r();
            }
            return lVar.j();
        }
        return lVar.l();
    }
}
