package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f56419d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56420e;

    /* renamed from: f  reason: collision with root package name */
    private final int f56421f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f56422g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f56423h;

    /* renamed from: i  reason: collision with root package name */
    private final int f56424i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f56425j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f56426k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f56419d = size;
            this.f56420e = i10;
            this.f56421f = i11;
            this.f56422g = z10;
            this.f56423h = size2;
            this.f56424i = i12;
            if (uVar != null) {
                this.f56425j = uVar;
                if (uVar2 != null) {
                    this.f56426k = uVar2;
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
        return this.f56426k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f56420e;
    }

    @Override // z.u.c
    int e() {
        return this.f56421f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f56419d.equals(cVar.j()) && this.f56420e == cVar.d() && this.f56421f == cVar.e() && this.f56422g == cVar.l()) {
                cVar.c();
                Size size = this.f56423h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f56424i == cVar.f() && this.f56425j.equals(cVar.i()) && this.f56426k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f56424i;
    }

    @Override // z.u.c
    Size g() {
        return this.f56423h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f56419d.hashCode() ^ 1000003) * 1000003) ^ this.f56420e) * 1000003) ^ this.f56421f) * 1000003;
        if (this.f56422g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f56423h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f56424i) * 1000003) ^ this.f56425j.hashCode()) * 1000003) ^ this.f56426k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f56425j;
    }

    @Override // z.u.c
    Size j() {
        return this.f56419d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f56422g;
    }

    public String toString() {
        return "In{size=" + this.f56419d + ", inputFormat=" + this.f56420e + ", outputFormat=" + this.f56421f + ", virtualCamera=" + this.f56422g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f56423h + ", postviewImageFormat=" + this.f56424i + ", requestEdge=" + this.f56425j + ", errorEdge=" + this.f56426k + "}";
    }
}
