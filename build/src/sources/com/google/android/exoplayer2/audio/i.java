package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f12890b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f12891c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f12892d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12893e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f12894f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f12895g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f12896h;

    public i() {
        ByteBuffer byteBuffer = d.f12836a;
        this.f12894f = byteBuffer;
        this.f12895g = byteBuffer;
        d.a aVar = d.a.f12837e;
        this.f12892d = aVar;
        this.f12893e = aVar;
        this.f12890b = aVar;
        this.f12891c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f12893e != d.a.f12837e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f12895g;
        this.f12895g = d.f12836a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f12896h && this.f12895g == d.f12836a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f12892d = aVar;
        this.f12893e = h(aVar);
        if (a()) {
            return this.f12893e;
        }
        return d.a.f12837e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f12896h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f12895g = d.f12836a;
        this.f12896h = false;
        this.f12890b = this.f12892d;
        this.f12891c = this.f12893e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f12895g.hasRemaining();
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
        if (this.f12894f.capacity() < i10) {
            this.f12894f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f12894f.clear();
        }
        ByteBuffer byteBuffer = this.f12894f;
        this.f12895g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f12894f = d.f12836a;
        d.a aVar = d.a.f12837e;
        this.f12892d = aVar;
        this.f12893e = aVar;
        this.f12890b = aVar;
        this.f12891c = aVar;
        k();
    }
}
