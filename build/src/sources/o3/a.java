package o3;

import androidx.metrics.performance.FrameData;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends FrameData {

    /* renamed from: e  reason: collision with root package name */
    private long f42376e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(long j10, long j11, long j12, boolean z10, List states) {
        super(j10, j11, z10, states);
        Intrinsics.checkNotNullParameter(states, "states");
        this.f42376e = j12;
    }

    @Override // androidx.metrics.performance.FrameData
    public boolean equals(Object obj) {
        if ((obj instanceof a) && super.equals(obj) && this.f42376e == ((a) obj).f42376e) {
            return true;
        }
        return false;
    }

    public final long f() {
        return this.f42376e;
    }

    public final void g(long j10, long j11, long j12, boolean z10) {
        super.e(j10, j11, z10);
        this.f42376e = j12;
    }

    @Override // androidx.metrics.performance.FrameData
    public int hashCode() {
        return (super.hashCode() * 31) + Long.hashCode(this.f42376e);
    }

    @Override // androidx.metrics.performance.FrameData
    public String toString() {
        return "FrameData(frameStartNanos=" + b() + ", frameDurationUiNanos=" + a() + ", frameDurationCpuNanos=" + this.f42376e + ", isJank=" + d() + ", states=" + c() + ')';
    }
}
