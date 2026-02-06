package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f55147a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55148b;

    /* renamed from: c  reason: collision with root package name */
    private final long f55149c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f55150d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55151e;

    /* renamed from: f  reason: collision with root package name */
    private final long f55152f;

    /* renamed from: g  reason: collision with root package name */
    private final o f55153g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f55154a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55155b;

        /* renamed from: c  reason: collision with root package name */
        private Long f55156c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f55157d;

        /* renamed from: e  reason: collision with root package name */
        private String f55158e;

        /* renamed from: f  reason: collision with root package name */
        private Long f55159f;

        /* renamed from: g  reason: collision with root package name */
        private o f55160g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f55154a == null) {
                str = " eventTimeMs";
            }
            if (this.f55156c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f55159f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f55154a.longValue(), this.f55155b, this.f55156c.longValue(), this.f55157d, this.f55158e, this.f55159f.longValue(), this.f55160g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f55155b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f55154a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f55156c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f55160g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f55157d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f55158e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f55159f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f55148b;
    }

    @Override // yb.l
    public long c() {
        return this.f55147a;
    }

    @Override // yb.l
    public long d() {
        return this.f55149c;
    }

    @Override // yb.l
    public o e() {
        return this.f55153g;
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
            if (this.f55147a == lVar.c() && ((num = this.f55148b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f55149c == lVar.d()) {
                byte[] bArr = this.f55150d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f55150d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f55151e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f55152f == lVar.h() && ((oVar = this.f55153g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f55150d;
    }

    @Override // yb.l
    public String g() {
        return this.f55151e;
    }

    @Override // yb.l
    public long h() {
        return this.f55152f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f55147a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f55148b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f55149c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f55150d)) * 1000003;
        String str = this.f55151e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f55152f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f55153g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f55147a + ", eventCode=" + this.f55148b + ", eventUptimeMs=" + this.f55149c + ", sourceExtension=" + Arrays.toString(this.f55150d) + ", sourceExtensionJsonProto3=" + this.f55151e + ", timezoneOffsetSeconds=" + this.f55152f + ", networkConnectionInfo=" + this.f55153g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f55147a = j10;
        this.f55148b = num;
        this.f55149c = j11;
        this.f55150d = bArr;
        this.f55151e = str;
        this.f55152f = j12;
        this.f55153g = oVar;
    }
}
