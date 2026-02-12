package qi;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class s0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f45405d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(Iterator it) {
        this.f45405d = (Iterator) pi.m.j(it);
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f45405d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f45405d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f45405d.remove();
    }
}
