package com.google.android.exoplayer2.decoder;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f12467a;

    /* renamed from: b  reason: collision with root package name */
    public int f12468b;

    /* renamed from: c  reason: collision with root package name */
    public int f12469c;

    /* renamed from: d  reason: collision with root package name */
    public int f12470d;

    /* renamed from: e  reason: collision with root package name */
    public int f12471e;

    /* renamed from: f  reason: collision with root package name */
    public int f12472f;

    /* renamed from: g  reason: collision with root package name */
    public int f12473g;

    /* renamed from: h  reason: collision with root package name */
    public int f12474h;

    /* renamed from: i  reason: collision with root package name */
    public int f12475i;

    /* renamed from: j  reason: collision with root package name */
    public int f12476j;

    /* renamed from: k  reason: collision with root package name */
    public long f12477k;

    /* renamed from: l  reason: collision with root package name */
    public int f12478l;

    private void b(long j10, int i10) {
        this.f12477k += j10;
        this.f12478l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f12467a), Integer.valueOf(this.f12468b), Integer.valueOf(this.f12469c), Integer.valueOf(this.f12470d), Integer.valueOf(this.f12471e), Integer.valueOf(this.f12472f), Integer.valueOf(this.f12473g), Integer.valueOf(this.f12474h), Integer.valueOf(this.f12475i), Integer.valueOf(this.f12476j), Long.valueOf(this.f12477k), Integer.valueOf(this.f12478l));
    }
}
