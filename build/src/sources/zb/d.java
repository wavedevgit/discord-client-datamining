package zb;

import java.util.Arrays;
import zb.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends o {

    /* renamed from: a  reason: collision with root package name */
    private final String f55482a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f55483b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.e f55484c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends o.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55485a;

        /* renamed from: b  reason: collision with root package name */
        private byte[] f55486b;

        /* renamed from: c  reason: collision with root package name */
        private xb.e f55487c;

        @Override // zb.o.a
        public o a() {
            String str = "";
            if (this.f55485a == null) {
                str = " backendName";
            }
            if (this.f55487c == null) {
                str = str + " priority";
            }
            if (str.isEmpty()) {
                return new d(this.f55485a, this.f55486b, this.f55487c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.o.a
        public o.a b(String str) {
            if (str != null) {
                this.f55485a = str;
                return this;
            }
            throw new NullPointerException("Null backendName");
        }

        @Override // zb.o.a
        public o.a c(byte[] bArr) {
            this.f55486b = bArr;
            return this;
        }

        @Override // zb.o.a
        public o.a d(xb.e eVar) {
            if (eVar != null) {
                this.f55487c = eVar;
                return this;
            }
            throw new NullPointerException("Null priority");
        }
    }

    @Override // zb.o
    public String b() {
        return this.f55482a;
    }

    @Override // zb.o
    public byte[] c() {
        return this.f55483b;
    }

    @Override // zb.o
    public xb.e d() {
        return this.f55484c;
    }

    public boolean equals(Object obj) {
        byte[] c10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f55482a.equals(oVar.b())) {
                byte[] bArr = this.f55483b;
                if (oVar instanceof d) {
                    c10 = ((d) oVar).f55483b;
                } else {
                    c10 = oVar.c();
                }
                if (Arrays.equals(bArr, c10) && this.f55484c.equals(oVar.d())) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f55482a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f55483b)) * 1000003) ^ this.f55484c.hashCode();
    }

    private d(String str, byte[] bArr, xb.e eVar) {
        this.f55482a = str;
        this.f55483b = bArr;
        this.f55484c = eVar;
    }
}
