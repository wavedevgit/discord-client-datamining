package androidx.appcompat.widget;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.widget.SeekBar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class u extends p {

    /* renamed from: d  reason: collision with root package name */
    private final SeekBar f2250d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f2251e;

    /* renamed from: f  reason: collision with root package name */
    private ColorStateList f2252f;

    /* renamed from: g  reason: collision with root package name */
    private PorterDuff.Mode f2253g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f2254h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f2255i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(SeekBar seekBar) {
        super(seekBar);
        this.f2252f = null;
        this.f2253g = null;
        this.f2254h = false;
        this.f2255i = false;
        this.f2250d = seekBar;
    }

    private void f() {
        Drawable drawable = this.f2251e;
        if (drawable != null) {
            if (this.f2254h || this.f2255i) {
                Drawable r10 = s1.a.r(drawable.mutate());
                this.f2251e = r10;
                if (this.f2254h) {
                    s1.a.o(r10, this.f2252f);
                }
                if (this.f2255i) {
                    s1.a.p(this.f2251e, this.f2253g);
                }
                if (this.f2251e.isStateful()) {
                    this.f2251e.setState(this.f2250d.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.appcompat.widget.p
    public void c(AttributeSet attributeSet, int i10) {
        super.c(attributeSet, i10);
        v0 v10 = v0.v(this.f2250d.getContext(), attributeSet, f.j.T, i10, 0);
        SeekBar seekBar = this.f2250d;
        androidx.core.view.h0.l0(seekBar, seekBar.getContext(), f.j.T, attributeSet, v10.r(), i10, 0);
        Drawable h10 = v10.h(f.j.U);
        if (h10 != null) {
            this.f2250d.setThumb(h10);
        }
        j(v10.g(f.j.V));
        if (v10.s(f.j.X)) {
            this.f2253g = e0.e(v10.k(f.j.X, -1), this.f2253g);
            this.f2255i = true;
        }
        if (v10.s(f.j.W)) {
            this.f2252f = v10.c(f.j.W);
            this.f2254h = true;
        }
        v10.x();
        f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(Canvas canvas) {
        int i10;
        if (this.f2251e != null) {
            int max = this.f2250d.getMax();
            int i11 = 1;
            if (max > 1) {
                int intrinsicWidth = this.f2251e.getIntrinsicWidth();
                int intrinsicHeight = this.f2251e.getIntrinsicHeight();
                if (intrinsicWidth >= 0) {
                    i10 = intrinsicWidth / 2;
                } else {
                    i10 = 1;
                }
                if (intrinsicHeight >= 0) {
                    i11 = intrinsicHeight / 2;
                }
                this.f2251e.setBounds(-i10, -i11, i10, i11);
                float width = ((this.f2250d.getWidth() - this.f2250d.getPaddingLeft()) - this.f2250d.getPaddingRight()) / max;
                int save = canvas.save();
                canvas.translate(this.f2250d.getPaddingLeft(), this.f2250d.getHeight() / 2);
                for (int i12 = 0; i12 <= max; i12++) {
                    this.f2251e.draw(canvas);
                    canvas.translate(width, 0.0f);
                }
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        Drawable drawable = this.f2251e;
        if (drawable != null && drawable.isStateful() && drawable.setState(this.f2250d.getDrawableState())) {
            this.f2250d.invalidateDrawable(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        Drawable drawable = this.f2251e;
        if (drawable != null) {
            drawable.jumpToCurrentState();
        }
    }

    void j(Drawable drawable) {
        Drawable drawable2 = this.f2251e;
        if (drawable2 != null) {
            drawable2.setCallback(null);
        }
        this.f2251e = drawable;
        if (drawable != null) {
            drawable.setCallback(this.f2250d);
            s1.a.m(drawable, this.f2250d.getLayoutDirection());
            if (drawable.isStateful()) {
                drawable.setState(this.f2250d.getDrawableState());
            }
            f();
        }
        this.f2250d.invalidate();
    }
}
