package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f30578a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f30579b;

    /* renamed from: c  reason: collision with root package name */
    private final int f30580c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f30581d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f30582e;

    /* renamed from: f  reason: collision with root package name */
    private final int f30583f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f30584g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f30585h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f30578a = obj;
            this.f30579b = fVar;
            this.f30580c = i10;
            if (size != null) {
                this.f30581d = size;
                if (rect != null) {
                    this.f30582e = rect;
                    this.f30583f = i11;
                    if (matrix != null) {
                        this.f30584g = matrix;
                        if (uVar != null) {
                            this.f30585h = uVar;
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
        return this.f30585h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f30582e;
    }

    @Override // j0.z
    public Object c() {
        return this.f30578a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f30579b;
    }

    @Override // j0.z
    public int e() {
        return this.f30580c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f30578a.equals(zVar.c()) && ((fVar = this.f30579b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f30580c == zVar.e() && this.f30581d.equals(zVar.h()) && this.f30582e.equals(zVar.b()) && this.f30583f == zVar.f() && this.f30584g.equals(zVar.g()) && this.f30585h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f30583f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f30584g;
    }

    @Override // j0.z
    public Size h() {
        return this.f30581d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f30578a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f30579b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f30580c) * 1000003) ^ this.f30581d.hashCode()) * 1000003) ^ this.f30582e.hashCode()) * 1000003) ^ this.f30583f) * 1000003) ^ this.f30584g.hashCode()) * 1000003) ^ this.f30585h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f30578a + ", exif=" + this.f30579b + ", format=" + this.f30580c + ", size=" + this.f30581d + ", cropRect=" + this.f30582e + ", rotationDegrees=" + this.f30583f + ", sensorToBufferTransform=" + this.f30584g + ", cameraCaptureResult=" + this.f30585h + "}";
    }
}
