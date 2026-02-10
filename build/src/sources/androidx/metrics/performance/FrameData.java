package androidx.metrics.performance;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameData {

    /* renamed from: a  reason: collision with root package name */
    private final List f4745a;

    /* renamed from: b  reason: collision with root package name */
    private long f4746b;

    /* renamed from: c  reason: collision with root package name */
    private long f4747c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4748d;

    public FrameData(long j10, long j11, boolean z10, List states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f4745a = states;
        this.f4746b = j10;
        this.f4747c = j11;
        this.f4748d = z10;
    }

    public final long a() {
        return this.f4747c;
    }

    public final long b() {
        return this.f4746b;
    }

    public final List c() {
        return this.f4745a;
    }

    public final boolean d() {
        return this.f4748d;
    }

    public final void e(long j10, long j11, boolean z10) {
        this.f4746b = j10;
        this.f4747c = j11;
        this.f4748d = z10;
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
        if (this.f4746b == frameData.f4746b && this.f4747c == frameData.f4747c && this.f4748d == frameData.f4748d && Intrinsics.areEqual(this.f4745a, frameData.f4745a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Long.hashCode(this.f4746b) * 31) + Long.hashCode(this.f4747c)) * 31) + Boolean.hashCode(this.f4748d)) * 31) + this.f4745a.hashCode();
    }

    public String toString() {
        return "FrameData(frameStartNanos=" + this.f4746b + ", frameDurationUiNanos=" + this.f4747c + ", isJank=" + this.f4748d + ", states=" + this.f4745a + ')';
    }
}
