package com.google.android.gms.internal.fido;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u2 {

    /* renamed from: a  reason: collision with root package name */
    private static final u2 f14131a;

    static {
        new s2("base64()", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", '=');
        new s2("base64Url()", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", '=');
        new t2("base32()", "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", '=');
        new t2("base32Hex()", "0123456789ABCDEFGHIJKLMNOPQRSTUV", '=');
        f14131a = new r2("base16()", "0123456789ABCDEF");
    }

    public static u2 d() {
        return f14131a;
    }

    abstract void a(Appendable appendable, byte[] bArr, int i10, int i11);

    abstract int b(int i10);

    public abstract u2 c();

    public final String e(byte[] bArr, int i10, int i11) {
        k0.e(0, i11, bArr.length);
        StringBuilder sb2 = new StringBuilder(b(i11));
        try {
            a(sb2, bArr, 0, i11);
            return sb2.toString();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
