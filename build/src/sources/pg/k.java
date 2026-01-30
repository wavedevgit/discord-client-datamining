package pg;

import java.util.List;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k extends i implements ListIterator {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ l f45512o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(l lVar) {
        super(lVar);
        this.f45512o = lVar;
    }

    @Override // java.util.ListIterator
    public final void add(Object obj) {
        int i10;
        boolean isEmpty = this.f45512o.isEmpty();
        a();
        ((ListIterator) this.f45296d).add(obj);
        m mVar = this.f45512o.f45560q;
        i10 = mVar.f45583o;
        mVar.f45583o = i10 + 1;
        if (isEmpty) {
            this.f45512o.b();
        }
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        a();
        return ((ListIterator) this.f45296d).hasPrevious();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        a();
        return ((ListIterator) this.f45296d).nextIndex();
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        a();
        return ((ListIterator) this.f45296d).previous();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        a();
        return ((ListIterator) this.f45296d).previousIndex();
    }

    @Override // java.util.ListIterator
    public final void set(Object obj) {
        a();
        ((ListIterator) this.f45296d).set(obj);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(l lVar, int i10) {
        super(lVar, ((List) lVar.f45347e).listIterator(i10));
        this.f45512o = lVar;
    }
}
