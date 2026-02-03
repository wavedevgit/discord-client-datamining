package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f54152a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f54153b;

    /* renamed from: c  reason: collision with root package name */
    private final long f54154c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f54155d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54156e;

    /* renamed from: f  reason: collision with root package name */
    private final long f54157f;

    /* renamed from: g  reason: collision with root package name */
    private final o f54158g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54159a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f54160b;

        /* renamed from: c  reason: collision with root package name */
        private Long f54161c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f54162d;

        /* renamed from: e  reason: collision with root package name */
        private String f54163e;

        /* renamed from: f  reason: collision with root package name */
        private Long f54164f;

        /* renamed from: g  reason: collision with root package name */
        private o f54165g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f54159a == null) {
                str = " eventTimeMs";
            }
            if (this.f54161c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f54164f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f54159a.longValue(), this.f54160b, this.f54161c.longValue(), this.f54162d, this.f54163e, this.f54164f.longValue(), this.f54165g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f54160b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f54159a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f54161c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f54165g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f54162d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f54163e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f54164f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f54153b;
    }

    @Override // yb.l
    public long c() {
        return this.f54152a;
    }

    @Override // yb.l
    public long d() {
        return this.f54154c;
    }

    @Override // yb.l
    public o e() {
        return this.f54158g;
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
            if (this.f54152a == lVar.c() && ((num = this.f54153b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f54154c == lVar.d()) {
                byte[] bArr = this.f54155d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f54155d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f54156e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f54157f == lVar.h() && ((oVar = this.f54158g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f54155d;
    }

    @Override // yb.l
    public String g() {
        return this.f54156e;
    }

    @Override // yb.l
    public long h() {
        return this.f54157f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f54152a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f54153b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f54154c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f54155d)) * 1000003;
        String str = this.f54156e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f54157f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f54158g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f54152a + ", eventCode=" + this.f54153b + ", eventUptimeMs=" + this.f54154c + ", sourceExtension=" + Arrays.toString(this.f54155d) + ", sourceExtensionJsonProto3=" + this.f54156e + ", timezoneOffsetSeconds=" + this.f54157f + ", networkConnectionInfo=" + this.f54158g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f54152a = j10;
        this.f54153b = num;
        this.f54154c = j11;
        this.f54155d = bArr;
        this.f54156e = str;
        this.f54157f = j12;
        this.f54158g = oVar;
    }
}
