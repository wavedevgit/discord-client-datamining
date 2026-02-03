package zb;

import java.util.Arrays;
import zb.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends o {

    /* renamed from: a  reason: collision with root package name */
    private final String f55614a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f55615b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.e f55616c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends o.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55617a;

        /* renamed from: b  reason: collision with root package name */
        private byte[] f55618b;

        /* renamed from: c  reason: collision with root package name */
        private xb.e f55619c;

        @Override // zb.o.a
        public o a() {
            String str = "";
            if (this.f55617a == null) {
                str = " backendName";
            }
            if (this.f55619c == null) {
                str = str + " priority";
            }
            if (str.isEmpty()) {
                return new d(this.f55617a, this.f55618b, this.f55619c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.o.a
        public o.a b(String str) {
            if (str != null) {
                this.f55617a = str;
                return this;
            }
            throw new NullPointerException("Null backendName");
        }

        @Override // zb.o.a
        public o.a c(byte[] bArr) {
            this.f55618b = bArr;
            return this;
        }

        @Override // zb.o.a
        public o.a d(xb.e eVar) {
            if (eVar != null) {
                this.f55619c = eVar;
                return this;
            }
            throw new NullPointerException("Null priority");
        }
    }

    @Override // zb.o
    public String b() {
        return this.f55614a;
    }

    @Override // zb.o
    public byte[] c() {
        return this.f55615b;
    }

    @Override // zb.o
    public xb.e d() {
        return this.f55616c;
    }

    public boolean equals(Object obj) {
        byte[] c10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f55614a.equals(oVar.b())) {
                byte[] bArr = this.f55615b;
                if (oVar instanceof d) {
                    c10 = ((d) oVar).f55615b;
                } else {
                    c10 = oVar.c();
                }
                if (Arrays.equals(bArr, c10) && this.f55616c.equals(oVar.d())) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f55614a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f55615b)) * 1000003) ^ this.f55616c.hashCode();
    }

    private d(String str, byte[] bArr, xb.e eVar) {
        this.f55614a = str;
        this.f55615b = bArr;
        this.f55616c = eVar;
    }
}
