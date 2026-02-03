package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f31229a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f31230b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31231c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f31232d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f31233e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31234f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f31235g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f31236h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f31229a = obj;
            this.f31230b = fVar;
            this.f31231c = i10;
            if (size != null) {
                this.f31232d = size;
                if (rect != null) {
                    this.f31233e = rect;
                    this.f31234f = i11;
                    if (matrix != null) {
                        this.f31235g = matrix;
                        if (uVar != null) {
                            this.f31236h = uVar;
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
        return this.f31236h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f31233e;
    }

    @Override // j0.z
    public Object c() {
        return this.f31229a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f31230b;
    }

    @Override // j0.z
    public int e() {
        return this.f31231c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f31229a.equals(zVar.c()) && ((fVar = this.f31230b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f31231c == zVar.e() && this.f31232d.equals(zVar.h()) && this.f31233e.equals(zVar.b()) && this.f31234f == zVar.f() && this.f31235g.equals(zVar.g()) && this.f31236h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f31234f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f31235g;
    }

    @Override // j0.z
    public Size h() {
        return this.f31232d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f31229a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f31230b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f31231c) * 1000003) ^ this.f31232d.hashCode()) * 1000003) ^ this.f31233e.hashCode()) * 1000003) ^ this.f31234f) * 1000003) ^ this.f31235g.hashCode()) * 1000003) ^ this.f31236h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f31229a + ", exif=" + this.f31230b + ", format=" + this.f31231c + ", size=" + this.f31232d + ", cropRect=" + this.f31233e + ", rotationDegrees=" + this.f31234f + ", sensorToBufferTransform=" + this.f31235g + ", cameraCaptureResult=" + this.f31236h + "}";
    }
}
