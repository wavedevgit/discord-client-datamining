package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k2 implements p2 {

    /* renamed from: b  reason: collision with root package name */
    private final int f41004b;

    /* renamed from: c  reason: collision with root package name */
    private final o2 f41005c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k2(int i10, o2 o2Var) {
        this.f41004b = i10;
        this.f41005c = o2Var;
    }

    @Override // java.lang.annotation.Annotation
    public final Class annotationType() {
        return p2.class;
    }

    @Override // java.lang.annotation.Annotation
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof p2)) {
            return false;
        }
        p2 p2Var = (p2) obj;
        if (this.f41004b == p2Var.zza() && this.f41005c.equals(p2Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f41004b ^ 14552422) + (this.f41005c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f41004b + "intEncoding=" + this.f41005c + ')';
    }

    @Override // og.p2
    public final int zza() {
        return this.f41004b;
    }

    @Override // og.p2
    public final o2 zzb() {
        return this.f41005c;
    }
}
