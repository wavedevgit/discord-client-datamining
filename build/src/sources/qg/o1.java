package qg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class o1 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f47465d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o1(Iterator it) {
        it.getClass();
        this.f47465d = it;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f47465d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f47465d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f47465d.remove();
    }
}
