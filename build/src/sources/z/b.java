package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55811d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55812e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55813f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55814g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55815h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55816i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55817j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55818k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55811d = size;
            this.f55812e = i10;
            this.f55813f = i11;
            this.f55814g = z10;
            this.f55815h = size2;
            this.f55816i = i12;
            if (uVar != null) {
                this.f55817j = uVar;
                if (uVar2 != null) {
                    this.f55818k = uVar2;
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
        return this.f55818k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55812e;
    }

    @Override // z.u.c
    int e() {
        return this.f55813f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55811d.equals(cVar.j()) && this.f55812e == cVar.d() && this.f55813f == cVar.e() && this.f55814g == cVar.l()) {
                cVar.c();
                Size size = this.f55815h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55816i == cVar.f() && this.f55817j.equals(cVar.i()) && this.f55818k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55816i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55815h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55811d.hashCode() ^ 1000003) * 1000003) ^ this.f55812e) * 1000003) ^ this.f55813f) * 1000003;
        if (this.f55814g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55815h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55816i) * 1000003) ^ this.f55817j.hashCode()) * 1000003) ^ this.f55818k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55817j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55811d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55814g;
    }

    public String toString() {
        return "In{size=" + this.f55811d + ", inputFormat=" + this.f55812e + ", outputFormat=" + this.f55813f + ", virtualCamera=" + this.f55814g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55815h + ", postviewImageFormat=" + this.f55816i + ", requestEdge=" + this.f55817j + ", errorEdge=" + this.f55818k + "}";
    }
}
