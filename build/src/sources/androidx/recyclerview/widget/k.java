package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k {

    /* renamed from: b  reason: collision with root package name */
    int f5022b;

    /* renamed from: c  reason: collision with root package name */
    int f5023c;

    /* renamed from: d  reason: collision with root package name */
    int f5024d;

    /* renamed from: e  reason: collision with root package name */
    int f5025e;

    /* renamed from: h  reason: collision with root package name */
    boolean f5028h;

    /* renamed from: i  reason: collision with root package name */
    boolean f5029i;

    /* renamed from: a  reason: collision with root package name */
    boolean f5021a = true;

    /* renamed from: f  reason: collision with root package name */
    int f5026f = 0;

    /* renamed from: g  reason: collision with root package name */
    int f5027g = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a(RecyclerView.State state) {
        int i10 = this.f5023c;
        if (i10 >= 0 && i10 < state.b()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View b(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(this.f5023c);
        this.f5023c += this.f5024d;
        return o10;
    }

    public String toString() {
        return "LayoutState{mAvailable=" + this.f5022b + ", mCurrentPosition=" + this.f5023c + ", mItemDirection=" + this.f5024d + ", mLayoutDirection=" + this.f5025e + ", mStartLine=" + this.f5026f + ", mEndLine=" + this.f5027g + '}';
    }
}
