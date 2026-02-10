package ni;

import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class a implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private b f38891d = b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f38892e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: ni.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class C0556a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38893a;

        static {
            int[] iArr = new int[b.values().length];
            f38893a = iArr;
            try {
                iArr[b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38893a[b.READY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b {
        READY,
        NOT_READY,
        DONE,
        FAILED
    }

    private boolean c() {
        this.f38891d = b.FAILED;
        this.f38892e = a();
        if (this.f38891d != b.DONE) {
            this.f38891d = b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f38891d = b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f38891d != b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        m.o(z10);
        int i10 = C0556a.f38893a[this.f38891d.ordinal()];
        if (i10 == 1) {
            return false;
        }
        if (i10 == 2) {
            return true;
        }
        return c();
    }

    @Override // java.util.Iterator
    public final Object next() {
        if (hasNext()) {
            this.f38891d = b.NOT_READY;
            Object a10 = i.a(this.f38892e);
            this.f38892e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        throw new UnsupportedOperationException();
    }
}
