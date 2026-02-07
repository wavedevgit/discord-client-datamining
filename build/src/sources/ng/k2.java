package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k2 implements p2 {

    /* renamed from: b  reason: collision with root package name */
    private final int f39979b;

    /* renamed from: c  reason: collision with root package name */
    private final o2 f39980c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k2(int i10, o2 o2Var) {
        this.f39979b = i10;
        this.f39980c = o2Var;
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
        if (this.f39979b == p2Var.zza() && this.f39980c.equals(p2Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f39979b ^ 14552422) + (this.f39980c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f39979b + "intEncoding=" + this.f39980c + ')';
    }

    @Override // ng.p2
    public final int zza() {
        return this.f39979b;
    }

    @Override // ng.p2
    public final o2 zzb() {
        return this.f39980c;
    }
}
