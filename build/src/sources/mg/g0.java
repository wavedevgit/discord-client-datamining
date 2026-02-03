package mg;

import java.util.List;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g0 extends e0 implements ListIterator {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ h0 f37989o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g0(h0 h0Var) {
        super(h0Var);
        this.f37989o = h0Var;
    }

    @Override // java.util.ListIterator
    public final void add(Object obj) {
        int i10;
        boolean isEmpty = this.f37989o.isEmpty();
        a();
        ((ListIterator) this.f37949d).add(obj);
        i0 i0Var = this.f37989o.f38025q;
        i10 = i0Var.f38051o;
        i0Var.f38051o = i10 + 1;
        if (isEmpty) {
            this.f37989o.b();
        }
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        a();
        return ((ListIterator) this.f37949d).hasPrevious();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        a();
        return ((ListIterator) this.f37949d).nextIndex();
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        a();
        return ((ListIterator) this.f37949d).previous();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        a();
        return ((ListIterator) this.f37949d).previousIndex();
    }

    @Override // java.util.ListIterator
    public final void set(Object obj) {
        a();
        ((ListIterator) this.f37949d).set(obj);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g0(h0 h0Var, int i10) {
        super(h0Var, ((List) h0Var.f37970e).listIterator(i10));
        this.f37989o = h0Var;
    }
}
