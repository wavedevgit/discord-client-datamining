package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f12889b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f12890c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f12891d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12892e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f12893f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f12894g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12895h;

    public i() {
        ByteBuffer byteBuffer = d.f12835a;
        this.f12893f = byteBuffer;
        this.f12894g = byteBuffer;
        d.a aVar = d.a.f12836e;
        this.f12891d = aVar;
        this.f12892e = aVar;
        this.f12889b = aVar;
        this.f12890c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f12892e != d.a.f12836e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f12894g;
        this.f12894g = d.f12835a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f12895h && this.f12894g == d.f12835a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f12891d = aVar;
        this.f12892e = h(aVar);
        if (a()) {
            return this.f12892e;
        }
        return d.a.f12836e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f12895h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f12894g = d.f12835a;
        this.f12895h = false;
        this.f12889b = this.f12891d;
        this.f12890c = this.f12892e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f12894g.hasRemaining();
    }

    protected abstract d.a h(d.a aVar);

    protected void i() {
    }

    protected void j() {
    }

    protected void k() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ByteBuffer l(int i10) {
        if (this.f12893f.capacity() < i10) {
            this.f12893f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f12893f.clear();
        }
        ByteBuffer byteBuffer = this.f12893f;
        this.f12894g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f12893f = d.f12835a;
        d.a aVar = d.a.f12836e;
        this.f12891d = aVar;
        this.f12892e = aVar;
        this.f12889b = aVar;
        this.f12890c = aVar;
        k();
    }
}
