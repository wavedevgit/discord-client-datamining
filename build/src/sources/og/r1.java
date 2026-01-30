package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r1 implements w1 {

    /* renamed from: b  reason: collision with root package name */
    private final int f43484b;

    /* renamed from: c  reason: collision with root package name */
    private final v1 f43485c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r1(int i10, v1 v1Var) {
        this.f43484b = i10;
        this.f43485c = v1Var;
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
        if (this.f43484b == w1Var.zza() && this.f43485c.equals(w1Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f43484b ^ 14552422) + (this.f43485c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f43484b + "intEncoding=" + this.f43485c + ')';
    }

    @Override // og.w1
    public final int zza() {
        return this.f43484b;
    }

    @Override // og.w1
    public final v1 zzb() {
        return this.f43485c;
    }
}
