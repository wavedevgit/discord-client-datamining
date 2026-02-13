package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {

    /* renamed from: i  reason: collision with root package name */
    private final long f12988i;

    /* renamed from: j  reason: collision with root package name */
    private final long f12989j;

    /* renamed from: k  reason: collision with root package name */
    private final short f12990k;

    /* renamed from: l  reason: collision with root package name */
    private int f12991l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f12992m;

    /* renamed from: n  reason: collision with root package name */
    private byte[] f12993n;

    /* renamed from: o  reason: collision with root package name */
    private byte[] f12994o;

    /* renamed from: p  reason: collision with root package name */
    private int f12995p;

    /* renamed from: q  reason: collision with root package name */
    private int f12996q;

    /* renamed from: r  reason: collision with root package name */
    private int f12997r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f12998s;

    /* renamed from: t  reason: collision with root package name */
    private long f12999t;

    public n() {
        this(150000L, 20000L, (short) 1024);
    }

    private int m(long j10) {
        return (int) ((j10 * this.f12890b.f12838a) / 1000000);
    }

    private int n(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        while (true) {
            limit -= 2;
            if (limit >= byteBuffer.position()) {
                if (Math.abs((int) byteBuffer.getShort(limit)) > this.f12990k) {
                    int i10 = this.f12991l;
                    return ((limit / i10) * i10) + i10;
                }
            } else {
                return byteBuffer.position();
            }
        }
    }

    private int o(ByteBuffer byteBuffer) {
        for (int position = byteBuffer.position(); position < byteBuffer.limit(); position += 2) {
            if (Math.abs((int) byteBuffer.getShort(position)) > this.f12990k) {
                int i10 = this.f12991l;
                return i10 * (position / i10);
            }
        }
        return byteBuffer.limit();
    }

    private void q(ByteBuffer byteBuffer) {
        int remaining = byteBuffer.remaining();
        l(remaining).put(byteBuffer).flip();
        if (remaining > 0) {
            this.f12998s = true;
        }
    }

    private void r(byte[] bArr, int i10) {
        l(i10).put(bArr, 0, i10).flip();
        if (i10 > 0) {
            this.f12998s = true;
        }
    }

    private void s(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        int o10 = o(byteBuffer);
        int position = o10 - byteBuffer.position();
        byte[] bArr = this.f12993n;
        int length = bArr.length;
        int i10 = this.f12996q;
        int i11 = length - i10;
        if (o10 < limit && position < i11) {
            r(bArr, i10);
            this.f12996q = 0;
            this.f12995p = 0;
            return;
        }
        int min = Math.min(position, i11);
        byteBuffer.limit(byteBuffer.position() + min);
        byteBuffer.get(this.f12993n, this.f12996q, min);
        int i12 = this.f12996q + min;
        this.f12996q = i12;
        byte[] bArr2 = this.f12993n;
        if (i12 == bArr2.length) {
            if (this.f12998s) {
                r(bArr2, this.f12997r);
                this.f12999t += (this.f12996q - (this.f12997r * 2)) / this.f12991l;
            } else {
                this.f12999t += (i12 - this.f12997r) / this.f12991l;
            }
            w(byteBuffer, this.f12993n, this.f12996q);
            this.f12996q = 0;
            this.f12995p = 2;
        }
        byteBuffer.limit(limit);
    }

    private void t(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        byteBuffer.limit(Math.min(limit, byteBuffer.position() + this.f12993n.length));
        int n10 = n(byteBuffer);
        if (n10 == byteBuffer.position()) {
            this.f12995p = 1;
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
        this.f12999t += byteBuffer.remaining() / this.f12991l;
        w(byteBuffer, this.f12994o, this.f12997r);
        if (o10 < limit) {
            r(this.f12994o, this.f12997r);
            this.f12995p = 0;
            byteBuffer.limit(limit);
        }
    }

    private void w(ByteBuffer byteBuffer, byte[] bArr, int i10) {
        int min = Math.min(byteBuffer.remaining(), this.f12997r);
        int i11 = this.f12997r - min;
        System.arraycopy(bArr, i10 - i11, this.f12994o, 0, i11);
        byteBuffer.position(byteBuffer.limit() - min);
        byteBuffer.get(this.f12994o, i11, min);
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean a() {
        return this.f12992m;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        while (byteBuffer.hasRemaining() && !g()) {
            int i10 = this.f12995p;
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
        if (aVar.f12840c == 2) {
            if (this.f12992m) {
                return aVar;
            }
            return d.a.f12837e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f12992m) {
            this.f12991l = this.f12890b.f12841d;
            int m10 = m(this.f12988i) * this.f12991l;
            if (this.f12993n.length != m10) {
                this.f12993n = new byte[m10];
            }
            int m11 = m(this.f12989j) * this.f12991l;
            this.f12997r = m11;
            if (this.f12994o.length != m11) {
                this.f12994o = new byte[m11];
            }
        }
        this.f12995p = 0;
        this.f12999t = 0L;
        this.f12996q = 0;
        this.f12998s = false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10 = this.f12996q;
        if (i10 > 0) {
            r(this.f12993n, i10);
        }
        if (!this.f12998s) {
            this.f12999t += this.f12997r / this.f12991l;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12992m = false;
        this.f12997r = 0;
        byte[] bArr = w0.f39611f;
        this.f12993n = bArr;
        this.f12994o = bArr;
    }

    public long p() {
        return this.f12999t;
    }

    public void v(boolean z10) {
        this.f12992m = z10;
    }

    public n(long j10, long j11, short s10) {
        oe.a.a(j11 <= j10);
        this.f12988i = j10;
        this.f12989j = j11;
        this.f12990k = s10;
        byte[] bArr = w0.f39611f;
        this.f12993n = bArr;
        this.f12994o = bArr;
    }
}
