package ig;

import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class s implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private Object f28533d;

    /* renamed from: e  reason: collision with root package name */
    private int f28534e = 2;

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f28534e = 3;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f28534e != 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        z.a(z10);
        int i10 = this.f28534e;
        int i11 = i10 - 1;
        if (i10 != 0) {
            if (i11 == 0) {
                return true;
            }
            if (i11 != 2) {
                this.f28534e = 4;
                this.f28533d = a();
                if (this.f28534e != 3) {
                    this.f28534e = 1;
                    return true;
                }
            }
            return false;
        }
        throw null;
    }

    @Override // java.util.Iterator
    public final Object next() {
        if (hasNext()) {
            this.f28534e = 2;
            Object obj = this.f28533d;
            this.f28533d = null;
            return obj;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        throw new UnsupportedOperationException();
    }
}
