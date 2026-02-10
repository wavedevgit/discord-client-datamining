package ig;

import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class s implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private Object f26845d;

    /* renamed from: e  reason: collision with root package name */
    private int f26846e = 2;

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f26846e = 3;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f26846e != 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        z.a(z10);
        int i10 = this.f26846e;
        int i11 = i10 - 1;
        if (i10 != 0) {
            if (i11 == 0) {
                return true;
            }
            if (i11 != 2) {
                this.f26846e = 4;
                this.f26845d = a();
                if (this.f26846e != 3) {
                    this.f26846e = 1;
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
            this.f26846e = 2;
            Object obj = this.f26845d;
            this.f26845d = null;
            return obj;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        throw new UnsupportedOperationException();
    }
}
