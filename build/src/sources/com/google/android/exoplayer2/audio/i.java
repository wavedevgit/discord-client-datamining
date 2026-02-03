package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f11888b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f11889c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f11890d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f11891e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f11892f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f11893g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f11894h;

    public i() {
        ByteBuffer byteBuffer = d.f11834a;
        this.f11892f = byteBuffer;
        this.f11893g = byteBuffer;
        d.a aVar = d.a.f11835e;
        this.f11890d = aVar;
        this.f11891e = aVar;
        this.f11888b = aVar;
        this.f11889c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f11891e != d.a.f11835e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f11893g;
        this.f11893g = d.f11834a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f11894h && this.f11893g == d.f11834a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f11890d = aVar;
        this.f11891e = h(aVar);
        if (a()) {
            return this.f11891e;
        }
        return d.a.f11835e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f11894h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f11893g = d.f11834a;
        this.f11894h = false;
        this.f11888b = this.f11890d;
        this.f11889c = this.f11891e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f11893g.hasRemaining();
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
        if (this.f11892f.capacity() < i10) {
            this.f11892f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f11892f.clear();
        }
        ByteBuffer byteBuffer = this.f11892f;
        this.f11893g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f11892f = d.f11834a;
        d.a aVar = d.a.f11835e;
        this.f11890d = aVar;
        this.f11891e = aVar;
        this.f11888b = aVar;
        this.f11889c = aVar;
        k();
    }
}
