package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f29853a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f29854b;

    /* renamed from: c  reason: collision with root package name */
    private final int f29855c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f29856d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f29857e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29858f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f29859g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f29860h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f29853a = obj;
            this.f29854b = fVar;
            this.f29855c = i10;
            if (size != null) {
                this.f29856d = size;
                if (rect != null) {
                    this.f29857e = rect;
                    this.f29858f = i11;
                    if (matrix != null) {
                        this.f29859g = matrix;
                        if (uVar != null) {
                            this.f29860h = uVar;
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
        return this.f29860h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f29857e;
    }

    @Override // j0.z
    public Object c() {
        return this.f29853a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f29854b;
    }

    @Override // j0.z
    public int e() {
        return this.f29855c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f29853a.equals(zVar.c()) && ((fVar = this.f29854b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f29855c == zVar.e() && this.f29856d.equals(zVar.h()) && this.f29857e.equals(zVar.b()) && this.f29858f == zVar.f() && this.f29859g.equals(zVar.g()) && this.f29860h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f29858f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f29859g;
    }

    @Override // j0.z
    public Size h() {
        return this.f29856d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f29853a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f29854b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f29855c) * 1000003) ^ this.f29856d.hashCode()) * 1000003) ^ this.f29857e.hashCode()) * 1000003) ^ this.f29858f) * 1000003) ^ this.f29859g.hashCode()) * 1000003) ^ this.f29860h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f29853a + ", exif=" + this.f29854b + ", format=" + this.f29855c + ", size=" + this.f29856d + ", cropRect=" + this.f29857e + ", rotationDegrees=" + this.f29858f + ", sensorToBufferTransform=" + this.f29859g + ", cameraCaptureResult=" + this.f29860h + "}";
    }
}
