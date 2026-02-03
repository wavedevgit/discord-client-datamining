package oh;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final m[] f43832a = new m[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f43833b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f43834c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f43835d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f43836e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f43837f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final m f43838g = new m();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f43839h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f43840i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f43841j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f43842k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f43843l = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f43844a = new l();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(m mVar, Matrix matrix, int i10);

        void b(m mVar, Matrix matrix, int i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final k f43845a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f43846b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f43847c;

        /* renamed from: d  reason: collision with root package name */
        public final b f43848d;

        /* renamed from: e  reason: collision with root package name */
        public final float f43849e;

        c(k kVar, float f10, RectF rectF, b bVar, Path path) {
            this.f43848d = bVar;
            this.f43845a = kVar;
            this.f43849e = f10;
            this.f43847c = rectF;
            this.f43846b = path;
        }
    }

    public l() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f43832a[i10] = new m();
            this.f43833b[i10] = new Matrix();
            this.f43834c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f43839h[0] = this.f43832a[i10].k();
        this.f43839h[1] = this.f43832a[i10].l();
        this.f43833b[i10].mapPoints(this.f43839h);
        if (i10 == 0) {
            Path path = cVar.f43846b;
            float[] fArr = this.f43839h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f43846b;
            float[] fArr2 = this.f43839h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f43832a[i10].d(this.f43833b[i10], cVar.f43846b);
        b bVar = cVar.f43848d;
        if (bVar != null) {
            bVar.a(this.f43832a[i10], this.f43833b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f43839h[0] = this.f43832a[i10].i();
        this.f43839h[1] = this.f43832a[i10].j();
        this.f43833b[i10].mapPoints(this.f43839h);
        this.f43840i[0] = this.f43832a[i11].k();
        this.f43840i[1] = this.f43832a[i11].l();
        this.f43833b[i11].mapPoints(this.f43840i);
        float[] fArr = this.f43839h;
        float f10 = fArr[0];
        float[] fArr2 = this.f43840i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float i12 = i(cVar.f43847c, i10);
        this.f43838g.n(0.0f, 0.0f);
        f j10 = j(i10, cVar.f43845a);
        j10.b(max, i12, cVar.f43849e, this.f43838g);
        this.f43841j.reset();
        this.f43838g.d(this.f43834c[i10], this.f43841j);
        if (this.f43843l && (j10.a() || l(this.f43841j, i10) || l(this.f43841j, i11))) {
            Path path = this.f43841j;
            path.op(path, this.f43837f, Path.Op.DIFFERENCE);
            this.f43839h[0] = this.f43838g.k();
            this.f43839h[1] = this.f43838g.l();
            this.f43834c[i10].mapPoints(this.f43839h);
            Path path2 = this.f43836e;
            float[] fArr3 = this.f43839h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f43838g.d(this.f43834c[i10], this.f43836e);
        } else {
            this.f43838g.d(this.f43834c[i10], cVar.f43846b);
        }
        b bVar = cVar.f43848d;
        if (bVar != null) {
            bVar.b(this.f43838g, this.f43834c[i10], i10);
        }
    }

    private void f(int i10, RectF rectF, PointF pointF) {
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

    private oh.c g(int i10, k kVar) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return kVar.t();
                }
                return kVar.r();
            }
            return kVar.j();
        }
        return kVar.l();
    }

    private d h(int i10, k kVar) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return kVar.s();
                }
                return kVar.q();
            }
            return kVar.i();
        }
        return kVar.k();
    }

    private float i(RectF rectF, int i10) {
        float[] fArr = this.f43839h;
        m mVar = this.f43832a[i10];
        fArr[0] = mVar.f43852c;
        fArr[1] = mVar.f43853d;
        this.f43833b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f43839h[1]);
        }
        return Math.abs(rectF.centerX() - this.f43839h[0]);
    }

    private f j(int i10, k kVar) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return kVar.o();
                }
                return kVar.p();
            }
            return kVar.n();
        }
        return kVar.h();
    }

    public static l k() {
        return a.f43844a;
    }

    private boolean l(Path path, int i10) {
        this.f43842k.reset();
        this.f43832a[i10].d(this.f43833b[i10], this.f43842k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f43842k.computeBounds(rectF, true);
        path.op(this.f43842k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void m(c cVar, int i10) {
        h(i10, cVar.f43845a).b(this.f43832a[i10], 90.0f, cVar.f43849e, cVar.f43847c, g(i10, cVar.f43845a));
        float a10 = a(i10);
        this.f43833b[i10].reset();
        f(i10, cVar.f43847c, this.f43835d);
        Matrix matrix = this.f43833b[i10];
        PointF pointF = this.f43835d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f43833b[i10].preRotate(a10);
    }

    private void n(int i10) {
        this.f43839h[0] = this.f43832a[i10].i();
        this.f43839h[1] = this.f43832a[i10].j();
        this.f43833b[i10].mapPoints(this.f43839h);
        float a10 = a(i10);
        this.f43834c[i10].reset();
        Matrix matrix = this.f43834c[i10];
        float[] fArr = this.f43839h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f43834c[i10].preRotate(a10);
    }

    public void d(k kVar, float f10, RectF rectF, Path path) {
        e(kVar, f10, rectF, null, path);
    }

    public void e(k kVar, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f43836e.rewind();
        this.f43837f.rewind();
        this.f43837f.addRect(rectF, Path.Direction.CW);
        c cVar = new c(kVar, f10, rectF, bVar, path);
        for (int i10 = 0; i10 < 4; i10++) {
            m(cVar, i10);
            n(i10);
        }
        for (int i11 = 0; i11 < 4; i11++) {
            b(cVar, i11);
            c(cVar, i11);
        }
        path.close();
        this.f43836e.close();
        if (!this.f43836e.isEmpty()) {
            path.op(this.f43836e, Path.Op.UNION);
        }
    }
}
