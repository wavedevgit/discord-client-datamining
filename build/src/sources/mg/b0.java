package mg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f38100d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f38101e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f38102i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Iterator it) {
        this.f38101e = it;
        this.f38102i = c0Var;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f38101e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f38101e.next();
        this.f38100d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f38100d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f38100d.getValue();
        this.f38101e.remove();
        i0 i0Var = this.f38102i.f38134e;
        i10 = i0Var.f38274o;
        i0Var.f38274o = i10 - collection.size();
        collection.clear();
        this.f38100d = null;
    }
}
