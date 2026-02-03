package x;

import a0.q2;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d extends v0 {

    /* renamed from: a  reason: collision with root package name */
    private final q2 f52798a;

    /* renamed from: b  reason: collision with root package name */
    private final long f52799b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52800c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f52801d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(q2 q2Var, long j10, int i10, Matrix matrix) {
        if (q2Var != null) {
            this.f52798a = q2Var;
            this.f52799b = j10;
            this.f52800c = i10;
            if (matrix != null) {
                this.f52801d = matrix;
                return;
            }
            throw new NullPointerException("Null sensorToBufferTransformMatrix");
        }
        throw new NullPointerException("Null tagBundle");
    }

    @Override // x.v0, x.p0
    public long a() {
        return this.f52799b;
    }

    @Override // x.v0, x.p0
    public q2 c() {
        return this.f52798a;
    }

    @Override // x.v0, x.p0
    public int d() {
        return this.f52800c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof v0) {
            v0 v0Var = (v0) obj;
            if (this.f52798a.equals(v0Var.c()) && this.f52799b == v0Var.a() && this.f52800c == v0Var.d() && this.f52801d.equals(v0Var.f())) {
                return true;
            }
        }
        return false;
    }

    @Override // x.v0
    public Matrix f() {
        return this.f52801d;
    }

    public int hashCode() {
        long j10 = this.f52799b;
        return ((((((this.f52798a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f52800c) * 1000003) ^ this.f52801d.hashCode();
    }

    public String toString() {
        return "ImmutableImageInfo{tagBundle=" + this.f52798a + ", timestamp=" + this.f52799b + ", rotationDegrees=" + this.f52800c + ", sensorToBufferTransformMatrix=" + this.f52801d + "}";
    }
}
