package ig;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class h0 extends m {

    /* renamed from: d  reason: collision with root package name */
    private final int f28524d;

    /* renamed from: e  reason: collision with root package name */
    private int f28525e;

    /* JADX INFO: Access modifiers changed from: protected */
    public h0(int i10, int i11) {
        z.c(i11, i10, "index");
        this.f28524d = i10;
        this.f28525e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f28525e < this.f28524d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f28525e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f28525e;
            this.f28525e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f28525e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f28525e - 1;
            this.f28525e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f28525e - 1;
    }
}
