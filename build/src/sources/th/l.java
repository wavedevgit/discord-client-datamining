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
    public static final d f48835m = new j(0.5f);

    /* renamed from: a  reason: collision with root package name */
    e f48836a;

    /* renamed from: b  reason: collision with root package name */
    e f48837b;

    /* renamed from: c  reason: collision with root package name */
    e f48838c;

    /* renamed from: d  reason: collision with root package name */
    e f48839d;

    /* renamed from: e  reason: collision with root package name */
    d f48840e;

    /* renamed from: f  reason: collision with root package name */
    d f48841f;

    /* renamed from: g  reason: collision with root package name */
    d f48842g;

    /* renamed from: h  reason: collision with root package name */
    d f48843h;

    /* renamed from: i  reason: collision with root package name */
    g f48844i;

    /* renamed from: j  reason: collision with root package name */
    g f48845j;

    /* renamed from: k  reason: collision with root package name */
    g f48846k;

    /* renamed from: l  reason: collision with root package name */
    g f48847l;

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
        return this.f48846k;
    }

    public e i() {
        return this.f48839d;
    }

    public d j() {
        return this.f48843h;
    }

    public e k() {
        return this.f48838c;
    }

    public d l() {
        return this.f48842g;
    }

    public g n() {
        return this.f48847l;
    }

    public g o() {
        return this.f48845j;
    }

    public g p() {
        return this.f48844i;
    }

    public e q() {
        return this.f48836a;
    }

    public d r() {
        return this.f48840e;
    }

    public e s() {
        return this.f48837b;
    }

    public d t() {
        return this.f48841f;
    }

    public String toString() {
        return "[" + r() + ", " + t() + ", " + l() + ", " + j() + "]";
    }

    public boolean u() {
        if ((this.f48837b instanceof k) && (this.f48836a instanceof k) && (this.f48838c instanceof k) && (this.f48839d instanceof k)) {
            return true;
        }
        return false;
    }

    public boolean v(RectF rectF) {
        boolean z10;
        boolean z11;
        if (this.f48847l.getClass().equals(g.class) && this.f48845j.getClass().equals(g.class) && this.f48844i.getClass().equals(g.class) && this.f48846k.getClass().equals(g.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f48840e.a(rectF);
        if (this.f48841f.a(rectF) == a10 && this.f48843h.a(rectF) == a10 && this.f48842g.a(rectF) == a10) {
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
        this.f48836a = bVar.f48848a;
        this.f48837b = bVar.f48849b;
        this.f48838c = bVar.f48850c;
        this.f48839d = bVar.f48851d;
        this.f48840e = bVar.f48852e;
        this.f48841f = bVar.f48853f;
        this.f48842g = bVar.f48854g;
        this.f48843h = bVar.f48855h;
        this.f48844i = bVar.f48856i;
        this.f48845j = bVar.f48857j;
        this.f48846k = bVar.f48858k;
        this.f48847l = bVar.f48859l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private e f48848a;

        /* renamed from: b  reason: collision with root package name */
        private e f48849b;

        /* renamed from: c  reason: collision with root package name */
        private e f48850c;

        /* renamed from: d  reason: collision with root package name */
        private e f48851d;

        /* renamed from: e  reason: collision with root package name */
        private d f48852e;

        /* renamed from: f  reason: collision with root package name */
        private d f48853f;

        /* renamed from: g  reason: collision with root package name */
        private d f48854g;

        /* renamed from: h  reason: collision with root package name */
        private d f48855h;

        /* renamed from: i  reason: collision with root package name */
        private g f48856i;

        /* renamed from: j  reason: collision with root package name */
        private g f48857j;

        /* renamed from: k  reason: collision with root package name */
        private g f48858k;

        /* renamed from: l  reason: collision with root package name */
        private g f48859l;

        public b() {
            this.f48848a = i.b();
            this.f48849b = i.b();
            this.f48850c = i.b();
            this.f48851d = i.b();
            this.f48852e = new th.a(0.0f);
            this.f48853f = new th.a(0.0f);
            this.f48854g = new th.a(0.0f);
            this.f48855h = new th.a(0.0f);
            this.f48856i = i.c();
            this.f48857j = i.c();
            this.f48858k = i.c();
            this.f48859l = i.c();
        }

        private static float n(e eVar) {
            if (eVar instanceof k) {
                return ((k) eVar).f48834a;
            }
            if (eVar instanceof f) {
                return ((f) eVar).f48791a;
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
            this.f48848a = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                D(n10);
            }
            return this;
        }

        public b D(float f10) {
            this.f48852e = new th.a(f10);
            return this;
        }

        public b E(d dVar) {
            this.f48852e = dVar;
            return this;
        }

        public b F(int i10, float f10) {
            return H(i.a(i10)).I(f10);
        }

        public b G(int i10, d dVar) {
            return H(i.a(i10)).J(dVar);
        }

        public b H(e eVar) {
            this.f48849b = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                I(n10);
            }
            return this;
        }

        public b I(float f10) {
            this.f48853f = new th.a(f10);
            return this;
        }

        public b J(d dVar) {
            this.f48853f = dVar;
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
            this.f48851d = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                u(n10);
            }
            return this;
        }

        public b u(float f10) {
            this.f48855h = new th.a(f10);
            return this;
        }

        public b v(d dVar) {
            this.f48855h = dVar;
            return this;
        }

        public b w(int i10, d dVar) {
            return x(i.a(i10)).z(dVar);
        }

        public b x(e eVar) {
            this.f48850c = eVar;
            float n10 = n(eVar);
            if (n10 != -1.0f) {
                y(n10);
            }
            return this;
        }

        public b y(float f10) {
            this.f48854g = new th.a(f10);
            return this;
        }

        public b z(d dVar) {
            this.f48854g = dVar;
            return this;
        }

        public b(l lVar) {
            this.f48848a = i.b();
            this.f48849b = i.b();
            this.f48850c = i.b();
            this.f48851d = i.b();
            this.f48852e = new th.a(0.0f);
            this.f48853f = new th.a(0.0f);
            this.f48854g = new th.a(0.0f);
            this.f48855h = new th.a(0.0f);
            this.f48856i = i.c();
            this.f48857j = i.c();
            this.f48858k = i.c();
            this.f48859l = i.c();
            this.f48848a = lVar.f48836a;
            this.f48849b = lVar.f48837b;
            this.f48850c = lVar.f48838c;
            this.f48851d = lVar.f48839d;
            this.f48852e = lVar.f48840e;
            this.f48853f = lVar.f48841f;
            this.f48854g = lVar.f48842g;
            this.f48855h = lVar.f48843h;
            this.f48856i = lVar.f48844i;
            this.f48857j = lVar.f48845j;
            this.f48858k = lVar.f48846k;
            this.f48859l = lVar.f48847l;
        }
    }

    public l() {
        this.f48836a = i.b();
        this.f48837b = i.b();
        this.f48838c = i.b();
        this.f48839d = i.b();
        this.f48840e = new th.a(0.0f);
        this.f48841f = new th.a(0.0f);
        this.f48842g = new th.a(0.0f);
        this.f48843h = new th.a(0.0f);
        this.f48844i = i.c();
        this.f48845j = i.c();
        this.f48846k = i.c();
        this.f48847l = i.c();
    }
}
