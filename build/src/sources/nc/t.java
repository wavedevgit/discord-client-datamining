package nc;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.media.utils.DiscordVideoMediaSource;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
import java.util.Arrays;
import ne.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f39981a = {1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f39982b = {-1, 8000, 16000, 32000, -1, -1, 11025, 22050, 44100, -1, -1, 12000, 24000, 48000, -1, -1};

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f39983c = {64, 112, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 192, 224, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 384, 448, IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, DiscordVideoMediaSource.DEFAULT_WIDTH, 768, 896, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 1152, 1280, 1536, 1920, RecyclerView.ItemAnimator.FLAG_MOVED, 2304, 2560, 2688, 2816, 2823, 2944, 3072, 3840, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 6144, 7680};

    /* JADX WARN: Removed duplicated region for block: B:15:0x0060  */
    /* JADX WARN: Removed duplicated region for block: B:17:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static int a(byte[] r7) {
        /*
            r0 = 0
            r1 = r7[r0]
            r2 = -2
            r3 = 7
            r4 = 6
            r5 = 1
            r6 = 4
            if (r1 == r2) goto L4f
            r2 = -1
            if (r1 == r2) goto L3e
            r2 = 31
            if (r1 == r2) goto L26
            r1 = 5
            r1 = r7[r1]
            r1 = r1 & 3
            int r1 = r1 << 12
            r2 = r7[r4]
            r2 = r2 & 255(0xff, float:3.57E-43)
            int r2 = r2 << r6
            r1 = r1 | r2
            r7 = r7[r3]
        L20:
            r7 = r7 & 240(0xf0, float:3.36E-43)
            int r7 = r7 >> r6
            r7 = r7 | r1
            int r7 = r7 + r5
            goto L5e
        L26:
            r0 = r7[r4]
            r0 = r0 & 3
            int r0 = r0 << 12
            r1 = r7[r3]
            r1 = r1 & 255(0xff, float:3.57E-43)
            int r1 = r1 << r6
            r0 = r0 | r1
            r1 = 8
            r7 = r7[r1]
        L36:
            r7 = r7 & 60
            int r7 = r7 >> 2
            r7 = r7 | r0
            int r7 = r7 + r5
            r0 = r5
            goto L5e
        L3e:
            r0 = r7[r3]
            r0 = r0 & 3
            int r0 = r0 << 12
            r1 = r7[r4]
            r1 = r1 & 255(0xff, float:3.57E-43)
            int r1 = r1 << r6
            r0 = r0 | r1
            r1 = 9
            r7 = r7[r1]
            goto L36
        L4f:
            r1 = r7[r6]
            r1 = r1 & 3
            int r1 = r1 << 12
            r2 = r7[r3]
            r2 = r2 & 255(0xff, float:3.57E-43)
            int r2 = r2 << r6
            r1 = r1 | r2
            r7 = r7[r4]
            goto L20
        L5e:
            if (r0 == 0) goto L64
            int r7 = r7 * 16
            int r7 = r7 / 14
        L64:
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: nc.t.a(byte[]):int");
    }

    private static g0 b(byte[] bArr) {
        if (bArr[0] == Byte.MAX_VALUE) {
            return new g0(bArr);
        }
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        if (c(copyOf)) {
            for (int i10 = 0; i10 < copyOf.length - 1; i10 += 2) {
                byte b10 = copyOf[i10];
                int i11 = i10 + 1;
                copyOf[i10] = copyOf[i11];
                copyOf[i11] = b10;
            }
        }
        g0 g0Var = new g0(copyOf);
        if (copyOf[0] == 31) {
            g0 g0Var2 = new g0(copyOf);
            while (g0Var2.b() >= 16) {
                g0Var2.r(2);
                g0Var.f(g0Var2.h(14), 14);
            }
        }
        g0Var.n(copyOf);
        return g0Var;
    }

    private static boolean c(byte[] bArr) {
        byte b10 = bArr[0];
        if (b10 != -2 && b10 != -1) {
            return false;
        }
        return true;
    }

    public static boolean d(int i10) {
        if (i10 != 2147385345 && i10 != -25230976 && i10 != 536864768 && i10 != -14745368) {
            return false;
        }
        return true;
    }

    public static int e(ByteBuffer byteBuffer) {
        int i10;
        byte b10;
        int i11;
        byte b11;
        if (byteBuffer.getInt(0) != -233094848 && byteBuffer.getInt(0) != -398277519) {
            if (byteBuffer.getInt(0) == 622876772) {
                return RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
            }
            int position = byteBuffer.position();
            byte b12 = byteBuffer.get(position);
            if (b12 != -2) {
                if (b12 != -1) {
                    if (b12 != 31) {
                        i10 = (byteBuffer.get(position + 4) & 1) << 6;
                        b10 = byteBuffer.get(position + 5);
                    } else {
                        i10 = (byteBuffer.get(position + 5) & 7) << 4;
                        b11 = byteBuffer.get(position + 6);
                    }
                } else {
                    i10 = (byteBuffer.get(position + 4) & 7) << 4;
                    b11 = byteBuffer.get(position + 7);
                }
                i11 = b11 & 60;
                return (((i11 >> 2) | i10) + 1) * 32;
            }
            i10 = (byteBuffer.get(position + 5) & 1) << 6;
            b10 = byteBuffer.get(position + 4);
            i11 = b10 & 252;
            return (((i11 >> 2) | i10) + 1) * 32;
        }
        return IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
    }

    public static int f(byte[] bArr) {
        int i10;
        byte b10;
        int i11;
        byte b11;
        byte b12 = bArr[0];
        if (b12 != -2) {
            if (b12 != -1) {
                if (b12 != 31) {
                    i10 = (bArr[4] & 1) << 6;
                    b10 = bArr[5];
                } else {
                    i10 = (bArr[5] & 7) << 4;
                    b11 = bArr[6];
                }
            } else {
                i10 = (bArr[4] & 7) << 4;
                b11 = bArr[7];
            }
            i11 = b11 & 60;
            return (((i11 >> 2) | i10) + 1) * 32;
        }
        i10 = (bArr[5] & 1) << 6;
        b10 = bArr[4];
        i11 = b10 & 252;
        return (((i11 >> 2) | i10) + 1) * 32;
    }

    public static Format g(byte[] bArr, String str, String str2, rc.m mVar) {
        int i10;
        int i11;
        g0 b10 = b(bArr);
        b10.r(60);
        int i12 = f39981a[b10.h(6)];
        int i13 = f39982b[b10.h(4)];
        int h10 = b10.h(5);
        int[] iArr = f39983c;
        if (h10 >= iArr.length) {
            i10 = -1;
        } else {
            i10 = (iArr[h10] * 1000) / 2;
        }
        b10.r(10);
        if (b10.h(2) > 0) {
            i11 = 1;
        } else {
            i11 = 0;
        }
        return new Format.b().U(str).g0("audio/vnd.dts").I(i10).J(i12 + i11).h0(i13).O(mVar).X(str2).G();
    }
}
