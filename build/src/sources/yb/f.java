package yb;

import java.util.Arrays;
import yb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f extends l {

    /* renamed from: a  reason: collision with root package name */
    private final long f54603a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f54604b;

    /* renamed from: c  reason: collision with root package name */
    private final long f54605c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f54606d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54607e;

    /* renamed from: f  reason: collision with root package name */
    private final long f54608f;

    /* renamed from: g  reason: collision with root package name */
    private final o f54609g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends l.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f54610a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f54611b;

        /* renamed from: c  reason: collision with root package name */
        private Long f54612c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f54613d;

        /* renamed from: e  reason: collision with root package name */
        private String f54614e;

        /* renamed from: f  reason: collision with root package name */
        private Long f54615f;

        /* renamed from: g  reason: collision with root package name */
        private o f54616g;

        @Override // yb.l.a
        public l a() {
            String str = "";
            if (this.f54610a == null) {
                str = " eventTimeMs";
            }
            if (this.f54612c == null) {
                str = str + " eventUptimeMs";
            }
            if (this.f54615f == null) {
                str = str + " timezoneOffsetSeconds";
            }
            if (str.isEmpty()) {
                return new f(this.f54610a.longValue(), this.f54611b, this.f54612c.longValue(), this.f54613d, this.f54614e, this.f54615f.longValue(), this.f54616g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // yb.l.a
        public l.a b(Integer num) {
            this.f54611b = num;
            return this;
        }

        @Override // yb.l.a
        public l.a c(long j10) {
            this.f54610a = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a d(long j10) {
            this.f54612c = Long.valueOf(j10);
            return this;
        }

        @Override // yb.l.a
        public l.a e(o oVar) {
            this.f54616g = oVar;
            return this;
        }

        @Override // yb.l.a
        l.a f(byte[] bArr) {
            this.f54613d = bArr;
            return this;
        }

        @Override // yb.l.a
        l.a g(String str) {
            this.f54614e = str;
            return this;
        }

        @Override // yb.l.a
        public l.a h(long j10) {
            this.f54615f = Long.valueOf(j10);
            return this;
        }
    }

    @Override // yb.l
    public Integer b() {
        return this.f54604b;
    }

    @Override // yb.l
    public long c() {
        return this.f54603a;
    }

    @Override // yb.l
    public long d() {
        return this.f54605c;
    }

    @Override // yb.l
    public o e() {
        return this.f54609g;
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
            if (this.f54603a == lVar.c() && ((num = this.f54604b) != null ? num.equals(lVar.b()) : lVar.b() == null) && this.f54605c == lVar.d()) {
                byte[] bArr = this.f54606d;
                if (lVar instanceof f) {
                    f10 = ((f) lVar).f54606d;
                } else {
                    f10 = lVar.f();
                }
                if (Arrays.equals(bArr, f10) && ((str = this.f54607e) != null ? str.equals(lVar.g()) : lVar.g() == null) && this.f54608f == lVar.h() && ((oVar = this.f54609g) != null ? oVar.equals(lVar.e()) : lVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // yb.l
    public byte[] f() {
        return this.f54606d;
    }

    @Override // yb.l
    public String g() {
        return this.f54607e;
    }

    @Override // yb.l
    public long h() {
        return this.f54608f;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        long j10 = this.f54603a;
        int i10 = (((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003;
        Integer num = this.f54604b;
        int i11 = 0;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j11 = this.f54605c;
        int hashCode3 = (((((i10 ^ hashCode) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ Arrays.hashCode(this.f54606d)) * 1000003;
        String str = this.f54607e;
        if (str == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str.hashCode();
        }
        long j12 = this.f54608f;
        int i12 = (((hashCode3 ^ hashCode2) * 1000003) ^ ((int) ((j12 >>> 32) ^ j12))) * 1000003;
        o oVar = this.f54609g;
        if (oVar != null) {
            i11 = oVar.hashCode();
        }
        return i12 ^ i11;
    }

    public String toString() {
        return "LogEvent{eventTimeMs=" + this.f54603a + ", eventCode=" + this.f54604b + ", eventUptimeMs=" + this.f54605c + ", sourceExtension=" + Arrays.toString(this.f54606d) + ", sourceExtensionJsonProto3=" + this.f54607e + ", timezoneOffsetSeconds=" + this.f54608f + ", networkConnectionInfo=" + this.f54609g + "}";
    }

    private f(long j10, Integer num, long j11, byte[] bArr, String str, long j12, o oVar) {
        this.f54603a = j10;
        this.f54604b = num;
        this.f54605c = j11;
        this.f54606d = bArr;
        this.f54607e = str;
        this.f54608f = j12;
        this.f54609g = oVar;
    }
}
