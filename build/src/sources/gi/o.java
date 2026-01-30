package gi;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o extends x {

    /* renamed from: d  reason: collision with root package name */
    private final int f26943d;

    /* renamed from: e  reason: collision with root package name */
    private int f26944e;

    /* JADX INFO: Access modifiers changed from: protected */
    public o(int i10, int i11) {
        m.b(i11, i10, "index");
        this.f26943d = i10;
        this.f26944e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f26944e < this.f26943d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f26944e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f26944e;
            this.f26944e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f26944e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f26944e - 1;
            this.f26944e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f26944e - 1;
    }
}
