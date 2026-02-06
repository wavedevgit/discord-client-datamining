package com.google.android.exoplayer2.decoder;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f12366a;

    /* renamed from: b  reason: collision with root package name */
    public int f12367b;

    /* renamed from: c  reason: collision with root package name */
    public int f12368c;

    /* renamed from: d  reason: collision with root package name */
    public int f12369d;

    /* renamed from: e  reason: collision with root package name */
    public int f12370e;

    /* renamed from: f  reason: collision with root package name */
    public int f12371f;

    /* renamed from: g  reason: collision with root package name */
    public int f12372g;

    /* renamed from: h  reason: collision with root package name */
    public int f12373h;

    /* renamed from: i  reason: collision with root package name */
    public int f12374i;

    /* renamed from: j  reason: collision with root package name */
    public int f12375j;

    /* renamed from: k  reason: collision with root package name */
    public long f12376k;

    /* renamed from: l  reason: collision with root package name */
    public int f12377l;

    private void b(long j10, int i10) {
        this.f12376k += j10;
        this.f12377l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f12366a), Integer.valueOf(this.f12367b), Integer.valueOf(this.f12368c), Integer.valueOf(this.f12369d), Integer.valueOf(this.f12370e), Integer.valueOf(this.f12371f), Integer.valueOf(this.f12372g), Integer.valueOf(this.f12373h), Integer.valueOf(this.f12374i), Integer.valueOf(this.f12375j), Long.valueOf(this.f12376k), Integer.valueOf(this.f12377l));
    }
}
