package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55212d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55213e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55214f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55215g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55216h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55217i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55218j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55219k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55212d = size;
            this.f55213e = i10;
            this.f55214f = i11;
            this.f55215g = z10;
            this.f55216h = size2;
            this.f55217i = i12;
            if (uVar != null) {
                this.f55218j = uVar;
                if (uVar2 != null) {
                    this.f55219k = uVar2;
                    return;
                }
                throw new NullPointerException("Null errorEdge");
            }
            throw new NullPointerException("Null requestEdge");
        }
        throw new NullPointerException("Null size");
    }

    @Override // z.u.c
    j0.u b() {
        return this.f55219k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55213e;
    }

    @Override // z.u.c
    int e() {
        return this.f55214f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55212d.equals(cVar.j()) && this.f55213e == cVar.d() && this.f55214f == cVar.e() && this.f55215g == cVar.l()) {
                cVar.c();
                Size size = this.f55216h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55217i == cVar.f() && this.f55218j.equals(cVar.i()) && this.f55219k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55217i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55216h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55212d.hashCode() ^ 1000003) * 1000003) ^ this.f55213e) * 1000003) ^ this.f55214f) * 1000003;
        if (this.f55215g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55216h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55217i) * 1000003) ^ this.f55218j.hashCode()) * 1000003) ^ this.f55219k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55218j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55212d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55215g;
    }

    public String toString() {
        return "In{size=" + this.f55212d + ", inputFormat=" + this.f55213e + ", outputFormat=" + this.f55214f + ", virtualCamera=" + this.f55215g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55216h + ", postviewImageFormat=" + this.f55217i + ", requestEdge=" + this.f55218j + ", errorEdge=" + this.f55219k + "}";
    }
}
