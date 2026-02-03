package androidx.metrics.performance;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameData {

    /* renamed from: a  reason: collision with root package name */
    private final List f4607a;

    /* renamed from: b  reason: collision with root package name */
    private long f4608b;

    /* renamed from: c  reason: collision with root package name */
    private long f4609c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4610d;

    public FrameData(long j10, long j11, boolean z10, List states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f4607a = states;
        this.f4608b = j10;
        this.f4609c = j11;
        this.f4610d = z10;
    }

    public final long a() {
        return this.f4609c;
    }

    public final long b() {
        return this.f4608b;
    }

    public final List c() {
        return this.f4607a;
    }

    public final boolean d() {
        return this.f4610d;
    }

    public final void e(long j10, long j11, boolean z10) {
        this.f4608b = j10;
        this.f4609c = j11;
        this.f4610d = z10;
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
        if (this.f4608b == frameData.f4608b && this.f4609c == frameData.f4609c && this.f4610d == frameData.f4610d && Intrinsics.areEqual(this.f4607a, frameData.f4607a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Long.hashCode(this.f4608b) * 31) + Long.hashCode(this.f4609c)) * 31) + Boolean.hashCode(this.f4610d)) * 31) + this.f4607a.hashCode();
    }

    public String toString() {
        return "FrameData(frameStartNanos=" + this.f4608b + ", frameDurationUiNanos=" + this.f4609c + ", isJank=" + this.f4610d + ", states=" + this.f4607a + ')';
    }
}
