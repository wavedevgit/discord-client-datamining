package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends i {

    /* renamed from: i  reason: collision with root package name */
    private final long f12270i;

    /* renamed from: j  reason: collision with root package name */
    private final long f12271j;

    /* renamed from: k  reason: collision with root package name */
    private final short f12272k;

    /* renamed from: l  reason: collision with root package name */
    private int f12273l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f12274m;

    /* renamed from: n  reason: collision with root package name */
    private byte[] f12275n;

    /* renamed from: o  reason: collision with root package name */
    private byte[] f12276o;

    /* renamed from: p  reason: collision with root package name */
    private int f12277p;

    /* renamed from: q  reason: collision with root package name */
    private int f12278q;

    /* renamed from: r  reason: collision with root package name */
    private int f12279r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f12280s;

    /* renamed from: t  reason: collision with root package name */
    private long f12281t;

    public n() {
        this(150000L, 20000L, (short) 1024);
    }

    private int m(long j10) {
        return (int) ((j10 * this.f12172b.f12120a) / 1000000);
    }

    private int n(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        while (true) {
            limit -= 2;
            if (limit >= byteBuffer.position()) {
                if (Math.abs((int) byteBuffer.getShort(limit)) > this.f12272k) {
                    int i10 = this.f12273l;
                    return ((limit / i10) * i10) + i10;
                }
            } else {
                return byteBuffer.position();
            }
        }
    }

    private int o(ByteBuffer byteBuffer) {
        for (int position = byteBuffer.position(); position < byteBuffer.limit(); position += 2) {
            if (Math.abs((int) byteBuffer.getShort(position)) > this.f12272k) {
                int i10 = this.f12273l;
                return i10 * (position / i10);
            }
        }
        return byteBuffer.limit();
    }

    private void q(ByteBuffer byteBuffer) {
        int remaining = byteBuffer.remaining();
        l(remaining).put(byteBuffer).flip();
        if (remaining > 0) {
            this.f12280s = true;
        }
    }

    private void r(byte[] bArr, int i10) {
        l(i10).put(bArr, 0, i10).flip();
        if (i10 > 0) {
            this.f12280s = true;
        }
    }

    private void s(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        int o10 = o(byteBuffer);
        int position = o10 - byteBuffer.position();
        byte[] bArr = this.f12275n;
        int length = bArr.length;
        int i10 = this.f12278q;
        int i11 = length - i10;
        if (o10 < limit && position < i11) {
            r(bArr, i10);
            this.f12278q = 0;
            this.f12277p = 0;
            return;
        }
        int min = Math.min(position, i11);
        byteBuffer.limit(byteBuffer.position() + min);
        byteBuffer.get(this.f12275n, this.f12278q, min);
        int i12 = this.f12278q + min;
        this.f12278q = i12;
        byte[] bArr2 = this.f12275n;
        if (i12 == bArr2.length) {
            if (this.f12280s) {
                r(bArr2, this.f12279r);
                this.f12281t += (this.f12278q - (this.f12279r * 2)) / this.f12273l;
            } else {
                this.f12281t += (i12 - this.f12279r) / this.f12273l;
            }
            w(byteBuffer, this.f12275n, this.f12278q);
            this.f12278q = 0;
            this.f12277p = 2;
        }
        byteBuffer.limit(limit);
    }

    private void t(ByteBuffer byteBuffer) {
        int limit = byteBuffer.limit();
        byteBuffer.limit(Math.min(limit, byteBuffer.position() + this.f12275n.length));
        int n10 = n(byteBuffer);
        if (n10 == byteBuffer.position()) {
            this.f12277p = 1;
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
        this.f12281t += byteBuffer.remaining() / this.f12273l;
        w(byteBuffer, this.f12276o, this.f12279r);
        if (o10 < limit) {
            r(this.f12276o, this.f12279r);
            this.f12277p = 0;
            byteBuffer.limit(limit);
        }
    }

    private void w(ByteBuffer byteBuffer, byte[] bArr, int i10) {
        int min = Math.min(byteBuffer.remaining(), this.f12279r);
        int i11 = this.f12279r - min;
        System.arraycopy(bArr, i10 - i11, this.f12276o, 0, i11);
        byteBuffer.position(byteBuffer.limit() - min);
        byteBuffer.get(this.f12276o, i11, min);
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean a() {
        return this.f12274m;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        while (byteBuffer.hasRemaining() && !g()) {
            int i10 = this.f12277p;
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
        if (aVar.f12122c == 2) {
            if (this.f12274m) {
                return aVar;
            }
            return d.a.f12119e;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f12274m) {
            this.f12273l = this.f12172b.f12123d;
            int m10 = m(this.f12270i) * this.f12273l;
            if (this.f12275n.length != m10) {
                this.f12275n = new byte[m10];
            }
            int m11 = m(this.f12271j) * this.f12273l;
            this.f12279r = m11;
            if (this.f12276o.length != m11) {
                this.f12276o = new byte[m11];
            }
        }
        this.f12277p = 0;
        this.f12281t = 0L;
        this.f12278q = 0;
        this.f12280s = false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10 = this.f12278q;
        if (i10 > 0) {
            r(this.f12275n, i10);
        }
        if (!this.f12280s) {
            this.f12281t += this.f12279r / this.f12273l;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12274m = false;
        this.f12279r = 0;
        byte[] bArr = w0.f39065f;
        this.f12275n = bArr;
        this.f12276o = bArr;
    }

    public long p() {
        return this.f12281t;
    }

    public void v(boolean z10) {
        this.f12274m = z10;
    }

    public n(long j10, long j11, short s10) {
        ne.a.a(j11 <= j10);
        this.f12270i = j10;
        this.f12271j = j11;
        this.f12272k = s10;
        byte[] bArr = w0.f39065f;
        this.f12275n = bArr;
        this.f12276o = bArr;
    }
}
