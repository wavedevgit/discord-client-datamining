package pg;

import java.util.Collection;
import java.util.List;
import java.util.ListIterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l extends j implements List {

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ m f45560q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(m mVar, Object obj, List list, j jVar) {
        super(mVar, obj, list, jVar);
        this.f45560q = mVar;
    }

    @Override // java.util.List
    public final void add(int i10, Object obj) {
        int i11;
        zzb();
        boolean isEmpty = this.f45347e.isEmpty();
        ((List) this.f45347e).add(i10, obj);
        m mVar = this.f45560q;
        i11 = mVar.f45583o;
        mVar.f45583o = i11 + 1;
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
        boolean addAll = ((List) this.f45347e).addAll(i10, collection);
        if (addAll) {
            int size2 = this.f45347e.size();
            m mVar = this.f45560q;
            i11 = mVar.f45583o;
            mVar.f45583o = i11 + (size2 - size);
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
        return ((List) this.f45347e).get(i10);
    }

    @Override // java.util.List
    public final int indexOf(Object obj) {
        zzb();
        return ((List) this.f45347e).indexOf(obj);
    }

    @Override // java.util.List
    public final int lastIndexOf(Object obj) {
        zzb();
        return ((List) this.f45347e).lastIndexOf(obj);
    }

    @Override // java.util.List
    public final ListIterator listIterator() {
        zzb();
        return new k(this);
    }

    @Override // java.util.List
    public final Object remove(int i10) {
        int i11;
        zzb();
        Object remove = ((List) this.f45347e).remove(i10);
        m mVar = this.f45560q;
        i11 = mVar.f45583o;
        mVar.f45583o = i11 - 1;
        c();
        return remove;
    }

    @Override // java.util.List
    public final Object set(int i10, Object obj) {
        zzb();
        return ((List) this.f45347e).set(i10, obj);
    }

    @Override // java.util.List
    public final List subList(int i10, int i11) {
        zzb();
        List subList = ((List) this.f45347e).subList(i10, i11);
        j jVar = this.f45348i;
        if (jVar == null) {
            jVar = this;
        }
        return this.f45560q.k(this.f45346d, subList, jVar);
    }

    @Override // java.util.List
    public final ListIterator listIterator(int i10) {
        zzb();
        return new k(this, i10);
    }
}
