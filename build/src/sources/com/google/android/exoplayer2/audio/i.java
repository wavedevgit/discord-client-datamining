package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f12312b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f12313c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f12314d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12315e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f12316f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f12317g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12318h;

    public i() {
        ByteBuffer byteBuffer = d.f12258a;
        this.f12316f = byteBuffer;
        this.f12317g = byteBuffer;
        d.a aVar = d.a.f12259e;
        this.f12314d = aVar;
        this.f12315e = aVar;
        this.f12312b = aVar;
        this.f12313c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f12315e != d.a.f12259e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f12317g;
        this.f12317g = d.f12258a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f12318h && this.f12317g == d.f12258a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f12314d = aVar;
        this.f12315e = h(aVar);
        if (a()) {
            return this.f12315e;
        }
        return d.a.f12259e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f12318h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f12317g = d.f12258a;
        this.f12318h = false;
        this.f12312b = this.f12314d;
        this.f12313c = this.f12315e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f12317g.hasRemaining();
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
        if (this.f12316f.capacity() < i10) {
            this.f12316f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f12316f.clear();
        }
        ByteBuffer byteBuffer = this.f12316f;
        this.f12317g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f12316f = d.f12258a;
        d.a aVar = d.a.f12259e;
        this.f12314d = aVar;
        this.f12315e = aVar;
        this.f12312b = aVar;
        this.f12313c = aVar;
        k();
    }
}
