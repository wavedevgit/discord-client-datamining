package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f55161a;

    /* renamed from: b  reason: collision with root package name */
    private final long f55162b;

    /* renamed from: c  reason: collision with root package name */
    private final k f55163c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f55164d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55165e;

    /* renamed from: f  reason: collision with root package name */
    private final List f55166f;

    /* renamed from: g  reason: collision with root package name */
    private final p f55167g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f55168a;

        /* renamed from: b  reason: collision with root package name */
        private Long f55169b;

        /* renamed from: c  reason: collision with root package name */
        private k f55170c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f55171d;

        /* renamed from: e  reason: collision with root package name */
        private String f55172e;

        /* renamed from: f  reason: collision with root package name */
        private List f55173f;

        /* renamed from: g  reason: collision with root package name */
        private p f55174g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f55168a == null) {
                str = " requestTimeMs";
            }
            if (this.f55169b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f55168a.longValue(), this.f55169b.longValue(), this.f55170c, this.f55171d, this.f55172e, this.f55173f, this.f55174g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f55170c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f55173f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f55171d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f55172e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f55174g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f55168a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f55169b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f55163c;
    }

    @Override // yb.m
    public List c() {
        return this.f55166f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f55164d;
    }

    @Override // yb.m
    public String e() {
        return this.f55165e;
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
            if (this.f55161a == mVar.g() && this.f55162b == mVar.h() && ((kVar = this.f55163c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f55164d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f55165e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f55166f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f55167g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f55167g;
    }

    @Override // yb.m
    public long g() {
        return this.f55161a;
    }

    @Override // yb.m
    public long h() {
        return this.f55162b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f55161a;
        long j11 = this.f55162b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f55163c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f55164d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f55165e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f55166f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f55167g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f55161a + ", requestUptimeMs=" + this.f55162b + ", clientInfo=" + this.f55163c + ", logSource=" + this.f55164d + ", logSourceName=" + this.f55165e + ", logEvents=" + this.f55166f + ", qosTier=" + this.f55167g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f55161a = j10;
        this.f55162b = j11;
        this.f55163c = kVar;
        this.f55164d = num;
        this.f55165e = str;
        this.f55166f = list;
        this.f55167g = pVar;
    }
}
