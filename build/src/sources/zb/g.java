package zb;

import java.util.List;
import zb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f56234a;

    /* renamed from: b  reason: collision with root package name */
    private final long f56235b;

    /* renamed from: c  reason: collision with root package name */
    private final k f56236c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f56237d;

    /* renamed from: e  reason: collision with root package name */
    private final String f56238e;

    /* renamed from: f  reason: collision with root package name */
    private final List f56239f;

    /* renamed from: g  reason: collision with root package name */
    private final p f56240g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f56241a;

        /* renamed from: b  reason: collision with root package name */
        private Long f56242b;

        /* renamed from: c  reason: collision with root package name */
        private k f56243c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f56244d;

        /* renamed from: e  reason: collision with root package name */
        private String f56245e;

        /* renamed from: f  reason: collision with root package name */
        private List f56246f;

        /* renamed from: g  reason: collision with root package name */
        private p f56247g;

        @Override // zb.m.a
        public m a() {
            String str = "";
            if (this.f56241a == null) {
                str = " requestTimeMs";
            }
            if (this.f56242b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f56241a.longValue(), this.f56242b.longValue(), this.f56243c, this.f56244d, this.f56245e, this.f56246f, this.f56247g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.m.a
        public m.a b(k kVar) {
            this.f56243c = kVar;
            return this;
        }

        @Override // zb.m.a
        public m.a c(List list) {
            this.f56246f = list;
            return this;
        }

        @Override // zb.m.a
        m.a d(Integer num) {
            this.f56244d = num;
            return this;
        }

        @Override // zb.m.a
        m.a e(String str) {
            this.f56245e = str;
            return this;
        }

        @Override // zb.m.a
        public m.a f(p pVar) {
            this.f56247g = pVar;
            return this;
        }

        @Override // zb.m.a
        public m.a g(long j10) {
            this.f56241a = Long.valueOf(j10);
            return this;
        }

        @Override // zb.m.a
        public m.a h(long j10) {
            this.f56242b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // zb.m
    public k b() {
        return this.f56236c;
    }

    @Override // zb.m
    public List c() {
        return this.f56239f;
    }

    @Override // zb.m
    public Integer d() {
        return this.f56237d;
    }

    @Override // zb.m
    public String e() {
        return this.f56238e;
    }

    public boolean equals(Object obj) {
        k kVar;
        Integer num;
        String str;
        List list;
        p pVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            if (this.f56234a == mVar.g() && this.f56235b == mVar.h() && ((kVar = this.f56236c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f56237d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f56238e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f56239f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f56240g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.m
    public p f() {
        return this.f56240g;
    }

    @Override // zb.m
    public long g() {
        return this.f56234a;
    }

    @Override // zb.m
    public long h() {
        return this.f56235b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f56234a;
        long j11 = this.f56235b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f56236c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f56237d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f56238e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f56239f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f56240g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f56234a + ", requestUptimeMs=" + this.f56235b + ", clientInfo=" + this.f56236c + ", logSource=" + this.f56237d + ", logSourceName=" + this.f56238e + ", logEvents=" + this.f56239f + ", qosTier=" + this.f56240g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f56234a = j10;
        this.f56235b = j11;
        this.f56236c = kVar;
        this.f56237d = num;
        this.f56238e = str;
        this.f56239f = list;
        this.f56240g = pVar;
    }
}
