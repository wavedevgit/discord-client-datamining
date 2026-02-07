package ni;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends t0 {

    /* renamed from: d  reason: collision with root package name */
    private EnumC0544b f40764d = EnumC0544b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f40765e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40766a;

        static {
            int[] iArr = new int[EnumC0544b.values().length];
            f40766a = iArr;
            try {
                iArr[EnumC0544b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40766a[EnumC0544b.READY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ni.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum EnumC0544b {
        READY,
        NOT_READY,
        DONE,
        FAILED
    }

    private boolean c() {
        this.f40764d = EnumC0544b.FAILED;
        this.f40765e = a();
        if (this.f40764d != EnumC0544b.DONE) {
            this.f40764d = EnumC0544b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f40764d = EnumC0544b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f40764d != EnumC0544b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        mi.m.o(z10);
        int i10 = a.f40766a[this.f40764d.ordinal()];
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
            this.f40764d = EnumC0544b.NOT_READY;
            Object a10 = g0.a(this.f40765e);
            this.f40765e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }
}
