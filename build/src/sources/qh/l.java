package qh;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final m[] f47899a = new m[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f47900b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f47901c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f47902d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f47903e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f47904f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final m f47905g = new m();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f47906h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f47907i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f47908j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f47909k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f47910l = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f47911a = new l();
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
        public final k f47912a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f47913b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f47914c;

        /* renamed from: d  reason: collision with root package name */
        public final b f47915d;

        /* renamed from: e  reason: collision with root package name */
        public final float f47916e;

        c(k kVar, float f10, RectF rectF, b bVar, Path path) {
            this.f47915d = bVar;
            this.f47912a = kVar;
            this.f47916e = f10;
            this.f47914c = rectF;
            this.f47913b = path;
        }
    }

    public l() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f47899a[i10] = new m();
            this.f47900b[i10] = new Matrix();
            this.f47901c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f47906h[0] = this.f47899a[i10].k();
        this.f47906h[1] = this.f47899a[i10].l();
        this.f47900b[i10].mapPoints(this.f47906h);
        if (i10 == 0) {
            Path path = cVar.f47913b;
            float[] fArr = this.f47906h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f47913b;
            float[] fArr2 = this.f47906h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f47899a[i10].d(this.f47900b[i10], cVar.f47913b);
        b bVar = cVar.f47915d;
        if (bVar != null) {
            bVar.a(this.f47899a[i10], this.f47900b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f47906h[0] = this.f47899a[i10].i();
        this.f47906h[1] = this.f47899a[i10].j();
        this.f47900b[i10].mapPoints(this.f47906h);
        this.f47907i[0] = this.f47899a[i11].k();
        this.f47907i[1] = this.f47899a[i11].l();
        this.f47900b[i11].mapPoints(this.f47907i);
        float[] fArr = this.f47906h;
        float f10 = fArr[0];
        float[] fArr2 = this.f47907i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float i12 = i(cVar.f47914c, i10);
        this.f47905g.n(0.0f, 0.0f);
        f j10 = j(i10, cVar.f47912a);
        j10.b(max, i12, cVar.f47916e, this.f47905g);
        this.f47908j.reset();
        this.f47905g.d(this.f47901c[i10], this.f47908j);
        if (this.f47910l && (j10.a() || l(this.f47908j, i10) || l(this.f47908j, i11))) {
            Path path = this.f47908j;
            path.op(path, this.f47904f, Path.Op.DIFFERENCE);
            this.f47906h[0] = this.f47905g.k();
            this.f47906h[1] = this.f47905g.l();
            this.f47901c[i10].mapPoints(this.f47906h);
            Path path2 = this.f47903e;
            float[] fArr3 = this.f47906h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f47905g.d(this.f47901c[i10], this.f47903e);
        } else {
            this.f47905g.d(this.f47901c[i10], cVar.f47913b);
        }
        b bVar = cVar.f47915d;
        if (bVar != null) {
            bVar.b(this.f47905g, this.f47901c[i10], i10);
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
        float[] fArr = this.f47906h;
        m mVar = this.f47899a[i10];
        fArr[0] = mVar.f47919c;
        fArr[1] = mVar.f47920d;
        this.f47900b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f47906h[1]);
        }
        return Math.abs(rectF.centerX() - this.f47906h[0]);
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
        return a.f47911a;
    }

    private boolean l(Path path, int i10) {
        this.f47909k.reset();
        this.f47899a[i10].d(this.f47900b[i10], this.f47909k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f47909k.computeBounds(rectF, true);
        path.op(this.f47909k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void m(c cVar, int i10) {
        h(i10, cVar.f47912a).b(this.f47899a[i10], 90.0f, cVar.f47916e, cVar.f47914c, g(i10, cVar.f47912a));
        float a10 = a(i10);
        this.f47900b[i10].reset();
        f(i10, cVar.f47914c, this.f47902d);
        Matrix matrix = this.f47900b[i10];
        PointF pointF = this.f47902d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f47900b[i10].preRotate(a10);
    }

    private void n(int i10) {
        this.f47906h[0] = this.f47899a[i10].i();
        this.f47906h[1] = this.f47899a[i10].j();
        this.f47900b[i10].mapPoints(this.f47906h);
        float a10 = a(i10);
        this.f47901c[i10].reset();
        Matrix matrix = this.f47901c[i10];
        float[] fArr = this.f47906h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f47901c[i10].preRotate(a10);
    }

    public void d(k kVar, float f10, RectF rectF, Path path) {
        e(kVar, f10, rectF, null, path);
    }

    public void e(k kVar, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f47903e.rewind();
        this.f47904f.rewind();
        this.f47904f.addRect(rectF, Path.Direction.CW);
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
        this.f47903e.close();
        if (!this.f47903e.isEmpty()) {
            path.op(this.f47903e, Path.Op.UNION);
        }
    }
}
