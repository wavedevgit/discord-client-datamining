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
import androidx.core.view.h0;
import androidx.core.view.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements v {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ c f15201d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f15202e;

        a(c cVar, d dVar) {
            this.f15201d = cVar;
            this.f15202e = dVar;
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            return this.f15201d.a(view, windowInsetsCompat, new d(this.f15202e));
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
            h0.k0(view);
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
        h0.D0(view, new a(cVar, new d(h0.E(view), view.getPaddingTop(), h0.D(view), view.getPaddingBottom())));
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
            f10 += h0.u((View) parent);
        }
        return f10;
    }

    public static boolean h(View view) {
        if (h0.z(view) == 1) {
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
        if (h0.R(view)) {
            h0.k0(view);
        } else {
            view.addOnAttachStateChangeListener(new b());
        }
    }

    public static void m(final View view, final boolean z10) {
        view.requestFocus();
        view.post(new Runnable() { // from class: com.google.android.material.internal.n
            @Override // java.lang.Runnable
            public final void run() {
                o.n(view, z10);
            }
        });
    }

    public static void n(View view, boolean z10) {
        WindowInsetsControllerCompat K;
        if (z10 && (K = h0.K(view)) != null) {
            K.g(WindowInsetsCompat.p.c());
        } else {
            f(view).showSoftInput(view, 1);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public int f15203a;

        /* renamed from: b  reason: collision with root package name */
        public int f15204b;

        /* renamed from: c  reason: collision with root package name */
        public int f15205c;

        /* renamed from: d  reason: collision with root package name */
        public int f15206d;

        public d(int i10, int i11, int i12, int i13) {
            this.f15203a = i10;
            this.f15204b = i11;
            this.f15205c = i12;
            this.f15206d = i13;
        }

        public d(d dVar) {
            this.f15203a = dVar.f15203a;
            this.f15204b = dVar.f15204b;
            this.f15205c = dVar.f15205c;
            this.f15206d = dVar.f15206d;
        }
    }
}
