package ph;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final m[] f46021a = new m[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f46022b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f46023c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f46024d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f46025e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f46026f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final m f46027g = new m();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f46028h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f46029i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f46030j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f46031k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f46032l = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f46033a = new l();
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
        public final k f46034a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f46035b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f46036c;

        /* renamed from: d  reason: collision with root package name */
        public final b f46037d;

        /* renamed from: e  reason: collision with root package name */
        public final float f46038e;

        c(k kVar, float f10, RectF rectF, b bVar, Path path) {
            this.f46037d = bVar;
            this.f46034a = kVar;
            this.f46038e = f10;
            this.f46036c = rectF;
            this.f46035b = path;
        }
    }

    public l() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f46021a[i10] = new m();
            this.f46022b[i10] = new Matrix();
            this.f46023c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f46028h[0] = this.f46021a[i10].k();
        this.f46028h[1] = this.f46021a[i10].l();
        this.f46022b[i10].mapPoints(this.f46028h);
        if (i10 == 0) {
            Path path = cVar.f46035b;
            float[] fArr = this.f46028h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f46035b;
            float[] fArr2 = this.f46028h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f46021a[i10].d(this.f46022b[i10], cVar.f46035b);
        b bVar = cVar.f46037d;
        if (bVar != null) {
            bVar.a(this.f46021a[i10], this.f46022b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f46028h[0] = this.f46021a[i10].i();
        this.f46028h[1] = this.f46021a[i10].j();
        this.f46022b[i10].mapPoints(this.f46028h);
        this.f46029i[0] = this.f46021a[i11].k();
        this.f46029i[1] = this.f46021a[i11].l();
        this.f46022b[i11].mapPoints(this.f46029i);
        float[] fArr = this.f46028h;
        float f10 = fArr[0];
        float[] fArr2 = this.f46029i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float i12 = i(cVar.f46036c, i10);
        this.f46027g.n(0.0f, 0.0f);
        f j10 = j(i10, cVar.f46034a);
        j10.b(max, i12, cVar.f46038e, this.f46027g);
        this.f46030j.reset();
        this.f46027g.d(this.f46023c[i10], this.f46030j);
        if (this.f46032l && (j10.a() || l(this.f46030j, i10) || l(this.f46030j, i11))) {
            Path path = this.f46030j;
            path.op(path, this.f46026f, Path.Op.DIFFERENCE);
            this.f46028h[0] = this.f46027g.k();
            this.f46028h[1] = this.f46027g.l();
            this.f46023c[i10].mapPoints(this.f46028h);
            Path path2 = this.f46025e;
            float[] fArr3 = this.f46028h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f46027g.d(this.f46023c[i10], this.f46025e);
        } else {
            this.f46027g.d(this.f46023c[i10], cVar.f46035b);
        }
        b bVar = cVar.f46037d;
        if (bVar != null) {
            bVar.b(this.f46027g, this.f46023c[i10], i10);
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

    private ph.c g(int i10, k kVar) {
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
        float[] fArr = this.f46028h;
        m mVar = this.f46021a[i10];
        fArr[0] = mVar.f46041c;
        fArr[1] = mVar.f46042d;
        this.f46022b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f46028h[1]);
        }
        return Math.abs(rectF.centerX() - this.f46028h[0]);
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
        return a.f46033a;
    }

    private boolean l(Path path, int i10) {
        this.f46031k.reset();
        this.f46021a[i10].d(this.f46022b[i10], this.f46031k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f46031k.computeBounds(rectF, true);
        path.op(this.f46031k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void m(c cVar, int i10) {
        h(i10, cVar.f46034a).b(this.f46021a[i10], 90.0f, cVar.f46038e, cVar.f46036c, g(i10, cVar.f46034a));
        float a10 = a(i10);
        this.f46022b[i10].reset();
        f(i10, cVar.f46036c, this.f46024d);
        Matrix matrix = this.f46022b[i10];
        PointF pointF = this.f46024d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f46022b[i10].preRotate(a10);
    }

    private void n(int i10) {
        this.f46028h[0] = this.f46021a[i10].i();
        this.f46028h[1] = this.f46021a[i10].j();
        this.f46022b[i10].mapPoints(this.f46028h);
        float a10 = a(i10);
        this.f46023c[i10].reset();
        Matrix matrix = this.f46023c[i10];
        float[] fArr = this.f46028h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f46023c[i10].preRotate(a10);
    }

    public void d(k kVar, float f10, RectF rectF, Path path) {
        e(kVar, f10, rectF, null, path);
    }

    public void e(k kVar, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f46025e.rewind();
        this.f46026f.rewind();
        this.f46026f.addRect(rectF, Path.Direction.CW);
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
        this.f46025e.close();
        if (!this.f46025e.isEmpty()) {
            path.op(this.f46025e, Path.Op.UNION);
        }
    }
}
