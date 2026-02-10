package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements j {

    /* renamed from: b  reason: collision with root package name */
    private final int f43385b;

    /* renamed from: c  reason: collision with root package name */
    private final i f43386c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, i iVar) {
        this.f43385b = i10;
        this.f43386c = iVar;
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
        if (this.f43385b == jVar.zza() && this.f43386c.equals(jVar.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f43385b ^ 14552422) + (this.f43386c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f43385b + "intEncoding=" + this.f43386c + ')';
    }

    @Override // pg.j
    public final int zza() {
        return this.f43385b;
    }

    @Override // pg.j
    public final i zzb() {
        return this.f43386c;
    }
}
