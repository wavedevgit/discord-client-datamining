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
    private final SeekBar f1947d;

    /* renamed from: e  reason: collision with root package name */
    private Drawable f1948e;

    /* renamed from: f  reason: collision with root package name */
    private ColorStateList f1949f;

    /* renamed from: g  reason: collision with root package name */
    private PorterDuff.Mode f1950g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1951h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f1952i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(SeekBar seekBar) {
        super(seekBar);
        this.f1949f = null;
        this.f1950g = null;
        this.f1951h = false;
        this.f1952i = false;
        this.f1947d = seekBar;
    }

    private void f() {
        Drawable drawable = this.f1948e;
        if (drawable != null) {
            if (this.f1951h || this.f1952i) {
                Drawable r10 = s1.a.r(drawable.mutate());
                this.f1948e = r10;
                if (this.f1951h) {
                    s1.a.o(r10, this.f1949f);
                }
                if (this.f1952i) {
                    s1.a.p(this.f1948e, this.f1950g);
                }
                if (this.f1948e.isStateful()) {
                    this.f1948e.setState(this.f1947d.getDrawableState());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.appcompat.widget.p
    public void c(AttributeSet attributeSet, int i10) {
        super.c(attributeSet, i10);
        v0 v10 = v0.v(this.f1947d.getContext(), attributeSet, f.j.T, i10, 0);
        SeekBar seekBar = this.f1947d;
        androidx.core.view.h0.l0(seekBar, seekBar.getContext(), f.j.T, attributeSet, v10.r(), i10, 0);
        Drawable h10 = v10.h(f.j.U);
        if (h10 != null) {
            this.f1947d.setThumb(h10);
        }
        j(v10.g(f.j.V));
        if (v10.s(f.j.X)) {
            this.f1950g = e0.e(v10.k(f.j.X, -1), this.f1950g);
            this.f1952i = true;
        }
        if (v10.s(f.j.W)) {
            this.f1949f = v10.c(f.j.W);
            this.f1951h = true;
        }
        v10.x();
        f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(Canvas canvas) {
        int i10;
        if (this.f1948e != null) {
            int max = this.f1947d.getMax();
            int i11 = 1;
            if (max > 1) {
                int intrinsicWidth = this.f1948e.getIntrinsicWidth();
                int intrinsicHeight = this.f1948e.getIntrinsicHeight();
                if (intrinsicWidth >= 0) {
                    i10 = intrinsicWidth / 2;
                } else {
                    i10 = 1;
                }
                if (intrinsicHeight >= 0) {
                    i11 = intrinsicHeight / 2;
                }
                this.f1948e.setBounds(-i10, -i11, i10, i11);
                float width = ((this.f1947d.getWidth() - this.f1947d.getPaddingLeft()) - this.f1947d.getPaddingRight()) / max;
                int save = canvas.save();
                canvas.translate(this.f1947d.getPaddingLeft(), this.f1947d.getHeight() / 2);
                for (int i12 = 0; i12 <= max; i12++) {
                    this.f1948e.draw(canvas);
                    canvas.translate(width, 0.0f);
                }
                canvas.restoreToCount(save);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        Drawable drawable = this.f1948e;
        if (drawable != null && drawable.isStateful() && drawable.setState(this.f1947d.getDrawableState())) {
            this.f1947d.invalidateDrawable(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        Drawable drawable = this.f1948e;
        if (drawable != null) {
            drawable.jumpToCurrentState();
        }
    }

    void j(Drawable drawable) {
        Drawable drawable2 = this.f1948e;
        if (drawable2 != null) {
            drawable2.setCallback(null);
        }
        this.f1948e = drawable;
        if (drawable != null) {
            drawable.setCallback(this.f1947d);
            s1.a.m(drawable, this.f1947d.getLayoutDirection());
            if (drawable.isStateful()) {
                drawable.setState(this.f1947d.getDrawableState());
            }
            f();
        }
        this.f1947d.invalidate();
    }
}
