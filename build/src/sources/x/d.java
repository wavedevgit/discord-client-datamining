package x;

import a0.q2;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d extends v0 {

    /* renamed from: a  reason: collision with root package name */
    private final q2 f54599a;

    /* renamed from: b  reason: collision with root package name */
    private final long f54600b;

    /* renamed from: c  reason: collision with root package name */
    private final int f54601c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f54602d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(q2 q2Var, long j10, int i10, Matrix matrix) {
        if (q2Var != null) {
            this.f54599a = q2Var;
            this.f54600b = j10;
            this.f54601c = i10;
            if (matrix != null) {
                this.f54602d = matrix;
                return;
            }
            throw new NullPointerException("Null sensorToBufferTransformMatrix");
        }
        throw new NullPointerException("Null tagBundle");
    }

    @Override // x.v0, x.p0
    public long a() {
        return this.f54600b;
    }

    @Override // x.v0, x.p0
    public q2 c() {
        return this.f54599a;
    }

    @Override // x.v0, x.p0
    public int d() {
        return this.f54601c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof v0) {
            v0 v0Var = (v0) obj;
            if (this.f54599a.equals(v0Var.c()) && this.f54600b == v0Var.a() && this.f54601c == v0Var.d() && this.f54602d.equals(v0Var.f())) {
                return true;
            }
        }
        return false;
    }

    @Override // x.v0
    public Matrix f() {
        return this.f54602d;
    }

    public int hashCode() {
        long j10 = this.f54600b;
        return ((((((this.f54599a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f54601c) * 1000003) ^ this.f54602d.hashCode();
    }

    public String toString() {
        return "ImmutableImageInfo{tagBundle=" + this.f54599a + ", timestamp=" + this.f54600b + ", rotationDegrees=" + this.f54601c + ", sensorToBufferTransformMatrix=" + this.f54602d + "}";
    }
}
