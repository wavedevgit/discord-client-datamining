package mi;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends t0 {

    /* renamed from: d  reason: collision with root package name */
    private EnumC0500b f38553d = EnumC0500b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f38554e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38555a;

        static {
            int[] iArr = new int[EnumC0500b.values().length];
            f38555a = iArr;
            try {
                iArr[EnumC0500b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38555a[EnumC0500b.READY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: mi.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum EnumC0500b {
        READY,
        NOT_READY,
        DONE,
        FAILED
    }

    private boolean c() {
        this.f38553d = EnumC0500b.FAILED;
        this.f38554e = a();
        if (this.f38553d != EnumC0500b.DONE) {
            this.f38553d = EnumC0500b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f38553d = EnumC0500b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f38553d != EnumC0500b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        li.m.o(z10);
        int i10 = a.f38555a[this.f38553d.ordinal()];
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
            this.f38553d = EnumC0500b.NOT_READY;
            Object a10 = g0.a(this.f38554e);
            this.f38554e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }
}
