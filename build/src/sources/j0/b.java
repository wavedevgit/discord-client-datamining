package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f30654a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f30655b;

    /* renamed from: c  reason: collision with root package name */
    private final int f30656c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f30657d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f30658e;

    /* renamed from: f  reason: collision with root package name */
    private final int f30659f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f30660g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f30661h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f30654a = obj;
            this.f30655b = fVar;
            this.f30656c = i10;
            if (size != null) {
                this.f30657d = size;
                if (rect != null) {
                    this.f30658e = rect;
                    this.f30659f = i11;
                    if (matrix != null) {
                        this.f30660g = matrix;
                        if (uVar != null) {
                            this.f30661h = uVar;
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
        return this.f30661h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f30658e;
    }

    @Override // j0.z
    public Object c() {
        return this.f30654a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f30655b;
    }

    @Override // j0.z
    public int e() {
        return this.f30656c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f30654a.equals(zVar.c()) && ((fVar = this.f30655b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f30656c == zVar.e() && this.f30657d.equals(zVar.h()) && this.f30658e.equals(zVar.b()) && this.f30659f == zVar.f() && this.f30660g.equals(zVar.g()) && this.f30661h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f30659f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f30660g;
    }

    @Override // j0.z
    public Size h() {
        return this.f30657d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f30654a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f30655b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f30656c) * 1000003) ^ this.f30657d.hashCode()) * 1000003) ^ this.f30658e.hashCode()) * 1000003) ^ this.f30659f) * 1000003) ^ this.f30660g.hashCode()) * 1000003) ^ this.f30661h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f30654a + ", exif=" + this.f30655b + ", format=" + this.f30656c + ", size=" + this.f30657d + ", cropRect=" + this.f30658e + ", rotationDegrees=" + this.f30659f + ", sensorToBufferTransform=" + this.f30660g + ", cameraCaptureResult=" + this.f30661h + "}";
    }
}
