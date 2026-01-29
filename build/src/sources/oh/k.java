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
    public static final oh.c f43863m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f43864a;

    /* renamed from: b  reason: collision with root package name */
    d f43865b;

    /* renamed from: c  reason: collision with root package name */
    d f43866c;

    /* renamed from: d  reason: collision with root package name */
    d f43867d;

    /* renamed from: e  reason: collision with root package name */
    oh.c f43868e;

    /* renamed from: f  reason: collision with root package name */
    oh.c f43869f;

    /* renamed from: g  reason: collision with root package name */
    oh.c f43870g;

    /* renamed from: h  reason: collision with root package name */
    oh.c f43871h;

    /* renamed from: i  reason: collision with root package name */
    f f43872i;

    /* renamed from: j  reason: collision with root package name */
    f f43873j;

    /* renamed from: k  reason: collision with root package name */
    f f43874k;

    /* renamed from: l  reason: collision with root package name */
    f f43875l;

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
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(yg.k.f54695r5);
        try {
            int i12 = obtainStyledAttributes.getInt(yg.k.f54704s5, 0);
            int i13 = obtainStyledAttributes.getInt(yg.k.f54731v5, i12);
            int i14 = obtainStyledAttributes.getInt(yg.k.f54740w5, i12);
            int i15 = obtainStyledAttributes.getInt(yg.k.f54722u5, i12);
            int i16 = obtainStyledAttributes.getInt(yg.k.f54713t5, i12);
            oh.c m10 = m(obtainStyledAttributes, yg.k.f54749x5, cVar);
            oh.c m11 = m(obtainStyledAttributes, yg.k.A5, m10);
            oh.c m12 = m(obtainStyledAttributes, yg.k.B5, m10);
            oh.c m13 = m(obtainStyledAttributes, yg.k.f54767z5, m10);
            return new b().z(i13, m11).E(i14, m12).u(i15, m13).q(i16, m(obtainStyledAttributes, yg.k.f54758y5, m10));
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
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, yg.k.f54667o4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(yg.k.f54676p4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(yg.k.f54685q4, 0);
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
        return this.f43874k;
    }

    public d i() {
        return this.f43867d;
    }

    public oh.c j() {
        return this.f43871h;
    }

    public d k() {
        return this.f43866c;
    }

    public oh.c l() {
        return this.f43870g;
    }

    public f n() {
        return this.f43875l;
    }

    public f o() {
        return this.f43873j;
    }

    public f p() {
        return this.f43872i;
    }

    public d q() {
        return this.f43864a;
    }

    public oh.c r() {
        return this.f43868e;
    }

    public d s() {
        return this.f43865b;
    }

    public oh.c t() {
        return this.f43869f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f43875l.getClass().equals(f.class) && this.f43873j.getClass().equals(f.class) && this.f43872i.getClass().equals(f.class) && this.f43874k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f43868e.a(rectF);
        if (this.f43869f.a(rectF) == a10 && this.f43871h.a(rectF) == a10 && this.f43870g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f43865b instanceof j) && (this.f43864a instanceof j) && (this.f43866c instanceof j) && (this.f43867d instanceof j)) {
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
        this.f43864a = bVar.f43876a;
        this.f43865b = bVar.f43877b;
        this.f43866c = bVar.f43878c;
        this.f43867d = bVar.f43879d;
        this.f43868e = bVar.f43880e;
        this.f43869f = bVar.f43881f;
        this.f43870g = bVar.f43882g;
        this.f43871h = bVar.f43883h;
        this.f43872i = bVar.f43884i;
        this.f43873j = bVar.f43885j;
        this.f43874k = bVar.f43886k;
        this.f43875l = bVar.f43887l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f43876a;

        /* renamed from: b  reason: collision with root package name */
        private d f43877b;

        /* renamed from: c  reason: collision with root package name */
        private d f43878c;

        /* renamed from: d  reason: collision with root package name */
        private d f43879d;

        /* renamed from: e  reason: collision with root package name */
        private oh.c f43880e;

        /* renamed from: f  reason: collision with root package name */
        private oh.c f43881f;

        /* renamed from: g  reason: collision with root package name */
        private oh.c f43882g;

        /* renamed from: h  reason: collision with root package name */
        private oh.c f43883h;

        /* renamed from: i  reason: collision with root package name */
        private f f43884i;

        /* renamed from: j  reason: collision with root package name */
        private f f43885j;

        /* renamed from: k  reason: collision with root package name */
        private f f43886k;

        /* renamed from: l  reason: collision with root package name */
        private f f43887l;

        public b() {
            this.f43876a = h.b();
            this.f43877b = h.b();
            this.f43878c = h.b();
            this.f43879d = h.b();
            this.f43880e = new oh.a(0.0f);
            this.f43881f = new oh.a(0.0f);
            this.f43882g = new oh.a(0.0f);
            this.f43883h = new oh.a(0.0f);
            this.f43884i = h.c();
            this.f43885j = h.c();
            this.f43886k = h.c();
            this.f43887l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f43862a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f43820a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f43876a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f43880e = new oh.a(f10);
            return this;
        }

        public b C(oh.c cVar) {
            this.f43880e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, oh.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f43877b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f43881f = new oh.a(f10);
            return this;
        }

        public b H(oh.c cVar) {
            this.f43881f = cVar;
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
            this.f43879d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f43883h = new oh.a(f10);
            return this;
        }

        public b t(oh.c cVar) {
            this.f43883h = cVar;
            return this;
        }

        public b u(int i10, oh.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f43878c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f43882g = new oh.a(f10);
            return this;
        }

        public b x(oh.c cVar) {
            this.f43882g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, oh.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f43876a = h.b();
            this.f43877b = h.b();
            this.f43878c = h.b();
            this.f43879d = h.b();
            this.f43880e = new oh.a(0.0f);
            this.f43881f = new oh.a(0.0f);
            this.f43882g = new oh.a(0.0f);
            this.f43883h = new oh.a(0.0f);
            this.f43884i = h.c();
            this.f43885j = h.c();
            this.f43886k = h.c();
            this.f43887l = h.c();
            this.f43876a = kVar.f43864a;
            this.f43877b = kVar.f43865b;
            this.f43878c = kVar.f43866c;
            this.f43879d = kVar.f43867d;
            this.f43880e = kVar.f43868e;
            this.f43881f = kVar.f43869f;
            this.f43882g = kVar.f43870g;
            this.f43883h = kVar.f43871h;
            this.f43884i = kVar.f43872i;
            this.f43885j = kVar.f43873j;
            this.f43886k = kVar.f43874k;
            this.f43887l = kVar.f43875l;
        }
    }

    public k() {
        this.f43864a = h.b();
        this.f43865b = h.b();
        this.f43866c = h.b();
        this.f43867d = h.b();
        this.f43868e = new oh.a(0.0f);
        this.f43869f = new oh.a(0.0f);
        this.f43870g = new oh.a(0.0f);
        this.f43871h = new oh.a(0.0f);
        this.f43872i = h.c();
        this.f43873j = h.c();
        this.f43874k = h.c();
        this.f43875l = h.c();
    }
}
