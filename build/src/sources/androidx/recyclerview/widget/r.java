package androidx.recyclerview.widget;

import android.view.View;
import android.view.animation.DecelerateInterpolator;
import android.widget.Scroller;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class r extends RecyclerView.OnFlingListener {

    /* renamed from: a  reason: collision with root package name */
    RecyclerView f5195a;

    /* renamed from: b  reason: collision with root package name */
    private Scroller f5196b;

    /* renamed from: c  reason: collision with root package name */
    private final RecyclerView.OnScrollListener f5197c = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends RecyclerView.OnScrollListener {

        /* renamed from: a  reason: collision with root package name */
        boolean f5198a = false;

        a() {
        }

        @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
        public void onScrollStateChanged(RecyclerView recyclerView, int i10) {
            super.onScrollStateChanged(recyclerView, i10);
            if (i10 == 0 && this.f5198a) {
                this.f5198a = false;
                r.this.i();
            }
        }

        @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
        public void onScrolled(RecyclerView recyclerView, int i10, int i11) {
            if (i10 == 0 && i11 == 0) {
                return;
            }
            this.f5198a = true;
        }
    }

    private void d() {
        this.f5195a.removeOnScrollListener(this.f5197c);
        this.f5195a.setOnFlingListener(null);
    }

    private void g() {
        if (this.f5195a.getOnFlingListener() == null) {
            this.f5195a.addOnScrollListener(this.f5197c);
            this.f5195a.setOnFlingListener(this);
            return;
        }
        throw new IllegalStateException("An instance of OnFlingListener already set.");
    }

    private boolean h(RecyclerView.LayoutManager layoutManager, int i10, int i11) {
        RecyclerView.SmoothScroller c10;
        int f10;
        if (!(layoutManager instanceof RecyclerView.SmoothScroller.a) || (c10 = c(layoutManager)) == null || (f10 = f(layoutManager, i10, i11)) == -1) {
            return false;
        }
        c10.setTargetPosition(f10);
        layoutManager.startSmoothScroll(c10);
        return true;
    }

    public void a(RecyclerView recyclerView) {
        RecyclerView recyclerView2 = this.f5195a;
        if (recyclerView2 != recyclerView) {
            if (recyclerView2 != null) {
                d();
            }
            this.f5195a = recyclerView;
            if (recyclerView != null) {
                g();
                this.f5196b = new Scroller(this.f5195a.getContext(), new DecelerateInterpolator());
                i();
            }
        }
    }

    public abstract int[] b(RecyclerView.LayoutManager layoutManager, View view);

    protected abstract RecyclerView.SmoothScroller c(RecyclerView.LayoutManager layoutManager);

    public abstract View e(RecyclerView.LayoutManager layoutManager);

    public abstract int f(RecyclerView.LayoutManager layoutManager, int i10, int i11);

    void i() {
        RecyclerView.LayoutManager layoutManager;
        View e10;
        RecyclerView recyclerView = this.f5195a;
        if (recyclerView != null && (layoutManager = recyclerView.getLayoutManager()) != null && (e10 = e(layoutManager)) != null) {
            int[] b10 = b(layoutManager, e10);
            int i10 = b10[0];
            if (i10 == 0 && b10[1] == 0) {
                return;
            }
            this.f5195a.smoothScrollBy(i10, b10[1]);
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnFlingListener
    public boolean onFling(int i10, int i11) {
        RecyclerView.LayoutManager layoutManager = this.f5195a.getLayoutManager();
        if (layoutManager == null || this.f5195a.getAdapter() == null) {
            return false;
        }
        int minFlingVelocity = this.f5195a.getMinFlingVelocity();
        if ((Math.abs(i11) <= minFlingVelocity && Math.abs(i10) <= minFlingVelocity) || !h(layoutManager, i10, i11)) {
            return false;
        }
        return true;
    }
}
