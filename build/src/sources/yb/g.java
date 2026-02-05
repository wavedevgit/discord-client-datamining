package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f54617a;

    /* renamed from: b  reason: collision with root package name */
    private final long f54618b;

    /* renamed from: c  reason: collision with root package name */
    private final k f54619c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f54620d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54621e;

    /* renamed from: f  reason: collision with root package name */
    private final List f54622f;

    /* renamed from: g  reason: collision with root package name */
    private final p f54623g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54624a;

        /* renamed from: b  reason: collision with root package name */
        private Long f54625b;

        /* renamed from: c  reason: collision with root package name */
        private k f54626c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f54627d;

        /* renamed from: e  reason: collision with root package name */
        private String f54628e;

        /* renamed from: f  reason: collision with root package name */
        private List f54629f;

        /* renamed from: g  reason: collision with root package name */
        private p f54630g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f54624a == null) {
                str = " requestTimeMs";
            }
            if (this.f54625b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f54624a.longValue(), this.f54625b.longValue(), this.f54626c, this.f54627d, this.f54628e, this.f54629f, this.f54630g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f54626c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f54629f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f54627d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f54628e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f54630g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f54624a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f54625b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f54619c;
    }

    @Override // yb.m
    public List c() {
        return this.f54622f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f54620d;
    }

    @Override // yb.m
    public String e() {
        return this.f54621e;
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
            if (this.f54617a == mVar.g() && this.f54618b == mVar.h() && ((kVar = this.f54619c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f54620d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f54621e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f54622f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f54623g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f54623g;
    }

    @Override // yb.m
    public long g() {
        return this.f54617a;
    }

    @Override // yb.m
    public long h() {
        return this.f54618b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f54617a;
        long j11 = this.f54618b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f54619c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f54620d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f54621e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f54622f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f54623g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f54617a + ", requestUptimeMs=" + this.f54618b + ", clientInfo=" + this.f54619c + ", logSource=" + this.f54620d + ", logSourceName=" + this.f54621e + ", logEvents=" + this.f54622f + ", qosTier=" + this.f54623g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f54617a = j10;
        this.f54618b = j11;
        this.f54619c = kVar;
        this.f54620d = num;
        this.f54621e = str;
        this.f54622f = list;
        this.f54623g = pVar;
    }
}
