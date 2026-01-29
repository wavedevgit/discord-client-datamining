package oh;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Path;
import android.graphics.RectF;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    public float f43906a;

    /* renamed from: b  reason: collision with root package name */
    public float f43907b;

    /* renamed from: c  reason: collision with root package name */
    public float f43908c;

    /* renamed from: d  reason: collision with root package name */
    public float f43909d;

    /* renamed from: e  reason: collision with root package name */
    public float f43910e;

    /* renamed from: f  reason: collision with root package name */
    public float f43911f;

    /* renamed from: g  reason: collision with root package name */
    private final List f43912g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f43913h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f43914i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends g {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ List f43915c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Matrix f43916d;

        a(List list, Matrix matrix) {
            this.f43915c = list;
            this.f43916d = matrix;
        }

        @Override // oh.m.g
        public void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas) {
            for (g gVar : this.f43915c) {
                gVar.a(this.f43916d, aVar, i10, canvas);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends g {

        /* renamed from: c  reason: collision with root package name */
        private final d f43918c;

        public b(d dVar) {
            this.f43918c = dVar;
        }

        @Override // oh.m.g
        public void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas) {
            aVar.a(canvas, matrix, new RectF(this.f43918c.k(), this.f43918c.o(), this.f43918c.l(), this.f43918c.j()), i10, this.f43918c.m(), this.f43918c.n());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        private final e f43919c;

        /* renamed from: d  reason: collision with root package name */
        private final float f43920d;

        /* renamed from: e  reason: collision with root package name */
        private final float f43921e;

        public c(e eVar, float f10, float f11) {
            this.f43919c = eVar;
            this.f43920d = f10;
            this.f43921e = f11;
        }

        @Override // oh.m.g
        public void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas) {
            RectF rectF = new RectF(0.0f, 0.0f, (float) Math.hypot(this.f43919c.f43930c - this.f43921e, this.f43919c.f43929b - this.f43920d), 0.0f);
            this.f43933a.set(matrix);
            this.f43933a.preTranslate(this.f43920d, this.f43921e);
            this.f43933a.preRotate(c());
            aVar.b(canvas, this.f43933a, rectF, i10);
        }

        float c() {
            return (float) Math.toDegrees(Math.atan((this.f43919c.f43930c - this.f43921e) / (this.f43919c.f43929b - this.f43920d)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends f {

        /* renamed from: h  reason: collision with root package name */
        private static final RectF f43922h = new RectF();

        /* renamed from: b  reason: collision with root package name */
        public float f43923b;

        /* renamed from: c  reason: collision with root package name */
        public float f43924c;

        /* renamed from: d  reason: collision with root package name */
        public float f43925d;

        /* renamed from: e  reason: collision with root package name */
        public float f43926e;

        /* renamed from: f  reason: collision with root package name */
        public float f43927f;

        /* renamed from: g  reason: collision with root package name */
        public float f43928g;

        public d(float f10, float f11, float f12, float f13) {
            q(f10);
            u(f11);
            r(f12);
            p(f13);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float j() {
            return this.f43926e;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float k() {
            return this.f43923b;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float l() {
            return this.f43925d;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float m() {
            return this.f43927f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float n() {
            return this.f43928g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float o() {
            return this.f43924c;
        }

        private void p(float f10) {
            this.f43926e = f10;
        }

        private void q(float f10) {
            this.f43923b = f10;
        }

        private void r(float f10) {
            this.f43925d = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(float f10) {
            this.f43927f = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t(float f10) {
            this.f43928g = f10;
        }

        private void u(float f10) {
            this.f43924c = f10;
        }

        @Override // oh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f43931a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            RectF rectF = f43922h;
            rectF.set(k(), o(), l(), j());
            path.arcTo(rectF, m(), n(), false);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends f {

        /* renamed from: b  reason: collision with root package name */
        private float f43929b;

        /* renamed from: c  reason: collision with root package name */
        private float f43930c;

        @Override // oh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f43931a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            path.lineTo(this.f43929b, this.f43930c);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        protected final Matrix f43931a = new Matrix();

        public abstract void a(Matrix matrix, Path path);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {

        /* renamed from: b  reason: collision with root package name */
        static final Matrix f43932b = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        final Matrix f43933a = new Matrix();

        g() {
        }

        public abstract void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas);

        public final void b(nh.a aVar, int i10, Canvas canvas) {
            a(f43932b, aVar, i10, canvas);
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
            this.f43913h.add(new b(dVar));
            p(f10);
        }
    }

    private void c(g gVar, float f10, float f11) {
        b(f10);
        this.f43913h.add(gVar);
        p(f11);
    }

    private float g() {
        return this.f43910e;
    }

    private float h() {
        return this.f43911f;
    }

    private void p(float f10) {
        this.f43910e = f10;
    }

    private void q(float f10) {
        this.f43911f = f10;
    }

    private void r(float f10) {
        this.f43908c = f10;
    }

    private void s(float f10) {
        this.f43909d = f10;
    }

    private void t(float f10) {
        this.f43906a = f10;
    }

    private void u(float f10) {
        this.f43907b = f10;
    }

    public void a(float f10, float f11, float f12, float f13, float f14, float f15) {
        boolean z10;
        float f16;
        d dVar = new d(f10, f11, f12, f13);
        dVar.s(f14);
        dVar.t(f15);
        this.f43912g.add(dVar);
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
        int size = this.f43912g.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((f) this.f43912g.get(i10)).a(matrix, path);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f43914i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f(Matrix matrix) {
        b(h());
        return new a(new ArrayList(this.f43913h), new Matrix(matrix));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        return this.f43908c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f43909d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float k() {
        return this.f43906a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f43907b;
    }

    public void m(float f10, float f11) {
        e eVar = new e();
        eVar.f43929b = f10;
        eVar.f43930c = f11;
        this.f43912g.add(eVar);
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
        this.f43912g.clear();
        this.f43913h.clear();
        this.f43914i = false;
    }
}
