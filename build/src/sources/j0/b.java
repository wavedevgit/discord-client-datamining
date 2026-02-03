package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f31433a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f31434b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31435c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f31436d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f31437e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31438f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f31439g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f31440h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f31433a = obj;
            this.f31434b = fVar;
            this.f31435c = i10;
            if (size != null) {
                this.f31436d = size;
                if (rect != null) {
                    this.f31437e = rect;
                    this.f31438f = i11;
                    if (matrix != null) {
                        this.f31439g = matrix;
                        if (uVar != null) {
                            this.f31440h = uVar;
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
        return this.f31440h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f31437e;
    }

    @Override // j0.z
    public Object c() {
        return this.f31433a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f31434b;
    }

    @Override // j0.z
    public int e() {
        return this.f31435c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f31433a.equals(zVar.c()) && ((fVar = this.f31434b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f31435c == zVar.e() && this.f31436d.equals(zVar.h()) && this.f31437e.equals(zVar.b()) && this.f31438f == zVar.f() && this.f31439g.equals(zVar.g()) && this.f31440h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f31438f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f31439g;
    }

    @Override // j0.z
    public Size h() {
        return this.f31436d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f31433a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f31434b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f31435c) * 1000003) ^ this.f31436d.hashCode()) * 1000003) ^ this.f31437e.hashCode()) * 1000003) ^ this.f31438f) * 1000003) ^ this.f31439g.hashCode()) * 1000003) ^ this.f31440h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f31433a + ", exif=" + this.f31434b + ", format=" + this.f31435c + ", size=" + this.f31436d + ", cropRect=" + this.f31437e + ", rotationDegrees=" + this.f31438f + ", sensorToBufferTransform=" + this.f31439g + ", cameraCaptureResult=" + this.f31440h + "}";
    }
}
