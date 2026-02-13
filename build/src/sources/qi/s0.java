package qi;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class s0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45973d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(Iterator it) {
        this.f45973d = (Iterator) pi.m.j(it);
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45973d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f45973d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f45973d.remove();
    }
}
