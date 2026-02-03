package yb;

import java.util.List;
import yb.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g extends m {

    /* renamed from: a  reason: collision with root package name */
    private final long f54166a;

    /* renamed from: b  reason: collision with root package name */
    private final long f54167b;

    /* renamed from: c  reason: collision with root package name */
    private final k f54168c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f54169d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54170e;

    /* renamed from: f  reason: collision with root package name */
    private final List f54171f;

    /* renamed from: g  reason: collision with root package name */
    private final p f54172g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends m.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54173a;

        /* renamed from: b  reason: collision with root package name */
        private Long f54174b;

        /* renamed from: c  reason: collision with root package name */
        private k f54175c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f54176d;

        /* renamed from: e  reason: collision with root package name */
        private String f54177e;

        /* renamed from: f  reason: collision with root package name */
        private List f54178f;

        /* renamed from: g  reason: collision with root package name */
        private p f54179g;

        @Override // yb.m.a
        public m a() {
            String str = "";
            if (this.f54173a == null) {
                str = " requestTimeMs";
            }
            if (this.f54174b == null) {
                str = str + " requestUptimeMs";
            }
            if (str.isEmpty()) {
                return new g(this.f54173a.longValue(), this.f54174b.longValue(), this.f54175c, this.f54176d, this.f54177e, this.f54178f, this.f54179g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.m.a
        public m.a b(k kVar) {
            this.f54175c = kVar;
            return this;
        }

        @Override // yb.m.a
        public m.a c(List list) {
            this.f54178f = list;
            return this;
        }

        @Override // yb.m.a
        m.a d(Integer num) {
            this.f54176d = num;
            return this;
        }

        @Override // yb.m.a
        m.a e(String str) {
            this.f54177e = str;
            return this;
        }

        @Override // yb.m.a
        public m.a f(p pVar) {
            this.f54179g = pVar;
            return this;
        }

        @Override // yb.m.a
        public m.a g(long j10) {
            this.f54173a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.m.a
        public m.a h(long j10) {
            this.f54174b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.m
    public k b() {
        return this.f54168c;
    }

    @Override // yb.m
    public List c() {
        return this.f54171f;
    }

    @Override // yb.m
    public Integer d() {
        return this.f54169d;
    }

    @Override // yb.m
    public String e() {
        return this.f54170e;
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
            if (this.f54166a == mVar.g() && this.f54167b == mVar.h() && ((kVar = this.f54168c) != null ? kVar.equals(mVar.b()) : mVar.b() == null) && ((num = this.f54169d) != null ? num.equals(mVar.d()) : mVar.d() == null) && ((str = this.f54170e) != null ? str.equals(mVar.e()) : mVar.e() == null) && ((list = this.f54171f) != null ? list.equals(mVar.c()) : mVar.c() == null) && ((pVar = this.f54172g) != null ? pVar.equals(mVar.f()) : mVar.f() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // yb.m
    public p f() {
        return this.f54172g;
    }

    @Override // yb.m
    public long g() {
        return this.f54166a;
    }

    @Override // yb.m
    public long h() {
        return this.f54167b;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        long j10 = this.f54166a;
        long j11 = this.f54167b;
        int i10 = (((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003;
        k kVar = this.f54168c;
        int i11 = 0;
        if (kVar == null) {
            hashCode = 0;
        } else {
            hashCode = kVar.hashCode();
        }
        int i12 = (i10 ^ hashCode) * 1000003;
        Integer num = this.f54169d;
        if (num == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = num.hashCode();
        }
        int i13 = (i12 ^ hashCode2) * 1000003;
        String str = this.f54170e;
        if (str == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str.hashCode();
        }
        int i14 = (i13 ^ hashCode3) * 1000003;
        List list = this.f54171f;
        if (list == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = list.hashCode();
        }
        int i15 = (i14 ^ hashCode4) * 1000003;
        p pVar = this.f54172g;
        if (pVar != null) {
            i11 = pVar.hashCode();
        }
        return i15 ^ i11;
    }

    public String toString() {
        return "LogRequest{requestTimeMs=" + this.f54166a + ", requestUptimeMs=" + this.f54167b + ", clientInfo=" + this.f54168c + ", logSource=" + this.f54169d + ", logSourceName=" + this.f54170e + ", logEvents=" + this.f54171f + ", qosTier=" + this.f54172g + "}";
    }

    private g(long j10, long j11, k kVar, Integer num, String str, List list, p pVar) {
        this.f54166a = j10;
        this.f54167b = j11;
        this.f54168c = kVar;
        this.f54169d = num;
        this.f54170e = str;
        this.f54171f = list;
        this.f54172g = pVar;
    }
}
