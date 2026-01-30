package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements j {

    /* renamed from: b  reason: collision with root package name */
    private final int f41063b;

    /* renamed from: c  reason: collision with root package name */
    private final i f41064c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, i iVar) {
        this.f41063b = i10;
        this.f41064c = iVar;
    }

    @Override // java.lang.annotation.Annotation
    public final Class annotationType() {
        return j.class;
    }

    @Override // java.lang.annotation.Annotation
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j)) {
            return false;
        }
        j jVar = (j) obj;
        if (this.f41063b == jVar.zza() && this.f41064c.equals(jVar.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f41063b ^ 14552422) + (this.f41064c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f41063b + "intEncoding=" + this.f41064c + ')';
    }

    @Override // ng.j
    public final int zza() {
        return this.f41063b;
    }

    @Override // ng.j
    public final i zzb() {
        return this.f41064c;
    }
}
