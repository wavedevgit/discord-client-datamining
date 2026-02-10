package zb;

import java.util.Arrays;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f56259a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f56260b;

    /* renamed from: c  reason: collision with root package name */
    private final long f56261c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f56262d;

    /* renamed from: e  reason: collision with root package name */
    private final String f56263e;

    /* renamed from: f  reason: collision with root package name */
    private final long f56264f;

    /* renamed from: g  reason: collision with root package name */
    private final o f56265g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f56266a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f56267b;

        /* renamed from: c  reason: collision with root package name */
        private Long f56268c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f56269d;

        /* renamed from: e  reason: collision with root package name */
        private String f56270e;

        /* renamed from: f  reason: collision with root package name */
        private Long f56271f;

        /* renamed from: g  reason: collision with root package name */
        private o f56272g;

        @Override // zb.l.a
        public l a() {
            String str = "";
            if (this.f56266a == null) {
                str = " eventTimeMs";
            }
            if (this.f56268c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f56271f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f56266a.longValue(), this.f56267b, this.f56268c.longValue(), this.f56269d, this.f56270e, this.f56271f.longValue(), this.f56272g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.l.a
        public l.a b(Integer num) {
            this.f56267b = num;
            return this;
        }

        @Override // zb.l.a
        public l.a c(long j10) {
            this.f56266a = Long.valueOf(j10);
            return this;
        }

        @Override // zb.l.a
        public l.a d(long j10) {
            this.f56268c = Long.valueOf(j10);
            return this;
        }

        @Override // zb.l.a
        public l.a e(o oVar) {
            this.f56272g = oVar;
            return this;
        }

        @Override // zb.l.a
        l.a f(byte[] bArr) {
            this.f56269d = bArr;
            return this;
        }

        @Override // zb.l.a
        l.a g(String str) {
            this.f56270e = str;
            return this;
        }

        @Override // zb.l.a
        public l.a h(long j10) {
            this.f56271f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // zb.l
    public Integer b() {
        return this.f56260b;
    }

    @Override // zb.l
    public long c() {
        return this.f56259a;
    }

    @Override // zb.l
    public long d() {
        return this.f56261c;
    }

    @Override // zb.l
    public o e() {
        return this.f56265g;
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
            if (this.f56259a == lVar.c() && ((num = this.f56260b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f56261c == lVar.d()) {
                byte[] bArr = this.f56262d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f56262d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f56263e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f56264f == lVar.h() && ((oVar = this.f56265g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // zb.l
    public byte[] f() {
        return this.f56262d;
    }

    @Override // zb.l
    public String g() {
        return this.f56263e;
    }

    @Override // zb.l
    public long h() {
        return this.f56264f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f56259a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f56260b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f56261c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f56262d)) * 1000003;
        String str = this.f56263e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f56264f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f56265g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f56259a + ", eventCode=" + this.f56260b + ", eventUptimeMs=" + this.f56261c + ", sourceExtension=" + Arrays.toString(this.f56262d) + ", sourceExtensionJsonProto3=" + this.f56263e + ", timezoneOffsetSeconds=" + this.f56264f + ", networkConnectionInfo=" + this.f56265g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f56259a = j10;
        this.f56260b = num;
        this.f56261c = j11;
        this.f56262d = bArr;
        this.f56263e = str;
        this.f56264f = j12;
        this.f56265g = oVar;
    }
}
