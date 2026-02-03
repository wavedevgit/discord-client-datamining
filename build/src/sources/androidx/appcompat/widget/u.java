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
    private final SeekBar f1840d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f1841e;

    /* renamed from: f  reason: collision with root package name */
    private ColorStateList f1842f;

    /* renamed from: g  reason: collision with root package name */
    private PorterDuff.Mode f1843g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1844h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f1845i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(SeekBar seekBar) {
        super(seekBar);
        this.f1842f = null;
        this.f1843g = null;
        this.f1844h = false;
        this.f1845i = false;
        this.f1840d = seekBar;
    }

    private void f() {
        Drawable drawable = this.f1841e;
        if (drawable != null) {
            if (this.f1844h || this.f1845i) {
                Drawable r10 = s1.a.r(drawable.mutate());
                this.f1841e = r10;
                if (this.f1844h) {
                    s1.a.o(r10, this.f1842f);
                }
                if (this.f1845i) {
                    s1.a.p(this.f1841e, this.f1843g);
                }
                if (this.f1841e.isStateful()) {
                    this.f1841e.setState(this.f1840d.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.appcompat.widget.p
    public void c(AttributeSet attributeSet, int i10) {
        super.c(attributeSet, i10);
        v0 v10 = v0.v(this.f1840d.getContext(), attributeSet, f.j.T, i10, 0);
        SeekBar seekBar = this.f1840d;
        androidx.core.view.h0.l0(seekBar, seekBar.getContext(), f.j.T, attributeSet, v10.r(), i10, 0);
        Drawable h10 = v10.h(f.j.U);
        if (h10 != null) {
            this.f1840d.setThumb(h10);
        }
        j(v10.g(f.j.V));
        if (v10.s(f.j.X)) {
            this.f1843g = e0.e(v10.k(f.j.X, -1), this.f1843g);
            this.f1845i = true;
        }
        if (v10.s(f.j.W)) {
            this.f1842f = v10.c(f.j.W);
            this.f1844h = true;
        }
        v10.x();
        f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(Canvas canvas) {
        int i10;
        if (this.f1841e != null) {
            int max = this.f1840d.getMax();
            int i11 = 1;
            if (max > 1) {
                int intrinsicWidth = this.f1841e.getIntrinsicWidth();
                int intrinsicHeight = this.f1841e.getIntrinsicHeight();
                if (intrinsicWidth >= 0) {
                    i10 = intrinsicWidth / 2;
                } else {
                    i10 = 1;
                }
                if (intrinsicHeight >= 0) {
                    i11 = intrinsicHeight / 2;
                }
                this.f1841e.setBounds(-i10, -i11, i10, i11);
                float width = ((this.f1840d.getWidth() - this.f1840d.getPaddingLeft()) - this.f1840d.getPaddingRight()) / max;
                int save = canvas.save();
                canvas.translate(this.f1840d.getPaddingLeft(), this.f1840d.getHeight() / 2);
                for (int i12 = 0; i12 <= max; i12++) {
                    this.f1841e.draw(canvas);
                    canvas.translate(width, 0.0f);
                }
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        Drawable drawable = this.f1841e;
        if (drawable != null && drawable.isStateful() && drawable.setState(this.f1840d.getDrawableState())) {
            this.f1840d.invalidateDrawable(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        Drawable drawable = this.f1841e;
        if (drawable != null) {
            drawable.jumpToCurrentState();
        }
    }

    void j(Drawable drawable) {
        Drawable drawable2 = this.f1841e;
        if (drawable2 != null) {
            drawable2.setCallback(null);
        }
        this.f1841e = drawable;
        if (drawable != null) {
            drawable.setCallback(this.f1840d);
            s1.a.m(drawable, this.f1840d.getLayoutDirection());
            if (drawable.isStateful()) {
                drawable.setState(this.f1840d.getDrawableState());
            }
            f();
        }
        this.f1840d.invalidate();
    }
}
