package ej;

import ej.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private int f22863a;

    /* renamed from: b  reason: collision with root package name */
    private d.a f22864b = d.a.DEFAULT;

    /* renamed from: ej.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0303a implements d {

        /* renamed from: b  reason: collision with root package name */
        private final int f22865b;

        /* renamed from: c  reason: collision with root package name */
        private final d.a f22866c;

        C0303a(int i10, d.a aVar) {
            this.f22865b = i10;
            this.f22866c = aVar;
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
            if (this.f22865b == dVar.tag() && this.f22866c.equals(dVar.intEncoding())) {
                return true;
            }
            return false;
        }

        @Override // java.lang.annotation.Annotation
        public int hashCode() {
            return (14552422 ^ this.f22865b) + (this.f22866c.hashCode() ^ 2041407134);
        }

        @Override // ej.d
        public d.a intEncoding() {
            return this.f22866c;
        }

        @Override // ej.d
        public int tag() {
            return this.f22865b;
        }

        @Override // java.lang.annotation.Annotation
        public String toString() {
            return "@com.google.firebase.encoders.proto.Protobuf(tag=" + this.f22865b + "intEncoding=" + this.f22866c + ')';
        }
    }

    public static a b() {
        return new a();
    }

    public d a() {
        return new C0303a(this.f22863a, this.f22864b);
    }

    public a c(int i10) {
        this.f22863a = i10;
        return this;
    }
}
