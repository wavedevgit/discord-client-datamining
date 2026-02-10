package androidx.metrics.performance;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameData {

    /* renamed from: a  reason: collision with root package name */
    private final List f4755a;

    /* renamed from: b  reason: collision with root package name */
    private long f4756b;

    /* renamed from: c  reason: collision with root package name */
    private long f4757c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4758d;

    public FrameData(long j10, long j11, boolean z10, List states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f4755a = states;
        this.f4756b = j10;
        this.f4757c = j11;
        this.f4758d = z10;
    }

    public final long a() {
        return this.f4757c;
    }

    public final long b() {
        return this.f4756b;
    }

    public final List c() {
        return this.f4755a;
    }

    public final boolean d() {
        return this.f4758d;
    }

    public final void e(long j10, long j11, boolean z10) {
        this.f4756b = j10;
        this.f4757c = j11;
        this.f4758d = z10;
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
        if (this.f4756b == frameData.f4756b && this.f4757c == frameData.f4757c && this.f4758d == frameData.f4758d && Intrinsics.areEqual(this.f4755a, frameData.f4755a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Long.hashCode(this.f4756b) * 31) + Long.hashCode(this.f4757c)) * 31) + Boolean.hashCode(this.f4758d)) * 31) + this.f4755a.hashCode();
    }

    public String toString() {
        return "FrameData(frameStartNanos=" + this.f4756b + ", frameDurationUiNanos=" + this.f4757c + ", isJank=" + this.f4758d + ", states=" + this.f4755a + ')';
    }
}
