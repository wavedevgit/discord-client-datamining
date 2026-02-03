package com.google.android.gms.internal.fido;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l5 implements Comparable {
    private final l5 d(Class cls) {
        if (cls.isInstance(this)) {
            return (l5) cls.cast(this);
        }
        String name = cls.getName();
        String name2 = getClass().getName();
        throw new k5("Expected a " + name + " value, but got " + name2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int e(byte b10) {
        return (b10 >> 5) & 7;
    }

    public static g5 h(long j10) {
        return new g5(j10);
    }

    public static j5 k(String str) {
        return new j5(str);
    }

    public static l5 l(byte... bArr) {
        bArr.getClass();
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(Arrays.copyOf(bArr, bArr.length));
        return m5.a(byteArrayInputStream, new o5(byteArrayInputStream));
    }

    public static l5 m(InputStream inputStream) {
        return m5.a(inputStream, new o5(inputStream));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int a() {
        return 0;
    }

    public final e5 f() {
        return (e5) d(e5.class);
    }

    public final g5 g() {
        return (g5) d(g5.class);
    }

    public final i5 i() {
        return (i5) d(i5.class);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int zza();
}
