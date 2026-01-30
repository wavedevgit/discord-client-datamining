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
    public static final oh.c f43879m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f43880a;

    /* renamed from: b  reason: collision with root package name */
    d f43881b;

    /* renamed from: c  reason: collision with root package name */
    d f43882c;

    /* renamed from: d  reason: collision with root package name */
    d f43883d;

    /* renamed from: e  reason: collision with root package name */
    oh.c f43884e;

    /* renamed from: f  reason: collision with root package name */
    oh.c f43885f;

    /* renamed from: g  reason: collision with root package name */
    oh.c f43886g;

    /* renamed from: h  reason: collision with root package name */
    oh.c f43887h;

    /* renamed from: i  reason: collision with root package name */
    f f43888i;

    /* renamed from: j  reason: collision with root package name */
    f f43889j;

    /* renamed from: k  reason: collision with root package name */
    f f43890k;

    /* renamed from: l  reason: collision with root package name */
    f f43891l;

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
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(yg.k.f54711r5);
        try {
            int i12 = obtainStyledAttributes.getInt(yg.k.f54720s5, 0);
            int i13 = obtainStyledAttributes.getInt(yg.k.f54747v5, i12);
            int i14 = obtainStyledAttributes.getInt(yg.k.f54756w5, i12);
            int i15 = obtainStyledAttributes.getInt(yg.k.f54738u5, i12);
            int i16 = obtainStyledAttributes.getInt(yg.k.f54729t5, i12);
            oh.c m10 = m(obtainStyledAttributes, yg.k.f54765x5, cVar);
            oh.c m11 = m(obtainStyledAttributes, yg.k.A5, m10);
            oh.c m12 = m(obtainStyledAttributes, yg.k.B5, m10);
            oh.c m13 = m(obtainStyledAttributes, yg.k.f54783z5, m10);
            return new b().z(i13, m11).E(i14, m12).u(i15, m13).q(i16, m(obtainStyledAttributes, yg.k.f54774y5, m10));
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
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.f54683o4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(yg.k.f54692p4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(yg.k.f54701q4, 0);
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
        return this.f43890k;
    }

    public d i() {
        return this.f43883d;
    }

    public oh.c j() {
        return this.f43887h;
    }

    public d k() {
        return this.f43882c;
    }

    public oh.c l() {
        return this.f43886g;
    }

    public f n() {
        return this.f43891l;
    }

    public f o() {
        return this.f43889j;
    }

    public f p() {
        return this.f43888i;
    }

    public d q() {
        return this.f43880a;
    }

    public oh.c r() {
        return this.f43884e;
    }

    public d s() {
        return this.f43881b;
    }

    public oh.c t() {
        return this.f43885f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f43891l.getClass().equals(f.class) && this.f43889j.getClass().equals(f.class) && this.f43888i.getClass().equals(f.class) && this.f43890k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f43884e.a(rectF);
        if (this.f43885f.a(rectF) == a10 && this.f43887h.a(rectF) == a10 && this.f43886g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f43881b instanceof j) && (this.f43880a instanceof j) && (this.f43882c instanceof j) && (this.f43883d instanceof j)) {
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
        this.f43880a = bVar.f43892a;
        this.f43881b = bVar.f43893b;
        this.f43882c = bVar.f43894c;
        this.f43883d = bVar.f43895d;
        this.f43884e = bVar.f43896e;
        this.f43885f = bVar.f43897f;
        this.f43886g = bVar.f43898g;
        this.f43887h = bVar.f43899h;
        this.f43888i = bVar.f43900i;
        this.f43889j = bVar.f43901j;
        this.f43890k = bVar.f43902k;
        this.f43891l = bVar.f43903l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f43892a;

        /* renamed from: b  reason: collision with root package name */
        private d f43893b;

        /* renamed from: c  reason: collision with root package name */
        private d f43894c;

        /* renamed from: d  reason: collision with root package name */
        private d f43895d;

        /* renamed from: e  reason: collision with root package name */
        private oh.c f43896e;

        /* renamed from: f  reason: collision with root package name */
        private oh.c f43897f;

        /* renamed from: g  reason: collision with root package name */
        private oh.c f43898g;

        /* renamed from: h  reason: collision with root package name */
        private oh.c f43899h;

        /* renamed from: i  reason: collision with root package name */
        private f f43900i;

        /* renamed from: j  reason: collision with root package name */
        private f f43901j;

        /* renamed from: k  reason: collision with root package name */
        private f f43902k;

        /* renamed from: l  reason: collision with root package name */
        private f f43903l;

        public b() {
            this.f43892a = h.b();
            this.f43893b = h.b();
            this.f43894c = h.b();
            this.f43895d = h.b();
            this.f43896e = new oh.a(0.0f);
            this.f43897f = new oh.a(0.0f);
            this.f43898g = new oh.a(0.0f);
            this.f43899h = new oh.a(0.0f);
            this.f43900i = h.c();
            this.f43901j = h.c();
            this.f43902k = h.c();
            this.f43903l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f43878a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f43836a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f43892a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f43896e = new oh.a(f10);
            return this;
        }

        public b C(oh.c cVar) {
            this.f43896e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, oh.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f43893b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f43897f = new oh.a(f10);
            return this;
        }

        public b H(oh.c cVar) {
            this.f43897f = cVar;
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
            this.f43895d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f43899h = new oh.a(f10);
            return this;
        }

        public b t(oh.c cVar) {
            this.f43899h = cVar;
            return this;
        }

        public b u(int i10, oh.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f43894c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f43898g = new oh.a(f10);
            return this;
        }

        public b x(oh.c cVar) {
            this.f43898g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, oh.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f43892a = h.b();
            this.f43893b = h.b();
            this.f43894c = h.b();
            this.f43895d = h.b();
            this.f43896e = new oh.a(0.0f);
            this.f43897f = new oh.a(0.0f);
            this.f43898g = new oh.a(0.0f);
            this.f43899h = new oh.a(0.0f);
            this.f43900i = h.c();
            this.f43901j = h.c();
            this.f43902k = h.c();
            this.f43903l = h.c();
            this.f43892a = kVar.f43880a;
            this.f43893b = kVar.f43881b;
            this.f43894c = kVar.f43882c;
            this.f43895d = kVar.f43883d;
            this.f43896e = kVar.f43884e;
            this.f43897f = kVar.f43885f;
            this.f43898g = kVar.f43886g;
            this.f43899h = kVar.f43887h;
            this.f43900i = kVar.f43888i;
            this.f43901j = kVar.f43889j;
            this.f43902k = kVar.f43890k;
            this.f43903l = kVar.f43891l;
        }
    }

    public k() {
        this.f43880a = h.b();
        this.f43881b = h.b();
        this.f43882c = h.b();
        this.f43883d = h.b();
        this.f43884e = new oh.a(0.0f);
        this.f43885f = new oh.a(0.0f);
        this.f43886g = new oh.a(0.0f);
        this.f43887h = new oh.a(0.0f);
        this.f43888i = h.c();
        this.f43889j = h.c();
        this.f43890k = h.c();
        this.f43891l = h.c();
    }
}
