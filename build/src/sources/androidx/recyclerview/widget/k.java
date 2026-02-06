package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k {

    /* renamed from: b  reason: collision with root package name */
    int f5476b;

    /* renamed from: c  reason: collision with root package name */
    int f5477c;

    /* renamed from: d  reason: collision with root package name */
    int f5478d;

    /* renamed from: e  reason: collision with root package name */
    int f5479e;

    /* renamed from: h  reason: collision with root package name */
    boolean f5482h;

    /* renamed from: i  reason: collision with root package name */
    boolean f5483i;

    /* renamed from: a  reason: collision with root package name */
    boolean f5475a = true;

    /* renamed from: f  reason: collision with root package name */
    int f5480f = 0;

    /* renamed from: g  reason: collision with root package name */
    int f5481g = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a(RecyclerView.State state) {
        int i10 = this.f5477c;
        if (i10 >= 0 && i10 < state.b()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View b(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(this.f5477c);
        this.f5477c += this.f5478d;
        return o10;
    }

    public String toString() {
        return "LayoutState{mAvailable=" + this.f5476b + ", mCurrentPosition=" + this.f5477c + ", mItemDirection=" + this.f5478d + ", mLayoutDirection=" + this.f5479e + ", mStartLine=" + this.f5480f + ", mEndLine=" + this.f5481g + '}';
    }
}
