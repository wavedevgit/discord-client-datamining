package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f55730a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55731b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55732c;

    /* renamed from: d  reason: collision with root package name */
    private final long f55733d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55734e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f55735f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0782b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55736a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55737b;

        /* renamed from: c  reason: collision with root package name */
        private h f55738c;

        /* renamed from: d  reason: collision with root package name */
        private Long f55739d;

        /* renamed from: e  reason: collision with root package name */
        private Long f55740e;

        /* renamed from: f  reason: collision with root package name */
        private Map f55741f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f55736a == null) {
                str = " transportName";
            }
            if (this.f55738c == null) {
                str = str + " encodedPayload";
            }
            if (this.f55739d == null) {
                str = str + " eventMillis";
            }
            if (this.f55740e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f55741f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f55736a, this.f55737b, this.f55738c, this.f55739d.longValue(), this.f55740e.longValue(), this.f55741f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f55741f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f55741f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f55737b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f55738c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f55739d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f55736a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f55740e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f55735f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f55731b;
    }

    @Override // zb.i
    public h e() {
        return this.f55732c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f55730a.equals(iVar.j()) && ((num = this.f55731b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f55732c.equals(iVar.e()) && this.f55733d == iVar.f() && this.f55734e == iVar.k() && this.f55735f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f55733d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55730a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f55731b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f55733d;
        long j11 = this.f55734e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f55732c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f55735f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f55730a;
    }

    @Override // zb.i
    public long k() {
        return this.f55734e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f55730a + ", code=" + this.f55731b + ", encodedPayload=" + this.f55732c + ", eventMillis=" + this.f55733d + ", uptimeMillis=" + this.f55734e + ", autoMetadata=" + this.f55735f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f55730a = str;
        this.f55731b = num;
        this.f55732c = hVar;
        this.f55733d = j10;
        this.f55734e = j11;
        this.f55735f = map;
    }
}
