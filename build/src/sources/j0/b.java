package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f31695a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f31696b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31697c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f31698d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f31699e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31700f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f31701g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f31702h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f31695a = obj;
            this.f31696b = fVar;
            this.f31697c = i10;
            if (size != null) {
                this.f31698d = size;
                if (rect != null) {
                    this.f31699e = rect;
                    this.f31700f = i11;
                    if (matrix != null) {
                        this.f31701g = matrix;
                        if (uVar != null) {
                            this.f31702h = uVar;
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
        return this.f31702h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f31699e;
    }

    @Override // j0.z
    public Object c() {
        return this.f31695a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f31696b;
    }

    @Override // j0.z
    public int e() {
        return this.f31697c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f31695a.equals(zVar.c()) && ((fVar = this.f31696b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f31697c == zVar.e() && this.f31698d.equals(zVar.h()) && this.f31699e.equals(zVar.b()) && this.f31700f == zVar.f() && this.f31701g.equals(zVar.g()) && this.f31702h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f31700f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f31701g;
    }

    @Override // j0.z
    public Size h() {
        return this.f31698d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f31695a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f31696b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f31697c) * 1000003) ^ this.f31698d.hashCode()) * 1000003) ^ this.f31699e.hashCode()) * 1000003) ^ this.f31700f) * 1000003) ^ this.f31701g.hashCode()) * 1000003) ^ this.f31702h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f31695a + ", exif=" + this.f31696b + ", format=" + this.f31697c + ", size=" + this.f31698d + ", cropRect=" + this.f31699e + ", rotationDegrees=" + this.f31700f + ", sensorToBufferTransform=" + this.f31701g + ", cameraCaptureResult=" + this.f31702h + "}";
    }
}
