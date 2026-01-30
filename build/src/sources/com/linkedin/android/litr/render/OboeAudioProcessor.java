package com.linkedin.android.litr.render;

import il.c;
import java.nio.ByteBuffer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0006\n\u0002\b\u0005\n\u0002\u0010\t\n\u0002\b\u0005\b\u0000\u0018\u0000 &2\u00020\u0001:\u0001\u0017B'\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0002\u0012\u0006\u0010\u0006\u001a\u00020\u0002¢\u0006\u0004\b\u0007\u0010\bJ0\u0010\n\u001a\u00020\t2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0004\u001a\u00020\u00022\u0006\u0010\u0005\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0002H\u0082 ¢\u0006\u0004\b\n\u0010\bJ0\u0010\u0010\u001a\u00020\u00022\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\r\u001a\u00020\u00022\u0006\u0010\u000e\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u0002H\u0082 ¢\u0006\u0004\b\u0010\u0010\u0011J\u0010\u0010\u0012\u001a\u00020\tH\u0082 ¢\u0006\u0004\b\u0012\u0010\u0013J\u001f\u0010\u0017\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0016\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\u0017\u0010\u0018J\u000f\u0010\u0019\u001a\u00020\tH\u0016¢\u0006\u0004\b\u0019\u0010\u0013R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u001aR\u0014\u0010\u0005\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u001aR\u0014\u0010\u001f\u001a\u00020\u001c8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0016\u0010!\u001a\u00020\u001c8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010\u001eR\u0016\u0010%\u001a\u00020\"8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b#\u0010$¨\u0006'"}, d2 = {"Lcom/linkedin/android/litr/render/OboeAudioProcessor;", "Lpl/a;", "", "sourceChannelCount", "sourceSampleRate", "targetChannelCount", "targetSampleRate", "<init>", "(IIII)V", "", "initProcessor", "Ljava/nio/ByteBuffer;", "sourceBuffer", "sampleCount", "targetBuffer", "targetBufferSize", "processAudioFrame", "(Ljava/nio/ByteBuffer;ILjava/nio/ByteBuffer;I)I", "releaseProcessor", "()V", "Lil/c;", "sourceFrame", "targetFrame", "a", "(Lil/c;Lil/c;)V", "release", "I", "b", "", "c", "D", "samplingRatio", "d", "sampleDurationUs", "", "e", "J", "presentationTimeNs", "f", "litr_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class OboeAudioProcessor implements pl.a {

    /* renamed from: f  reason: collision with root package name */
    public static final a f18254f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f18255a;

    /* renamed from: b  reason: collision with root package name */
    private final int f18256b;

    /* renamed from: c  reason: collision with root package name */
    private final double f18257c;

    /* renamed from: d  reason: collision with root package name */
    private double f18258d;

    /* renamed from: e  reason: collision with root package name */
    private long f18259e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        System.loadLibrary("litr-jni");
    }

    public OboeAudioProcessor(int i10, int i11, int i12, int i13) {
        this.f18255a = i10;
        this.f18256b = i12;
        initProcessor(i10, i11, i12, i13);
        double d10 = i13;
        this.f18257c = d10 / i11;
        this.f18258d = 1000000.0d / d10;
        this.f18259e = 0L;
    }

    private final native void initProcessor(int i10, int i11, int i12, int i13);

    private final native int processAudioFrame(ByteBuffer byteBuffer, int i10, ByteBuffer byteBuffer2, int i11);

    private final native void releaseProcessor();

    @Override // pl.a
    public void a(c sourceFrame, c targetFrame) {
        Intrinsics.checkNotNullParameter(sourceFrame, "sourceFrame");
        Intrinsics.checkNotNullParameter(targetFrame, "targetFrame");
        ByteBuffer byteBuffer = sourceFrame.f28593b;
        if (byteBuffer != null && targetFrame.f28593b != null) {
            int i10 = sourceFrame.f28594c.size / (this.f18255a * 2);
            Intrinsics.checkNotNullExpressionValue(byteBuffer, "sourceFrame.buffer");
            ByteBuffer byteBuffer2 = targetFrame.f28593b;
            Intrinsics.checkNotNullExpressionValue(byteBuffer2, "targetFrame.buffer");
            int processAudioFrame = processAudioFrame(byteBuffer, i10, byteBuffer2, targetFrame.f28593b.capacity());
            int i11 = processAudioFrame * 2 * this.f18256b;
            targetFrame.f28593b.rewind();
            targetFrame.f28593b.limit(Math.min(i11, targetFrame.f28593b.capacity()));
            targetFrame.f28594c.set(0, i11, this.f18259e, sourceFrame.f28594c.flags);
            this.f18259e += (long) (processAudioFrame * this.f18258d);
            return;
        }
        throw new IllegalArgumentException("Source or target frame doesn't have a buffer, cannot process it!");
    }

    @Override // pl.a
    public void release() {
        releaseProcessor();
    }
}
