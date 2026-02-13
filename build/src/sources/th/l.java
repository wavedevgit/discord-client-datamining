package th;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l {

    /* renamed from: m  reason: collision with root package name */
    public static final d f49403m = new j(0.5f);

    /* renamed from: a  reason: collision with root package name */
    e f49404a;

    /* renamed from: b  reason: collision with root package name */
    e f49405b;

    /* renamed from: c  reason: collision with root package name */
    e f49406c;

    /* renamed from: d  reason: collision with root package name */
    e f49407d;

    /* renamed from: e  reason: collision with root package name */
    d f49408e;

    /* renamed from: f  reason: collision with root package name */
    d f49409f;

    /* renamed from: g  reason: collision with root package name */
    d f49410g;

    /* renamed from: h  reason: collision with root package name */
    d f49411h;

    /* renamed from: i  reason: collision with root package name */
    g f49412i;

    /* renamed from: j  reason: collision with root package name */
    g f49413j;

    /* renamed from: k  reason: collision with root package name */
    g f49414k;

    /* renamed from: l  reason: collision with root package name */
    g f49415l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        d a(d dVar);
    }

    public static b a() {
        return new b();
    }

    public static b b(Context context, int i10, int i11) {
        return c(context, i10, i11, 0);
    }

    private static b c(Context context, int i10, int i11, int i12) {
        return d(context, i10, i11, new th.a(i12));
    }

    private static b d(Context context, int i10, int i11, d dVar) {
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, i10);
        if (i11 != 0) {
            contextThemeWrapper.getTheme().applyStyle(i11, true);
        }
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(bh.l.T5);
        try {
            int i12 = obtainStyledAttributes.getInt(bh.l.U5, 0);
            int i13 = obtainStyledAttributes.getInt(bh.l.X5, i12);
            int i14 = obtainStyledAttributes.getInt(bh.l.Y5, i12);
            int i15 = obtainStyledAttributes.getInt(bh.l.W5, i12);
            int i16 = obtainStyledAttributes.getInt(bh.l.V5, i12);
            d m10 = m(obtainStyledAttributes, bh.l.Z5, dVar);
            d m11 = m(obtainStyledAttributes, bh.l.f6979c6, m10);
            d m12 = m(obtainStyledAttributes, bh.l.f6989d6, m10);
            d m13 = m(obtainStyledAttributes, bh.l.f6969b6, m10);
            return new b().B(i13, m11).G(i14, m12).w(i15, m13).s(i16, m(obtainStyledAttributes, bh.l.f6959a6, m10));
        } finally {
            obtainStyledAttributes.recycle();
        }
    }

    public static b e(Context context, AttributeSet attributeSet, int i10, int i11) {
        return f(context, attributeSet, i10, i11, 0);
    }

    public static b f(Context context, AttributeSet attributeSet, int i10, int i11, int i12) {
        return g(context, attributeSet, i10, i11, new th.a(i12));
    }

    public static b g(Context context, AttributeSet attributeSet, int i10, int i11, d dVar) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, bh.l.f7134s4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(bh.l.f7143t4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(bh.l.f7152u4, 0);
        obtainStyledAttributes.recycle();
        return d(context, resourceId, resourceId2, dVar);
    }

    public static d m(TypedArray typedArray, int i10, d dVar) {
        TypedValue peekValue = typedArray.peekValue(i10);
        if (peekValue != null) {
            int i11 = peekValue.type;
            if (i11 == 5) {
                return new th.a(TypedValue.complexToDimensionPixelSize(peekValue.data, typedArray.getResources().getDisplayMetrics()));
            }
            if (i11 == 6) {
                return new j(peekValue.getFraction(1.0f, 1.0f));
            }
        }
        return dVar;
    }

    public g h() {
        return this.f49414k;
    }

    public e i() {
        return this.f49407d;
    }

    public d j() {
        return this.f49411h;
    }

    public e k() {
        return this.f49406c;
    }

    public d l() {
        return this.f49410g;
    }

    public g n() {
        return this.f49415l;
    }

    public g o() {
        return this.f49413j;
    }

    public g p() {
        return this.f49412i;
    }

    public e q() {
        return this.f49404a;
    }

    public d r() {
        return this.f49408e;
    }

    public e s() {
        return this.f49405b;
    }

    public d t() {
        return this.f49409f;
    }

    public String toString() {
        return "[" + r() + ", " + t() + ", " + l() + ", " + j() + "]";
    }

    public boolean u() {
        if ((this.f49405b instanceof k) && (this.f49404a instanceof k) && (this.f49406c instanceof k) && (this.f49407d instanceof k)) {
            return true;
        }
        return false;
    }

    public boolean v(RectF rectF) {
        boolean z10;
        boolean z11;
        if (this.f49415l.getClass().equals(g.class) && this.f49413j.getClass().equals(g.class) && this.f49412i.getClass().equals(g.class) && this.f49414k.getClass().equals(g.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f49408e.a(rectF);
        if (this.f49409f.a(rectF) == a10 && this.f49411h.a(rectF) == a10 && this.f49410g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (!z10 || !z11 || !u()) {
            return false;
        }
        return true;
    }

    public b w() {
        return new b(this);
    }

    public l x(float f10) {
        return w().o(f10).m();
    }

    public l y(d dVar) {
        return w().p(dVar).m();
    }

    public l z(c cVar) {
        return w().E(cVar.a(r())).J(cVar.a(t())).v(cVar.a(j())).z(cVar.a(l())).m();
    }

    private l(b bVar) {
        this.f49404a = bVar.f49416a;
        this.f49405b = bVar.f49417b;
        this.f49406c = bVar.f49418c;
        this.f49407d = bVar.f49419d;
        this.f49408e = bVar.f49420e;
        this.f49409f = bVar.f49421f;
        this.f49410g = bVar.f49422g;
        this.f49411h = bVar.f49423h;
        this.f49412i = bVar.f49424i;
        this.f49413j = bVar.f49425j;
        this.f49414k = bVar.f49426k;
        this.f49415l = bVar.f49427l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private e f49416a;

        /* renamed from: b  reason: collision with root package name */
        private e f49417b;

        /* renamed from: c  reason: collision with root package name */
        private e f49418c;

        /* renamed from: d  reason: collision with root package name */
        private e f49419d;

        /* renamed from: e  reason: collision with root package name */
        private d f49420e;

        /* renamed from: f  reason: collision with root package name */
        private d f49421f;

        /* renamed from: g  reason: collision with root package name */
        private d f49422g;

        /* renamed from: h  reason: collision with root package name */
        private d f49423h;

        /* renamed from: i  reason: collision with root package name */
        private g f49424i;

        /* renamed from: j  reason: collision with root package name */
        private g f49425j;

        /* renamed from: k  reason: collision with root package name */
        private g f49426k;

        /* renamed from: l  reason: collision with root package name */
        private g f49427l;

        public b() {
            this.f49416a = i.b();
            this.f49417b = i.b();
            this.f49418c = i.b();
            this.f49419d = i.b();
            this.f49420e = new th.a(0.0f);
            this.f49421f = new th.a(0.0f);
            this.f49422g = new th.a(0.0f);
            this.f49423h = new th.a(0.0f);
            this.f49424i = i.c();
            this.f49425j = i.c();
            this.f49426k = i.c();
            this.f49427l = i.c();
        }

        private static float n(e eVar) {
            if (eVar instanceof k) {
                return ((k) eVar).f49402a;
            }
            if (eVar instanceof f) {
                return ((f) eVar).f49359a;
            }
            return -1.0f;
        }

        public b A(int i10, float f10) {
            return C(i.a(i10)).D(f10);
        }

        public b B(int i10, d dVar) {
            return C(i.a(i10)).E(dVar);
        }

        public b C(e eVar) {
            this.f49416a = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                D(n10);
            }
            return this;
        }

        public b D(float f10) {
            this.f49420e = new th.a(f10);
            return this;
        }

        public b E(d dVar) {
            this.f49420e = dVar;
            return this;
        }

        public b F(int i10, float f10) {
            return H(i.a(i10)).I(f10);
        }

        public b G(int i10, d dVar) {
            return H(i.a(i10)).J(dVar);
        }

        public b H(e eVar) {
            this.f49417b = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                I(n10);
            }
            return this;
        }

        public b I(float f10) {
            this.f49421f = new th.a(f10);
            return this;
        }

        public b J(d dVar) {
            this.f49421f = dVar;
            return this;
        }

        public l m() {
            return new l(this);
        }

        public b o(float f10) {
            return D(f10).I(f10).y(f10).u(f10);
        }

        public b p(d dVar) {
            return E(dVar).J(dVar).z(dVar).v(dVar);
        }

        public b q(int i10, float f10) {
            return r(i.a(i10)).o(f10);
        }

        public b r(e eVar) {
            return C(eVar).H(eVar).x(eVar).t(eVar);
        }

        public b s(int i10, d dVar) {
            return t(i.a(i10)).v(dVar);
        }

        public b t(e eVar) {
            this.f49419d = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                u(n10);
            }
            return this;
        }

        public b u(float f10) {
            this.f49423h = new th.a(f10);
            return this;
        }

        public b v(d dVar) {
            this.f49423h = dVar;
            return this;
        }

        public b w(int i10, d dVar) {
            return x(i.a(i10)).z(dVar);
        }

        public b x(e eVar) {
            this.f49418c = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                y(n10);
            }
            return this;
        }

        public b y(float f10) {
            this.f49422g = new th.a(f10);
            return this;
        }

        public b z(d dVar) {
            this.f49422g = dVar;
            return this;
        }

        public b(l lVar) {
            this.f49416a = i.b();
            this.f49417b = i.b();
            this.f49418c = i.b();
            this.f49419d = i.b();
            this.f49420e = new th.a(0.0f);
            this.f49421f = new th.a(0.0f);
            this.f49422g = new th.a(0.0f);
            this.f49423h = new th.a(0.0f);
            this.f49424i = i.c();
            this.f49425j = i.c();
            this.f49426k = i.c();
            this.f49427l = i.c();
            this.f49416a = lVar.f49404a;
            this.f49417b = lVar.f49405b;
            this.f49418c = lVar.f49406c;
            this.f49419d = lVar.f49407d;
            this.f49420e = lVar.f49408e;
            this.f49421f = lVar.f49409f;
            this.f49422g = lVar.f49410g;
            this.f49423h = lVar.f49411h;
            this.f49424i = lVar.f49412i;
            this.f49425j = lVar.f49413j;
            this.f49426k = lVar.f49414k;
            this.f49427l = lVar.f49415l;
        }
    }

    public l() {
        this.f49404a = i.b();
        this.f49405b = i.b();
        this.f49406c = i.b();
        this.f49407d = i.b();
        this.f49408e = new th.a(0.0f);
        this.f49409f = new th.a(0.0f);
        this.f49410g = new th.a(0.0f);
        this.f49411h = new th.a(0.0f);
        this.f49412i = i.c();
        this.f49413j = i.c();
        this.f49414k = i.c();
        this.f49415l = i.c();
    }
}
