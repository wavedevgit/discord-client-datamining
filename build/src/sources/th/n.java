package th;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    public float f49446a;

    /* renamed from: b  reason: collision with root package name */
    public float f49447b;

    /* renamed from: c  reason: collision with root package name */
    public float f49448c;

    /* renamed from: d  reason: collision with root package name */
    public float f49449d;

    /* renamed from: e  reason: collision with root package name */
    public float f49450e;

    /* renamed from: f  reason: collision with root package name */
    public float f49451f;

    /* renamed from: g  reason: collision with root package name */
    private final List f49452g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f49453h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f49454i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends g {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ List f49455c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Matrix f49456d;

        a(List list, Matrix matrix) {
            this.f49455c = list;
            this.f49456d = matrix;
        }

        @Override // th.n.g
        public void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas) {
            for (g gVar : this.f49455c) {
                gVar.a(this.f49456d, aVar, i10, canvas);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends g {

        /* renamed from: c  reason: collision with root package name */
        private final d f49458c;

        public b(d dVar) {
            this.f49458c = dVar;
        }

        @Override // th.n.g
        public void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas) {
            aVar.a(canvas, matrix, new RectF(this.f49458c.k(), this.f49458c.o(), this.f49458c.l(), this.f49458c.j()), i10, this.f49458c.m(), this.f49458c.n());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        private final e f49459c;

        /* renamed from: d  reason: collision with root package name */
        private final float f49460d;

        /* renamed from: e  reason: collision with root package name */
        private final float f49461e;

        public c(e eVar, float f10, float f11) {
            this.f49459c = eVar;
            this.f49460d = f10;
            this.f49461e = f11;
        }

        @Override // th.n.g
        public void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas) {
            RectF rectF = new RectF(0.0f, 0.0f, (float) Math.hypot(this.f49459c.f49470c - this.f49461e, this.f49459c.f49469b - this.f49460d), 0.0f);
            this.f49473a.set(matrix);
            this.f49473a.preTranslate(this.f49460d, this.f49461e);
            this.f49473a.preRotate(c());
            aVar.b(canvas, this.f49473a, rectF, i10);
        }

        float c() {
            return (float) Math.toDegrees(Math.atan((this.f49459c.f49470c - this.f49461e) / (this.f49459c.f49469b - this.f49460d)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends f {

        /* renamed from: h  reason: collision with root package name */
        private static final RectF f49462h = new RectF();

        /* renamed from: b  reason: collision with root package name */
        public float f49463b;

        /* renamed from: c  reason: collision with root package name */
        public float f49464c;

        /* renamed from: d  reason: collision with root package name */
        public float f49465d;

        /* renamed from: e  reason: collision with root package name */
        public float f49466e;

        /* renamed from: f  reason: collision with root package name */
        public float f49467f;

        /* renamed from: g  reason: collision with root package name */
        public float f49468g;

        public d(float f10, float f11, float f12, float f13) {
            q(f10);
            u(f11);
            r(f12);
            p(f13);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float j() {
            return this.f49466e;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float k() {
            return this.f49463b;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float l() {
            return this.f49465d;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float m() {
            return this.f49467f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float n() {
            return this.f49468g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float o() {
            return this.f49464c;
        }

        private void p(float f10) {
            this.f49466e = f10;
        }

        private void q(float f10) {
            this.f49463b = f10;
        }

        private void r(float f10) {
            this.f49465d = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(float f10) {
            this.f49467f = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t(float f10) {
            this.f49468g = f10;
        }

        private void u(float f10) {
            this.f49464c = f10;
        }

        @Override // th.n.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f49471a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            RectF rectF = f49462h;
            rectF.set(k(), o(), l(), j());
            path.arcTo(rectF, m(), n(), false);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends f {

        /* renamed from: b  reason: collision with root package name */
        private float f49469b;

        /* renamed from: c  reason: collision with root package name */
        private float f49470c;

        @Override // th.n.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f49471a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            path.lineTo(this.f49469b, this.f49470c);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        protected final Matrix f49471a = new Matrix();

        public abstract void a(Matrix matrix, Path path);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {

        /* renamed from: b  reason: collision with root package name */
        static final Matrix f49472b = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        final Matrix f49473a = new Matrix();

        g() {
        }

        public abstract void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas);

        public final void b(sh.a aVar, int i10, Canvas canvas) {
            a(f49472b, aVar, i10, canvas);
        }
    }

    public n() {
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
            this.f49453h.add(new b(dVar));
            p(f10);
        }
    }

    private void c(g gVar, float f10, float f11) {
        b(f10);
        this.f49453h.add(gVar);
        p(f11);
    }

    private float g() {
        return this.f49450e;
    }

    private float h() {
        return this.f49451f;
    }

    private void p(float f10) {
        this.f49450e = f10;
    }

    private void q(float f10) {
        this.f49451f = f10;
    }

    private void r(float f10) {
        this.f49448c = f10;
    }

    private void s(float f10) {
        this.f49449d = f10;
    }

    private void t(float f10) {
        this.f49446a = f10;
    }

    private void u(float f10) {
        this.f49447b = f10;
    }

    public void a(float f10, float f11, float f12, float f13, float f14, float f15) {
        boolean z10;
        float f16;
        d dVar = new d(f10, f11, f12, f13);
        dVar.s(f14);
        dVar.t(f15);
        this.f49452g.add(dVar);
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
        int size = this.f49452g.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((f) this.f49452g.get(i10)).a(matrix, path);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f49454i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f(Matrix matrix) {
        b(h());
        return new a(new ArrayList(this.f49453h), new Matrix(matrix));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        return this.f49448c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f49449d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float k() {
        return this.f49446a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f49447b;
    }

    public void m(float f10, float f11) {
        e eVar = new e();
        eVar.f49469b = f10;
        eVar.f49470c = f11;
        this.f49452g.add(eVar);
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
        this.f49452g.clear();
        this.f49453h.clear();
        this.f49454i = false;
    }
}
