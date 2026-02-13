package z;

import android.graphics.Matrix;
import android.graphics.Rect;
import java.util.List;
import java.util.concurrent.Executor;
import x.n0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends e1 {

    /* renamed from: b  reason: collision with root package name */
    private final Executor f56452b;

    /* renamed from: c  reason: collision with root package name */
    private final n0.f f56453c;

    /* renamed from: d  reason: collision with root package name */
    private final n0.g f56454d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f56455e;

    /* renamed from: f  reason: collision with root package name */
    private final Matrix f56456f;

    /* renamed from: g  reason: collision with root package name */
    private final int f56457g;

    /* renamed from: h  reason: collision with root package name */
    private final int f56458h;

    /* renamed from: i  reason: collision with root package name */
    private final int f56459i;

    /* renamed from: j  reason: collision with root package name */
    private final List f56460j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Executor executor, n0.e eVar, n0.f fVar, n0.g gVar, Rect rect, Matrix matrix, int i10, int i11, int i12, List list) {
        if (executor != null) {
            this.f56452b = executor;
            this.f56453c = fVar;
            this.f56454d = gVar;
            if (rect != null) {
                this.f56455e = rect;
                if (matrix != null) {
                    this.f56456f = matrix;
                    this.f56457g = i10;
                    this.f56458h = i11;
                    this.f56459i = i12;
                    if (list != null) {
                        this.f56460j = list;
                        return;
                    }
                    throw new NullPointerException("Null sessionConfigCameraCaptureCallbacks");
                }
                throw new NullPointerException("Null sensorToBufferTransform");
            }
            throw new NullPointerException("Null cropRect");
        }
        throw new NullPointerException("Null appExecutor");
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e1) {
            e1 e1Var = (e1) obj;
            if (this.f56452b.equals(e1Var.g())) {
                e1Var.j();
                n0.f fVar = this.f56453c;
                if (fVar != null ? fVar.equals(e1Var.l()) : e1Var.l() == null) {
                    n0.g gVar = this.f56454d;
                    if (gVar != null ? gVar.equals(e1Var.m()) : e1Var.m() == null) {
                        if (this.f56455e.equals(e1Var.i()) && this.f56456f.equals(e1Var.o()) && this.f56457g == e1Var.n() && this.f56458h == e1Var.k() && this.f56459i == e1Var.h() && this.f56460j.equals(e1Var.p())) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Executor g() {
        return this.f56452b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int h() {
        return this.f56459i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f56452b.hashCode() ^ 1000003) * (-721379959);
        n0.f fVar = this.f56453c;
        int i10 = 0;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        int i11 = (hashCode2 ^ hashCode) * 1000003;
        n0.g gVar = this.f56454d;
        if (gVar != null) {
            i10 = gVar.hashCode();
        }
        return ((((((((((((i11 ^ i10) * 1000003) ^ this.f56455e.hashCode()) * 1000003) ^ this.f56456f.hashCode()) * 1000003) ^ this.f56457g) * 1000003) ^ this.f56458h) * 1000003) ^ this.f56459i) * 1000003) ^ this.f56460j.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Rect i() {
        return this.f56455e;
    }

    @Override // z.e1
    public n0.e j() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int k() {
        return this.f56458h;
    }

    @Override // z.e1
    public n0.f l() {
        return this.f56453c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public n0.g m() {
        return this.f56454d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int n() {
        return this.f56457g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Matrix o() {
        return this.f56456f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public List p() {
        return this.f56460j;
    }

    public String toString() {
        return "TakePictureRequest{appExecutor=" + this.f56452b + ", inMemoryCallback=" + ((Object) null) + ", onDiskCallback=" + this.f56453c + ", outputFileOptions=" + this.f56454d + ", cropRect=" + this.f56455e + ", sensorToBufferTransform=" + this.f56456f + ", rotationDegrees=" + this.f56457g + ", jpegQuality=" + this.f56458h + ", captureMode=" + this.f56459i + ", sessionConfigCameraCaptureCallbacks=" + this.f56460j + "}";
    }
}
