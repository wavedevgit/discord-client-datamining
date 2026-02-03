package nc;

import com.discord.media.utils.DiscordVideoMediaSource;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
import ne.g0;
import ne.h0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f39892a = {1, 2, 3, 6};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f39893b = {48000, 44100, 32000};

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f39894c = {24000, 22050, 16000};

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f39895d = {2, 1, 2, 3, 3, 4, 4, 5};

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f39896e = {32, 40, 48, 56, 64, 80, 96, 112, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 160, 192, 224, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 320, 384, 448, IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, 576, DiscordVideoMediaSource.DEFAULT_WIDTH};

    /* renamed from: f  reason: collision with root package name */
    private static final int[] f39897f = {69, 87, 104, 121, 139, 174, 208, 243, 278, 348, 417, 487, 557, 696, 835, 975, 1114, 1253, 1393};

    /* renamed from: nc.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0522b {

        /* renamed from: a  reason: collision with root package name */
        public final String f39898a;

        /* renamed from: b  reason: collision with root package name */
        public final int f39899b;

        /* renamed from: c  reason: collision with root package name */
        public final int f39900c;

        /* renamed from: d  reason: collision with root package name */
        public final int f39901d;

        /* renamed from: e  reason: collision with root package name */
        public final int f39902e;

        /* renamed from: f  reason: collision with root package name */
        public final int f39903f;

        /* renamed from: g  reason: collision with root package name */
        public final int f39904g;

        private C0522b(String str, int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f39898a = str;
            this.f39899b = i10;
            this.f39901d = i11;
            this.f39900c = i12;
            this.f39902e = i13;
            this.f39903f = i14;
            this.f39904g = i15;
        }
    }

    private static int a(int i10, int i11, int i12) {
        return (i10 * i11) / (i12 * 32);
    }

    public static int b(ByteBuffer byteBuffer) {
        int position = byteBuffer.position();
        int limit = byteBuffer.limit() - 10;
        for (int i10 = position; i10 <= limit; i10++) {
            if ((w0.J(byteBuffer, i10 + 4) & (-2)) == -126718022) {
                return i10 - position;
            }
        }
        return -1;
    }

    private static int c(int i10, int i11) {
        int i12 = i11 / 2;
        if (i10 >= 0) {
            int[] iArr = f39893b;
            if (i10 < iArr.length && i11 >= 0) {
                int[] iArr2 = f39897f;
                if (i12 < iArr2.length) {
                    int i13 = iArr[i10];
                    if (i13 == 44100) {
                        return (iArr2[i12] + (i11 % 2)) * 2;
                    }
                    int i14 = f39896e[i12];
                    if (i13 == 32000) {
                        return i14 * 6;
                    }
                    return i14 * 4;
                }
                return -1;
            }
            return -1;
        }
        return -1;
    }

    public static Format d(h0 h0Var, String str, String str2, rc.m mVar) {
        g0 g0Var = new g0();
        g0Var.m(h0Var);
        int i10 = f39893b[g0Var.h(2)];
        g0Var.r(8);
        int i11 = f39895d[g0Var.h(3)];
        if (g0Var.h(1) != 0) {
            i11++;
        }
        int i12 = f39896e[g0Var.h(5)] * 1000;
        g0Var.c();
        h0Var.U(g0Var.d());
        return new Format.b().U(str).g0("audio/ac3").J(i11).h0(i10).O(mVar).X(str2).I(i12).b0(i12).G();
    }

    public static int e(ByteBuffer byteBuffer) {
        int i10 = 3;
        if (((byteBuffer.get(byteBuffer.position() + 5) & 248) >> 3) > 10) {
            if (((byteBuffer.get(byteBuffer.position() + 4) & 192) >> 6) != 3) {
                i10 = (byteBuffer.get(byteBuffer.position() + 4) & 48) >> 4;
            }
            return f39892a[i10] * IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
        }
        return 1536;
    }

    public static C0522b f(g0 g0Var) {
        boolean z10;
        String str;
        int c10;
        int i10;
        int i11;
        int i12;
        String str2;
        int i13;
        int i14;
        int i15;
        int i16;
        String str3;
        int i17;
        int i18;
        int e10 = g0Var.e();
        g0Var.r(40);
        if (g0Var.h(5) > 10) {
            z10 = true;
        } else {
            z10 = false;
        }
        g0Var.p(e10);
        int i19 = -1;
        if (z10) {
            g0Var.r(16);
            int h10 = g0Var.h(2);
            if (h10 != 0) {
                if (h10 != 1) {
                    if (h10 == 2) {
                        i19 = 2;
                    }
                } else {
                    i19 = 1;
                }
            } else {
                i19 = 0;
            }
            g0Var.r(3);
            c10 = (g0Var.h(11) + 1) * 2;
            int h11 = g0Var.h(2);
            if (h11 == 3) {
                i10 = f39894c[g0Var.h(2)];
                i14 = 3;
                i15 = 6;
            } else {
                int h12 = g0Var.h(2);
                int i20 = f39892a[h12];
                i14 = h12;
                i10 = f39893b[h11];
                i15 = i20;
            }
            i12 = i15 * IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
            int a10 = a(c10, i10, i15);
            int h13 = g0Var.h(3);
            boolean g10 = g0Var.g();
            i11 = f39895d[h13] + (g10 ? 1 : 0);
            g0Var.r(10);
            if (g0Var.g()) {
                g0Var.r(8);
            }
            if (h13 == 0) {
                g0Var.r(5);
                if (g0Var.g()) {
                    g0Var.r(8);
                }
            }
            if (i19 == 1 && g0Var.g()) {
                g0Var.r(16);
            }
            if (g0Var.g()) {
                if (h13 > 2) {
                    g0Var.r(2);
                }
                if ((h13 & 1) != 0 && h13 > 2) {
                    i17 = 6;
                    g0Var.r(6);
                } else {
                    i17 = 6;
                }
                if ((h13 & 4) != 0) {
                    g0Var.r(i17);
                }
                if (g10 && g0Var.g()) {
                    g0Var.r(5);
                }
                if (i19 == 0) {
                    if (g0Var.g()) {
                        i18 = 6;
                        g0Var.r(6);
                    } else {
                        i18 = 6;
                    }
                    if (h13 == 0 && g0Var.g()) {
                        g0Var.r(i18);
                    }
                    if (g0Var.g()) {
                        g0Var.r(i18);
                    }
                    int h14 = g0Var.h(2);
                    if (h14 == 1) {
                        g0Var.r(5);
                    } else if (h14 == 2) {
                        g0Var.r(12);
                    } else if (h14 == 3) {
                        int h15 = g0Var.h(5);
                        if (g0Var.g()) {
                            g0Var.r(5);
                            if (g0Var.g()) {
                                g0Var.r(4);
                            }
                            if (g0Var.g()) {
                                g0Var.r(4);
                            }
                            if (g0Var.g()) {
                                g0Var.r(4);
                            }
                            if (g0Var.g()) {
                                g0Var.r(4);
                            }
                            if (g0Var.g()) {
                                g0Var.r(4);
                            }
                            if (g0Var.g()) {
                                g0Var.r(4);
                            }
                            if (g0Var.g()) {
                                g0Var.r(4);
                            }
                            if (g0Var.g()) {
                                if (g0Var.g()) {
                                    g0Var.r(4);
                                }
                                if (g0Var.g()) {
                                    g0Var.r(4);
                                }
                            }
                        }
                        if (g0Var.g()) {
                            g0Var.r(5);
                            if (g0Var.g()) {
                                g0Var.r(7);
                                if (g0Var.g()) {
                                    g0Var.r(8);
                                }
                            }
                        }
                        g0Var.r((h15 + 2) * 8);
                        g0Var.c();
                    }
                    if (h13 < 2) {
                        if (g0Var.g()) {
                            g0Var.r(14);
                        }
                        if (h13 == 0 && g0Var.g()) {
                            g0Var.r(14);
                        }
                    }
                    if (g0Var.g()) {
                        if (i14 == 0) {
                            g0Var.r(5);
                        } else {
                            for (int i21 = 0; i21 < i15; i21++) {
                                if (g0Var.g()) {
                                    g0Var.r(5);
                                }
                            }
                        }
                    }
                }
            }
            if (g0Var.g()) {
                g0Var.r(5);
                if (h13 == 2) {
                    g0Var.r(4);
                }
                if (h13 >= 6) {
                    g0Var.r(2);
                }
                if (g0Var.g()) {
                    g0Var.r(8);
                }
                if (h13 == 0 && g0Var.g()) {
                    g0Var.r(8);
                }
                if (h11 < 3) {
                    g0Var.q();
                }
            }
            if (i19 == 0 && i14 != 3) {
                g0Var.q();
            }
            if (i19 == 2 && (i14 == 3 || g0Var.g())) {
                i16 = 6;
                g0Var.r(6);
            } else {
                i16 = 6;
            }
            if (g0Var.g() && g0Var.h(i16) == 1 && g0Var.h(8) == 1) {
                str3 = "audio/eac3-joc";
            } else {
                str3 = "audio/eac3";
            }
            str2 = str3;
            i13 = a10;
        } else {
            g0Var.r(32);
            int h16 = g0Var.h(2);
            if (h16 == 3) {
                str = null;
            } else {
                str = "audio/ac3";
            }
            int h17 = g0Var.h(6);
            int i22 = f39896e[h17 / 2] * 1000;
            c10 = c(h16, h17);
            g0Var.r(8);
            int h18 = g0Var.h(3);
            if ((h18 & 1) != 0 && h18 != 1) {
                g0Var.r(2);
            }
            if ((h18 & 4) != 0) {
                g0Var.r(2);
            }
            if (h18 == 2) {
                g0Var.r(2);
            }
            int[] iArr = f39893b;
            if (h16 < iArr.length) {
                i10 = iArr[h16];
            } else {
                i10 = -1;
            }
            i11 = f39895d[h18] + (g0Var.g() ? 1 : 0);
            i12 = 1536;
            str2 = str;
            i13 = i22;
        }
        return new C0522b(str2, i19, i11, i10, c10, i12, i13);
    }

    public static int g(byte[] bArr) {
        if (bArr.length < 6) {
            return -1;
        }
        if (((bArr[5] & 248) >> 3) > 10) {
            return (((bArr[3] & 255) | ((bArr[2] & 7) << 8)) + 1) * 2;
        }
        byte b10 = bArr[4];
        return c((b10 & 192) >> 6, b10 & 63);
    }

    public static Format h(h0 h0Var, String str, String str2, rc.m mVar) {
        String str3;
        g0 g0Var = new g0();
        g0Var.m(h0Var);
        int h10 = g0Var.h(13) * 1000;
        g0Var.r(3);
        int i10 = f39893b[g0Var.h(2)];
        g0Var.r(10);
        int i11 = f39895d[g0Var.h(3)];
        if (g0Var.h(1) != 0) {
            i11++;
        }
        g0Var.r(3);
        int h11 = g0Var.h(4);
        g0Var.r(1);
        if (h11 > 0) {
            g0Var.r(6);
            if (g0Var.h(1) != 0) {
                i11 += 2;
            }
            g0Var.r(1);
        }
        if (g0Var.b() > 7) {
            g0Var.r(7);
            if (g0Var.h(1) != 0) {
                str3 = "audio/eac3-joc";
                g0Var.c();
                h0Var.U(g0Var.d());
                return new Format.b().U(str).g0(str3).J(i11).h0(i10).O(mVar).X(str2).b0(h10).G();
            }
        }
        str3 = "audio/eac3";
        g0Var.c();
        h0Var.U(g0Var.d());
        return new Format.b().U(str).g0(str3).J(i11).h0(i10).O(mVar).X(str2).b0(h10).G();
    }

    public static int i(ByteBuffer byteBuffer, int i10) {
        boolean z10;
        int i11;
        if ((byteBuffer.get(byteBuffer.position() + i10 + 7) & 255) == 187) {
            z10 = true;
        } else {
            z10 = false;
        }
        int position = byteBuffer.position() + i10;
        if (z10) {
            i11 = 9;
        } else {
            i11 = 8;
        }
        return 40 << ((byteBuffer.get(position + i11) >> 4) & 7);
    }

    public static int j(byte[] bArr) {
        char c10;
        boolean z10 = false;
        if (bArr[4] == -8 && bArr[5] == 114 && bArr[6] == 111) {
            byte b10 = bArr[7];
            if ((b10 & 254) == 186) {
                if ((b10 & 255) == 187) {
                    z10 = true;
                }
                if (z10) {
                    c10 = '\t';
                } else {
                    c10 = '\b';
                }
                return 40 << ((bArr[c10] >> 4) & 7);
            }
        }
        return 0;
    }
}
