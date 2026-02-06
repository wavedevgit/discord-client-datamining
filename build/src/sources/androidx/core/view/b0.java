package androidx.core.view;

import android.os.Build;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.inputmethod.InputMethodManager;
import androidx.core.view.b0;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final c f3787a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends c {

        /* renamed from: a  reason: collision with root package name */
        private final View f3788a;

        a(View view) {
            this.f3788a = view;
        }

        @Override // androidx.core.view.b0.c
        void a() {
            View view = this.f3788a;
            if (view != null) {
                ((InputMethodManager) view.getContext().getSystemService("input_method")).hideSoftInputFromWindow(this.f3788a.getWindowToken(), 0);
            }
        }

        @Override // androidx.core.view.b0.c
        void b() {
            final View view = this.f3788a;
            if (view != null) {
                if (!view.isInEditMode() && !view.onCheckIsTextEditor()) {
                    view = view.getRootView().findFocus();
                } else {
                    view.requestFocus();
                }
                if (view == null) {
                    view = this.f3788a.getRootView().findViewById(16908290);
                }
                if (view != null && view.hasWindowFocus()) {
                    view.post(new Runnable() { // from class: androidx.core.view.a0
                        @Override // java.lang.Runnable
                        public final void run() {
                            ((InputMethodManager) r0.getContext().getSystemService("input_method")).showSoftInput(view, 0);
                        }
                    });
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c {
        c() {
        }

        abstract void a();

        abstract void b();
    }

    public b0(View view) {
        if (Build.VERSION.SDK_INT >= 30) {
            this.f3787a = new b(view);
        } else {
            this.f3787a = new a(view);
        }
    }

    public void a() {
        this.f3787a.a();
    }

    public void b() {
        this.f3787a.b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b extends a {

        /* renamed from: b  reason: collision with root package name */
        private View f3789b;

        /* renamed from: c  reason: collision with root package name */
        private WindowInsetsController f3790c;

        b(View view) {
            super(view);
            this.f3789b = view;
        }

        public static /* synthetic */ void d(AtomicBoolean atomicBoolean, WindowInsetsController windowInsetsController, int i10) {
            boolean z10;
            if ((i10 & 8) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            atomicBoolean.set(z10);
        }

        @Override // androidx.core.view.b0.a, androidx.core.view.b0.c
        void a() {
            View view;
            WindowInsetsController windowInsetsController = this.f3790c;
            if (windowInsetsController == null) {
                View view2 = this.f3789b;
                if (view2 != null) {
                    windowInsetsController = view2.getWindowInsetsController();
                } else {
                    windowInsetsController = null;
                }
            }
            if (windowInsetsController != null) {
                final AtomicBoolean atomicBoolean = new AtomicBoolean(false);
                WindowInsetsController.OnControllableInsetsChangedListener onControllableInsetsChangedListener = new WindowInsetsController.OnControllableInsetsChangedListener() { // from class: androidx.core.view.c0
                    @Override // android.view.WindowInsetsController.OnControllableInsetsChangedListener
                    public final void onControllableInsetsChanged(WindowInsetsController windowInsetsController2, int i10) {
                        b0.b.d(atomicBoolean, windowInsetsController2, i10);
                    }
                };
                windowInsetsController.addOnControllableInsetsChangedListener(onControllableInsetsChangedListener);
                if (!atomicBoolean.get() && (view = this.f3789b) != null) {
                    ((InputMethodManager) view.getContext().getSystemService("input_method")).hideSoftInputFromWindow(this.f3789b.getWindowToken(), 0);
                }
                windowInsetsController.removeOnControllableInsetsChangedListener(onControllableInsetsChangedListener);
                windowInsetsController.hide(WindowInsets.Type.ime());
                return;
            }
            super.a();
        }

        @Override // androidx.core.view.b0.a, androidx.core.view.b0.c
        void b() {
            View view = this.f3789b;
            if (view != null && Build.VERSION.SDK_INT < 33) {
                ((InputMethodManager) view.getContext().getSystemService("input_method")).isActive();
            }
            WindowInsetsController windowInsetsController = this.f3790c;
            if (windowInsetsController == null) {
                View view2 = this.f3789b;
                if (view2 != null) {
                    windowInsetsController = view2.getWindowInsetsController();
                } else {
                    windowInsetsController = null;
                }
            }
            if (windowInsetsController != null) {
                windowInsetsController.show(WindowInsets.Type.ime());
            }
            super.b();
        }

        b(WindowInsetsController windowInsetsController) {
            super(null);
            this.f3790c = windowInsetsController;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(WindowInsetsController windowInsetsController) {
        this.f3787a = new b(windowInsetsController);
    }
}
