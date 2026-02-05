package mg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f38466d;

    /* renamed from: e  reason: collision with root package name */
    Collection f38467e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f38468i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f38468i = a0Var;
        this.f38466d = a0Var.f37515i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f38466d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f38466d.next();
        this.f38467e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f38468i.f37516o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f38467e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f38466d.remove();
        i0 i0Var = this.f38468i.f37516o;
        i10 = i0Var.f37713o;
        i0Var.f37713o = i10 - this.f38467e.size();
        this.f38467e.clear();
        this.f38467e = null;
    }
}
