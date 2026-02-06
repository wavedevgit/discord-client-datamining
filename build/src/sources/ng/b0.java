package ng;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    Map.Entry f39702d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Iterator f39703e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ c0 f39704i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(c0 c0Var, Iterator it) {
        this.f39703e = it;
        this.f39704i = c0Var;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f39703e.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        Map.Entry entry = (Map.Entry) this.f39703e.next();
        this.f39702d = entry;
        return entry.getKey();
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f39702d != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        Collection collection = (Collection) this.f39702d.getValue();
        this.f39703e.remove();
        i0 i0Var = this.f39704i.f39736e;
        i10 = i0Var.f39876o;
        i0Var.f39876o = i10 - collection.size();
        collection.clear();
        this.f39702d = null;
    }
}
