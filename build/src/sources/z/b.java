package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55850d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55851e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55852f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55853g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55854h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55855i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55856j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55857k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55850d = size;
            this.f55851e = i10;
            this.f55852f = i11;
            this.f55853g = z10;
            this.f55854h = size2;
            this.f55855i = i12;
            if (uVar != null) {
                this.f55856j = uVar;
                if (uVar2 != null) {
                    this.f55857k = uVar2;
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
        return this.f55857k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55851e;
    }

    @Override // z.u.c
    int e() {
        return this.f55852f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55850d.equals(cVar.j()) && this.f55851e == cVar.d() && this.f55852f == cVar.e() && this.f55853g == cVar.l()) {
                cVar.c();
                Size size = this.f55854h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55855i == cVar.f() && this.f55856j.equals(cVar.i()) && this.f55857k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55855i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55854h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55850d.hashCode() ^ 1000003) * 1000003) ^ this.f55851e) * 1000003) ^ this.f55852f) * 1000003;
        if (this.f55853g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55854h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55855i) * 1000003) ^ this.f55856j.hashCode()) * 1000003) ^ this.f55857k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55856j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55850d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55853g;
    }

    public String toString() {
        return "In{size=" + this.f55850d + ", inputFormat=" + this.f55851e + ", outputFormat=" + this.f55852f + ", virtualCamera=" + this.f55853g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55854h + ", postviewImageFormat=" + this.f55855i + ", requestEdge=" + this.f55856j + ", errorEdge=" + this.f55857k + "}";
    }
}
