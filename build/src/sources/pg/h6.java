package pg;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class h6 extends d {

    /* renamed from: d  reason: collision with root package name */
    private final int f43605d;

    /* renamed from: e  reason: collision with root package name */
    private int f43606e;

    /* JADX INFO: Access modifiers changed from: protected */
    public h6(int i10, int i11) {
        f4.b(i11, i10, "index");
        this.f43605d = i10;
        this.f43606e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f43606e < this.f43605d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f43606e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f43606e;
            this.f43606e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f43606e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f43606e - 1;
            this.f43606e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f43606e - 1;
    }
}
