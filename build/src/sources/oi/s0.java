package oi;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class s0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f41916d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(Iterator it) {
        this.f41916d = (Iterator) ni.m.j(it);
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f41916d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f41916d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f41916d.remove();
    }
}
