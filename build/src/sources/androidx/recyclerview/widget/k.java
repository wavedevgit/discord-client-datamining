package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k {

    /* renamed from: b  reason: collision with root package name */
    int f5147b;

    /* renamed from: c  reason: collision with root package name */
    int f5148c;

    /* renamed from: d  reason: collision with root package name */
    int f5149d;

    /* renamed from: e  reason: collision with root package name */
    int f5150e;

    /* renamed from: h  reason: collision with root package name */
    boolean f5153h;

    /* renamed from: i  reason: collision with root package name */
    boolean f5154i;

    /* renamed from: a  reason: collision with root package name */
    boolean f5146a = true;

    /* renamed from: f  reason: collision with root package name */
    int f5151f = 0;

    /* renamed from: g  reason: collision with root package name */
    int f5152g = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a(RecyclerView.State state) {
        int i10 = this.f5148c;
        if (i10 >= 0 && i10 < state.b()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View b(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(this.f5148c);
        this.f5148c += this.f5149d;
        return o10;
    }

    public String toString() {
        return "LayoutState{mAvailable=" + this.f5147b + ", mCurrentPosition=" + this.f5148c + ", mItemDirection=" + this.f5149d + ", mLayoutDirection=" + this.f5150e + ", mStartLine=" + this.f5151f + ", mEndLine=" + this.f5152g + '}';
    }
}
