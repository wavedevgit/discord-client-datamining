package qi;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends t0 {

    /* renamed from: d  reason: collision with root package name */
    private EnumC0606b f45846d = EnumC0606b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f45847e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f45848a;

        static {
            int[] iArr = new int[EnumC0606b.values().length];
            f45848a = iArr;
            try {
                iArr[EnumC0606b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f45848a[EnumC0606b.READY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: qi.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum EnumC0606b {
        READY,
        NOT_READY,
        DONE,
        FAILED
    }

    private boolean c() {
        this.f45846d = EnumC0606b.FAILED;
        this.f45847e = a();
        if (this.f45846d != EnumC0606b.DONE) {
            this.f45846d = EnumC0606b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f45846d = EnumC0606b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f45846d != EnumC0606b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        pi.m.o(z10);
        int i10 = a.f45848a[this.f45846d.ordinal()];
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
            this.f45846d = EnumC0606b.NOT_READY;
            Object a10 = g0.a(this.f45847e);
            this.f45847e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }
}
