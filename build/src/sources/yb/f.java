package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f54161a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f54162b;

    /* renamed from: c  reason: collision with root package name */
    private final long f54163c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f54164d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54165e;

    /* renamed from: f  reason: collision with root package name */
    private final long f54166f;

    /* renamed from: g  reason: collision with root package name */
    private final o f54167g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54168a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f54169b;

        /* renamed from: c  reason: collision with root package name */
        private Long f54170c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f54171d;

        /* renamed from: e  reason: collision with root package name */
        private String f54172e;

        /* renamed from: f  reason: collision with root package name */
        private Long f54173f;

        /* renamed from: g  reason: collision with root package name */
        private o f54174g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f54168a == null) {
                str = " eventTimeMs";
            }
            if (this.f54170c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f54173f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f54168a.longValue(), this.f54169b, this.f54170c.longValue(), this.f54171d, this.f54172e, this.f54173f.longValue(), this.f54174g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f54169b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f54168a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f54170c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f54174g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f54171d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f54172e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f54173f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f54162b;
    }

    @Override // yb.l
    public long c() {
        return this.f54161a;
    }

    @Override // yb.l
    public long d() {
        return this.f54163c;
    }

    @Override // yb.l
    public o e() {
        return this.f54167g;
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
            if (this.f54161a == lVar.c() && ((num = this.f54162b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f54163c == lVar.d()) {
                byte[] bArr = this.f54164d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f54164d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f54165e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f54166f == lVar.h() && ((oVar = this.f54167g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f54164d;
    }

    @Override // yb.l
    public String g() {
        return this.f54165e;
    }

    @Override // yb.l
    public long h() {
        return this.f54166f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f54161a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f54162b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f54163c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f54164d)) * 1000003;
        String str = this.f54165e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f54166f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f54167g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f54161a + ", eventCode=" + this.f54162b + ", eventUptimeMs=" + this.f54163c + ", sourceExtension=" + Arrays.toString(this.f54164d) + ", sourceExtensionJsonProto3=" + this.f54165e + ", timezoneOffsetSeconds=" + this.f54166f + ", networkConnectionInfo=" + this.f54167g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f54161a = j10;
        this.f54162b = num;
        this.f54163c = j11;
        this.f54164d = bArr;
        this.f54165e = str;
        this.f54166f = j12;
        this.f54167g = oVar;
    }
}
