package androidx.metrics.performance;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameData {

    /* renamed from: a  reason: collision with root package name */
    private final List f5048a;

    /* renamed from: b  reason: collision with root package name */
    private long f5049b;

    /* renamed from: c  reason: collision with root package name */
    private long f5050c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f5051d;

    public FrameData(long j10, long j11, boolean z10, List states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f5048a = states;
        this.f5049b = j10;
        this.f5050c = j11;
        this.f5051d = z10;
    }

    public final long a() {
        return this.f5050c;
    }

    public final long b() {
        return this.f5049b;
    }

    public final List c() {
        return this.f5048a;
    }

    public final boolean d() {
        return this.f5051d;
    }

    public final void e(long j10, long j11, boolean z10) {
        this.f5049b = j10;
        this.f5050c = j11;
        this.f5051d = z10;
    }

    public boolean equals(Object obj) {
        Class<?> cls;
        if (this == obj) {
            return true;
        }
        Class<?> cls2 = getClass();
        if (obj != null) {
            cls = obj.getClass();
        } else {
            cls = null;
        }
        if (!Intrinsics.areEqual(cls2, cls)) {
            return false;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type androidx.metrics.performance.FrameData");
        FrameData frameData = (FrameData) obj;
        if (this.f5049b == frameData.f5049b && this.f5050c == frameData.f5050c && this.f5051d == frameData.f5051d && Intrinsics.areEqual(this.f5048a, frameData.f5048a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Long.hashCode(this.f5049b) * 31) + Long.hashCode(this.f5050c)) * 31) + Boolean.hashCode(this.f5051d)) * 31) + this.f5048a.hashCode();
    }

    public String toString() {
        return "FrameData(frameStartNanos=" + this.f5049b + ", frameDurationUiNanos=" + this.f5050c + ", isJank=" + this.f5051d + ", states=" + this.f5048a + ')';
    }
}
