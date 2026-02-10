package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u1 implements z1 {

    /* renamed from: b  reason: collision with root package name */
    private final int f47176b;

    /* renamed from: c  reason: collision with root package name */
    private final y1 f47177c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(int i10, y1 y1Var) {
        this.f47176b = i10;
        this.f47177c = y1Var;
    }

    @Override // java.lang.annotation.Annotation
    public final Class annotationType() {
        return z1.class;
    }

    @Override // java.lang.annotation.Annotation
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof z1)) {
            return false;
        }
        z1 z1Var = (z1) obj;
        if (this.f47176b == z1Var.zza() && this.f47177c.equals(z1Var.zzb())) {
            return true;
        }
        return false;
    }

    @Override // java.lang.annotation.Annotation
    public final int hashCode() {
        return (this.f47176b ^ 14552422) + (this.f47177c.hashCode() ^ 2041407134);
    }

    @Override // java.lang.annotation.Annotation
    public final String toString() {
        return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f47176b + "intEncoding=" + this.f47177c + ')';
    }

    @Override // rg.z1
    public final int zza() {
        return this.f47176b;
    }

    @Override // rg.z1
    public final y1 zzb() {
        return this.f47177c;
    }
}
