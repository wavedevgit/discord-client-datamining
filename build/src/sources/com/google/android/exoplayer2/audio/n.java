package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {

    /* renamed from: i  reason: collision with root package name */
    private final long f13389i;

    /* renamed from: j  reason: collision with root package name */
    private final long f13390j;

    /* renamed from: k  reason: collision with root package name */
    private final short f13391k;

    /* renamed from: l  reason: collision with root package name */
    private int f13392l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f13393m;

    /* renamed from: n  reason: collision with root package name */
    private byte[] f13394n;

    /* renamed from: o  reason: collision with root package name */
    private byte[] f13395o;

    /* renamed from: p  reason: collision with root package name */
    private int f13396p;

    /* renamed from: q  reason: collision with root package name */
    private int f13397q;

    /* renamed from: r  reason: collision with root package name */
    private int f13398r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f13399s;

    /* renamed from: t  reason: collision with root package name */
    private long f13400t;

    public n() {
        this(150000L, 20000L, (short) 1024);
    }

    private int m(long j10) {
        return (int) ((j10 * this.f13291b.f13239a) / 1000000);
    }

    private int n(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        while (true) {
            limit -= 2;
            if (limit >= byteBuffer.position()) {
                if (Math.abs((int) byteBuffer.getShort(limit)) > this.f13391k) {
                    int i10 = this.f13392l;
                    return ((limit / i10) * i10) + i10;
                }
            } else {
                return byteBuffer.position();
            }
        }
    }

    private int o(ByteBuffer byteBuffer) {
        for (int position = byteBuffer.position(); position < byteBuffer.limit(); position += 2) {
            if (Math.abs((int) byteBuffer.getShort(position)) > this.f13391k) {
                int i10 = this.f13392l;
                return i10 * (position / i10);
            }
        }
        return byteBuffer.limit();
    }

    private void q(ByteBuffer byteBuffer) {
        int remaining = byteBuffer.remaining();
        l(remaining).put(byteBuffer).flip();
        if (remaining > 0) {
            this.f13399s = true;
        }
    }

    private void r(byte[] bArr, int i10) {
        l(i10).put(bArr, 0, i10).flip();
        if (i10 > 0) {
            this.f13399s = true;
        }
    }

    private void s(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        int o10 = o(byteBuffer);
        int position = o10 - byteBuffer.position();
        byte[] bArr = this.f13394n;
        int length = bArr.length;
        int i10 = this.f13397q;
        int i11 = length - i10;
        if (o10 < limit && position < i11) {
            r(bArr, i10);
            this.f13397q = 0;
            this.f13396p = 0;
            return;
        }
        int min = Math.min(position, i11);
        byteBuffer.limit(byteBuffer.position() + min);
        byteBuffer.get(this.f13394n, this.f13397q, min);
        int i12 = this.f13397q + min;
        this.f13397q = i12;
        byte[] bArr2 = this.f13394n;
        if (i12 == bArr2.length) {
            if (this.f13399s) {
                r(bArr2, this.f13398r);
                this.f13400t += (this.f13397q - (this.f13398r * 2)) / this.f13392l;
            } else {
                this.f13400t += (i12 - this.f13398r) / this.f13392l;
            }
            w(byteBuffer, this.f13394n, this.f13397q);
            this.f13397q = 0;
            this.f13396p = 2;
        }
        byteBuffer.limit(limit);
    }

    private void t(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        byteBuffer.limit(Math.min(limit, byteBuffer.position() + this.f13394n.length));
        int n10 = n(byteBuffer);
        if (n10 == byteBuffer.position()) {
            this.f13396p = 1;
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
        this.f13400t += byteBuffer.remaining() / this.f13392l;
        w(byteBuffer, this.f13395o, this.f13398r);
        if (o10 < limit) {
            r(this.f13395o, this.f13398r);
            this.f13396p = 0;
            byteBuffer.limit(limit);
        }
    }

    private void w(ByteBuffer byteBuffer, byte[] bArr, int i10) {
        int min = Math.min(byteBuffer.remaining(), this.f13398r);
        int i11 = this.f13398r - min;
        System.arraycopy(bArr, i10 - i11, this.f13395o, 0, i11);
        byteBuffer.position(byteBuffer.limit() - min);
        byteBuffer.get(this.f13395o, i11, min);
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean a() {
        return this.f13393m;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        while (byteBuffer.hasRemaining() && !g()) {
            int i10 = this.f13396p;
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
        if (aVar.f13241c == 2) {
            if (this.f13393m) {
                return aVar;
            }
            return d.a.f13238e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f13393m) {
            this.f13392l = this.f13291b.f13242d;
            int m10 = m(this.f13389i) * this.f13392l;
            if (this.f13394n.length != m10) {
                this.f13394n = new byte[m10];
            }
            int m11 = m(this.f13390j) * this.f13392l;
            this.f13398r = m11;
            if (this.f13395o.length != m11) {
                this.f13395o = new byte[m11];
            }
        }
        this.f13396p = 0;
        this.f13400t = 0L;
        this.f13397q = 0;
        this.f13399s = false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10 = this.f13397q;
        if (i10 > 0) {
            r(this.f13394n, i10);
        }
        if (!this.f13399s) {
            this.f13400t += this.f13398r / this.f13392l;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f13393m = false;
        this.f13398r = 0;
        byte[] bArr = w0.f40300f;
        this.f13394n = bArr;
        this.f13395o = bArr;
    }

    public long p() {
        return this.f13400t;
    }

    public void v(boolean z10) {
        this.f13393m = z10;
    }

    public n(long j10, long j11, short s10) {
        ne.a.a(j11 <= j10);
        this.f13389i = j10;
        this.f13390j = j11;
        this.f13391k = s10;
        byte[] bArr = w0.f40300f;
        this.f13394n = bArr;
        this.f13395o = bArr;
    }
}
