package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f47185d;

    /* renamed from: e  reason: collision with root package name */
    Collection f47186e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f47187i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f47187i = eVar;
        this.f47185d = eVar.f47197i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f47185d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f47185d.next();
        this.f47186e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f47187i.f47198o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f47186e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f47185d.remove();
        m mVar = this.f47187i.f47198o;
        i10 = mVar.f47564o;
        mVar.f47564o = i10 - this.f47186e.size();
        this.f47186e.clear();
        this.f47186e = null;
    }
}
