package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p3 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private int f14314d = -1;

    /* renamed from: e  reason: collision with root package name */
    private boolean f14315e;

    /* renamed from: i  reason: collision with root package name */
    private Iterator f14316i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ t3 f14317o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p3(t3 t3Var, o3 o3Var) {
        this.f14317o = t3Var;
    }

    private final Iterator a() {
        Map map;
        if (this.f14316i == null) {
            map = this.f14317o.f14345i;
            this.f14316i = map.entrySet().iterator();
        }
        return this.f14316i;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        List list;
        Map map;
        int i10 = this.f14314d + 1;
        list = this.f14317o.f14344e;
        if (i10 >= list.size()) {
            map = this.f14317o.f14345i;
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
        this.f14315e = true;
        int i10 = this.f14314d + 1;
        this.f14314d = i10;
        list = this.f14317o.f14344e;
        if (i10 < list.size()) {
            list2 = this.f14317o.f14344e;
            return (Map.Entry) list2.get(this.f14314d);
        }
        return (Map.Entry) a().next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        List list;
        if (this.f14315e) {
            this.f14315e = false;
            this.f14317o.n();
            int i10 = this.f14314d;
            list = this.f14317o.f14344e;
            if (i10 < list.size()) {
                t3 t3Var = this.f14317o;
                int i11 = this.f14314d;
                this.f14314d = i11 - 1;
                t3Var.l(i11);
                return;
            }
            a().remove();
            return;
        }
        throw new IllegalStateException("remove() was called before next()");
    }
}
