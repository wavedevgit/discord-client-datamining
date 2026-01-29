package pg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45188d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45189e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f45190i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f45190i = eVar;
        this.f45188d = eVar.f45200i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45188d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f45188d.next();
        this.f45189e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f45190i.f45201o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f45189e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f45188d.remove();
        m mVar = this.f45190i.f45201o;
        i10 = mVar.f45567o;
        mVar.f45567o = i10 - this.f45189e.size();
        this.f45189e.clear();
        this.f45189e = null;
    }
}
