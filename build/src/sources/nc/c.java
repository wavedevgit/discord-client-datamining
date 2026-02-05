package nc;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.media.utils.DiscordVideoMediaSource;
import com.facebook.react.views.text.ReactFontManager;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.nio.ByteBuffer;
import ne.g0;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f39404a = {2002, 2000, 1920, 1601, 1600, RNCWebViewManager.COMMAND_CLEAR_CACHE, 1000, 960, 800, 800, DiscordVideoMediaSource.DEFAULT_HEIGHT, ReactFontManager.TypefaceStyle.NORMAL, ReactFontManager.TypefaceStyle.NORMAL, RecyclerView.ItemAnimator.FLAG_MOVED};

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f39405a;

        /* renamed from: b  reason: collision with root package name */
        public final int f39406b;

        /* renamed from: c  reason: collision with root package name */
        public final int f39407c;

        /* renamed from: d  reason: collision with root package name */
        public final int f39408d;

        /* renamed from: e  reason: collision with root package name */
        public final int f39409e;

        private b(int i10, int i11, int i12, int i13, int i14) {
            this.f39405a = i10;
            this.f39407c = i11;
            this.f39406b = i12;
            this.f39408d = i13;
            this.f39409e = i14;
        }
    }

    public static void a(int i10, h0 h0Var) {
        h0Var.Q(7);
        byte[] e10 = h0Var.e();
        e10[0] = -84;
        e10[1] = 64;
        e10[2] = -1;
        e10[3] = -1;
        e10[4] = (byte) ((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
        e10[5] = (byte) ((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
        e10[6] = (byte) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    public static Format b(h0 h0Var, String str, String str2, rc.m mVar) {
        int i10;
        h0Var.V(1);
        if (((h0Var.H() & 32) >> 5) == 1) {
            i10 = 48000;
        } else {
            i10 = 44100;
        }
        return new Format.b().U(str).g0("audio/ac4").J(2).h0(i10).O(mVar).X(str2).G();
    }

    public static int c(ByteBuffer byteBuffer) {
        byte[] bArr = new byte[16];
        int position = byteBuffer.position();
        byteBuffer.get(bArr);
        byteBuffer.position(position);
        return d(new g0(bArr)).f39409e;
    }

    /* JADX WARN: Code restructure failed: missing block: B:39:0x0082, code lost:
        if (r11 != 11) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x0089, code lost:
        if (r11 != 11) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x008e, code lost:
        if (r11 != 8) goto L40;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static nc.c.b d(ne.g0 r11) {
        /*
            r0 = 16
            int r1 = r11.h(r0)
            int r0 = r11.h(r0)
            r2 = 65535(0xffff, float:9.1834E-41)
            r3 = 4
            if (r0 != r2) goto L18
            r0 = 24
            int r0 = r11.h(r0)
            r2 = 7
            goto L19
        L18:
            r2 = r3
        L19:
            int r0 = r0 + r2
            r2 = 44097(0xac41, float:6.1793E-41)
            if (r1 != r2) goto L21
            int r0 = r0 + 2
        L21:
            r8 = r0
            r0 = 2
            int r1 = r11.h(r0)
            r2 = 3
            if (r1 != r2) goto L2f
            int r4 = f(r11, r0)
            int r1 = r1 + r4
        L2f:
            r5 = r1
            r1 = 10
            int r1 = r11.h(r1)
            boolean r4 = r11.g()
            if (r4 == 0) goto L45
            int r4 = r11.h(r2)
            if (r4 <= 0) goto L45
            r11.r(r0)
        L45:
            boolean r4 = r11.g()
            r6 = 44100(0xac44, float:6.1797E-41)
            r7 = 48000(0xbb80, float:6.7262E-41)
            if (r4 == 0) goto L53
            r4 = r7
            goto L55
        L53:
            r4 = r7
            r7 = r6
        L55:
            int r11 = r11.h(r3)
            if (r7 != r6) goto L65
            r6 = 13
            if (r11 != r6) goto L65
            int[] r0 = nc.c.f39404a
            r11 = r0[r11]
        L63:
            r9 = r11
            goto L95
        L65:
            if (r7 != r4) goto L93
            int[] r4 = nc.c.f39404a
            int r6 = r4.length
            if (r11 >= r6) goto L93
            r4 = r4[r11]
            int r1 = r1 % 5
            r6 = 8
            r9 = 1
            if (r1 == r9) goto L8c
            r9 = 11
            if (r1 == r0) goto L87
            if (r1 == r2) goto L8c
            if (r1 == r3) goto L7e
            goto L91
        L7e:
            if (r11 == r2) goto L84
            if (r11 == r6) goto L84
            if (r11 != r9) goto L91
        L84:
            int r11 = r4 + 1
            goto L63
        L87:
            if (r11 == r6) goto L84
            if (r11 != r9) goto L91
            goto L84
        L8c:
            if (r11 == r2) goto L84
            if (r11 != r6) goto L91
            goto L84
        L91:
            r9 = r4
            goto L95
        L93:
            r11 = 0
            goto L63
        L95:
            nc.c$b r4 = new nc.c$b
            r6 = 2
            r10 = 0
            r4.<init>(r5, r6, r7, r8, r9)
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: nc.c.d(ne.g0):nc.c$b");
    }

    public static int e(byte[] bArr, int i10) {
        int i11 = 7;
        if (bArr.length < 7) {
            return -1;
        }
        int i12 = ((bArr[2] & 255) << 8) | (bArr[3] & 255);
        if (i12 == 65535) {
            i12 = ((bArr[4] & 255) << 16) | ((bArr[5] & 255) << 8) | (bArr[6] & 255);
        } else {
            i11 = 4;
        }
        if (i10 == 44097) {
            i11 += 2;
        }
        return i12 + i11;
    }

    private static int f(g0 g0Var, int i10) {
        int i11 = 0;
        while (true) {
            int h10 = i11 + g0Var.h(i10);
            if (!g0Var.g()) {
                return h10;
            }
            i11 = (h10 + 1) << i10;
        }
    }
}
