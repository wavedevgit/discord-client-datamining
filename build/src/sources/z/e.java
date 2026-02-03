package z;

import z.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends o0.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.u f55232a;

    /* renamed from: b  reason: collision with root package name */
    private final j0.u f55233b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55234c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55235d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(j0.u uVar, j0.u uVar2, int i10, int i11) {
        if (uVar != null) {
            this.f55232a = uVar;
            if (uVar2 != null) {
                this.f55233b = uVar2;
                this.f55234c = i10;
                this.f55235d = i11;
                return;
            }
            throw new NullPointerException("Null postviewEdge");
        }
        throw new NullPointerException("Null edge");
    }

    @Override // z.o0.a
    j0.u a() {
        return this.f55232a;
    }

    @Override // z.o0.a
    int b() {
        return this.f55234c;
    }

    @Override // z.o0.a
    int c() {
        return this.f55235d;
    }

    @Override // z.o0.a
    j0.u d() {
        return this.f55233b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o0.a) {
            o0.a aVar = (o0.a) obj;
            if (this.f55232a.equals(aVar.a()) && this.f55233b.equals(aVar.d()) && this.f55234c == aVar.b() && this.f55235d == aVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f55232a.hashCode() ^ 1000003) * 1000003) ^ this.f55233b.hashCode()) * 1000003) ^ this.f55234c) * 1000003) ^ this.f55235d;
    }

    public String toString() {
        return "In{edge=" + this.f55232a + ", postviewEdge=" + this.f55233b + ", inputFormat=" + this.f55234c + ", outputFormat=" + this.f55235d + "}";
    }
}
