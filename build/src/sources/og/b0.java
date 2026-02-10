package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f40775d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f40776e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f40777i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Iterator it) {
        this.f40776e = it;
        this.f40777i = c0Var;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f40776e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f40776e.next();
        this.f40775d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f40775d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f40775d.getValue();
        this.f40776e.remove();
        i0 i0Var = this.f40777i.f40809e;
        i10 = i0Var.f40949o;
        i0Var.f40949o = i10 - collection.size();
        collection.clear();
        this.f40775d = null;
    }
}
