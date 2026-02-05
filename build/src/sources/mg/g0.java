package mg;

import java.util.List;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g0 extends e0 implements ListIterator {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ h0 f37651o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g0(h0 h0Var) {
        super(h0Var);
        this.f37651o = h0Var;
    }

    @Override // java.util.ListIterator
    public final void add(Object obj) {
        int i10;
        boolean isEmpty = this.f37651o.isEmpty();
        a();
        ((ListIterator) this.f37611d).add(obj);
        i0 i0Var = this.f37651o.f37687q;
        i10 = i0Var.f37713o;
        i0Var.f37713o = i10 + 1;
        if (isEmpty) {
            this.f37651o.b();
        }
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        a();
        return ((ListIterator) this.f37611d).hasPrevious();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        a();
        return ((ListIterator) this.f37611d).nextIndex();
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        a();
        return ((ListIterator) this.f37611d).previous();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        a();
        return ((ListIterator) this.f37611d).previousIndex();
    }

    @Override // java.util.ListIterator
    public final void set(Object obj) {
        a();
        ((ListIterator) this.f37611d).set(obj);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g0(h0 h0Var, int i10) {
        super(h0Var, ((List) h0Var.f37632e).listIterator(i10));
        this.f37651o = h0Var;
    }
}
