package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s extends i {

    /* renamed from: i  reason: collision with root package name */
    private int f12460i;

    /* renamed from: j  reason: collision with root package name */
    private int f12461j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12462k;

    /* renamed from: l  reason: collision with root package name */
    private int f12463l;

    /* renamed from: m  reason: collision with root package name */
    private byte[] f12464m = w0.f40716f;

    /* renamed from: n  reason: collision with root package name */
    private int f12465n;

    /* renamed from: o  reason: collision with root package name */
    private long f12466o;

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        int i10;
        if (super.d() && (i10 = this.f12465n) > 0) {
            l(i10).put(this.f12464m, 0, this.f12465n).flip();
            this.f12465n = 0;
        }
        return super.b();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        int i10 = limit - position;
        if (i10 != 0) {
            int min = Math.min(i10, this.f12463l);
            this.f12466o += min / this.f12312b.f12263d;
            this.f12463l -= min;
            byteBuffer.position(position + min);
            if (this.f12463l > 0) {
                return;
            }
            int i11 = i10 - min;
            int length = (this.f12465n + i11) - this.f12464m.length;
            ByteBuffer l10 = l(length);
            int q10 = w0.q(length, 0, this.f12465n);
            l10.put(this.f12464m, 0, q10);
            int q11 = w0.q(length - q10, 0, i11);
            byteBuffer.limit(byteBuffer.position() + q11);
            l10.put(byteBuffer);
            byteBuffer.limit(limit);
            int i12 = i11 - q11;
            int i13 = this.f12465n - q10;
            this.f12465n = i13;
            byte[] bArr = this.f12464m;
            System.arraycopy(bArr, q10, bArr, 0, i13);
            byteBuffer.get(this.f12464m, this.f12465n, i12);
            this.f12465n += i12;
            l10.flip();
        }
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (super.d() && this.f12465n == 0) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        if (aVar.f12262c == 2) {
            this.f12462k = true;
            if (this.f12460i == 0 && this.f12461j == 0) {
                return d.a.f12259e;
            }
            return aVar;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f12462k) {
            this.f12462k = false;
            int i10 = this.f12461j;
            int i11 = this.f12312b.f12263d;
            this.f12464m = new byte[i10 * i11];
            this.f12463l = this.f12460i * i11;
        }
        this.f12465n = 0;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10;
        if (this.f12462k) {
            if (this.f12465n > 0) {
                this.f12466o += i10 / this.f12312b.f12263d;
            }
            this.f12465n = 0;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12464m = w0.f40716f;
    }

    public long m() {
        return this.f12466o;
    }

    public void n() {
        this.f12466o = 0L;
    }

    public void o(int i10, int i11) {
        this.f12460i = i10;
        this.f12461j = i11;
    }
}
