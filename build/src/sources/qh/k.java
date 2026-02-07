package qh;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: m  reason: collision with root package name */
    public static final qh.c f47874m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f47875a;

    /* renamed from: b  reason: collision with root package name */
    d f47876b;

    /* renamed from: c  reason: collision with root package name */
    d f47877c;

    /* renamed from: d  reason: collision with root package name */
    d f47878d;

    /* renamed from: e  reason: collision with root package name */
    qh.c f47879e;

    /* renamed from: f  reason: collision with root package name */
    qh.c f47880f;

    /* renamed from: g  reason: collision with root package name */
    qh.c f47881g;

    /* renamed from: h  reason: collision with root package name */
    qh.c f47882h;

    /* renamed from: i  reason: collision with root package name */
    f f47883i;

    /* renamed from: j  reason: collision with root package name */
    f f47884j;

    /* renamed from: k  reason: collision with root package name */
    f f47885k;

    /* renamed from: l  reason: collision with root package name */
    f f47886l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        qh.c a(qh.c cVar);
    }

    public static b a() {
        return new b();
    }

    public static b b(Context context, int i10, int i11) {
        return c(context, i10, i11, 0);
    }

    private static b c(Context context, int i10, int i11, int i12) {
        return d(context, i10, i11, new qh.a(i12));
    }

    private static b d(Context context, int i10, int i11, qh.c cVar) {
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, i10);
        if (i11 != 0) {
            contextThemeWrapper = new ContextThemeWrapper(contextThemeWrapper, i11);
        }
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(ah.k.f994r5);
        try {
            int i12 = obtainStyledAttributes.getInt(ah.k.f1003s5, 0);
            int i13 = obtainStyledAttributes.getInt(ah.k.f1030v5, i12);
            int i14 = obtainStyledAttributes.getInt(ah.k.f1039w5, i12);
            int i15 = obtainStyledAttributes.getInt(ah.k.f1021u5, i12);
            int i16 = obtainStyledAttributes.getInt(ah.k.f1012t5, i12);
            qh.c m10 = m(obtainStyledAttributes, ah.k.f1048x5, cVar);
            qh.c m11 = m(obtainStyledAttributes, ah.k.A5, m10);
            qh.c m12 = m(obtainStyledAttributes, ah.k.B5, m10);
            qh.c m13 = m(obtainStyledAttributes, ah.k.f1066z5, m10);
            return new b().z(i13, m11).E(i14, m12).u(i15, m13).q(i16, m(obtainStyledAttributes, ah.k.f1057y5, m10));
        } finally {
            obtainStyledAttributes.recycle();
        }
    }

    public static b e(Context context, AttributeSet attributeSet, int i10, int i11) {
        return f(context, attributeSet, i10, i11, 0);
    }

    public static b f(Context context, AttributeSet attributeSet, int i10, int i11, int i12) {
        return g(context, attributeSet, i10, i11, new qh.a(i12));
    }

    public static b g(Context context, AttributeSet attributeSet, int i10, int i11, qh.c cVar) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, ah.k.f966o4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(ah.k.f975p4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(ah.k.f984q4, 0);
        obtainStyledAttributes.recycle();
        return d(context, resourceId, resourceId2, cVar);
    }

    private static qh.c m(TypedArray typedArray, int i10, qh.c cVar) {
        TypedValue peekValue = typedArray.peekValue(i10);
        if (peekValue != null) {
            int i11 = peekValue.type;
            if (i11 == 5) {
                return new qh.a(TypedValue.complexToDimensionPixelSize(peekValue.data, typedArray.getResources().getDisplayMetrics()));
            }
            if (i11 == 6) {
                return new i(peekValue.getFraction(1.0f, 1.0f));
            }
        }
        return cVar;
    }

    public f h() {
        return this.f47885k;
    }

    public d i() {
        return this.f47878d;
    }

    public qh.c j() {
        return this.f47882h;
    }

    public d k() {
        return this.f47877c;
    }

    public qh.c l() {
        return this.f47881g;
    }

    public f n() {
        return this.f47886l;
    }

    public f o() {
        return this.f47884j;
    }

    public f p() {
        return this.f47883i;
    }

    public d q() {
        return this.f47875a;
    }

    public qh.c r() {
        return this.f47879e;
    }

    public d s() {
        return this.f47876b;
    }

    public qh.c t() {
        return this.f47880f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f47886l.getClass().equals(f.class) && this.f47884j.getClass().equals(f.class) && this.f47883i.getClass().equals(f.class) && this.f47885k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f47879e.a(rectF);
        if (this.f47880f.a(rectF) == a10 && this.f47882h.a(rectF) == a10 && this.f47881g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f47876b instanceof j) && (this.f47875a instanceof j) && (this.f47877c instanceof j) && (this.f47878d instanceof j)) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (!z10 || !z11 || !z12) {
            return false;
        }
        return true;
    }

    public b v() {
        return new b(this);
    }

    public k w(float f10) {
        return v().o(f10).m();
    }

    public k x(qh.c cVar) {
        return v().p(cVar).m();
    }

    public k y(c cVar) {
        return v().C(cVar.a(r())).H(cVar.a(t())).t(cVar.a(j())).x(cVar.a(l())).m();
    }

    private k(b bVar) {
        this.f47875a = bVar.f47887a;
        this.f47876b = bVar.f47888b;
        this.f47877c = bVar.f47889c;
        this.f47878d = bVar.f47890d;
        this.f47879e = bVar.f47891e;
        this.f47880f = bVar.f47892f;
        this.f47881g = bVar.f47893g;
        this.f47882h = bVar.f47894h;
        this.f47883i = bVar.f47895i;
        this.f47884j = bVar.f47896j;
        this.f47885k = bVar.f47897k;
        this.f47886l = bVar.f47898l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f47887a;

        /* renamed from: b  reason: collision with root package name */
        private d f47888b;

        /* renamed from: c  reason: collision with root package name */
        private d f47889c;

        /* renamed from: d  reason: collision with root package name */
        private d f47890d;

        /* renamed from: e  reason: collision with root package name */
        private qh.c f47891e;

        /* renamed from: f  reason: collision with root package name */
        private qh.c f47892f;

        /* renamed from: g  reason: collision with root package name */
        private qh.c f47893g;

        /* renamed from: h  reason: collision with root package name */
        private qh.c f47894h;

        /* renamed from: i  reason: collision with root package name */
        private f f47895i;

        /* renamed from: j  reason: collision with root package name */
        private f f47896j;

        /* renamed from: k  reason: collision with root package name */
        private f f47897k;

        /* renamed from: l  reason: collision with root package name */
        private f f47898l;

        public b() {
            this.f47887a = h.b();
            this.f47888b = h.b();
            this.f47889c = h.b();
            this.f47890d = h.b();
            this.f47891e = new qh.a(0.0f);
            this.f47892f = new qh.a(0.0f);
            this.f47893g = new qh.a(0.0f);
            this.f47894h = new qh.a(0.0f);
            this.f47895i = h.c();
            this.f47896j = h.c();
            this.f47897k = h.c();
            this.f47898l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f47873a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f47831a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f47887a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f47891e = new qh.a(f10);
            return this;
        }

        public b C(qh.c cVar) {
            this.f47891e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, qh.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f47888b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f47892f = new qh.a(f10);
            return this;
        }

        public b H(qh.c cVar) {
            this.f47892f = cVar;
            return this;
        }

        public k m() {
            return new k(this);
        }

        public b o(float f10) {
            return B(f10).G(f10).w(f10).s(f10);
        }

        public b p(qh.c cVar) {
            return C(cVar).H(cVar).x(cVar).t(cVar);
        }

        public b q(int i10, qh.c cVar) {
            return r(h.a(i10)).t(cVar);
        }

        public b r(d dVar) {
            this.f47890d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f47894h = new qh.a(f10);
            return this;
        }

        public b t(qh.c cVar) {
            this.f47894h = cVar;
            return this;
        }

        public b u(int i10, qh.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f47889c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f47893g = new qh.a(f10);
            return this;
        }

        public b x(qh.c cVar) {
            this.f47893g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, qh.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f47887a = h.b();
            this.f47888b = h.b();
            this.f47889c = h.b();
            this.f47890d = h.b();
            this.f47891e = new qh.a(0.0f);
            this.f47892f = new qh.a(0.0f);
            this.f47893g = new qh.a(0.0f);
            this.f47894h = new qh.a(0.0f);
            this.f47895i = h.c();
            this.f47896j = h.c();
            this.f47897k = h.c();
            this.f47898l = h.c();
            this.f47887a = kVar.f47875a;
            this.f47888b = kVar.f47876b;
            this.f47889c = kVar.f47877c;
            this.f47890d = kVar.f47878d;
            this.f47891e = kVar.f47879e;
            this.f47892f = kVar.f47880f;
            this.f47893g = kVar.f47881g;
            this.f47894h = kVar.f47882h;
            this.f47895i = kVar.f47883i;
            this.f47896j = kVar.f47884j;
            this.f47897k = kVar.f47885k;
            this.f47898l = kVar.f47886l;
        }
    }

    public k() {
        this.f47875a = h.b();
        this.f47876b = h.b();
        this.f47877c = h.b();
        this.f47878d = h.b();
        this.f47879e = new qh.a(0.0f);
        this.f47880f = new qh.a(0.0f);
        this.f47881g = new qh.a(0.0f);
        this.f47882h = new qh.a(0.0f);
        this.f47883i = h.c();
        this.f47884j = h.c();
        this.f47885k = h.c();
        this.f47886l = h.c();
    }
}
