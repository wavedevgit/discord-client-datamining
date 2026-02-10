package x;

import a0.q2;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d extends v0 {

    /* renamed from: a  reason: collision with root package name */
    private final q2 f54030a;

    /* renamed from: b  reason: collision with root package name */
    private final long f54031b;

    /* renamed from: c  reason: collision with root package name */
    private final int f54032c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f54033d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(q2 q2Var, long j10, int i10, Matrix matrix) {
        if (q2Var != null) {
            this.f54030a = q2Var;
            this.f54031b = j10;
            this.f54032c = i10;
            if (matrix != null) {
                this.f54033d = matrix;
                return;
            }
            throw new NullPointerException("Null sensorToBufferTransformMatrix");
        }
        throw new NullPointerException("Null tagBundle");
    }

    @Override // x.v0, x.p0
    public long a() {
        return this.f54031b;
    }

    @Override // x.v0, x.p0
    public q2 c() {
        return this.f54030a;
    }

    @Override // x.v0, x.p0
    public int d() {
        return this.f54032c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof v0) {
            v0 v0Var = (v0) obj;
            if (this.f54030a.equals(v0Var.c()) && this.f54031b == v0Var.a() && this.f54032c == v0Var.d() && this.f54033d.equals(v0Var.f())) {
                return true;
            }
        }
        return false;
    }

    @Override // x.v0
    public Matrix f() {
        return this.f54033d;
    }

    public int hashCode() {
        long j10 = this.f54031b;
        return ((((((this.f54030a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f54032c) * 1000003) ^ this.f54033d.hashCode();
    }

    public String toString() {
        return "ImmutableImageInfo{tagBundle=" + this.f54030a + ", timestamp=" + this.f54031b + ", rotationDegrees=" + this.f54032c + ", sensorToBufferTransformMatrix=" + this.f54033d + "}";
    }
}
