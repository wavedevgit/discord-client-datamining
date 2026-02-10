package com.google.android.material.progressindicator;

import android.content.Context;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CircularProgressIndicator extends a {
    public static final int A = bh.j.f6801q;

    public CircularProgressIndicator(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, bh.b.f6629g);
    }

    private void s() {
        c cVar = new c((e) this.f15344d);
        setIndeterminateDrawable(j.t(getContext(), (e) this.f15344d, cVar));
        setProgressDrawable(f.v(getContext(), (e) this.f15344d, cVar));
    }

    public int getIndicatorDirection() {
        return ((e) this.f15344d).f15391j;
    }

    public int getIndicatorInset() {
        return ((e) this.f15344d).f15390i;
    }

    public int getIndicatorSize() {
        return ((e) this.f15344d).f15389h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.a
    /* renamed from: r */
    public e i(Context context, AttributeSet attributeSet) {
        return new e(context, attributeSet);
    }

    public void setIndicatorDirection(int i10) {
        ((e) this.f15344d).f15391j = i10;
        invalidate();
    }

    public void setIndicatorInset(int i10) {
        b bVar = this.f15344d;
        if (((e) bVar).f15390i != i10) {
            ((e) bVar).f15390i = i10;
            invalidate();
        }
    }

    public void setIndicatorSize(int i10) {
        int max = Math.max(i10, getTrackThickness() * 2);
        b bVar = this.f15344d;
        if (((e) bVar).f15389h != max) {
            ((e) bVar).f15389h = max;
            ((e) bVar).e();
            requestLayout();
            invalidate();
        }
    }

    @Override // com.google.android.material.progressindicator.a
    public void setTrackThickness(int i10) {
        super.setTrackThickness(i10);
        ((e) this.f15344d).e();
    }

    public CircularProgressIndicator(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10, A);
        s();
    }
}
