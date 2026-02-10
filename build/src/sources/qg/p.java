package qg;

import java.util.Collection;
import java.util.List;
import java.util.ListIterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p extends n implements List {

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ q f46130q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public p(q qVar, Object obj, List list, n nVar) {
        super(qVar, obj, list, nVar);
        this.f46130q = qVar;
    }

    @Override // java.util.List
    public final void add(int i10, Object obj) {
        zzb();
        boolean isEmpty = this.f46056e.isEmpty();
        ((List) this.f46056e).add(i10, obj);
        q.i(this.f46130q);
        if (isEmpty) {
            b();
        }
    }

    @Override // java.util.List
    public final boolean addAll(int i10, Collection collection) {
        if (collection.isEmpty()) {
            return false;
        }
        int size = size();
        boolean addAll = ((List) this.f46056e).addAll(i10, collection);
        if (addAll) {
            q.k(this.f46130q, this.f46056e.size() - size);
            if (size == 0) {
                b();
                return true;
            }
            return addAll;
        }
        return addAll;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        zzb();
        return ((List) this.f46056e).get(i10);
    }

    @Override // java.util.List
    public final int indexOf(Object obj) {
        zzb();
        return ((List) this.f46056e).indexOf(obj);
    }

    @Override // java.util.List
    public final int lastIndexOf(Object obj) {
        zzb();
        return ((List) this.f46056e).lastIndexOf(obj);
    }

    @Override // java.util.List
    public final ListIterator listIterator() {
        zzb();
        return new o(this);
    }

    @Override // java.util.List
    public final Object remove(int i10) {
        zzb();
        Object remove = ((List) this.f46056e).remove(i10);
        q.j(this.f46130q);
        c();
        return remove;
    }

    @Override // java.util.List
    public final Object set(int i10, Object obj) {
        zzb();
        return ((List) this.f46056e).set(i10, obj);
    }

    @Override // java.util.List
    public final List subList(int i10, int i11) {
        zzb();
        q qVar = this.f46130q;
        Object obj = this.f46055d;
        List subList = ((List) this.f46056e).subList(i10, i11);
        n nVar = this.f46057i;
        if (nVar == null) {
            nVar = this;
        }
        return qVar.n(obj, subList, nVar);
    }

    @Override // java.util.List
    public final ListIterator listIterator(int i10) {
        zzb();
        return new o(this, i10);
    }
}
