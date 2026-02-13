package qg;

import java.util.List;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o extends m implements ListIterator {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ p f45333o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o(p pVar) {
        super(pVar);
        this.f45333o = pVar;
    }

    @Override // java.util.ListIterator
    public final void add(Object obj) {
        boolean isEmpty = this.f45333o.isEmpty();
        a();
        ((ListIterator) this.f45251d).add(obj);
        q.i(this.f45333o.f45367q);
        if (isEmpty) {
            this.f45333o.b();
        }
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        a();
        return ((ListIterator) this.f45251d).hasPrevious();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        a();
        return ((ListIterator) this.f45251d).nextIndex();
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        a();
        return ((ListIterator) this.f45251d).previous();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        a();
        return ((ListIterator) this.f45251d).previousIndex();
    }

    @Override // java.util.ListIterator
    public final void set(Object obj) {
        a();
        ((ListIterator) this.f45251d).set(obj);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o(p pVar, int i10) {
        super(pVar, ((List) pVar.f45293e).listIterator(i10));
        this.f45333o = pVar;
    }
}
