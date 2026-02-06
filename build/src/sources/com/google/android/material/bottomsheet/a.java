package com.google.android.material.bottomsheet;

import ah.h;
import ah.j;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.FrameLayout;
import androidx.appcompat.app.l;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.core.view.w0;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.internal.o;
import qh.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends l {
    private lh.c A;
    private BottomSheetBehavior.g B;

    /* renamed from: q  reason: collision with root package name */
    private BottomSheetBehavior f14612q;

    /* renamed from: r  reason: collision with root package name */
    private FrameLayout f14613r;

    /* renamed from: s  reason: collision with root package name */
    private CoordinatorLayout f14614s;

    /* renamed from: t  reason: collision with root package name */
    private FrameLayout f14615t;

    /* renamed from: u  reason: collision with root package name */
    boolean f14616u;

    /* renamed from: v  reason: collision with root package name */
    boolean f14617v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f14618w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f14619x;

    /* renamed from: y  reason: collision with root package name */
    private f f14620y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f14621z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.bottomsheet.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0171a implements v {
        C0171a() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            if (a.this.f14620y != null) {
                a.this.f14612q.G0(a.this.f14620y);
            }
            if (windowInsetsCompat != null) {
                a aVar = a.this;
                aVar.f14620y = new f(aVar.f14615t, windowInsetsCompat, null);
                a.this.f14620y.e(a.this.getWindow());
                a.this.f14612q.c0(a.this.f14620y);
            }
            return windowInsetsCompat;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements View.OnClickListener {
        b() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            a aVar = a.this;
            if (aVar.f14617v && aVar.isShowing() && a.this.s()) {
                a.this.cancel();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends androidx.core.view.a {
        c() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            if (a.this.f14617v) {
                accessibilityNodeInfoCompat.a(1048576);
                accessibilityNodeInfoCompat.B0(true);
                return;
            }
            accessibilityNodeInfoCompat.B0(false);
        }

        @Override // androidx.core.view.a
        public boolean performAccessibilityAction(View view, int i10, Bundle bundle) {
            if (i10 == 1048576) {
                a aVar = a.this;
                if (aVar.f14617v) {
                    aVar.cancel();
                    return true;
                }
            }
            return super.performAccessibilityAction(view, i10, bundle);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements View.OnTouchListener {
        d() {
        }

        @Override // android.view.View.OnTouchListener
        public boolean onTouch(View view, MotionEvent motionEvent) {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class e extends BottomSheetBehavior.g {
        e() {
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View view, float f10) {
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View view, int i10) {
            if (i10 == 5) {
                a.this.cancel();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class f extends BottomSheetBehavior.g {

        /* renamed from: a  reason: collision with root package name */
        private final Boolean f14627a;

        /* renamed from: b  reason: collision with root package name */
        private final WindowInsetsCompat f14628b;

        /* renamed from: c  reason: collision with root package name */
        private Window f14629c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f14630d;

        /* synthetic */ f(View view, WindowInsetsCompat windowInsetsCompat, C0171a c0171a) {
            this(view, windowInsetsCompat);
        }

        private void d(View view) {
            boolean booleanValue;
            if (view.getTop() < this.f14628b.q()) {
                Window window = this.f14629c;
                if (window != null) {
                    Boolean bool = this.f14627a;
                    if (bool == null) {
                        booleanValue = this.f14630d;
                    } else {
                        booleanValue = bool.booleanValue();
                    }
                    com.google.android.material.internal.c.f(window, booleanValue);
                }
                view.setPadding(view.getPaddingLeft(), this.f14628b.q() - view.getTop(), view.getPaddingRight(), view.getPaddingBottom());
            } else if (view.getTop() != 0) {
                Window window2 = this.f14629c;
                if (window2 != null) {
                    com.google.android.material.internal.c.f(window2, this.f14630d);
                }
                view.setPadding(view.getPaddingLeft(), 0, view.getPaddingRight(), view.getPaddingBottom());
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        void a(View view) {
            d(view);
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View view, float f10) {
            d(view);
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View view, int i10) {
            d(view);
        }

        void e(Window window) {
            if (this.f14629c != window) {
                this.f14629c = window;
                if (window != null) {
                    this.f14630d = w0.b(window, window.getDecorView()).c();
                }
            }
        }

        private f(View view, WindowInsetsCompat windowInsetsCompat) {
            ColorStateList r10;
            this.f14628b = windowInsetsCompat;
            g u02 = BottomSheetBehavior.q0(view).u0();
            if (u02 != null) {
                r10 = u02.x();
            } else {
                r10 = h0.r(view);
            }
            if (r10 != null) {
                this.f14627a = Boolean.valueOf(gh.a.h(r10.getDefaultColor()));
                return;
            }
            Integer e10 = o.e(view);
            if (e10 != null) {
                this.f14627a = Boolean.valueOf(gh.a.h(e10.intValue()));
            } else {
                this.f14627a = null;
            }
        }
    }

    public a(Context context, int i10) {
        super(context, g(context, i10));
        this.f14617v = true;
        this.f14618w = true;
        this.B = new e();
        j(1);
        this.f14621z = getContext().getTheme().obtainStyledAttributes(new int[]{ah.b.f658t}).getBoolean(0, false);
    }

    private static int g(Context context, int i10) {
        if (i10 == 0) {
            TypedValue typedValue = new TypedValue();
            if (context.getTheme().resolveAttribute(ah.b.f633c, typedValue, true)) {
                return typedValue.resourceId;
            }
            return j.f799c;
        }
        return i10;
    }

    private FrameLayout o() {
        if (this.f14613r == null) {
            FrameLayout frameLayout = (FrameLayout) View.inflate(getContext(), h.f751a, null);
            this.f14613r = frameLayout;
            this.f14614s = (CoordinatorLayout) frameLayout.findViewById(ah.f.f724e);
            FrameLayout frameLayout2 = (FrameLayout) this.f14613r.findViewById(ah.f.f725f);
            this.f14615t = frameLayout2;
            BottomSheetBehavior q02 = BottomSheetBehavior.q0(frameLayout2);
            this.f14612q = q02;
            q02.c0(this.B);
            this.f14612q.Q0(this.f14617v);
            this.A = new lh.c(this.f14612q, this.f14615t);
        }
        return this.f14613r;
    }

    private void t() {
        lh.c cVar = this.A;
        if (cVar == null) {
            return;
        }
        if (this.f14617v) {
            cVar.b();
        } else {
            cVar.d();
        }
    }

    private View u(int i10, View view, ViewGroup.LayoutParams layoutParams) {
        o();
        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) this.f14613r.findViewById(ah.f.f724e);
        if (i10 != 0 && view == null) {
            view = getLayoutInflater().inflate(i10, (ViewGroup) coordinatorLayout, false);
        }
        if (this.f14621z) {
            h0.D0(this.f14615t, new C0171a());
        }
        this.f14615t.removeAllViews();
        if (layoutParams == null) {
            this.f14615t.addView(view);
        } else {
            this.f14615t.addView(view, layoutParams);
        }
        coordinatorLayout.findViewById(ah.f.U).setOnClickListener(new b());
        h0.n0(this.f14615t, new c());
        this.f14615t.setOnTouchListener(new d());
        return this.f14613r;
    }

    @Override // android.app.Dialog, android.content.DialogInterface
    public void cancel() {
        BottomSheetBehavior p10 = p();
        if (this.f14616u && p10.w0() != 5) {
            p10.Y0(5);
        } else {
            super.cancel();
        }
    }

    @Override // android.app.Dialog, android.view.Window.Callback
    public void onAttachedToWindow() {
        boolean z10;
        super.onAttachedToWindow();
        Window window = getWindow();
        if (window != null) {
            if (this.f14621z && Color.alpha(window.getNavigationBarColor()) < 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            FrameLayout frameLayout = this.f14613r;
            if (frameLayout != null) {
                frameLayout.setFitsSystemWindows(!z10);
            }
            CoordinatorLayout coordinatorLayout = this.f14614s;
            if (coordinatorLayout != null) {
                coordinatorLayout.setFitsSystemWindows(!z10);
            }
            w0.c(window, !z10);
            f fVar = this.f14620y;
            if (fVar != null) {
                fVar.e(window);
            }
        }
        t();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Window window = getWindow();
        if (window != null) {
            window.setStatusBarColor(0);
            window.addFlags(Integer.MIN_VALUE);
            window.setLayout(-1, -1);
        }
    }

    @Override // android.app.Dialog, android.view.Window.Callback
    public void onDetachedFromWindow() {
        f fVar = this.f14620y;
        if (fVar != null) {
            fVar.e(null);
        }
        lh.c cVar = this.A;
        if (cVar != null) {
            cVar.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void onStart() {
        super.onStart();
        BottomSheetBehavior bottomSheetBehavior = this.f14612q;
        if (bottomSheetBehavior != null && bottomSheetBehavior.w0() == 5) {
            this.f14612q.Y0(4);
        }
    }

    public BottomSheetBehavior p() {
        if (this.f14612q == null) {
            o();
        }
        return this.f14612q;
    }

    public boolean q() {
        return this.f14616u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f14612q.G0(this.B);
    }

    boolean s() {
        if (!this.f14619x) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(new int[]{16843611});
            this.f14618w = obtainStyledAttributes.getBoolean(0, true);
            obtainStyledAttributes.recycle();
            this.f14619x = true;
        }
        return this.f14618w;
    }

    @Override // android.app.Dialog
    public void setCancelable(boolean z10) {
        super.setCancelable(z10);
        if (this.f14617v != z10) {
            this.f14617v = z10;
            BottomSheetBehavior bottomSheetBehavior = this.f14612q;
            if (bottomSheetBehavior != null) {
                bottomSheetBehavior.Q0(z10);
            }
            if (getWindow() != null) {
                t();
            }
        }
    }

    @Override // android.app.Dialog
    public void setCanceledOnTouchOutside(boolean z10) {
        super.setCanceledOnTouchOutside(z10);
        if (z10 && !this.f14617v) {
            this.f14617v = true;
        }
        this.f14618w = z10;
        this.f14619x = true;
    }

    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(int i10) {
        super.setContentView(u(i10, null, null));
    }

    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(View view) {
        super.setContentView(u(0, view, null));
    }

    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(View view, ViewGroup.LayoutParams layoutParams) {
        super.setContentView(u(0, view, layoutParams));
    }
}
