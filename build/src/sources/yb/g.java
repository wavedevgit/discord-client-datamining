package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f55209a;

    /* renamed from: b  reason: collision with root package name */
    private final long f55210b;

    /* renamed from: c  reason: collision with root package name */
    private final k f55211c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f55212d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55213e;

    /* renamed from: f  reason: collision with root package name */
    private final List f55214f;

    /* renamed from: g  reason: collision with root package name */
    private final p f55215g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f55216a;

        /* renamed from: b  reason: collision with root package name */
        private Long f55217b;

        /* renamed from: c  reason: collision with root package name */
        private k f55218c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f55219d;

        /* renamed from: e  reason: collision with root package name */
        private String f55220e;

        /* renamed from: f  reason: collision with root package name */
        private List f55221f;

        /* renamed from: g  reason: collision with root package name */
        private p f55222g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f55216a == null) {
                str = " requestTimeMs";
            }
            if (this.f55217b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f55216a.longValue(), this.f55217b.longValue(), this.f55218c, this.f55219d, this.f55220e, this.f55221f, this.f55222g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f55218c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f55221f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f55219d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f55220e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f55222g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f55216a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f55217b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f55211c;
    }

    @Override // yb.m
    public List c() {
        return this.f55214f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f55212d;
    }

    @Override // yb.m
    public String e() {
        return this.f55213e;
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
            if (this.f55209a == mVar.g() && this.f55210b == mVar.h() && ((kVar = this.f55211c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f55212d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f55213e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f55214f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f55215g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f55215g;
    }

    @Override // yb.m
    public long g() {
        return this.f55209a;
    }

    @Override // yb.m
    public long h() {
        return this.f55210b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f55209a;
        long j11 = this.f55210b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f55211c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f55212d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f55213e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f55214f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f55215g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f55209a + ", requestUptimeMs=" + this.f55210b + ", clientInfo=" + this.f55211c + ", logSource=" + this.f55212d + ", logSourceName=" + this.f55213e + ", logEvents=" + this.f55214f + ", qosTier=" + this.f55215g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f55209a = j10;
        this.f55210b = j11;
        this.f55211c = kVar;
        this.f55212d = num;
        this.f55213e = str;
        this.f55214f = list;
        this.f55215g = pVar;
    }
}
