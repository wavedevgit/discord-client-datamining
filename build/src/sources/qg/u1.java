package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u1 implements z1 {

    /* renamed from: b  reason: collision with root package name */
    private final int f47604b;

    /* renamed from: c  reason: collision with root package name */
    private final y1 f47605c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(int i10, y1 y1Var) {
        this.f47604b = i10;
        this.f47605c = y1Var;
    }

    @Override // java.lang.annotation.Annotation
    public final Class annotationType() {
        return z1.class;
    }

    @Override // java.lang.annotation.Annotation
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof z1)) {
            return false;
        }
        z1 z1Var = (z1) obj;
        if (this.f47604b == z1Var.zza() && this.f47605c.equals(z1Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f47604b ^ 14552422) + (this.f47605c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f47604b + "intEncoding=" + this.f47605c + ')';
    }

    @Override // qg.z1
    public final int zza() {
        return this.f47604b;
    }

    @Override // qg.z1
    public final y1 zzb() {
        return this.f47605c;
    }
}
