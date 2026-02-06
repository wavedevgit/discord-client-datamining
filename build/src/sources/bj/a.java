package bj;

import bj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private int f6779a;

    /* renamed from: b  reason: collision with root package name */
    private d.a f6780b = d.a.DEFAULT;

    /* renamed from: bj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0102a implements d {

        /* renamed from: b  reason: collision with root package name */
        private final int f6781b;

        /* renamed from: c  reason: collision with root package name */
        private final d.a f6782c;

        C0102a(int i10, d.a aVar) {
            this.f6781b = i10;
            this.f6782c = aVar;
        }

        @Override // java.lang.annotation.Annotation
        public Class annotationType() {
            return d.class;
        }

        @Override // java.lang.annotation.Annotation
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f6781b == dVar.tag() && this.f6782c.equals(dVar.intEncoding())) {
                return true;
            }
            return false;
        }

        @Override // java.lang.annotation.Annotation
        public int hashCode() {
            return (14552422 ^ this.f6781b) + (this.f6782c.hashCode() ^ 2041407134);
        }

        @Override // bj.d
        public d.a intEncoding() {
            return this.f6782c;
        }

        @Override // bj.d
        public int tag() {
            return this.f6781b;
        }

        @Override // java.lang.annotation.Annotation
        public String toString() {
            return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f6781b + "intEncoding=" + this.f6782c + ')';
        }
    }

    public static a b() {
        return new a();
    }

    public d a() {
        return new C0102a(this.f6779a, this.f6780b);
    }

    public a c(int i10) {
        this.f6779a = i10;
        return this;
    }
}
