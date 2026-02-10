package cj;

import cj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private int f7620a;

    /* renamed from: b  reason: collision with root package name */
    private d.a f7621b = d.a.DEFAULT;

    /* renamed from: cj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0152a implements d {

        /* renamed from: b  reason: collision with root package name */
        private final int f7622b;

        /* renamed from: c  reason: collision with root package name */
        private final d.a f7623c;

        C0152a(int i10, d.a aVar) {
            this.f7622b = i10;
            this.f7623c = aVar;
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
            if (this.f7622b == dVar.tag() && this.f7623c.equals(dVar.intEncoding())) {
                return true;
            }
            return false;
        }

        @Override // java.lang.annotation.Annotation
        public int hashCode() {
            return (14552422 ^ this.f7622b) + (this.f7623c.hashCode() ^ 2041407134);
        }

        @Override // cj.d
        public d.a intEncoding() {
            return this.f7623c;
        }

        @Override // cj.d
        public int tag() {
            return this.f7622b;
        }

        @Override // java.lang.annotation.Annotation
        public String toString() {
            return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f7622b + "intEncoding=" + this.f7623c + ')';
        }
    }

    public static a b() {
        return new a();
    }

    public d a() {
        return new C0152a(this.f7620a, this.f7621b);
    }

    public a c(int i10) {
        this.f7620a = i10;
        return this;
    }
}
