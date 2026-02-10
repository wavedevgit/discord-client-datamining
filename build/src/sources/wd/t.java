package wd;

import android.text.TextUtils;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import mc.l0;
import oe.h0;
import oe.s0;
import uc.b0;
import uc.y;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements uc.k {

    /* renamed from: g  reason: collision with root package name */
    private static final Pattern f52664g = Pattern.compile("LOCAL:([^,]+)");

    /* renamed from: h  reason: collision with root package name */
    private static final Pattern f52665h = Pattern.compile("MPEGTS:(-?\\d+)");

    /* renamed from: a  reason: collision with root package name */
    private final String f52666a;

    /* renamed from: b  reason: collision with root package name */
    private final s0 f52667b;

    /* renamed from: d  reason: collision with root package name */
    private uc.m f52669d;

    /* renamed from: f  reason: collision with root package name */
    private int f52671f;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f52668c = new h0();

    /* renamed from: e  reason: collision with root package name */
    private byte[] f52670e = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];

    public t(String str, s0 s0Var) {
        this.f52666a = str;
        this.f52667b = s0Var;
    }

    private b0 b(long j10) {
        b0 c10 = this.f52669d.c(0, 3);
        c10.c(new Format.b().g0("text/vtt").X(this.f52666a).k0(j10).G());
        this.f52669d.q();
        return c10;
    }

    private void e() {
        h0 h0Var = new h0(this.f52670e);
        je.i.e(h0Var);
        long j10 = 0;
        long j11 = 0;
        for (String s10 = h0Var.s(); !TextUtils.isEmpty(s10); s10 = h0Var.s()) {
            if (s10.startsWith("X-TIMESTAMP-MAP")) {
                Matcher matcher = f52664g.matcher(s10);
                if (matcher.find()) {
                    Matcher matcher2 = f52665h.matcher(s10);
                    if (matcher2.find()) {
                        j11 = je.i.d((String) oe.a.e(matcher.group(1)));
                        j10 = s0.g(Long.parseLong((String) oe.a.e(matcher2.group(1))));
                    } else {
                        throw l0.a("X-TIMESTAMP-MAP doesn't contain media timestamp: " + s10, null);
                    }
                } else {
                    throw l0.a("X-TIMESTAMP-MAP doesn't contain local timestamp: " + s10, null);
                }
            }
        }
        Matcher a10 = je.i.a(h0Var);
        if (a10 == null) {
            b(0L);
            return;
        }
        long d10 = je.i.d((String) oe.a.e(a10.group(1)));
        long b10 = this.f52667b.b(s0.k((j10 + d10) - j11));
        b0 b11 = b(b10 - d10);
        this.f52668c.S(this.f52670e, this.f52671f);
        b11.e(this.f52668c, this.f52671f);
        b11.a(b10, 1, this.f52671f, 0, null);
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        throw new IllegalStateException();
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f52669d = mVar;
        mVar.j(new z.b(-9223372036854775807L));
    }

    @Override // uc.k
    public boolean d(uc.l lVar) {
        lVar.c(this.f52670e, 0, 6, false);
        this.f52668c.S(this.f52670e, 6);
        if (je.i.b(this.f52668c)) {
            return true;
        }
        lVar.c(this.f52670e, 6, 3, false);
        this.f52668c.S(this.f52670e, 9);
        return je.i.b(this.f52668c);
    }

    @Override // uc.k
    public int h(uc.l lVar, y yVar) {
        int length;
        oe.a.e(this.f52669d);
        int length2 = (int) lVar.getLength();
        int i10 = this.f52671f;
        byte[] bArr = this.f52670e;
        if (i10 == bArr.length) {
            if (length2 != -1) {
                length = length2;
            } else {
                length = bArr.length;
            }
            this.f52670e = Arrays.copyOf(bArr, (length * 3) / 2);
        }
        byte[] bArr2 = this.f52670e;
        int i11 = this.f52671f;
        int read = lVar.read(bArr2, i11, bArr2.length - i11);
        if (read != -1) {
            int i12 = this.f52671f + read;
            this.f52671f = i12;
            if (length2 == -1 || i12 != length2) {
                return 0;
            }
        }
        e();
        return -1;
    }

    @Override // uc.k
    public void release() {
    }
}
