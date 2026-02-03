package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s extends i {

    /* renamed from: i  reason: collision with root package name */
    private int f12036i;

    /* renamed from: j  reason: collision with root package name */
    private int f12037j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12038k;

    /* renamed from: l  reason: collision with root package name */
    private int f12039l;

    /* renamed from: m  reason: collision with root package name */
    private byte[] f12040m = w0.f40202f;

    /* renamed from: n  reason: collision with root package name */
    private int f12041n;

    /* renamed from: o  reason: collision with root package name */
    private long f12042o;

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        int i10;
        if (super.d() && (i10 = this.f12041n) > 0) {
            l(i10).put(this.f12040m, 0, this.f12041n).flip();
            this.f12041n = 0;
        }
        return super.b();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        int i10 = limit - position;
        if (i10 != 0) {
            int min = Math.min(i10, this.f12039l);
            this.f12042o += min / this.f11888b.f11839d;
            this.f12039l -= min;
            byteBuffer.position(position + min);
            if (this.f12039l > 0) {
                return;
            }
            int i11 = i10 - min;
            int length = (this.f12041n + i11) - this.f12040m.length;
            ByteBuffer l10 = l(length);
            int q10 = w0.q(length, 0, this.f12041n);
            l10.put(this.f12040m, 0, q10);
            int q11 = w0.q(length - q10, 0, i11);
            byteBuffer.limit(byteBuffer.position() + q11);
            l10.put(byteBuffer);
            byteBuffer.limit(limit);
            int i12 = i11 - q11;
            int i13 = this.f12041n - q10;
            this.f12041n = i13;
            byte[] bArr = this.f12040m;
            System.arraycopy(bArr, q10, bArr, 0, i13);
            byteBuffer.get(this.f12040m, this.f12041n, i12);
            this.f12041n += i12;
            l10.flip();
        }
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (super.d() && this.f12041n == 0) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        if (aVar.f11838c == 2) {
            this.f12038k = true;
            if (this.f12036i == 0 && this.f12037j == 0) {
                return d.a.f11835e;
            }
            return aVar;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f12038k) {
            this.f12038k = false;
            int i10 = this.f12037j;
            int i11 = this.f11888b.f11839d;
            this.f12040m = new byte[i10 * i11];
            this.f12039l = this.f12036i * i11;
        }
        this.f12041n = 0;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10;
        if (this.f12038k) {
            if (this.f12041n > 0) {
                this.f12042o += i10 / this.f11888b.f11839d;
            }
            this.f12041n = 0;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f12040m = w0.f40202f;
    }

    public long m() {
        return this.f12042o;
    }

    public void n() {
        this.f12042o = 0L;
    }

    public void o(int i10, int i11) {
        this.f12036i = i10;
        this.f12037j = i11;
    }
}
