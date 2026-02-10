package z;

import z.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends o0.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.u f55831a;

    /* renamed from: b  reason: collision with root package name */
    private final j0.u f55832b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55833c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55834d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(j0.u uVar, j0.u uVar2, int i10, int i11) {
        if (uVar != null) {
            this.f55831a = uVar;
            if (uVar2 != null) {
                this.f55832b = uVar2;
                this.f55833c = i10;
                this.f55834d = i11;
                return;
            }
            throw new NullPointerException("Null postviewEdge");
        }
        throw new NullPointerException("Null edge");
    }

    @Override // z.o0.a
    j0.u a() {
        return this.f55831a;
    }

    @Override // z.o0.a
    int b() {
        return this.f55833c;
    }

    @Override // z.o0.a
    int c() {
        return this.f55834d;
    }

    @Override // z.o0.a
    j0.u d() {
        return this.f55832b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o0.a) {
            o0.a aVar = (o0.a) obj;
            if (this.f55831a.equals(aVar.a()) && this.f55832b.equals(aVar.d()) && this.f55833c == aVar.b() && this.f55834d == aVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f55831a.hashCode() ^ 1000003) * 1000003) ^ this.f55832b.hashCode()) * 1000003) ^ this.f55833c) * 1000003) ^ this.f55834d;
    }

    public String toString() {
        return "In{edge=" + this.f55831a + ", postviewEdge=" + this.f55832b + ", inputFormat=" + this.f55833c + ", outputFormat=" + this.f55834d + "}";
    }
}
