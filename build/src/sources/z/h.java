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
    private final Executor f55380b;

    /* renamed from: c  reason: collision with root package name */
    private final n0.f f55381c;

    /* renamed from: d  reason: collision with root package name */
    private final n0.g f55382d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f55383e;

    /* renamed from: f  reason: collision with root package name */
    private final Matrix f55384f;

    /* renamed from: g  reason: collision with root package name */
    private final int f55385g;

    /* renamed from: h  reason: collision with root package name */
    private final int f55386h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55387i;

    /* renamed from: j  reason: collision with root package name */
    private final List f55388j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Executor executor, n0.e eVar, n0.f fVar, n0.g gVar, Rect rect, Matrix matrix, int i10, int i11, int i12, List list) {
        if (executor != null) {
            this.f55380b = executor;
            this.f55381c = fVar;
            this.f55382d = gVar;
            if (rect != null) {
                this.f55383e = rect;
                if (matrix != null) {
                    this.f55384f = matrix;
                    this.f55385g = i10;
                    this.f55386h = i11;
                    this.f55387i = i12;
                    if (list != null) {
                        this.f55388j = list;
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
            if (this.f55380b.equals(e1Var.g())) {
                e1Var.j();
                n0.f fVar = this.f55381c;
                if (fVar != null ? fVar.equals(e1Var.l()) : e1Var.l() == null) {
                    n0.g gVar = this.f55382d;
                    if (gVar != null ? gVar.equals(e1Var.m()) : e1Var.m() == null) {
                        if (this.f55383e.equals(e1Var.i()) && this.f55384f.equals(e1Var.o()) && this.f55385g == e1Var.n() && this.f55386h == e1Var.k() && this.f55387i == e1Var.h() && this.f55388j.equals(e1Var.p())) {
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
        return this.f55380b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int h() {
        return this.f55387i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55380b.hashCode() ^ 1000003) * (-721379959);
        n0.f fVar = this.f55381c;
        int i10 = 0;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        int i11 = (hashCode2 ^ hashCode) * 1000003;
        n0.g gVar = this.f55382d;
        if (gVar != null) {
            i10 = gVar.hashCode();
        }
        return ((((((((((((i11 ^ i10) * 1000003) ^ this.f55383e.hashCode()) * 1000003) ^ this.f55384f.hashCode()) * 1000003) ^ this.f55385g) * 1000003) ^ this.f55386h) * 1000003) ^ this.f55387i) * 1000003) ^ this.f55388j.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Rect i() {
        return this.f55383e;
    }

    @Override // z.e1
    public n0.e j() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int k() {
        return this.f55386h;
    }

    @Override // z.e1
    public n0.f l() {
        return this.f55381c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public n0.g m() {
        return this.f55382d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int n() {
        return this.f55385g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Matrix o() {
        return this.f55384f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public List p() {
        return this.f55388j;
    }

    public String toString() {
        return "TakePictureRequest{appExecutor=" + this.f55380b + ", inMemoryCallback=" + ((Object) null) + ", onDiskCallback=" + this.f55381c + ", outputFileOptions=" + this.f55382d + ", cropRect=" + this.f55383e + ", sensorToBufferTransform=" + this.f55384f + ", rotationDegrees=" + this.f55385g + ", jpegQuality=" + this.f55386h + ", captureMode=" + this.f55387i + ", sessionConfigCameraCaptureCallbacks=" + this.f55388j + "}";
    }
}
