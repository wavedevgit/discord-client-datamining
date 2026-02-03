package mg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f38152d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f38153e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f38154i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var, Iterator it) {
        this.f38154i = f0Var;
        this.f38153e = f0Var.f38173e;
        this.f38152d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f38154i.zzb();
        if (this.f38154i.f38173e == this.f38153e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f38152d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f38152d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f38152d.remove();
        i0 i0Var = this.f38154i.f38176p;
        i10 = i0Var.f38254o;
        i0Var.f38254o = i10 - 1;
        this.f38154i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        Iterator it;
        this.f38154i = f0Var;
        Collection collection = f0Var.f38173e;
        this.f38153e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f38152d = it;
    }
}
