package qg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45830d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45831e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i f45832i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f45832i = iVar;
        this.f45830d = iVar.f45877i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45830d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f45830d.next();
        this.f45831e = (Collection) entry.getValue();
        i iVar = this.f45832i;
        Object key = entry.getKey();
        return new l0(key, iVar.f45878o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        if (this.f45831e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c.d(z10, "no calls to next() since the last call to remove()");
        this.f45830d.remove();
        q.l(this.f45832i.f45878o, this.f45831e.size());
        this.f45831e.clear();
        this.f45831e = null;
    }
}
