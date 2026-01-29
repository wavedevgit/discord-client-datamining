package com.google.android.exoplayer2.audio;

import com.google.android.exoplayer2.audio.d;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i implements d {

    /* renamed from: b  reason: collision with root package name */
    protected d.a f13291b;

    /* renamed from: c  reason: collision with root package name */
    protected d.a f13292c;

    /* renamed from: d  reason: collision with root package name */
    private d.a f13293d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f13294e;

    /* renamed from: f  reason: collision with root package name */
    private ByteBuffer f13295f;

    /* renamed from: g  reason: collision with root package name */
    private ByteBuffer f13296g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f13297h;

    public i() {
        ByteBuffer byteBuffer = d.f13237a;
        this.f13295f = byteBuffer;
        this.f13296g = byteBuffer;
        d.a aVar = d.a.f13238e;
        this.f13293d = aVar;
        this.f13294e = aVar;
        this.f13291b = aVar;
        this.f13292c = aVar;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean a() {
        if (this.f13294e != d.a.f13238e) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public ByteBuffer b() {
        ByteBuffer byteBuffer = this.f13296g;
        this.f13296g = d.f13237a;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public boolean d() {
        if (this.f13297h && this.f13296g == d.f13237a) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final d.a e(d.a aVar) {
        this.f13293d = aVar;
        this.f13294e = h(aVar);
        if (a()) {
            return this.f13294e;
        }
        return d.a.f13238e;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void f() {
        this.f13297h = true;
        j();
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void flush() {
        this.f13296g = d.f13237a;
        this.f13297h = false;
        this.f13291b = this.f13293d;
        this.f13292c = this.f13294e;
        i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean g() {
        return this.f13296g.hasRemaining();
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
        if (this.f13295f.capacity() < i10) {
            this.f13295f = ByteBuffer.allocateDirect(i10).order(ByteOrder.nativeOrder());
        } else {
            this.f13295f.clear();
        }
        ByteBuffer byteBuffer = this.f13295f;
        this.f13296g = byteBuffer;
        return byteBuffer;
    }

    @Override // com.google.android.exoplayer2.audio.d
    public final void reset() {
        flush();
        this.f13295f = d.f13237a;
        d.a aVar = d.a.f13238e;
        this.f13293d = aVar;
        this.f13294e = aVar;
        this.f13291b = aVar;
        this.f13292c = aVar;
        k();
    }
}
