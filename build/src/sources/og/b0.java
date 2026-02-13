package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f39670d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f39671e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f39672i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Iterator it) {
        this.f39671e = it;
        this.f39672i = c0Var;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f39671e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f39671e.next();
        this.f39670d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f39670d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f39670d.getValue();
        this.f39671e.remove();
        i0 i0Var = this.f39672i.f39704e;
        i10 = i0Var.f39844o;
        i0Var.f39844o = i10 - collection.size();
        collection.clear();
        this.f39670d = null;
    }
}
