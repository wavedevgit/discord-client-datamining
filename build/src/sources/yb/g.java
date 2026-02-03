package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f53924a;

    /* renamed from: b  reason: collision with root package name */
    private final long f53925b;

    /* renamed from: c  reason: collision with root package name */
    private final k f53926c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f53927d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53928e;

    /* renamed from: f  reason: collision with root package name */
    private final List f53929f;

    /* renamed from: g  reason: collision with root package name */
    private final p f53930g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f53931a;

        /* renamed from: b  reason: collision with root package name */
        private Long f53932b;

        /* renamed from: c  reason: collision with root package name */
        private k f53933c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f53934d;

        /* renamed from: e  reason: collision with root package name */
        private String f53935e;

        /* renamed from: f  reason: collision with root package name */
        private List f53936f;

        /* renamed from: g  reason: collision with root package name */
        private p f53937g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f53931a == null) {
                str = " requestTimeMs";
            }
            if (this.f53932b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f53931a.longValue(), this.f53932b.longValue(), this.f53933c, this.f53934d, this.f53935e, this.f53936f, this.f53937g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f53933c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f53936f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f53934d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f53935e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f53937g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f53931a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f53932b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f53926c;
    }

    @Override // yb.m
    public List c() {
        return this.f53929f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f53927d;
    }

    @Override // yb.m
    public String e() {
        return this.f53928e;
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
            if (this.f53924a == mVar.g() && this.f53925b == mVar.h() && ((kVar = this.f53926c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f53927d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f53928e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f53929f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f53930g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f53930g;
    }

    @Override // yb.m
    public long g() {
        return this.f53924a;
    }

    @Override // yb.m
    public long h() {
        return this.f53925b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f53924a;
        long j11 = this.f53925b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f53926c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f53927d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f53928e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f53929f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f53930g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f53924a + ", requestUptimeMs=" + this.f53925b + ", clientInfo=" + this.f53926c + ", logSource=" + this.f53927d + ", logSourceName=" + this.f53928e + ", logEvents=" + this.f53929f + ", qosTier=" + this.f53930g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f53924a = j10;
        this.f53925b = j11;
        this.f53926c = kVar;
        this.f53927d = num;
        this.f53928e = str;
        this.f53929f = list;
        this.f53930g = pVar;
    }
}
