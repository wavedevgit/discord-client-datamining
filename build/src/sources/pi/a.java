package pi;

import java.util.Iterator;
import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class a implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private b f43293d = b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f43294e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: pi.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class C0590a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f43295a;

        static {
            int[] iArr = new int[b.values().length];
            f43295a = iArr;
            try {
                iArr[b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f43295a[b.READY.ordinal()] = 2;
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
        this.f43293d = b.FAILED;
        this.f43294e = a();
        if (this.f43293d != b.DONE) {
            this.f43293d = b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f43293d = b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f43293d != b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        m.o(z10);
        int i10 = C0590a.f43295a[this.f43293d.ordinal()];
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
            this.f43293d = b.NOT_READY;
            Object a10 = i.a(this.f43294e);
            this.f43294e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public final void remove() {
        throw new UnsupportedOperationException();
    }
}
