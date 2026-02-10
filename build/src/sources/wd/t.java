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
    private static final Pattern f53635g = Pattern.compile("LOCAL:([^,]+)");

    /* renamed from: h  reason: collision with root package name */
    private static final Pattern f53636h = Pattern.compile("MPEGTS:(-?\\d+)");

    /* renamed from: a  reason: collision with root package name */
    private final String f53637a;

    /* renamed from: b  reason: collision with root package name */
    private final s0 f53638b;

    /* renamed from: d  reason: collision with root package name */
    private uc.m f53640d;

    /* renamed from: f  reason: collision with root package name */
    private int f53642f;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f53639c = new h0();

    /* renamed from: e  reason: collision with root package name */
    private byte[] f53641e = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];

    public t(String str, s0 s0Var) {
        this.f53637a = str;
        this.f53638b = s0Var;
    }

    private b0 b(long j10) {
        b0 c10 = this.f53640d.c(0, 3);
        c10.c(new Format.b().g0("text/vtt").X(this.f53637a).k0(j10).G());
        this.f53640d.q();
        return c10;
    }

    private void e() {
        h0 h0Var = new h0(this.f53641e);
        je.i.e(h0Var);
        long j10 = 0;
        long j11 = 0;
        for (String s10 = h0Var.s(); !TextUtils.isEmpty(s10); s10 = h0Var.s()) {
            if (s10.startsWith("X-TIMESTAMP-MAP")) {
                Matcher matcher = f53635g.matcher(s10);
                if (matcher.find()) {
                    Matcher matcher2 = f53636h.matcher(s10);
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
        long b10 = this.f53638b.b(s0.k((j10 + d10) - j11));
        b0 b11 = b(b10 - d10);
        this.f53639c.S(this.f53641e, this.f53642f);
        b11.e(this.f53639c, this.f53642f);
        b11.a(b10, 1, this.f53642f, 0, null);
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        throw new IllegalStateException();
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f53640d = mVar;
        mVar.j(new z.b(-9223372036854775807L));
    }

    @Override // uc.k
    public boolean d(uc.l lVar) {
        lVar.c(this.f53641e, 0, 6, false);
        this.f53639c.S(this.f53641e, 6);
        if (je.i.b(this.f53639c)) {
            return true;
        }
        lVar.c(this.f53641e, 6, 3, false);
        this.f53639c.S(this.f53641e, 9);
        return je.i.b(this.f53639c);
    }

    @Override // uc.k
    public int h(uc.l lVar, y yVar) {
        int length;
        oe.a.e(this.f53640d);
        int length2 = (int) lVar.getLength();
        int i10 = this.f53642f;
        byte[] bArr = this.f53641e;
        if (i10 == bArr.length) {
            if (length2 != -1) {
                length = length2;
            } else {
                length = bArr.length;
            }
            this.f53641e = Arrays.copyOf(bArr, (length * 3) / 2);
        }
        byte[] bArr2 = this.f53641e;
        int i11 = this.f53642f;
        int read = lVar.read(bArr2, i11, bArr2.length - i11);
        if (read != -1) {
            int i12 = this.f53642f + read;
            this.f53642f = i12;
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
