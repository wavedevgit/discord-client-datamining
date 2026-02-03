package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {

    /* renamed from: i  reason: collision with root package name */
    private final long f11986i;

    /* renamed from: j  reason: collision with root package name */
    private final long f11987j;

    /* renamed from: k  reason: collision with root package name */
    private final short f11988k;

    /* renamed from: l  reason: collision with root package name */
    private int f11989l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f11990m;

    /* renamed from: n  reason: collision with root package name */
    private byte[] f11991n;

    /* renamed from: o  reason: collision with root package name */
    private byte[] f11992o;

    /* renamed from: p  reason: collision with root package name */
    private int f11993p;

    /* renamed from: q  reason: collision with root package name */
    private int f11994q;

    /* renamed from: r  reason: collision with root package name */
    private int f11995r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11996s;

    /* renamed from: t  reason: collision with root package name */
    private long f11997t;

    public n() {
        this(150000L, 20000L, (short) 1024);
    }

    private int m(long j10) {
        return (int) ((j10 * this.f11888b.f11836a) / 1000000);
    }

    private int n(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        while (true) {
            limit -= 2;
            if (limit >= byteBuffer.position()) {
                if (Math.abs((int) byteBuffer.getShort(limit)) > this.f11988k) {
                    int i10 = this.f11989l;
                    return ((limit / i10) * i10) + i10;
                }
            } else {
                return byteBuffer.position();
            }
        }
    }

    private int o(ByteBuffer byteBuffer) {
        for (int position = byteBuffer.position(); position < byteBuffer.limit(); position += 2) {
            if (Math.abs((int) byteBuffer.getShort(position)) > this.f11988k) {
                int i10 = this.f11989l;
                return i10 * (position / i10);
            }
        }
        return byteBuffer.limit();
    }

    private void q(ByteBuffer byteBuffer) {
        int remaining = byteBuffer.remaining();
        l(remaining).put(byteBuffer).flip();
        if (remaining > 0) {
            this.f11996s = true;
        }
    }

    private void r(byte[] bArr, int i10) {
        l(i10).put(bArr, 0, i10).flip();
        if (i10 > 0) {
            this.f11996s = true;
        }
    }

    private void s(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        int o10 = o(byteBuffer);
        int position = o10 - byteBuffer.position();
        byte[] bArr = this.f11991n;
        int length = bArr.length;
        int i10 = this.f11994q;
        int i11 = length - i10;
        if (o10 < limit && position < i11) {
            r(bArr, i10);
            this.f11994q = 0;
            this.f11993p = 0;
            return;
        }
        int min = Math.min(position, i11);
        byteBuffer.limit(byteBuffer.position() + min);
        byteBuffer.get(this.f11991n, this.f11994q, min);
        int i12 = this.f11994q + min;
        this.f11994q = i12;
        byte[] bArr2 = this.f11991n;
        if (i12 == bArr2.length) {
            if (this.f11996s) {
                r(bArr2, this.f11995r);
                this.f11997t += (this.f11994q - (this.f11995r * 2)) / this.f11989l;
            } else {
                this.f11997t += (i12 - this.f11995r) / this.f11989l;
            }
            w(byteBuffer, this.f11991n, this.f11994q);
            this.f11994q = 0;
            this.f11993p = 2;
        }
        byteBuffer.limit(limit);
    }

    private void t(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        byteBuffer.limit(Math.min(limit, byteBuffer.position() + this.f11991n.length));
        int n10 = n(byteBuffer);
        if (n10 == byteBuffer.position()) {
            this.f11993p = 1;
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
        this.f11997t += byteBuffer.remaining() / this.f11989l;
        w(byteBuffer, this.f11992o, this.f11995r);
        if (o10 < limit) {
            r(this.f11992o, this.f11995r);
            this.f11993p = 0;
            byteBuffer.limit(limit);
        }
    }

    private void w(ByteBuffer byteBuffer, byte[] bArr, int i10) {
        int min = Math.min(byteBuffer.remaining(), this.f11995r);
        int i11 = this.f11995r - min;
        System.arraycopy(bArr, i10 - i11, this.f11992o, 0, i11);
        byteBuffer.position(byteBuffer.limit() - min);
        byteBuffer.get(this.f11992o, i11, min);
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean a() {
        return this.f11990m;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        while (byteBuffer.hasRemaining() && !g()) {
            int i10 = this.f11993p;
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
        if (aVar.f11838c == 2) {
            if (this.f11990m) {
                return aVar;
            }
            return d.a.f11835e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f11990m) {
            this.f11989l = this.f11888b.f11839d;
            int m10 = m(this.f11986i) * this.f11989l;
            if (this.f11991n.length != m10) {
                this.f11991n = new byte[m10];
            }
            int m11 = m(this.f11987j) * this.f11989l;
            this.f11995r = m11;
            if (this.f11992o.length != m11) {
                this.f11992o = new byte[m11];
            }
        }
        this.f11993p = 0;
        this.f11997t = 0L;
        this.f11994q = 0;
        this.f11996s = false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10 = this.f11994q;
        if (i10 > 0) {
            r(this.f11991n, i10);
        }
        if (!this.f11996s) {
            this.f11997t += this.f11995r / this.f11989l;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f11990m = false;
        this.f11995r = 0;
        byte[] bArr = w0.f40202f;
        this.f11991n = bArr;
        this.f11992o = bArr;
    }

    public long p() {
        return this.f11997t;
    }

    public void v(boolean z10) {
        this.f11990m = z10;
    }

    public n(long j10, long j11, short s10) {
        ne.a.a(j11 <= j10);
        this.f11986i = j10;
        this.f11987j = j11;
        this.f11988k = s10;
        byte[] bArr = w0.f40202f;
        this.f11991n = bArr;
        this.f11992o = bArr;
    }
}
