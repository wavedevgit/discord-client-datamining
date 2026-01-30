package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f54191a;

    /* renamed from: b  reason: collision with root package name */
    private final long f54192b;

    /* renamed from: c  reason: collision with root package name */
    private final k f54193c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f54194d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54195e;

    /* renamed from: f  reason: collision with root package name */
    private final List f54196f;

    /* renamed from: g  reason: collision with root package name */
    private final p f54197g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54198a;

        /* renamed from: b  reason: collision with root package name */
        private Long f54199b;

        /* renamed from: c  reason: collision with root package name */
        private k f54200c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f54201d;

        /* renamed from: e  reason: collision with root package name */
        private String f54202e;

        /* renamed from: f  reason: collision with root package name */
        private List f54203f;

        /* renamed from: g  reason: collision with root package name */
        private p f54204g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f54198a == null) {
                str = " requestTimeMs";
            }
            if (this.f54199b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f54198a.longValue(), this.f54199b.longValue(), this.f54200c, this.f54201d, this.f54202e, this.f54203f, this.f54204g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f54200c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f54203f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f54201d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f54202e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f54204g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f54198a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f54199b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f54193c;
    }

    @Override // yb.m
    public List c() {
        return this.f54196f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f54194d;
    }

    @Override // yb.m
    public String e() {
        return this.f54195e;
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
            if (this.f54191a == mVar.g() && this.f54192b == mVar.h() && ((kVar = this.f54193c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f54194d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f54195e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f54196f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f54197g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f54197g;
    }

    @Override // yb.m
    public long g() {
        return this.f54191a;
    }

    @Override // yb.m
    public long h() {
        return this.f54192b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f54191a;
        long j11 = this.f54192b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f54193c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f54194d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f54195e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f54196f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f54197g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f54191a + ", requestUptimeMs=" + this.f54192b + ", clientInfo=" + this.f54193c + ", logSource=" + this.f54194d + ", logSourceName=" + this.f54195e + ", logEvents=" + this.f54196f + ", qosTier=" + this.f54197g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f54191a = j10;
        this.f54192b = j11;
        this.f54193c = kVar;
        this.f54194d = num;
        this.f54195e = str;
        this.f54196f = list;
        this.f54197g = pVar;
    }
}
