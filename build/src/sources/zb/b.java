package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f55592a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55593b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55594c;

    /* renamed from: d  reason: collision with root package name */
    private final long f55595d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55596e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f55597f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0788b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55598a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55599b;

        /* renamed from: c  reason: collision with root package name */
        private h f55600c;

        /* renamed from: d  reason: collision with root package name */
        private Long f55601d;

        /* renamed from: e  reason: collision with root package name */
        private Long f55602e;

        /* renamed from: f  reason: collision with root package name */
        private Map f55603f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f55598a == null) {
                str = " transportName";
            }
            if (this.f55600c == null) {
                str = str + " encodedPayload";
            }
            if (this.f55601d == null) {
                str = str + " eventMillis";
            }
            if (this.f55602e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f55603f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f55598a, this.f55599b, this.f55600c, this.f55601d.longValue(), this.f55602e.longValue(), this.f55603f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f55603f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f55603f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f55599b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f55600c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f55601d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f55598a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f55602e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f55597f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f55593b;
    }

    @Override // zb.i
    public h e() {
        return this.f55594c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f55592a.equals(iVar.j()) && ((num = this.f55593b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f55594c.equals(iVar.e()) && this.f55595d == iVar.f() && this.f55596e == iVar.k() && this.f55597f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f55595d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55592a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f55593b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f55595d;
        long j11 = this.f55596e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f55594c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f55597f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f55592a;
    }

    @Override // zb.i
    public long k() {
        return this.f55596e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f55592a + ", code=" + this.f55593b + ", encodedPayload=" + this.f55594c + ", eventMillis=" + this.f55595d + ", uptimeMillis=" + this.f55596e + ", autoMetadata=" + this.f55597f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f55592a = str;
        this.f55593b = num;
        this.f55594c = hVar;
        this.f55595d = j10;
        this.f55596e = j11;
        this.f55597f = map;
    }
}
