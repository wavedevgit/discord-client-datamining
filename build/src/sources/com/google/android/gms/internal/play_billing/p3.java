package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p3 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private int f13957d = -1;

    /* renamed from: e  reason: collision with root package name */
    private boolean f13958e;

    /* renamed from: i  reason: collision with root package name */
    private Iterator f13959i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ t3 f13960o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ p3(t3 t3Var, o3 o3Var) {
        this.f13960o = t3Var;
    }

    private final Iterator a() {
        Map map;
        if (this.f13959i == null) {
            map = this.f13960o.f13988i;
            this.f13959i = map.entrySet().iterator();
        }
        return this.f13959i;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        List list;
        Map map;
        int i10 = this.f13957d + 1;
        list = this.f13960o.f13987e;
        if (i10 >= list.size()) {
            map = this.f13960o.f13988i;
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
        this.f13958e = true;
        int i10 = this.f13957d + 1;
        this.f13957d = i10;
        list = this.f13960o.f13987e;
        if (i10 < list.size()) {
            list2 = this.f13960o.f13987e;
            return (Map.Entry) list2.get(this.f13957d);
        }
        return (Map.Entry) a().next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        List list;
        if (this.f13958e) {
            this.f13958e = false;
            this.f13960o.n();
            int i10 = this.f13957d;
            list = this.f13960o.f13987e;
            if (i10 < list.size()) {
                t3 t3Var = this.f13960o;
                int i11 = this.f13957d;
                this.f13957d = i11 - 1;
                t3Var.l(i11);
                return;
            }
            a().remove();
            return;
        }
        throw new IllegalStateException("remove() was called before next()");
    }
}
