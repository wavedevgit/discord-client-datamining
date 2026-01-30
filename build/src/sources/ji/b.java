package ji;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends t0 {

    /* renamed from: d  reason: collision with root package name */
    private EnumC0418b f32057d = EnumC0418b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f32058e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f32059a;

        static {
            int[] iArr = new int[EnumC0418b.values().length];
            f32059a = iArr;
            try {
                iArr[EnumC0418b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f32059a[EnumC0418b.READY.ordinal()] = 2;
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
        this.f32057d = EnumC0418b.FAILED;
        this.f32058e = a();
        if (this.f32057d != EnumC0418b.DONE) {
            this.f32057d = EnumC0418b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f32057d = EnumC0418b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f32057d != EnumC0418b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        ii.m.o(z10);
        int i10 = a.f32059a[this.f32057d.ordinal()];
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
            this.f32057d = EnumC0418b.NOT_READY;
            Object a10 = g0.a(this.f32058e);
            this.f32058e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }
}
