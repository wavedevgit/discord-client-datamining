package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r1 implements w1 {

    /* renamed from: b  reason: collision with root package name */
    private final int f46222b;

    /* renamed from: c  reason: collision with root package name */
    private final v1 f46223c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r1(int i10, v1 v1Var) {
        this.f46222b = i10;
        this.f46223c = v1Var;
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
        if (this.f46222b == w1Var.zza() && this.f46223c.equals(w1Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f46222b ^ 14552422) + (this.f46223c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f46222b + "intEncoding=" + this.f46223c + ')';
    }

    @Override // qg.w1
    public final int zza() {
        return this.f46222b;
    }

    @Override // qg.w1
    public final v1 zzb() {
        return this.f46223c;
    }
}
