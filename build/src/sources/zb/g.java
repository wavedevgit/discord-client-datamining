package zb;

import java.util.List;
import zb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f56842a;

    /* renamed from: b  reason: collision with root package name */
    private final long f56843b;

    /* renamed from: c  reason: collision with root package name */
    private final k f56844c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f56845d;

    /* renamed from: e  reason: collision with root package name */
    private final String f56846e;

    /* renamed from: f  reason: collision with root package name */
    private final List f56847f;

    /* renamed from: g  reason: collision with root package name */
    private final p f56848g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f56849a;

        /* renamed from: b  reason: collision with root package name */
        private Long f56850b;

        /* renamed from: c  reason: collision with root package name */
        private k f56851c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f56852d;

        /* renamed from: e  reason: collision with root package name */
        private String f56853e;

        /* renamed from: f  reason: collision with root package name */
        private List f56854f;

        /* renamed from: g  reason: collision with root package name */
        private p f56855g;

        @Override // zb.m.a
        public m a() {
            String str = "";
            if (this.f56849a == null) {
                str = " requestTimeMs";
            }
            if (this.f56850b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f56849a.longValue(), this.f56850b.longValue(), this.f56851c, this.f56852d, this.f56853e, this.f56854f, this.f56855g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.m.a
        public m.a b(k kVar) {
            this.f56851c = kVar;
            return this;
        }

        @Override // zb.m.a
        public m.a c(List list) {
            this.f56854f = list;
            return this;
        }

        @Override // zb.m.a
        m.a d(Integer num) {
            this.f56852d = num;
            return this;
        }

        @Override // zb.m.a
        m.a e(String str) {
            this.f56853e = str;
            return this;
        }

        @Override // zb.m.a
        public m.a f(p pVar) {
            this.f56855g = pVar;
            return this;
        }

        @Override // zb.m.a
        public m.a g(long j10) {
            this.f56849a = Long.valueOf(j10);
            return this;
        }

        @Override // zb.m.a
        public m.a h(long j10) {
            this.f56850b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // zb.m
    public k b() {
        return this.f56844c;
    }

    @Override // zb.m
    public List c() {
        return this.f56847f;
    }

    @Override // zb.m
    public Integer d() {
        return this.f56845d;
    }

    @Override // zb.m
    public String e() {
        return this.f56846e;
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
            if (this.f56842a == mVar.g() && this.f56843b == mVar.h() && ((kVar = this.f56844c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f56845d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f56846e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f56847f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f56848g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.m
    public p f() {
        return this.f56848g;
    }

    @Override // zb.m
    public long g() {
        return this.f56842a;
    }

    @Override // zb.m
    public long h() {
        return this.f56843b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f56842a;
        long j11 = this.f56843b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f56844c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f56845d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f56846e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f56847f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f56848g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f56842a + ", requestUptimeMs=" + this.f56843b + ", clientInfo=" + this.f56844c + ", logSource=" + this.f56845d + ", logSourceName=" + this.f56846e + ", logEvents=" + this.f56847f + ", qosTier=" + this.f56848g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f56842a = j10;
        this.f56843b = j11;
        this.f56844c = kVar;
        this.f56845d = num;
        this.f56846e = str;
        this.f56847f = list;
        this.f56848g = pVar;
    }
}
