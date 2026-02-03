package x;

import a0.q2;
import android.graphics.Matrix;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d extends v0 {

    /* renamed from: a  reason: collision with root package name */
    private final q2 f53077a;

    /* renamed from: b  reason: collision with root package name */
    private final long f53078b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53079c;

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f53080d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(q2 q2Var, long j10, int i10, Matrix matrix) {
        if (q2Var != null) {
            this.f53077a = q2Var;
            this.f53078b = j10;
            this.f53079c = i10;
            if (matrix != null) {
                this.f53080d = matrix;
                return;
            }
            throw new NullPointerException("Null sensorToBufferTransformMatrix");
        }
        throw new NullPointerException("Null tagBundle");
    }

    @Override // x.v0, x.p0
    public long a() {
        return this.f53078b;
    }

    @Override // x.v0, x.p0
    public q2 c() {
        return this.f53077a;
    }

    @Override // x.v0, x.p0
    public int d() {
        return this.f53079c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof v0) {
            v0 v0Var = (v0) obj;
            if (this.f53077a.equals(v0Var.c()) && this.f53078b == v0Var.a() && this.f53079c == v0Var.d() && this.f53080d.equals(v0Var.f())) {
                return true;
            }
        }
        return false;
    }

    @Override // x.v0
    public Matrix f() {
        return this.f53080d;
    }

    public int hashCode() {
        long j10 = this.f53078b;
        return ((((((this.f53077a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f53079c) * 1000003) ^ this.f53080d.hashCode();
    }

    public String toString() {
        return "ImmutableImageInfo{tagBundle=" + this.f53077a + ", timestamp=" + this.f53078b + ", rotationDegrees=" + this.f53079c + ", sensorToBufferTransformMatrix=" + this.f53080d + "}";
    }
}
