package oh;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final m[] f43888a = new m[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f43889b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f43890c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f43891d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f43892e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f43893f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final m f43894g = new m();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f43895h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f43896i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f43897j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f43898k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f43899l = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f43900a = new l();
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
        public final k f43901a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f43902b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f43903c;

        /* renamed from: d  reason: collision with root package name */
        public final b f43904d;

        /* renamed from: e  reason: collision with root package name */
        public final float f43905e;

        c(k kVar, float f10, RectF rectF, b bVar, Path path) {
            this.f43904d = bVar;
            this.f43901a = kVar;
            this.f43905e = f10;
            this.f43903c = rectF;
            this.f43902b = path;
        }
    }

    public l() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f43888a[i10] = new m();
            this.f43889b[i10] = new Matrix();
            this.f43890c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f43895h[0] = this.f43888a[i10].k();
        this.f43895h[1] = this.f43888a[i10].l();
        this.f43889b[i10].mapPoints(this.f43895h);
        if (i10 == 0) {
            Path path = cVar.f43902b;
            float[] fArr = this.f43895h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f43902b;
            float[] fArr2 = this.f43895h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f43888a[i10].d(this.f43889b[i10], cVar.f43902b);
        b bVar = cVar.f43904d;
        if (bVar != null) {
            bVar.a(this.f43888a[i10], this.f43889b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f43895h[0] = this.f43888a[i10].i();
        this.f43895h[1] = this.f43888a[i10].j();
        this.f43889b[i10].mapPoints(this.f43895h);
        this.f43896i[0] = this.f43888a[i11].k();
        this.f43896i[1] = this.f43888a[i11].l();
        this.f43889b[i11].mapPoints(this.f43896i);
        float[] fArr = this.f43895h;
        float f10 = fArr[0];
        float[] fArr2 = this.f43896i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float i12 = i(cVar.f43903c, i10);
        this.f43894g.n(0.0f, 0.0f);
        f j10 = j(i10, cVar.f43901a);
        j10.b(max, i12, cVar.f43905e, this.f43894g);
        this.f43897j.reset();
        this.f43894g.d(this.f43890c[i10], this.f43897j);
        if (this.f43899l && (j10.a() || l(this.f43897j, i10) || l(this.f43897j, i11))) {
            Path path = this.f43897j;
            path.op(path, this.f43893f, Path.Op.DIFFERENCE);
            this.f43895h[0] = this.f43894g.k();
            this.f43895h[1] = this.f43894g.l();
            this.f43890c[i10].mapPoints(this.f43895h);
            Path path2 = this.f43892e;
            float[] fArr3 = this.f43895h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f43894g.d(this.f43890c[i10], this.f43892e);
        } else {
            this.f43894g.d(this.f43890c[i10], cVar.f43902b);
        }
        b bVar = cVar.f43904d;
        if (bVar != null) {
            bVar.b(this.f43894g, this.f43890c[i10], i10);
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
        float[] fArr = this.f43895h;
        m mVar = this.f43888a[i10];
        fArr[0] = mVar.f43908c;
        fArr[1] = mVar.f43909d;
        this.f43889b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f43895h[1]);
        }
        return Math.abs(rectF.centerX() - this.f43895h[0]);
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
        return a.f43900a;
    }

    private boolean l(Path path, int i10) {
        this.f43898k.reset();
        this.f43888a[i10].d(this.f43889b[i10], this.f43898k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f43898k.computeBounds(rectF, true);
        path.op(this.f43898k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void m(c cVar, int i10) {
        h(i10, cVar.f43901a).b(this.f43888a[i10], 90.0f, cVar.f43905e, cVar.f43903c, g(i10, cVar.f43901a));
        float a10 = a(i10);
        this.f43889b[i10].reset();
        f(i10, cVar.f43903c, this.f43891d);
        Matrix matrix = this.f43889b[i10];
        PointF pointF = this.f43891d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f43889b[i10].preRotate(a10);
    }

    private void n(int i10) {
        this.f43895h[0] = this.f43888a[i10].i();
        this.f43895h[1] = this.f43888a[i10].j();
        this.f43889b[i10].mapPoints(this.f43895h);
        float a10 = a(i10);
        this.f43890c[i10].reset();
        Matrix matrix = this.f43890c[i10];
        float[] fArr = this.f43895h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f43890c[i10].preRotate(a10);
    }

    public void d(k kVar, float f10, RectF rectF, Path path) {
        e(kVar, f10, rectF, null, path);
    }

    public void e(k kVar, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f43892e.rewind();
        this.f43893f.rewind();
        this.f43893f.addRect(rectF, Path.Direction.CW);
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
        this.f43892e.close();
        if (!this.f43892e.isEmpty()) {
            path.op(this.f43892e, Path.Op.UNION);
        }
    }
}
