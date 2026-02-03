package com.google.android.material.progressindicator;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewParent;
import android.widget.ProgressBar;
import androidx.annotation.NonNull;
import androidx.core.view.h0;
import com.google.android.material.internal.l;
import java.util.Arrays;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a extends ProgressBar {

    /* renamed from: z  reason: collision with root package name */
    static final int f15861z = yg.j.f54512x;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.progressindicator.b f15862d;

    /* renamed from: e  reason: collision with root package name */
    private int f15863e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f15864i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15865o;

    /* renamed from: p  reason: collision with root package name */
    private final int f15866p;

    /* renamed from: q  reason: collision with root package name */
    private final int f15867q;

    /* renamed from: r  reason: collision with root package name */
    private long f15868r;

    /* renamed from: s  reason: collision with root package name */
    kh.a f15869s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f15870t;

    /* renamed from: u  reason: collision with root package name */
    private int f15871u;

    /* renamed from: v  reason: collision with root package name */
    private final Runnable f15872v;

    /* renamed from: w  reason: collision with root package name */
    private final Runnable f15873w;

    /* renamed from: x  reason: collision with root package name */
    private final androidx.vectordrawable.graphics.drawable.b f15874x;

    /* renamed from: y  reason: collision with root package name */
    private final androidx.vectordrawable.graphics.drawable.b f15875y;

    /* renamed from: com.google.android.material.progressindicator.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class RunnableC0190a implements Runnable {
        RunnableC0190a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.k();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.j();
            a.this.f15868r = -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends androidx.vectordrawable.graphics.drawable.b {
        c() {
        }

        @Override // androidx.vectordrawable.graphics.drawable.b
        public void b(Drawable drawable) {
            a.this.setIndeterminate(false);
            a aVar = a.this;
            aVar.o(aVar.f15863e, a.this.f15864i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends androidx.vectordrawable.graphics.drawable.b {
        d() {
        }

        @Override // androidx.vectordrawable.graphics.drawable.b
        public void b(Drawable drawable) {
            super.b(drawable);
            if (!a.this.f15870t) {
                a aVar = a.this;
                aVar.setVisibility(aVar.f15871u);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(rh.a.c(context, attributeSet, i10, f15861z), attributeSet, i10);
        this.f15868r = -1L;
        this.f15870t = false;
        this.f15871u = 4;
        this.f15872v = new RunnableC0190a();
        this.f15873w = new b();
        this.f15874x = new c();
        this.f15875y = new d();
        Context context2 = getContext();
        this.f15862d = i(context2, attributeSet);
        TypedArray i12 = l.i(context2, attributeSet, k.G, i10, i11, new int[0]);
        this.f15866p = i12.getInt(k.M, -1);
        this.f15867q = Math.min(i12.getInt(k.K, -1), 1000);
        i12.recycle();
        this.f15869s = new kh.a();
        this.f15865o = true;
    }

    private h getCurrentDrawingDelegate() {
        if (isIndeterminate()) {
            if (getIndeterminateDrawable() == null) {
                return null;
            }
            return getIndeterminateDrawable().v();
        } else if (getProgressDrawable() == null) {
            return null;
        } else {
            return getProgressDrawable().w();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j() {
        ((g) getCurrentDrawable()).q(false, false, true);
        if (m()) {
            setVisibility(4);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void k() {
        if (this.f15867q > 0) {
            this.f15868r = SystemClock.uptimeMillis();
        }
        setVisibility(0);
    }

    private boolean m() {
        if (getProgressDrawable() == null || !getProgressDrawable().isVisible()) {
            if (getIndeterminateDrawable() != null && getIndeterminateDrawable().isVisible()) {
                return false;
            }
            return true;
        }
        return false;
    }

    private void n() {
        if (getProgressDrawable() != null && getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().u().d(this.f15874x);
        }
        if (getProgressDrawable() != null) {
            getProgressDrawable().m(this.f15875y);
        }
        if (getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().m(this.f15875y);
        }
    }

    private void p() {
        if (getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().s(this.f15875y);
            getIndeterminateDrawable().u().h();
        }
        if (getProgressDrawable() != null) {
            getProgressDrawable().s(this.f15875y);
        }
    }

    @Override // android.widget.ProgressBar
    public Drawable getCurrentDrawable() {
        if (isIndeterminate()) {
            return getIndeterminateDrawable();
        }
        return getProgressDrawable();
    }

    public int getHideAnimationBehavior() {
        return this.f15862d.f15885f;
    }

    @NonNull
    public int[] getIndicatorColor() {
        return this.f15862d.f15882c;
    }

    public int getIndicatorTrackGapSize() {
        return this.f15862d.f15886g;
    }

    public int getShowAnimationBehavior() {
        return this.f15862d.f15884e;
    }

    public int getTrackColor() {
        return this.f15862d.f15883d;
    }

    public int getTrackCornerRadius() {
        return this.f15862d.f15881b;
    }

    public int getTrackThickness() {
        return this.f15862d.f15880a;
    }

    protected void h(boolean z10) {
        if (!this.f15865o) {
            return;
        }
        ((g) getCurrentDrawable()).q(q(), false, z10);
    }

    abstract com.google.android.material.progressindicator.b i(Context context, AttributeSet attributeSet);

    @Override // android.view.View
    public void invalidate() {
        super.invalidate();
        if (getCurrentDrawable() != null) {
            getCurrentDrawable().invalidateSelf();
        }
    }

    boolean l() {
        View view = this;
        while (view.getVisibility() == 0) {
            ViewParent parent = view.getParent();
            if (parent == null) {
                if (getWindowVisibility() != 0) {
                    return false;
                }
                return true;
            } else if (!(parent instanceof View)) {
                return true;
            } else {
                view = (View) parent;
            }
        }
        return false;
    }

    public void o(int i10, boolean z10) {
        if (isIndeterminate()) {
            if (getProgressDrawable() != null) {
                this.f15863e = i10;
                this.f15864i = z10;
                this.f15870t = true;
                if (getIndeterminateDrawable().isVisible() && this.f15869s.a(getContext().getContentResolver()) != 0.0f) {
                    getIndeterminateDrawable().u().f();
                    return;
                } else {
                    this.f15874x.b(getIndeterminateDrawable());
                    return;
                }
            }
            return;
        }
        super.setProgress(i10);
        if (getProgressDrawable() != null && !z10) {
            getProgressDrawable().jumpToCurrentState();
        }
    }

    @Override // android.widget.ProgressBar, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        n();
        if (q()) {
            k();
        }
    }

    @Override // android.widget.ProgressBar, android.view.View
    protected void onDetachedFromWindow() {
        removeCallbacks(this.f15873w);
        removeCallbacks(this.f15872v);
        ((g) getCurrentDrawable()).i();
        p();
        super.onDetachedFromWindow();
    }

    @Override // android.widget.ProgressBar, android.view.View
    protected synchronized void onDraw(Canvas canvas) {
        try {
            int save = canvas.save();
            if (getPaddingLeft() == 0) {
                if (getPaddingTop() != 0) {
                }
                if (getPaddingRight() == 0 || getPaddingBottom() != 0) {
                    canvas.clipRect(0, 0, getWidth() - (getPaddingLeft() + getPaddingRight()), getHeight() - (getPaddingTop() + getPaddingBottom()));
                }
                getCurrentDrawable().draw(canvas);
                canvas.restoreToCount(save);
            }
            canvas.translate(getPaddingLeft(), getPaddingTop());
            if (getPaddingRight() == 0) {
            }
            canvas.clipRect(0, 0, getWidth() - (getPaddingLeft() + getPaddingRight()), getHeight() - (getPaddingTop() + getPaddingBottom()));
            getCurrentDrawable().draw(canvas);
            canvas.restoreToCount(save);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // android.widget.ProgressBar, android.view.View
    protected synchronized void onMeasure(int i10, int i11) {
        int f10;
        int e10;
        try {
            h currentDrawingDelegate = getCurrentDrawingDelegate();
            if (currentDrawingDelegate == null) {
                return;
            }
            if (currentDrawingDelegate.f() < 0) {
                f10 = View.getDefaultSize(getSuggestedMinimumWidth(), i10);
            } else {
                f10 = currentDrawingDelegate.f() + getPaddingLeft() + getPaddingRight();
            }
            if (currentDrawingDelegate.e() < 0) {
                e10 = View.getDefaultSize(getSuggestedMinimumHeight(), i11);
            } else {
                e10 = currentDrawingDelegate.e() + getPaddingTop() + getPaddingBottom();
            }
            setMeasuredDimension(f10, e10);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // android.view.View
    protected void onVisibilityChanged(View view, int i10) {
        boolean z10;
        super.onVisibilityChanged(view, i10);
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        h(z10);
    }

    @Override // android.view.View
    protected void onWindowVisibilityChanged(int i10) {
        super.onWindowVisibilityChanged(i10);
        h(false);
    }

    boolean q() {
        if (h0.R(this) && getWindowVisibility() == 0 && l()) {
            return true;
        }
        return false;
    }

    public void setAnimatorDurationScaleProvider(@NonNull kh.a aVar) {
        this.f15869s = aVar;
        if (getProgressDrawable() != null) {
            getProgressDrawable().f15913i = aVar;
        }
        if (getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().f15913i = aVar;
        }
    }

    public void setHideAnimationBehavior(int i10) {
        this.f15862d.f15885f = i10;
        invalidate();
    }

    @Override // android.widget.ProgressBar
    public synchronized void setIndeterminate(boolean z10) {
        try {
            if (z10 == isIndeterminate()) {
                return;
            }
            g gVar = (g) getCurrentDrawable();
            if (gVar != null) {
                gVar.i();
            }
            super.setIndeterminate(z10);
            g gVar2 = (g) getCurrentDrawable();
            if (gVar2 != null) {
                gVar2.q(q(), false, false);
            }
            if ((gVar2 instanceof j) && q()) {
                ((j) gVar2).u().g();
            }
            this.f15870t = false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // android.widget.ProgressBar
    public void setIndeterminateDrawable(Drawable drawable) {
        if (drawable == null) {
            super.setIndeterminateDrawable(null);
        } else if (drawable instanceof j) {
            ((g) drawable).i();
            super.setIndeterminateDrawable(drawable);
        } else {
            throw new IllegalArgumentException("Cannot set framework drawable as indeterminate drawable.");
        }
    }

    public void setIndicatorColor(int... iArr) {
        if (iArr.length == 0) {
            iArr = new int[]{eh.a.b(getContext(), yg.b.f54342l, -1)};
        }
        if (!Arrays.equals(getIndicatorColor(), iArr)) {
            this.f15862d.f15882c = iArr;
            getIndeterminateDrawable().u().c();
            invalidate();
        }
    }

    public void setIndicatorTrackGapSize(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f15862d;
        if (bVar.f15886g != i10) {
            bVar.f15886g = i10;
            bVar.e();
            invalidate();
        }
    }

    @Override // android.widget.ProgressBar
    public synchronized void setProgress(int i10) {
        if (isIndeterminate()) {
            return;
        }
        o(i10, false);
    }

    @Override // android.widget.ProgressBar
    public void setProgressDrawable(Drawable drawable) {
        if (drawable == null) {
            super.setProgressDrawable(null);
        } else if (drawable instanceof f) {
            f fVar = (f) drawable;
            fVar.i();
            super.setProgressDrawable(fVar);
            fVar.A(getProgress() / getMax());
        } else {
            throw new IllegalArgumentException("Cannot set framework drawable as progress drawable.");
        }
    }

    public void setShowAnimationBehavior(int i10) {
        this.f15862d.f15884e = i10;
        invalidate();
    }

    public void setTrackColor(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f15862d;
        if (bVar.f15883d != i10) {
            bVar.f15883d = i10;
            invalidate();
        }
    }

    public void setTrackCornerRadius(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f15862d;
        if (bVar.f15881b != i10) {
            bVar.f15881b = Math.min(i10, bVar.f15880a / 2);
            invalidate();
        }
    }

    public void setTrackThickness(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f15862d;
        if (bVar.f15880a != i10) {
            bVar.f15880a = i10;
            requestLayout();
        }
    }

    public void setVisibilityAfterHide(int i10) {
        if (i10 != 0 && i10 != 4 && i10 != 8) {
            throw new IllegalArgumentException("The component's visibility must be one of VISIBLE, INVISIBLE, and GONE defined in View.");
        }
        this.f15871u = i10;
    }

    @Override // android.widget.ProgressBar
    public j getIndeterminateDrawable() {
        return (j) super.getIndeterminateDrawable();
    }

    @Override // android.widget.ProgressBar
    public f getProgressDrawable() {
        return (f) super.getProgressDrawable();
    }
}
