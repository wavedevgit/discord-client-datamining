package z;

import z.o0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends o0.a {

    /* renamed from: a  reason: collision with root package name */
    private final j0.u f54956a;

    /* renamed from: b  reason: collision with root package name */
    private final j0.u f54957b;

    /* renamed from: c  reason: collision with root package name */
    private final int f54958c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54959d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(j0.u uVar, j0.u uVar2, int i10, int i11) {
        if (uVar != null) {
            this.f54956a = uVar;
            if (uVar2 != null) {
                this.f54957b = uVar2;
                this.f54958c = i10;
                this.f54959d = i11;
                return;
            }
            throw new NullPointerException("Null postviewEdge");
        }
        throw new NullPointerException("Null edge");
    }

    @Override // z.o0.a
    j0.u a() {
        return this.f54956a;
    }

    @Override // z.o0.a
    int b() {
        return this.f54958c;
    }

    @Override // z.o0.a
    int c() {
        return this.f54959d;
    }

    @Override // z.o0.a
    j0.u d() {
        return this.f54957b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o0.a) {
            o0.a aVar = (o0.a) obj;
            if (this.f54956a.equals(aVar.a()) && this.f54957b.equals(aVar.d()) && this.f54958c == aVar.b() && this.f54959d == aVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f54956a.hashCode() ^ 1000003) * 1000003) ^ this.f54957b.hashCode()) * 1000003) ^ this.f54958c) * 1000003) ^ this.f54959d;
    }

    public String toString() {
        return "In{edge=" + this.f54956a + ", postviewEdge=" + this.f54957b + ", inputFormat=" + this.f54958c + ", outputFormat=" + this.f54959d + "}";
    }
}
