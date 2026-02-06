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
    public float f47869a;

    /* renamed from: b  reason: collision with root package name */
    public float f47870b;

    /* renamed from: c  reason: collision with root package name */
    public float f47871c;

    /* renamed from: d  reason: collision with root package name */
    public float f47872d;

    /* renamed from: e  reason: collision with root package name */
    public float f47873e;

    /* renamed from: f  reason: collision with root package name */
    public float f47874f;

    /* renamed from: g  reason: collision with root package name */
    private final List f47875g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f47876h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f47877i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends g {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ List f47878c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Matrix f47879d;

        a(List list, Matrix matrix) {
            this.f47878c = list;
            this.f47879d = matrix;
        }

        @Override // qh.m.g
        public void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas) {
            for (g gVar : this.f47878c) {
                gVar.a(this.f47879d, aVar, i10, canvas);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends g {

        /* renamed from: c  reason: collision with root package name */
        private final d f47881c;

        public b(d dVar) {
            this.f47881c = dVar;
        }

        @Override // qh.m.g
        public void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas) {
            aVar.a(canvas, matrix, new RectF(this.f47881c.k(), this.f47881c.o(), this.f47881c.l(), this.f47881c.j()), i10, this.f47881c.m(), this.f47881c.n());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        private final e f47882c;

        /* renamed from: d  reason: collision with root package name */
        private final float f47883d;

        /* renamed from: e  reason: collision with root package name */
        private final float f47884e;

        public c(e eVar, float f10, float f11) {
            this.f47882c = eVar;
            this.f47883d = f10;
            this.f47884e = f11;
        }

        @Override // qh.m.g
        public void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas) {
            RectF rectF = new RectF(0.0f, 0.0f, (float) Math.hypot(this.f47882c.f47893c - this.f47884e, this.f47882c.f47892b - this.f47883d), 0.0f);
            this.f47896a.set(matrix);
            this.f47896a.preTranslate(this.f47883d, this.f47884e);
            this.f47896a.preRotate(c());
            aVar.b(canvas, this.f47896a, rectF, i10);
        }

        float c() {
            return (float) Math.toDegrees(Math.atan((this.f47882c.f47893c - this.f47884e) / (this.f47882c.f47892b - this.f47883d)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends f {

        /* renamed from: h  reason: collision with root package name */
        private static final RectF f47885h = new RectF();

        /* renamed from: b  reason: collision with root package name */
        public float f47886b;

        /* renamed from: c  reason: collision with root package name */
        public float f47887c;

        /* renamed from: d  reason: collision with root package name */
        public float f47888d;

        /* renamed from: e  reason: collision with root package name */
        public float f47889e;

        /* renamed from: f  reason: collision with root package name */
        public float f47890f;

        /* renamed from: g  reason: collision with root package name */
        public float f47891g;

        public d(float f10, float f11, float f12, float f13) {
            q(f10);
            u(f11);
            r(f12);
            p(f13);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float j() {
            return this.f47889e;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float k() {
            return this.f47886b;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float l() {
            return this.f47888d;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float m() {
            return this.f47890f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float n() {
            return this.f47891g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float o() {
            return this.f47887c;
        }

        private void p(float f10) {
            this.f47889e = f10;
        }

        private void q(float f10) {
            this.f47886b = f10;
        }

        private void r(float f10) {
            this.f47888d = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(float f10) {
            this.f47890f = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t(float f10) {
            this.f47891g = f10;
        }

        private void u(float f10) {
            this.f47887c = f10;
        }

        @Override // qh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f47894a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            RectF rectF = f47885h;
            rectF.set(k(), o(), l(), j());
            path.arcTo(rectF, m(), n(), false);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends f {

        /* renamed from: b  reason: collision with root package name */
        private float f47892b;

        /* renamed from: c  reason: collision with root package name */
        private float f47893c;

        @Override // qh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f47894a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            path.lineTo(this.f47892b, this.f47893c);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        protected final Matrix f47894a = new Matrix();

        public abstract void a(Matrix matrix, Path path);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {

        /* renamed from: b  reason: collision with root package name */
        static final Matrix f47895b = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        final Matrix f47896a = new Matrix();

        g() {
        }

        public abstract void a(Matrix matrix, ph.a aVar, int i10, Canvas canvas);

        public final void b(ph.a aVar, int i10, Canvas canvas) {
            a(f47895b, aVar, i10, canvas);
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
            this.f47876h.add(new b(dVar));
            p(f10);
        }
    }

    private void c(g gVar, float f10, float f11) {
        b(f10);
        this.f47876h.add(gVar);
        p(f11);
    }

    private float g() {
        return this.f47873e;
    }

    private float h() {
        return this.f47874f;
    }

    private void p(float f10) {
        this.f47873e = f10;
    }

    private void q(float f10) {
        this.f47874f = f10;
    }

    private void r(float f10) {
        this.f47871c = f10;
    }

    private void s(float f10) {
        this.f47872d = f10;
    }

    private void t(float f10) {
        this.f47869a = f10;
    }

    private void u(float f10) {
        this.f47870b = f10;
    }

    public void a(float f10, float f11, float f12, float f13, float f14, float f15) {
        boolean z10;
        float f16;
        d dVar = new d(f10, f11, f12, f13);
        dVar.s(f14);
        dVar.t(f15);
        this.f47875g.add(dVar);
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
        int size = this.f47875g.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((f) this.f47875g.get(i10)).a(matrix, path);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f47877i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f(Matrix matrix) {
        b(h());
        return new a(new ArrayList(this.f47876h), new Matrix(matrix));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        return this.f47871c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f47872d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float k() {
        return this.f47869a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f47870b;
    }

    public void m(float f10, float f11) {
        e eVar = new e();
        eVar.f47892b = f10;
        eVar.f47893c = f11;
        this.f47875g.add(eVar);
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
        this.f47875g.clear();
        this.f47876h.clear();
        this.f47877i = false;
    }
}
