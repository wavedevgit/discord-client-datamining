package qh;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    public float f47917a;

    /* renamed from: b  reason: collision with root package name */
    public float f47918b;

    /* renamed from: c  reason: collision with root package name */
    public float f47919c;

    /* renamed from: d  reason: collision with root package name */
    public float f47920d;

    /* renamed from: e  reason: collision with root package name */
    public float f47921e;

    /* renamed from: f  reason: collision with root package name */
    public float f47922f;

    /* renamed from: g  reason: collision with root package name */
    private final List f47923g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f47924h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f47925i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends g {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ List f47926c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Matrix f47927d;

        a(List list, Matrix matrix) {
            this.f47926c = list;
            this.f47927d = matrix;
        }

        @Override // qh.m.g
        public void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas) {
            for (g gVar : this.f47926c) {
                gVar.a(this.f47927d, aVar, i10, canvas);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends g {

        /* renamed from: c  reason: collision with root package name */
        private final d f47929c;

        public b(d dVar) {
            this.f47929c = dVar;
        }

        @Override // qh.m.g
        public void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas) {
            aVar.a(canvas, matrix, new RectF(this.f47929c.k(), this.f47929c.o(), this.f47929c.l(), this.f47929c.j()), i10, this.f47929c.m(), this.f47929c.n());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        private final e f47930c;

        /* renamed from: d  reason: collision with root package name */
        private final float f47931d;

        /* renamed from: e  reason: collision with root package name */
        private final float f47932e;

        public c(e eVar, float f10, float f11) {
            this.f47930c = eVar;
            this.f47931d = f10;
            this.f47932e = f11;
        }

        @Override // qh.m.g
        public void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas) {
            RectF rectF = new RectF(0.0f, 0.0f, (float) Math.hypot(this.f47930c.f47941c - this.f47932e, this.f47930c.f47940b - this.f47931d), 0.0f);
            this.f47944a.set(matrix);
            this.f47944a.preTranslate(this.f47931d, this.f47932e);
            this.f47944a.preRotate(c());
            aVar.b(canvas, this.f47944a, rectF, i10);
        }

        float c() {
            return (float) Math.toDegrees(Math.atan((this.f47930c.f47941c - this.f47932e) / (this.f47930c.f47940b - this.f47931d)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends f {

        /* renamed from: h  reason: collision with root package name */
        private static final RectF f47933h = new RectF();

        /* renamed from: b  reason: collision with root package name */
        public float f47934b;

        /* renamed from: c  reason: collision with root package name */
        public float f47935c;

        /* renamed from: d  reason: collision with root package name */
        public float f47936d;

        /* renamed from: e  reason: collision with root package name */
        public float f47937e;

        /* renamed from: f  reason: collision with root package name */
        public float f47938f;

        /* renamed from: g  reason: collision with root package name */
        public float f47939g;

        public d(float f10, float f11, float f12, float f13) {
            q(f10);
            u(f11);
            r(f12);
            p(f13);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float j() {
            return this.f47937e;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float k() {
            return this.f47934b;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float l() {
            return this.f47936d;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float m() {
            return this.f47938f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float n() {
            return this.f47939g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float o() {
            return this.f47935c;
        }

        private void p(float f10) {
            this.f47937e = f10;
        }

        private void q(float f10) {
            this.f47934b = f10;
        }

        private void r(float f10) {
            this.f47936d = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(float f10) {
            this.f47938f = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t(float f10) {
            this.f47939g = f10;
        }

        private void u(float f10) {
            this.f47935c = f10;
        }

        @Override // qh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f47942a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            RectF rectF = f47933h;
            rectF.set(k(), o(), l(), j());
            path.arcTo(rectF, m(), n(), false);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends f {

        /* renamed from: b  reason: collision with root package name */
        private float f47940b;

        /* renamed from: c  reason: collision with root package name */
        private float f47941c;

        @Override // qh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f47942a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            path.lineTo(this.f47940b, this.f47941c);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        protected final Matrix f47942a = new Matrix();

        public abstract void a(Matrix matrix, Path path);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {

        /* renamed from: b  reason: collision with root package name */
        static final Matrix f47943b = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        final Matrix f47944a = new Matrix();

        g() {
        }

        public abstract void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas);

        public final void b(ph.a aVar, int i10, Canvas canvas) {
            a(f47943b, aVar, i10, canvas);
        }
    }

    public m() {
        n(0.0f, 0.0f);
    }

    private void b(float f10) {
        if (g() != f10) {
            float g10 = ((f10 - g()) + 360.0f) % 360.0f;
            if (g10 > 180.0f) {
                return;
            }
            d dVar = new d(i(), j(), i(), j());
            dVar.s(g());
            dVar.t(g10);
            this.f47924h.add(new b(dVar));
            p(f10);
        }
    }

    private void c(g gVar, float f10, float f11) {
        b(f10);
        this.f47924h.add(gVar);
        p(f11);
    }

    private float g() {
        return this.f47921e;
    }

    private float h() {
        return this.f47922f;
    }

    private void p(float f10) {
        this.f47921e = f10;
    }

    private void q(float f10) {
        this.f47922f = f10;
    }

    private void r(float f10) {
        this.f47919c = f10;
    }

    private void s(float f10) {
        this.f47920d = f10;
    }

    private void t(float f10) {
        this.f47917a = f10;
    }

    private void u(float f10) {
        this.f47918b = f10;
    }

    public void a(float f10, float f11, float f12, float f13, float f14, float f15) {
        boolean z10;
        float f16;
        d dVar = new d(f10, f11, f12, f13);
        dVar.s(f14);
        dVar.t(f15);
        this.f47923g.add(dVar);
        b bVar = new b(dVar);
        float f17 = f14 + f15;
        if (f15 < 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            f14 = (f14 + 180.0f) % 360.0f;
        }
        if (z10) {
            f16 = (180.0f + f17) % 360.0f;
        } else {
            f16 = f17;
        }
        c(bVar, f14, f16);
        double d10 = f17;
        r(((f10 + f12) * 0.5f) + (((f12 - f10) / 2.0f) * ((float) Math.cos(Math.toRadians(d10)))));
        s(((f11 + f13) * 0.5f) + (((f13 - f11) / 2.0f) * ((float) Math.sin(Math.toRadians(d10)))));
    }

    public void d(Matrix matrix, Path path) {
        int size = this.f47923g.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((f) this.f47923g.get(i10)).a(matrix, path);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f47925i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f(Matrix matrix) {
        b(h());
        return new a(new ArrayList(this.f47924h), new Matrix(matrix));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        return this.f47919c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f47920d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float k() {
        return this.f47917a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f47918b;
    }

    public void m(float f10, float f11) {
        e eVar = new e();
        eVar.f47940b = f10;
        eVar.f47941c = f11;
        this.f47923g.add(eVar);
        c cVar = new c(eVar, i(), j());
        c(cVar, cVar.c() + 270.0f, cVar.c() + 270.0f);
        r(f10);
        s(f11);
    }

    public void n(float f10, float f11) {
        o(f10, f11, 270.0f, 0.0f);
    }

    public void o(float f10, float f11, float f12, float f13) {
        t(f10);
        u(f11);
        r(f10);
        s(f11);
        p(f12);
        q((f12 + f13) % 360.0f);
        this.f47923g.clear();
        this.f47924h.clear();
        this.f47925i = false;
    }
}
