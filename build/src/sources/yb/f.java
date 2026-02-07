package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f55195a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55196b;

    /* renamed from: c  reason: collision with root package name */
    private final long f55197c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f55198d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55199e;

    /* renamed from: f  reason: collision with root package name */
    private final long f55200f;

    /* renamed from: g  reason: collision with root package name */
    private final o f55201g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f55202a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55203b;

        /* renamed from: c  reason: collision with root package name */
        private Long f55204c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f55205d;

        /* renamed from: e  reason: collision with root package name */
        private String f55206e;

        /* renamed from: f  reason: collision with root package name */
        private Long f55207f;

        /* renamed from: g  reason: collision with root package name */
        private o f55208g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f55202a == null) {
                str = " eventTimeMs";
            }
            if (this.f55204c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f55207f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f55202a.longValue(), this.f55203b, this.f55204c.longValue(), this.f55205d, this.f55206e, this.f55207f.longValue(), this.f55208g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f55203b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f55202a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f55204c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f55208g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f55205d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f55206e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f55207f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f55196b;
    }

    @Override // yb.l
    public long c() {
        return this.f55195a;
    }

    @Override // yb.l
    public long d() {
        return this.f55197c;
    }

    @Override // yb.l
    public o e() {
        return this.f55201g;
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
            if (this.f55195a == lVar.c() && ((num = this.f55196b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f55197c == lVar.d()) {
                byte[] bArr = this.f55198d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f55198d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f55199e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f55200f == lVar.h() && ((oVar = this.f55201g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f55198d;
    }

    @Override // yb.l
    public String g() {
        return this.f55199e;
    }

    @Override // yb.l
    public long h() {
        return this.f55200f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f55195a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f55196b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f55197c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f55198d)) * 1000003;
        String str = this.f55199e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f55200f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f55201g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f55195a + ", eventCode=" + this.f55196b + ", eventUptimeMs=" + this.f55197c + ", sourceExtension=" + Arrays.toString(this.f55198d) + ", sourceExtensionJsonProto3=" + this.f55199e + ", timezoneOffsetSeconds=" + this.f55200f + ", networkConnectionInfo=" + this.f55201g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f55195a = j10;
        this.f55196b = num;
        this.f55197c = j11;
        this.f55198d = bArr;
        this.f55199e = str;
        this.f55200f = j12;
        this.f55201g = oVar;
    }
}
