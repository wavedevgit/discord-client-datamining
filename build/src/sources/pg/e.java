package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements j {

    /* renamed from: b  reason: collision with root package name */
    private final int f42412b;

    /* renamed from: c  reason: collision with root package name */
    private final i f42413c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, i iVar) {
        this.f42412b = i10;
        this.f42413c = iVar;
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
        if (this.f42412b == jVar.zza() && this.f42413c.equals(jVar.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f42412b ^ 14552422) + (this.f42413c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f42412b + "intEncoding=" + this.f42413c + ')';
    }

    @Override // pg.j
    public final int zza() {
        return this.f42412b;
    }

    @Override // pg.j
    public final i zzb() {
        return this.f42413c;
    }
}
