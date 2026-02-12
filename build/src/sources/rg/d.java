package rg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f46617d;

    /* renamed from: e  reason: collision with root package name */
    Collection f46618e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f46619i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar) {
        this.f46619i = eVar;
        this.f46617d = eVar.f46629i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f46617d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f46617d.next();
        this.f46618e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new i0(key, this.f46619i.f46630o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f46618e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        el.d(z10, "no calls to next() since the last call to remove()");
        this.f46617d.remove();
        m mVar = this.f46619i.f46630o;
        i10 = mVar.f46996o;
        mVar.f46996o = i10 - this.f46618e.size();
        this.f46618e.clear();
        this.f46618e = null;
    }
}
