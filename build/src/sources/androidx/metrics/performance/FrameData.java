package androidx.metrics.performance;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameData {

    /* renamed from: a  reason: collision with root package name */
    private final List f4638a;

    /* renamed from: b  reason: collision with root package name */
    private long f4639b;

    /* renamed from: c  reason: collision with root package name */
    private long f4640c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4641d;

    public FrameData(long j10, long j11, boolean z10, List states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f4638a = states;
        this.f4639b = j10;
        this.f4640c = j11;
        this.f4641d = z10;
    }

    public final long a() {
        return this.f4640c;
    }

    public final long b() {
        return this.f4639b;
    }

    public final List c() {
        return this.f4638a;
    }

    public final boolean d() {
        return this.f4641d;
    }

    public final void e(long j10, long j11, boolean z10) {
        this.f4639b = j10;
        this.f4640c = j11;
        this.f4641d = z10;
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
        if (this.f4639b == frameData.f4639b && this.f4640c == frameData.f4640c && this.f4641d == frameData.f4641d && Intrinsics.areEqual(this.f4638a, frameData.f4638a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Long.hashCode(this.f4639b) * 31) + Long.hashCode(this.f4640c)) * 31) + Boolean.hashCode(this.f4641d)) * 31) + this.f4638a.hashCode();
    }

    public String toString() {
        return "FrameData(frameStartNanos=" + this.f4639b + ", frameDurationUiNanos=" + this.f4640c + ", isJank=" + this.f4641d + ", states=" + this.f4638a + ')';
    }
}
