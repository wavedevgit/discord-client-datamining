package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45204d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45205e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f45206i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f45206i = eVar;
        this.f45204d = eVar.f45216i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45204d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f45204d.next();
        this.f45205e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f45206i.f45217o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f45205e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f45204d.remove();
        m mVar = this.f45206i.f45217o;
        i10 = mVar.f45583o;
        mVar.f45583o = i10 - this.f45205e.size();
        this.f45205e.clear();
        this.f45205e = null;
    }
}
