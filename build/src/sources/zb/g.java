package zb;

import java.util.List;
import zb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f56274a;

    /* renamed from: b  reason: collision with root package name */
    private final long f56275b;

    /* renamed from: c  reason: collision with root package name */
    private final k f56276c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f56277d;

    /* renamed from: e  reason: collision with root package name */
    private final String f56278e;

    /* renamed from: f  reason: collision with root package name */
    private final List f56279f;

    /* renamed from: g  reason: collision with root package name */
    private final p f56280g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f56281a;

        /* renamed from: b  reason: collision with root package name */
        private Long f56282b;

        /* renamed from: c  reason: collision with root package name */
        private k f56283c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f56284d;

        /* renamed from: e  reason: collision with root package name */
        private String f56285e;

        /* renamed from: f  reason: collision with root package name */
        private List f56286f;

        /* renamed from: g  reason: collision with root package name */
        private p f56287g;

        @Override // zb.m.a
        public m a() {
            String str = "";
            if (this.f56281a == null) {
                str = " requestTimeMs";
            }
            if (this.f56282b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f56281a.longValue(), this.f56282b.longValue(), this.f56283c, this.f56284d, this.f56285e, this.f56286f, this.f56287g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.m.a
        public m.a b(k kVar) {
            this.f56283c = kVar;
            return this;
        }

        @Override // zb.m.a
        public m.a c(List list) {
            this.f56286f = list;
            return this;
        }

        @Override // zb.m.a
        m.a d(Integer num) {
            this.f56284d = num;
            return this;
        }

        @Override // zb.m.a
        m.a e(String str) {
            this.f56285e = str;
            return this;
        }

        @Override // zb.m.a
        public m.a f(p pVar) {
            this.f56287g = pVar;
            return this;
        }

        @Override // zb.m.a
        public m.a g(long j10) {
            this.f56281a = Long.valueOf(j10);
            return this;
        }

        @Override // zb.m.a
        public m.a h(long j10) {
            this.f56282b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // zb.m
    public k b() {
        return this.f56276c;
    }

    @Override // zb.m
    public List c() {
        return this.f56279f;
    }

    @Override // zb.m
    public Integer d() {
        return this.f56277d;
    }

    @Override // zb.m
    public String e() {
        return this.f56278e;
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
            if (this.f56274a == mVar.g() && this.f56275b == mVar.h() && ((kVar = this.f56276c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f56277d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f56278e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f56279f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f56280g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.m
    public p f() {
        return this.f56280g;
    }

    @Override // zb.m
    public long g() {
        return this.f56274a;
    }

    @Override // zb.m
    public long h() {
        return this.f56275b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f56274a;
        long j11 = this.f56275b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f56276c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f56277d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f56278e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f56279f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f56280g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f56274a + ", requestUptimeMs=" + this.f56275b + ", clientInfo=" + this.f56276c + ", logSource=" + this.f56277d + ", logSourceName=" + this.f56278e + ", logEvents=" + this.f56279f + ", qosTier=" + this.f56280g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f56274a = j10;
        this.f56275b = j11;
        this.f56276c = kVar;
        this.f56277d = num;
        this.f56278e = str;
        this.f56279f = list;
        this.f56280g = pVar;
    }
}
