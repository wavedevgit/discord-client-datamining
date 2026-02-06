package ni;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class s0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f40843d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(Iterator it) {
        this.f40843d = (Iterator) mi.m.j(it);
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f40843d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f40843d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f40843d.remove();
    }
}
