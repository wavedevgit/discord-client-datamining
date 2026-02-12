package com.google.android.material.progressindicator;

import android.content.Context;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CircularProgressIndicator extends a {
    public static final int B = bh.k.f6948w;

    public CircularProgressIndicator(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6735g);
    }

    private void t() {
        c cVar = new c((f) this.f16052d);
        setIndeterminateDrawable(k.v(getContext(), (f) this.f16052d, cVar));
        setProgressDrawable(g.A(getContext(), (f) this.f16052d, cVar));
    }

    public int getIndeterminateAnimationType() {
        return ((f) this.f16052d).f16127o;
    }

    public int getIndicatorDirection() {
        return ((f) this.f16052d).f16130r;
    }

    public int getIndicatorInset() {
        return ((f) this.f16052d).f16129q;
    }

    public int getIndicatorSize() {
        return ((f) this.f16052d).f16128p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.a
    /* renamed from: s */
    public f i(Context context, AttributeSet attributeSet) {
        return new f(context, attributeSet);
    }

    public void setIndeterminateAnimationType(int i10) {
        j dVar;
        if (((f) this.f16052d).f16127o == i10) {
            return;
        }
        if (r() && isIndeterminate()) {
            throw new IllegalStateException("Cannot change indeterminate animation type while the progress indicator is show in indeterminate mode.");
        }
        b bVar = this.f16052d;
        ((f) bVar).f16127o = i10;
        ((f) bVar).h();
        if (i10 == 1) {
            dVar = new e(getContext(), (f) this.f16052d);
        } else {
            dVar = new d((f) this.f16052d);
        }
        getIndeterminateDrawable().z(dVar);
        o();
        invalidate();
    }

    public void setIndicatorDirection(int i10) {
        ((f) this.f16052d).f16130r = i10;
        invalidate();
    }

    public void setIndicatorInset(int i10) {
        b bVar = this.f16052d;
        if (((f) bVar).f16129q != i10) {
            ((f) bVar).f16129q = i10;
            invalidate();
        }
    }

    public void setIndicatorSize(int i10) {
        int max = Math.max(i10, getTrackThickness() * 2);
        b bVar = this.f16052d;
        if (((f) bVar).f16128p != max) {
            ((f) bVar).f16128p = max;
            ((f) bVar).h();
            requestLayout();
            invalidate();
        }
    }

    @Override // com.google.android.material.progressindicator.a
    public void setTrackThickness(int i10) {
        super.setTrackThickness(i10);
        ((f) this.f16052d).h();
    }

    public CircularProgressIndicator(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10, B);
        t();
        this.f16062v = true;
    }
}
