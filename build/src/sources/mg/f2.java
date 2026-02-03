package mg;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class f2 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f37974d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Iterator it) {
        it.getClass();
        this.f37974d = it;
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f37974d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f37974d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f37974d.remove();
    }
}
