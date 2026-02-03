package androidx.dynamicanimation.animation;

import android.os.Looper;
import android.util.AndroidRuntimeException;
import android.view.View;
import androidx.core.view.h0;
import androidx.dynamicanimation.animation.a;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b implements a.b {

    /* renamed from: m  reason: collision with root package name */
    public static final s f3897m = new g("translationX");

    /* renamed from: n  reason: collision with root package name */
    public static final s f3898n = new h("translationY");

    /* renamed from: o  reason: collision with root package name */
    public static final s f3899o = new i("translationZ");

    /* renamed from: p  reason: collision with root package name */
    public static final s f3900p = new j(ViewProps.SCALE_X);

    /* renamed from: q  reason: collision with root package name */
    public static final s f3901q = new k(ViewProps.SCALE_Y);

    /* renamed from: r  reason: collision with root package name */
    public static final s f3902r = new l(ViewProps.ROTATION);

    /* renamed from: s  reason: collision with root package name */
    public static final s f3903s = new m("rotationX");

    /* renamed from: t  reason: collision with root package name */
    public static final s f3904t = new n("rotationY");

    /* renamed from: u  reason: collision with root package name */
    public static final s f3905u = new o("x");

    /* renamed from: v  reason: collision with root package name */
    public static final s f3906v = new a("y");

    /* renamed from: w  reason: collision with root package name */
    public static final s f3907w = new C0048b("z");

    /* renamed from: x  reason: collision with root package name */
    public static final s f3908x = new c("alpha");

    /* renamed from: y  reason: collision with root package name */
    public static final s f3909y = new d("scrollX");

    /* renamed from: z  reason: collision with root package name */
    public static final s f3910z = new e("scrollY");

    /* renamed from: a  reason: collision with root package name */
    float f3911a;

    /* renamed from: b  reason: collision with root package name */
    float f3912b;

    /* renamed from: c  reason: collision with root package name */
    boolean f3913c;

    /* renamed from: d  reason: collision with root package name */
    final Object f3914d;

    /* renamed from: e  reason: collision with root package name */
    final b3.b f3915e;

    /* renamed from: f  reason: collision with root package name */
    boolean f3916f;

    /* renamed from: g  reason: collision with root package name */
    float f3917g;

    /* renamed from: h  reason: collision with root package name */
    float f3918h;

    /* renamed from: i  reason: collision with root package name */
    private long f3919i;

    /* renamed from: j  reason: collision with root package name */
    private float f3920j;

    /* renamed from: k  reason: collision with root package name */
    private final ArrayList f3921k;

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f3922l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a extends s {
        a(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getY();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setY(f10);
        }
    }

    /* renamed from: androidx.dynamicanimation.animation.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class C0048b extends s {
        C0048b(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return h0.M(view);
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            h0.M0(view, f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c extends s {
        c(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getAlpha();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setAlpha(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d extends s {
        d(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getScrollX();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScrollX((int) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e extends s {
        e(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getScrollY();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScrollY((int) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f extends b3.b {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ b3.c f3923b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(String str, b3.c cVar) {
            super(str);
            this.f3923b = cVar;
        }

        @Override // b3.b
        public float a(Object obj) {
            return this.f3923b.a();
        }

        @Override // b3.b
        public void b(Object obj, float f10) {
            this.f3923b.b(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class g extends s {
        g(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getTranslationX();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setTranslationX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class h extends s {
        h(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getTranslationY();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setTranslationY(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class i extends s {
        i(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return h0.J(view);
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            h0.K0(view, f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class j extends s {
        j(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getScaleX();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScaleX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class k extends s {
        k(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getScaleY();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScaleY(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class l extends s {
        l(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getRotation();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setRotation(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m extends s {
        m(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getRotationX();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setRotationX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class n extends s {
        n(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getRotationY();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setRotationY(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class o extends s {
        o(String str) {
            super(str, null);
        }

        @Override // b3.b
        /* renamed from: c */
        public float a(View view) {
            return view.getX();
        }

        @Override // b3.b
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class p {

        /* renamed from: a  reason: collision with root package name */
        float f3925a;

        /* renamed from: b  reason: collision with root package name */
        float f3926b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface q {
        void a(b bVar, boolean z10, float f10, float f11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface r {
        void b(b bVar, float f10, float f11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class s extends b3.b {
        /* synthetic */ s(String str, g gVar) {
            this(str);
        }

        private s(String str) {
            super(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(b3.c cVar) {
        this.f3911a = 0.0f;
        this.f3912b = Float.MAX_VALUE;
        this.f3913c = false;
        this.f3916f = false;
        this.f3917g = Float.MAX_VALUE;
        this.f3918h = -Float.MAX_VALUE;
        this.f3919i = 0L;
        this.f3921k = new ArrayList();
        this.f3922l = new ArrayList();
        this.f3914d = null;
        this.f3915e = new f("FloatValueHolder", cVar);
        this.f3920j = 1.0f;
    }

    private void e(boolean z10) {
        this.f3916f = false;
        androidx.dynamicanimation.animation.a.d().g(this);
        this.f3919i = 0L;
        this.f3913c = false;
        for (int i10 = 0; i10 < this.f3921k.size(); i10++) {
            if (this.f3921k.get(i10) != null) {
                ((q) this.f3921k.get(i10)).a(this, z10, this.f3912b, this.f3911a);
            }
        }
        i(this.f3921k);
    }

    private float f() {
        return this.f3915e.a(this.f3914d);
    }

    private static void i(ArrayList arrayList) {
        for (int size = arrayList.size() - 1; size >= 0; size--) {
            if (arrayList.get(size) == null) {
                arrayList.remove(size);
            }
        }
    }

    private void r() {
        if (!this.f3916f) {
            this.f3916f = true;
            if (!this.f3913c) {
                this.f3912b = f();
            }
            float f10 = this.f3912b;
            if (f10 <= this.f3917g && f10 >= this.f3918h) {
                androidx.dynamicanimation.animation.a.d().a(this, 0L);
                return;
            }
            throw new IllegalArgumentException("Starting value need to be in between min value and max value");
        }
    }

    @Override // androidx.dynamicanimation.animation.a.b
    public boolean a(long j10) {
        long j11 = this.f3919i;
        if (j11 == 0) {
            this.f3919i = j10;
            m(this.f3912b);
            return false;
        }
        this.f3919i = j10;
        boolean s10 = s(j10 - j11);
        float min = Math.min(this.f3912b, this.f3917g);
        this.f3912b = min;
        float max = Math.max(min, this.f3918h);
        this.f3912b = max;
        m(max);
        if (s10) {
            e(false);
        }
        return s10;
    }

    public b b(q qVar) {
        if (!this.f3921k.contains(qVar)) {
            this.f3921k.add(qVar);
        }
        return this;
    }

    public b c(r rVar) {
        if (!h()) {
            if (!this.f3922l.contains(rVar)) {
                this.f3922l.add(rVar);
            }
            return this;
        }
        throw new UnsupportedOperationException("Error: Update listeners must be added beforethe animation.");
    }

    public void d() {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            if (this.f3916f) {
                e(true);
                return;
            }
            return;
        }
        throw new AndroidRuntimeException("Animations may only be canceled on the main thread");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float g() {
        return this.f3920j * 0.75f;
    }

    public boolean h() {
        return this.f3916f;
    }

    public b j(float f10) {
        this.f3917g = f10;
        return this;
    }

    public b k(float f10) {
        this.f3918h = f10;
        return this;
    }

    public b l(float f10) {
        if (f10 > 0.0f) {
            this.f3920j = f10;
            p(f10 * 0.75f);
            return this;
        }
        throw new IllegalArgumentException("Minimum visible change must be positive.");
    }

    void m(float f10) {
        this.f3915e.b(this.f3914d, f10);
        for (int i10 = 0; i10 < this.f3922l.size(); i10++) {
            if (this.f3922l.get(i10) != null) {
                ((r) this.f3922l.get(i10)).b(this, this.f3912b, this.f3911a);
            }
        }
        i(this.f3922l);
    }

    public b n(float f10) {
        this.f3912b = f10;
        this.f3913c = true;
        return this;
    }

    public b o(float f10) {
        this.f3911a = f10;
        return this;
    }

    abstract void p(float f10);

    public void q() {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            if (!this.f3916f) {
                r();
                return;
            }
            return;
        }
        throw new AndroidRuntimeException("Animations may only be started on the main thread");
    }

    abstract boolean s(long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b3.b bVar) {
        this.f3911a = 0.0f;
        this.f3912b = Float.MAX_VALUE;
        this.f3913c = false;
        this.f3916f = false;
        this.f3917g = Float.MAX_VALUE;
        this.f3918h = -Float.MAX_VALUE;
        this.f3919i = 0L;
        this.f3921k = new ArrayList();
        this.f3922l = new ArrayList();
        this.f3914d = obj;
        this.f3915e = bVar;
        if (bVar != f3902r && bVar != f3903s && bVar != f3904t) {
            if (bVar == f3908x) {
                this.f3920j = 0.00390625f;
                return;
            } else if (bVar != f3900p && bVar != f3901q) {
                this.f3920j = 1.0f;
                return;
            } else {
                this.f3920j = 0.00390625f;
                return;
            }
        }
        this.f3920j = 0.1f;
    }
}
