package og;

import java.util.List;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o extends m implements ListIterator {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ p f43358o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o(p pVar) {
        super(pVar);
        this.f43358o = pVar;
    }

    @Override // java.util.ListIterator
    public final void add(Object obj) {
        boolean isEmpty = this.f43358o.isEmpty();
        a();
        ((ListIterator) this.f43276d).add(obj);
        q.i(this.f43358o.f43392q);
        if (isEmpty) {
            this.f43358o.b();
        }
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        a();
        return ((ListIterator) this.f43276d).hasPrevious();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        a();
        return ((ListIterator) this.f43276d).nextIndex();
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        a();
        return ((ListIterator) this.f43276d).previous();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        a();
        return ((ListIterator) this.f43276d).previousIndex();
    }

    @Override // java.util.ListIterator
    public final void set(Object obj) {
        a();
        ((ListIterator) this.f43276d).set(obj);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o(p pVar, int i10) {
        super(pVar, ((List) pVar.f43318e).listIterator(i10));
        this.f43358o = pVar;
    }
}
