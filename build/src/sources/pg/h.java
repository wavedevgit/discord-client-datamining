package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44316d;

    /* renamed from: e  reason: collision with root package name */
    Collection f44317e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f44318i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f44318i = iVar;
        this.f44316d = iVar.f44363i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f44316d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f44316d.next();
        this.f44317e = (Collection) entry.getValue();
        i iVar = this.f44318i;
        Object key = entry.getKey();
        return new l0(key, iVar.f44364o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f44317e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f44316d.remove();
        q.l(this.f44318i.f44364o, this.f44317e.size());
        this.f44317e.clear();
        this.f44317e = null;
    }
}
