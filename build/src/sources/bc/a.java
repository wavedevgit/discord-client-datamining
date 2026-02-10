package bc;

import bc.f;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Iterable f6435a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f6436b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private Iterable f6437a;

        /* renamed from: b  reason: collision with root package name */
        private byte[] f6438b;

        @Override // bc.f.a
        public f a() {
            String str = "";
            if (this.f6437a == null) {
                str = " events";
            }
            if (str.isEmpty()) {
                return new a(this.f6437a, this.f6438b);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // bc.f.a
        public f.a b(Iterable iterable) {
            if (iterable != null) {
                this.f6437a = iterable;
                return this;
            }
            throw new NullPointerException("Null events");
        }

        @Override // bc.f.a
        public f.a c(byte[] bArr) {
            this.f6438b = bArr;
            return this;
        }
    }

    @Override // bc.f
    public Iterable b() {
        return this.f6435a;
    }

    @Override // bc.f
    public byte[] c() {
        return this.f6436b;
    }

    public boolean equals(Object obj) {
        byte[] c10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f6435a.equals(fVar.b())) {
                byte[] bArr = this.f6436b;
                if (fVar instanceof a) {
                    c10 = ((a) fVar).f6436b;
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
        return ((this.f6435a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f6436b);
    }

    public String toString() {
        return "BackendRequest{events=" + this.f6435a + ", extras=" + Arrays.toString(this.f6436b) + "}";
    }

    private a(Iterable iterable, byte[] bArr) {
        this.f6435a = iterable;
        this.f6436b = bArr;
    }
}
