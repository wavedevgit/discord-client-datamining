package com.google.android.material.progressindicator;

import android.content.Context;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CircularProgressIndicator extends a {
    public static final int A = zg.j.f55718q;

    public CircularProgressIndicator(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, zg.b.f55546g);
    }

    private void s() {
        c cVar = new c((e) this.f15224d);
        setIndeterminateDrawable(j.t(getContext(), (e) this.f15224d, cVar));
        setProgressDrawable(f.v(getContext(), (e) this.f15224d, cVar));
    }

    public int getIndicatorDirection() {
        return ((e) this.f15224d).f15271j;
    }

    public int getIndicatorInset() {
        return ((e) this.f15224d).f15270i;
    }

    public int getIndicatorSize() {
        return ((e) this.f15224d).f15269h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.a
    /* renamed from: r */
    public e i(Context context, AttributeSet attributeSet) {
        return new e(context, attributeSet);
    }

    public void setIndicatorDirection(int i10) {
        ((e) this.f15224d).f15271j = i10;
        invalidate();
    }

    public void setIndicatorInset(int i10) {
        b bVar = this.f15224d;
        if (((e) bVar).f15270i != i10) {
            ((e) bVar).f15270i = i10;
            invalidate();
        }
    }

    public void setIndicatorSize(int i10) {
        int max = Math.max(i10, getTrackThickness() * 2);
        b bVar = this.f15224d;
        if (((e) bVar).f15269h != max) {
            ((e) bVar).f15269h = max;
            ((e) bVar).e();
            requestLayout();
            invalidate();
        }
    }

    @Override // com.google.android.material.progressindicator.a
    public void setTrackThickness(int i10) {
        super.setTrackThickness(i10);
        ((e) this.f15224d).e();
    }

    public CircularProgressIndicator(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10, A);
        s();
    }
}
