package hg;

import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class j implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private Object f26988d;

    /* renamed from: e  reason: collision with root package name */
    private int f26989e = 2;

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f26989e = 3;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        int i10 = this.f26989e;
        if (i10 != 4) {
            int i11 = i10 - 1;
            if (i10 != 0) {
                if (i11 == 0) {
                    return true;
                }
                if (i11 != 2) {
                    this.f26989e = 4;
                    this.f26988d = a();
                    if (this.f26989e != 3) {
                        this.f26989e = 1;
                        return true;
                    }
                }
                return false;
            }
            throw null;
        }
        throw new IllegalStateException();
    }

    @Override // java.util.Iterator
    public final Object next() {
        if (hasNext()) {
            this.f26989e = 2;
            Object obj = this.f26988d;
            this.f26988d = null;
            return obj;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        throw new UnsupportedOperationException();
    }
}
