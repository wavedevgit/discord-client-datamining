package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44499d;

    /* renamed from: e  reason: collision with root package name */
    Collection f44500e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f44501i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f44501i = iVar;
        this.f44499d = iVar.f44546i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f44499d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f44499d.next();
        this.f44500e = (Collection) entry.getValue();
        i iVar = this.f44501i;
        Object key = entry.getKey();
        return new l0(key, iVar.f44547o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f44500e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f44499d.remove();
        q.l(this.f44501i.f44547o, this.f44500e.size());
        this.f44500e.clear();
        this.f44500e = null;
    }
}
