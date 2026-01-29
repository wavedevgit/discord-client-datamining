package ju;

import iu.a0;
import iu.g0;
import iu.m0;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a */
    private static final byte[] f32788a = m0.a("0123456789abcdef");

    public static final Buffer.a a(Buffer buffer, Buffer.a unsafeCursor) {
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        Intrinsics.checkNotNullParameter(unsafeCursor, "unsafeCursor");
        Buffer.a g10 = okio.b.g(unsafeCursor);
        if (g10.f44354d == null) {
            g10.f44354d = buffer;
            g10.f44355e = true;
            return g10;
        }
        throw new IllegalStateException("already attached to a buffer");
    }

    public static final byte[] b() {
        return f32788a;
    }

    public static final boolean c(g0 segment, int i10, byte[] bytes, int i11, int i12) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        int i13 = segment.f31251c;
        byte[] bArr = segment.f31249a;
        while (i11 < i12) {
            if (i10 == i13) {
                segment = segment.f31254f;
                Intrinsics.checkNotNull(segment);
                byte[] bArr2 = segment.f31249a;
                bArr = bArr2;
                i10 = segment.f31250b;
                i13 = segment.f31251c;
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
            if (buffer.E0(j11) == 13) {
                String b12 = buffer.b1(j11);
                buffer.skip(2L);
                return b12;
            }
        }
        String b13 = buffer.b1(j10);
        buffer.skip(1L);
        return b13;
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
        g0 g0Var2 = buffer.f44352d;
        if (g0Var2 == null) {
            if (z10) {
                return -2;
            }
            return -1;
        }
        byte[] bArr = g0Var2.f31249a;
        int i14 = g0Var2.f31250b;
        int i15 = g0Var2.f31251c;
        int[] h10 = options.h();
        g0 g0Var3 = g0Var2;
        int i16 = -1;
        int i17 = 0;
        loop0: while (true) {
            int i18 = i17 + 1;
            int i19 = h10[i17];
            int i20 = i17 + 2;
            int i21 = h10[i18];
            if (i21 != -1) {
                i16 = i21;
            }
            if (g0Var3 == null) {
                break;
            } else if (i19 < 0) {
                int i22 = i20 + (i19 * (-1));
                while (true) {
                    int i23 = i14 + 1;
                    int i24 = i20 + 1;
                    if ((bArr[i14] & 255) != h10[i20]) {
                        break loop0;
                    }
                    if (i24 == i22) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (i23 == i15) {
                        Intrinsics.checkNotNull(g0Var3);
                        g0 g0Var4 = g0Var3.f31254f;
                        Intrinsics.checkNotNull(g0Var4);
                        i13 = g0Var4.f31250b;
                        byte[] bArr2 = g0Var4.f31249a;
                        i12 = g0Var4.f31251c;
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
                        i13 = i23;
                    }
                    if (z11) {
                        i11 = h10[i24];
                        i10 = i13;
                        i15 = i12;
                        g0Var3 = g0Var;
                        break;
                    }
                    i14 = i13;
                    i15 = i12;
                    g0Var3 = g0Var;
                    i20 = i24;
                }
            } else {
                i10 = i14 + 1;
                int i25 = bArr[i14] & 255;
                int i26 = i20 + i19;
                while (i20 != i26) {
                    if (i25 == h10[i20]) {
                        i11 = h10[i20 + i19];
                        if (i10 == i15) {
                            g0Var3 = g0Var3.f31254f;
                            Intrinsics.checkNotNull(g0Var3);
                            i10 = g0Var3.f31250b;
                            bArr = g0Var3.f31249a;
                            i15 = g0Var3.f31251c;
                            if (g0Var3 == g0Var2) {
                                g0Var3 = null;
                            }
                        }
                        if (i11 >= 0) {
                            return i11;
                        }
                        i17 = -i11;
                        i14 = i10;
                    } else {
                        i20++;
                    }
                }
                break loop0;
            }
        }
        if (z10) {
            return -2;
        }
        return i16;
    }

    public static /* synthetic */ int f(Buffer buffer, a0 a0Var, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return e(buffer, a0Var, z10);
    }
}
