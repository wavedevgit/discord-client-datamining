package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f53910a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f53911b;

    /* renamed from: c  reason: collision with root package name */
    private final long f53912c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f53913d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53914e;

    /* renamed from: f  reason: collision with root package name */
    private final long f53915f;

    /* renamed from: g  reason: collision with root package name */
    private final o f53916g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f53917a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f53918b;

        /* renamed from: c  reason: collision with root package name */
        private Long f53919c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f53920d;

        /* renamed from: e  reason: collision with root package name */
        private String f53921e;

        /* renamed from: f  reason: collision with root package name */
        private Long f53922f;

        /* renamed from: g  reason: collision with root package name */
        private o f53923g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f53917a == null) {
                str = " eventTimeMs";
            }
            if (this.f53919c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f53922f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f53917a.longValue(), this.f53918b, this.f53919c.longValue(), this.f53920d, this.f53921e, this.f53922f.longValue(), this.f53923g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f53918b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f53917a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f53919c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f53923g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f53920d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f53921e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f53922f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f53911b;
    }

    @Override // yb.l
    public long c() {
        return this.f53910a;
    }

    @Override // yb.l
    public long d() {
        return this.f53912c;
    }

    @Override // yb.l
    public o e() {
        return this.f53916g;
    }

    public boolean equals(Object obj) {
        Integer num;
        byte[] f10;
        String str;
        o oVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (this.f53910a == lVar.c() && ((num = this.f53911b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f53912c == lVar.d()) {
                byte[] bArr = this.f53913d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f53913d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f53914e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f53915f == lVar.h() && ((oVar = this.f53916g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f53913d;
    }

    @Override // yb.l
    public String g() {
        return this.f53914e;
    }

    @Override // yb.l
    public long h() {
        return this.f53915f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f53910a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f53911b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f53912c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f53913d)) * 1000003;
        String str = this.f53914e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f53915f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f53916g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f53910a + ", eventCode=" + this.f53911b + ", eventUptimeMs=" + this.f53912c + ", sourceExtension=" + Arrays.toString(this.f53913d) + ", sourceExtensionJsonProto3=" + this.f53914e + ", timezoneOffsetSeconds=" + this.f53915f + ", networkConnectionInfo=" + this.f53916g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f53910a = j10;
        this.f53911b = num;
        this.f53912c = j11;
        this.f53913d = bArr;
        this.f53914e = str;
        this.f53915f = j12;
        this.f53916g = oVar;
    }
}
