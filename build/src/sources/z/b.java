package z;

import android.util.Size;
import z.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends u.c {

    /* renamed from: d  reason: collision with root package name */
    private final Size f55667d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55668e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55669f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f55670g;

    /* renamed from: h  reason: collision with root package name */
    private final Size f55671h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55672i;

    /* renamed from: j  reason: collision with root package name */
    private final j0.u f55673j;

    /* renamed from: k  reason: collision with root package name */
    private final j0.u f55674k;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Size size, int i10, int i11, boolean z10, x.u0 u0Var, Size size2, int i12, j0.u uVar, j0.u uVar2) {
        if (size != null) {
            this.f55667d = size;
            this.f55668e = i10;
            this.f55669f = i11;
            this.f55670g = z10;
            this.f55671h = size2;
            this.f55672i = i12;
            if (uVar != null) {
                this.f55673j = uVar;
                if (uVar2 != null) {
                    this.f55674k = uVar2;
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
        return this.f55674k;
    }

    @Override // z.u.c
    x.u0 c() {
        return null;
    }

    @Override // z.u.c
    int d() {
        return this.f55668e;
    }

    @Override // z.u.c
    int e() {
        return this.f55669f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u.c) {
            u.c cVar = (u.c) obj;
            if (this.f55667d.equals(cVar.j()) && this.f55668e == cVar.d() && this.f55669f == cVar.e() && this.f55670g == cVar.l()) {
                cVar.c();
                Size size = this.f55671h;
                if (size != null ? size.equals(cVar.g()) : cVar.g() == null) {
                    if (this.f55672i == cVar.f() && this.f55673j.equals(cVar.i()) && this.f55674k.equals(cVar.b())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    @Override // z.u.c
    int f() {
        return this.f55672i;
    }

    @Override // z.u.c
    Size g() {
        return this.f55671h;
    }

    public int hashCode() {
        int i10;
        int hashCode;
        int hashCode2 = (((((this.f55667d.hashCode() ^ 1000003) * 1000003) ^ this.f55668e) * 1000003) ^ this.f55669f) * 1000003;
        if (this.f55670g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i11 = (hashCode2 ^ i10) * (-721379959);
        Size size = this.f55671h;
        if (size == null) {
            hashCode = 0;
        } else {
            hashCode = size.hashCode();
        }
        return ((((((i11 ^ hashCode) * 1000003) ^ this.f55672i) * 1000003) ^ this.f55673j.hashCode()) * 1000003) ^ this.f55674k.hashCode();
    }

    @Override // z.u.c
    j0.u i() {
        return this.f55673j;
    }

    @Override // z.u.c
    Size j() {
        return this.f55667d;
    }

    @Override // z.u.c
    boolean l() {
        return this.f55670g;
    }

    public String toString() {
        return "In{size=" + this.f55667d + ", inputFormat=" + this.f55668e + ", outputFormat=" + this.f55669f + ", virtualCamera=" + this.f55670g + ", imageReaderProxyProvider=" + ((Object) null) + ", postviewSize=" + this.f55671h + ", postviewImageFormat=" + this.f55672i + ", requestEdge=" + this.f55673j + ", errorEdge=" + this.f55674k + "}";
    }
}
