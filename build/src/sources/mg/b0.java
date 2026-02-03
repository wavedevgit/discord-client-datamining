package mg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f37877d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f37878e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f37879i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Iterator it) {
        this.f37878e = it;
        this.f37879i = c0Var;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f37878e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f37878e.next();
        this.f37877d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f37877d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f37877d.getValue();
        this.f37878e.remove();
        i0 i0Var = this.f37879i.f37911e;
        i10 = i0Var.f38051o;
        i0Var.f38051o = i10 - collection.size();
        collection.clear();
        this.f37877d = null;
    }
}
