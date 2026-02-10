package og;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f40847d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f40848e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f40849i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var, Iterator it) {
        this.f40849i = f0Var;
        this.f40848e = f0Var.f40868e;
        this.f40847d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f40849i.zzb();
        if (this.f40849i.f40868e == this.f40848e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f40847d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f40847d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f40847d.remove();
        i0 i0Var = this.f40849i.f40871p;
        i10 = i0Var.f40949o;
        i0Var.f40949o = i10 - 1;
        this.f40849i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        Iterator it;
        this.f40849i = f0Var;
        Collection collection = f0Var.f40868e;
        this.f40848e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f40847d = it;
    }
}
