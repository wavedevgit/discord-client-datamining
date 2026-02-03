package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k {

    /* renamed from: b  reason: collision with root package name */
    int f5035b;

    /* renamed from: c  reason: collision with root package name */
    int f5036c;

    /* renamed from: d  reason: collision with root package name */
    int f5037d;

    /* renamed from: e  reason: collision with root package name */
    int f5038e;

    /* renamed from: h  reason: collision with root package name */
    boolean f5041h;

    /* renamed from: i  reason: collision with root package name */
    boolean f5042i;

    /* renamed from: a  reason: collision with root package name */
    boolean f5034a = true;

    /* renamed from: f  reason: collision with root package name */
    int f5039f = 0;

    /* renamed from: g  reason: collision with root package name */
    int f5040g = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a(RecyclerView.State state) {
        int i10 = this.f5036c;
        if (i10 >= 0 && i10 < state.b()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View b(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(this.f5036c);
        this.f5036c += this.f5037d;
        return o10;
    }

    public String toString() {
        return "LayoutState{mAvailable=" + this.f5035b + ", mCurrentPosition=" + this.f5036c + ", mItemDirection=" + this.f5037d + ", mLayoutDirection=" + this.f5038e + ", mStartLine=" + this.f5039f + ", mEndLine=" + this.f5040g + '}';
    }
}
