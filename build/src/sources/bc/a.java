package bc;

import bc.f;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final Iterable f6541a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f6542b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private Iterable f6543a;

        /* renamed from: b  reason: collision with root package name */
        private byte[] f6544b;

        @Override // bc.f.a
        public f a() {
            String str = "";
            if (this.f6543a == null) {
                str = " events";
            }
            if (str.isEmpty()) {
                return new a(this.f6543a, this.f6544b);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // bc.f.a
        public f.a b(Iterable iterable) {
            if (iterable != null) {
                this.f6543a = iterable;
                return this;
            }
            throw new NullPointerException("Null events");
        }

        @Override // bc.f.a
        public f.a c(byte[] bArr) {
            this.f6544b = bArr;
            return this;
        }
    }

    @Override // bc.f
    public Iterable b() {
        return this.f6541a;
    }

    @Override // bc.f
    public byte[] c() {
        return this.f6542b;
    }

    public boolean equals(Object obj) {
        byte[] c10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f6541a.equals(fVar.b())) {
                byte[] bArr = this.f6542b;
                if (fVar instanceof a) {
                    c10 = ((a) fVar).f6542b;
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
        return ((this.f6541a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f6542b);
    }

    public String toString() {
        return "BackendRequest{events=" + this.f6541a + ", extras=" + Arrays.toString(this.f6542b) + "}";
    }

    private a(Iterable iterable, byte[] bArr) {
        this.f6541a = iterable;
        this.f6542b = bArr;
    }
}
