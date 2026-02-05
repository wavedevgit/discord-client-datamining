package pg;

import java.io.Serializable;
import java.util.AbstractList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t0 extends AbstractList implements RandomAccess, Serializable {

    /* renamed from: d  reason: collision with root package name */
    final List f45702d;

    /* renamed from: e  reason: collision with root package name */
    final uj f45703e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t0(List list, uj ujVar) {
        list.getClass();
        this.f45702d = list;
        this.f45703e = ujVar;
    }

    @Override // java.util.AbstractList, java.util.List
    public final Object get(int i10) {
        return this.f45703e.a(this.f45702d.get(i10));
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean isEmpty() {
        return this.f45702d.isEmpty();
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    public final Iterator iterator() {
        return listIterator();
    }

    @Override // java.util.AbstractList, java.util.List
    public final ListIterator listIterator(int i10) {
        return new s0(this, this.f45702d.listIterator(i10));
    }

    @Override // java.util.AbstractList, java.util.List
    public final Object remove(int i10) {
        return this.f45703e.a(this.f45702d.remove(i10));
    }

    @Override // java.util.AbstractList
    protected final void removeRange(int i10, int i11) {
        this.f45702d.subList(i10, i11).clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f45702d.size();
    }
}
