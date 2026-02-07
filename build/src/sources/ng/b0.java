package ng;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f39750d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f39751e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f39752i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Iterator it) {
        this.f39751e = it;
        this.f39752i = c0Var;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f39751e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f39751e.next();
        this.f39750d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f39750d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f39750d.getValue();
        this.f39751e.remove();
        i0 i0Var = this.f39752i.f39784e;
        i10 = i0Var.f39924o;
        i0Var.f39924o = i10 - collection.size();
        collection.clear();
        this.f39750d = null;
    }
}
