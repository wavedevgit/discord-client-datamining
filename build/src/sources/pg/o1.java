package pg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class o1 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45609d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o1(Iterator it) {
        it.getClass();
        this.f45609d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45609d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f45609d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f45609d.remove();
    }
}
