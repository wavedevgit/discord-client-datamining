package og;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class m1 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f43279d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m1(Iterator it) {
        it.getClass();
        this.f43279d = it;
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f43279d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f43279d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f43279d.remove();
    }
}
