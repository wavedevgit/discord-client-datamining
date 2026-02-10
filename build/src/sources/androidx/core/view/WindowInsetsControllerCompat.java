package androidx.core.view;

import android.os.Build;
import android.os.CancellationSignal;
import android.view.View;
import android.view.Window;
import android.view.WindowInsetsAnimationControlListener;
import android.view.WindowInsetsAnimationController;
import android.view.WindowInsetsController;
import android.view.animation.Interpolator;
import androidx.collection.SimpleArrayMap;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WindowInsetsControllerCompat {

    /* renamed from: a  reason: collision with root package name */
    private final g f3436a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends g {

        /* renamed from: a  reason: collision with root package name */
        protected final Window f3437a;

        /* renamed from: b  reason: collision with root package name */
        private final c0 f3438b;

        a(Window window, c0 c0Var) {
            this.f3437a = window;
            this.f3438b = c0Var;
        }

        private void h(int i10) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 8) {
                        return;
                    }
                    this.f3438b.a();
                    return;
                }
                i(2);
                return;
            }
            i(4);
        }

        private void k(int i10) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 8) {
                        return;
                    }
                    this.f3438b.b();
                    return;
                }
                l(2);
                return;
            }
            l(4);
            m(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, d1 d1Var) {
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void b(int i10) {
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) != 0) {
                    h(i11);
                }
            }
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void f(int i10) {
            this.f3437a.getDecorView().setTag(356039078, Integer.valueOf(i10));
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        return;
                    }
                    l(RecyclerView.ItemAnimator.FLAG_MOVED);
                    i(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                    return;
                }
                l(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                i(RecyclerView.ItemAnimator.FLAG_MOVED);
                return;
            }
            l(6144);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void g(int i10) {
            for (int i11 = 1; i11 <= 512; i11 <<= 1) {
                if ((i10 & i11) != 0) {
                    k(i11);
                }
            }
        }

        protected void i(int i10) {
            View decorView = this.f3437a.getDecorView();
            decorView.setSystemUiVisibility(i10 | decorView.getSystemUiVisibility());
        }

        protected void j(int i10) {
            this.f3437a.addFlags(i10);
        }

        protected void l(int i10) {
            View decorView = this.f3437a.getDecorView();
            decorView.setSystemUiVisibility((~i10) & decorView.getSystemUiVisibility());
        }

        protected void m(int i10) {
            this.f3437a.clearFlags(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b extends a {
        b(Window window, c0 c0Var) {
            super(window, c0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public boolean c() {
            if ((this.f3437a.getDecorView().getSystemUiVisibility() & 8192) != 0) {
                return true;
            }
            return false;
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void e(boolean z10) {
            if (z10) {
                m(67108864);
                j(Integer.MIN_VALUE);
                i(8192);
                return;
            }
            l(8192);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c extends b {
        c(Window window, c0 c0Var) {
            super(window, c0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void d(boolean z10) {
            if (z10) {
                m(134217728);
                j(Integer.MIN_VALUE);
                i(16);
                return;
            }
            l(16);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class e extends d {
        e(Window window, WindowInsetsControllerCompat windowInsetsControllerCompat, c0 c0Var) {
            super(window, windowInsetsControllerCompat, c0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.d, androidx.core.view.WindowInsetsControllerCompat.g
        void f(int i10) {
            this.f3440b.setSystemBarsBehavior(i10);
        }

        e(WindowInsetsController windowInsetsController, WindowInsetsControllerCompat windowInsetsControllerCompat, c0 c0Var) {
            super(windowInsetsController, windowInsetsControllerCompat, c0Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class f extends e {
        f(Window window, WindowInsetsControllerCompat windowInsetsControllerCompat, c0 c0Var) {
            super(window, windowInsetsControllerCompat, c0Var);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.d, androidx.core.view.WindowInsetsControllerCompat.g
        public boolean c() {
            if ((this.f3440b.getSystemBarsAppearance() & 8) != 0) {
                return true;
            }
            return false;
        }

        f(WindowInsetsController windowInsetsController, WindowInsetsControllerCompat windowInsetsControllerCompat, c0 c0Var) {
            super(windowInsetsController, windowInsetsControllerCompat, c0Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class g {
        g() {
        }

        abstract void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, d1 d1Var);

        abstract void b(int i10);

        public abstract boolean c();

        public void d(boolean z10) {
        }

        public abstract void e(boolean z10);

        abstract void f(int i10);

        abstract void g(int i10);
    }

    private WindowInsetsControllerCompat(WindowInsetsController windowInsetsController) {
        if (Build.VERSION.SDK_INT >= 35) {
            this.f3436a = new f(windowInsetsController, this, new c0(windowInsetsController));
        } else {
            this.f3436a = new d(windowInsetsController, this, new c0(windowInsetsController));
        }
    }

    public static WindowInsetsControllerCompat h(WindowInsetsController windowInsetsController) {
        return new WindowInsetsControllerCompat(windowInsetsController);
    }

    public void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, d1 d1Var) {
        this.f3436a.a(i10, j10, interpolator, cancellationSignal, d1Var);
    }

    public void b(int i10) {
        this.f3436a.b(i10);
    }

    public boolean c() {
        return this.f3436a.c();
    }

    public void d(boolean z10) {
        this.f3436a.d(z10);
    }

    public void e(boolean z10) {
        this.f3436a.e(z10);
    }

    public void f(int i10) {
        this.f3436a.f(i10);
    }

    public void g(int i10) {
        this.f3436a.g(i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class d extends g {

        /* renamed from: a  reason: collision with root package name */
        final WindowInsetsControllerCompat f3439a;

        /* renamed from: b  reason: collision with root package name */
        final WindowInsetsController f3440b;

        /* renamed from: c  reason: collision with root package name */
        final c0 f3441c;

        /* renamed from: d  reason: collision with root package name */
        private final SimpleArrayMap f3442d;

        /* renamed from: e  reason: collision with root package name */
        protected Window f3443e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements WindowInsetsAnimationControlListener {

            /* renamed from: a  reason: collision with root package name */
            private e1 f3444a = null;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ d1 f3445b;

            a(d1 d1Var) {
                this.f3445b = d1Var;
            }

            public void onCancelled(WindowInsetsAnimationController windowInsetsAnimationController) {
                e1 e1Var;
                d1 d1Var = this.f3445b;
                if (windowInsetsAnimationController == null) {
                    e1Var = null;
                } else {
                    e1Var = this.f3444a;
                }
                d1Var.a(e1Var);
            }

            public void onFinished(WindowInsetsAnimationController windowInsetsAnimationController) {
                this.f3445b.c(this.f3444a);
            }

            public void onReady(WindowInsetsAnimationController windowInsetsAnimationController, int i10) {
                e1 e1Var = new e1(windowInsetsAnimationController);
                this.f3444a = e1Var;
                this.f3445b.b(e1Var, i10);
            }
        }

        d(Window window, WindowInsetsControllerCompat windowInsetsControllerCompat, c0 c0Var) {
            this(window.getInsetsController(), windowInsetsControllerCompat, c0Var);
            this.f3443e = window;
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void a(int i10, long j10, Interpolator interpolator, CancellationSignal cancellationSignal, d1 d1Var) {
            this.f3440b.controlWindowInsetsAnimation(i10, j10, interpolator, cancellationSignal, new a(d1Var));
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void b(int i10) {
            if ((i10 & 8) != 0) {
                this.f3441c.a();
            }
            this.f3440b.hide(i10 & (-9));
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public boolean c() {
            this.f3440b.setSystemBarsAppearance(0, 0);
            if ((this.f3440b.getSystemBarsAppearance() & 8) == 0) {
                return false;
            }
            return true;
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void d(boolean z10) {
            if (z10) {
                if (this.f3443e != null) {
                    h(16);
                }
                this.f3440b.setSystemBarsAppearance(16, 16);
                return;
            }
            if (this.f3443e != null) {
                i(16);
            }
            this.f3440b.setSystemBarsAppearance(0, 16);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        public void e(boolean z10) {
            if (z10) {
                if (this.f3443e != null) {
                    h(8192);
                }
                this.f3440b.setSystemBarsAppearance(8, 8);
                return;
            }
            if (this.f3443e != null) {
                i(8192);
            }
            this.f3440b.setSystemBarsAppearance(0, 8);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void f(int i10) {
            Window window = this.f3443e;
            if (window != null) {
                window.getDecorView().setTag(356039078, Integer.valueOf(i10));
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return;
                        }
                        i(RecyclerView.ItemAnimator.FLAG_MOVED);
                        h(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                        return;
                    }
                    i(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                    h(RecyclerView.ItemAnimator.FLAG_MOVED);
                    return;
                }
                i(6144);
                return;
            }
            this.f3440b.setSystemBarsBehavior(i10);
        }

        @Override // androidx.core.view.WindowInsetsControllerCompat.g
        void g(int i10) {
            if ((i10 & 8) != 0) {
                this.f3441c.b();
            }
            this.f3440b.show(i10 & (-9));
        }

        protected void h(int i10) {
            View decorView = this.f3443e.getDecorView();
            decorView.setSystemUiVisibility(i10 | decorView.getSystemUiVisibility());
        }

        protected void i(int i10) {
            View decorView = this.f3443e.getDecorView();
            decorView.setSystemUiVisibility((~i10) & decorView.getSystemUiVisibility());
        }

        d(WindowInsetsController windowInsetsController, WindowInsetsControllerCompat windowInsetsControllerCompat, c0 c0Var) {
            this.f3442d = new SimpleArrayMap();
            this.f3440b = windowInsetsController;
            this.f3439a = windowInsetsControllerCompat;
            this.f3441c = c0Var;
        }
    }

    public WindowInsetsControllerCompat(Window window, View view) {
        c0 c0Var = new c0(view);
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 35) {
            this.f3436a = new f(window, this, c0Var);
        } else if (i10 >= 30) {
            this.f3436a = new d(window, this, c0Var);
        } else if (i10 >= 26) {
            this.f3436a = new c(window, c0Var);
        } else {
            this.f3436a = new b(window, c0Var);
        }
    }
}
