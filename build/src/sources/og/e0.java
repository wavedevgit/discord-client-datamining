package og;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f39742d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f39743e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f39744i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var, Iterator it) {
        this.f39744i = f0Var;
        this.f39743e = f0Var.f39763e;
        this.f39742d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f39744i.zzb();
        if (this.f39744i.f39763e == this.f39743e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f39742d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f39742d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f39742d.remove();
        i0 i0Var = this.f39744i.f39766p;
        i10 = i0Var.f39844o;
        i0Var.f39844o = i10 - 1;
        this.f39744i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        Iterator it;
        this.f39744i = f0Var;
        Collection collection = f0Var.f39763e;
        this.f39743e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f39742d = it;
    }
}
