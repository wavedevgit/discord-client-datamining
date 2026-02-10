package rh;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    public float f49035a;

    /* renamed from: b  reason: collision with root package name */
    public float f49036b;

    /* renamed from: c  reason: collision with root package name */
    public float f49037c;

    /* renamed from: d  reason: collision with root package name */
    public float f49038d;

    /* renamed from: e  reason: collision with root package name */
    public float f49039e;

    /* renamed from: f  reason: collision with root package name */
    public float f49040f;

    /* renamed from: g  reason: collision with root package name */
    private final List f49041g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f49042h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f49043i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends g {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ List f49044c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Matrix f49045d;

        a(List list, Matrix matrix) {
            this.f49044c = list;
            this.f49045d = matrix;
        }

        @Override // rh.m.g
        public void a(Matrix matrix, qh.a aVar, int i10, Canvas canvas) {
            for (g gVar : this.f49044c) {
                gVar.a(this.f49045d, aVar, i10, canvas);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends g {

        /* renamed from: c  reason: collision with root package name */
        private final d f49047c;

        public b(d dVar) {
            this.f49047c = dVar;
        }

        @Override // rh.m.g
        public void a(Matrix matrix, qh.a aVar, int i10, Canvas canvas) {
            aVar.a(canvas, matrix, new RectF(this.f49047c.k(), this.f49047c.o(), this.f49047c.l(), this.f49047c.j()), i10, this.f49047c.m(), this.f49047c.n());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        private final e f49048c;

        /* renamed from: d  reason: collision with root package name */
        private final float f49049d;

        /* renamed from: e  reason: collision with root package name */
        private final float f49050e;

        public c(e eVar, float f10, float f11) {
            this.f49048c = eVar;
            this.f49049d = f10;
            this.f49050e = f11;
        }

        @Override // rh.m.g
        public void a(Matrix matrix, qh.a aVar, int i10, Canvas canvas) {
            RectF rectF = new RectF(0.0f, 0.0f, (float) Math.hypot(this.f49048c.f49059c - this.f49050e, this.f49048c.f49058b - this.f49049d), 0.0f);
            this.f49062a.set(matrix);
            this.f49062a.preTranslate(this.f49049d, this.f49050e);
            this.f49062a.preRotate(c());
            aVar.b(canvas, this.f49062a, rectF, i10);
        }

        float c() {
            return (float) Math.toDegrees(Math.atan((this.f49048c.f49059c - this.f49050e) / (this.f49048c.f49058b - this.f49049d)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends f {

        /* renamed from: h  reason: collision with root package name */
        private static final RectF f49051h = new RectF();

        /* renamed from: b  reason: collision with root package name */
        public float f49052b;

        /* renamed from: c  reason: collision with root package name */
        public float f49053c;

        /* renamed from: d  reason: collision with root package name */
        public float f49054d;

        /* renamed from: e  reason: collision with root package name */
        public float f49055e;

        /* renamed from: f  reason: collision with root package name */
        public float f49056f;

        /* renamed from: g  reason: collision with root package name */
        public float f49057g;

        public d(float f10, float f11, float f12, float f13) {
            q(f10);
            u(f11);
            r(f12);
            p(f13);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float j() {
            return this.f49055e;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float k() {
            return this.f49052b;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float l() {
            return this.f49054d;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float m() {
            return this.f49056f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float n() {
            return this.f49057g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float o() {
            return this.f49053c;
        }

        private void p(float f10) {
            this.f49055e = f10;
        }

        private void q(float f10) {
            this.f49052b = f10;
        }

        private void r(float f10) {
            this.f49054d = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(float f10) {
            this.f49056f = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t(float f10) {
            this.f49057g = f10;
        }

        private void u(float f10) {
            this.f49053c = f10;
        }

        @Override // rh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f49060a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            RectF rectF = f49051h;
            rectF.set(k(), o(), l(), j());
            path.arcTo(rectF, m(), n(), false);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends f {

        /* renamed from: b  reason: collision with root package name */
        private float f49058b;

        /* renamed from: c  reason: collision with root package name */
        private float f49059c;

        @Override // rh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f49060a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            path.lineTo(this.f49058b, this.f49059c);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        protected final Matrix f49060a = new Matrix();

        public abstract void a(Matrix matrix, Path path);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {

        /* renamed from: b  reason: collision with root package name */
        static final Matrix f49061b = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        final Matrix f49062a = new Matrix();

        g() {
        }

        public abstract void a(Matrix matrix, qh.a aVar, int i10, Canvas canvas);

        public final void b(qh.a aVar, int i10, Canvas canvas) {
            a(f49061b, aVar, i10, canvas);
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
            this.f49042h.add(new b(dVar));
            p(f10);
        }
    }

    private void c(g gVar, float f10, float f11) {
        b(f10);
        this.f49042h.add(gVar);
        p(f11);
    }

    private float g() {
        return this.f49039e;
    }

    private float h() {
        return this.f49040f;
    }

    private void p(float f10) {
        this.f49039e = f10;
    }

    private void q(float f10) {
        this.f49040f = f10;
    }

    private void r(float f10) {
        this.f49037c = f10;
    }

    private void s(float f10) {
        this.f49038d = f10;
    }

    private void t(float f10) {
        this.f49035a = f10;
    }

    private void u(float f10) {
        this.f49036b = f10;
    }

    public void a(float f10, float f11, float f12, float f13, float f14, float f15) {
        boolean z10;
        float f16;
        d dVar = new d(f10, f11, f12, f13);
        dVar.s(f14);
        dVar.t(f15);
        this.f49041g.add(dVar);
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
        int size = this.f49041g.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((f) this.f49041g.get(i10)).a(matrix, path);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f49043i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f(Matrix matrix) {
        b(h());
        return new a(new ArrayList(this.f49042h), new Matrix(matrix));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        return this.f49037c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f49038d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float k() {
        return this.f49035a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f49036b;
    }

    public void m(float f10, float f11) {
        e eVar = new e();
        eVar.f49058b = f10;
        eVar.f49059c = f11;
        this.f49041g.add(eVar);
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
        this.f49041g.clear();
        this.f49042h.clear();
        this.f49043i = false;
    }
}
