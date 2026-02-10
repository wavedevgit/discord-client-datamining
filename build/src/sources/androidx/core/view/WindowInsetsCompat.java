package androidx.core.view;

import android.annotation.SuppressLint;
import android.graphics.Rect;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.WindowInsets;
import androidx.core.graphics.Insets;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class WindowInsetsCompat {

    /* renamed from: b  reason: collision with root package name */
    public static final WindowInsetsCompat f3402b;

    /* renamed from: a  reason: collision with root package name */
    private final o f3403a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class d extends c {
        d() {
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void c(int i10, Insets insets) {
            this.f3411c.setInsets(q.a(i10), insets.g());
        }

        d(WindowInsetsCompat windowInsetsCompat) {
            super(windowInsetsCompat);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e extends d {
        e() {
        }

        e(WindowInsetsCompat windowInsetsCompat) {
            super(windowInsetsCompat);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class f extends e {
        f() {
        }

        @Override // androidx.core.view.WindowInsetsCompat.d, androidx.core.view.WindowInsetsCompat.g
        void c(int i10, Insets insets) {
            this.f3411c.setInsets(r.a(i10), insets.g());
        }

        f(WindowInsetsCompat windowInsetsCompat) {
            super(windowInsetsCompat);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {

        /* renamed from: a  reason: collision with root package name */
        private final WindowInsetsCompat f3412a;

        /* renamed from: b  reason: collision with root package name */
        Insets[] f3413b;

        g() {
            this(new WindowInsetsCompat((WindowInsetsCompat) null));
        }

        protected final void a() {
            Insets[] insetsArr = this.f3413b;
            if (insetsArr != null) {
                Insets insets = insetsArr[p.d(1)];
                Insets insets2 = this.f3413b[p.d(2)];
                if (insets2 == null) {
                    insets2 = this.f3412a.f(2);
                }
                if (insets == null) {
                    insets = this.f3412a.f(1);
                }
                g(Insets.b(insets, insets2));
                Insets insets3 = this.f3413b[p.d(16)];
                if (insets3 != null) {
                    f(insets3);
                }
                Insets insets4 = this.f3413b[p.d(32)];
                if (insets4 != null) {
                    d(insets4);
                }
                Insets insets5 = this.f3413b[p.d(64)];
                if (insets5 != null) {
                    h(insets5);
                }
            }
        }

        abstract WindowInsetsCompat b();

        void c(int i10, Insets insets) {
            if (this.f3413b == null) {
                this.f3413b = new Insets[10];
            }
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) != 0) {
                    this.f3413b[p.d(i11)] = insets;
                }
            }
        }

        void d(Insets insets) {
        }

        abstract void e(Insets insets);

        void f(Insets insets) {
        }

        abstract void g(Insets insets);

        void h(Insets insets) {
        }

        g(WindowInsetsCompat windowInsetsCompat) {
            this.f3412a = windowInsetsCompat;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class j extends i {
        j(WindowInsetsCompat windowInsetsCompat, WindowInsets windowInsets) {
            super(windowInsetsCompat, windowInsets);
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        WindowInsetsCompat a() {
            return WindowInsetsCompat.C(this.f3419c.consumeDisplayCutout());
        }

        @Override // androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof j)) {
                return false;
            }
            j jVar = (j) obj;
            if (Objects.equals(this.f3419c, jVar.f3419c) && Objects.equals(this.f3423g, jVar.f3423g) && h.C(this.f3424h, jVar.f3424h)) {
                return true;
            }
            return false;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        androidx.core.view.i f() {
            return androidx.core.view.i.e(this.f3419c.getDisplayCutout());
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        public int hashCode() {
            return this.f3419c.hashCode();
        }

        j(WindowInsetsCompat windowInsetsCompat, j jVar) {
            super(windowInsetsCompat, jVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class l extends k {

        /* renamed from: r  reason: collision with root package name */
        static final WindowInsetsCompat f3429r;

        static {
            WindowInsets windowInsets;
            windowInsets = WindowInsets.CONSUMED;
            f3429r = WindowInsetsCompat.C(windowInsets);
        }

        l(WindowInsetsCompat windowInsetsCompat, WindowInsets windowInsets) {
            super(windowInsetsCompat, windowInsets);
        }

        @Override // androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        final void d(View view) {
        }

        @Override // androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        public Insets g(int i10) {
            return Insets.f(this.f3419c.getInsets(q.a(i10)));
        }

        @Override // androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        public Insets h(int i10) {
            return Insets.f(this.f3419c.getInsetsIgnoringVisibility(q.a(i10)));
        }

        @Override // androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        public boolean q(int i10) {
            return this.f3419c.isVisible(q.a(i10));
        }

        l(WindowInsetsCompat windowInsetsCompat, l lVar) {
            super(windowInsetsCompat, lVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class m extends l {
        m(WindowInsetsCompat windowInsetsCompat, WindowInsets windowInsets) {
            super(windowInsetsCompat, windowInsets);
        }

        m(WindowInsetsCompat windowInsetsCompat, m mVar) {
            super(windowInsetsCompat, mVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class n extends m {

        /* renamed from: s  reason: collision with root package name */
        static final WindowInsetsCompat f3430s;

        static {
            WindowInsets windowInsets;
            windowInsets = WindowInsets.CONSUMED;
            f3430s = WindowInsetsCompat.C(windowInsets);
        }

        n(WindowInsetsCompat windowInsetsCompat, WindowInsets windowInsets) {
            super(windowInsetsCompat, windowInsets);
        }

        @Override // androidx.core.view.WindowInsetsCompat.l, androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        public Insets g(int i10) {
            return Insets.f(this.f3419c.getInsets(r.a(i10)));
        }

        @Override // androidx.core.view.WindowInsetsCompat.l, androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        public Insets h(int i10) {
            return Insets.f(this.f3419c.getInsetsIgnoringVisibility(r.a(i10)));
        }

        @Override // androidx.core.view.WindowInsetsCompat.l, androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        public boolean q(int i10) {
            return this.f3419c.isVisible(r.a(i10));
        }

        n(WindowInsetsCompat windowInsetsCompat, n nVar) {
            super(windowInsetsCompat, nVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class o {

        /* renamed from: b  reason: collision with root package name */
        static final WindowInsetsCompat f3431b = new a().a().a().b().c();

        /* renamed from: a  reason: collision with root package name */
        final WindowInsetsCompat f3432a;

        o(WindowInsetsCompat windowInsetsCompat) {
            this.f3432a = windowInsetsCompat;
        }

        WindowInsetsCompat a() {
            return this.f3432a;
        }

        WindowInsetsCompat b() {
            return this.f3432a;
        }

        WindowInsetsCompat c() {
            return this.f3432a;
        }

        void d(View view) {
        }

        void e(WindowInsetsCompat windowInsetsCompat) {
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof o)) {
                return false;
            }
            o oVar = (o) obj;
            if (p() == oVar.p() && o() == oVar.o() && b2.b.a(l(), oVar.l()) && b2.b.a(j(), oVar.j()) && b2.b.a(f(), oVar.f())) {
                return true;
            }
            return false;
        }

        androidx.core.view.i f() {
            return null;
        }

        Insets g(int i10) {
            return Insets.f3300e;
        }

        Insets h(int i10) {
            if ((i10 & 8) == 0) {
                return Insets.f3300e;
            }
            throw new IllegalArgumentException("Unable to query the maximum insets for IME");
        }

        public int hashCode() {
            return b2.b.b(Boolean.valueOf(p()), Boolean.valueOf(o()), l(), j(), f());
        }

        Insets i() {
            return l();
        }

        Insets j() {
            return Insets.f3300e;
        }

        Insets k() {
            return l();
        }

        Insets l() {
            return Insets.f3300e;
        }

        Insets m() {
            return l();
        }

        WindowInsetsCompat n(int i10, int i11, int i12, int i13) {
            return f3431b;
        }

        boolean o() {
            return false;
        }

        boolean p() {
            return false;
        }

        boolean q(int i10) {
            return true;
        }

        public void r(Insets[] insetsArr) {
        }

        void s(Insets insets) {
        }

        void t(WindowInsetsCompat windowInsetsCompat) {
        }

        public void u(Insets insets) {
        }

        void v(int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class p {
        public static int a() {
            return 4;
        }

        public static int b() {
            return IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }

        public static int c() {
            return 8;
        }

        static int d(int i10) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return 1;
                }
                if (i10 == 4) {
                    return 2;
                }
                if (i10 != 8) {
                    if (i10 == 16) {
                        return 4;
                    }
                    if (i10 != 32) {
                        if (i10 != 64) {
                            if (i10 != 128) {
                                if (i10 == 256) {
                                    return 8;
                                }
                                if (i10 == 512) {
                                    return 9;
                                }
                                throw new IllegalArgumentException("type needs to be >= FIRST and <= LAST, type=" + i10);
                            }
                            return 7;
                        }
                        return 6;
                    }
                    return 5;
                }
                return 3;
            }
            return 0;
        }

        public static int e() {
            return 32;
        }

        public static int f() {
            return 2;
        }

        public static int g() {
            return 1;
        }

        public static int h() {
            return 519;
        }

        public static int i() {
            return 16;
        }

        public static int j() {
            return 64;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class q {
        static int a(int i10) {
            int statusBars;
            int i11 = 0;
            for (int i12 = 1; i12 <= 512; i12 <<= 1) {
                if ((i10 & i12) != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 4) {
                                if (i12 != 8) {
                                    if (i12 != 16) {
                                        if (i12 != 32) {
                                            if (i12 != 64) {
                                                if (i12 == 128) {
                                                    statusBars = WindowInsets.Type.displayCutout();
                                                }
                                            } else {
                                                statusBars = WindowInsets.Type.tappableElement();
                                            }
                                        } else {
                                            statusBars = WindowInsets.Type.mandatorySystemGestures();
                                        }
                                    } else {
                                        statusBars = WindowInsets.Type.systemGestures();
                                    }
                                } else {
                                    statusBars = WindowInsets.Type.ime();
                                }
                            } else {
                                statusBars = WindowInsets.Type.captionBar();
                            }
                        } else {
                            statusBars = WindowInsets.Type.navigationBars();
                        }
                    } else {
                        statusBars = WindowInsets.Type.statusBars();
                    }
                    i11 |= statusBars;
                }
            }
            return i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class r {
        static int a(int i10) {
            int statusBars;
            int i11 = 0;
            for (int i12 = 1; i12 <= 512; i12 <<= 1) {
                if ((i10 & i12) != 0) {
                    if (i12 != 1) {
                        if (i12 != 2) {
                            if (i12 != 4) {
                                if (i12 != 8) {
                                    if (i12 != 16) {
                                        if (i12 != 32) {
                                            if (i12 != 64) {
                                                if (i12 != 128) {
                                                    if (i12 == 512) {
                                                        statusBars = WindowInsets.Type.systemOverlays();
                                                    }
                                                } else {
                                                    statusBars = WindowInsets.Type.displayCutout();
                                                }
                                            } else {
                                                statusBars = WindowInsets.Type.tappableElement();
                                            }
                                        } else {
                                            statusBars = WindowInsets.Type.mandatorySystemGestures();
                                        }
                                    } else {
                                        statusBars = WindowInsets.Type.systemGestures();
                                    }
                                } else {
                                    statusBars = WindowInsets.Type.ime();
                                }
                            } else {
                                statusBars = WindowInsets.Type.captionBar();
                            }
                        } else {
                            statusBars = WindowInsets.Type.navigationBars();
                        }
                    } else {
                        statusBars = WindowInsets.Type.statusBars();
                    }
                    i11 |= statusBars;
                }
            }
            return i11;
        }
    }

    static {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            f3402b = n.f3430s;
        } else if (i10 >= 30) {
            f3402b = l.f3429r;
        } else {
            f3402b = o.f3431b;
        }
    }

    private WindowInsetsCompat(WindowInsets windowInsets) {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            this.f3403a = new n(this, windowInsets);
        } else if (i10 >= 31) {
            this.f3403a = new m(this, windowInsets);
        } else if (i10 >= 30) {
            this.f3403a = new l(this, windowInsets);
        } else if (i10 >= 29) {
            this.f3403a = new k(this, windowInsets);
        } else if (i10 >= 28) {
            this.f3403a = new j(this, windowInsets);
        } else {
            this.f3403a = new i(this, windowInsets);
        }
    }

    public static WindowInsetsCompat C(WindowInsets windowInsets) {
        return D(windowInsets, null);
    }

    public static WindowInsetsCompat D(WindowInsets windowInsets, View view) {
        WindowInsetsCompat windowInsetsCompat = new WindowInsetsCompat((WindowInsets) b2.e.g(windowInsets));
        if (view != null && view.isAttachedToWindow()) {
            windowInsetsCompat.y(h0.G(view));
            windowInsetsCompat.d(view.getRootView());
            windowInsetsCompat.A(view.getWindowSystemUiVisibility());
        }
        return windowInsetsCompat;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Insets s(Insets insets, int i10, int i11, int i12, int i13) {
        int max = Math.max(0, insets.f3301a - i10);
        int max2 = Math.max(0, insets.f3302b - i11);
        int max3 = Math.max(0, insets.f3303c - i12);
        int max4 = Math.max(0, insets.f3304d - i13);
        if (max == i10 && max2 == i11 && max3 == i12 && max4 == i13) {
            return insets;
        }
        return Insets.c(max, max2, max3, max4);
    }

    void A(int i10) {
        this.f3403a.v(i10);
    }

    public WindowInsets B() {
        o oVar = this.f3403a;
        if (oVar instanceof h) {
            return ((h) oVar).f3419c;
        }
        return null;
    }

    public WindowInsetsCompat a() {
        return this.f3403a.a();
    }

    public WindowInsetsCompat b() {
        return this.f3403a.b();
    }

    public WindowInsetsCompat c() {
        return this.f3403a.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view) {
        this.f3403a.d(view);
    }

    public androidx.core.view.i e() {
        return this.f3403a.f();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof WindowInsetsCompat)) {
            return false;
        }
        return b2.b.a(this.f3403a, ((WindowInsetsCompat) obj).f3403a);
    }

    public Insets f(int i10) {
        return this.f3403a.g(i10);
    }

    public Insets g(int i10) {
        return this.f3403a.h(i10);
    }

    public int h() {
        return this.f3403a.j().f3304d;
    }

    public int hashCode() {
        o oVar = this.f3403a;
        if (oVar == null) {
            return 0;
        }
        return oVar.hashCode();
    }

    public int i() {
        return this.f3403a.j().f3301a;
    }

    public int j() {
        return this.f3403a.j().f3303c;
    }

    public int k() {
        return this.f3403a.j().f3302b;
    }

    public Insets l() {
        return this.f3403a.j();
    }

    public Insets m() {
        return this.f3403a.k();
    }

    public int n() {
        return this.f3403a.l().f3304d;
    }

    public int o() {
        return this.f3403a.l().f3301a;
    }

    public int p() {
        return this.f3403a.l().f3303c;
    }

    public int q() {
        return this.f3403a.l().f3302b;
    }

    public WindowInsetsCompat r(int i10, int i11, int i12, int i13) {
        return this.f3403a.n(i10, i11, i12, i13);
    }

    public boolean t() {
        return this.f3403a.o();
    }

    public boolean u(int i10) {
        return this.f3403a.q(i10);
    }

    public WindowInsetsCompat v(int i10, int i11, int i12, int i13) {
        return new a(this).d(Insets.c(i10, i11, i12, i13)).a();
    }

    void w(Insets[] insetsArr) {
        this.f3403a.r(insetsArr);
    }

    void x(Insets insets) {
        this.f3403a.s(insets);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y(WindowInsetsCompat windowInsetsCompat) {
        this.f3403a.t(windowInsetsCompat);
    }

    void z(Insets insets) {
        this.f3403a.u(insets);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b extends g {

        /* renamed from: e  reason: collision with root package name */
        private static Field f3405e = null;

        /* renamed from: f  reason: collision with root package name */
        private static boolean f3406f = false;

        /* renamed from: g  reason: collision with root package name */
        private static Constructor f3407g = null;

        /* renamed from: h  reason: collision with root package name */
        private static boolean f3408h = false;

        /* renamed from: c  reason: collision with root package name */
        private WindowInsets f3409c;

        /* renamed from: d  reason: collision with root package name */
        private Insets f3410d;

        b() {
            this.f3409c = i();
        }

        private static WindowInsets i() {
            if (!f3406f) {
                try {
                    f3405e = WindowInsets.class.getDeclaredField("CONSUMED");
                } catch (ReflectiveOperationException e10) {
                    Log.i("WindowInsetsCompat", "Could not retrieve WindowInsets.CONSUMED field", e10);
                }
                f3406f = true;
            }
            Field field = f3405e;
            if (field != null) {
                try {
                    WindowInsets windowInsets = (WindowInsets) field.get(null);
                    if (windowInsets != null) {
                        return new WindowInsets(windowInsets);
                    }
                } catch (ReflectiveOperationException e11) {
                    Log.i("WindowInsetsCompat", "Could not get value from WindowInsets.CONSUMED field", e11);
                }
            }
            if (!f3408h) {
                try {
                    f3407g = WindowInsets.class.getConstructor(Rect.class);
                } catch (ReflectiveOperationException e12) {
                    Log.i("WindowInsetsCompat", "Could not retrieve WindowInsets(Rect) constructor", e12);
                }
                f3408h = true;
            }
            Constructor constructor = f3407g;
            if (constructor != null) {
                try {
                    return (WindowInsets) constructor.newInstance(new Rect());
                } catch (ReflectiveOperationException e13) {
                    Log.i("WindowInsetsCompat", "Could not invoke WindowInsets(Rect) constructor", e13);
                }
            }
            return null;
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        WindowInsetsCompat b() {
            a();
            WindowInsetsCompat C = WindowInsetsCompat.C(this.f3409c);
            C.w(this.f3413b);
            C.z(this.f3410d);
            return C;
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void e(Insets insets) {
            this.f3410d = insets;
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void g(Insets insets) {
            WindowInsets windowInsets = this.f3409c;
            if (windowInsets != null) {
                this.f3409c = windowInsets.replaceSystemWindowInsets(insets.f3301a, insets.f3302b, insets.f3303c, insets.f3304d);
            }
        }

        b(WindowInsetsCompat windowInsetsCompat) {
            super(windowInsetsCompat);
            this.f3409c = windowInsetsCompat.B();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c extends g {

        /* renamed from: c  reason: collision with root package name */
        final WindowInsets.Builder f3411c;

        c() {
            this.f3411c = f1.a();
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        WindowInsetsCompat b() {
            a();
            WindowInsetsCompat C = WindowInsetsCompat.C(this.f3411c.build());
            C.w(this.f3413b);
            return C;
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void d(Insets insets) {
            this.f3411c.setMandatorySystemGestureInsets(insets.g());
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void e(Insets insets) {
            this.f3411c.setStableInsets(insets.g());
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void f(Insets insets) {
            this.f3411c.setSystemGestureInsets(insets.g());
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void g(Insets insets) {
            this.f3411c.setSystemWindowInsets(insets.g());
        }

        @Override // androidx.core.view.WindowInsetsCompat.g
        void h(Insets insets) {
            this.f3411c.setTappableElementInsets(insets.g());
        }

        c(WindowInsetsCompat windowInsetsCompat) {
            super(windowInsetsCompat);
            WindowInsets.Builder a10;
            WindowInsets B = windowInsetsCompat.B();
            if (B != null) {
                a10 = e1.a(B);
            } else {
                a10 = f1.a();
            }
            this.f3411c = a10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class i extends h {

        /* renamed from: n  reason: collision with root package name */
        private Insets f3425n;

        i(WindowInsetsCompat windowInsetsCompat, WindowInsets windowInsets) {
            super(windowInsetsCompat, windowInsets);
            this.f3425n = null;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        WindowInsetsCompat b() {
            return WindowInsetsCompat.C(this.f3419c.consumeStableInsets());
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        WindowInsetsCompat c() {
            return WindowInsetsCompat.C(this.f3419c.consumeSystemWindowInsets());
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        final Insets j() {
            if (this.f3425n == null) {
                this.f3425n = Insets.c(this.f3419c.getStableInsetLeft(), this.f3419c.getStableInsetTop(), this.f3419c.getStableInsetRight(), this.f3419c.getStableInsetBottom());
            }
            return this.f3425n;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        boolean o() {
            return this.f3419c.isConsumed();
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        public void u(Insets insets) {
            this.f3425n = insets;
        }

        i(WindowInsetsCompat windowInsetsCompat, i iVar) {
            super(windowInsetsCompat, iVar);
            this.f3425n = null;
            this.f3425n = iVar.f3425n;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h extends o {

        /* renamed from: i  reason: collision with root package name */
        private static boolean f3414i = false;

        /* renamed from: j  reason: collision with root package name */
        private static Method f3415j;

        /* renamed from: k  reason: collision with root package name */
        private static Class f3416k;

        /* renamed from: l  reason: collision with root package name */
        private static Field f3417l;

        /* renamed from: m  reason: collision with root package name */
        private static Field f3418m;

        /* renamed from: c  reason: collision with root package name */
        final WindowInsets f3419c;

        /* renamed from: d  reason: collision with root package name */
        private Insets[] f3420d;

        /* renamed from: e  reason: collision with root package name */
        private Insets f3421e;

        /* renamed from: f  reason: collision with root package name */
        private WindowInsetsCompat f3422f;

        /* renamed from: g  reason: collision with root package name */
        Insets f3423g;

        /* renamed from: h  reason: collision with root package name */
        int f3424h;

        h(WindowInsetsCompat windowInsetsCompat, WindowInsets windowInsets) {
            super(windowInsetsCompat);
            this.f3421e = null;
            this.f3419c = windowInsets;
        }

        @SuppressLint({"PrivateApi"})
        private static void B() {
            try {
                f3415j = View.class.getDeclaredMethod("getViewRootImpl", null);
                Class<?> cls = Class.forName("android.view.View$AttachInfo");
                f3416k = cls;
                f3417l = cls.getDeclaredField("mVisibleInsets");
                f3418m = Class.forName("android.view.ViewRootImpl").getDeclaredField("mAttachInfo");
                f3417l.setAccessible(true);
                f3418m.setAccessible(true);
            } catch (ReflectiveOperationException e10) {
                Log.e("WindowInsetsCompat", "Failed to get visible insets. (Reflection error). " + e10.getMessage(), e10);
            }
            f3414i = true;
        }

        static boolean C(int i10, int i11) {
            return (i10 & 6) == (i11 & 6);
        }

        @SuppressLint({"WrongConstant"})
        private Insets w(int i10, boolean z10) {
            Insets insets = Insets.f3300e;
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) != 0) {
                    insets = Insets.b(insets, x(i11, z10));
                }
            }
            return insets;
        }

        private Insets y() {
            WindowInsetsCompat windowInsetsCompat = this.f3422f;
            if (windowInsetsCompat != null) {
                return windowInsetsCompat.l();
            }
            return Insets.f3300e;
        }

        private Insets z(View view) {
            if (Build.VERSION.SDK_INT < 30) {
                if (!f3414i) {
                    B();
                }
                Method method = f3415j;
                if (method != null && f3416k != null && f3417l != null) {
                    try {
                        Object invoke = method.invoke(view, null);
                        if (invoke == null) {
                            Log.w("WindowInsetsCompat", "Failed to get visible insets. getViewRootImpl() returned null from the provided view. This means that the view is either not attached or the method has been overridden", new NullPointerException());
                            return null;
                        }
                        Rect rect = (Rect) f3417l.get(f3418m.get(invoke));
                        if (rect == null) {
                            return null;
                        }
                        return Insets.d(rect);
                    } catch (ReflectiveOperationException e10) {
                        Log.e("WindowInsetsCompat", "Failed to get visible insets. (Reflection error). " + e10.getMessage(), e10);
                    }
                }
                return null;
            }
            throw new UnsupportedOperationException("getVisibleInsets() should not be called on API >= 30. Use WindowInsets.isVisible() instead.");
        }

        protected boolean A(int i10) {
            if (i10 != 1 && i10 != 2) {
                if (i10 == 4) {
                    return false;
                }
                if (i10 != 8 && i10 != 128) {
                    return true;
                }
            }
            return !x(i10, false).equals(Insets.f3300e);
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        void d(View view) {
            Insets z10 = z(view);
            if (z10 == null) {
                z10 = Insets.f3300e;
            }
            s(z10);
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        void e(WindowInsetsCompat windowInsetsCompat) {
            windowInsetsCompat.y(this.f3422f);
            windowInsetsCompat.x(this.f3423g);
            windowInsetsCompat.A(this.f3424h);
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        public boolean equals(Object obj) {
            if (!super.equals(obj)) {
                return false;
            }
            h hVar = (h) obj;
            if (!Objects.equals(this.f3423g, hVar.f3423g) || !C(this.f3424h, hVar.f3424h)) {
                return false;
            }
            return true;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        public Insets g(int i10) {
            return w(i10, false);
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        public Insets h(int i10) {
            return w(i10, true);
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        final Insets l() {
            if (this.f3421e == null) {
                this.f3421e = Insets.c(this.f3419c.getSystemWindowInsetLeft(), this.f3419c.getSystemWindowInsetTop(), this.f3419c.getSystemWindowInsetRight(), this.f3419c.getSystemWindowInsetBottom());
            }
            return this.f3421e;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        WindowInsetsCompat n(int i10, int i11, int i12, int i13) {
            a aVar = new a(WindowInsetsCompat.C(this.f3419c));
            aVar.d(WindowInsetsCompat.s(l(), i10, i11, i12, i13));
            aVar.c(WindowInsetsCompat.s(j(), i10, i11, i12, i13));
            return aVar.a();
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        boolean p() {
            return this.f3419c.isRound();
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        @SuppressLint({"WrongConstant"})
        boolean q(int i10) {
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) != 0 && !A(i11)) {
                    return false;
                }
            }
            return true;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        public void r(Insets[] insetsArr) {
            this.f3420d = insetsArr;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        void s(Insets insets) {
            this.f3423g = insets;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        void t(WindowInsetsCompat windowInsetsCompat) {
            this.f3422f = windowInsetsCompat;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        void v(int i10) {
            this.f3424h = i10;
        }

        protected Insets x(int i10, boolean z10) {
            int i11;
            androidx.core.view.i f10;
            if (i10 != 1) {
                Insets insets = null;
                if (i10 != 2) {
                    if (i10 != 8) {
                        if (i10 != 16) {
                            if (i10 != 32) {
                                if (i10 != 64) {
                                    if (i10 != 128) {
                                        return Insets.f3300e;
                                    }
                                    WindowInsetsCompat windowInsetsCompat = this.f3422f;
                                    if (windowInsetsCompat != null) {
                                        f10 = windowInsetsCompat.e();
                                    } else {
                                        f10 = f();
                                    }
                                    if (f10 != null) {
                                        return Insets.c(f10.b(), f10.d(), f10.c(), f10.a());
                                    }
                                    return Insets.f3300e;
                                }
                                return m();
                            }
                            return i();
                        }
                        return k();
                    }
                    Insets[] insetsArr = this.f3420d;
                    if (insetsArr != null) {
                        insets = insetsArr[p.d(8)];
                    }
                    if (insets != null) {
                        return insets;
                    }
                    Insets l10 = l();
                    Insets y10 = y();
                    int i12 = l10.f3304d;
                    if (i12 > y10.f3304d) {
                        return Insets.c(0, 0, 0, i12);
                    }
                    Insets insets2 = this.f3423g;
                    if (insets2 != null && !insets2.equals(Insets.f3300e) && (i11 = this.f3423g.f3304d) > y10.f3304d) {
                        return Insets.c(0, 0, 0, i11);
                    }
                    return Insets.f3300e;
                } else if (z10) {
                    Insets y11 = y();
                    Insets j10 = j();
                    return Insets.c(Math.max(y11.f3301a, j10.f3301a), 0, Math.max(y11.f3303c, j10.f3303c), Math.max(y11.f3304d, j10.f3304d));
                } else if ((this.f3424h & 2) != 0) {
                    return Insets.f3300e;
                } else {
                    Insets l11 = l();
                    WindowInsetsCompat windowInsetsCompat2 = this.f3422f;
                    if (windowInsetsCompat2 != null) {
                        insets = windowInsetsCompat2.l();
                    }
                    int i13 = l11.f3304d;
                    if (insets != null) {
                        i13 = Math.min(i13, insets.f3304d);
                    }
                    return Insets.c(l11.f3301a, 0, l11.f3303c, i13);
                }
            } else if (z10) {
                return Insets.c(0, Math.max(y().f3302b, l().f3302b), 0, 0);
            } else {
                if ((this.f3424h & 4) != 0) {
                    return Insets.f3300e;
                }
                return Insets.c(0, l().f3302b, 0, 0);
            }
        }

        h(WindowInsetsCompat windowInsetsCompat, h hVar) {
            this(windowInsetsCompat, new WindowInsets(hVar.f3419c));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class k extends j {

        /* renamed from: o  reason: collision with root package name */
        private Insets f3426o;

        /* renamed from: p  reason: collision with root package name */
        private Insets f3427p;

        /* renamed from: q  reason: collision with root package name */
        private Insets f3428q;

        k(WindowInsetsCompat windowInsetsCompat, WindowInsets windowInsets) {
            super(windowInsetsCompat, windowInsets);
            this.f3426o = null;
            this.f3427p = null;
            this.f3428q = null;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        Insets i() {
            if (this.f3427p == null) {
                this.f3427p = Insets.f(this.f3419c.getMandatorySystemGestureInsets());
            }
            return this.f3427p;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        Insets k() {
            if (this.f3426o == null) {
                this.f3426o = Insets.f(this.f3419c.getSystemGestureInsets());
            }
            return this.f3426o;
        }

        @Override // androidx.core.view.WindowInsetsCompat.o
        Insets m() {
            if (this.f3428q == null) {
                this.f3428q = Insets.f(this.f3419c.getTappableElementInsets());
            }
            return this.f3428q;
        }

        @Override // androidx.core.view.WindowInsetsCompat.h, androidx.core.view.WindowInsetsCompat.o
        WindowInsetsCompat n(int i10, int i11, int i12, int i13) {
            return WindowInsetsCompat.C(this.f3419c.inset(i10, i11, i12, i13));
        }

        @Override // androidx.core.view.WindowInsetsCompat.i, androidx.core.view.WindowInsetsCompat.o
        public void u(Insets insets) {
        }

        k(WindowInsetsCompat windowInsetsCompat, k kVar) {
            super(windowInsetsCompat, kVar);
            this.f3426o = null;
            this.f3427p = null;
            this.f3428q = null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final g f3404a;

        public a() {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 34) {
                this.f3404a = new f();
            } else if (i10 >= 31) {
                this.f3404a = new e();
            } else if (i10 >= 30) {
                this.f3404a = new d();
            } else if (i10 >= 29) {
                this.f3404a = new c();
            } else {
                this.f3404a = new b();
            }
        }

        public WindowInsetsCompat a() {
            return this.f3404a.b();
        }

        public a b(int i10, Insets insets) {
            this.f3404a.c(i10, insets);
            return this;
        }

        public a c(Insets insets) {
            this.f3404a.e(insets);
            return this;
        }

        public a d(Insets insets) {
            this.f3404a.g(insets);
            return this;
        }

        public a(WindowInsetsCompat windowInsetsCompat) {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 34) {
                this.f3404a = new f(windowInsetsCompat);
            } else if (i10 >= 31) {
                this.f3404a = new e(windowInsetsCompat);
            } else if (i10 >= 30) {
                this.f3404a = new d(windowInsetsCompat);
            } else if (i10 >= 29) {
                this.f3404a = new c(windowInsetsCompat);
            } else {
                this.f3404a = new b(windowInsetsCompat);
            }
        }
    }

    public WindowInsetsCompat(WindowInsetsCompat windowInsetsCompat) {
        if (windowInsetsCompat != null) {
            o oVar = windowInsetsCompat.f3403a;
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 34 && (oVar instanceof n)) {
                this.f3403a = new n(this, (n) oVar);
            } else if (i10 >= 31 && (oVar instanceof m)) {
                this.f3403a = new m(this, (m) oVar);
            } else if (i10 >= 30 && (oVar instanceof l)) {
                this.f3403a = new l(this, (l) oVar);
            } else if (i10 >= 29 && (oVar instanceof k)) {
                this.f3403a = new k(this, (k) oVar);
            } else if (i10 >= 28 && (oVar instanceof j)) {
                this.f3403a = new j(this, (j) oVar);
            } else if (oVar instanceof i) {
                this.f3403a = new i(this, (i) oVar);
            } else if (oVar instanceof h) {
                this.f3403a = new h(this, (h) oVar);
            } else {
                this.f3403a = new o(this);
            }
            oVar.e(this);
            return;
        }
        this.f3403a = new o(this);
    }
}
