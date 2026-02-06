package com.google.android.gms.internal.play_billing;

import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.Comparator;
import java.util.Iterator;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r0 implements Iterable, Serializable {

    /* renamed from: e  reason: collision with root package name */
    public static final r0 f14322e = new o0(y1.f14367d);

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f14323i;

    /* renamed from: o  reason: collision with root package name */
    private static final q0 f14324o;

    /* renamed from: d  reason: collision with root package name */
    private int f14325d = 0;

    static {
        int i10 = c0.f14158a;
        f14324o = new q0(null);
        f14323i = new i0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int j(int i10, int i11, int i12) {
        int i13 = i11 - i10;
        if ((i10 | i11 | i13 | (i12 - i11)) < 0) {
            if (i10 >= 0) {
                if (i11 < i10) {
                    throw new IndexOutOfBoundsException("Beginning index larger than ending index: " + i10 + ", " + i11);
                }
                throw new IndexOutOfBoundsException("End index: " + i11 + " >= " + i12);
            }
            throw new IndexOutOfBoundsException("Beginning index: " + i10 + " < 0");
        }
        return i13;
    }

    public static r0 o(byte[] bArr, int i10, int i11) {
        j(i10, i10 + i11, bArr.length);
        byte[] bArr2 = new byte[i11];
        System.arraycopy(bArr, i10, bArr2, 0, i11);
        return new o0(bArr2);
    }

    public abstract byte b(int i10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract byte c(int i10);

    public abstract int d();

    protected abstract int e(int i10, int i11, int i12);

    public abstract boolean equals(Object obj);

    public abstract r0 f(int i10, int i11);

    protected abstract String g(Charset charset);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void h(g0 g0Var);

    public final int hashCode() {
        int i10 = this.f14325d;
        if (i10 == 0) {
            int d10 = d();
            i10 = e(d10, 0, d10);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f14325d = i10;
        }
        return i10;
    }

    public abstract boolean i();

    @Override // java.lang.Iterable
    public final /* synthetic */ Iterator iterator() {
        return new h0(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int l() {
        return this.f14325d;
    }

    public final String p(Charset charset) {
        return d() == 0 ? "" : g(charset);
    }

    public final String toString() {
        String concat;
        Locale locale = Locale.ROOT;
        String hexString = Integer.toHexString(System.identityHashCode(this));
        Integer valueOf = Integer.valueOf(d());
        if (d() <= 50) {
            concat = u3.a(this);
        } else {
            concat = u3.a(f(0, 47)).concat("...");
        }
        return String.format(locale, "<ByteString@%s size=%d contents=\"%s\">", hexString, valueOf, concat);
    }
}
