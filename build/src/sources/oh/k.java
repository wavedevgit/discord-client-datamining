package oh;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: m  reason: collision with root package name */
    public static final oh.c f44007m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f44008a;

    /* renamed from: b  reason: collision with root package name */
    d f44009b;

    /* renamed from: c  reason: collision with root package name */
    d f44010c;

    /* renamed from: d  reason: collision with root package name */
    d f44011d;

    /* renamed from: e  reason: collision with root package name */
    oh.c f44012e;

    /* renamed from: f  reason: collision with root package name */
    oh.c f44013f;

    /* renamed from: g  reason: collision with root package name */
    oh.c f44014g;

    /* renamed from: h  reason: collision with root package name */
    oh.c f44015h;

    /* renamed from: i  reason: collision with root package name */
    f f44016i;

    /* renamed from: j  reason: collision with root package name */
    f f44017j;

    /* renamed from: k  reason: collision with root package name */
    f f44018k;

    /* renamed from: l  reason: collision with root package name */
    f f44019l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        oh.c a(oh.c cVar);
    }

    public static b a() {
        return new b();
    }

    public static b b(Context context, int i10, int i11) {
        return c(context, i10, i11, 0);
    }

    private static b c(Context context, int i10, int i11, int i12) {
        return d(context, i10, i11, new oh.a(i12));
    }

    private static b d(Context context, int i10, int i11, oh.c cVar) {
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, i10);
        if (i11 != 0) {
            contextThemeWrapper = new ContextThemeWrapper(contextThemeWrapper, i11);
        }
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(yg.k.f54686r5);
        try {
            int i12 = obtainStyledAttributes.getInt(yg.k.f54695s5, 0);
            int i13 = obtainStyledAttributes.getInt(yg.k.f54722v5, i12);
            int i14 = obtainStyledAttributes.getInt(yg.k.f54731w5, i12);
            int i15 = obtainStyledAttributes.getInt(yg.k.f54713u5, i12);
            int i16 = obtainStyledAttributes.getInt(yg.k.f54704t5, i12);
            oh.c m10 = m(obtainStyledAttributes, yg.k.f54740x5, cVar);
            oh.c m11 = m(obtainStyledAttributes, yg.k.A5, m10);
            oh.c m12 = m(obtainStyledAttributes, yg.k.B5, m10);
            oh.c m13 = m(obtainStyledAttributes, yg.k.f54758z5, m10);
            return new b().z(i13, m11).E(i14, m12).u(i15, m13).q(i16, m(obtainStyledAttributes, yg.k.f54749y5, m10));
        } finally {
            obtainStyledAttributes.recycle();
        }
    }

    public static b e(Context context, AttributeSet attributeSet, int i10, int i11) {
        return f(context, attributeSet, i10, i11, 0);
    }

    public static b f(Context context, AttributeSet attributeSet, int i10, int i11, int i12) {
        return g(context, attributeSet, i10, i11, new oh.a(i12));
    }

    public static b g(Context context, AttributeSet attributeSet, int i10, int i11, oh.c cVar) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.f54658o4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(yg.k.f54667p4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(yg.k.f54676q4, 0);
        obtainStyledAttributes.recycle();
        return d(context, resourceId, resourceId2, cVar);
    }

    private static oh.c m(TypedArray typedArray, int i10, oh.c cVar) {
        TypedValue peekValue = typedArray.peekValue(i10);
        if (peekValue != null) {
            int i11 = peekValue.type;
            if (i11 == 5) {
                return new oh.a(TypedValue.complexToDimensionPixelSize(peekValue.data, typedArray.getResources().getDisplayMetrics()));
            }
            if (i11 == 6) {
                return new i(peekValue.getFraction(1.0f, 1.0f));
            }
        }
        return cVar;
    }

    public f h() {
        return this.f44018k;
    }

    public d i() {
        return this.f44011d;
    }

    public oh.c j() {
        return this.f44015h;
    }

    public d k() {
        return this.f44010c;
    }

    public oh.c l() {
        return this.f44014g;
    }

    public f n() {
        return this.f44019l;
    }

    public f o() {
        return this.f44017j;
    }

    public f p() {
        return this.f44016i;
    }

    public d q() {
        return this.f44008a;
    }

    public oh.c r() {
        return this.f44012e;
    }

    public d s() {
        return this.f44009b;
    }

    public oh.c t() {
        return this.f44013f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f44019l.getClass().equals(f.class) && this.f44017j.getClass().equals(f.class) && this.f44016i.getClass().equals(f.class) && this.f44018k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f44012e.a(rectF);
        if (this.f44013f.a(rectF) == a10 && this.f44015h.a(rectF) == a10 && this.f44014g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f44009b instanceof j) && (this.f44008a instanceof j) && (this.f44010c instanceof j) && (this.f44011d instanceof j)) {
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

    public k x(oh.c cVar) {
        return v().p(cVar).m();
    }

    public k y(c cVar) {
        return v().C(cVar.a(r())).H(cVar.a(t())).t(cVar.a(j())).x(cVar.a(l())).m();
    }

    private k(b bVar) {
        this.f44008a = bVar.f44020a;
        this.f44009b = bVar.f44021b;
        this.f44010c = bVar.f44022c;
        this.f44011d = bVar.f44023d;
        this.f44012e = bVar.f44024e;
        this.f44013f = bVar.f44025f;
        this.f44014g = bVar.f44026g;
        this.f44015h = bVar.f44027h;
        this.f44016i = bVar.f44028i;
        this.f44017j = bVar.f44029j;
        this.f44018k = bVar.f44030k;
        this.f44019l = bVar.f44031l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f44020a;

        /* renamed from: b  reason: collision with root package name */
        private d f44021b;

        /* renamed from: c  reason: collision with root package name */
        private d f44022c;

        /* renamed from: d  reason: collision with root package name */
        private d f44023d;

        /* renamed from: e  reason: collision with root package name */
        private oh.c f44024e;

        /* renamed from: f  reason: collision with root package name */
        private oh.c f44025f;

        /* renamed from: g  reason: collision with root package name */
        private oh.c f44026g;

        /* renamed from: h  reason: collision with root package name */
        private oh.c f44027h;

        /* renamed from: i  reason: collision with root package name */
        private f f44028i;

        /* renamed from: j  reason: collision with root package name */
        private f f44029j;

        /* renamed from: k  reason: collision with root package name */
        private f f44030k;

        /* renamed from: l  reason: collision with root package name */
        private f f44031l;

        public b() {
            this.f44020a = h.b();
            this.f44021b = h.b();
            this.f44022c = h.b();
            this.f44023d = h.b();
            this.f44024e = new oh.a(0.0f);
            this.f44025f = new oh.a(0.0f);
            this.f44026g = new oh.a(0.0f);
            this.f44027h = new oh.a(0.0f);
            this.f44028i = h.c();
            this.f44029j = h.c();
            this.f44030k = h.c();
            this.f44031l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f44006a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f43964a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f44020a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f44024e = new oh.a(f10);
            return this;
        }

        public b C(oh.c cVar) {
            this.f44024e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, oh.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f44021b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f44025f = new oh.a(f10);
            return this;
        }

        public b H(oh.c cVar) {
            this.f44025f = cVar;
            return this;
        }

        public k m() {
            return new k(this);
        }

        public b o(float f10) {
            return B(f10).G(f10).w(f10).s(f10);
        }

        public b p(oh.c cVar) {
            return C(cVar).H(cVar).x(cVar).t(cVar);
        }

        public b q(int i10, oh.c cVar) {
            return r(h.a(i10)).t(cVar);
        }

        public b r(d dVar) {
            this.f44023d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f44027h = new oh.a(f10);
            return this;
        }

        public b t(oh.c cVar) {
            this.f44027h = cVar;
            return this;
        }

        public b u(int i10, oh.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f44022c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f44026g = new oh.a(f10);
            return this;
        }

        public b x(oh.c cVar) {
            this.f44026g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, oh.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f44020a = h.b();
            this.f44021b = h.b();
            this.f44022c = h.b();
            this.f44023d = h.b();
            this.f44024e = new oh.a(0.0f);
            this.f44025f = new oh.a(0.0f);
            this.f44026g = new oh.a(0.0f);
            this.f44027h = new oh.a(0.0f);
            this.f44028i = h.c();
            this.f44029j = h.c();
            this.f44030k = h.c();
            this.f44031l = h.c();
            this.f44020a = kVar.f44008a;
            this.f44021b = kVar.f44009b;
            this.f44022c = kVar.f44010c;
            this.f44023d = kVar.f44011d;
            this.f44024e = kVar.f44012e;
            this.f44025f = kVar.f44013f;
            this.f44026g = kVar.f44014g;
            this.f44027h = kVar.f44015h;
            this.f44028i = kVar.f44016i;
            this.f44029j = kVar.f44017j;
            this.f44030k = kVar.f44018k;
            this.f44031l = kVar.f44019l;
        }
    }

    public k() {
        this.f44008a = h.b();
        this.f44009b = h.b();
        this.f44010c = h.b();
        this.f44011d = h.b();
        this.f44012e = new oh.a(0.0f);
        this.f44013f = new oh.a(0.0f);
        this.f44014g = new oh.a(0.0f);
        this.f44015h = new oh.a(0.0f);
        this.f44016i = h.c();
        this.f44017j = h.c();
        this.f44018k = h.c();
        this.f44019l = h.c();
    }
}
