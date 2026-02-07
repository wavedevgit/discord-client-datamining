package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r1 implements w1 {

    /* renamed from: b  reason: collision with root package name */
    private final int f44708b;

    /* renamed from: c  reason: collision with root package name */
    private final v1 f44709c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r1(int i10, v1 v1Var) {
        this.f44708b = i10;
        this.f44709c = v1Var;
    }

    @Override // java.lang.annotation.Annotation
    public final Class annotationType() {
        return w1.class;
    }

    @Override // java.lang.annotation.Annotation
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof w1)) {
            return false;
        }
        w1 w1Var = (w1) obj;
        if (this.f44708b == w1Var.zza() && this.f44709c.equals(w1Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f44708b ^ 14552422) + (this.f44709c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f44708b + "intEncoding=" + this.f44709c + ')';
    }

    @Override // pg.w1
    public final int zza() {
        return this.f44708b;
    }

    @Override // pg.w1
    public final v1 zzb() {
        return this.f44709c;
    }
}
