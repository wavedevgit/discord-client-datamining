package ji;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class s0 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    final Iterator f32168d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(Iterator it) {
        this.f32168d = (Iterator) ii.m.j(it);
    }

    abstract Object a(Object obj);

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f32168d.hasNext();
    }

    @Override // java.util.Iterator
    public final Object next() {
        return a(this.f32168d.next());
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f32168d.remove();
    }
}
