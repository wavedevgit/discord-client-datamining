package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i2 {

    /* renamed from: d  reason: collision with root package name */
    private static final char[] f14658d = "0123456789abcdef".toCharArray();

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f14659e = 0;

    public abstract int a();

    public abstract int b();

    abstract boolean c(i2 i2Var);

    public abstract byte[] d();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract byte[] e();

    public final boolean equals(Object obj) {
        if (obj instanceof i2) {
            i2 i2Var = (i2) obj;
            if (b() == i2Var.b() && c(i2Var)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        if (b() >= 32) {
            return a();
        }
        byte[] e10 = e();
        int i10 = e10[0] & 255;
        for (int i11 = 1; i11 < e10.length; i11++) {
            i10 |= (e10[i11] & 255) << (i11 * 8);
        }
        return i10;
    }

    public final String toString() {
        byte[] e10 = e();
        int length = e10.length;
        StringBuilder sb2 = new StringBuilder(length + length);
        for (byte b10 : e10) {
            char[] cArr = f14658d;
            sb2.append(cArr[(b10 >> 4) & 15]);
            sb2.append(cArr[b10 & 15]);
        }
        return sb2.toString();
    }
}
