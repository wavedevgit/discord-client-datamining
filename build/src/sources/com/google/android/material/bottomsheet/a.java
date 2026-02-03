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
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.core.view.w0;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.internal.o;
import oh.g;
import yg.h;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends l {
    private jh.c A;
    private BottomSheetBehavior.g B;

    /* renamed from: q  reason: collision with root package name */
    private BottomSheetBehavior f14238q;

    /* renamed from: r  reason: collision with root package name */
    private FrameLayout f14239r;

    /* renamed from: s  reason: collision with root package name */
    private CoordinatorLayout f14240s;

    /* renamed from: t  reason: collision with root package name */
    private FrameLayout f14241t;

    /* renamed from: u  reason: collision with root package name */
    boolean f14242u;

    /* renamed from: v  reason: collision with root package name */
    boolean f14243v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f14244w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f14245x;

    /* renamed from: y  reason: collision with root package name */
    private f f14246y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f14247z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.bottomsheet.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0163a implements v {
        C0163a() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            if (a.this.f14246y != null) {
                a.this.f14238q.G0(a.this.f14246y);
            }
            if (windowInsetsCompat != null) {
                a aVar = a.this;
                aVar.f14246y = new f(aVar.f14241t, windowInsetsCompat, null);
                a.this.f14246y.e(a.this.getWindow());
                a.this.f14238q.c0(a.this.f14246y);
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
            if (aVar.f14243v && aVar.isShowing() && a.this.s()) {
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
            if (a.this.f14243v) {
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
                if (aVar.f14243v) {
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
        private final Boolean f14253a;

        /* renamed from: b  reason: collision with root package name */
        private final WindowInsetsCompat f14254b;

        /* renamed from: c  reason: collision with root package name */
        private Window f14255c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f14256d;

        /* synthetic */ f(View view, WindowInsetsCompat windowInsetsCompat, C0163a c0163a) {
            this(view, windowInsetsCompat);
        }

        private void d(View view) {
            boolean booleanValue;
            if (view.getTop() < this.f14254b.q()) {
                Window window = this.f14255c;
                if (window != null) {
                    Boolean bool = this.f14253a;
                    if (bool == null) {
                        booleanValue = this.f14256d;
                    } else {
                        booleanValue = bool.booleanValue();
                    }
                    com.google.android.material.internal.c.f(window, booleanValue);
                }
                view.setPadding(view.getPaddingLeft(), this.f14254b.q() - view.getTop(), view.getPaddingRight(), view.getPaddingBottom());
            } else if (view.getTop() != 0) {
                Window window2 = this.f14255c;
                if (window2 != null) {
                    com.google.android.material.internal.c.f(window2, this.f14256d);
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
            if (this.f14255c != window) {
                this.f14255c = window;
                if (window != null) {
                    this.f14256d = w0.b(window, window.getDecorView()).c();
                }
            }
        }

        private f(View view, WindowInsetsCompat windowInsetsCompat) {
            ColorStateList r10;
            this.f14254b = windowInsetsCompat;
            g u02 = BottomSheetBehavior.q0(view).u0();
            if (u02 != null) {
                r10 = u02.x();
            } else {
                r10 = h0.r(view);
            }
            if (r10 != null) {
                this.f14253a = Boolean.valueOf(eh.a.h(r10.getDefaultColor()));
                return;
            }
            Integer e10 = o.e(view);
            if (e10 != null) {
                this.f14253a = Boolean.valueOf(eh.a.h(e10.intValue()));
            } else {
                this.f14253a = null;
            }
        }
    }

    public a(Context context, int i10) {
        super(context, f(context, i10));
        this.f14243v = true;
        this.f14244w = true;
        this.B = new e();
        i(1);
        this.f14247z = getContext().getTheme().obtainStyledAttributes(new int[]{yg.b.f54108t}).getBoolean(0, false);
    }

    private static int f(Context context, int i10) {
        if (i10 == 0) {
            TypedValue typedValue = new TypedValue();
            if (context.getTheme().resolveAttribute(yg.b.f54083c, typedValue, true)) {
                return typedValue.resourceId;
            }
            return j.f54249c;
        }
        return i10;
    }

    private FrameLayout o() {
        if (this.f14239r == null) {
            FrameLayout frameLayout = (FrameLayout) View.inflate(getContext(), h.f54201a, null);
            this.f14239r = frameLayout;
            this.f14240s = (CoordinatorLayout) frameLayout.findViewById(yg.f.f54174e);
            FrameLayout frameLayout2 = (FrameLayout) this.f14239r.findViewById(yg.f.f54175f);
            this.f14241t = frameLayout2;
            BottomSheetBehavior q02 = BottomSheetBehavior.q0(frameLayout2);
            this.f14238q = q02;
            q02.c0(this.B);
            this.f14238q.Q0(this.f14243v);
            this.A = new jh.c(this.f14238q, this.f14241t);
        }
        return this.f14239r;
    }

    private void t() {
        jh.c cVar = this.A;
        if (cVar == null) {
            return;
        }
        if (this.f14243v) {
            cVar.b();
        } else {
            cVar.d();
        }
    }

    private View u(int i10, View view, ViewGroup.LayoutParams layoutParams) {
        o();
        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) this.f14239r.findViewById(yg.f.f54174e);
        if (i10 != 0 && view == null) {
            view = getLayoutInflater().inflate(i10, (ViewGroup) coordinatorLayout, false);
        }
        if (this.f14247z) {
            h0.D0(this.f14241t, new C0163a());
        }
        this.f14241t.removeAllViews();
        if (layoutParams == null) {
            this.f14241t.addView(view);
        } else {
            this.f14241t.addView(view, layoutParams);
        }
        coordinatorLayout.findViewById(yg.f.U).setOnClickListener(new b());
        h0.n0(this.f14241t, new c());
        this.f14241t.setOnTouchListener(new d());
        return this.f14239r;
    }

    @Override // android.app.Dialog, android.content.DialogInterface
    public void cancel() {
        BottomSheetBehavior p10 = p();
        if (this.f14242u && p10.w0() != 5) {
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
            if (this.f14247z && Color.alpha(window.getNavigationBarColor()) < 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            FrameLayout frameLayout = this.f14239r;
            if (frameLayout != null) {
                frameLayout.setFitsSystemWindows(!z10);
            }
            CoordinatorLayout coordinatorLayout = this.f14240s;
            if (coordinatorLayout != null) {
                coordinatorLayout.setFitsSystemWindows(!z10);
            }
            w0.c(window, !z10);
            f fVar = this.f14246y;
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
        f fVar = this.f14246y;
        if (fVar != null) {
            fVar.e(null);
        }
        jh.c cVar = this.A;
        if (cVar != null) {
            cVar.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentDialog, android.app.Dialog
    public void onStart() {
        super.onStart();
        BottomSheetBehavior bottomSheetBehavior = this.f14238q;
        if (bottomSheetBehavior != null && bottomSheetBehavior.w0() == 5) {
            this.f14238q.Y0(4);
        }
    }

    public BottomSheetBehavior p() {
        if (this.f14238q == null) {
            o();
        }
        return this.f14238q;
    }

    public boolean q() {
        return this.f14242u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f14238q.G0(this.B);
    }

    boolean s() {
        if (!this.f14245x) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(new int[]{16843611});
            this.f14244w = obtainStyledAttributes.getBoolean(0, true);
            obtainStyledAttributes.recycle();
            this.f14245x = true;
        }
        return this.f14244w;
    }

    @Override // android.app.Dialog
    public void setCancelable(boolean z10) {
        super.setCancelable(z10);
        if (this.f14243v != z10) {
            this.f14243v = z10;
            BottomSheetBehavior bottomSheetBehavior = this.f14238q;
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
        if (z10 && !this.f14243v) {
            this.f14243v = true;
        }
        this.f14244w = z10;
        this.f14245x = true;
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
