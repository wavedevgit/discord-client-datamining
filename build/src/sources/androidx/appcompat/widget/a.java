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
    protected final C0022a f1609d;

    /* renamed from: e  reason: collision with root package name */
    protected final Context f1610e;

    /* renamed from: i  reason: collision with root package name */
    protected ActionMenuView f1611i;

    /* renamed from: o  reason: collision with root package name */
    protected c f1612o;

    /* renamed from: p  reason: collision with root package name */
    protected int f1613p;

    /* renamed from: q  reason: collision with root package name */
    protected androidx.core.view.r0 f1614q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f1615r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f1616s;

    /* renamed from: androidx.appcompat.widget.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    protected class C0022a implements androidx.core.view.s0 {

        /* renamed from: a  reason: collision with root package name */
        private boolean f1617a = false;

        /* renamed from: b  reason: collision with root package name */
        int f1618b;

        protected C0022a() {
        }

        @Override // androidx.core.view.s0
        public void a(View view) {
            this.f1617a = true;
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            if (this.f1617a) {
                return;
            }
            a aVar = a.this;
            aVar.f1614q = null;
            a.super.setVisibility(this.f1618b);
        }

        @Override // androidx.core.view.s0
        public void c(View view) {
            a.super.setVisibility(0);
            this.f1617a = false;
        }

        public C0022a d(androidx.core.view.r0 r0Var, int i10) {
            a.this.f1614q = r0Var;
            this.f1618b = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f1609d = new C0022a();
        TypedValue typedValue = new TypedValue();
        if (context.getTheme().resolveAttribute(f.a.f23280a, typedValue, true) && typedValue.resourceId != 0) {
            this.f1610e = new ContextThemeWrapper(context, typedValue.resourceId);
        } else {
            this.f1610e = context;
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
        androidx.core.view.r0 r0Var = this.f1614q;
        if (r0Var != null) {
            r0Var.c();
        }
        if (i10 == 0) {
            if (getVisibility() != 0) {
                setAlpha(0.0f);
            }
            androidx.core.view.r0 b10 = androidx.core.view.h0.e(this).b(1.0f);
            b10.e(j10);
            b10.g(this.f1609d.d(b10, i10));
            return b10;
        }
        androidx.core.view.r0 b11 = androidx.core.view.h0.e(this).b(0.0f);
        b11.e(j10);
        b11.g(this.f1609d.d(b11, i10));
        return b11;
    }

    public int getAnimatedVisibility() {
        if (this.f1614q != null) {
            return this.f1609d.f1618b;
        }
        return getVisibility();
    }

    public int getContentHeight() {
        return this.f1613p;
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(null, f.j.f23418a, f.a.f23282c, 0);
        setContentHeight(obtainStyledAttributes.getLayoutDimension(f.j.f23463j, 0));
        obtainStyledAttributes.recycle();
        c cVar = this.f1612o;
        if (cVar != null) {
            cVar.F(configuration);
        }
    }

    @Override // android.view.View
    public boolean onHoverEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 9) {
            this.f1616s = false;
        }
        if (!this.f1616s) {
            boolean onHoverEvent = super.onHoverEvent(motionEvent);
            if (actionMasked == 9 && !onHoverEvent) {
                this.f1616s = true;
            }
        }
        if (actionMasked == 10 || actionMasked == 3) {
            this.f1616s = false;
        }
        return true;
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 0) {
            this.f1615r = false;
        }
        if (!this.f1615r) {
            boolean onTouchEvent = super.onTouchEvent(motionEvent);
            if (actionMasked == 0 && !onTouchEvent) {
                this.f1615r = true;
            }
        }
        if (actionMasked == 1 || actionMasked == 3) {
            this.f1615r = false;
        }
        return true;
    }

    public abstract void setContentHeight(int i10);

    @Override // android.view.View
    public void setVisibility(int i10) {
        if (i10 != getVisibility()) {
            androidx.core.view.r0 r0Var = this.f1614q;
            if (r0Var != null) {
                r0Var.c();
            }
            super.setVisibility(i10);
        }
    }
}
