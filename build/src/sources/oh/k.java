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
    public static final oh.c f43807m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f43808a;

    /* renamed from: b  reason: collision with root package name */
    d f43809b;

    /* renamed from: c  reason: collision with root package name */
    d f43810c;

    /* renamed from: d  reason: collision with root package name */
    d f43811d;

    /* renamed from: e  reason: collision with root package name */
    oh.c f43812e;

    /* renamed from: f  reason: collision with root package name */
    oh.c f43813f;

    /* renamed from: g  reason: collision with root package name */
    oh.c f43814g;

    /* renamed from: h  reason: collision with root package name */
    oh.c f43815h;

    /* renamed from: i  reason: collision with root package name */
    f f43816i;

    /* renamed from: j  reason: collision with root package name */
    f f43817j;

    /* renamed from: k  reason: collision with root package name */
    f f43818k;

    /* renamed from: l  reason: collision with root package name */
    f f43819l;

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
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(yg.k.f54441r5);
        try {
            int i12 = obtainStyledAttributes.getInt(yg.k.f54450s5, 0);
            int i13 = obtainStyledAttributes.getInt(yg.k.f54477v5, i12);
            int i14 = obtainStyledAttributes.getInt(yg.k.f54486w5, i12);
            int i15 = obtainStyledAttributes.getInt(yg.k.f54468u5, i12);
            int i16 = obtainStyledAttributes.getInt(yg.k.f54459t5, i12);
            oh.c m10 = m(obtainStyledAttributes, yg.k.f54495x5, cVar);
            oh.c m11 = m(obtainStyledAttributes, yg.k.A5, m10);
            oh.c m12 = m(obtainStyledAttributes, yg.k.B5, m10);
            oh.c m13 = m(obtainStyledAttributes, yg.k.f54513z5, m10);
            return new b().z(i13, m11).E(i14, m12).u(i15, m13).q(i16, m(obtainStyledAttributes, yg.k.f54504y5, m10));
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
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.f54413o4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(yg.k.f54422p4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(yg.k.f54431q4, 0);
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
        return this.f43818k;
    }

    public d i() {
        return this.f43811d;
    }

    public oh.c j() {
        return this.f43815h;
    }

    public d k() {
        return this.f43810c;
    }

    public oh.c l() {
        return this.f43814g;
    }

    public f n() {
        return this.f43819l;
    }

    public f o() {
        return this.f43817j;
    }

    public f p() {
        return this.f43816i;
    }

    public d q() {
        return this.f43808a;
    }

    public oh.c r() {
        return this.f43812e;
    }

    public d s() {
        return this.f43809b;
    }

    public oh.c t() {
        return this.f43813f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f43819l.getClass().equals(f.class) && this.f43817j.getClass().equals(f.class) && this.f43816i.getClass().equals(f.class) && this.f43818k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f43812e.a(rectF);
        if (this.f43813f.a(rectF) == a10 && this.f43815h.a(rectF) == a10 && this.f43814g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f43809b instanceof j) && (this.f43808a instanceof j) && (this.f43810c instanceof j) && (this.f43811d instanceof j)) {
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
        this.f43808a = bVar.f43820a;
        this.f43809b = bVar.f43821b;
        this.f43810c = bVar.f43822c;
        this.f43811d = bVar.f43823d;
        this.f43812e = bVar.f43824e;
        this.f43813f = bVar.f43825f;
        this.f43814g = bVar.f43826g;
        this.f43815h = bVar.f43827h;
        this.f43816i = bVar.f43828i;
        this.f43817j = bVar.f43829j;
        this.f43818k = bVar.f43830k;
        this.f43819l = bVar.f43831l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f43820a;

        /* renamed from: b  reason: collision with root package name */
        private d f43821b;

        /* renamed from: c  reason: collision with root package name */
        private d f43822c;

        /* renamed from: d  reason: collision with root package name */
        private d f43823d;

        /* renamed from: e  reason: collision with root package name */
        private oh.c f43824e;

        /* renamed from: f  reason: collision with root package name */
        private oh.c f43825f;

        /* renamed from: g  reason: collision with root package name */
        private oh.c f43826g;

        /* renamed from: h  reason: collision with root package name */
        private oh.c f43827h;

        /* renamed from: i  reason: collision with root package name */
        private f f43828i;

        /* renamed from: j  reason: collision with root package name */
        private f f43829j;

        /* renamed from: k  reason: collision with root package name */
        private f f43830k;

        /* renamed from: l  reason: collision with root package name */
        private f f43831l;

        public b() {
            this.f43820a = h.b();
            this.f43821b = h.b();
            this.f43822c = h.b();
            this.f43823d = h.b();
            this.f43824e = new oh.a(0.0f);
            this.f43825f = new oh.a(0.0f);
            this.f43826g = new oh.a(0.0f);
            this.f43827h = new oh.a(0.0f);
            this.f43828i = h.c();
            this.f43829j = h.c();
            this.f43830k = h.c();
            this.f43831l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f43806a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f43764a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f43820a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f43824e = new oh.a(f10);
            return this;
        }

        public b C(oh.c cVar) {
            this.f43824e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, oh.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f43821b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f43825f = new oh.a(f10);
            return this;
        }

        public b H(oh.c cVar) {
            this.f43825f = cVar;
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
            this.f43823d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f43827h = new oh.a(f10);
            return this;
        }

        public b t(oh.c cVar) {
            this.f43827h = cVar;
            return this;
        }

        public b u(int i10, oh.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f43822c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f43826g = new oh.a(f10);
            return this;
        }

        public b x(oh.c cVar) {
            this.f43826g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, oh.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f43820a = h.b();
            this.f43821b = h.b();
            this.f43822c = h.b();
            this.f43823d = h.b();
            this.f43824e = new oh.a(0.0f);
            this.f43825f = new oh.a(0.0f);
            this.f43826g = new oh.a(0.0f);
            this.f43827h = new oh.a(0.0f);
            this.f43828i = h.c();
            this.f43829j = h.c();
            this.f43830k = h.c();
            this.f43831l = h.c();
            this.f43820a = kVar.f43808a;
            this.f43821b = kVar.f43809b;
            this.f43822c = kVar.f43810c;
            this.f43823d = kVar.f43811d;
            this.f43824e = kVar.f43812e;
            this.f43825f = kVar.f43813f;
            this.f43826g = kVar.f43814g;
            this.f43827h = kVar.f43815h;
            this.f43828i = kVar.f43816i;
            this.f43829j = kVar.f43817j;
            this.f43830k = kVar.f43818k;
            this.f43831l = kVar.f43819l;
        }
    }

    public k() {
        this.f43808a = h.b();
        this.f43809b = h.b();
        this.f43810c = h.b();
        this.f43811d = h.b();
        this.f43812e = new oh.a(0.0f);
        this.f43813f = new oh.a(0.0f);
        this.f43814g = new oh.a(0.0f);
        this.f43815h = new oh.a(0.0f);
        this.f43816i = h.c();
        this.f43817j = h.c();
        this.f43818k = h.c();
        this.f43819l = h.c();
    }
}
