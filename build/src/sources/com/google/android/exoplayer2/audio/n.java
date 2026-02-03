package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {

    /* renamed from: i  reason: collision with root package name */
    private final long f13018i;

    /* renamed from: j  reason: collision with root package name */
    private final long f13019j;

    /* renamed from: k  reason: collision with root package name */
    private final short f13020k;

    /* renamed from: l  reason: collision with root package name */
    private int f13021l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f13022m;

    /* renamed from: n  reason: collision with root package name */
    private byte[] f13023n;

    /* renamed from: o  reason: collision with root package name */
    private byte[] f13024o;

    /* renamed from: p  reason: collision with root package name */
    private int f13025p;

    /* renamed from: q  reason: collision with root package name */
    private int f13026q;

    /* renamed from: r  reason: collision with root package name */
    private int f13027r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f13028s;

    /* renamed from: t  reason: collision with root package name */
    private long f13029t;

    public n() {
        this(150000L, 20000L, (short) 1024);
    }

    private int m(long j10) {
        return (int) ((j10 * this.f12920b.f12868a) / 1000000);
    }

    private int n(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        while (true) {
            limit -= 2;
            if (limit >= byteBuffer.position()) {
                if (Math.abs((int) byteBuffer.getShort(limit)) > this.f13020k) {
                    int i10 = this.f13021l;
                    return ((limit / i10) * i10) + i10;
                }
            } else {
                return byteBuffer.position();
            }
        }
    }

    private int o(ByteBuffer byteBuffer) {
        for (int position = byteBuffer.position(); position < byteBuffer.limit(); position += 2) {
            if (Math.abs((int) byteBuffer.getShort(position)) > this.f13020k) {
                int i10 = this.f13021l;
                return i10 * (position / i10);
            }
        }
        return byteBuffer.limit();
    }

    private void q(ByteBuffer byteBuffer) {
        int remaining = byteBuffer.remaining();
        l(remaining).put(byteBuffer).flip();
        if (remaining > 0) {
            this.f13028s = true;
        }
    }

    private void r(byte[] bArr, int i10) {
        l(i10).put(bArr, 0, i10).flip();
        if (i10 > 0) {
            this.f13028s = true;
        }
    }

    private void s(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        int o10 = o(byteBuffer);
        int position = o10 - byteBuffer.position();
        byte[] bArr = this.f13023n;
        int length = bArr.length;
        int i10 = this.f13026q;
        int i11 = length - i10;
        if (o10 < limit && position < i11) {
            r(bArr, i10);
            this.f13026q = 0;
            this.f13025p = 0;
            return;
        }
        int min = Math.min(position, i11);
        byteBuffer.limit(byteBuffer.position() + min);
        byteBuffer.get(this.f13023n, this.f13026q, min);
        int i12 = this.f13026q + min;
        this.f13026q = i12;
        byte[] bArr2 = this.f13023n;
        if (i12 == bArr2.length) {
            if (this.f13028s) {
                r(bArr2, this.f13027r);
                this.f13029t += (this.f13026q - (this.f13027r * 2)) / this.f13021l;
            } else {
                this.f13029t += (i12 - this.f13027r) / this.f13021l;
            }
            w(byteBuffer, this.f13023n, this.f13026q);
            this.f13026q = 0;
            this.f13025p = 2;
        }
        byteBuffer.limit(limit);
    }

    private void t(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        byteBuffer.limit(Math.min(limit, byteBuffer.position() + this.f13023n.length));
        int n10 = n(byteBuffer);
        if (n10 == byteBuffer.position()) {
            this.f13025p = 1;
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
        this.f13029t += byteBuffer.remaining() / this.f13021l;
        w(byteBuffer, this.f13024o, this.f13027r);
        if (o10 < limit) {
            r(this.f13024o, this.f13027r);
            this.f13025p = 0;
            byteBuffer.limit(limit);
        }
    }

    private void w(ByteBuffer byteBuffer, byte[] bArr, int i10) {
        int min = Math.min(byteBuffer.remaining(), this.f13027r);
        int i11 = this.f13027r - min;
        System.arraycopy(bArr, i10 - i11, this.f13024o, 0, i11);
        byteBuffer.position(byteBuffer.limit() - min);
        byteBuffer.get(this.f13024o, i11, min);
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean a() {
        return this.f13022m;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        while (byteBuffer.hasRemaining() && !g()) {
            int i10 = this.f13025p;
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
        if (aVar.f12870c == 2) {
            if (this.f13022m) {
                return aVar;
            }
            return d.a.f12867e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f13022m) {
            this.f13021l = this.f12920b.f12871d;
            int m10 = m(this.f13018i) * this.f13021l;
            if (this.f13023n.length != m10) {
                this.f13023n = new byte[m10];
            }
            int m11 = m(this.f13019j) * this.f13021l;
            this.f13027r = m11;
            if (this.f13024o.length != m11) {
                this.f13024o = new byte[m11];
            }
        }
        this.f13025p = 0;
        this.f13029t = 0L;
        this.f13026q = 0;
        this.f13028s = false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10 = this.f13026q;
        if (i10 > 0) {
            r(this.f13023n, i10);
        }
        if (!this.f13028s) {
            this.f13029t += this.f13027r / this.f13021l;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f13022m = false;
        this.f13027r = 0;
        byte[] bArr = w0.f40163f;
        this.f13023n = bArr;
        this.f13024o = bArr;
    }

    public long p() {
        return this.f13029t;
    }

    public void v(boolean z10) {
        this.f13022m = z10;
    }

    public n(long j10, long j11, short s10) {
        ne.a.a(j11 <= j10);
        this.f13018i = j10;
        this.f13019j = j11;
        this.f13020k = s10;
        byte[] bArr = w0.f40163f;
        this.f13023n = bArr;
        this.f13024o = bArr;
    }
}
