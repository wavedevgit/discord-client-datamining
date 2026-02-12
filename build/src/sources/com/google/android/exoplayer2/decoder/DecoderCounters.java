package com.google.android.exoplayer2.decoder;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f13084a;

    /* renamed from: b  reason: collision with root package name */
    public int f13085b;

    /* renamed from: c  reason: collision with root package name */
    public int f13086c;

    /* renamed from: d  reason: collision with root package name */
    public int f13087d;

    /* renamed from: e  reason: collision with root package name */
    public int f13088e;

    /* renamed from: f  reason: collision with root package name */
    public int f13089f;

    /* renamed from: g  reason: collision with root package name */
    public int f13090g;

    /* renamed from: h  reason: collision with root package name */
    public int f13091h;

    /* renamed from: i  reason: collision with root package name */
    public int f13092i;

    /* renamed from: j  reason: collision with root package name */
    public int f13093j;

    /* renamed from: k  reason: collision with root package name */
    public long f13094k;

    /* renamed from: l  reason: collision with root package name */
    public int f13095l;

    private void b(long j10, int i10) {
        this.f13094k += j10;
        this.f13095l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f13084a), Integer.valueOf(this.f13085b), Integer.valueOf(this.f13086c), Integer.valueOf(this.f13087d), Integer.valueOf(this.f13088e), Integer.valueOf(this.f13089f), Integer.valueOf(this.f13090g), Integer.valueOf(this.f13091h), Integer.valueOf(this.f13092i), Integer.valueOf(this.f13093j), Long.valueOf(this.f13094k), Integer.valueOf(this.f13095l));
    }
}
