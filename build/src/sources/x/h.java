package x;

import android.graphics.Matrix;
import android.graphics.Rect;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends w1.h {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f54191a;

    /* renamed from: b  reason: collision with root package name */
    private final int f54192b;

    /* renamed from: c  reason: collision with root package name */
    private final int f54193c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f54194d;

    /* renamed from: e  reason: collision with root package name */
    private final Matrix f54195e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f54196f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Rect rect, int i10, int i11, boolean z10, Matrix matrix, boolean z11) {
        if (rect != null) {
            this.f54191a = rect;
            this.f54192b = i10;
            this.f54193c = i11;
            this.f54194d = z10;
            if (matrix != null) {
                this.f54195e = matrix;
                this.f54196f = z11;
                return;
            }
            throw new NullPointerException("Null getSensorToBufferTransform");
        }
        throw new NullPointerException("Null getCropRect");
    }

    @Override // x.w1.h
    public Rect a() {
        return this.f54191a;
    }

    @Override // x.w1.h
    public int b() {
        return this.f54192b;
    }

    @Override // x.w1.h
    public Matrix c() {
        return this.f54195e;
    }

    @Override // x.w1.h
    public int d() {
        return this.f54193c;
    }

    @Override // x.w1.h
    public boolean e() {
        return this.f54194d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w1.h) {
            w1.h hVar = (w1.h) obj;
            if (this.f54191a.equals(hVar.a()) && this.f54192b == hVar.b() && this.f54193c == hVar.d() && this.f54194d == hVar.e() && this.f54195e.equals(hVar.c()) && this.f54196f == hVar.f()) {
                return true;
            }
        }
        return false;
    }

    @Override // x.w1.h
    public boolean f() {
        return this.f54196f;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((this.f54191a.hashCode() ^ 1000003) * 1000003) ^ this.f54192b) * 1000003) ^ this.f54193c) * 1000003;
        int i11 = 1237;
        if (this.f54194d) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int hashCode2 = (((hashCode ^ i10) * 1000003) ^ this.f54195e.hashCode()) * 1000003;
        if (this.f54196f) {
            i11 = 1231;
        }
        return hashCode2 ^ i11;
    }

    public String toString() {
        return "TransformationInfo{getCropRect=" + this.f54191a + ", getRotationDegrees=" + this.f54192b + ", getTargetRotation=" + this.f54193c + ", hasCameraTransform=" + this.f54194d + ", getSensorToBufferTransform=" + this.f54195e + ", isMirroring=" + this.f54196f + "}";
    }
}
