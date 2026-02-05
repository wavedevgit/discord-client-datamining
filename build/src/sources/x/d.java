package x;

import a0.q2;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d extends v0 {

    /* renamed from: a  reason: collision with root package name */
    private final q2 f53339a;

    /* renamed from: b  reason: collision with root package name */
    private final long f53340b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53341c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f53342d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(q2 q2Var, long j10, int i10, Matrix matrix) {
        if (q2Var != null) {
            this.f53339a = q2Var;
            this.f53340b = j10;
            this.f53341c = i10;
            if (matrix != null) {
                this.f53342d = matrix;
                return;
            }
            throw new NullPointerException("Null sensorToBufferTransformMatrix");
        }
        throw new NullPointerException("Null tagBundle");
    }

    @Override // x.v0, x.p0
    public long a() {
        return this.f53340b;
    }

    @Override // x.v0, x.p0
    public q2 c() {
        return this.f53339a;
    }

    @Override // x.v0, x.p0
    public int d() {
        return this.f53341c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof v0) {
            v0 v0Var = (v0) obj;
            if (this.f53339a.equals(v0Var.c()) && this.f53340b == v0Var.a() && this.f53341c == v0Var.d() && this.f53342d.equals(v0Var.f())) {
                return true;
            }
        }
        return false;
    }

    @Override // x.v0
    public Matrix f() {
        return this.f53342d;
    }

    public int hashCode() {
        long j10 = this.f53340b;
        return ((((((this.f53339a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f53341c) * 1000003) ^ this.f53342d.hashCode();
    }

    public String toString() {
        return "ImmutableImageInfo{tagBundle=" + this.f53339a + ", timestamp=" + this.f53340b + ", rotationDegrees=" + this.f53341c + ", sensorToBufferTransformMatrix=" + this.f53342d + "}";
    }
}
