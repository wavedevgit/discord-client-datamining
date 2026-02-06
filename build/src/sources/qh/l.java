package qh;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final m[] f47851a = new m[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f47852b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f47853c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f47854d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f47855e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f47856f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final m f47857g = new m();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f47858h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f47859i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f47860j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f47861k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f47862l = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f47863a = new l();
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
        public final k f47864a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f47865b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f47866c;

        /* renamed from: d  reason: collision with root package name */
        public final b f47867d;

        /* renamed from: e  reason: collision with root package name */
        public final float f47868e;

        c(k kVar, float f10, RectF rectF, b bVar, Path path) {
            this.f47867d = bVar;
            this.f47864a = kVar;
            this.f47868e = f10;
            this.f47866c = rectF;
            this.f47865b = path;
        }
    }

    public l() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f47851a[i10] = new m();
            this.f47852b[i10] = new Matrix();
            this.f47853c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f47858h[0] = this.f47851a[i10].k();
        this.f47858h[1] = this.f47851a[i10].l();
        this.f47852b[i10].mapPoints(this.f47858h);
        if (i10 == 0) {
            Path path = cVar.f47865b;
            float[] fArr = this.f47858h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f47865b;
            float[] fArr2 = this.f47858h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f47851a[i10].d(this.f47852b[i10], cVar.f47865b);
        b bVar = cVar.f47867d;
        if (bVar != null) {
            bVar.a(this.f47851a[i10], this.f47852b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f47858h[0] = this.f47851a[i10].i();
        this.f47858h[1] = this.f47851a[i10].j();
        this.f47852b[i10].mapPoints(this.f47858h);
        this.f47859i[0] = this.f47851a[i11].k();
        this.f47859i[1] = this.f47851a[i11].l();
        this.f47852b[i11].mapPoints(this.f47859i);
        float[] fArr = this.f47858h;
        float f10 = fArr[0];
        float[] fArr2 = this.f47859i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float i12 = i(cVar.f47866c, i10);
        this.f47857g.n(0.0f, 0.0f);
        f j10 = j(i10, cVar.f47864a);
        j10.b(max, i12, cVar.f47868e, this.f47857g);
        this.f47860j.reset();
        this.f47857g.d(this.f47853c[i10], this.f47860j);
        if (this.f47862l && (j10.a() || l(this.f47860j, i10) || l(this.f47860j, i11))) {
            Path path = this.f47860j;
            path.op(path, this.f47856f, Path.Op.DIFFERENCE);
            this.f47858h[0] = this.f47857g.k();
            this.f47858h[1] = this.f47857g.l();
            this.f47853c[i10].mapPoints(this.f47858h);
            Path path2 = this.f47855e;
            float[] fArr3 = this.f47858h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f47857g.d(this.f47853c[i10], this.f47855e);
        } else {
            this.f47857g.d(this.f47853c[i10], cVar.f47865b);
        }
        b bVar = cVar.f47867d;
        if (bVar != null) {
            bVar.b(this.f47857g, this.f47853c[i10], i10);
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

    private qh.c g(int i10, k kVar) {
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
        float[] fArr = this.f47858h;
        m mVar = this.f47851a[i10];
        fArr[0] = mVar.f47871c;
        fArr[1] = mVar.f47872d;
        this.f47852b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f47858h[1]);
        }
        return Math.abs(rectF.centerX() - this.f47858h[0]);
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
        return a.f47863a;
    }

    private boolean l(Path path, int i10) {
        this.f47861k.reset();
        this.f47851a[i10].d(this.f47852b[i10], this.f47861k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f47861k.computeBounds(rectF, true);
        path.op(this.f47861k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void m(c cVar, int i10) {
        h(i10, cVar.f47864a).b(this.f47851a[i10], 90.0f, cVar.f47868e, cVar.f47866c, g(i10, cVar.f47864a));
        float a10 = a(i10);
        this.f47852b[i10].reset();
        f(i10, cVar.f47866c, this.f47854d);
        Matrix matrix = this.f47852b[i10];
        PointF pointF = this.f47854d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f47852b[i10].preRotate(a10);
    }

    private void n(int i10) {
        this.f47858h[0] = this.f47851a[i10].i();
        this.f47858h[1] = this.f47851a[i10].j();
        this.f47852b[i10].mapPoints(this.f47858h);
        float a10 = a(i10);
        this.f47853c[i10].reset();
        Matrix matrix = this.f47853c[i10];
        float[] fArr = this.f47858h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f47853c[i10].preRotate(a10);
    }

    public void d(k kVar, float f10, RectF rectF, Path path) {
        e(kVar, f10, rectF, null, path);
    }

    public void e(k kVar, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f47855e.rewind();
        this.f47856f.rewind();
        this.f47856f.addRect(rectF, Path.Direction.CW);
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
        this.f47855e.close();
        if (!this.f47855e.isEmpty()) {
            path.op(this.f47855e, Path.Op.UNION);
        }
    }
}
