package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u1 implements z1 {

    /* renamed from: b  reason: collision with root package name */
    private final int f45838b;

    /* renamed from: c  reason: collision with root package name */
    private final y1 f45839c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(int i10, y1 y1Var) {
        this.f45838b = i10;
        this.f45839c = y1Var;
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
        if (this.f45838b == z1Var.zza() && this.f45839c.equals(z1Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f45838b ^ 14552422) + (this.f45839c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f45838b + "intEncoding=" + this.f45839c + ')';
    }

    @Override // pg.z1
    public final int zza() {
        return this.f45838b;
    }

    @Override // pg.z1
    public final y1 zzb() {
        return this.f45839c;
    }
}
