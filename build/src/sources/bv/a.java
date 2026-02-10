package bv;

import av.a0;
import av.g0;
import av.m0;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a */
    private static final byte[] f7850a = m0.a("0123456789abcdef");

    public static final Buffer.a a(Buffer buffer, Buffer.a unsafeCursor) {
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        Intrinsics.checkNotNullParameter(unsafeCursor, "unsafeCursor");
        Buffer.a g10 = okio.b.g(unsafeCursor);
        if (g10.f40582d == null) {
            g10.f40582d = buffer;
            g10.f40583e = true;
            return g10;
        }
        throw new IllegalStateException("already attached to a buffer");
    }

    public static final byte[] b() {
        return f7850a;
    }

    public static final boolean c(g0 segment, int i10, byte[] bytes, int i11, int i12) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        int i13 = segment.f6264c;
        byte[] bArr = segment.f6262a;
        while (i11 < i12) {
            if (i10 == i13) {
                segment = segment.f6267f;
                Intrinsics.checkNotNull(segment);
                byte[] bArr2 = segment.f6262a;
                bArr = bArr2;
                i10 = segment.f6263b;
                i13 = segment.f6264c;
            }
            if (bArr[i10] != bytes[i11]) {
                return false;
            }
            i10++;
            i11++;
        }
        return true;
    }

    public static final String d(Buffer buffer, long j10) {
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        if (j10 > 0) {
            long j11 = j10 - 1;
            if (buffer.Z(j11) == 13) {
                String d12 = buffer.d1(j11);
                buffer.skip(2L);
                return d12;
            }
        }
        String d13 = buffer.d1(j10);
        buffer.skip(1L);
        return d13;
    }

    public static final int e(Buffer buffer, a0 options, boolean z10) {
        int i10;
        int i11;
        boolean z11;
        g0 g0Var;
        int i12;
        int i13;
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        Intrinsics.checkNotNullParameter(options, "options");
        g0 g0Var2 = buffer.f40580d;
        if (g0Var2 == null) {
            if (z10) {
                return -2;
            }
            return -1;
        }
        byte[] bArr = g0Var2.f6262a;
        int i14 = g0Var2.f6263b;
        int i15 = g0Var2.f6264c;
        int[] i16 = options.i();
        g0 g0Var3 = g0Var2;
        int i17 = -1;
        int i18 = 0;
        loop0: while (true) {
            int i19 = i18 + 1;
            int i20 = i16[i18];
            int i21 = i18 + 2;
            int i22 = i16[i19];
            if (i22 != -1) {
                i17 = i22;
            }
            if (g0Var3 == null) {
                break;
            } else if (i20 < 0) {
                int i23 = i21 + (i20 * (-1));
                while (true) {
                    int i24 = i14 + 1;
                    int i25 = i21 + 1;
                    if ((bArr[i14] & 255) != i16[i21]) {
                        break loop0;
                    }
                    if (i25 == i23) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (i24 == i15) {
                        Intrinsics.checkNotNull(g0Var3);
                        g0 g0Var4 = g0Var3.f6267f;
                        Intrinsics.checkNotNull(g0Var4);
                        i13 = g0Var4.f6263b;
                        byte[] bArr2 = g0Var4.f6262a;
                        i12 = g0Var4.f6264c;
                        if (g0Var4 == g0Var2) {
                            if (!z11) {
                                break loop0;
                            }
                            bArr = bArr2;
                            g0Var = null;
                        } else {
                            g0Var = g0Var4;
                            bArr = bArr2;
                        }
                    } else {
                        g0Var = g0Var3;
                        i12 = i15;
                        i13 = i24;
                    }
                    if (z11) {
                        i11 = i16[i25];
                        i10 = i13;
                        i15 = i12;
                        g0Var3 = g0Var;
                        break;
                    }
                    i14 = i13;
                    i15 = i12;
                    g0Var3 = g0Var;
                    i21 = i25;
                }
            } else {
                i10 = i14 + 1;
                int i26 = bArr[i14] & 255;
                int i27 = i21 + i20;
                while (i21 != i27) {
                    if (i26 == i16[i21]) {
                        i11 = i16[i21 + i20];
                        if (i10 == i15) {
                            g0Var3 = g0Var3.f6267f;
                            Intrinsics.checkNotNull(g0Var3);
                            i10 = g0Var3.f6263b;
                            bArr = g0Var3.f6262a;
                            i15 = g0Var3.f6264c;
                            if (g0Var3 == g0Var2) {
                                g0Var3 = null;
                            }
                        }
                        if (i11 >= 0) {
                            return i11;
                        }
                        i18 = -i11;
                        i14 = i10;
                    } else {
                        i21++;
                    }
                }
                break loop0;
            }
        }
        if (z10) {
            return -2;
        }
        return i17;
    }

    public static /* synthetic */ int f(Buffer buffer, a0 a0Var, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return e(buffer, a0Var, z10);
    }
}
