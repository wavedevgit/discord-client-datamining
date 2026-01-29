package a0;

import a0.o2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class i extends o2 {

    /* renamed from: a  reason: collision with root package name */
    private final o2.b f78a;

    /* renamed from: b  reason: collision with root package name */
    private final o2.a f79b;

    /* renamed from: c  reason: collision with root package name */
    private final long f80c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o2.b bVar, o2.a aVar, long j10) {
        if (bVar != null) {
            this.f78a = bVar;
            if (aVar != null) {
                this.f79b = aVar;
                this.f80c = j10;
                return;
            }
            throw new NullPointerException("Null configSize");
        }
        throw new NullPointerException("Null configType");
    }

    @Override // a0.o2
    public o2.a c() {
        return this.f79b;
    }

    @Override // a0.o2
    public o2.b d() {
        return this.f78a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o2) {
            o2 o2Var = (o2) obj;
            if (this.f78a.equals(o2Var.d()) && this.f79b.equals(o2Var.c()) && this.f80c == o2Var.f()) {
                return true;
            }
        }
        return false;
    }

    @Override // a0.o2
    public long f() {
        return this.f80c;
    }

    public int hashCode() {
        long j10 = this.f80c;
        return ((((this.f78a.hashCode() ^ 1000003) * 1000003) ^ this.f79b.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)));
    }

    public String toString() {
        return "SurfaceConfig{configType=" + this.f78a + ", configSize=" + this.f79b + ", streamUseCase=" + this.f80c + "}";
    }
}
