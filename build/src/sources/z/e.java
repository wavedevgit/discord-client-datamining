package z;

import z.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends o0.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.u f56439a;

    /* renamed from: b  reason: collision with root package name */
    private final j0.u f56440b;

    /* renamed from: c  reason: collision with root package name */
    private final int f56441c;

    /* renamed from: d  reason: collision with root package name */
    private final int f56442d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(j0.u uVar, j0.u uVar2, int i10, int i11) {
        if (uVar != null) {
            this.f56439a = uVar;
            if (uVar2 != null) {
                this.f56440b = uVar2;
                this.f56441c = i10;
                this.f56442d = i11;
                return;
            }
            throw new NullPointerException("Null postviewEdge");
        }
        throw new NullPointerException("Null edge");
    }

    @Override // z.o0.a
    j0.u a() {
        return this.f56439a;
    }

    @Override // z.o0.a
    int b() {
        return this.f56441c;
    }

    @Override // z.o0.a
    int c() {
        return this.f56442d;
    }

    @Override // z.o0.a
    j0.u d() {
        return this.f56440b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o0.a) {
            o0.a aVar = (o0.a) obj;
            if (this.f56439a.equals(aVar.a()) && this.f56440b.equals(aVar.d()) && this.f56441c == aVar.b() && this.f56442d == aVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f56439a.hashCode() ^ 1000003) * 1000003) ^ this.f56440b.hashCode()) * 1000003) ^ this.f56441c) * 1000003) ^ this.f56442d;
    }

    public String toString() {
        return "In{edge=" + this.f56439a + ", postviewEdge=" + this.f56440b + ", inputFormat=" + this.f56441c + ", outputFormat=" + this.f56442d + "}";
    }
}
