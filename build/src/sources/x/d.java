package x;

import a0.q2;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d extends v0 {

    /* renamed from: a  reason: collision with root package name */
    private final q2 f54206a;

    /* renamed from: b  reason: collision with root package name */
    private final long f54207b;

    /* renamed from: c  reason: collision with root package name */
    private final int f54208c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f54209d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(q2 q2Var, long j10, int i10, Matrix matrix) {
        if (q2Var != null) {
            this.f54206a = q2Var;
            this.f54207b = j10;
            this.f54208c = i10;
            if (matrix != null) {
                this.f54209d = matrix;
                return;
            }
            throw new NullPointerException("Null sensorToBufferTransformMatrix");
        }
        throw new NullPointerException("Null tagBundle");
    }

    @Override // x.v0, x.p0
    public long a() {
        return this.f54207b;
    }

    @Override // x.v0, x.p0
    public q2 c() {
        return this.f54206a;
    }

    @Override // x.v0, x.p0
    public int d() {
        return this.f54208c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof v0) {
            v0 v0Var = (v0) obj;
            if (this.f54206a.equals(v0Var.c()) && this.f54207b == v0Var.a() && this.f54208c == v0Var.d() && this.f54209d.equals(v0Var.f())) {
                return true;
            }
        }
        return false;
    }

    @Override // x.v0
    public Matrix f() {
        return this.f54209d;
    }

    public int hashCode() {
        long j10 = this.f54207b;
        return ((((((this.f54206a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f54208c) * 1000003) ^ this.f54209d.hashCode();
    }

    public String toString() {
        return "ImmutableImageInfo{tagBundle=" + this.f54206a + ", timestamp=" + this.f54207b + ", rotationDegrees=" + this.f54208c + ", sensorToBufferTransformMatrix=" + this.f54209d + "}";
    }
}
