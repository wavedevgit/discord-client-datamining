package aj;

import aj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private int f650a;

    /* renamed from: b  reason: collision with root package name */
    private d.a f651b = d.a.DEFAULT;

    /* renamed from: aj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0010a implements d {

        /* renamed from: b  reason: collision with root package name */
        private final int f652b;

        /* renamed from: c  reason: collision with root package name */
        private final d.a f653c;

        C0010a(int i10, d.a aVar) {
            this.f652b = i10;
            this.f653c = aVar;
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
            if (this.f652b == dVar.tag() && this.f653c.equals(dVar.intEncoding())) {
                return true;
            }
            return false;
        }

        @Override // java.lang.annotation.Annotation
        public int hashCode() {
            return (14552422 ^ this.f652b) + (this.f653c.hashCode() ^ 2041407134);
        }

        @Override // aj.d
        public d.a intEncoding() {
            return this.f653c;
        }

        @Override // aj.d
        public int tag() {
            return this.f652b;
        }

        @Override // java.lang.annotation.Annotation
        public String toString() {
            return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f652b + "intEncoding=" + this.f653c + ')';
        }
    }

    public static a b() {
        return new a();
    }

    public d a() {
        return new C0010a(this.f650a, this.f651b);
    }

    public a c(int i10) {
        this.f650a = i10;
        return this;
    }
}
