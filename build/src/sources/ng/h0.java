package ng;

import java.util.Collection;
import java.util.List;
import java.util.ListIterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h0 extends f0 implements List {

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i0 f39850q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h0(i0 i0Var, Object obj, List list, f0 f0Var) {
        super(i0Var, obj, list, f0Var);
        this.f39850q = i0Var;
    }

    @Override // java.util.List
    public final void add(int i10, Object obj) {
        int i11;
        zzb();
        boolean isEmpty = this.f39795e.isEmpty();
        ((List) this.f39795e).add(i10, obj);
        i0 i0Var = this.f39850q;
        i11 = i0Var.f39876o;
        i0Var.f39876o = i11 + 1;
        if (isEmpty) {
            b();
        }
    }

    @Override // java.util.List
    public final boolean addAll(int i10, Collection collection) {
        int i11;
        if (collection.isEmpty()) {
            return false;
        }
        int size = size();
        boolean addAll = ((List) this.f39795e).addAll(i10, collection);
        if (addAll) {
            int size2 = this.f39795e.size();
            i0 i0Var = this.f39850q;
            i11 = i0Var.f39876o;
            i0Var.f39876o = i11 + (size2 - size);
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
        return ((List) this.f39795e).get(i10);
    }

    @Override // java.util.List
    public final int indexOf(Object obj) {
        zzb();
        return ((List) this.f39795e).indexOf(obj);
    }

    @Override // java.util.List
    public final int lastIndexOf(Object obj) {
        zzb();
        return ((List) this.f39795e).lastIndexOf(obj);
    }

    @Override // java.util.List
    public final ListIterator listIterator() {
        zzb();
        return new g0(this);
    }

    @Override // java.util.List
    public final Object remove(int i10) {
        int i11;
        zzb();
        Object remove = ((List) this.f39795e).remove(i10);
        i0 i0Var = this.f39850q;
        i11 = i0Var.f39876o;
        i0Var.f39876o = i11 - 1;
        c();
        return remove;
    }

    @Override // java.util.List
    public final Object set(int i10, Object obj) {
        zzb();
        return ((List) this.f39795e).set(i10, obj);
    }

    @Override // java.util.List
    public final List subList(int i10, int i11) {
        zzb();
        List subList = ((List) this.f39795e).subList(i10, i11);
        f0 f0Var = this.f39796i;
        if (f0Var == null) {
            f0Var = this;
        }
        return this.f39850q.k(this.f39794d, subList, f0Var);
    }

    @Override // java.util.List
    public final ListIterator listIterator(int i10) {
        zzb();
        return new g0(this, i10);
    }
}
