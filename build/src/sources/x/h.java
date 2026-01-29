package x;

import android.graphics.Matrix;
import android.graphics.Rect;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends w1.h {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f52886a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52887b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52888c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52889d;

    /* renamed from: e  reason: collision with root package name */
    private final Matrix f52890e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f52891f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Rect rect, int i10, int i11, boolean z10, Matrix matrix, boolean z11) {
        if (rect != null) {
            this.f52886a = rect;
            this.f52887b = i10;
            this.f52888c = i11;
            this.f52889d = z10;
            if (matrix != null) {
                this.f52890e = matrix;
                this.f52891f = z11;
                return;
            }
            throw new NullPointerException("Null getSensorToBufferTransform");
        }
        throw new NullPointerException("Null getCropRect");
    }

    @Override // x.w1.h
    public Rect a() {
        return this.f52886a;
    }

    @Override // x.w1.h
    public int b() {
        return this.f52887b;
    }

    @Override // x.w1.h
    public Matrix c() {
        return this.f52890e;
    }

    @Override // x.w1.h
    public int d() {
        return this.f52888c;
    }

    @Override // x.w1.h
    public boolean e() {
        return this.f52889d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w1.h) {
            w1.h hVar = (w1.h) obj;
            if (this.f52886a.equals(hVar.a()) && this.f52887b == hVar.b() && this.f52888c == hVar.d() && this.f52889d == hVar.e() && this.f52890e.equals(hVar.c()) && this.f52891f == hVar.f()) {
                return true;
            }
        }
        return false;
    }

    @Override // x.w1.h
    public boolean f() {
        return this.f52891f;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((this.f52886a.hashCode() ^ 1000003) * 1000003) ^ this.f52887b) * 1000003) ^ this.f52888c) * 1000003;
        int i11 = 1237;
        if (this.f52889d) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int hashCode2 = (((hashCode ^ i10) * 1000003) ^ this.f52890e.hashCode()) * 1000003;
        if (this.f52891f) {
            i11 = 1231;
        }
        return hashCode2 ^ i11;
    }

    public String toString() {
        return "TransformationInfo{getCropRect=" + this.f52886a + ", getRotationDegrees=" + this.f52887b + ", getTargetRotation=" + this.f52888c + ", hasCameraTransform=" + this.f52889d + ", getSensorToBufferTransform=" + this.f52890e + ", isMirroring=" + this.f52891f + "}";
    }
}
