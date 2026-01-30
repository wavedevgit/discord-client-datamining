package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f55460a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55461b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55462c;

    /* renamed from: d  reason: collision with root package name */
    private final long f55463d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55464e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f55465f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0777b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55466a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55467b;

        /* renamed from: c  reason: collision with root package name */
        private h f55468c;

        /* renamed from: d  reason: collision with root package name */
        private Long f55469d;

        /* renamed from: e  reason: collision with root package name */
        private Long f55470e;

        /* renamed from: f  reason: collision with root package name */
        private Map f55471f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f55466a == null) {
                str = " transportName";
            }
            if (this.f55468c == null) {
                str = str + " encodedPayload";
            }
            if (this.f55469d == null) {
                str = str + " eventMillis";
            }
            if (this.f55470e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f55471f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f55466a, this.f55467b, this.f55468c, this.f55469d.longValue(), this.f55470e.longValue(), this.f55471f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f55471f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f55471f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f55467b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f55468c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f55469d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f55466a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f55470e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f55465f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f55461b;
    }

    @Override // zb.i
    public h e() {
        return this.f55462c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f55460a.equals(iVar.j()) && ((num = this.f55461b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f55462c.equals(iVar.e()) && this.f55463d == iVar.f() && this.f55464e == iVar.k() && this.f55465f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f55463d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55460a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f55461b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f55463d;
        long j11 = this.f55464e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f55462c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f55465f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f55460a;
    }

    @Override // zb.i
    public long k() {
        return this.f55464e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f55460a + ", code=" + this.f55461b + ", encodedPayload=" + this.f55462c + ", eventMillis=" + this.f55463d + ", uptimeMillis=" + this.f55464e + ", autoMetadata=" + this.f55465f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f55460a = str;
        this.f55461b = num;
        this.f55462c = hVar;
        this.f55463d = j10;
        this.f55464e = j11;
        this.f55465f = map;
    }
}
