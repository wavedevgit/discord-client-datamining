package rh;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: m  reason: collision with root package name */
    public static final rh.c f48992m = new i(0.5f);

    /* renamed from: a  reason: collision with root package name */
    d f48993a;

    /* renamed from: b  reason: collision with root package name */
    d f48994b;

    /* renamed from: c  reason: collision with root package name */
    d f48995c;

    /* renamed from: d  reason: collision with root package name */
    d f48996d;

    /* renamed from: e  reason: collision with root package name */
    rh.c f48997e;

    /* renamed from: f  reason: collision with root package name */
    rh.c f48998f;

    /* renamed from: g  reason: collision with root package name */
    rh.c f48999g;

    /* renamed from: h  reason: collision with root package name */
    rh.c f49000h;

    /* renamed from: i  reason: collision with root package name */
    f f49001i;

    /* renamed from: j  reason: collision with root package name */
    f f49002j;

    /* renamed from: k  reason: collision with root package name */
    f f49003k;

    /* renamed from: l  reason: collision with root package name */
    f f49004l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        rh.c a(rh.c cVar);
    }

    public static b a() {
        return new b();
    }

    public static b b(Context context, int i10, int i11) {
        return c(context, i10, i11, 0);
    }

    private static b c(Context context, int i10, int i11, int i12) {
        return d(context, i10, i11, new rh.a(i12));
    }

    private static b d(Context context, int i10, int i11, rh.c cVar) {
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, i10);
        if (i11 != 0) {
            contextThemeWrapper = new ContextThemeWrapper(contextThemeWrapper, i11);
        }
        TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(bh.k.f6982r5);
        try {
            int i12 = obtainStyledAttributes.getInt(bh.k.f6991s5, 0);
            int i13 = obtainStyledAttributes.getInt(bh.k.f7018v5, i12);
            int i14 = obtainStyledAttributes.getInt(bh.k.f7027w5, i12);
            int i15 = obtainStyledAttributes.getInt(bh.k.f7009u5, i12);
            int i16 = obtainStyledAttributes.getInt(bh.k.f7000t5, i12);
            rh.c m10 = m(obtainStyledAttributes, bh.k.f7036x5, cVar);
            rh.c m11 = m(obtainStyledAttributes, bh.k.A5, m10);
            rh.c m12 = m(obtainStyledAttributes, bh.k.B5, m10);
            rh.c m13 = m(obtainStyledAttributes, bh.k.f7054z5, m10);
            return new b().z(i13, m11).E(i14, m12).u(i15, m13).q(i16, m(obtainStyledAttributes, bh.k.f7045y5, m10));
        } finally {
            obtainStyledAttributes.recycle();
        }
    }

    public static b e(Context context, AttributeSet attributeSet, int i10, int i11) {
        return f(context, attributeSet, i10, i11, 0);
    }

    public static b f(Context context, AttributeSet attributeSet, int i10, int i11, int i12) {
        return g(context, attributeSet, i10, i11, new rh.a(i12));
    }

    public static b g(Context context, AttributeSet attributeSet, int i10, int i11, rh.c cVar) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, bh.k.f6954o4, i10, i11);
        int resourceId = obtainStyledAttributes.getResourceId(bh.k.f6963p4, 0);
        int resourceId2 = obtainStyledAttributes.getResourceId(bh.k.f6972q4, 0);
        obtainStyledAttributes.recycle();
        return d(context, resourceId, resourceId2, cVar);
    }

    private static rh.c m(TypedArray typedArray, int i10, rh.c cVar) {
        TypedValue peekValue = typedArray.peekValue(i10);
        if (peekValue != null) {
            int i11 = peekValue.type;
            if (i11 == 5) {
                return new rh.a(TypedValue.complexToDimensionPixelSize(peekValue.data, typedArray.getResources().getDisplayMetrics()));
            }
            if (i11 == 6) {
                return new i(peekValue.getFraction(1.0f, 1.0f));
            }
        }
        return cVar;
    }

    public f h() {
        return this.f49003k;
    }

    public d i() {
        return this.f48996d;
    }

    public rh.c j() {
        return this.f49000h;
    }

    public d k() {
        return this.f48995c;
    }

    public rh.c l() {
        return this.f48999g;
    }

    public f n() {
        return this.f49004l;
    }

    public f o() {
        return this.f49002j;
    }

    public f p() {
        return this.f49001i;
    }

    public d q() {
        return this.f48993a;
    }

    public rh.c r() {
        return this.f48997e;
    }

    public d s() {
        return this.f48994b;
    }

    public rh.c t() {
        return this.f48998f;
    }

    public boolean u(RectF rectF) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (this.f49004l.getClass().equals(f.class) && this.f49002j.getClass().equals(f.class) && this.f49001i.getClass().equals(f.class) && this.f49003k.getClass().equals(f.class)) {
            z10 = true;
        } else {
            z10 = false;
        }
        float a10 = this.f48997e.a(rectF);
        if (this.f48998f.a(rectF) == a10 && this.f49000h.a(rectF) == a10 && this.f48999g.a(rectF) == a10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((this.f48994b instanceof j) && (this.f48993a instanceof j) && (this.f48995c instanceof j) && (this.f48996d instanceof j)) {
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

    public k x(rh.c cVar) {
        return v().p(cVar).m();
    }

    public k y(c cVar) {
        return v().C(cVar.a(r())).H(cVar.a(t())).t(cVar.a(j())).x(cVar.a(l())).m();
    }

    private k(b bVar) {
        this.f48993a = bVar.f49005a;
        this.f48994b = bVar.f49006b;
        this.f48995c = bVar.f49007c;
        this.f48996d = bVar.f49008d;
        this.f48997e = bVar.f49009e;
        this.f48998f = bVar.f49010f;
        this.f48999g = bVar.f49011g;
        this.f49000h = bVar.f49012h;
        this.f49001i = bVar.f49013i;
        this.f49002j = bVar.f49014j;
        this.f49003k = bVar.f49015k;
        this.f49004l = bVar.f49016l;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private d f49005a;

        /* renamed from: b  reason: collision with root package name */
        private d f49006b;

        /* renamed from: c  reason: collision with root package name */
        private d f49007c;

        /* renamed from: d  reason: collision with root package name */
        private d f49008d;

        /* renamed from: e  reason: collision with root package name */
        private rh.c f49009e;

        /* renamed from: f  reason: collision with root package name */
        private rh.c f49010f;

        /* renamed from: g  reason: collision with root package name */
        private rh.c f49011g;

        /* renamed from: h  reason: collision with root package name */
        private rh.c f49012h;

        /* renamed from: i  reason: collision with root package name */
        private f f49013i;

        /* renamed from: j  reason: collision with root package name */
        private f f49014j;

        /* renamed from: k  reason: collision with root package name */
        private f f49015k;

        /* renamed from: l  reason: collision with root package name */
        private f f49016l;

        public b() {
            this.f49005a = h.b();
            this.f49006b = h.b();
            this.f49007c = h.b();
            this.f49008d = h.b();
            this.f49009e = new rh.a(0.0f);
            this.f49010f = new rh.a(0.0f);
            this.f49011g = new rh.a(0.0f);
            this.f49012h = new rh.a(0.0f);
            this.f49013i = h.c();
            this.f49014j = h.c();
            this.f49015k = h.c();
            this.f49016l = h.c();
        }

        private static float n(d dVar) {
            if (dVar instanceof j) {
                return ((j) dVar).f48991a;
            }
            if (dVar instanceof e) {
                return ((e) dVar).f48949a;
            }
            return -1.0f;
        }

        public b A(d dVar) {
            this.f49005a = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                B(n10);
            }
            return this;
        }

        public b B(float f10) {
            this.f49009e = new rh.a(f10);
            return this;
        }

        public b C(rh.c cVar) {
            this.f49009e = cVar;
            return this;
        }

        public b D(int i10, float f10) {
            return F(h.a(i10)).G(f10);
        }

        public b E(int i10, rh.c cVar) {
            return F(h.a(i10)).H(cVar);
        }

        public b F(d dVar) {
            this.f49006b = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                G(n10);
            }
            return this;
        }

        public b G(float f10) {
            this.f49010f = new rh.a(f10);
            return this;
        }

        public b H(rh.c cVar) {
            this.f49010f = cVar;
            return this;
        }

        public k m() {
            return new k(this);
        }

        public b o(float f10) {
            return B(f10).G(f10).w(f10).s(f10);
        }

        public b p(rh.c cVar) {
            return C(cVar).H(cVar).x(cVar).t(cVar);
        }

        public b q(int i10, rh.c cVar) {
            return r(h.a(i10)).t(cVar);
        }

        public b r(d dVar) {
            this.f49008d = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                s(n10);
            }
            return this;
        }

        public b s(float f10) {
            this.f49012h = new rh.a(f10);
            return this;
        }

        public b t(rh.c cVar) {
            this.f49012h = cVar;
            return this;
        }

        public b u(int i10, rh.c cVar) {
            return v(h.a(i10)).x(cVar);
        }

        public b v(d dVar) {
            this.f49007c = dVar;
            float n10 = n(dVar);
            if (n10 != -1.0f) {
                w(n10);
            }
            return this;
        }

        public b w(float f10) {
            this.f49011g = new rh.a(f10);
            return this;
        }

        public b x(rh.c cVar) {
            this.f49011g = cVar;
            return this;
        }

        public b y(int i10, float f10) {
            return A(h.a(i10)).B(f10);
        }

        public b z(int i10, rh.c cVar) {
            return A(h.a(i10)).C(cVar);
        }

        public b(k kVar) {
            this.f49005a = h.b();
            this.f49006b = h.b();
            this.f49007c = h.b();
            this.f49008d = h.b();
            this.f49009e = new rh.a(0.0f);
            this.f49010f = new rh.a(0.0f);
            this.f49011g = new rh.a(0.0f);
            this.f49012h = new rh.a(0.0f);
            this.f49013i = h.c();
            this.f49014j = h.c();
            this.f49015k = h.c();
            this.f49016l = h.c();
            this.f49005a = kVar.f48993a;
            this.f49006b = kVar.f48994b;
            this.f49007c = kVar.f48995c;
            this.f49008d = kVar.f48996d;
            this.f49009e = kVar.f48997e;
            this.f49010f = kVar.f48998f;
            this.f49011g = kVar.f48999g;
            this.f49012h = kVar.f49000h;
            this.f49013i = kVar.f49001i;
            this.f49014j = kVar.f49002j;
            this.f49015k = kVar.f49003k;
            this.f49016l = kVar.f49004l;
        }
    }

    public k() {
        this.f48993a = h.b();
        this.f48994b = h.b();
        this.f48995c = h.b();
        this.f48996d = h.b();
        this.f48997e = new rh.a(0.0f);
        this.f48998f = new rh.a(0.0f);
        this.f48999g = new rh.a(0.0f);
        this.f49000h = new rh.a(0.0f);
        this.f49001i = h.c();
        this.f49002j = h.c();
        this.f49003k = h.c();
        this.f49004l = h.c();
    }
}
