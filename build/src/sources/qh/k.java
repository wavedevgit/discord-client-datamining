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
    public static final qh.c f47826m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f47827a;

    /* renamed from: b  reason: collision with root package name */
    d f47828b;

    /* renamed from: c  reason: collision with root package name */
    d f47829c;

    /* renamed from: d  reason: collision with root package name */
    d f47830d;

    /* renamed from: e  reason: collision with root package name */
    qh.c f47831e;

    /* renamed from: f  reason: collision with root package name */
    qh.c f47832f;

    /* renamed from: g  reason: collision with root package name */
    qh.c f47833g;

    /* renamed from: h  reason: collision with root package name */
    qh.c f47834h;

    /* renamed from: i  reason: collision with root package name */
    f f47835i;

    /* renamed from: j  reason: collision with root package name */
    f f47836j;

    /* renamed from: k  reason: collision with root package name */
    f f47837k;

    /* renamed from: l  reason: collision with root package name */
    f f47838l;

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
        return this.f47837k;
    }

    public d i() {
        return this.f47830d;
    }

    public qh.c j() {
        return this.f47834h;
    }

    public d k() {
        return this.f47829c;
    }

    public qh.c l() {
        return this.f47833g;
    }

    public f n() {
        return this.f47838l;
    }

    public f o() {
        return this.f47836j;
    }

    public f p() {
        return this.f47835i;
    }

    public d q() {
        return this.f47827a;
    }

    public qh.c r() {
        return this.f47831e;
    }

    public d s() {
        return this.f47828b;
    }

    public qh.c t() {
        return this.f47832f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f47838l.getClass().equals(f.class) && this.f47836j.getClass().equals(f.class) && this.f47835i.getClass().equals(f.class) && this.f47837k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f47831e.a(rectF);
        if (this.f47832f.a(rectF) == a10 && this.f47834h.a(rectF) == a10 && this.f47833g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f47828b instanceof j) && (this.f47827a instanceof j) && (this.f47829c instanceof j) && (this.f47830d instanceof j)) {
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
        this.f47827a = bVar.f47839a;
        this.f47828b = bVar.f47840b;
        this.f47829c = bVar.f47841c;
        this.f47830d = bVar.f47842d;
        this.f47831e = bVar.f47843e;
        this.f47832f = bVar.f47844f;
        this.f47833g = bVar.f47845g;
        this.f47834h = bVar.f47846h;
        this.f47835i = bVar.f47847i;
        this.f47836j = bVar.f47848j;
        this.f47837k = bVar.f47849k;
        this.f47838l = bVar.f47850l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f47839a;

        /* renamed from: b  reason: collision with root package name */
        private d f47840b;

        /* renamed from: c  reason: collision with root package name */
        private d f47841c;

        /* renamed from: d  reason: collision with root package name */
        private d f47842d;

        /* renamed from: e  reason: collision with root package name */
        private qh.c f47843e;

        /* renamed from: f  reason: collision with root package name */
        private qh.c f47844f;

        /* renamed from: g  reason: collision with root package name */
        private qh.c f47845g;

        /* renamed from: h  reason: collision with root package name */
        private qh.c f47846h;

        /* renamed from: i  reason: collision with root package name */
        private f f47847i;

        /* renamed from: j  reason: collision with root package name */
        private f f47848j;

        /* renamed from: k  reason: collision with root package name */
        private f f47849k;

        /* renamed from: l  reason: collision with root package name */
        private f f47850l;

        public b() {
            this.f47839a = h.b();
            this.f47840b = h.b();
            this.f47841c = h.b();
            this.f47842d = h.b();
            this.f47843e = new qh.a(0.0f);
            this.f47844f = new qh.a(0.0f);
            this.f47845g = new qh.a(0.0f);
            this.f47846h = new qh.a(0.0f);
            this.f47847i = h.c();
            this.f47848j = h.c();
            this.f47849k = h.c();
            this.f47850l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f47825a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f47783a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f47839a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f47843e = new qh.a(f10);
            return this;
        }

        public b C(qh.c cVar) {
            this.f47843e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, qh.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f47840b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f47844f = new qh.a(f10);
            return this;
        }

        public b H(qh.c cVar) {
            this.f47844f = cVar;
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
            this.f47842d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f47846h = new qh.a(f10);
            return this;
        }

        public b t(qh.c cVar) {
            this.f47846h = cVar;
            return this;
        }

        public b u(int i10, qh.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f47841c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f47845g = new qh.a(f10);
            return this;
        }

        public b x(qh.c cVar) {
            this.f47845g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, qh.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f47839a = h.b();
            this.f47840b = h.b();
            this.f47841c = h.b();
            this.f47842d = h.b();
            this.f47843e = new qh.a(0.0f);
            this.f47844f = new qh.a(0.0f);
            this.f47845g = new qh.a(0.0f);
            this.f47846h = new qh.a(0.0f);
            this.f47847i = h.c();
            this.f47848j = h.c();
            this.f47849k = h.c();
            this.f47850l = h.c();
            this.f47839a = kVar.f47827a;
            this.f47840b = kVar.f47828b;
            this.f47841c = kVar.f47829c;
            this.f47842d = kVar.f47830d;
            this.f47843e = kVar.f47831e;
            this.f47844f = kVar.f47832f;
            this.f47845g = kVar.f47833g;
            this.f47846h = kVar.f47834h;
            this.f47847i = kVar.f47835i;
            this.f47848j = kVar.f47836j;
            this.f47849k = kVar.f47837k;
            this.f47850l = kVar.f47838l;
        }
    }

    public k() {
        this.f47827a = h.b();
        this.f47828b = h.b();
        this.f47829c = h.b();
        this.f47830d = h.b();
        this.f47831e = new qh.a(0.0f);
        this.f47832f = new qh.a(0.0f);
        this.f47833g = new qh.a(0.0f);
        this.f47834h = new qh.a(0.0f);
        this.f47835i = h.c();
        this.f47836j = h.c();
        this.f47837k = h.c();
        this.f47838l = h.c();
    }
}
