package zb;

import java.util.Arrays;
import zb.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends o {

    /* renamed from: a  reason: collision with root package name */
    private final String f56117a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f56118b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.e f56119c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends o.a {

        /* renamed from: a  reason: collision with root package name */
        private String f56120a;

        /* renamed from: b  reason: collision with root package name */
        private byte[] f56121b;

        /* renamed from: c  reason: collision with root package name */
        private xb.e f56122c;

        @Override // zb.o.a
        public o a() {
            String str = "";
            if (this.f56120a == null) {
                str = " backendName";
            }
            if (this.f56122c == null) {
                str = str + " priority";
            }
            if (str.isEmpty()) {
                return new d(this.f56120a, this.f56121b, this.f56122c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.o.a
        public o.a b(String str) {
            if (str != null) {
                this.f56120a = str;
                return this;
            }
            throw new NullPointerException("Null backendName");
        }

        @Override // zb.o.a
        public o.a c(byte[] bArr) {
            this.f56121b = bArr;
            return this;
        }

        @Override // zb.o.a
        public o.a d(xb.e eVar) {
            if (eVar != null) {
                this.f56122c = eVar;
                return this;
            }
            throw new NullPointerException("Null priority");
        }
    }

    @Override // zb.o
    public String b() {
        return this.f56117a;
    }

    @Override // zb.o
    public byte[] c() {
        return this.f56118b;
    }

    @Override // zb.o
    public xb.e d() {
        return this.f56119c;
    }

    public boolean equals(Object obj) {
        byte[] c10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f56117a.equals(oVar.b())) {
                byte[] bArr = this.f56118b;
                if (oVar instanceof d) {
                    c10 = ((d) oVar).f56118b;
                } else {
                    c10 = oVar.c();
                }
                if (Arrays.equals(bArr, c10) && this.f56119c.equals(oVar.d())) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f56117a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f56118b)) * 1000003) ^ this.f56119c.hashCode();
    }

    private d(String str, byte[] bArr, xb.e eVar) {
        this.f56117a = str;
        this.f56118b = bArr;
        this.f56119c = eVar;
    }
}
