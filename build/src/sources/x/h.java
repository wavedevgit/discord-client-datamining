package x;

import android.graphics.Matrix;
import android.graphics.Rect;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends w1.h {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f53372a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53373b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53374c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f53375d;

    /* renamed from: e  reason: collision with root package name */
    private final Matrix f53376e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f53377f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Rect rect, int i10, int i11, boolean z10, Matrix matrix, boolean z11) {
        if (rect != null) {
            this.f53372a = rect;
            this.f53373b = i10;
            this.f53374c = i11;
            this.f53375d = z10;
            if (matrix != null) {
                this.f53376e = matrix;
                this.f53377f = z11;
                return;
            }
            throw new NullPointerException("Null getSensorToBufferTransform");
        }
        throw new NullPointerException("Null getCropRect");
    }

    @Override // x.w1.h
    public Rect a() {
        return this.f53372a;
    }

    @Override // x.w1.h
    public int b() {
        return this.f53373b;
    }

    @Override // x.w1.h
    public Matrix c() {
        return this.f53376e;
    }

    @Override // x.w1.h
    public int d() {
        return this.f53374c;
    }

    @Override // x.w1.h
    public boolean e() {
        return this.f53375d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w1.h) {
            w1.h hVar = (w1.h) obj;
            if (this.f53372a.equals(hVar.a()) && this.f53373b == hVar.b() && this.f53374c == hVar.d() && this.f53375d == hVar.e() && this.f53376e.equals(hVar.c()) && this.f53377f == hVar.f()) {
                return true;
            }
        }
        return false;
    }

    @Override // x.w1.h
    public boolean f() {
        return this.f53377f;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((this.f53372a.hashCode() ^ 1000003) * 1000003) ^ this.f53373b) * 1000003) ^ this.f53374c) * 1000003;
        int i11 = 1237;
        if (this.f53375d) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int hashCode2 = (((hashCode ^ i10) * 1000003) ^ this.f53376e.hashCode()) * 1000003;
        if (this.f53377f) {
            i11 = 1231;
        }
        return hashCode2 ^ i11;
    }

    public String toString() {
        return "TransformationInfo{getCropRect=" + this.f53372a + ", getRotationDegrees=" + this.f53373b + ", getTargetRotation=" + this.f53374c + ", hasCameraTransform=" + this.f53375d + ", getSensorToBufferTransform=" + this.f53376e + ", isMirroring=" + this.f53377f + "}";
    }
}
