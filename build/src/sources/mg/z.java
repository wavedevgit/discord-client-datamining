package mg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f39027d;

    /* renamed from: e  reason: collision with root package name */
    Collection f39028e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f39029i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f39029i = a0Var;
        this.f39027d = a0Var.f38076i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f39027d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f39027d.next();
        this.f39028e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f39029i.f38077o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f39028e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f39027d.remove();
        i0 i0Var = this.f39029i.f38077o;
        i10 = i0Var.f38274o;
        i0Var.f38274o = i10 - this.f39028e.size();
        this.f39028e.clear();
        this.f39028e = null;
    }
}
