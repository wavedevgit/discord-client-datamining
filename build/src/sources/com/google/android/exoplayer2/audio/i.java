package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f12172b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f12173c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f12174d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12175e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f12176f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f12177g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12178h;

    public i() {
        ByteBuffer byteBuffer = d.f12118a;
        this.f12176f = byteBuffer;
        this.f12177g = byteBuffer;
        d.a aVar = d.a.f12119e;
        this.f12174d = aVar;
        this.f12175e = aVar;
        this.f12172b = aVar;
        this.f12173c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f12175e != d.a.f12119e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f12177g;
        this.f12177g = d.f12118a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f12178h && this.f12177g == d.f12118a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f12174d = aVar;
        this.f12175e = h(aVar);
        if (a()) {
            return this.f12175e;
        }
        return d.a.f12119e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f12178h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f12177g = d.f12118a;
        this.f12178h = false;
        this.f12172b = this.f12174d;
        this.f12173c = this.f12175e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f12177g.hasRemaining();
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
        if (this.f12176f.capacity() < i10) {
            this.f12176f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f12176f.clear();
        }
        ByteBuffer byteBuffer = this.f12176f;
        this.f12177g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f12176f = d.f12118a;
        d.a aVar = d.a.f12119e;
        this.f12174d = aVar;
        this.f12175e = aVar;
        this.f12172b = aVar;
        this.f12173c = aVar;
        k();
    }
}
