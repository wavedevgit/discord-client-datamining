package com.google.android.exoplayer2.decoder;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f13485a;

    /* renamed from: b  reason: collision with root package name */
    public int f13486b;

    /* renamed from: c  reason: collision with root package name */
    public int f13487c;

    /* renamed from: d  reason: collision with root package name */
    public int f13488d;

    /* renamed from: e  reason: collision with root package name */
    public int f13489e;

    /* renamed from: f  reason: collision with root package name */
    public int f13490f;

    /* renamed from: g  reason: collision with root package name */
    public int f13491g;

    /* renamed from: h  reason: collision with root package name */
    public int f13492h;

    /* renamed from: i  reason: collision with root package name */
    public int f13493i;

    /* renamed from: j  reason: collision with root package name */
    public int f13494j;

    /* renamed from: k  reason: collision with root package name */
    public long f13495k;

    /* renamed from: l  reason: collision with root package name */
    public int f13496l;

    private void b(long j10, int i10) {
        this.f13495k += j10;
        this.f13496l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f13485a), Integer.valueOf(this.f13486b), Integer.valueOf(this.f13487c), Integer.valueOf(this.f13488d), Integer.valueOf(this.f13489e), Integer.valueOf(this.f13490f), Integer.valueOf(this.f13491g), Integer.valueOf(this.f13492h), Integer.valueOf(this.f13493i), Integer.valueOf(this.f13494j), Long.valueOf(this.f13495k), Integer.valueOf(this.f13496l));
    }
}
