package mg;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class v0 extends t {

    /* renamed from: d  reason: collision with root package name */
    private final int f37151d;

    /* renamed from: e  reason: collision with root package name */
    private int f37152e;

    /* JADX INFO: Access modifiers changed from: protected */
    public v0(int i10, int i11) {
        t0.b(i11, i10, "index");
        this.f37151d = i10;
        this.f37152e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f37152e < this.f37151d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f37152e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f37152e;
            this.f37152e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f37152e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f37152e - 1;
            this.f37152e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f37152e - 1;
    }
}
