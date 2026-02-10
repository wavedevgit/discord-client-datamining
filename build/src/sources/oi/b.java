package oi;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends t0 {

    /* renamed from: d  reason: collision with root package name */
    private EnumC0591b f41789d = EnumC0591b.NOT_READY;

    /* renamed from: e  reason: collision with root package name */
    private Object f41790e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f41791a;

        static {
            int[] iArr = new int[EnumC0591b.values().length];
            f41791a = iArr;
            try {
                iArr[EnumC0591b.DONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f41791a[EnumC0591b.READY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: oi.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum EnumC0591b {
        READY,
        NOT_READY,
        DONE,
        FAILED
    }

    private boolean c() {
        this.f41789d = EnumC0591b.FAILED;
        this.f41790e = a();
        if (this.f41789d != EnumC0591b.DONE) {
            this.f41789d = EnumC0591b.READY;
            return true;
        }
        return false;
    }

    protected abstract Object a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final Object b() {
        this.f41789d = EnumC0591b.DONE;
        return null;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        boolean z10;
        if (this.f41789d != EnumC0591b.FAILED) {
            z10 = true;
        } else {
            z10 = false;
        }
        ni.m.o(z10);
        int i10 = a.f41791a[this.f41789d.ordinal()];
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
            this.f41789d = EnumC0591b.NOT_READY;
            Object a10 = g0.a(this.f41790e);
            this.f41790e = null;
            return a10;
        }
        throw new NoSuchElementException();
    }
}
