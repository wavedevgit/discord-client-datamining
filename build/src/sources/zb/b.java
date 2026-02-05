package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f55316a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55317b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55318c;

    /* renamed from: d  reason: collision with root package name */
    private final long f55319d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55320e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f55321f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0780b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55322a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55323b;

        /* renamed from: c  reason: collision with root package name */
        private h f55324c;

        /* renamed from: d  reason: collision with root package name */
        private Long f55325d;

        /* renamed from: e  reason: collision with root package name */
        private Long f55326e;

        /* renamed from: f  reason: collision with root package name */
        private Map f55327f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f55322a == null) {
                str = " transportName";
            }
            if (this.f55324c == null) {
                str = str + " encodedPayload";
            }
            if (this.f55325d == null) {
                str = str + " eventMillis";
            }
            if (this.f55326e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f55327f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f55322a, this.f55323b, this.f55324c, this.f55325d.longValue(), this.f55326e.longValue(), this.f55327f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f55327f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f55327f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f55323b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f55324c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f55325d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f55322a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f55326e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f55321f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f55317b;
    }

    @Override // zb.i
    public h e() {
        return this.f55318c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f55316a.equals(iVar.j()) && ((num = this.f55317b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f55318c.equals(iVar.e()) && this.f55319d == iVar.f() && this.f55320e == iVar.k() && this.f55321f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f55319d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55316a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f55317b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f55319d;
        long j11 = this.f55320e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f55318c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f55321f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f55316a;
    }

    @Override // zb.i
    public long k() {
        return this.f55320e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f55316a + ", code=" + this.f55317b + ", encodedPayload=" + this.f55318c + ", eventMillis=" + this.f55319d + ", uptimeMillis=" + this.f55320e + ", autoMetadata=" + this.f55321f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f55316a = str;
        this.f55317b = num;
        this.f55318c = hVar;
        this.f55319d = j10;
        this.f55320e = j11;
        this.f55321f = map;
    }
}
