package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k {

    /* renamed from: b  reason: collision with root package name */
    int f5066b;

    /* renamed from: c  reason: collision with root package name */
    int f5067c;

    /* renamed from: d  reason: collision with root package name */
    int f5068d;

    /* renamed from: e  reason: collision with root package name */
    int f5069e;

    /* renamed from: h  reason: collision with root package name */
    boolean f5072h;

    /* renamed from: i  reason: collision with root package name */
    boolean f5073i;

    /* renamed from: a  reason: collision with root package name */
    boolean f5065a = true;

    /* renamed from: f  reason: collision with root package name */
    int f5070f = 0;

    /* renamed from: g  reason: collision with root package name */
    int f5071g = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a(RecyclerView.State state) {
        int i10 = this.f5067c;
        if (i10 >= 0 && i10 < state.b()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View b(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(this.f5067c);
        this.f5067c += this.f5068d;
        return o10;
    }

    public String toString() {
        return "LayoutState{mAvailable=" + this.f5066b + ", mCurrentPosition=" + this.f5067c + ", mItemDirection=" + this.f5068d + ", mLayoutDirection=" + this.f5069e + ", mStartLine=" + this.f5070f + ", mEndLine=" + this.f5071g + '}';
    }
}
