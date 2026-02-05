package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s extends i {

    /* renamed from: i  reason: collision with root package name */
    private int f12421i;

    /* renamed from: j  reason: collision with root package name */
    private int f12422j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12423k;

    /* renamed from: l  reason: collision with root package name */
    private int f12424l;

    /* renamed from: m  reason: collision with root package name */
    private byte[] f12425m = w0.f39662f;

    /* renamed from: n  reason: collision with root package name */
    private int f12426n;

    /* renamed from: o  reason: collision with root package name */
    private long f12427o;

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        int i10;
        if (super.d() && (i10 = this.f12426n) > 0) {
            l(i10).put(this.f12425m, 0, this.f12426n).flip();
            this.f12426n = 0;
        }
        return super.b();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        int i10 = limit - position;
        if (i10 != 0) {
            int min = Math.min(i10, this.f12424l);
            this.f12427o += min / this.f12273b.f12224d;
            this.f12424l -= min;
            byteBuffer.position(position + min);
            if (this.f12424l > 0) {
                return;
            }
            int i11 = i10 - min;
            int length = (this.f12426n + i11) - this.f12425m.length;
            ByteBuffer l10 = l(length);
            int q10 = w0.q(length, 0, this.f12426n);
            l10.put(this.f12425m, 0, q10);
            int q11 = w0.q(length - q10, 0, i11);
            byteBuffer.limit(byteBuffer.position() + q11);
            l10.put(byteBuffer);
            byteBuffer.limit(limit);
            int i12 = i11 - q11;
            int i13 = this.f12426n - q10;
            this.f12426n = i13;
            byte[] bArr = this.f12425m;
            System.arraycopy(bArr, q10, bArr, 0, i13);
            byteBuffer.get(this.f12425m, this.f12426n, i12);
            this.f12426n += i12;
            l10.flip();
        }
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (super.d() && this.f12426n == 0) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        if (aVar.f12223c == 2) {
            this.f12423k = true;
            if (this.f12421i == 0 && this.f12422j == 0) {
                return d.a.f12220e;
            }
            return aVar;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f12423k) {
            this.f12423k = false;
            int i10 = this.f12422j;
            int i11 = this.f12273b.f12224d;
            this.f12425m = new byte[i10 * i11];
            this.f12424l = this.f12421i * i11;
        }
        this.f12426n = 0;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10;
        if (this.f12423k) {
            if (this.f12426n > 0) {
                this.f12427o += i10 / this.f12273b.f12224d;
            }
            this.f12426n = 0;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12425m = w0.f39662f;
    }

    public long m() {
        return this.f12427o;
    }

    public void n() {
        this.f12427o = 0L;
    }

    public void o(int i10, int i11) {
        this.f12421i = i10;
        this.f12422j = i11;
    }
}
