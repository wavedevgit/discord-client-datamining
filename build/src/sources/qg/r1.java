package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r1 implements w1 {

    /* renamed from: b  reason: collision with root package name */
    private final int f45459b;

    /* renamed from: c  reason: collision with root package name */
    private final v1 f45460c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r1(int i10, v1 v1Var) {
        this.f45459b = i10;
        this.f45460c = v1Var;
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
        if (this.f45459b == w1Var.zza() && this.f45460c.equals(w1Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f45459b ^ 14552422) + (this.f45460c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f45459b + "intEncoding=" + this.f45460c + ')';
    }

    @Override // qg.w1
    public final int zza() {
        return this.f45459b;
    }

    @Override // qg.w1
    public final v1 zzb() {
        return this.f45460c;
    }
}
