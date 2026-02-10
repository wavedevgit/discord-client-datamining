package androidx.dynamicanimation.animation;

import android.util.AndroidRuntimeException;
import android.view.View;
import androidx.core.view.i0;
import androidx.dynamicanimation.animation.a;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c implements a.c {

    /* renamed from: a  reason: collision with root package name */
    float f4058a;

    /* renamed from: b  reason: collision with root package name */
    float f4059b;

    /* renamed from: c  reason: collision with root package name */
    boolean f4060c;

    /* renamed from: d  reason: collision with root package name */
    final Object f4061d;

    /* renamed from: e  reason: collision with root package name */
    final b3.d f4062e;

    /* renamed from: f  reason: collision with root package name */
    boolean f4063f;

    /* renamed from: g  reason: collision with root package name */
    float f4064g;

    /* renamed from: h  reason: collision with root package name */
    float f4065h;

    /* renamed from: i  reason: collision with root package name */
    private long f4066i;

    /* renamed from: j  reason: collision with root package name */
    private float f4067j;

    /* renamed from: k  reason: collision with root package name */
    private final ArrayList f4068k;

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f4069l;

    /* renamed from: m  reason: collision with root package name */
    private androidx.dynamicanimation.animation.a f4070m;

    /* renamed from: n  reason: collision with root package name */
    public static final s f4045n = new g("translationX");

    /* renamed from: o  reason: collision with root package name */
    public static final s f4046o = new h("translationY");

    /* renamed from: p  reason: collision with root package name */
    public static final s f4047p = new i("translationZ");

    /* renamed from: q  reason: collision with root package name */
    public static final s f4048q = new j(ViewProps.SCALE_X);

    /* renamed from: r  reason: collision with root package name */
    public static final s f4049r = new k(ViewProps.SCALE_Y);

    /* renamed from: s  reason: collision with root package name */
    public static final s f4050s = new l(ViewProps.ROTATION);

    /* renamed from: t  reason: collision with root package name */
    public static final s f4051t = new m("rotationX");

    /* renamed from: u  reason: collision with root package name */
    public static final s f4052u = new n("rotationY");

    /* renamed from: v  reason: collision with root package name */
    public static final s f4053v = new o("x");

    /* renamed from: w  reason: collision with root package name */
    public static final s f4054w = new a("y");

    /* renamed from: x  reason: collision with root package name */
    public static final s f4055x = new b("z");

    /* renamed from: y  reason: collision with root package name */
    public static final s f4056y = new C0045c("alpha");

    /* renamed from: z  reason: collision with root package name */
    public static final s f4057z = new d("scrollX");
    public static final s A = new e("scrollY");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends s {
        a(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getY();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setY(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends s {
        b(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return i0.L(view);
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            i0.F0(view, f10);
        }
    }

    /* renamed from: androidx.dynamicanimation.animation.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class C0045c extends s {
        C0045c(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getAlpha();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setAlpha(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d extends s {
        d(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getScrollX();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScrollX((int) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e extends s {
        e(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getScrollY();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScrollY((int) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f extends b3.d {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ b3.e f4071b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(String str, b3.e eVar) {
            super(str);
            this.f4071b = eVar;
        }

        @Override // b3.d
        public float a(Object obj) {
            return this.f4071b.a();
        }

        @Override // b3.d
        public void b(Object obj, float f10) {
            this.f4071b.b(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g extends s {
        g(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getTranslationX();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setTranslationX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class h extends s {
        h(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getTranslationY();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setTranslationY(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class i extends s {
        i(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return i0.I(view);
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            i0.D0(view, f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class j extends s {
        j(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getScaleX();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScaleX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class k extends s {
        k(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getScaleY();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setScaleY(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class l extends s {
        l(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getRotation();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setRotation(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class m extends s {
        m(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getRotationX();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setRotationX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class n extends s {
        n(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getRotationY();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setRotationY(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class o extends s {
        o(String str) {
            super(str, null);
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(View view) {
            return view.getX();
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(View view, float f10) {
            view.setX(f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class p {

        /* renamed from: a  reason: collision with root package name */
        float f4073a;

        /* renamed from: b  reason: collision with root package name */
        float f4074b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface q {
        void a(c cVar, boolean z10, float f10, float f11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface r {
        void b(c cVar, float f10, float f11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class s extends b3.d {
        /* synthetic */ s(String str, g gVar) {
            this(str);
        }

        private s(String str) {
            super(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(b3.e eVar) {
        this.f4058a = 0.0f;
        this.f4059b = Float.MAX_VALUE;
        this.f4060c = false;
        this.f4063f = false;
        this.f4064g = Float.MAX_VALUE;
        this.f4065h = -Float.MAX_VALUE;
        this.f4066i = 0L;
        this.f4068k = new ArrayList();
        this.f4069l = new ArrayList();
        this.f4061d = null;
        this.f4062e = new f("FloatValueHolder", eVar);
        this.f4067j = 1.0f;
    }

    private void e(boolean z10) {
        this.f4063f = false;
        f().k(this);
        this.f4066i = 0L;
        this.f4060c = false;
        for (int i10 = 0; i10 < this.f4068k.size(); i10++) {
            if (this.f4068k.get(i10) != null) {
                ((q) this.f4068k.get(i10)).a(this, z10, this.f4059b, this.f4058a);
            }
        }
        j(this.f4068k);
    }

    private float g() {
        return this.f4062e.a(this.f4061d);
    }

    private static void j(ArrayList arrayList) {
        for (int size = arrayList.size() - 1; size >= 0; size--) {
            if (arrayList.get(size) == null) {
                arrayList.remove(size);
            }
        }
    }

    private void s() {
        if (!this.f4063f) {
            this.f4063f = true;
            if (!this.f4060c) {
                this.f4059b = g();
            }
            float f10 = this.f4059b;
            if (f10 <= this.f4064g && f10 >= this.f4065h) {
                f().d(this, 0L);
                return;
            }
            throw new IllegalArgumentException("Starting value need to be in between min value and max value");
        }
    }

    @Override // androidx.dynamicanimation.animation.a.c
    public boolean a(long j10) {
        long j11;
        long j12 = this.f4066i;
        if (j12 == 0) {
            this.f4066i = j10;
            n(this.f4059b);
            return false;
        }
        long j13 = j10 - j12;
        this.f4066i = j10;
        float g10 = f().g();
        if (g10 == 0.0f) {
            j11 = 2147483647L;
        } else {
            j11 = ((float) j13) / g10;
        }
        boolean t10 = t(j11);
        float min = Math.min(this.f4059b, this.f4064g);
        this.f4059b = min;
        float max = Math.max(min, this.f4065h);
        this.f4059b = max;
        n(max);
        if (t10) {
            e(false);
        }
        return t10;
    }

    public c b(q qVar) {
        if (!this.f4068k.contains(qVar)) {
            this.f4068k.add(qVar);
        }
        return this;
    }

    public c c(r rVar) {
        if (!i()) {
            if (!this.f4069l.contains(rVar)) {
                this.f4069l.add(rVar);
            }
            return this;
        }
        throw new UnsupportedOperationException("Error: Update listeners must be added beforethe animation.");
    }

    public void d() {
        if (f().j()) {
            if (this.f4063f) {
                e(true);
                return;
            }
            return;
        }
        throw new AndroidRuntimeException("Animations may only be canceled from the same thread as the animation handler");
    }

    public androidx.dynamicanimation.animation.a f() {
        androidx.dynamicanimation.animation.a aVar = this.f4070m;
        if (aVar != null) {
            return aVar;
        }
        return androidx.dynamicanimation.animation.a.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float h() {
        return this.f4067j * 0.75f;
    }

    public boolean i() {
        return this.f4063f;
    }

    public c k(float f10) {
        this.f4064g = f10;
        return this;
    }

    public c l(float f10) {
        this.f4065h = f10;
        return this;
    }

    public c m(float f10) {
        if (f10 > 0.0f) {
            this.f4067j = f10;
            q(f10 * 0.75f);
            return this;
        }
        throw new IllegalArgumentException("Minimum visible change must be positive.");
    }

    void n(float f10) {
        this.f4062e.b(this.f4061d, f10);
        for (int i10 = 0; i10 < this.f4069l.size(); i10++) {
            if (this.f4069l.get(i10) != null) {
                ((r) this.f4069l.get(i10)).b(this, this.f4059b, this.f4058a);
            }
        }
        j(this.f4069l);
    }

    public c o(float f10) {
        this.f4059b = f10;
        this.f4060c = true;
        return this;
    }

    public c p(float f10) {
        this.f4058a = f10;
        return this;
    }

    abstract void q(float f10);

    public void r() {
        if (f().j()) {
            if (!this.f4063f) {
                s();
                return;
            }
            return;
        }
        throw new AndroidRuntimeException("Animations may only be started on the same thread as the animation handler");
    }

    abstract boolean t(long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Object obj, b3.d dVar) {
        this.f4058a = 0.0f;
        this.f4059b = Float.MAX_VALUE;
        this.f4060c = false;
        this.f4063f = false;
        this.f4064g = Float.MAX_VALUE;
        this.f4065h = -Float.MAX_VALUE;
        this.f4066i = 0L;
        this.f4068k = new ArrayList();
        this.f4069l = new ArrayList();
        this.f4061d = obj;
        this.f4062e = dVar;
        if (dVar != f4050s && dVar != f4051t && dVar != f4052u) {
            if (dVar == f4056y) {
                this.f4067j = 0.00390625f;
                return;
            } else if (dVar != f4048q && dVar != f4049r) {
                this.f4067j = 1.0f;
                return;
            } else {
                this.f4067j = 0.002f;
                return;
            }
        }
        this.f4067j = 0.1f;
    }
}
