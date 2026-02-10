package og;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f41702d;

    /* renamed from: e  reason: collision with root package name */
    Collection f41703e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ a0 f41704i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(a0 a0Var) {
        this.f41704i = a0Var;
        this.f41702d = a0Var.f40751i.entrySet().iterator();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f41702d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f41702d.next();
        this.f41703e = (Collection) entry.getValue();
        Object key = entry.getKey();
        return new e1(key, this.f41704i.f40752o.h(key, (Collection) entry.getValue()));
    }

    @Override // java.util.Iterator
    public final void remove() {
        boolean z10;
        int i10;
        if (this.f41703e != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.e(z10, "no calls to next() since the last call to remove()");
        this.f41702d.remove();
        i0 i0Var = this.f41704i.f40752o;
        i10 = i0Var.f40949o;
        i0Var.f40949o = i10 - this.f41703e.size();
        this.f41703e.clear();
        this.f41703e = null;
    }
}
