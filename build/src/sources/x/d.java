package x;

import a0.q2;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d extends v0 {

    /* renamed from: a  reason: collision with root package name */
    private final q2 f52795a;

    /* renamed from: b  reason: collision with root package name */
    private final long f52796b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52797c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f52798d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(q2 q2Var, long j10, int i10, Matrix matrix) {
        if (q2Var != null) {
            this.f52795a = q2Var;
            this.f52796b = j10;
            this.f52797c = i10;
            if (matrix != null) {
                this.f52798d = matrix;
                return;
            }
            throw new NullPointerException("Null sensorToBufferTransformMatrix");
        }
        throw new NullPointerException("Null tagBundle");
    }

    @Override // x.v0, x.p0
    public long a() {
        return this.f52796b;
    }

    @Override // x.v0, x.p0
    public q2 c() {
        return this.f52795a;
    }

    @Override // x.v0, x.p0
    public int d() {
        return this.f52797c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof v0) {
            v0 v0Var = (v0) obj;
            if (this.f52795a.equals(v0Var.c()) && this.f52796b == v0Var.a() && this.f52797c == v0Var.d() && this.f52798d.equals(v0Var.f())) {
                return true;
            }
        }
        return false;
    }

    @Override // x.v0
    public Matrix f() {
        return this.f52798d;
    }

    public int hashCode() {
        long j10 = this.f52796b;
        return ((((((this.f52795a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f52797c) * 1000003) ^ this.f52798d.hashCode();
    }

    public String toString() {
        return "ImmutableImageInfo{tagBundle=" + this.f52795a + ", timestamp=" + this.f52796b + ", rotationDegrees=" + this.f52797c + ", sensorToBufferTransformMatrix=" + this.f52798d + "}";
    }
}
