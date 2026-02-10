package com.google.android.exoplayer2.decoder;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DecoderCounters {

    /* renamed from: a  reason: collision with root package name */
    public int f12506a;

    /* renamed from: b  reason: collision with root package name */
    public int f12507b;

    /* renamed from: c  reason: collision with root package name */
    public int f12508c;

    /* renamed from: d  reason: collision with root package name */
    public int f12509d;

    /* renamed from: e  reason: collision with root package name */
    public int f12510e;

    /* renamed from: f  reason: collision with root package name */
    public int f12511f;

    /* renamed from: g  reason: collision with root package name */
    public int f12512g;

    /* renamed from: h  reason: collision with root package name */
    public int f12513h;

    /* renamed from: i  reason: collision with root package name */
    public int f12514i;

    /* renamed from: j  reason: collision with root package name */
    public int f12515j;

    /* renamed from: k  reason: collision with root package name */
    public long f12516k;

    /* renamed from: l  reason: collision with root package name */
    public int f12517l;

    private void b(long j10, int i10) {
        this.f12516k += j10;
        this.f12517l += i10;
    }

    public void a(long j10) {
        b(j10, 1);
    }

    public synchronized void c() {
    }

    public String toString() {
        return w0.D("DecoderCounters {\n decoderInits=%s,\n decoderReleases=%s\n queuedInputBuffers=%s\n skippedInputBuffers=%s\n renderedOutputBuffers=%s\n skippedOutputBuffers=%s\n droppedBuffers=%s\n droppedInputBuffers=%s\n maxConsecutiveDroppedBuffers=%s\n droppedToKeyframeEvents=%s\n totalVideoFrameProcessingOffsetUs=%s\n videoFrameProcessingOffsetCount=%s\n}", Integer.valueOf(this.f12506a), Integer.valueOf(this.f12507b), Integer.valueOf(this.f12508c), Integer.valueOf(this.f12509d), Integer.valueOf(this.f12510e), Integer.valueOf(this.f12511f), Integer.valueOf(this.f12512g), Integer.valueOf(this.f12513h), Integer.valueOf(this.f12514i), Integer.valueOf(this.f12515j), Long.valueOf(this.f12516k), Integer.valueOf(this.f12517l));
    }
}
