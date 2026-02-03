package oh;

import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RectF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final m[] f44032a = new m[4];

    /* renamed from: b  reason: collision with root package name */
    private final Matrix[] f44033b = new Matrix[4];

    /* renamed from: c  reason: collision with root package name */
    private final Matrix[] f44034c = new Matrix[4];

    /* renamed from: d  reason: collision with root package name */
    private final PointF f44035d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final Path f44036e = new Path();

    /* renamed from: f  reason: collision with root package name */
    private final Path f44037f = new Path();

    /* renamed from: g  reason: collision with root package name */
    private final m f44038g = new m();

    /* renamed from: h  reason: collision with root package name */
    private final float[] f44039h = new float[2];

    /* renamed from: i  reason: collision with root package name */
    private final float[] f44040i = new float[2];

    /* renamed from: j  reason: collision with root package name */
    private final Path f44041j = new Path();

    /* renamed from: k  reason: collision with root package name */
    private final Path f44042k = new Path();

    /* renamed from: l  reason: collision with root package name */
    private boolean f44043l = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        static final l f44044a = new l();
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
        public final k f44045a;

        /* renamed from: b  reason: collision with root package name */
        public final Path f44046b;

        /* renamed from: c  reason: collision with root package name */
        public final RectF f44047c;

        /* renamed from: d  reason: collision with root package name */
        public final b f44048d;

        /* renamed from: e  reason: collision with root package name */
        public final float f44049e;

        c(k kVar, float f10, RectF rectF, b bVar, Path path) {
            this.f44048d = bVar;
            this.f44045a = kVar;
            this.f44049e = f10;
            this.f44047c = rectF;
            this.f44046b = path;
        }
    }

    public l() {
        for (int i10 = 0; i10 < 4; i10++) {
            this.f44032a[i10] = new m();
            this.f44033b[i10] = new Matrix();
            this.f44034c[i10] = new Matrix();
        }
    }

    private float a(int i10) {
        return ((i10 + 1) % 4) * 90;
    }

    private void b(c cVar, int i10) {
        this.f44039h[0] = this.f44032a[i10].k();
        this.f44039h[1] = this.f44032a[i10].l();
        this.f44033b[i10].mapPoints(this.f44039h);
        if (i10 == 0) {
            Path path = cVar.f44046b;
            float[] fArr = this.f44039h;
            path.moveTo(fArr[0], fArr[1]);
        } else {
            Path path2 = cVar.f44046b;
            float[] fArr2 = this.f44039h;
            path2.lineTo(fArr2[0], fArr2[1]);
        }
        this.f44032a[i10].d(this.f44033b[i10], cVar.f44046b);
        b bVar = cVar.f44048d;
        if (bVar != null) {
            bVar.a(this.f44032a[i10], this.f44033b[i10], i10);
        }
    }

    private void c(c cVar, int i10) {
        int i11 = (i10 + 1) % 4;
        this.f44039h[0] = this.f44032a[i10].i();
        this.f44039h[1] = this.f44032a[i10].j();
        this.f44033b[i10].mapPoints(this.f44039h);
        this.f44040i[0] = this.f44032a[i11].k();
        this.f44040i[1] = this.f44032a[i11].l();
        this.f44033b[i11].mapPoints(this.f44040i);
        float[] fArr = this.f44039h;
        float f10 = fArr[0];
        float[] fArr2 = this.f44040i;
        float max = Math.max(((float) Math.hypot(f10 - fArr2[0], fArr[1] - fArr2[1])) - 0.001f, 0.0f);
        float i12 = i(cVar.f44047c, i10);
        this.f44038g.n(0.0f, 0.0f);
        f j10 = j(i10, cVar.f44045a);
        j10.b(max, i12, cVar.f44049e, this.f44038g);
        this.f44041j.reset();
        this.f44038g.d(this.f44034c[i10], this.f44041j);
        if (this.f44043l && (j10.a() || l(this.f44041j, i10) || l(this.f44041j, i11))) {
            Path path = this.f44041j;
            path.op(path, this.f44037f, Path.Op.DIFFERENCE);
            this.f44039h[0] = this.f44038g.k();
            this.f44039h[1] = this.f44038g.l();
            this.f44034c[i10].mapPoints(this.f44039h);
            Path path2 = this.f44036e;
            float[] fArr3 = this.f44039h;
            path2.moveTo(fArr3[0], fArr3[1]);
            this.f44038g.d(this.f44034c[i10], this.f44036e);
        } else {
            this.f44038g.d(this.f44034c[i10], cVar.f44046b);
        }
        b bVar = cVar.f44048d;
        if (bVar != null) {
            bVar.b(this.f44038g, this.f44034c[i10], i10);
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
        float[] fArr = this.f44039h;
        m mVar = this.f44032a[i10];
        fArr[0] = mVar.f44052c;
        fArr[1] = mVar.f44053d;
        this.f44033b[i10].mapPoints(fArr);
        if (i10 != 1 && i10 != 3) {
            return Math.abs(rectF.centerY() - this.f44039h[1]);
        }
        return Math.abs(rectF.centerX() - this.f44039h[0]);
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
        return a.f44044a;
    }

    private boolean l(Path path, int i10) {
        this.f44042k.reset();
        this.f44032a[i10].d(this.f44033b[i10], this.f44042k);
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        this.f44042k.computeBounds(rectF, true);
        path.op(this.f44042k, Path.Op.INTERSECT);
        path.computeBounds(rectF, true);
        if (!rectF.isEmpty() || (rectF.width() > 1.0f && rectF.height() > 1.0f)) {
            return true;
        }
        return false;
    }

    private void m(c cVar, int i10) {
        h(i10, cVar.f44045a).b(this.f44032a[i10], 90.0f, cVar.f44049e, cVar.f44047c, g(i10, cVar.f44045a));
        float a10 = a(i10);
        this.f44033b[i10].reset();
        f(i10, cVar.f44047c, this.f44035d);
        Matrix matrix = this.f44033b[i10];
        PointF pointF = this.f44035d;
        matrix.setTranslate(pointF.x, pointF.y);
        this.f44033b[i10].preRotate(a10);
    }

    private void n(int i10) {
        this.f44039h[0] = this.f44032a[i10].i();
        this.f44039h[1] = this.f44032a[i10].j();
        this.f44033b[i10].mapPoints(this.f44039h);
        float a10 = a(i10);
        this.f44034c[i10].reset();
        Matrix matrix = this.f44034c[i10];
        float[] fArr = this.f44039h;
        matrix.setTranslate(fArr[0], fArr[1]);
        this.f44034c[i10].preRotate(a10);
    }

    public void d(k kVar, float f10, RectF rectF, Path path) {
        e(kVar, f10, rectF, null, path);
    }

    public void e(k kVar, float f10, RectF rectF, b bVar, Path path) {
        path.rewind();
        this.f44036e.rewind();
        this.f44037f.rewind();
        this.f44037f.addRect(rectF, Path.Direction.CW);
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
        this.f44036e.close();
        if (!this.f44036e.isEmpty()) {
            path.op(this.f44036e, Path.Op.UNION);
        }
    }
}
