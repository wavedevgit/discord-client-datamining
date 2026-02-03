package com.google.android.exoplayer2.decoder;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f12082a;

    /* renamed from: b  reason: collision with root package name */
    public int f12083b;

    /* renamed from: c  reason: collision with root package name */
    public int f12084c;

    /* renamed from: d  reason: collision with root package name */
    public int f12085d;

    /* renamed from: e  reason: collision with root package name */
    public int f12086e;

    /* renamed from: f  reason: collision with root package name */
    public int f12087f;

    /* renamed from: g  reason: collision with root package name */
    public int f12088g;

    /* renamed from: h  reason: collision with root package name */
    public int f12089h;

    /* renamed from: i  reason: collision with root package name */
    public int f12090i;

    /* renamed from: j  reason: collision with root package name */
    public int f12091j;

    /* renamed from: k  reason: collision with root package name */
    public long f12092k;

    /* renamed from: l  reason: collision with root package name */
    public int f12093l;

    private void b(long j10, int i10) {
        this.f12092k += j10;
        this.f12093l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f12082a), Integer.valueOf(this.f12083b), Integer.valueOf(this.f12084c), Integer.valueOf(this.f12085d), Integer.valueOf(this.f12086e), Integer.valueOf(this.f12087f), Integer.valueOf(this.f12088g), Integer.valueOf(this.f12089h), Integer.valueOf(this.f12090i), Integer.valueOf(this.f12091j), Long.valueOf(this.f12092k), Integer.valueOf(this.f12093l));
    }
}
