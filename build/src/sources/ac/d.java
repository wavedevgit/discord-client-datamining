package ac;

import ac.o;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends o {

    /* renamed from: a  reason: collision with root package name */
    private final String f585a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f586b;

    /* renamed from: c  reason: collision with root package name */
    private final yb.e f587c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends o.a {

        /* renamed from: a  reason: collision with root package name */
        private String f588a;

        /* renamed from: b  reason: collision with root package name */
        private byte[] f589b;

        /* renamed from: c  reason: collision with root package name */
        private yb.e f590c;

        @Override // ac.o.a
        public o a() {
            String str = "";
            if (this.f588a == null) {
                str = " backendName";
            }
            if (this.f590c == null) {
                str = str + " priority";
            }
            if (str.isEmpty()) {
                return new d(this.f588a, this.f589b, this.f590c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ac.o.a
        public o.a b(String str) {
            if (str != null) {
                this.f588a = str;
                return this;
            }
            throw new NullPointerException("Null backendName");
        }

        @Override // ac.o.a
        public o.a c(byte[] bArr) {
            this.f589b = bArr;
            return this;
        }

        @Override // ac.o.a
        public o.a d(yb.e eVar) {
            if (eVar != null) {
                this.f590c = eVar;
                return this;
            }
            throw new NullPointerException("Null priority");
        }
    }

    @Override // ac.o
    public String b() {
        return this.f585a;
    }

    @Override // ac.o
    public byte[] c() {
        return this.f586b;
    }

    @Override // ac.o
    public yb.e d() {
        return this.f587c;
    }

    public boolean equals(Object obj) {
        byte[] c10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f585a.equals(oVar.b())) {
                byte[] bArr = this.f586b;
                if (oVar instanceof d) {
                    c10 = ((d) oVar).f586b;
                } else {
                    c10 = oVar.c();
                }
                if (Arrays.equals(bArr, c10) && this.f587c.equals(oVar.d())) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f585a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f586b)) * 1000003) ^ this.f587c.hashCode();
    }

    private d(String str, byte[] bArr, yb.e eVar) {
        this.f585a = str;
        this.f586b = bArr;
        this.f587c = eVar;
    }
}
