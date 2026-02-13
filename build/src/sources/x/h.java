package x;

import android.graphics.Matrix;
import android.graphics.Rect;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends w1.h {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f54632a;

    /* renamed from: b  reason: collision with root package name */
    private final int f54633b;

    /* renamed from: c  reason: collision with root package name */
    private final int f54634c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f54635d;

    /* renamed from: e  reason: collision with root package name */
    private final Matrix f54636e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f54637f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Rect rect, int i10, int i11, boolean z10, Matrix matrix, boolean z11) {
        if (rect != null) {
            this.f54632a = rect;
            this.f54633b = i10;
            this.f54634c = i11;
            this.f54635d = z10;
            if (matrix != null) {
                this.f54636e = matrix;
                this.f54637f = z11;
                return;
            }
            throw new NullPointerException("Null getSensorToBufferTransform");
        }
        throw new NullPointerException("Null getCropRect");
    }

    @Override // x.w1.h
    public Rect a() {
        return this.f54632a;
    }

    @Override // x.w1.h
    public int b() {
        return this.f54633b;
    }

    @Override // x.w1.h
    public Matrix c() {
        return this.f54636e;
    }

    @Override // x.w1.h
    public int d() {
        return this.f54634c;
    }

    @Override // x.w1.h
    public boolean e() {
        return this.f54635d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w1.h) {
            w1.h hVar = (w1.h) obj;
            if (this.f54632a.equals(hVar.a()) && this.f54633b == hVar.b() && this.f54634c == hVar.d() && this.f54635d == hVar.e() && this.f54636e.equals(hVar.c()) && this.f54637f == hVar.f()) {
                return true;
            }
        }
        return false;
    }

    @Override // x.w1.h
    public boolean f() {
        return this.f54637f;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((this.f54632a.hashCode() ^ 1000003) * 1000003) ^ this.f54633b) * 1000003) ^ this.f54634c) * 1000003;
        int i11 = 1237;
        if (this.f54635d) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int hashCode2 = (((hashCode ^ i10) * 1000003) ^ this.f54636e.hashCode()) * 1000003;
        if (this.f54637f) {
            i11 = 1231;
        }
        return hashCode2 ^ i11;
    }

    public String toString() {
        return "TransformationInfo{getCropRect=" + this.f54632a + ", getRotationDegrees=" + this.f54633b + ", getTargetRotation=" + this.f54634c + ", hasCameraTransform=" + this.f54635d + ", getSensorToBufferTransform=" + this.f54636e + ", isMirroring=" + this.f54637f + "}";
    }
}
