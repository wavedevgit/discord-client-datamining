package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p3 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private int f15360d = -1;

    /* renamed from: e  reason: collision with root package name */
    private boolean f15361e;

    /* renamed from: i  reason: collision with root package name */
    private Iterator f15362i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ t3 f15363o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p3(t3 t3Var, o3 o3Var) {
        this.f15363o = t3Var;
    }

    private final Iterator a() {
        Map map;
        if (this.f15362i == null) {
            map = this.f15363o.f15391i;
            this.f15362i = map.entrySet().iterator();
        }
        return this.f15362i;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        List list;
        Map map;
        int i10 = this.f15360d + 1;
        list = this.f15363o.f15390e;
        if (i10 >= list.size()) {
            map = this.f15363o.f15391i;
            if (!map.isEmpty() && a().hasNext()) {
                return true;
            }
            return false;
        }
        return true;
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        List list;
        List list2;
        this.f15361e = true;
        int i10 = this.f15360d + 1;
        this.f15360d = i10;
        list = this.f15363o.f15390e;
        if (i10 < list.size()) {
            list2 = this.f15363o.f15390e;
            return (Map.Entry) list2.get(this.f15360d);
        }
        return (Map.Entry) a().next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        List list;
        if (this.f15361e) {
            this.f15361e = false;
            this.f15363o.n();
            int i10 = this.f15360d;
            list = this.f15363o.f15390e;
            if (i10 < list.size()) {
                t3 t3Var = this.f15363o;
                int i11 = this.f15360d;
                this.f15360d = i11 - 1;
                t3Var.l(i11);
                return;
            }
            a().remove();
            return;
        }
        throw new IllegalStateException("remove() was called before next()");
    }
}
