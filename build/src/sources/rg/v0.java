package rg;

import java.io.Serializable;
import java.util.AbstractSequentialList;
import java.util.List;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v0 extends AbstractSequentialList implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final List f47770d;

    /* renamed from: e  reason: collision with root package name */
    final uj f47771e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(List list, uj ujVar) {
        list.getClass();
        this.f47770d = list;
        this.f47771e = ujVar;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean isEmpty() {
        return this.f47770d.isEmpty();
    }

    @Override // java.util.AbstractSequentialList, java.util.AbstractList, java.util.List
    public final ListIterator listIterator(int i10) {
        return new u0(this, this.f47770d.listIterator(i10));
    }

    @Override // java.util.AbstractList
    protected final void removeRange(int i10, int i11) {
        this.f47770d.subList(i10, i11).clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f47770d.size();
    }
}
