package th;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    private final n[] f48859a = new n[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f48860b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f48861c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f48862d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f48863e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f48864f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final n f48865g = new n();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f48866h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f48867i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f48868j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f48869k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f48870l = true;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        static final m f48871a = new m();
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
        public final l f48872a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f48873b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f48874c;

        /* renamed from: d  reason: collision with root package name */
        public final b f48875d;

        /* renamed from: e  reason: collision with root package name */
        public final float f48876e;

        c(l lVar, float f10, RectF rectF, b bVar, Path path) {
            this.f48875d = bVar;
            this.f48872a = lVar;
            this.f48876e = f10;
            this.f48874c = rectF;
            this.f48873b = path;
        }
    }

    public m() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f48859a[i10] = new n();
            this.f48860b[i10] = new Matrix();
            this.f48861c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f48866h[0] = this.f48859a[i10].k();
        this.f48866h[1] = this.f48859a[i10].l();
        this.f48860b[i10].mapPoints(this.f48866h);
        if (i10 == 0) {
            Path path = cVar.f48873b;
            float[] fArr = this.f48866h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f48873b;
            float[] fArr2 = this.f48866h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f48859a[i10].d(this.f48860b[i10], cVar.f48873b);
        b bVar = cVar.f48875d;
        if (bVar != null) {
            bVar.a(this.f48859a[i10], this.f48860b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f48866h[0] = this.f48859a[i10].i();
        this.f48866h[1] = this.f48859a[i10].j();
        this.f48860b[i10].mapPoints(this.f48866h);
        this.f48867i[0] = this.f48859a[i11].k();
        this.f48867i[1] = this.f48859a[i11].l();
        this.f48860b[i11].mapPoints(this.f48867i);
        float[] fArr = this.f48866h;
        float f10 = fArr[0];
        float[] fArr2 = this.f48867i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float j10 = j(cVar.f48874c, i10);
        this.f48865g.n(0.0f, 0.0f);
        g k10 = k(i10, cVar.f48872a);
        k10.b(max, j10, cVar.f48876e, this.f48865g);
        this.f48868j.reset();
        this.f48865g.d(this.f48861c[i10], this.f48868j);
        if (this.f48870l && (k10.a() || m(this.f48868j, i10) || m(this.f48868j, i11))) {
            Path path = this.f48868j;
            path.op(path, this.f48864f, Path.Op.DIFFERENCE);
            this.f48866h[0] = this.f48865g.k();
            this.f48866h[1] = this.f48865g.l();
            this.f48861c[i10].mapPoints(this.f48866h);
            Path path2 = this.f48863e;
            float[] fArr3 = this.f48866h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f48865g.d(this.f48861c[i10], this.f48863e);
        } else {
            this.f48865g.d(this.f48861c[i10], cVar.f48873b);
        }
        b bVar = cVar.f48875d;
        if (bVar != null) {
            bVar.b(this.f48865g, this.f48861c[i10], i10);
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
        float[] fArr = this.f48866h;
        n nVar = this.f48859a[i10];
        fArr[0] = nVar.f48879c;
        fArr[1] = nVar.f48880d;
        this.f48860b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f48866h[1]);
        }
        return Math.abs(rectF.centerX() - this.f48866h[0]);
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
        return a.f48871a;
    }

    private boolean m(Path path, int i10) {
        this.f48869k.reset();
        this.f48859a[i10].d(this.f48860b[i10], this.f48869k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f48869k.computeBounds(rectF, true);
        path.op(this.f48869k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void n(c cVar, int i10, float[] fArr) {
        th.c cVar2;
        if (fArr == null) {
            cVar2 = h(i10, cVar.f48872a);
        } else {
            cVar2 = new th.c(fArr[i10]);
        }
        i(i10, cVar.f48872a).b(this.f48859a[i10], 90.0f, cVar.f48876e, cVar.f48874c, cVar2);
        float a10 = a(i10);
        this.f48860b[i10].reset();
        g(i10, cVar.f48874c, this.f48862d);
        Matrix matrix = this.f48860b[i10];
        PointF pointF = this.f48862d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f48860b[i10].preRotate(a10);
    }

    private void o(int i10) {
        this.f48866h[0] = this.f48859a[i10].i();
        this.f48866h[1] = this.f48859a[i10].j();
        this.f48860b[i10].mapPoints(this.f48866h);
        float a10 = a(i10);
        this.f48861c[i10].reset();
        Matrix matrix = this.f48861c[i10];
        float[] fArr = this.f48866h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f48861c[i10].preRotate(a10);
    }

    public void d(l lVar, float f10, RectF rectF, Path path) {
        e(lVar, f10, rectF, null, path);
    }

    public void e(l lVar, float f10, RectF rectF, b bVar, Path path) {
        f(lVar, null, f10, rectF, bVar, path);
    }

    public void f(l lVar, float[] fArr, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f48863e.rewind();
        this.f48864f.rewind();
        this.f48864f.addRect(rectF, Path.Direction.CW);
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
        this.f48863e.close();
        if (!this.f48863e.isEmpty()) {
            path.op(this.f48863e, Path.Op.UNION);
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
