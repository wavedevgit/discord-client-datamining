package pg;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class gl extends r1 {

    /* renamed from: d  reason: collision with root package name */
    private final int f45235d;

    /* renamed from: e  reason: collision with root package name */
    private int f45236e;

    /* JADX INFO: Access modifiers changed from: protected */
    public gl(int i10, int i11) {
        el.b(i11, i10, "index");
        this.f45235d = i10;
        this.f45236e = i11;
    }

    protected abstract Object a(int i10);

    @Override // java.util.Iterator, java.util.ListIterator
    public final boolean hasNext() {
        if (this.f45236e < this.f45235d) {
            return true;
        }
        return false;
    }

    @Override // java.util.ListIterator
    public final boolean hasPrevious() {
        if (this.f45236e > 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator, java.util.ListIterator
    public final Object next() {
        if (hasNext()) {
            int i10 = this.f45236e;
            this.f45236e = i10 + 1;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int nextIndex() {
        return this.f45236e;
    }

    @Override // java.util.ListIterator
    public final Object previous() {
        if (hasPrevious()) {
            int i10 = this.f45236e - 1;
            this.f45236e = i10;
            return a(i10);
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.ListIterator
    public final int previousIndex() {
        return this.f45236e - 1;
    }
}
