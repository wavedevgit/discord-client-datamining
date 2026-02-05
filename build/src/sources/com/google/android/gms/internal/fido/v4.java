package com.google.android.gms.internal.fido;

import java.io.InputStream;
import java.io.Serializable;
import java.nio.ByteBuffer;
import java.util.Iterator;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class v4 implements Iterable, Serializable {

    /* renamed from: e  reason: collision with root package name */
    public static final v4 f14136e = new t4(z4.f14154a);

    /* renamed from: d  reason: collision with root package name */
    private int f14137d = 0;

    static {
        int i10 = n4.f14065a;
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

    public static v4 n(byte[] bArr, int i10, int i11) {
        j(0, i11, bArr.length);
        byte[] bArr2 = new byte[i11];
        System.arraycopy(bArr, 0, bArr2, 0, i11);
        return new t4(bArr2);
    }

    public abstract byte b(int i10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract byte c(int i10);

    public abstract int d();

    protected abstract void e(byte[] bArr, int i10, int i11, int i12);

    public abstract boolean equals(Object obj);

    protected abstract int f(int i10, int i11, int i12);

    public abstract v4 g(int i10, int i11);

    public abstract InputStream h();

    public final int hashCode() {
        int i10 = this.f14137d;
        if (i10 == 0) {
            int d10 = d();
            i10 = f(d10, 0, d10);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f14137d = i10;
        }
        return i10;
    }

    public abstract ByteBuffer i();

    @Override // java.lang.Iterable
    public final /* synthetic */ Iterator iterator() {
        return new o4(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int l() {
        return this.f14137d;
    }

    public final byte[] o() {
        int d10 = d();
        if (d10 == 0) {
            return z4.f14154a;
        }
        byte[] bArr = new byte[d10];
        e(bArr, 0, 0, d10);
        return bArr;
    }

    public final String toString() {
        String concat;
        Locale locale = Locale.ROOT;
        String hexString = Integer.toHexString(System.identityHashCode(this));
        Integer valueOf = Integer.valueOf(d());
        if (d() <= 50) {
            concat = a5.a(this);
        } else {
            concat = a5.a(g(0, 47)).concat("...");
        }
        return String.format(locale, "<ByteString@%s size=%d contents=\"%s\">", hexString, valueOf, concat);
    }
}
