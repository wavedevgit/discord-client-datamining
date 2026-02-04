package z;

import z.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends o0.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.u f55367a;

    /* renamed from: b  reason: collision with root package name */
    private final j0.u f55368b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55369c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55370d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(j0.u uVar, j0.u uVar2, int i10, int i11) {
        if (uVar != null) {
            this.f55367a = uVar;
            if (uVar2 != null) {
                this.f55368b = uVar2;
                this.f55369c = i10;
                this.f55370d = i11;
                return;
            }
            throw new NullPointerException("Null postviewEdge");
        }
        throw new NullPointerException("Null edge");
    }

    @Override // z.o0.a
    j0.u a() {
        return this.f55367a;
    }

    @Override // z.o0.a
    int b() {
        return this.f55369c;
    }

    @Override // z.o0.a
    int c() {
        return this.f55370d;
    }

    @Override // z.o0.a
    j0.u d() {
        return this.f55368b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o0.a) {
            o0.a aVar = (o0.a) obj;
            if (this.f55367a.equals(aVar.a()) && this.f55368b.equals(aVar.d()) && this.f55369c == aVar.b() && this.f55370d == aVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f55367a.hashCode() ^ 1000003) * 1000003) ^ this.f55368b.hashCode()) * 1000003) ^ this.f55369c) * 1000003) ^ this.f55370d;
    }

    public String toString() {
        return "In{edge=" + this.f55367a + ", postviewEdge=" + this.f55368b + ", inputFormat=" + this.f55369c + ", outputFormat=" + this.f55370d + "}";
    }
}
