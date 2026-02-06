package androidx.recyclerview.widget;

import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements m {

    /* renamed from: a  reason: collision with root package name */
    private final RecyclerView.Adapter f5383a;

    public a(RecyclerView.Adapter adapter) {
        this.f5383a = adapter;
    }

    @Override // androidx.recyclerview.widget.m
    public void a(int i10, int i11) {
        this.f5383a.notifyItemRangeInserted(i10, i11);
    }

    @Override // androidx.recyclerview.widget.m
    public void b(int i10, int i11) {
        this.f5383a.notifyItemRangeRemoved(i10, i11);
    }

    @Override // androidx.recyclerview.widget.m
    public void c(int i10, int i11, Object obj) {
        this.f5383a.notifyItemRangeChanged(i10, i11, obj);
    }

    @Override // androidx.recyclerview.widget.m
    public void d(int i10, int i11) {
        this.f5383a.notifyItemMoved(i10, i11);
    }
}
