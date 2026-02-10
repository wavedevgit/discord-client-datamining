package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f39101d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f39102e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f39103i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Iterator it) {
        this.f39102e = it;
        this.f39103i = c0Var;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f39102e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f39102e.next();
        this.f39101d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f39101d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f39101d.getValue();
        this.f39102e.remove();
        i0 i0Var = this.f39103i.f39135e;
        i10 = i0Var.f39275o;
        i0Var.f39275o = i10 - collection.size();
        collection.clear();
        this.f39101d = null;
    }
}
