package xi;

import xi.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private int f53283a;

    /* renamed from: b  reason: collision with root package name */
    private d.a f53284b = d.a.DEFAULT;

    /* renamed from: xi.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0723a implements d {

        /* renamed from: b  reason: collision with root package name */
        private final int f53285b;

        /* renamed from: c  reason: collision with root package name */
        private final d.a f53286c;

        C0723a(int i10, d.a aVar) {
            this.f53285b = i10;
            this.f53286c = aVar;
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
            if (this.f53285b == dVar.tag() && this.f53286c.equals(dVar.intEncoding())) {
                return true;
            }
            return false;
        }

        @Override // java.lang.annotation.Annotation
        public int hashCode() {
            return (14552422 ^ this.f53285b) + (this.f53286c.hashCode() ^ 2041407134);
        }

        @Override // xi.d
        public d.a intEncoding() {
            return this.f53286c;
        }

        @Override // xi.d
        public int tag() {
            return this.f53285b;
        }

        @Override // java.lang.annotation.Annotation
        public String toString() {
            return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f53285b + "intEncoding=" + this.f53286c + ')';
        }
    }

    public static a b() {
        return new a();
    }

    public d a() {
        return new C0723a(this.f53283a, this.f53284b);
    }

    public a c(int i10) {
        this.f53283a = i10;
        return this;
    }
}
