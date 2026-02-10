package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k {

    /* renamed from: b  reason: collision with root package name */
    int f5183b;

    /* renamed from: c  reason: collision with root package name */
    int f5184c;

    /* renamed from: d  reason: collision with root package name */
    int f5185d;

    /* renamed from: e  reason: collision with root package name */
    int f5186e;

    /* renamed from: h  reason: collision with root package name */
    boolean f5189h;

    /* renamed from: i  reason: collision with root package name */
    boolean f5190i;

    /* renamed from: a  reason: collision with root package name */
    boolean f5182a = true;

    /* renamed from: f  reason: collision with root package name */
    int f5187f = 0;

    /* renamed from: g  reason: collision with root package name */
    int f5188g = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a(RecyclerView.State state) {
        int i10 = this.f5184c;
        if (i10 >= 0 && i10 < state.b()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View b(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(this.f5184c);
        this.f5184c += this.f5185d;
        return o10;
    }

    public String toString() {
        return "LayoutState{mAvailable=" + this.f5183b + ", mCurrentPosition=" + this.f5184c + ", mItemDirection=" + this.f5185d + ", mLayoutDirection=" + this.f5186e + ", mStartLine=" + this.f5187f + ", mEndLine=" + this.f5188g + '}';
    }
}
