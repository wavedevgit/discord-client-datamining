package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f54177a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f54178b;

    /* renamed from: c  reason: collision with root package name */
    private final long f54179c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f54180d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54181e;

    /* renamed from: f  reason: collision with root package name */
    private final long f54182f;

    /* renamed from: g  reason: collision with root package name */
    private final o f54183g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54184a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f54185b;

        /* renamed from: c  reason: collision with root package name */
        private Long f54186c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f54187d;

        /* renamed from: e  reason: collision with root package name */
        private String f54188e;

        /* renamed from: f  reason: collision with root package name */
        private Long f54189f;

        /* renamed from: g  reason: collision with root package name */
        private o f54190g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f54184a == null) {
                str = " eventTimeMs";
            }
            if (this.f54186c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f54189f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f54184a.longValue(), this.f54185b, this.f54186c.longValue(), this.f54187d, this.f54188e, this.f54189f.longValue(), this.f54190g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f54185b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f54184a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f54186c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f54190g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f54187d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f54188e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f54189f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f54178b;
    }

    @Override // yb.l
    public long c() {
        return this.f54177a;
    }

    @Override // yb.l
    public long d() {
        return this.f54179c;
    }

    @Override // yb.l
    public o e() {
        return this.f54183g;
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
            if (this.f54177a == lVar.c() && ((num = this.f54178b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f54179c == lVar.d()) {
                byte[] bArr = this.f54180d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f54180d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f54181e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f54182f == lVar.h() && ((oVar = this.f54183g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f54180d;
    }

    @Override // yb.l
    public String g() {
        return this.f54181e;
    }

    @Override // yb.l
    public long h() {
        return this.f54182f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f54177a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f54178b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f54179c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f54180d)) * 1000003;
        String str = this.f54181e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f54182f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f54183g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f54177a + ", eventCode=" + this.f54178b + ", eventUptimeMs=" + this.f54179c + ", sourceExtension=" + Arrays.toString(this.f54180d) + ", sourceExtensionJsonProto3=" + this.f54181e + ", timezoneOffsetSeconds=" + this.f54182f + ", networkConnectionInfo=" + this.f54183g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f54177a = j10;
        this.f54178b = num;
        this.f54179c = j11;
        this.f54180d = bArr;
        this.f54181e = str;
        this.f54182f = j12;
        this.f54183g = oVar;
    }
}
