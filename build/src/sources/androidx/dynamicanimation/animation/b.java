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
    public static final s f4338m = new g("translationX");

    /* renamed from: n  reason: collision with root package name */
    public static final s f4339n = new h("translationY");

    /* renamed from: o  reason: collision with root package name */
    public static final s f4340o = new i("translationZ");

    /* renamed from: p  reason: collision with root package name */
    public static final s f4341p = new j(ViewProps.SCALE_X);

    /* renamed from: q  reason: collision with root package name */
    public static final s f4342q = new k(ViewProps.SCALE_Y);

    /* renamed from: r  reason: collision with root package name */
    public static final s f4343r = new l(ViewProps.ROTATION);

    /* renamed from: s  reason: collision with root package name */
    public static final s f4344s = new m("rotationX");

    /* renamed from: t  reason: collision with root package name */
    public static final s f4345t = new n("rotationY");

    /* renamed from: u  reason: collision with root package name */
    public static final s f4346u = new o("x");

    /* renamed from: v  reason: collision with root package name */
    public static final s f4347v = new a("y");

    /* renamed from: w  reason: collision with root package name */
    public static final s f4348w = new C0047b("z");

    /* renamed from: x  reason: collision with root package name */
    public static final s f4349x = new c("alpha");

    /* renamed from: y  reason: collision with root package name */
    public static final s f4350y = new d("scrollX");

    /* renamed from: z  reason: collision with root package name */
    public static final s f4351z = new e("scrollY");

    /* renamed from: a  reason: collision with root package name */
    float f4352a;

    /* renamed from: b  reason: collision with root package name */
    float f4353b;

    /* renamed from: c  reason: collision with root package name */
    boolean f4354c;

    /* renamed from: d  reason: collision with root package name */
    final Object f4355d;

    /* renamed from: e  reason: collision with root package name */
    final b3.b f4356e;

    /* renamed from: f  reason: collision with root package name */
    boolean f4357f;

    /* renamed from: g  reason: collision with root package name */
    float f4358g;

    /* renamed from: h  reason: collision with root package name */
    float f4359h;

    /* renamed from: i  reason: collision with root package name */
    private long f4360i;

    /* renamed from: j  reason: collision with root package name */
    private float f4361j;

    /* renamed from: k  reason: collision with root package name */
    private final ArrayList f4362k;

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f4363l;

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
    static class C0047b extends s {
        C0047b(String str) {
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
        final /* synthetic */ b3.c f4364b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(String str, b3.c cVar) {
            super(str);
            this.f4364b = cVar;
        }

        @Override // b3.b
        public float a(Object obj) {
            return this.f4364b.a();
        }

        @Override // b3.b
        public void b(Object obj, float f10) {
            this.f4364b.b(f10);
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
        float f4366a;

        /* renamed from: b  reason: collision with root package name */
        float f4367b;
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
        this.f4352a = 0.0f;
        this.f4353b = Float.MAX_VALUE;
        this.f4354c = false;
        this.f4357f = false;
        this.f4358g = Float.MAX_VALUE;
        this.f4359h = -Float.MAX_VALUE;
        this.f4360i = 0L;
        this.f4362k = new ArrayList();
        this.f4363l = new ArrayList();
        this.f4355d = null;
        this.f4356e = new f("FloatValueHolder", cVar);
        this.f4361j = 1.0f;
    }

    private void e(boolean z10) {
        this.f4357f = false;
        androidx.dynamicanimation.animation.a.d().g(this);
        this.f4360i = 0L;
        this.f4354c = false;
        for (int i10 = 0; i10 < this.f4362k.size(); i10++) {
            if (this.f4362k.get(i10) != null) {
                ((q) this.f4362k.get(i10)).a(this, z10, this.f4353b, this.f4352a);
            }
        }
        i(this.f4362k);
    }

    private float f() {
        return this.f4356e.a(this.f4355d);
    }

    private static void i(ArrayList arrayList) {
        for (int size = arrayList.size() - 1; size >= 0; size--) {
            if (arrayList.get(size) == null) {
                arrayList.remove(size);
            }
        }
    }

    private void r() {
        if (!this.f4357f) {
            this.f4357f = true;
            if (!this.f4354c) {
                this.f4353b = f();
            }
            float f10 = this.f4353b;
            if (f10 <= this.f4358g && f10 >= this.f4359h) {
                androidx.dynamicanimation.animation.a.d().a(this, 0L);
                return;
            }
            throw new IllegalArgumentException("Starting value need to be in between min value and max value");
        }
    }

    @Override // androidx.dynamicanimation.animation.a.b
    public boolean a(long j10) {
        long j11 = this.f4360i;
        if (j11 == 0) {
            this.f4360i = j10;
            m(this.f4353b);
            return false;
        }
        this.f4360i = j10;
        boolean s10 = s(j10 - j11);
        float min = Math.min(this.f4353b, this.f4358g);
        this.f4353b = min;
        float max = Math.max(min, this.f4359h);
        this.f4353b = max;
        m(max);
        if (s10) {
            e(false);
        }
        return s10;
    }

    public b b(q qVar) {
        if (!this.f4362k.contains(qVar)) {
            this.f4362k.add(qVar);
        }
        return this;
    }

    public b c(r rVar) {
        if (!h()) {
            if (!this.f4363l.contains(rVar)) {
                this.f4363l.add(rVar);
            }
            return this;
        }
        throw new UnsupportedOperationException("Error: Update listeners must be added beforethe animation.");
    }

    public void d() {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            if (this.f4357f) {
                e(true);
                return;
            }
            return;
        }
        throw new AndroidRuntimeException("Animations may only be canceled on the main thread");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float g() {
        return this.f4361j * 0.75f;
    }

    public boolean h() {
        return this.f4357f;
    }

    public b j(float f10) {
        this.f4358g = f10;
        return this;
    }

    public b k(float f10) {
        this.f4359h = f10;
        return this;
    }

    public b l(float f10) {
        if (f10 > 0.0f) {
            this.f4361j = f10;
            p(f10 * 0.75f);
            return this;
        }
        throw new IllegalArgumentException("Minimum visible change must be positive.");
    }

    void m(float f10) {
        this.f4356e.b(this.f4355d, f10);
        for (int i10 = 0; i10 < this.f4363l.size(); i10++) {
            if (this.f4363l.get(i10) != null) {
                ((r) this.f4363l.get(i10)).b(this, this.f4353b, this.f4352a);
            }
        }
        i(this.f4363l);
    }

    public b n(float f10) {
        this.f4353b = f10;
        this.f4354c = true;
        return this;
    }

    public b o(float f10) {
        this.f4352a = f10;
        return this;
    }

    abstract void p(float f10);

    public void q() {
        if (Looper.myLooper() == Looper.getMainLooper()) {
            if (!this.f4357f) {
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
        this.f4352a = 0.0f;
        this.f4353b = Float.MAX_VALUE;
        this.f4354c = false;
        this.f4357f = false;
        this.f4358g = Float.MAX_VALUE;
        this.f4359h = -Float.MAX_VALUE;
        this.f4360i = 0L;
        this.f4362k = new ArrayList();
        this.f4363l = new ArrayList();
        this.f4355d = obj;
        this.f4356e = bVar;
        if (bVar != f4343r && bVar != f4344s && bVar != f4345t) {
            if (bVar == f4349x) {
                this.f4361j = 0.00390625f;
                return;
            } else if (bVar != f4341p && bVar != f4342q) {
                this.f4361j = 1.0f;
                return;
            } else {
                this.f4361j = 0.00390625f;
                return;
            }
        }
        this.f4361j = 0.1f;
    }
}
