package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f53907a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f53908b;

    /* renamed from: c  reason: collision with root package name */
    private final long f53909c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f53910d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53911e;

    /* renamed from: f  reason: collision with root package name */
    private final long f53912f;

    /* renamed from: g  reason: collision with root package name */
    private final o f53913g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f53914a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f53915b;

        /* renamed from: c  reason: collision with root package name */
        private Long f53916c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f53917d;

        /* renamed from: e  reason: collision with root package name */
        private String f53918e;

        /* renamed from: f  reason: collision with root package name */
        private Long f53919f;

        /* renamed from: g  reason: collision with root package name */
        private o f53920g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f53914a == null) {
                str = " eventTimeMs";
            }
            if (this.f53916c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f53919f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f53914a.longValue(), this.f53915b, this.f53916c.longValue(), this.f53917d, this.f53918e, this.f53919f.longValue(), this.f53920g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f53915b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f53914a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f53916c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f53920g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f53917d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f53918e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f53919f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f53908b;
    }

    @Override // yb.l
    public long c() {
        return this.f53907a;
    }

    @Override // yb.l
    public long d() {
        return this.f53909c;
    }

    @Override // yb.l
    public o e() {
        return this.f53913g;
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
            if (this.f53907a == lVar.c() && ((num = this.f53908b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f53909c == lVar.d()) {
                byte[] bArr = this.f53910d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f53910d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f53911e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f53912f == lVar.h() && ((oVar = this.f53913g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f53910d;
    }

    @Override // yb.l
    public String g() {
        return this.f53911e;
    }

    @Override // yb.l
    public long h() {
        return this.f53912f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f53907a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f53908b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f53909c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f53910d)) * 1000003;
        String str = this.f53911e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f53912f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f53913g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f53907a + ", eventCode=" + this.f53908b + ", eventUptimeMs=" + this.f53909c + ", sourceExtension=" + Arrays.toString(this.f53910d) + ", sourceExtensionJsonProto3=" + this.f53911e + ", timezoneOffsetSeconds=" + this.f53912f + ", networkConnectionInfo=" + this.f53913g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f53907a = j10;
        this.f53908b = num;
        this.f53909c = j11;
        this.f53910d = bArr;
        this.f53911e = str;
        this.f53912f = j12;
        this.f53913g = oVar;
    }
}
