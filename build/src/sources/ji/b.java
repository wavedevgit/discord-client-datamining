package ji;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends t0 {

    /* renamed from: d  reason: collision with root package name */
    private EnumC0418b f32041d = EnumC0418b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f32042e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f32043a;

        static {
            int[] iArr = new int[EnumC0418b.values().length];
            f32043a = iArr;
            try {
                iArr[EnumC0418b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f32043a[EnumC0418b.READY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ji.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum EnumC0418b {
        READY,
        NOT_READY,
        DONE,
        FAILED
    }

    private boolean c() {
        this.f32041d = EnumC0418b.FAILED;
        this.f32042e = a();
        if (this.f32041d != EnumC0418b.DONE) {
            this.f32041d = EnumC0418b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f32041d = EnumC0418b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f32041d != EnumC0418b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        ii.m.o(z10);
        int i10 = a.f32043a[this.f32041d.ordinal()];
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
            this.f32041d = EnumC0418b.NOT_READY;
            Object a10 = g0.a(this.f32042e);
            this.f32042e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }
}
