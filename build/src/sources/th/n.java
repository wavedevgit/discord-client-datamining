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
    public float f48878a;

    /* renamed from: b  reason: collision with root package name */
    public float f48879b;

    /* renamed from: c  reason: collision with root package name */
    public float f48880c;

    /* renamed from: d  reason: collision with root package name */
    public float f48881d;

    /* renamed from: e  reason: collision with root package name */
    public float f48882e;

    /* renamed from: f  reason: collision with root package name */
    public float f48883f;

    /* renamed from: g  reason: collision with root package name */
    private final List f48884g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f48885h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f48886i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends g {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ List f48887c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Matrix f48888d;

        a(List list, Matrix matrix) {
            this.f48887c = list;
            this.f48888d = matrix;
        }

        @Override // th.n.g
        public void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas) {
            for (g gVar : this.f48887c) {
                gVar.a(this.f48888d, aVar, i10, canvas);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends g {

        /* renamed from: c  reason: collision with root package name */
        private final d f48890c;

        public b(d dVar) {
            this.f48890c = dVar;
        }

        @Override // th.n.g
        public void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas) {
            aVar.a(canvas, matrix, new RectF(this.f48890c.k(), this.f48890c.o(), this.f48890c.l(), this.f48890c.j()), i10, this.f48890c.m(), this.f48890c.n());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        private final e f48891c;

        /* renamed from: d  reason: collision with root package name */
        private final float f48892d;

        /* renamed from: e  reason: collision with root package name */
        private final float f48893e;

        public c(e eVar, float f10, float f11) {
            this.f48891c = eVar;
            this.f48892d = f10;
            this.f48893e = f11;
        }

        @Override // th.n.g
        public void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas) {
            RectF rectF = new RectF(0.0f, 0.0f, (float) Math.hypot(this.f48891c.f48902c - this.f48893e, this.f48891c.f48901b - this.f48892d), 0.0f);
            this.f48905a.set(matrix);
            this.f48905a.preTranslate(this.f48892d, this.f48893e);
            this.f48905a.preRotate(c());
            aVar.b(canvas, this.f48905a, rectF, i10);
        }

        float c() {
            return (float) Math.toDegrees(Math.atan((this.f48891c.f48902c - this.f48893e) / (this.f48891c.f48901b - this.f48892d)));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends f {

        /* renamed from: h  reason: collision with root package name */
        private static final RectF f48894h = new RectF();

        /* renamed from: b  reason: collision with root package name */
        public float f48895b;

        /* renamed from: c  reason: collision with root package name */
        public float f48896c;

        /* renamed from: d  reason: collision with root package name */
        public float f48897d;

        /* renamed from: e  reason: collision with root package name */
        public float f48898e;

        /* renamed from: f  reason: collision with root package name */
        public float f48899f;

        /* renamed from: g  reason: collision with root package name */
        public float f48900g;

        public d(float f10, float f11, float f12, float f13) {
            q(f10);
            u(f11);
            r(f12);
            p(f13);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float j() {
            return this.f48898e;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float k() {
            return this.f48895b;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float l() {
            return this.f48897d;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float m() {
            return this.f48899f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float n() {
            return this.f48900g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public float o() {
            return this.f48896c;
        }

        private void p(float f10) {
            this.f48898e = f10;
        }

        private void q(float f10) {
            this.f48895b = f10;
        }

        private void r(float f10) {
            this.f48897d = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void s(float f10) {
            this.f48899f = f10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void t(float f10) {
            this.f48900g = f10;
        }

        private void u(float f10) {
            this.f48896c = f10;
        }

        @Override // th.n.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f48903a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            RectF rectF = f48894h;
            rectF.set(k(), o(), l(), j());
            path.arcTo(rectF, m(), n(), false);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class e extends f {

        /* renamed from: b  reason: collision with root package name */
        private float f48901b;

        /* renamed from: c  reason: collision with root package name */
        private float f48902c;

        @Override // th.n.f
        public void a(Matrix matrix, Path path) {
            Matrix matrix2 = this.f48903a;
            matrix.invert(matrix2);
            path.transform(matrix2);
            path.lineTo(this.f48901b, this.f48902c);
            path.transform(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        protected final Matrix f48903a = new Matrix();

        public abstract void a(Matrix matrix, Path path);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class g {

        /* renamed from: b  reason: collision with root package name */
        static final Matrix f48904b = new Matrix();

        /* renamed from: a  reason: collision with root package name */
        final Matrix f48905a = new Matrix();

        g() {
        }

        public abstract void a(Matrix matrix, sh.a aVar, int i10, Canvas canvas);

        public final void b(sh.a aVar, int i10, Canvas canvas) {
            a(f48904b, aVar, i10, canvas);
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
            this.f48885h.add(new b(dVar));
            p(f10);
        }
    }

    private void c(g gVar, float f10, float f11) {
        b(f10);
        this.f48885h.add(gVar);
        p(f11);
    }

    private float g() {
        return this.f48882e;
    }

    private float h() {
        return this.f48883f;
    }

    private void p(float f10) {
        this.f48882e = f10;
    }

    private void q(float f10) {
        this.f48883f = f10;
    }

    private void r(float f10) {
        this.f48880c = f10;
    }

    private void s(float f10) {
        this.f48881d = f10;
    }

    private void t(float f10) {
        this.f48878a = f10;
    }

    private void u(float f10) {
        this.f48879b = f10;
    }

    public void a(float f10, float f11, float f12, float f13, float f14, float f15) {
        boolean z10;
        float f16;
        d dVar = new d(f10, f11, f12, f13);
        dVar.s(f14);
        dVar.t(f15);
        this.f48884g.add(dVar);
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
        int size = this.f48884g.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((f) this.f48884g.get(i10)).a(matrix, path);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f48886i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g f(Matrix matrix) {
        b(h());
        return new a(new ArrayList(this.f48885h), new Matrix(matrix));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i() {
        return this.f48880c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float j() {
        return this.f48881d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float k() {
        return this.f48878a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f48879b;
    }

    public void m(float f10, float f11) {
        e eVar = new e();
        eVar.f48901b = f10;
        eVar.f48902c = f11;
        this.f48884g.add(eVar);
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
        this.f48884g.clear();
        this.f48885h.clear();
        this.f48886i = false;
    }
}
