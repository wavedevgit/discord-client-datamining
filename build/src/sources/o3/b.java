package o3;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends a {

    /* renamed from: f  reason: collision with root package name */
    private long f42227f;

    /* renamed from: g  reason: collision with root package name */
    private long f42228g;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(long j10, long j11, long j12, long j13, long j14, boolean z10, List states) {
        super(j10, j11, j12, z10, states);
        Intrinsics.checkNotNullParameter(states, "states");
        this.f42227f = j13;
        this.f42228g = j14;
    }

    @Override // o3.a, androidx.metrics.performance.FrameData
    public boolean equals(Object obj) {
        if ((obj instanceof b) && super.equals(obj)) {
            b bVar = (b) obj;
            if (this.f42227f == bVar.f42227f && this.f42228g == bVar.f42228g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final void h(long j10, long j11, long j12, long j13, long j14, boolean z10) {
        super.g(j10, j11, j12, z10);
        this.f42227f = j13;
        this.f42228g = j14;
    }

    @Override // o3.a, androidx.metrics.performance.FrameData
    public int hashCode() {
        return (super.hashCode() * 31) + (Long.hashCode(this.f42227f) * 31) + Long.hashCode(this.f42228g);
    }

    @Override // o3.a, androidx.metrics.performance.FrameData
    public String toString() {
        return "FrameData(frameStartNanos=" + b() + ", frameDurationUiNanos=" + a() + ", frameDurationCpuNanos=" + f() + ", frameDurationTotalNanos=" + this.f42227f + ", frameOverrunNanos=" + this.f42228g + ", isJank=" + d() + ", states=" + c() + ')';
    }
}
