package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class k {

    /* renamed from: b  reason: collision with root package name */
    int f5173b;

    /* renamed from: c  reason: collision with root package name */
    int f5174c;

    /* renamed from: d  reason: collision with root package name */
    int f5175d;

    /* renamed from: e  reason: collision with root package name */
    int f5176e;

    /* renamed from: h  reason: collision with root package name */
    boolean f5179h;

    /* renamed from: i  reason: collision with root package name */
    boolean f5180i;

    /* renamed from: a  reason: collision with root package name */
    boolean f5172a = true;

    /* renamed from: f  reason: collision with root package name */
    int f5177f = 0;

    /* renamed from: g  reason: collision with root package name */
    int f5178g = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean a(RecyclerView.State state) {
        int i10 = this.f5174c;
        if (i10 >= 0 && i10 < state.b()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View b(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(this.f5174c);
        this.f5174c += this.f5175d;
        return o10;
    }

    public String toString() {
        return "LayoutState{mAvailable=" + this.f5173b + ", mCurrentPosition=" + this.f5174c + ", mItemDirection=" + this.f5175d + ", mLayoutDirection=" + this.f5176e + ", mStartLine=" + this.f5177f + ", mEndLine=" + this.f5178g + '}';
    }
}
