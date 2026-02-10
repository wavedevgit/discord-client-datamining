package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {

    /* renamed from: i  reason: collision with root package name */
    private final long f12410i;

    /* renamed from: j  reason: collision with root package name */
    private final long f12411j;

    /* renamed from: k  reason: collision with root package name */
    private final short f12412k;

    /* renamed from: l  reason: collision with root package name */
    private int f12413l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f12414m;

    /* renamed from: n  reason: collision with root package name */
    private byte[] f12415n;

    /* renamed from: o  reason: collision with root package name */
    private byte[] f12416o;

    /* renamed from: p  reason: collision with root package name */
    private int f12417p;

    /* renamed from: q  reason: collision with root package name */
    private int f12418q;

    /* renamed from: r  reason: collision with root package name */
    private int f12419r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f12420s;

    /* renamed from: t  reason: collision with root package name */
    private long f12421t;

    public n() {
        this(150000L, 20000L, (short) 1024);
    }

    private int m(long j10) {
        return (int) ((j10 * this.f12312b.f12260a) / 1000000);
    }

    private int n(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        while (true) {
            limit -= 2;
            if (limit >= byteBuffer.position()) {
                if (Math.abs((int) byteBuffer.getShort(limit)) > this.f12412k) {
                    int i10 = this.f12413l;
                    return ((limit / i10) * i10) + i10;
                }
            } else {
                return byteBuffer.position();
            }
        }
    }

    private int o(ByteBuffer byteBuffer) {
        for (int position = byteBuffer.position(); position < byteBuffer.limit(); position += 2) {
            if (Math.abs((int) byteBuffer.getShort(position)) > this.f12412k) {
                int i10 = this.f12413l;
                return i10 * (position / i10);
            }
        }
        return byteBuffer.limit();
    }

    private void q(ByteBuffer byteBuffer) {
        int remaining = byteBuffer.remaining();
        l(remaining).put(byteBuffer).flip();
        if (remaining > 0) {
            this.f12420s = true;
        }
    }

    private void r(byte[] bArr, int i10) {
        l(i10).put(bArr, 0, i10).flip();
        if (i10 > 0) {
            this.f12420s = true;
        }
    }

    private void s(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        int o10 = o(byteBuffer);
        int position = o10 - byteBuffer.position();
        byte[] bArr = this.f12415n;
        int length = bArr.length;
        int i10 = this.f12418q;
        int i11 = length - i10;
        if (o10 < limit && position < i11) {
            r(bArr, i10);
            this.f12418q = 0;
            this.f12417p = 0;
            return;
        }
        int min = Math.min(position, i11);
        byteBuffer.limit(byteBuffer.position() + min);
        byteBuffer.get(this.f12415n, this.f12418q, min);
        int i12 = this.f12418q + min;
        this.f12418q = i12;
        byte[] bArr2 = this.f12415n;
        if (i12 == bArr2.length) {
            if (this.f12420s) {
                r(bArr2, this.f12419r);
                this.f12421t += (this.f12418q - (this.f12419r * 2)) / this.f12413l;
            } else {
                this.f12421t += (i12 - this.f12419r) / this.f12413l;
            }
            w(byteBuffer, this.f12415n, this.f12418q);
            this.f12418q = 0;
            this.f12417p = 2;
        }
        byteBuffer.limit(limit);
    }

    private void t(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        byteBuffer.limit(Math.min(limit, byteBuffer.position() + this.f12415n.length));
        int n10 = n(byteBuffer);
        if (n10 == byteBuffer.position()) {
            this.f12417p = 1;
        } else {
            byteBuffer.limit(n10);
            q(byteBuffer);
        }
        byteBuffer.limit(limit);
    }

    private void u(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        int o10 = o(byteBuffer);
        byteBuffer.limit(o10);
        this.f12421t += byteBuffer.remaining() / this.f12413l;
        w(byteBuffer, this.f12416o, this.f12419r);
        if (o10 < limit) {
            r(this.f12416o, this.f12419r);
            this.f12417p = 0;
            byteBuffer.limit(limit);
        }
    }

    private void w(ByteBuffer byteBuffer, byte[] bArr, int i10) {
        int min = Math.min(byteBuffer.remaining(), this.f12419r);
        int i11 = this.f12419r - min;
        System.arraycopy(bArr, i10 - i11, this.f12416o, 0, i11);
        byteBuffer.position(byteBuffer.limit() - min);
        byteBuffer.get(this.f12416o, i11, min);
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean a() {
        return this.f12414m;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        while (byteBuffer.hasRemaining() && !g()) {
            int i10 = this.f12417p;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        u(byteBuffer);
                    } else {
                        throw new IllegalStateException();
                    }
                } else {
                    s(byteBuffer);
                }
            } else {
                t(byteBuffer);
            }
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        if (aVar.f12262c == 2) {
            if (this.f12414m) {
                return aVar;
            }
            return d.a.f12259e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f12414m) {
            this.f12413l = this.f12312b.f12263d;
            int m10 = m(this.f12410i) * this.f12413l;
            if (this.f12415n.length != m10) {
                this.f12415n = new byte[m10];
            }
            int m11 = m(this.f12411j) * this.f12413l;
            this.f12419r = m11;
            if (this.f12416o.length != m11) {
                this.f12416o = new byte[m11];
            }
        }
        this.f12417p = 0;
        this.f12421t = 0L;
        this.f12418q = 0;
        this.f12420s = false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10 = this.f12418q;
        if (i10 > 0) {
            r(this.f12415n, i10);
        }
        if (!this.f12420s) {
            this.f12421t += this.f12419r / this.f12413l;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12414m = false;
        this.f12419r = 0;
        byte[] bArr = w0.f40716f;
        this.f12415n = bArr;
        this.f12416o = bArr;
    }

    public long p() {
        return this.f12421t;
    }

    public void v(boolean z10) {
        this.f12414m = z10;
    }

    public n(long j10, long j11, short s10) {
        oe.a.a(j11 <= j10);
        this.f12410i = j10;
        this.f12411j = j11;
        this.f12412k = s10;
        byte[] bArr = w0.f40716f;
        this.f12415n = bArr;
        this.f12416o = bArr;
    }
}
