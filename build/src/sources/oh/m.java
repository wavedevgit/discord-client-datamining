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
    public float f44050a;

    /* renamed from: b  reason: collision with root package name */
    public float f44051b;

    /* renamed from: c  reason: collision with root package name */
    public float f44052c;

    /* renamed from: d  reason: collision with root package name */
    public float f44053d;

    /* renamed from: e  reason: collision with root package name */
    public float f44054e;

    /* renamed from: f  reason: collision with root package name */
    public float f44055f;

    /* renamed from: g  reason: collision with root package name */
    private final List f44056g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f44057h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f44058i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends g {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ List f44059c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Matrix f44060d;

        a(List list, Matrix matrix) {
            this.f44059c = list;
            this.f44060d = matrix;
        }

        @Override // oh.m.g
        public void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas) {
            for (g gVar : this.f44059c) {
                gVar.a(this.f44060d, aVar, i10, canvas);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends g {

        /* renamed from: c  reason: collision with root package name */
        private final d f44062c;

        public b(d dVar) {
            this.f44062c = dVar;
        }

        @Override // oh.m.g
        public void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas) {
            aVar.a(canvas, matrix, new RectF(this.f44062c.k(), this.f44062c.o(), this.f44062c.l(), this.f44062c.j()), i10, this.f44062c.m(), this.f44062c.n());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        private final e f44063c;

        /* renamed from: d  reason: collision with root package name */
        private final float f44064d;

        /* renamed from: e  reason: collision with root package name */
        private final float f44065e;

        public c(e eVar, float f10, float f11) {
            this.f44063c = eVar;
            this.f44064d = f10;
            this.f44065e = f11;
        }

        @Override // oh.m.g
        public void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas) {
            RectF rectF = new RectF(0.0f, 0.0f, (float) Math.hypot(this.f44063c.f44074c - this.f44065e, this.f44063c.f44073b - this.f44064d), 0.0f);
            this.f44077a.set(matrix);
            this.f44077a.preTranslate(this.f44064d, this.f44065e);
            this.f44077a.preRotate(c());
            aVar.b(canvas, this.f44077a, rectF, i10);
        }

        float c() {
            return (float) Math.toDegrees(Math.atan((this.f44063c.f44074c - this.f44065e) / (this.f44063c.f44073b - this.f44064d)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends f {

        /* renamed from: h  reason: collision with root package name */
        private static final RectF f44066h = new RectF();

        /* renamed from: b  reason: collision with root package name */
        public float f44067b;

        /* renamed from: c  reason: collision with root package name */
        public float f44068c;

        /* renamed from: d  reason: collision with root package name */
        public float f44069d;

        /* renamed from: e  reason: collision with root package name */
        public float f44070e;

        /* renamed from: f  reason: collision with root package name */
        public float f44071f;

        /* renamed from: g  reason: collision with root package name */
        public float f44072g;

        public d(float f10, float f11, float f12, float f13) {
            q(f10);
            u(f11);
            r(f12);
            p(f13);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float j() {
            return this.f44070e;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float k() {
            return this.f44067b;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float l() {
            return this.f44069d;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float m() {
            return this.f44071f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float n() {
            return this.f44072g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float o() {
            return this.f44068c;
        }

        private void p(float f10) {
            this.f44070e = f10;
        }

        private void q(float f10) {
            this.f44067b = f10;
        }

        private void r(float f10) {
            this.f44069d = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(float f10) {
            this.f44071f = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t(float f10) {
            this.f44072g = f10;
        }

        private void u(float f10) {
            this.f44068c = f10;
        }

        @Override // oh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f44075a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            RectF rectF = f44066h;
            rectF.set(k(), o(), l(), j());
            path.arcTo(rectF, m(), n(), false);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends f {

        /* renamed from: b  reason: collision with root package name */
        private float f44073b;

        /* renamed from: c  reason: collision with root package name */
        private float f44074c;

        @Override // oh.m.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f44075a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            path.lineTo(this.f44073b, this.f44074c);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        protected final Matrix f44075a = new Matrix();

        public abstract void a(Matrix matrix, Path path);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {

        /* renamed from: b  reason: collision with root package name */
        static final Matrix f44076b = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        final Matrix f44077a = new Matrix();

        g() {
        }

        public abstract void a(Matrix matrix, nh.a aVar, int i10, Canvas canvas);

        public final void b(nh.a aVar, int i10, Canvas canvas) {
            a(f44076b, aVar, i10, canvas);
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
            this.f44057h.add(new b(dVar));
            p(f10);
        }
    }

    private void c(g gVar, float f10, float f11) {
        b(f10);
        this.f44057h.add(gVar);
        p(f11);
    }

    private float g() {
        return this.f44054e;
    }

    private float h() {
        return this.f44055f;
    }

    private void p(float f10) {
        this.f44054e = f10;
    }

    private void q(float f10) {
        this.f44055f = f10;
    }

    private void r(float f10) {
        this.f44052c = f10;
    }

    private void s(float f10) {
        this.f44053d = f10;
    }

    private void t(float f10) {
        this.f44050a = f10;
    }

    private void u(float f10) {
        this.f44051b = f10;
    }

    public void a(float f10, float f11, float f12, float f13, float f14, float f15) {
        boolean z10;
        float f16;
        d dVar = new d(f10, f11, f12, f13);
        dVar.s(f14);
        dVar.t(f15);
        this.f44056g.add(dVar);
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
        int size = this.f44056g.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((f) this.f44056g.get(i10)).a(matrix, path);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f44058i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f(Matrix matrix) {
        b(h());
        return new a(new ArrayList(this.f44057h), new Matrix(matrix));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        return this.f44052c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f44053d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float k() {
        return this.f44050a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f44051b;
    }

    public void m(float f10, float f11) {
        e eVar = new e();
        eVar.f44073b = f10;
        eVar.f44074c = f11;
        this.f44056g.add(eVar);
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
        this.f44056g.clear();
        this.f44057h.clear();
        this.f44058i = false;
    }
}
