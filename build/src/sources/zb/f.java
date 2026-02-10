package zb;

import java.util.Arrays;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f56220a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f56221b;

    /* renamed from: c  reason: collision with root package name */
    private final long f56222c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f56223d;

    /* renamed from: e  reason: collision with root package name */
    private final String f56224e;

    /* renamed from: f  reason: collision with root package name */
    private final long f56225f;

    /* renamed from: g  reason: collision with root package name */
    private final o f56226g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f56227a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f56228b;

        /* renamed from: c  reason: collision with root package name */
        private Long f56229c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f56230d;

        /* renamed from: e  reason: collision with root package name */
        private String f56231e;

        /* renamed from: f  reason: collision with root package name */
        private Long f56232f;

        /* renamed from: g  reason: collision with root package name */
        private o f56233g;

        @Override // zb.l.a
        public l a() {
            String str = "";
            if (this.f56227a == null) {
                str = " eventTimeMs";
            }
            if (this.f56229c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f56232f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f56227a.longValue(), this.f56228b, this.f56229c.longValue(), this.f56230d, this.f56231e, this.f56232f.longValue(), this.f56233g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.l.a
        public l.a b(Integer num) {
            this.f56228b = num;
            return this;
        }

        @Override // zb.l.a
        public l.a c(long j10) {
            this.f56227a = Long.valueOf(j10);
            return this;
        }

        @Override // zb.l.a
        public l.a d(long j10) {
            this.f56229c = Long.valueOf(j10);
            return this;
        }

        @Override // zb.l.a
        public l.a e(o oVar) {
            this.f56233g = oVar;
            return this;
        }

        @Override // zb.l.a
        l.a f(byte[] bArr) {
            this.f56230d = bArr;
            return this;
        }

        @Override // zb.l.a
        l.a g(String str) {
            this.f56231e = str;
            return this;
        }

        @Override // zb.l.a
        public l.a h(long j10) {
            this.f56232f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // zb.l
    public Integer b() {
        return this.f56221b;
    }

    @Override // zb.l
    public long c() {
        return this.f56220a;
    }

    @Override // zb.l
    public long d() {
        return this.f56222c;
    }

    @Override // zb.l
    public o e() {
        return this.f56226g;
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
            if (this.f56220a == lVar.c() && ((num = this.f56221b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f56222c == lVar.d()) {
                byte[] bArr = this.f56223d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f56223d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f56224e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f56225f == lVar.h() && ((oVar = this.f56226g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // zb.l
    public byte[] f() {
        return this.f56223d;
    }

    @Override // zb.l
    public String g() {
        return this.f56224e;
    }

    @Override // zb.l
    public long h() {
        return this.f56225f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f56220a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f56221b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f56222c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f56223d)) * 1000003;
        String str = this.f56224e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f56225f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f56226g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f56220a + ", eventCode=" + this.f56221b + ", eventUptimeMs=" + this.f56222c + ", sourceExtension=" + Arrays.toString(this.f56223d) + ", sourceExtensionJsonProto3=" + this.f56224e + ", timezoneOffsetSeconds=" + this.f56225f + ", networkConnectionInfo=" + this.f56226g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f56220a = j10;
        this.f56221b = num;
        this.f56222c = j11;
        this.f56223d = bArr;
        this.f56224e = str;
        this.f56225f = j12;
        this.f56226g = oVar;
    }
}
