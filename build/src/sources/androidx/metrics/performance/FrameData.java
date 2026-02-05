package androidx.metrics.performance;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameData {

    /* renamed from: a  reason: collision with root package name */
    private final List f4719a;

    /* renamed from: b  reason: collision with root package name */
    private long f4720b;

    /* renamed from: c  reason: collision with root package name */
    private long f4721c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4722d;

    public FrameData(long j10, long j11, boolean z10, List states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f4719a = states;
        this.f4720b = j10;
        this.f4721c = j11;
        this.f4722d = z10;
    }

    public final long a() {
        return this.f4721c;
    }

    public final long b() {
        return this.f4720b;
    }

    public final List c() {
        return this.f4719a;
    }

    public final boolean d() {
        return this.f4722d;
    }

    public final void e(long j10, long j11, boolean z10) {
        this.f4720b = j10;
        this.f4721c = j11;
        this.f4722d = z10;
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
        if (this.f4720b == frameData.f4720b && this.f4721c == frameData.f4721c && this.f4722d == frameData.f4722d && Intrinsics.areEqual(this.f4719a, frameData.f4719a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Long.hashCode(this.f4720b) * 31) + Long.hashCode(this.f4721c)) * 31) + Boolean.hashCode(this.f4722d)) * 31) + this.f4719a.hashCode();
    }

    public String toString() {
        return "FrameData(frameStartNanos=" + this.f4720b + ", frameDurationUiNanos=" + this.f4721c + ", isJank=" + this.f4722d + ", states=" + this.f4719a + ')';
    }
}
