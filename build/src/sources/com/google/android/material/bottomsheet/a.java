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
    private BottomSheetBehavior f15641q;

    /* renamed from: r  reason: collision with root package name */
    private FrameLayout f15642r;

    /* renamed from: s  reason: collision with root package name */
    private CoordinatorLayout f15643s;

    /* renamed from: t  reason: collision with root package name */
    private FrameLayout f15644t;

    /* renamed from: u  reason: collision with root package name */
    boolean f15645u;

    /* renamed from: v  reason: collision with root package name */
    boolean f15646v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f15647w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15648x;

    /* renamed from: y  reason: collision with root package name */
    private f f15649y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f15650z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.bottomsheet.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0177a implements v {
        C0177a() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            if (a.this.f15649y != null) {
                a.this.f15641q.G0(a.this.f15649y);
            }
            if (windowInsetsCompat != null) {
                a aVar = a.this;
                aVar.f15649y = new f(aVar.f15644t, windowInsetsCompat, null);
                a.this.f15649y.e(a.this.getWindow());
                a.this.f15641q.c0(a.this.f15649y);
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
            if (aVar.f15646v && aVar.isShowing() && a.this.s()) {
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
            if (a.this.f15646v) {
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
                if (aVar.f15646v) {
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
        private final Boolean f15656a;

        /* renamed from: b  reason: collision with root package name */
        private final WindowInsetsCompat f15657b;

        /* renamed from: c  reason: collision with root package name */
        private Window f15658c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f15659d;

        /* synthetic */ f(View view, WindowInsetsCompat windowInsetsCompat, C0177a c0177a) {
            this(view, windowInsetsCompat);
        }

        private void d(View view) {
            boolean booleanValue;
            if (view.getTop() < this.f15657b.q()) {
                Window window = this.f15658c;
                if (window != null) {
                    Boolean bool = this.f15656a;
                    if (bool == null) {
                        booleanValue = this.f15659d;
                    } else {
                        booleanValue = bool.booleanValue();
                    }
                    com.google.android.material.internal.c.f(window, booleanValue);
                }
                view.setPadding(view.getPaddingLeft(), this.f15657b.q() - view.getTop(), view.getPaddingRight(), view.getPaddingBottom());
            } else if (view.getTop() != 0) {
                Window window2 = this.f15658c;
                if (window2 != null) {
                    com.google.android.material.internal.c.f(window2, this.f15659d);
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
            if (this.f15658c != window) {
                this.f15658c = window;
                if (window != null) {
                    this.f15659d = w0.b(window, window.getDecorView()).c();
                }
            }
        }

        private f(View view, WindowInsetsCompat windowInsetsCompat) {
            ColorStateList r10;
            this.f15657b = windowInsetsCompat;
            g u02 = BottomSheetBehavior.q0(view).u0();
            if (u02 != null) {
                r10 = u02.x();
            } else {
                r10 = h0.r(view);
            }
            if (r10 != null) {
                this.f15656a = Boolean.valueOf(eh.a.h(r10.getDefaultColor()));
                return;
            }
            Integer e10 = o.e(view);
            if (e10 != null) {
                this.f15656a = Boolean.valueOf(eh.a.h(e10.intValue()));
            } else {
                this.f15656a = null;
            }
        }
    }

    public a(Context context, int i10) {
        super(context, g(context, i10));
        this.f15646v = true;
        this.f15647w = true;
        this.B = new e();
        j(1);
        this.f15650z = getContext().getTheme().obtainStyledAttributes(new int[]{yg.b.f54375t}).getBoolean(0, false);
    }

    private static int g(Context context, int i10) {
        if (i10 == 0) {
            TypedValue typedValue = new TypedValue();
            if (context.getTheme().resolveAttribute(yg.b.f54350c, typedValue, true)) {
                return typedValue.resourceId;
            }
            return j.f54516c;
        }
        return i10;
    }

    private FrameLayout o() {
        if (this.f15642r == null) {
            FrameLayout frameLayout = (FrameLayout) View.inflate(getContext(), h.f54468a, null);
            this.f15642r = frameLayout;
            this.f15643s = (CoordinatorLayout) frameLayout.findViewById(yg.f.f54441e);
            FrameLayout frameLayout2 = (FrameLayout) this.f15642r.findViewById(yg.f.f54442f);
            this.f15644t = frameLayout2;
            BottomSheetBehavior q02 = BottomSheetBehavior.q0(frameLayout2);
            this.f15641q = q02;
            q02.c0(this.B);
            this.f15641q.Q0(this.f15646v);
            this.A = new jh.c(this.f15641q, this.f15644t);
        }
        return this.f15642r;
    }

    private void t() {
        jh.c cVar = this.A;
        if (cVar == null) {
            return;
        }
        if (this.f15646v) {
            cVar.b();
        } else {
            cVar.d();
        }
    }

    private View u(int i10, View view, ViewGroup.LayoutParams layoutParams) {
        o();
        CoordinatorLayout coordinatorLayout = (CoordinatorLayout) this.f15642r.findViewById(yg.f.f54441e);
        if (i10 != 0 && view == null) {
            view = getLayoutInflater().inflate(i10, (ViewGroup) coordinatorLayout, false);
        }
        if (this.f15650z) {
            h0.D0(this.f15644t, new C0177a());
        }
        this.f15644t.removeAllViews();
        if (layoutParams == null) {
            this.f15644t.addView(view);
        } else {
            this.f15644t.addView(view, layoutParams);
        }
        coordinatorLayout.findViewById(yg.f.U).setOnClickListener(new b());
        h0.n0(this.f15644t, new c());
        this.f15644t.setOnTouchListener(new d());
        return this.f15642r;
    }

    @Override // android.app.Dialog, android.content.DialogInterface
    public void cancel() {
        BottomSheetBehavior p10 = p();
        if (this.f15645u && p10.w0() != 5) {
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
            if (this.f15650z && Color.alpha(window.getNavigationBarColor()) < 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            FrameLayout frameLayout = this.f15642r;
            if (frameLayout != null) {
                frameLayout.setFitsSystemWindows(!z10);
            }
            CoordinatorLayout coordinatorLayout = this.f15643s;
            if (coordinatorLayout != null) {
                coordinatorLayout.setFitsSystemWindows(!z10);
            }
            w0.c(window, !z10);
            f fVar = this.f15649y;
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
        f fVar = this.f15649y;
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
        BottomSheetBehavior bottomSheetBehavior = this.f15641q;
        if (bottomSheetBehavior != null && bottomSheetBehavior.w0() == 5) {
            this.f15641q.Y0(4);
        }
    }

    public BottomSheetBehavior p() {
        if (this.f15641q == null) {
            o();
        }
        return this.f15641q;
    }

    public boolean q() {
        return this.f15645u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f15641q.G0(this.B);
    }

    boolean s() {
        if (!this.f15648x) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(new int[]{16843611});
            this.f15647w = obtainStyledAttributes.getBoolean(0, true);
            obtainStyledAttributes.recycle();
            this.f15648x = true;
        }
        return this.f15647w;
    }

    @Override // android.app.Dialog
    public void setCancelable(boolean z10) {
        super.setCancelable(z10);
        if (this.f15646v != z10) {
            this.f15646v = z10;
            BottomSheetBehavior bottomSheetBehavior = this.f15641q;
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
        if (z10 && !this.f15646v) {
            this.f15646v = true;
        }
        this.f15647w = z10;
        this.f15648x = true;
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
