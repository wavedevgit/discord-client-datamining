package ph;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: m  reason: collision with root package name */
    public static final ph.c f45996m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f45997a;

    /* renamed from: b  reason: collision with root package name */
    d f45998b;

    /* renamed from: c  reason: collision with root package name */
    d f45999c;

    /* renamed from: d  reason: collision with root package name */
    d f46000d;

    /* renamed from: e  reason: collision with root package name */
    ph.c f46001e;

    /* renamed from: f  reason: collision with root package name */
    ph.c f46002f;

    /* renamed from: g  reason: collision with root package name */
    ph.c f46003g;

    /* renamed from: h  reason: collision with root package name */
    ph.c f46004h;

    /* renamed from: i  reason: collision with root package name */
    f f46005i;

    /* renamed from: j  reason: collision with root package name */
    f f46006j;

    /* renamed from: k  reason: collision with root package name */
    f f46007k;

    /* renamed from: l  reason: collision with root package name */
    f f46008l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        ph.c a(ph.c cVar);
    }

    public static b a() {
        return new b();
    }

    public static b b(Context context, int i10, int i11) {
        return c(context, i10, i11, 0);
    }

    private static b c(Context context, int i10, int i11, int i12) {
        return d(context, i10, i11, new ph.a(i12));
    }

    private static b d(Context context, int i10, int i11, ph.c cVar) {
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, i10);
        if (i11 != 0) {
            contextThemeWrapper = new ContextThemeWrapper(contextThemeWrapper, i11);
        }
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(zg.k.f55899r5);
        try {
            int i12 = obtainStyledAttributes.getInt(zg.k.f55908s5, 0);
            int i13 = obtainStyledAttributes.getInt(zg.k.f55935v5, i12);
            int i14 = obtainStyledAttributes.getInt(zg.k.f55944w5, i12);
            int i15 = obtainStyledAttributes.getInt(zg.k.f55926u5, i12);
            int i16 = obtainStyledAttributes.getInt(zg.k.f55917t5, i12);
            ph.c m10 = m(obtainStyledAttributes, zg.k.f55953x5, cVar);
            ph.c m11 = m(obtainStyledAttributes, zg.k.A5, m10);
            ph.c m12 = m(obtainStyledAttributes, zg.k.B5, m10);
            ph.c m13 = m(obtainStyledAttributes, zg.k.f55971z5, m10);
            return new b().z(i13, m11).E(i14, m12).u(i15, m13).q(i16, m(obtainStyledAttributes, zg.k.f55962y5, m10));
        } finally {
            obtainStyledAttributes.recycle();
        }
    }

    public static b e(Context context, AttributeSet attributeSet, int i10, int i11) {
        return f(context, attributeSet, i10, i11, 0);
    }

    public static b f(Context context, AttributeSet attributeSet, int i10, int i11, int i12) {
        return g(context, attributeSet, i10, i11, new ph.a(i12));
    }

    public static b g(Context context, AttributeSet attributeSet, int i10, int i11, ph.c cVar) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, zg.k.f55871o4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(zg.k.f55880p4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(zg.k.f55889q4, 0);
        obtainStyledAttributes.recycle();
        return d(context, resourceId, resourceId2, cVar);
    }

    private static ph.c m(TypedArray typedArray, int i10, ph.c cVar) {
        TypedValue peekValue = typedArray.peekValue(i10);
        if (peekValue != null) {
            int i11 = peekValue.type;
            if (i11 == 5) {
                return new ph.a(TypedValue.complexToDimensionPixelSize(peekValue.data, typedArray.getResources().getDisplayMetrics()));
            }
            if (i11 == 6) {
                return new i(peekValue.getFraction(1.0f, 1.0f));
            }
        }
        return cVar;
    }

    public f h() {
        return this.f46007k;
    }

    public d i() {
        return this.f46000d;
    }

    public ph.c j() {
        return this.f46004h;
    }

    public d k() {
        return this.f45999c;
    }

    public ph.c l() {
        return this.f46003g;
    }

    public f n() {
        return this.f46008l;
    }

    public f o() {
        return this.f46006j;
    }

    public f p() {
        return this.f46005i;
    }

    public d q() {
        return this.f45997a;
    }

    public ph.c r() {
        return this.f46001e;
    }

    public d s() {
        return this.f45998b;
    }

    public ph.c t() {
        return this.f46002f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f46008l.getClass().equals(f.class) && this.f46006j.getClass().equals(f.class) && this.f46005i.getClass().equals(f.class) && this.f46007k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f46001e.a(rectF);
        if (this.f46002f.a(rectF) == a10 && this.f46004h.a(rectF) == a10 && this.f46003g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f45998b instanceof j) && (this.f45997a instanceof j) && (this.f45999c instanceof j) && (this.f46000d instanceof j)) {
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

    public k x(ph.c cVar) {
        return v().p(cVar).m();
    }

    public k y(c cVar) {
        return v().C(cVar.a(r())).H(cVar.a(t())).t(cVar.a(j())).x(cVar.a(l())).m();
    }

    private k(b bVar) {
        this.f45997a = bVar.f46009a;
        this.f45998b = bVar.f46010b;
        this.f45999c = bVar.f46011c;
        this.f46000d = bVar.f46012d;
        this.f46001e = bVar.f46013e;
        this.f46002f = bVar.f46014f;
        this.f46003g = bVar.f46015g;
        this.f46004h = bVar.f46016h;
        this.f46005i = bVar.f46017i;
        this.f46006j = bVar.f46018j;
        this.f46007k = bVar.f46019k;
        this.f46008l = bVar.f46020l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f46009a;

        /* renamed from: b  reason: collision with root package name */
        private d f46010b;

        /* renamed from: c  reason: collision with root package name */
        private d f46011c;

        /* renamed from: d  reason: collision with root package name */
        private d f46012d;

        /* renamed from: e  reason: collision with root package name */
        private ph.c f46013e;

        /* renamed from: f  reason: collision with root package name */
        private ph.c f46014f;

        /* renamed from: g  reason: collision with root package name */
        private ph.c f46015g;

        /* renamed from: h  reason: collision with root package name */
        private ph.c f46016h;

        /* renamed from: i  reason: collision with root package name */
        private f f46017i;

        /* renamed from: j  reason: collision with root package name */
        private f f46018j;

        /* renamed from: k  reason: collision with root package name */
        private f f46019k;

        /* renamed from: l  reason: collision with root package name */
        private f f46020l;

        public b() {
            this.f46009a = h.b();
            this.f46010b = h.b();
            this.f46011c = h.b();
            this.f46012d = h.b();
            this.f46013e = new ph.a(0.0f);
            this.f46014f = new ph.a(0.0f);
            this.f46015g = new ph.a(0.0f);
            this.f46016h = new ph.a(0.0f);
            this.f46017i = h.c();
            this.f46018j = h.c();
            this.f46019k = h.c();
            this.f46020l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f45995a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f45953a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f46009a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f46013e = new ph.a(f10);
            return this;
        }

        public b C(ph.c cVar) {
            this.f46013e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, ph.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f46010b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f46014f = new ph.a(f10);
            return this;
        }

        public b H(ph.c cVar) {
            this.f46014f = cVar;
            return this;
        }

        public k m() {
            return new k(this);
        }

        public b o(float f10) {
            return B(f10).G(f10).w(f10).s(f10);
        }

        public b p(ph.c cVar) {
            return C(cVar).H(cVar).x(cVar).t(cVar);
        }

        public b q(int i10, ph.c cVar) {
            return r(h.a(i10)).t(cVar);
        }

        public b r(d dVar) {
            this.f46012d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f46016h = new ph.a(f10);
            return this;
        }

        public b t(ph.c cVar) {
            this.f46016h = cVar;
            return this;
        }

        public b u(int i10, ph.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f46011c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f46015g = new ph.a(f10);
            return this;
        }

        public b x(ph.c cVar) {
            this.f46015g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, ph.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f46009a = h.b();
            this.f46010b = h.b();
            this.f46011c = h.b();
            this.f46012d = h.b();
            this.f46013e = new ph.a(0.0f);
            this.f46014f = new ph.a(0.0f);
            this.f46015g = new ph.a(0.0f);
            this.f46016h = new ph.a(0.0f);
            this.f46017i = h.c();
            this.f46018j = h.c();
            this.f46019k = h.c();
            this.f46020l = h.c();
            this.f46009a = kVar.f45997a;
            this.f46010b = kVar.f45998b;
            this.f46011c = kVar.f45999c;
            this.f46012d = kVar.f46000d;
            this.f46013e = kVar.f46001e;
            this.f46014f = kVar.f46002f;
            this.f46015g = kVar.f46003g;
            this.f46016h = kVar.f46004h;
            this.f46017i = kVar.f46005i;
            this.f46018j = kVar.f46006j;
            this.f46019k = kVar.f46007k;
            this.f46020l = kVar.f46008l;
        }
    }

    public k() {
        this.f45997a = h.b();
        this.f45998b = h.b();
        this.f45999c = h.b();
        this.f46000d = h.b();
        this.f46001e = new ph.a(0.0f);
        this.f46002f = new ph.a(0.0f);
        this.f46003g = new ph.a(0.0f);
        this.f46004h = new ph.a(0.0f);
        this.f46005i = h.c();
        this.f46006j = h.c();
        this.f46007k = h.c();
        this.f46008l = h.c();
    }
}
