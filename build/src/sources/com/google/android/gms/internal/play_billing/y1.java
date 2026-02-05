package com.google.android.gms.internal.play_billing;

import java.nio.ByteBuffer;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class y1 {

    /* renamed from: a  reason: collision with root package name */
    static final Charset f14401a = Charset.forName("US-ASCII");

    /* renamed from: b  reason: collision with root package name */
    static final Charset f14402b = Charset.forName("UTF-8");

    /* renamed from: c  reason: collision with root package name */
    static final Charset f14403c = Charset.forName("ISO-8859-1");

    /* renamed from: d  reason: collision with root package name */
    public static final byte[] f14404d;

    /* renamed from: e  reason: collision with root package name */
    public static final ByteBuffer f14405e;

    /* renamed from: f  reason: collision with root package name */
    public static final v0 f14406f;

    static {
        byte[] bArr = new byte[0];
        f14404d = bArr;
        f14405e = ByteBuffer.wrap(bArr);
        int i10 = v0.f14390a;
        t0 t0Var = new t0(bArr, 0, 0, false, null);
        try {
            t0Var.c(0);
            f14406f = t0Var;
        } catch (a2 e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public static int a(boolean z10) {
        return z10 ? 1231 : 1237;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int b(int i10, byte[] bArr, int i11, int i12) {
        for (int i13 = 0; i13 < i12; i13++) {
            i10 = (i10 * 31) + bArr[i13];
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object c(Object obj, String str) {
        if (obj != null) {
            return obj;
        }
        throw new NullPointerException("messageType");
    }

    public static String d(byte[] bArr) {
        return new String(bArr, f14402b);
    }
}
