package com.google.android.material.bottomsheet;

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
import androidx.core.view.i0;
import androidx.core.view.w;
import androidx.core.view.x0;
import bh.k;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.internal.p;
import th.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends l {
    private oh.c A;
    private BottomSheetBehavior.g B;

    /* renamed from: q  reason: collision with root package name */
    private BottomSheetBehavior f15357q;

    /* renamed from: r  reason: collision with root package name */
    private FrameLayout f15358r;

    /* renamed from: s  reason: collision with root package name */
    private CoordinatorLayout f15359s;

    /* renamed from: t  reason: collision with root package name */
    private FrameLayout f15360t;

    /* renamed from: u  reason: collision with root package name */
    boolean f15361u;

    /* renamed from: v  reason: collision with root package name */
    boolean f15362v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f15363w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15364x;

    /* renamed from: y  reason: collision with root package name */
    private f f15365y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f15366z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.bottomsheet.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0176a implements w {
        C0176a() {
        }

        @Override // androidx.core.view.w
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            if (a.this.f15365y != null) {
                a.this.f15357q.J0(a.this.f15365y);
            }
            if (windowInsetsCompat != null) {
                a aVar = a.this;
                aVar.f15365y = new f(aVar.f15360t, windowInsetsCompat, null);
                a.this.f15365y.e(a.this.getWindow());
                a.this.f15357q.c0(a.this.f15365y);
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
            if (aVar.f15362v && aVar.isShowing() && a.this.t()) {
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
            if (a.this.f15362v) {
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
                if (aVar.f15362v) {
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
        private final Boolean f15372a;

        /* renamed from: b  reason: collision with root package name */
        private final WindowInsetsCompat f15373b;

        /* renamed from: c  reason: collision with root package name */
        private Window f15374c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f15375d;

        /* synthetic */ f(View view, WindowInsetsCompat windowInsetsCompat, C0176a c0176a) {
            this(view, windowInsetsCompat);
        }

        private void d(View view) {
            boolean booleanValue;
            if (view.getTop() < this.f15373b.q()) {
                Window window = this.f15374c;
                if (window != null) {
                    Boolean bool = this.f15372a;
                    if (bool == null) {
                        booleanValue = this.f15375d;
                    } else {
                        booleanValue = bool.booleanValue();
                    }
                    com.google.android.material.internal.c.f(window, booleanValue);
                }
                view.setPadding(view.getPaddingLeft(), this.f15373b.q() - view.getTop(), view.getPaddingRight(), view.getPaddingBottom());
            } else if (view.getTop() != 0) {
                Window window2 = this.f15374c;
                if (window2 != null) {
                    com.google.android.material.internal.c.f(window2, this.f15375d);
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
            if (this.f15374c != window) {
                this.f15374c = window;
                if (window != null) {
                    this.f15375d = x0.b(window, window.getDecorView()).c();
                }
            }
        }

        private f(View view, WindowInsetsCompat windowInsetsCompat) {
            ColorStateList backgroundTintList;
            this.f15373b = windowInsetsCompat;
            h u02 = BottomSheetBehavior.q0(view).u0();
            if (u02 != null) {
                backgroundTintList = u02.D();
            } else {
                backgroundTintList = view.getBackgroundTintList();
            }
            if (backgroundTintList != null) {
                this.f15372a = Boolean.valueOf(jh.a.h(backgroundTintList.getDefaultColor()));
                return;
            }
            Integer e10 = p.e(view);
            if (e10 != null) {
                this.f15372a = Boolean.valueOf(jh.a.h(e10.intValue()));
            } else {
                this.f15372a = null;
            }
        }
    }

    public a(Context context, int i10) {
        super(context, g(context, i10));
        this.f15362v = true;
        this.f15363w = true;
        this.B = new e();
        j(1);
        r();
    }

    private static int g(Context context, int i10) {
        if (i10 == 0) {
            TypedValue typedValue = new TypedValue();
            if (context.getTheme().resolveAttribute(bh.b.f6729d, typedValue, true)) {
                return typedValue.resourceId;
            }
            return k.f6929d;
        }
        return i10;
    }

    private FrameLayout o() {
        if (this.f15358r == null) {
            FrameLayout frameLayout = (FrameLayout) View.inflate(getContext(), bh.h.f6874b, null);
            this.f15358r = frameLayout;
            this.f15359s = (CoordinatorLayout) frameLayout.findViewById(bh.f.f6845e);
            FrameLayout frameLayout2 = (FrameLayout) this.f15358r.findViewById(bh.f.f6847f);
            this.f15360t = frameLayout2;
            BottomSheetBehavior q02 = BottomSheetBehavior.q0(frameLayout2);
            this.f15357q = q02;
            q02.c0(this.B);
            this.f15357q.U0(this.f15362v);
            this.A = new oh.c(this.f15357q, this.f15360t);
        }
        return this.f15358r;
    }

    private void r() {
        TypedArray obtainStyledAttributes = getContext().getTheme().obtainStyledAttributes(new int[]{bh.b.f6758u});
        this.f15366z = obtainStyledAttributes.getBoolean(0, false);
        obtainStyledAttributes.recycle();
    }

    private void u() {
        oh.c cVar = this.A;
        if (cVar == null) {
            return;
        }
        if (this.f15362v) {
            cVar.b();
        } else {
            cVar.d();
        }
    }

    private View v(int i10, View view, ViewGroup.LayoutParams layoutParams) {
        o();
        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) this.f15358r.findViewById(bh.f.f6845e);
        if (i10 != 0 && view == null) {
            view = getLayoutInflater().inflate(i10, (ViewGroup) coordinatorLayout, false);
        }
        if (this.f15366z) {
            i0.x0(this.f15358r, new C0176a());
        }
        this.f15360t.removeAllViews();
        if (layoutParams == null) {
            this.f15360t.addView(view);
        } else {
            this.f15360t.addView(view, layoutParams);
        }
        coordinatorLayout.findViewById(bh.f.f6844d0).setOnClickListener(new b());
        i0.k0(this.f15360t, new c());
        this.f15360t.setOnTouchListener(new d());
        return this.f15358r;
    }

    @Override // android.app.Dialog, android.content.DialogInterface
    public void cancel() {
        BottomSheetBehavior p10 = p();
        if (this.f15361u && p10.x0() != 5) {
            p10.c1(5);
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
            if (this.f15366z && Color.alpha(window.getNavigationBarColor()) < 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            FrameLayout frameLayout = this.f15358r;
            if (frameLayout != null) {
                frameLayout.setFitsSystemWindows(!z10);
            }
            CoordinatorLayout coordinatorLayout = this.f15359s;
            if (coordinatorLayout != null) {
                coordinatorLayout.setFitsSystemWindows(!z10);
            }
            x0.c(window, !z10);
            f fVar = this.f15365y;
            if (fVar != null) {
                fVar.e(window);
            }
        }
        u();
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
        f fVar = this.f15365y;
        if (fVar != null) {
            fVar.e(null);
        }
        oh.c cVar = this.A;
        if (cVar != null) {
            cVar.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void onStart() {
        super.onStart();
        BottomSheetBehavior bottomSheetBehavior = this.f15357q;
        if (bottomSheetBehavior != null && bottomSheetBehavior.x0() == 5) {
            this.f15357q.c1(4);
        }
    }

    public BottomSheetBehavior p() {
        if (this.f15357q == null) {
            o();
        }
        return this.f15357q;
    }

    public boolean q() {
        return this.f15361u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s() {
        this.f15357q.J0(this.B);
    }

    @Override // android.app.Dialog
    public void setCancelable(boolean z10) {
        super.setCancelable(z10);
        if (this.f15362v != z10) {
            this.f15362v = z10;
            BottomSheetBehavior bottomSheetBehavior = this.f15357q;
            if (bottomSheetBehavior != null) {
                bottomSheetBehavior.U0(z10);
            }
            if (getWindow() != null) {
                u();
            }
        }
    }

    @Override // android.app.Dialog
    public void setCanceledOnTouchOutside(boolean z10) {
        super.setCanceledOnTouchOutside(z10);
        if (z10 && !this.f15362v) {
            this.f15362v = true;
        }
        this.f15363w = z10;
        this.f15364x = true;
    }

    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(int i10) {
        super.setContentView(v(i10, null, null));
    }

    boolean t() {
        if (!this.f15364x) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(new int[]{16843611});
            this.f15363w = obtainStyledAttributes.getBoolean(0, true);
            obtainStyledAttributes.recycle();
            this.f15364x = true;
        }
        return this.f15363w;
    }

    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(View view) {
        super.setContentView(v(0, view, null));
    }

    @Override // androidx.appcompat.app.l, androidx.activity.ComponentDialog, android.app.Dialog
    public void setContentView(View view, ViewGroup.LayoutParams layoutParams) {
        super.setContentView(v(0, view, layoutParams));
    }
}
