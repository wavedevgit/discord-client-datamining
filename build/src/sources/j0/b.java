package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f31222a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f31223b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31224c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f31225d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f31226e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31227f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f31228g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f31229h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f31222a = obj;
            this.f31223b = fVar;
            this.f31224c = i10;
            if (size != null) {
                this.f31225d = size;
                if (rect != null) {
                    this.f31226e = rect;
                    this.f31227f = i11;
                    if (matrix != null) {
                        this.f31228g = matrix;
                        if (uVar != null) {
                            this.f31229h = uVar;
                            return;
                        }
                        throw new NullPointerException("Null cameraCaptureResult");
                    }
                    throw new NullPointerException("Null sensorToBufferTransform");
                }
                throw new NullPointerException("Null cropRect");
            }
            throw new NullPointerException("Null size");
        }
        throw new NullPointerException("Null data");
    }

    @Override // j0.z
    public a0.u a() {
        return this.f31229h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f31226e;
    }

    @Override // j0.z
    public Object c() {
        return this.f31222a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f31223b;
    }

    @Override // j0.z
    public int e() {
        return this.f31224c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f31222a.equals(zVar.c()) && ((fVar = this.f31223b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f31224c == zVar.e() && this.f31225d.equals(zVar.h()) && this.f31226e.equals(zVar.b()) && this.f31227f == zVar.f() && this.f31228g.equals(zVar.g()) && this.f31229h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f31227f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f31228g;
    }

    @Override // j0.z
    public Size h() {
        return this.f31225d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f31222a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f31223b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f31224c) * 1000003) ^ this.f31225d.hashCode()) * 1000003) ^ this.f31226e.hashCode()) * 1000003) ^ this.f31227f) * 1000003) ^ this.f31228g.hashCode()) * 1000003) ^ this.f31229h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f31222a + ", exif=" + this.f31223b + ", format=" + this.f31224c + ", size=" + this.f31225d + ", cropRect=" + this.f31226e + ", rotationDegrees=" + this.f31227f + ", sensorToBufferTransform=" + this.f31228g + ", cameraCaptureResult=" + this.f31229h + "}";
    }
}
