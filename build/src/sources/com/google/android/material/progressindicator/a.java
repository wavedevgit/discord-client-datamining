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
import bh.l;
import com.google.android.material.internal.m;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a extends ProgressBar {
    static final int A = bh.k.D;

    /* renamed from: d  reason: collision with root package name */
    com.google.android.material.progressindicator.b f16052d;

    /* renamed from: e  reason: collision with root package name */
    private int f16053e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f16054i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f16055o;

    /* renamed from: p  reason: collision with root package name */
    private final int f16056p;

    /* renamed from: q  reason: collision with root package name */
    private final int f16057q;

    /* renamed from: r  reason: collision with root package name */
    private long f16058r;

    /* renamed from: s  reason: collision with root package name */
    ph.a f16059s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f16060t;

    /* renamed from: u  reason: collision with root package name */
    private int f16061u;

    /* renamed from: v  reason: collision with root package name */
    boolean f16062v;

    /* renamed from: w  reason: collision with root package name */
    private final Runnable f16063w;

    /* renamed from: x  reason: collision with root package name */
    private final Runnable f16064x;

    /* renamed from: y  reason: collision with root package name */
    private final androidx.vectordrawable.graphics.drawable.b f16065y;

    /* renamed from: z  reason: collision with root package name */
    private final androidx.vectordrawable.graphics.drawable.b f16066z;

    /* renamed from: com.google.android.material.progressindicator.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class RunnableC0187a implements Runnable {
        RunnableC0187a() {
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
            a.this.f16058r = -1L;
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
            aVar.p(aVar.f16053e, a.this.f16054i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends androidx.vectordrawable.graphics.drawable.b {
        d() {
        }

        @Override // androidx.vectordrawable.graphics.drawable.b
        public void b(Drawable drawable) {
            super.b(drawable);
            if (!a.this.f16060t) {
                a aVar = a.this;
                aVar.setVisibility(aVar.f16061u);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(wh.a.d(context, attributeSet, i10, A), attributeSet, i10);
        this.f16058r = -1L;
        this.f16060t = false;
        this.f16061u = 4;
        this.f16063w = new RunnableC0187a();
        this.f16064x = new b();
        this.f16065y = new c();
        this.f16066z = new d();
        Context context2 = getContext();
        this.f16052d = i(context2, attributeSet);
        TypedArray i12 = m.i(context2, attributeSet, l.S, i10, i11, new int[0]);
        this.f16056p = i12.getInt(l.Z, -1);
        this.f16057q = Math.min(i12.getInt(l.X, -1), 1000);
        i12.recycle();
        this.f16059s = new ph.a();
        this.f16055o = true;
    }

    private i getCurrentDrawingDelegate() {
        if (isIndeterminate()) {
            if (getIndeterminateDrawable() == null) {
                return null;
            }
            return getIndeterminateDrawable().x();
        } else if (getProgressDrawable() == null) {
            return null;
        } else {
            return getProgressDrawable().C();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j() {
        ((h) getCurrentDrawable()).s(false, false, true);
        if (m()) {
            setVisibility(4);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void k() {
        if (this.f16057q > 0) {
            this.f16058r = SystemClock.uptimeMillis();
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
        o();
        if (getProgressDrawable() != null) {
            getProgressDrawable().o(this.f16066z);
        }
        if (getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().o(this.f16066z);
        }
    }

    private void q() {
        if (getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().u(this.f16066z);
            getIndeterminateDrawable().w().h();
        }
        if (getProgressDrawable() != null) {
            getProgressDrawable().u(this.f16066z);
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
        return this.f16052d.f16078h;
    }

    @NonNull
    public int[] getIndicatorColor() {
        return this.f16052d.f16075e;
    }

    public int getIndicatorTrackGapSize() {
        return this.f16052d.f16079i;
    }

    public int getShowAnimationBehavior() {
        return this.f16052d.f16077g;
    }

    public int getTrackColor() {
        return this.f16052d.f16076f;
    }

    public int getTrackCornerRadius() {
        return this.f16052d.f16072b;
    }

    public float getTrackCornerRadiusFraction() {
        return this.f16052d.f16073c;
    }

    public int getTrackThickness() {
        return this.f16052d.f16071a;
    }

    public int getWaveAmplitude() {
        return this.f16052d.f16082l;
    }

    public int getWaveSpeed() {
        return this.f16052d.f16083m;
    }

    public int getWavelengthDeterminate() {
        return this.f16052d.f16080j;
    }

    public int getWavelengthIndeterminate() {
        return this.f16052d.f16081k;
    }

    protected void h(boolean z10) {
        if (!this.f16055o) {
            return;
        }
        ((h) getCurrentDrawable()).s(r(), false, z10);
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o() {
        if (getProgressDrawable() != null && getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().w().d(this.f16065y);
        }
    }

    @Override // android.widget.ProgressBar, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        n();
        if (r()) {
            k();
        }
    }

    @Override // android.widget.ProgressBar, android.view.View
    protected void onDetachedFromWindow() {
        removeCallbacks(this.f16064x);
        removeCallbacks(this.f16063w);
        ((h) getCurrentDrawable()).j();
        q();
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

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        getCurrentDrawingDelegate().g();
    }

    @Override // android.widget.ProgressBar, android.view.View
    protected synchronized void onMeasure(int i10, int i11) {
        int f10;
        int e10;
        try {
            i currentDrawingDelegate = getCurrentDrawingDelegate();
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

    public void p(int i10, boolean z10) {
        if (isIndeterminate()) {
            if (getProgressDrawable() != null) {
                this.f16053e = i10;
                this.f16054i = z10;
                this.f16060t = true;
                if (getIndeterminateDrawable().isVisible() && this.f16059s.a(getContext().getContentResolver()) != 0.0f) {
                    getIndeterminateDrawable().w().f();
                    return;
                } else {
                    this.f16065y.b(getIndeterminateDrawable());
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean r() {
        if (isAttachedToWindow() && getWindowVisibility() == 0 && l()) {
            return true;
        }
        return false;
    }

    public void setAnimatorDurationScaleProvider(@NonNull ph.a aVar) {
        this.f16059s = aVar;
        if (getProgressDrawable() != null) {
            getProgressDrawable().f16134i = aVar;
        }
        if (getIndeterminateDrawable() != null) {
            getIndeterminateDrawable().f16134i = aVar;
        }
    }

    public void setHideAnimationBehavior(int i10) {
        this.f16052d.f16078h = i10;
        invalidate();
    }

    @Override // android.widget.ProgressBar
    public synchronized void setIndeterminate(boolean z10) {
        try {
            if (z10 == isIndeterminate()) {
                return;
            }
            h hVar = (h) getCurrentDrawable();
            if (hVar != null) {
                hVar.j();
            }
            super.setIndeterminate(z10);
            h hVar2 = (h) getCurrentDrawable();
            if (hVar2 != null) {
                hVar2.s(r(), false, false);
            }
            if ((hVar2 instanceof k) && r()) {
                ((k) hVar2).w().g();
            }
            this.f16060t = false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public void setIndeterminateAnimatorDurationScale(float f10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16084n != f10) {
            bVar.f16084n = f10;
            getIndeterminateDrawable().w().c();
        }
    }

    @Override // android.widget.ProgressBar
    public void setIndeterminateDrawable(Drawable drawable) {
        if (drawable instanceof k) {
            ((h) drawable).j();
            super.setIndeterminateDrawable(drawable);
        } else if (!this.f16062v) {
            super.setIndeterminateDrawable(drawable);
        } else {
            throw new IllegalArgumentException("Cannot set framework drawable as indeterminate drawable.");
        }
    }

    public void setIndicatorColor(int... iArr) {
        if (iArr.length == 0) {
            iArr = new int[]{jh.a.b(getContext(), f.a.f23299w, -1)};
        }
        if (!Arrays.equals(getIndicatorColor(), iArr)) {
            this.f16052d.f16075e = iArr;
            getIndeterminateDrawable().w().c();
            invalidate();
        }
    }

    public void setIndicatorTrackGapSize(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16079i != i10) {
            bVar.f16079i = i10;
            bVar.h();
            invalidate();
        }
    }

    @Override // android.widget.ProgressBar
    public synchronized void setProgress(int i10) {
        if (isIndeterminate()) {
            return;
        }
        p(i10, false);
    }

    @Override // android.widget.ProgressBar
    public void setProgressDrawable(Drawable drawable) {
        if (drawable instanceof g) {
            g gVar = (g) drawable;
            gVar.j();
            super.setProgressDrawable(gVar);
            gVar.K(getProgress() / getMax());
        } else if (!this.f16062v) {
            super.setProgressDrawable(drawable);
        } else {
            throw new IllegalArgumentException("Cannot set framework drawable as progress drawable.");
        }
    }

    public void setShowAnimationBehavior(int i10) {
        this.f16052d.f16077g = i10;
        invalidate();
    }

    public void setTrackColor(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16076f != i10) {
            bVar.f16076f = i10;
            invalidate();
        }
    }

    public void setTrackCornerRadius(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16072b != i10) {
            bVar.f16072b = Math.min(i10, bVar.f16071a / 2);
            this.f16052d.f16074d = false;
            invalidate();
        }
    }

    public void setTrackCornerRadiusFraction(float f10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16073c != f10) {
            bVar.f16073c = Math.min(f10, 0.5f);
            this.f16052d.f16074d = true;
            invalidate();
        }
    }

    public void setTrackThickness(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16071a != i10) {
            bVar.f16071a = i10;
            requestLayout();
        }
    }

    public void setVisibilityAfterHide(int i10) {
        if (i10 != 0 && i10 != 4 && i10 != 8) {
            throw new IllegalArgumentException("The component's visibility must be one of VISIBLE, INVISIBLE, and GONE defined in View.");
        }
        this.f16061u = i10;
    }

    public void setWaveAmplitude(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16082l != i10) {
            bVar.f16082l = Math.abs(i10);
            requestLayout();
        }
    }

    public void setWaveSpeed(int i10) {
        boolean z10;
        this.f16052d.f16083m = i10;
        g progressDrawable = getProgressDrawable();
        if (this.f16052d.f16083m != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        progressDrawable.I(z10);
    }

    public void setWavelength(int i10) {
        setWavelengthDeterminate(i10);
        setWavelengthIndeterminate(i10);
    }

    public void setWavelengthDeterminate(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16080j != i10) {
            bVar.f16080j = Math.abs(i10);
            if (!isIndeterminate()) {
                requestLayout();
            }
        }
    }

    public void setWavelengthIndeterminate(int i10) {
        com.google.android.material.progressindicator.b bVar = this.f16052d;
        if (bVar.f16081k != i10) {
            bVar.f16081k = Math.abs(i10);
            if (isIndeterminate()) {
                requestLayout();
            }
        }
    }

    @Override // android.widget.ProgressBar
    public k getIndeterminateDrawable() {
        return (k) super.getIndeterminateDrawable();
    }

    @Override // android.widget.ProgressBar
    public g getProgressDrawable() {
        return (g) super.getProgressDrawable();
    }
}
