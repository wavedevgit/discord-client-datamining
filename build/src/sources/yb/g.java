package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f54175a;

    /* renamed from: b  reason: collision with root package name */
    private final long f54176b;

    /* renamed from: c  reason: collision with root package name */
    private final k f54177c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f54178d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54179e;

    /* renamed from: f  reason: collision with root package name */
    private final List f54180f;

    /* renamed from: g  reason: collision with root package name */
    private final p f54181g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54182a;

        /* renamed from: b  reason: collision with root package name */
        private Long f54183b;

        /* renamed from: c  reason: collision with root package name */
        private k f54184c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f54185d;

        /* renamed from: e  reason: collision with root package name */
        private String f54186e;

        /* renamed from: f  reason: collision with root package name */
        private List f54187f;

        /* renamed from: g  reason: collision with root package name */
        private p f54188g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f54182a == null) {
                str = " requestTimeMs";
            }
            if (this.f54183b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f54182a.longValue(), this.f54183b.longValue(), this.f54184c, this.f54185d, this.f54186e, this.f54187f, this.f54188g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f54184c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f54187f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f54185d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f54186e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f54188g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f54182a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f54183b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f54177c;
    }

    @Override // yb.m
    public List c() {
        return this.f54180f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f54178d;
    }

    @Override // yb.m
    public String e() {
        return this.f54179e;
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
            if (this.f54175a == mVar.g() && this.f54176b == mVar.h() && ((kVar = this.f54177c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f54178d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f54179e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f54180f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f54181g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f54181g;
    }

    @Override // yb.m
    public long g() {
        return this.f54175a;
    }

    @Override // yb.m
    public long h() {
        return this.f54176b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f54175a;
        long j11 = this.f54176b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f54177c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f54178d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f54179e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f54180f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f54181g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f54175a + ", requestUptimeMs=" + this.f54176b + ", clientInfo=" + this.f54177c + ", logSource=" + this.f54178d + ", logSourceName=" + this.f54179e + ", logEvents=" + this.f54180f + ", qosTier=" + this.f54181g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f54175a = j10;
        this.f54176b = j11;
        this.f54177c = kVar;
        this.f54178d = num;
        this.f54179e = str;
        this.f54180f = list;
        this.f54181g = pVar;
    }
}
