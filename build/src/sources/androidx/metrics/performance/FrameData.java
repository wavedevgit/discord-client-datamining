package androidx.metrics.performance;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FrameData {

    /* renamed from: a  reason: collision with root package name */
    private final List f4594a;

    /* renamed from: b  reason: collision with root package name */
    private long f4595b;

    /* renamed from: c  reason: collision with root package name */
    private long f4596c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4597d;

    public FrameData(long j10, long j11, boolean z10, List states) {
        Intrinsics.checkNotNullParameter(states, "states");
        this.f4594a = states;
        this.f4595b = j10;
        this.f4596c = j11;
        this.f4597d = z10;
    }

    public final long a() {
        return this.f4596c;
    }

    public final long b() {
        return this.f4595b;
    }

    public final List c() {
        return this.f4594a;
    }

    public final boolean d() {
        return this.f4597d;
    }

    public final void e(long j10, long j11, boolean z10) {
        this.f4595b = j10;
        this.f4596c = j11;
        this.f4597d = z10;
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
        if (this.f4595b == frameData.f4595b && this.f4596c == frameData.f4596c && this.f4597d == frameData.f4597d && Intrinsics.areEqual(this.f4594a, frameData.f4594a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Long.hashCode(this.f4595b) * 31) + Long.hashCode(this.f4596c)) * 31) + Boolean.hashCode(this.f4597d)) * 31) + this.f4594a.hashCode();
    }

    public String toString() {
        return "FrameData(frameStartNanos=" + this.f4595b + ", frameDurationUiNanos=" + this.f4596c + ", isJank=" + this.f4597d + ", states=" + this.f4594a + ')';
    }
}
