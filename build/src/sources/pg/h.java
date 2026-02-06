package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44268d;

    /* renamed from: e  reason: collision with root package name */
    Collection f44269e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f44270i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f44270i = iVar;
        this.f44268d = iVar.f44315i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f44268d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f44268d.next();
        this.f44269e = (Collection) entry.getValue();
        i iVar = this.f44270i;
        Object key = entry.getKey();
        return new l0(key, iVar.f44316o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f44269e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f44268d.remove();
        q.l(this.f44270i.f44316o, this.f44269e.size());
        this.f44269e.clear();
        this.f44269e = null;
    }
}
