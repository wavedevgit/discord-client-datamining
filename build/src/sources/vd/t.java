package vd;

import android.text.TextUtils;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lc.l0;
import ne.h0;
import ne.s0;
import tc.b0;
import tc.y;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements tc.k {

    /* renamed from: g  reason: collision with root package name */
    private static final Pattern f52608g = Pattern.compile("LOCAL:([^,]+)");

    /* renamed from: h  reason: collision with root package name */
    private static final Pattern f52609h = Pattern.compile("MPEGTS:(-?\\d+)");

    /* renamed from: a  reason: collision with root package name */
    private final String f52610a;

    /* renamed from: b  reason: collision with root package name */
    private final s0 f52611b;

    /* renamed from: d  reason: collision with root package name */
    private tc.m f52613d;

    /* renamed from: f  reason: collision with root package name */
    private int f52615f;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f52612c = new h0();

    /* renamed from: e  reason: collision with root package name */
    private byte[] f52614e = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];

    public t(String str, s0 s0Var) {
        this.f52610a = str;
        this.f52611b = s0Var;
    }

    private b0 b(long j10) {
        b0 c10 = this.f52613d.c(0, 3);
        c10.b(new Format.b().g0("text/vtt").X(this.f52610a).k0(j10).G());
        this.f52613d.s();
        return c10;
    }

    private void e() {
        h0 h0Var = new h0(this.f52614e);
        ie.i.e(h0Var);
        long j10 = 0;
        long j11 = 0;
        for (String s10 = h0Var.s(); !TextUtils.isEmpty(s10); s10 = h0Var.s()) {
            if (s10.startsWith("X-TIMESTAMP-MAP")) {
                Matcher matcher = f52608g.matcher(s10);
                if (matcher.find()) {
                    Matcher matcher2 = f52609h.matcher(s10);
                    if (matcher2.find()) {
                        j11 = ie.i.d((String) ne.a.e(matcher.group(1)));
                        j10 = s0.g(Long.parseLong((String) ne.a.e(matcher2.group(1))));
                    } else {
                        throw l0.a("X-TIMESTAMP-MAP doesn't contain media timestamp: " + s10, null);
                    }
                } else {
                    throw l0.a("X-TIMESTAMP-MAP doesn't contain local timestamp: " + s10, null);
                }
            }
        }
        Matcher a10 = ie.i.a(h0Var);
        if (a10 == null) {
            b(0L);
            return;
        }
        long d10 = ie.i.d((String) ne.a.e(a10.group(1)));
        long b10 = this.f52611b.b(s0.k((j10 + d10) - j11));
        b0 b11 = b(b10 - d10);
        this.f52612c.S(this.f52614e, this.f52615f);
        b11.f(this.f52612c, this.f52615f);
        b11.d(b10, 1, this.f52615f, 0, null);
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        throw new IllegalStateException();
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f52613d = mVar;
        mVar.q(new z.b(-9223372036854775807L));
    }

    @Override // tc.k
    public int d(tc.l lVar, y yVar) {
        int length;
        ne.a.e(this.f52613d);
        int length2 = (int) lVar.getLength();
        int i10 = this.f52615f;
        byte[] bArr = this.f52614e;
        if (i10 == bArr.length) {
            if (length2 != -1) {
                length = length2;
            } else {
                length = bArr.length;
            }
            this.f52614e = Arrays.copyOf(bArr, (length * 3) / 2);
        }
        byte[] bArr2 = this.f52614e;
        int i11 = this.f52615f;
        int read = lVar.read(bArr2, i11, bArr2.length - i11);
        if (read != -1) {
            int i12 = this.f52615f + read;
            this.f52615f = i12;
            if (length2 == -1 || i12 != length2) {
                return 0;
            }
        }
        e();
        return -1;
    }

    @Override // tc.k
    public boolean f(tc.l lVar) {
        lVar.c(this.f52614e, 0, 6, false);
        this.f52612c.S(this.f52614e, 6);
        if (ie.i.b(this.f52612c)) {
            return true;
        }
        lVar.c(this.f52614e, 6, 3, false);
        this.f52612c.S(this.f52614e, 9);
        return ie.i.b(this.f52612c);
    }

    @Override // tc.k
    public void release() {
    }
}
