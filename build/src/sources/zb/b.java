package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f56095a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f56096b;

    /* renamed from: c  reason: collision with root package name */
    private final h f56097c;

    /* renamed from: d  reason: collision with root package name */
    private final long f56098d;

    /* renamed from: e  reason: collision with root package name */
    private final long f56099e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f56100f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0768b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f56101a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f56102b;

        /* renamed from: c  reason: collision with root package name */
        private h f56103c;

        /* renamed from: d  reason: collision with root package name */
        private Long f56104d;

        /* renamed from: e  reason: collision with root package name */
        private Long f56105e;

        /* renamed from: f  reason: collision with root package name */
        private Map f56106f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f56101a == null) {
                str = " transportName";
            }
            if (this.f56103c == null) {
                str = str + " encodedPayload";
            }
            if (this.f56104d == null) {
                str = str + " eventMillis";
            }
            if (this.f56105e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f56106f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f56101a, this.f56102b, this.f56103c, this.f56104d.longValue(), this.f56105e.longValue(), this.f56106f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f56106f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f56106f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f56102b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f56103c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f56104d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f56101a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f56105e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f56100f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f56096b;
    }

    @Override // zb.i
    public h e() {
        return this.f56097c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f56095a.equals(iVar.j()) && ((num = this.f56096b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f56097c.equals(iVar.e()) && this.f56098d == iVar.f() && this.f56099e == iVar.k() && this.f56100f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f56098d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f56095a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f56096b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f56098d;
        long j11 = this.f56099e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f56097c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f56100f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f56095a;
    }

    @Override // zb.i
    public long k() {
        return this.f56099e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f56095a + ", code=" + this.f56096b + ", encodedPayload=" + this.f56097c + ", eventMillis=" + this.f56098d + ", uptimeMillis=" + this.f56099e + ", autoMetadata=" + this.f56100f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f56095a = str;
        this.f56096b = num;
        this.f56097c = hVar;
        this.f56098d = j10;
        this.f56099e = j11;
        this.f56100f = map;
    }
}
