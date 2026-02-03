package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45278d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45279e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f45280i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f45280i = eVar;
        this.f45278d = eVar.f45290i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45278d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f45278d.next();
        this.f45279e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f45280i.f45291o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f45279e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f45278d.remove();
        m mVar = this.f45280i.f45291o;
        i10 = mVar.f45657o;
        mVar.f45657o = i10 - this.f45279e.size();
        this.f45279e.clear();
        this.f45279e = null;
    }
}
