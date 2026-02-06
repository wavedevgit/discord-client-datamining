package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k2 implements p2 {

    /* renamed from: b  reason: collision with root package name */
    private final int f39931b;

    /* renamed from: c  reason: collision with root package name */
    private final o2 f39932c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k2(int i10, o2 o2Var) {
        this.f39931b = i10;
        this.f39932c = o2Var;
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
        if (this.f39931b == p2Var.zza() && this.f39932c.equals(p2Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f39931b ^ 14552422) + (this.f39932c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f39931b + "intEncoding=" + this.f39932c + ')';
    }

    @Override // ng.p2
    public final int zza() {
        return this.f39931b;
    }

    @Override // ng.p2
    public final o2 zzb() {
        return this.f39932c;
    }
}
