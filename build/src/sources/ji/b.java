package ji;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends t0 {

    /* renamed from: d  reason: collision with root package name */
    private EnumC0429b f31795d = EnumC0429b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f31796e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f31797a;

        static {
            int[] iArr = new int[EnumC0429b.values().length];
            f31797a = iArr;
            try {
                iArr[EnumC0429b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f31797a[EnumC0429b.READY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ji.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum EnumC0429b {
        READY,
        NOT_READY,
        DONE,
        FAILED
    }

    private boolean c() {
        this.f31795d = EnumC0429b.FAILED;
        this.f31796e = a();
        if (this.f31795d != EnumC0429b.DONE) {
            this.f31795d = EnumC0429b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f31795d = EnumC0429b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f31795d != EnumC0429b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        ii.m.o(z10);
        int i10 = a.f31797a[this.f31795d.ordinal()];
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
            this.f31795d = EnumC0429b.NOT_READY;
            Object a10 = g0.a(this.f31796e);
            this.f31796e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }
}
