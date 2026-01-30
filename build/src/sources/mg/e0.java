package mg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f38172d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f38173e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f38174i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var, Iterator it) {
        this.f38174i = f0Var;
        this.f38173e = f0Var.f38193e;
        this.f38172d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f38174i.zzb();
        if (this.f38174i.f38193e == this.f38173e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f38172d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f38172d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f38172d.remove();
        i0 i0Var = this.f38174i.f38196p;
        i10 = i0Var.f38274o;
        i0Var.f38274o = i10 - 1;
        this.f38174i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        Iterator it;
        this.f38174i = f0Var;
        Collection collection = f0Var.f38193e;
        this.f38173e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f38172d = it;
    }
}
