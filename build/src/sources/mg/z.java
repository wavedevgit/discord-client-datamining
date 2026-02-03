package mg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f39007d;

    /* renamed from: e  reason: collision with root package name */
    Collection f39008e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f39009i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f39009i = a0Var;
        this.f39007d = a0Var.f38056i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f39007d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f39007d.next();
        this.f39008e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f39009i.f38057o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f39008e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f39007d.remove();
        i0 i0Var = this.f39009i.f38057o;
        i10 = i0Var.f38254o;
        i0Var.f38254o = i10 - this.f39008e.size();
        this.f39008e.clear();
        this.f39008e = null;
    }
}
