package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.ContextThemeWrapper;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a extends ViewGroup {

    /* renamed from: d  reason: collision with root package name */
    protected final C0019a f2019d;

    /* renamed from: e  reason: collision with root package name */
    protected final Context f2020e;

    /* renamed from: i  reason: collision with root package name */
    protected ActionMenuView f2021i;

    /* renamed from: o  reason: collision with root package name */
    protected c f2022o;

    /* renamed from: p  reason: collision with root package name */
    protected int f2023p;

    /* renamed from: q  reason: collision with root package name */
    protected androidx.core.view.r0 f2024q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f2025r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f2026s;

    /* renamed from: androidx.appcompat.widget.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    protected class C0019a implements androidx.core.view.s0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f2027a = false;

        /* renamed from: b  reason: collision with root package name */
        int f2028b;

        protected C0019a() {
        }

        @Override // androidx.core.view.s0
        public void a(View view) {
            this.f2027a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (this.f2027a) {
                return;
            }
            a aVar = a.this;
            aVar.f2024q = null;
            a.super.setVisibility(this.f2028b);
        }

        @Override // androidx.core.view.s0
        public void c(View view) {
            a.super.setVisibility(0);
            this.f2027a = false;
        }

        public C0019a d(androidx.core.view.r0 r0Var, int i10) {
            a.this.f2024q = r0Var;
            this.f2028b = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f2019d = new C0019a();
        TypedValue typedValue = new TypedValue();
        if (context.getTheme().resolveAttribute(f.a.f22198a, typedValue, true) && typedValue.resourceId != 0) {
            this.f2020e = new ContextThemeWrapper(context, typedValue.resourceId);
        } else {
            this.f2020e = context;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static int d(int i10, int i11, boolean z10) {
        return z10 ? i10 - i11 : i10 + i11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int c(View view, int i10, int i11, int i12) {
        view.measure(View.MeasureSpec.makeMeasureSpec(i10, Integer.MIN_VALUE), i11);
        return Math.max(0, (i10 - view.getMeasuredWidth()) - i12);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(View view, int i10, int i11, int i12, boolean z10) {
        int measuredWidth = view.getMeasuredWidth();
        int measuredHeight = view.getMeasuredHeight();
        int i13 = i11 + ((i12 - measuredHeight) / 2);
        if (z10) {
            view.layout(i10 - measuredWidth, i13, i10, measuredHeight + i13);
        } else {
            view.layout(i10, i13, i10 + measuredWidth, measuredHeight + i13);
        }
        if (z10) {
            return -measuredWidth;
        }
        return measuredWidth;
    }

    public androidx.core.view.r0 f(int i10, long j10) {
        androidx.core.view.r0 r0Var = this.f2024q;
        if (r0Var != null) {
            r0Var.c();
        }
        if (i10 == 0) {
            if (getVisibility() != 0) {
                setAlpha(0.0f);
            }
            androidx.core.view.r0 b10 = androidx.core.view.h0.e(this).b(1.0f);
            b10.e(j10);
            b10.g(this.f2019d.d(b10, i10));
            return b10;
        }
        androidx.core.view.r0 b11 = androidx.core.view.h0.e(this).b(0.0f);
        b11.e(j10);
        b11.g(this.f2019d.d(b11, i10));
        return b11;
    }

    public int getAnimatedVisibility() {
        if (this.f2024q != null) {
            return this.f2019d.f2028b;
        }
        return getVisibility();
    }

    public int getContentHeight() {
        return this.f2023p;
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(null, f.j.f22336a, f.a.f22200c, 0);
        setContentHeight(obtainStyledAttributes.getLayoutDimension(f.j.f22381j, 0));
        obtainStyledAttributes.recycle();
        c cVar = this.f2022o;
        if (cVar != null) {
            cVar.F(configuration);
        }
    }

    @Override // android.view.View
    public boolean onHoverEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 9) {
            this.f2026s = false;
        }
        if (!this.f2026s) {
            boolean onHoverEvent = super.onHoverEvent(motionEvent);
            if (actionMasked == 9 && !onHoverEvent) {
                this.f2026s = true;
            }
        }
        if (actionMasked == 10 || actionMasked == 3) {
            this.f2026s = false;
        }
        return true;
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 0) {
            this.f2025r = false;
        }
        if (!this.f2025r) {
            boolean onTouchEvent = super.onTouchEvent(motionEvent);
            if (actionMasked == 0 && !onTouchEvent) {
                this.f2025r = true;
            }
        }
        if (actionMasked == 1 || actionMasked == 3) {
            this.f2025r = false;
        }
        return true;
    }

    public abstract void setContentHeight(int i10);

    @Override // android.view.View
    public void setVisibility(int i10) {
        if (i10 != getVisibility()) {
            androidx.core.view.r0 r0Var = this.f2024q;
            if (r0Var != null) {
                r0Var.c();
            }
            super.setVisibility(i10);
        }
    }
}
