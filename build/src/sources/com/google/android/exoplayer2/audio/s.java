package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s extends i {

    /* renamed from: i  reason: collision with root package name */
    private int f13068i;

    /* renamed from: j  reason: collision with root package name */
    private int f13069j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13070k;

    /* renamed from: l  reason: collision with root package name */
    private int f13071l;

    /* renamed from: m  reason: collision with root package name */
    private byte[] f13072m = w0.f40163f;

    /* renamed from: n  reason: collision with root package name */
    private int f13073n;

    /* renamed from: o  reason: collision with root package name */
    private long f13074o;

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        int i10;
        if (super.d() && (i10 = this.f13073n) > 0) {
            l(i10).put(this.f13072m, 0, this.f13073n).flip();
            this.f13073n = 0;
        }
        return super.b();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public void c(ByteBuffer byteBuffer) {
        int position = byteBuffer.position();
        int limit = byteBuffer.limit();
        int i10 = limit - position;
        if (i10 != 0) {
            int min = Math.min(i10, this.f13071l);
            this.f13074o += min / this.f12920b.f12871d;
            this.f13071l -= min;
            byteBuffer.position(position + min);
            if (this.f13071l > 0) {
                return;
            }
            int i11 = i10 - min;
            int length = (this.f13073n + i11) - this.f13072m.length;
            ByteBuffer l10 = l(length);
            int q10 = w0.q(length, 0, this.f13073n);
            l10.put(this.f13072m, 0, q10);
            int q11 = w0.q(length - q10, 0, i11);
            byteBuffer.limit(byteBuffer.position() + q11);
            l10.put(byteBuffer);
            byteBuffer.limit(limit);
            int i12 = i11 - q11;
            int i13 = this.f13073n - q10;
            this.f13073n = i13;
            byte[] bArr = this.f13072m;
            System.arraycopy(bArr, q10, bArr, 0, i13);
            byteBuffer.get(this.f13072m, this.f13073n, i12);
            this.f13073n += i12;
            l10.flip();
        }
    }

    @Override // com.google.android.exoplayer2.audio.i, com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (super.d() && this.f13073n == 0) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.i
    public d.a h(d.a aVar) {
        if (aVar.f12870c == 2) {
            this.f13070k = true;
            if (this.f13068i == 0 && this.f13069j == 0) {
                return d.a.f12867e;
            }
            return aVar;
        }
        throw new d.b(aVar);
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void i() {
        if (this.f13070k) {
            this.f13070k = false;
            int i10 = this.f13069j;
            int i11 = this.f12920b.f12871d;
            this.f13072m = new byte[i10 * i11];
            this.f13071l = this.f13068i * i11;
        }
        this.f13073n = 0;
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void j() {
        int i10;
        if (this.f13070k) {
            if (this.f13073n > 0) {
                this.f13074o += i10 / this.f12920b.f12871d;
            }
            this.f13073n = 0;
        }
    }

    @Override // com.google.android.exoplayer2.audio.i
    protected void k() {
        this.f13072m = w0.f40163f;
    }

    public long m() {
        return this.f13074o;
    }

    public void n() {
        this.f13074o = 0L;
    }

    public void o(int i10, int i11) {
        this.f13068i = i10;
        this.f13069j = i11;
    }
}
