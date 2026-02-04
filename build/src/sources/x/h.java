package x;

import android.graphics.Matrix;
import android.graphics.Rect;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends w1.h {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f52828a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52829b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52830c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52831d;

    /* renamed from: e  reason: collision with root package name */
    private final Matrix f52832e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f52833f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Rect rect, int i10, int i11, boolean z10, Matrix matrix, boolean z11) {
        if (rect != null) {
            this.f52828a = rect;
            this.f52829b = i10;
            this.f52830c = i11;
            this.f52831d = z10;
            if (matrix != null) {
                this.f52832e = matrix;
                this.f52833f = z11;
                return;
            }
            throw new NullPointerException("Null getSensorToBufferTransform");
        }
        throw new NullPointerException("Null getCropRect");
    }

    @Override // x.w1.h
    public Rect a() {
        return this.f52828a;
    }

    @Override // x.w1.h
    public int b() {
        return this.f52829b;
    }

    @Override // x.w1.h
    public Matrix c() {
        return this.f52832e;
    }

    @Override // x.w1.h
    public int d() {
        return this.f52830c;
    }

    @Override // x.w1.h
    public boolean e() {
        return this.f52831d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w1.h) {
            w1.h hVar = (w1.h) obj;
            if (this.f52828a.equals(hVar.a()) && this.f52829b == hVar.b() && this.f52830c == hVar.d() && this.f52831d == hVar.e() && this.f52832e.equals(hVar.c()) && this.f52833f == hVar.f()) {
                return true;
            }
        }
        return false;
    }

    @Override // x.w1.h
    public boolean f() {
        return this.f52833f;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((this.f52828a.hashCode() ^ 1000003) * 1000003) ^ this.f52829b) * 1000003) ^ this.f52830c) * 1000003;
        int i11 = 1237;
        if (this.f52831d) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int hashCode2 = (((hashCode ^ i10) * 1000003) ^ this.f52832e.hashCode()) * 1000003;
        if (this.f52833f) {
            i11 = 1231;
        }
        return hashCode2 ^ i11;
    }

    public String toString() {
        return "TransformationInfo{getCropRect=" + this.f52828a + ", getRotationDegrees=" + this.f52829b + ", getTargetRotation=" + this.f52830c + ", hasCameraTransform=" + this.f52831d + ", getSensorToBufferTransform=" + this.f52832e + ", isMirroring=" + this.f52833f + "}";
    }
}
