package com.google.android.material.internal;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import android.view.inputmethod.InputMethodManager;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.i0;
import androidx.core.view.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements w {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ c f15934d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f15935e;

        a(c cVar, d dVar) {
            this.f15934d = cVar;
            this.f15935e = dVar;
        }

        @Override // androidx.core.view.w
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            return this.f15934d.a(view, windowInsetsCompat, new d(this.f15935e));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements View.OnAttachStateChangeListener {
        b() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            view.removeOnAttachStateChangeListener(this);
            view.requestApplyInsets();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat, d dVar);
    }

    public static void b(View view, ViewTreeObserver.OnGlobalLayoutListener onGlobalLayoutListener) {
        if (view != null) {
            view.getViewTreeObserver().addOnGlobalLayoutListener(onGlobalLayoutListener);
        }
    }

    public static void c(View view, c cVar) {
        i0.x0(view, new a(cVar, new d(view.getPaddingStart(), view.getPaddingTop(), view.getPaddingEnd(), view.getPaddingBottom())));
        l(view);
    }

    public static float d(Context context, int i10) {
        return TypedValue.applyDimension(1, i10, context.getResources().getDisplayMetrics());
    }

    public static Integer e(View view) {
        ColorStateList g10 = com.google.android.material.drawable.c.g(view.getBackground());
        if (g10 != null) {
            return Integer.valueOf(g10.getDefaultColor());
        }
        return null;
    }

    private static InputMethodManager f(View view) {
        return (InputMethodManager) androidx.core.content.a.j(view.getContext(), InputMethodManager.class);
    }

    public static float g(View view) {
        float f10 = 0.0f;
        for (ViewParent parent = view.getParent(); parent instanceof View; parent = parent.getParent()) {
            f10 += ((View) parent).getElevation();
        }
        return f10;
    }

    public static boolean h(View view) {
        if (view.getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    public static PorterDuff.Mode i(int i10, PorterDuff.Mode mode) {
        if (i10 != 3) {
            if (i10 != 5) {
                if (i10 != 9) {
                    switch (i10) {
                        case 14:
                            return PorterDuff.Mode.MULTIPLY;
                        case 15:
                            return PorterDuff.Mode.SCREEN;
                        case 16:
                            return PorterDuff.Mode.ADD;
                        default:
                            return mode;
                    }
                }
                return PorterDuff.Mode.SRC_ATOP;
            }
            return PorterDuff.Mode.SRC_IN;
        }
        return PorterDuff.Mode.SRC_OVER;
    }

    public static void j(View view, ViewTreeObserver.OnGlobalLayoutListener onGlobalLayoutListener) {
        if (view != null) {
            k(view.getViewTreeObserver(), onGlobalLayoutListener);
        }
    }

    public static void k(ViewTreeObserver viewTreeObserver, ViewTreeObserver.OnGlobalLayoutListener onGlobalLayoutListener) {
        viewTreeObserver.removeOnGlobalLayoutListener(onGlobalLayoutListener);
    }

    public static void l(View view) {
        if (view.isAttachedToWindow()) {
            view.requestApplyInsets();
        } else {
            view.addOnAttachStateChangeListener(new b());
        }
    }

    public static void m(final View view, final boolean z10) {
        view.requestFocus();
        view.post(new Runnable() { // from class: com.google.android.material.internal.o
            @Override // java.lang.Runnable
            public final void run() {
                p.n(view, z10);
            }
        });
    }

    public static void n(View view, boolean z10) {
        WindowInsetsControllerCompat J;
        if (z10 && (J = i0.J(view)) != null) {
            J.g(WindowInsetsCompat.p.c());
        } else {
            f(view).showSoftInput(view, 1);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public int f15936a;

        /* renamed from: b  reason: collision with root package name */
        public int f15937b;

        /* renamed from: c  reason: collision with root package name */
        public int f15938c;

        /* renamed from: d  reason: collision with root package name */
        public int f15939d;

        public d(int i10, int i11, int i12, int i13) {
            this.f15936a = i10;
            this.f15937b = i11;
            this.f15938c = i12;
            this.f15939d = i13;
        }

        public void a(View view) {
            view.setPaddingRelative(this.f15936a, this.f15937b, this.f15938c, this.f15939d);
        }

        public d(d dVar) {
            this.f15936a = dVar.f15936a;
            this.f15937b = dVar.f15937b;
            this.f15938c = dVar.f15938c;
            this.f15939d = dVar.f15939d;
        }
    }
}
