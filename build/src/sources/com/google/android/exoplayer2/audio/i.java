package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f12920b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f12921c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f12922d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12923e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f12924f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f12925g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12926h;

    public i() {
        ByteBuffer byteBuffer = d.f12866a;
        this.f12924f = byteBuffer;
        this.f12925g = byteBuffer;
        d.a aVar = d.a.f12867e;
        this.f12922d = aVar;
        this.f12923e = aVar;
        this.f12920b = aVar;
        this.f12921c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f12923e != d.a.f12867e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f12925g;
        this.f12925g = d.f12866a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f12926h && this.f12925g == d.f12866a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f12922d = aVar;
        this.f12923e = h(aVar);
        if (a()) {
            return this.f12923e;
        }
        return d.a.f12867e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f12926h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f12925g = d.f12866a;
        this.f12926h = false;
        this.f12920b = this.f12922d;
        this.f12921c = this.f12923e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f12925g.hasRemaining();
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
        if (this.f12924f.capacity() < i10) {
            this.f12924f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f12924f.clear();
        }
        ByteBuffer byteBuffer = this.f12924f;
        this.f12925g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f12924f = d.f12866a;
        d.a aVar = d.a.f12867e;
        this.f12922d = aVar;
        this.f12923e = aVar;
        this.f12920b = aVar;
        this.f12921c = aVar;
        k();
    }
}
