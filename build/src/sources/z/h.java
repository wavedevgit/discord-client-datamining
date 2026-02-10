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
    private final Executor f55883b;

    /* renamed from: c  reason: collision with root package name */
    private final n0.f f55884c;

    /* renamed from: d  reason: collision with root package name */
    private final n0.g f55885d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f55886e;

    /* renamed from: f  reason: collision with root package name */
    private final Matrix f55887f;

    /* renamed from: g  reason: collision with root package name */
    private final int f55888g;

    /* renamed from: h  reason: collision with root package name */
    private final int f55889h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55890i;

    /* renamed from: j  reason: collision with root package name */
    private final List f55891j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Executor executor, n0.e eVar, n0.f fVar, n0.g gVar, Rect rect, Matrix matrix, int i10, int i11, int i12, List list) {
        if (executor != null) {
            this.f55883b = executor;
            this.f55884c = fVar;
            this.f55885d = gVar;
            if (rect != null) {
                this.f55886e = rect;
                if (matrix != null) {
                    this.f55887f = matrix;
                    this.f55888g = i10;
                    this.f55889h = i11;
                    this.f55890i = i12;
                    if (list != null) {
                        this.f55891j = list;
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
            if (this.f55883b.equals(e1Var.g())) {
                e1Var.j();
                n0.f fVar = this.f55884c;
                if (fVar != null ? fVar.equals(e1Var.l()) : e1Var.l() == null) {
                    n0.g gVar = this.f55885d;
                    if (gVar != null ? gVar.equals(e1Var.m()) : e1Var.m() == null) {
                        if (this.f55886e.equals(e1Var.i()) && this.f55887f.equals(e1Var.o()) && this.f55888g == e1Var.n() && this.f55889h == e1Var.k() && this.f55890i == e1Var.h() && this.f55891j.equals(e1Var.p())) {
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
        return this.f55883b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int h() {
        return this.f55890i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55883b.hashCode() ^ 1000003) * (-721379959);
        n0.f fVar = this.f55884c;
        int i10 = 0;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        int i11 = (hashCode2 ^ hashCode) * 1000003;
        n0.g gVar = this.f55885d;
        if (gVar != null) {
            i10 = gVar.hashCode();
        }
        return ((((((((((((i11 ^ i10) * 1000003) ^ this.f55886e.hashCode()) * 1000003) ^ this.f55887f.hashCode()) * 1000003) ^ this.f55888g) * 1000003) ^ this.f55889h) * 1000003) ^ this.f55890i) * 1000003) ^ this.f55891j.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Rect i() {
        return this.f55886e;
    }

    @Override // z.e1
    public n0.e j() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int k() {
        return this.f55889h;
    }

    @Override // z.e1
    public n0.f l() {
        return this.f55884c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public n0.g m() {
        return this.f55885d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int n() {
        return this.f55888g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Matrix o() {
        return this.f55887f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public List p() {
        return this.f55891j;
    }

    public String toString() {
        return "TakePictureRequest{appExecutor=" + this.f55883b + ", inMemoryCallback=" + ((Object) null) + ", onDiskCallback=" + this.f55884c + ", outputFileOptions=" + this.f55885d + ", cropRect=" + this.f55886e + ", sensorToBufferTransform=" + this.f55887f + ", rotationDegrees=" + this.f55888g + ", jpegQuality=" + this.f55889h + ", captureMode=" + this.f55890i + ", sessionConfigCameraCaptureCallbacks=" + this.f55891j + "}";
    }
}
