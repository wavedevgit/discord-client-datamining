package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s extends i {

    /* renamed from: i  reason: collision with root package name */
    private int f12320i;

    /* renamed from: j  reason: collision with root package name */
    private int f12321j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12322k;

    /* renamed from: l  reason: collision with root package name */
    private int f12323l;

    /* renamed from: m  reason: collision with root package name */
    private byte[] f12324m = w0.f39017f;

    /* renamed from: n  reason: collision with root package name */
    private int f12325n;

    /* renamed from: o  reason: collision with root package name */
    private long f12326o;

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        int i10;
        if (super.d() && (i10 = this.f12325n) > 0) {
            l(i10).put(this.f12324m, 0, this.f12325n).flip();
            this.f12325n = 0;
        }
        return super.b();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        int i10 = limit - position;
        if (i10 != 0) {
            int min = Math.min(i10, this.f12323l);
            this.f12326o += min / this.f12172b.f12123d;
            this.f12323l -= min;
            byteBuffer.position(position + min);
            if (this.f12323l > 0) {
                return;
            }
            int i11 = i10 - min;
            int length = (this.f12325n + i11) - this.f12324m.length;
            ByteBuffer l10 = l(length);
            int q10 = w0.q(length, 0, this.f12325n);
            l10.put(this.f12324m, 0, q10);
            int q11 = w0.q(length - q10, 0, i11);
            byteBuffer.limit(byteBuffer.position() + q11);
            l10.put(byteBuffer);
            byteBuffer.limit(limit);
            int i12 = i11 - q11;
            int i13 = this.f12325n - q10;
            this.f12325n = i13;
            byte[] bArr = this.f12324m;
            System.arraycopy(bArr, q10, bArr, 0, i13);
            byteBuffer.get(this.f12324m, this.f12325n, i12);
            this.f12325n += i12;
            l10.flip();
        }
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (super.d() && this.f12325n == 0) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        if (aVar.f12122c == 2) {
            this.f12322k = true;
            if (this.f12320i == 0 && this.f12321j == 0) {
                return d.a.f12119e;
            }
            return aVar;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f12322k) {
            this.f12322k = false;
            int i10 = this.f12321j;
            int i11 = this.f12172b.f12123d;
            this.f12324m = new byte[i10 * i11];
            this.f12323l = this.f12320i * i11;
        }
        this.f12325n = 0;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10;
        if (this.f12322k) {
            if (this.f12325n > 0) {
                this.f12326o += i10 / this.f12172b.f12123d;
            }
            this.f12325n = 0;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12324m = w0.f39017f;
    }

    public long m() {
        return this.f12326o;
    }

    public void n() {
        this.f12326o = 0L;
    }

    public void o(int i10, int i11) {
        this.f12320i = i10;
        this.f12321j = i11;
    }
}
