package mg;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class e0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f37611d;

    /* renamed from: e  reason: collision with root package name */
    final Collection f37612e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ f0 f37613i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var, Iterator it) {
        this.f37613i = f0Var;
        this.f37612e = f0Var.f37632e;
        this.f37611d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f37613i.zzb();
        if (this.f37613i.f37632e == this.f37612e) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        a();
        return this.f37611d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        a();
        return this.f37611d.next();
    }

    @Override // java.util.Iterator
    public final void remove() {
        int i10;
        this.f37611d.remove();
        i0 i0Var = this.f37613i.f37635p;
        i10 = i0Var.f37713o;
        i0Var.f37713o = i10 - 1;
        this.f37613i.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(f0 f0Var) {
        Iterator it;
        this.f37613i = f0Var;
        Collection collection = f0Var.f37632e;
        this.f37612e = collection;
        if (collection instanceof List) {
            it = ((List) collection).listIterator();
        } else {
            it = collection.iterator();
        }
        this.f37611d = it;
    }
}
