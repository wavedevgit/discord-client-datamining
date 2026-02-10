package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f44498d;

    /* renamed from: e  reason: collision with root package name */
    Collection f44499e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f44500i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f44500i = iVar;
        this.f44498d = iVar.f44545i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f44498d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f44498d.next();
        this.f44499e = (Collection) entry.getValue();
        i iVar = this.f44500i;
        Object key = entry.getKey();
        return new l0(key, iVar.f44546o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f44499e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f44498d.remove();
        q.l(this.f44500i.f44546o, this.f44499e.size());
        this.f44499e.clear();
        this.f44499e = null;
    }
}
