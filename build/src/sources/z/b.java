package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f54936d;

    /* renamed from: e  reason: collision with root package name */
    private final int f54937e;

    /* renamed from: f  reason: collision with root package name */
    private final int f54938f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f54939g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f54940h;

    /* renamed from: i  reason: collision with root package name */
    private final int f54941i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f54942j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f54943k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f54936d = size;
            this.f54937e = i10;
            this.f54938f = i11;
            this.f54939g = z10;
            this.f54940h = size2;
            this.f54941i = i12;
            if (uVar != null) {
                this.f54942j = uVar;
                if (uVar2 != null) {
                    this.f54943k = uVar2;
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
        return this.f54943k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f54937e;
    }

    @Override // z.u.c
    int e() {
        return this.f54938f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f54936d.equals(cVar.j()) && this.f54937e == cVar.d() && this.f54938f == cVar.e() && this.f54939g == cVar.l()) {
                cVar.c();
                Size size = this.f54940h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f54941i == cVar.f() && this.f54942j.equals(cVar.i()) && this.f54943k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f54941i;
    }

    @Override // z.u.c
    Size g() {
        return this.f54940h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f54936d.hashCode() ^ 1000003) * 1000003) ^ this.f54937e) * 1000003) ^ this.f54938f) * 1000003;
        if (this.f54939g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f54940h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f54941i) * 1000003) ^ this.f54942j.hashCode()) * 1000003) ^ this.f54943k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f54942j;
    }

    @Override // z.u.c
    Size j() {
        return this.f54936d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f54939g;
    }

    public String toString() {
        return "In{size=" + this.f54936d + ", inputFormat=" + this.f54937e + ", outputFormat=" + this.f54938f + ", virtualCamera=" + this.f54939g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f54940h + ", postviewImageFormat=" + this.f54941i + ", requestEdge=" + this.f54942j + ", errorEdge=" + this.f54943k + "}";
    }
}
