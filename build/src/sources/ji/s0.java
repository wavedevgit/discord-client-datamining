package ji;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class s0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f31922d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(Iterator it) {
        this.f31922d = (Iterator) ii.m.j(it);
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f31922d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f31922d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f31922d.remove();
    }
}
