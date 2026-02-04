package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f53921a;

    /* renamed from: b  reason: collision with root package name */
    private final long f53922b;

    /* renamed from: c  reason: collision with root package name */
    private final k f53923c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f53924d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53925e;

    /* renamed from: f  reason: collision with root package name */
    private final List f53926f;

    /* renamed from: g  reason: collision with root package name */
    private final p f53927g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f53928a;

        /* renamed from: b  reason: collision with root package name */
        private Long f53929b;

        /* renamed from: c  reason: collision with root package name */
        private k f53930c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f53931d;

        /* renamed from: e  reason: collision with root package name */
        private String f53932e;

        /* renamed from: f  reason: collision with root package name */
        private List f53933f;

        /* renamed from: g  reason: collision with root package name */
        private p f53934g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f53928a == null) {
                str = " requestTimeMs";
            }
            if (this.f53929b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f53928a.longValue(), this.f53929b.longValue(), this.f53930c, this.f53931d, this.f53932e, this.f53933f, this.f53934g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f53930c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f53933f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f53931d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f53932e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f53934g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f53928a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f53929b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f53923c;
    }

    @Override // yb.m
    public List c() {
        return this.f53926f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f53924d;
    }

    @Override // yb.m
    public String e() {
        return this.f53925e;
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
            if (this.f53921a == mVar.g() && this.f53922b == mVar.h() && ((kVar = this.f53923c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f53924d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f53925e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f53926f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f53927g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f53927g;
    }

    @Override // yb.m
    public long g() {
        return this.f53921a;
    }

    @Override // yb.m
    public long h() {
        return this.f53922b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f53921a;
        long j11 = this.f53922b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f53923c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f53924d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f53925e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f53926f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f53927g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f53921a + ", requestUptimeMs=" + this.f53922b + ", clientInfo=" + this.f53923c + ", logSource=" + this.f53924d + ", logSourceName=" + this.f53925e + ", logEvents=" + this.f53926f + ", qosTier=" + this.f53927g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f53921a = j10;
        this.f53922b = j11;
        this.f53923c = kVar;
        this.f53924d = num;
        this.f53925e = str;
        this.f53926f = list;
        this.f53927g = pVar;
    }
}
