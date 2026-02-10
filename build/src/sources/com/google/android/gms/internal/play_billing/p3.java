package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p3 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private int f15031d = -1;

    /* renamed from: e  reason: collision with root package name */
    private boolean f15032e;

    /* renamed from: i  reason: collision with root package name */
    private Iterator f15033i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ t3 f15034o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p3(t3 t3Var, o3 o3Var) {
        this.f15034o = t3Var;
    }

    private final Iterator a() {
        Map map;
        if (this.f15033i == null) {
            map = this.f15034o.f15062i;
            this.f15033i = map.entrySet().iterator();
        }
        return this.f15033i;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        List list;
        Map map;
        int i10 = this.f15031d + 1;
        list = this.f15034o.f15061e;
        if (i10 >= list.size()) {
            map = this.f15034o.f15062i;
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
        this.f15032e = true;
        int i10 = this.f15031d + 1;
        this.f15031d = i10;
        list = this.f15034o.f15061e;
        if (i10 < list.size()) {
            list2 = this.f15034o.f15061e;
            return (Map.Entry) list2.get(this.f15031d);
        }
        return (Map.Entry) a().next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        List list;
        if (this.f15032e) {
            this.f15032e = false;
            this.f15034o.n();
            int i10 = this.f15031d;
            list = this.f15034o.f15061e;
            if (i10 < list.size()) {
                t3 t3Var = this.f15034o;
                int i11 = this.f15031d;
                this.f15031d = i11 - 1;
                t3Var.l(i11);
                return;
            }
            a().remove();
            return;
        }
        throw new IllegalStateException("remove() was called before next()");
    }
}
