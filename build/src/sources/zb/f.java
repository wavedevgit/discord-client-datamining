package zb;

import java.util.Arrays;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f56260a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f56261b;

    /* renamed from: c  reason: collision with root package name */
    private final long f56262c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f56263d;

    /* renamed from: e  reason: collision with root package name */
    private final String f56264e;

    /* renamed from: f  reason: collision with root package name */
    private final long f56265f;

    /* renamed from: g  reason: collision with root package name */
    private final o f56266g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f56267a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f56268b;

        /* renamed from: c  reason: collision with root package name */
        private Long f56269c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f56270d;

        /* renamed from: e  reason: collision with root package name */
        private String f56271e;

        /* renamed from: f  reason: collision with root package name */
        private Long f56272f;

        /* renamed from: g  reason: collision with root package name */
        private o f56273g;

        @Override // zb.l.a
        public l a() {
            String str = "";
            if (this.f56267a == null) {
                str = " eventTimeMs";
            }
            if (this.f56269c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f56272f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f56267a.longValue(), this.f56268b, this.f56269c.longValue(), this.f56270d, this.f56271e, this.f56272f.longValue(), this.f56273g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.l.a
        public l.a b(Integer num) {
            this.f56268b = num;
            return this;
        }

        @Override // zb.l.a
        public l.a c(long j10) {
            this.f56267a = Long.valueOf(j10);
            return this;
        }

        @Override // zb.l.a
        public l.a d(long j10) {
            this.f56269c = Long.valueOf(j10);
            return this;
        }

        @Override // zb.l.a
        public l.a e(o oVar) {
            this.f56273g = oVar;
            return this;
        }

        @Override // zb.l.a
        l.a f(byte[] bArr) {
            this.f56270d = bArr;
            return this;
        }

        @Override // zb.l.a
        l.a g(String str) {
            this.f56271e = str;
            return this;
        }

        @Override // zb.l.a
        public l.a h(long j10) {
            this.f56272f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // zb.l
    public Integer b() {
        return this.f56261b;
    }

    @Override // zb.l
    public long c() {
        return this.f56260a;
    }

    @Override // zb.l
    public long d() {
        return this.f56262c;
    }

    @Override // zb.l
    public o e() {
        return this.f56266g;
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
            if (this.f56260a == lVar.c() && ((num = this.f56261b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f56262c == lVar.d()) {
                byte[] bArr = this.f56263d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f56263d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f56264e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f56265f == lVar.h() && ((oVar = this.f56266g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // zb.l
    public byte[] f() {
        return this.f56263d;
    }

    @Override // zb.l
    public String g() {
        return this.f56264e;
    }

    @Override // zb.l
    public long h() {
        return this.f56265f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f56260a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f56261b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f56262c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f56263d)) * 1000003;
        String str = this.f56264e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f56265f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f56266g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f56260a + ", eventCode=" + this.f56261b + ", eventUptimeMs=" + this.f56262c + ", sourceExtension=" + Arrays.toString(this.f56263d) + ", sourceExtensionJsonProto3=" + this.f56264e + ", timezoneOffsetSeconds=" + this.f56265f + ", networkConnectionInfo=" + this.f56266g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f56260a = j10;
        this.f56261b = num;
        this.f56262c = j11;
        this.f56263d = bArr;
        this.f56264e = str;
        this.f56265f = j12;
        this.f56266g = oVar;
    }
}
