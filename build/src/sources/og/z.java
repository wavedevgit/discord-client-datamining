package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f40028d;

    /* renamed from: e  reason: collision with root package name */
    Collection f40029e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f40030i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f40030i = a0Var;
        this.f40028d = a0Var.f39077i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f40028d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f40028d.next();
        this.f40029e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f40030i.f39078o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f40029e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f40028d.remove();
        i0 i0Var = this.f40030i.f39078o;
        i10 = i0Var.f39275o;
        i0Var.f39275o = i10 - this.f40029e.size();
        this.f40029e.clear();
        this.f40029e = null;
    }
}
