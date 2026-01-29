package j0;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f31679a;

    /* renamed from: b  reason: collision with root package name */
    private final b0.f f31680b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31681c;

    /* renamed from: d  reason: collision with root package name */
    private final Size f31682d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f31683e;

    /* renamed from: f  reason: collision with root package name */
    private final int f31684f;

    /* renamed from: g  reason: collision with root package name */
    private final Matrix f31685g;

    /* renamed from: h  reason: collision with root package name */
    private final a0.u f31686h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Object obj, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        if (obj != null) {
            this.f31679a = obj;
            this.f31680b = fVar;
            this.f31681c = i10;
            if (size != null) {
                this.f31682d = size;
                if (rect != null) {
                    this.f31683e = rect;
                    this.f31684f = i11;
                    if (matrix != null) {
                        this.f31685g = matrix;
                        if (uVar != null) {
                            this.f31686h = uVar;
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
        return this.f31686h;
    }

    @Override // j0.z
    public Rect b() {
        return this.f31683e;
    }

    @Override // j0.z
    public Object c() {
        return this.f31679a;
    }

    @Override // j0.z
    public b0.f d() {
        return this.f31680b;
    }

    @Override // j0.z
    public int e() {
        return this.f31681c;
    }

    public boolean equals(Object obj) {
        b0.f fVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof z) {
            z zVar = (z) obj;
            if (this.f31679a.equals(zVar.c()) && ((fVar = this.f31680b) != null ? fVar.equals(zVar.d()) : zVar.d() == null) && this.f31681c == zVar.e() && this.f31682d.equals(zVar.h()) && this.f31683e.equals(zVar.b()) && this.f31684f == zVar.f() && this.f31685g.equals(zVar.g()) && this.f31686h.equals(zVar.a())) {
                return true;
            }
        }
        return false;
    }

    @Override // j0.z
    public int f() {
        return this.f31684f;
    }

    @Override // j0.z
    public Matrix g() {
        return this.f31685g;
    }

    @Override // j0.z
    public Size h() {
        return this.f31682d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f31679a.hashCode() ^ 1000003) * 1000003;
        b0.f fVar = this.f31680b;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        return ((((((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f31681c) * 1000003) ^ this.f31682d.hashCode()) * 1000003) ^ this.f31683e.hashCode()) * 1000003) ^ this.f31684f) * 1000003) ^ this.f31685g.hashCode()) * 1000003) ^ this.f31686h.hashCode();
    }

    public String toString() {
        return "Packet{data=" + this.f31679a + ", exif=" + this.f31680b + ", format=" + this.f31681c + ", size=" + this.f31682d + ", cropRect=" + this.f31683e + ", rotationDegrees=" + this.f31684f + ", sensorToBufferTransform=" + this.f31685g + ", cameraCaptureResult=" + this.f31686h + "}";
    }
}
