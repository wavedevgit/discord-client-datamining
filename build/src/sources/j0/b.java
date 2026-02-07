package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f29599a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f29600b;

    /* renamed from: c  reason: collision with root package name */
    private final int f29601c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f29602d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f29603e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29604f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f29605g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f29606h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f29599a = obj;
            this.f29600b = fVar;
            this.f29601c = i10;
            if (size != null) {
                this.f29602d = size;
                if (rect != null) {
                    this.f29603e = rect;
                    this.f29604f = i11;
                    if (matrix != null) {
                        this.f29605g = matrix;
                        if (uVar != null) {
                            this.f29606h = uVar;
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
        return this.f29606h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f29603e;
    }

    @Override // j0.z
    public Object c() {
        return this.f29599a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f29600b;
    }

    @Override // j0.z
    public int e() {
        return this.f29601c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f29599a.equals(zVar.c()) && ((fVar = this.f29600b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f29601c == zVar.e() && this.f29602d.equals(zVar.h()) && this.f29603e.equals(zVar.b()) && this.f29604f == zVar.f() && this.f29605g.equals(zVar.g()) && this.f29606h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f29604f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f29605g;
    }

    @Override // j0.z
    public Size h() {
        return this.f29602d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f29599a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f29600b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f29601c) * 1000003) ^ this.f29602d.hashCode()) * 1000003) ^ this.f29603e.hashCode()) * 1000003) ^ this.f29604f) * 1000003) ^ this.f29605g.hashCode()) * 1000003) ^ this.f29606h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f29599a + ", exif=" + this.f29600b + ", format=" + this.f29601c + ", size=" + this.f29602d + ", cropRect=" + this.f29603e + ", rotationDegrees=" + this.f29604f + ", sensorToBufferTransform=" + this.f29605g + ", cameraCaptureResult=" + this.f29606h + "}";
    }
}
