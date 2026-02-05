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
    private final Executor f54969b;

    /* renamed from: c  reason: collision with root package name */
    private final n0.f f54970c;

    /* renamed from: d  reason: collision with root package name */
    private final n0.g f54971d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f54972e;

    /* renamed from: f  reason: collision with root package name */
    private final Matrix f54973f;

    /* renamed from: g  reason: collision with root package name */
    private final int f54974g;

    /* renamed from: h  reason: collision with root package name */
    private final int f54975h;

    /* renamed from: i  reason: collision with root package name */
    private final int f54976i;

    /* renamed from: j  reason: collision with root package name */
    private final List f54977j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Executor executor, n0.e eVar, n0.f fVar, n0.g gVar, Rect rect, Matrix matrix, int i10, int i11, int i12, List list) {
        if (executor != null) {
            this.f54969b = executor;
            this.f54970c = fVar;
            this.f54971d = gVar;
            if (rect != null) {
                this.f54972e = rect;
                if (matrix != null) {
                    this.f54973f = matrix;
                    this.f54974g = i10;
                    this.f54975h = i11;
                    this.f54976i = i12;
                    if (list != null) {
                        this.f54977j = list;
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
            if (this.f54969b.equals(e1Var.g())) {
                e1Var.j();
                n0.f fVar = this.f54970c;
                if (fVar != null ? fVar.equals(e1Var.l()) : e1Var.l() == null) {
                    n0.g gVar = this.f54971d;
                    if (gVar != null ? gVar.equals(e1Var.m()) : e1Var.m() == null) {
                        if (this.f54972e.equals(e1Var.i()) && this.f54973f.equals(e1Var.o()) && this.f54974g == e1Var.n() && this.f54975h == e1Var.k() && this.f54976i == e1Var.h() && this.f54977j.equals(e1Var.p())) {
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
        return this.f54969b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int h() {
        return this.f54976i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f54969b.hashCode() ^ 1000003) * (-721379959);
        n0.f fVar = this.f54970c;
        int i10 = 0;
        if (fVar == null) {
            hashCode = 0;
        } else {
            hashCode = fVar.hashCode();
        }
        int i11 = (hashCode2 ^ hashCode) * 1000003;
        n0.g gVar = this.f54971d;
        if (gVar != null) {
            i10 = gVar.hashCode();
        }
        return ((((((((((((i11 ^ i10) * 1000003) ^ this.f54972e.hashCode()) * 1000003) ^ this.f54973f.hashCode()) * 1000003) ^ this.f54974g) * 1000003) ^ this.f54975h) * 1000003) ^ this.f54976i) * 1000003) ^ this.f54977j.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Rect i() {
        return this.f54972e;
    }

    @Override // z.e1
    public n0.e j() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int k() {
        return this.f54975h;
    }

    @Override // z.e1
    public n0.f l() {
        return this.f54970c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public n0.g m() {
        return this.f54971d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public int n() {
        return this.f54974g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public Matrix o() {
        return this.f54973f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // z.e1
    public List p() {
        return this.f54977j;
    }

    public String toString() {
        return "TakePictureRequest{appExecutor=" + this.f54969b + ", inMemoryCallback=" + ((Object) null) + ", onDiskCallback=" + this.f54970c + ", outputFileOptions=" + this.f54971d + ", cropRect=" + this.f54972e + ", sensorToBufferTransform=" + this.f54973f + ", rotationDegrees=" + this.f54974g + ", jpegQuality=" + this.f54975h + ", captureMode=" + this.f54976i + ", sessionConfigCameraCaptureCallbacks=" + this.f54977j + "}";
    }
}
