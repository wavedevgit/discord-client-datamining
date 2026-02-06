package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f29551a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f29552b;

    /* renamed from: c  reason: collision with root package name */
    private final int f29553c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f29554d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f29555e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29556f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f29557g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f29558h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f29551a = obj;
            this.f29552b = fVar;
            this.f29553c = i10;
            if (size != null) {
                this.f29554d = size;
                if (rect != null) {
                    this.f29555e = rect;
                    this.f29556f = i11;
                    if (matrix != null) {
                        this.f29557g = matrix;
                        if (uVar != null) {
                            this.f29558h = uVar;
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
        return this.f29558h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f29555e;
    }

    @Override // j0.z
    public Object c() {
        return this.f29551a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f29552b;
    }

    @Override // j0.z
    public int e() {
        return this.f29553c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f29551a.equals(zVar.c()) && ((fVar = this.f29552b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f29553c == zVar.e() && this.f29554d.equals(zVar.h()) && this.f29555e.equals(zVar.b()) && this.f29556f == zVar.f() && this.f29557g.equals(zVar.g()) && this.f29558h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f29556f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f29557g;
    }

    @Override // j0.z
    public Size h() {
        return this.f29554d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f29551a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f29552b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f29553c) * 1000003) ^ this.f29554d.hashCode()) * 1000003) ^ this.f29555e.hashCode()) * 1000003) ^ this.f29556f) * 1000003) ^ this.f29557g.hashCode()) * 1000003) ^ this.f29558h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f29551a + ", exif=" + this.f29552b + ", format=" + this.f29553c + ", size=" + this.f29554d + ", cropRect=" + this.f29555e + ", rotationDegrees=" + this.f29556f + ", sensorToBufferTransform=" + this.f29557g + ", cameraCaptureResult=" + this.f29558h + "}";
    }
}
