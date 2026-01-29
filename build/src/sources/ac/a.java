package ac;

import ac.f;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Iterable f447a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f448b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private Iterable f449a;

        /* renamed from: b  reason: collision with root package name */
        private byte[] f450b;

        @Override // ac.f.a
        public f a() {
            String str = "";
            if (this.f449a == null) {
                str = " events";
            }
            if (str.isEmpty()) {
                return new a(this.f449a, this.f450b);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ac.f.a
        public f.a b(Iterable iterable) {
            if (iterable != null) {
                this.f449a = iterable;
                return this;
            }
            throw new NullPointerException("Null events");
        }

        @Override // ac.f.a
        public f.a c(byte[] bArr) {
            this.f450b = bArr;
            return this;
        }
    }

    @Override // ac.f
    public Iterable b() {
        return this.f447a;
    }

    @Override // ac.f
    public byte[] c() {
        return this.f448b;
    }

    public boolean equals(Object obj) {
        byte[] c10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f447a.equals(fVar.b())) {
                byte[] bArr = this.f448b;
                if (fVar instanceof a) {
                    c10 = ((a) fVar).f448b;
                } else {
                    c10 = fVar.c();
                }
                if (Arrays.equals(bArr, c10)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f447a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f448b);
    }

    public String toString() {
        return "BackendRequest{events=" + this.f447a + ", extras=" + Arrays.toString(this.f448b) + "}";
    }

    private a(Iterable iterable, byte[] bArr) {
        this.f447a = iterable;
        this.f448b = bArr;
    }
}
