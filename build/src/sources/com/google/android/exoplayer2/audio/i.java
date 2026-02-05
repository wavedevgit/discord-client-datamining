package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f12273b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f12274c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f12275d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12276e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f12277f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f12278g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12279h;

    public i() {
        ByteBuffer byteBuffer = d.f12219a;
        this.f12277f = byteBuffer;
        this.f12278g = byteBuffer;
        d.a aVar = d.a.f12220e;
        this.f12275d = aVar;
        this.f12276e = aVar;
        this.f12273b = aVar;
        this.f12274c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f12276e != d.a.f12220e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f12278g;
        this.f12278g = d.f12219a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f12279h && this.f12278g == d.f12219a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f12275d = aVar;
        this.f12276e = h(aVar);
        if (a()) {
            return this.f12276e;
        }
        return d.a.f12220e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f12279h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f12278g = d.f12219a;
        this.f12279h = false;
        this.f12273b = this.f12275d;
        this.f12274c = this.f12276e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f12278g.hasRemaining();
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
        if (this.f12277f.capacity() < i10) {
            this.f12277f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f12277f.clear();
        }
        ByteBuffer byteBuffer = this.f12277f;
        this.f12278g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f12277f = d.f12219a;
        d.a aVar = d.a.f12220e;
        this.f12275d = aVar;
        this.f12276e = aVar;
        this.f12273b = aVar;
        this.f12274c = aVar;
        k();
    }
}
