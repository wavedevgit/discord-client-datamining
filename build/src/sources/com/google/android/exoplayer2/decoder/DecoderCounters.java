package com.google.android.exoplayer2.decoder;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f13114a;

    /* renamed from: b  reason: collision with root package name */
    public int f13115b;

    /* renamed from: c  reason: collision with root package name */
    public int f13116c;

    /* renamed from: d  reason: collision with root package name */
    public int f13117d;

    /* renamed from: e  reason: collision with root package name */
    public int f13118e;

    /* renamed from: f  reason: collision with root package name */
    public int f13119f;

    /* renamed from: g  reason: collision with root package name */
    public int f13120g;

    /* renamed from: h  reason: collision with root package name */
    public int f13121h;

    /* renamed from: i  reason: collision with root package name */
    public int f13122i;

    /* renamed from: j  reason: collision with root package name */
    public int f13123j;

    /* renamed from: k  reason: collision with root package name */
    public long f13124k;

    /* renamed from: l  reason: collision with root package name */
    public int f13125l;

    private void b(long j10, int i10) {
        this.f13124k += j10;
        this.f13125l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f13114a), Integer.valueOf(this.f13115b), Integer.valueOf(this.f13116c), Integer.valueOf(this.f13117d), Integer.valueOf(this.f13118e), Integer.valueOf(this.f13119f), Integer.valueOf(this.f13120g), Integer.valueOf(this.f13121h), Integer.valueOf(this.f13122i), Integer.valueOf(this.f13123j), Long.valueOf(this.f13124k), Integer.valueOf(this.f13125l));
    }
}
