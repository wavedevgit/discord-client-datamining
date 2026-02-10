package rh;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final m[] f49017a = new m[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f49018b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f49019c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f49020d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f49021e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f49022f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final m f49023g = new m();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f49024h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f49025i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f49026j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f49027k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f49028l = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f49029a = new l();
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
        public final k f49030a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f49031b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f49032c;

        /* renamed from: d  reason: collision with root package name */
        public final b f49033d;

        /* renamed from: e  reason: collision with root package name */
        public final float f49034e;

        c(k kVar, float f10, RectF rectF, b bVar, Path path) {
            this.f49033d = bVar;
            this.f49030a = kVar;
            this.f49034e = f10;
            this.f49032c = rectF;
            this.f49031b = path;
        }
    }

    public l() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f49017a[i10] = new m();
            this.f49018b[i10] = new Matrix();
            this.f49019c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f49024h[0] = this.f49017a[i10].k();
        this.f49024h[1] = this.f49017a[i10].l();
        this.f49018b[i10].mapPoints(this.f49024h);
        if (i10 == 0) {
            Path path = cVar.f49031b;
            float[] fArr = this.f49024h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f49031b;
            float[] fArr2 = this.f49024h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f49017a[i10].d(this.f49018b[i10], cVar.f49031b);
        b bVar = cVar.f49033d;
        if (bVar != null) {
            bVar.a(this.f49017a[i10], this.f49018b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f49024h[0] = this.f49017a[i10].i();
        this.f49024h[1] = this.f49017a[i10].j();
        this.f49018b[i10].mapPoints(this.f49024h);
        this.f49025i[0] = this.f49017a[i11].k();
        this.f49025i[1] = this.f49017a[i11].l();
        this.f49018b[i11].mapPoints(this.f49025i);
        float[] fArr = this.f49024h;
        float f10 = fArr[0];
        float[] fArr2 = this.f49025i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float i12 = i(cVar.f49032c, i10);
        this.f49023g.n(0.0f, 0.0f);
        f j10 = j(i10, cVar.f49030a);
        j10.b(max, i12, cVar.f49034e, this.f49023g);
        this.f49026j.reset();
        this.f49023g.d(this.f49019c[i10], this.f49026j);
        if (this.f49028l && (j10.a() || l(this.f49026j, i10) || l(this.f49026j, i11))) {
            Path path = this.f49026j;
            path.op(path, this.f49022f, Path.Op.DIFFERENCE);
            this.f49024h[0] = this.f49023g.k();
            this.f49024h[1] = this.f49023g.l();
            this.f49019c[i10].mapPoints(this.f49024h);
            Path path2 = this.f49021e;
            float[] fArr3 = this.f49024h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f49023g.d(this.f49019c[i10], this.f49021e);
        } else {
            this.f49023g.d(this.f49019c[i10], cVar.f49031b);
        }
        b bVar = cVar.f49033d;
        if (bVar != null) {
            bVar.b(this.f49023g, this.f49019c[i10], i10);
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

    private rh.c g(int i10, k kVar) {
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
        float[] fArr = this.f49024h;
        m mVar = this.f49017a[i10];
        fArr[0] = mVar.f49037c;
        fArr[1] = mVar.f49038d;
        this.f49018b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f49024h[1]);
        }
        return Math.abs(rectF.centerX() - this.f49024h[0]);
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
        return a.f49029a;
    }

    private boolean l(Path path, int i10) {
        this.f49027k.reset();
        this.f49017a[i10].d(this.f49018b[i10], this.f49027k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f49027k.computeBounds(rectF, true);
        path.op(this.f49027k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void m(c cVar, int i10) {
        h(i10, cVar.f49030a).b(this.f49017a[i10], 90.0f, cVar.f49034e, cVar.f49032c, g(i10, cVar.f49030a));
        float a10 = a(i10);
        this.f49018b[i10].reset();
        f(i10, cVar.f49032c, this.f49020d);
        Matrix matrix = this.f49018b[i10];
        PointF pointF = this.f49020d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f49018b[i10].preRotate(a10);
    }

    private void n(int i10) {
        this.f49024h[0] = this.f49017a[i10].i();
        this.f49024h[1] = this.f49017a[i10].j();
        this.f49018b[i10].mapPoints(this.f49024h);
        float a10 = a(i10);
        this.f49019c[i10].reset();
        Matrix matrix = this.f49019c[i10];
        float[] fArr = this.f49024h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f49019c[i10].preRotate(a10);
    }

    public void d(k kVar, float f10, RectF rectF, Path path) {
        e(kVar, f10, rectF, null, path);
    }

    public void e(k kVar, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f49021e.rewind();
        this.f49022f.rewind();
        this.f49022f.addRect(rectF, Path.Direction.CW);
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
        this.f49021e.close();
        if (!this.f49021e.isEmpty()) {
            path.op(this.f49021e, Path.Op.UNION);
        }
    }
}
