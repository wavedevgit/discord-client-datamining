package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f55444a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55445b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55446c;

    /* renamed from: d  reason: collision with root package name */
    private final long f55447d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55448e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f55449f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0777b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55450a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55451b;

        /* renamed from: c  reason: collision with root package name */
        private h f55452c;

        /* renamed from: d  reason: collision with root package name */
        private Long f55453d;

        /* renamed from: e  reason: collision with root package name */
        private Long f55454e;

        /* renamed from: f  reason: collision with root package name */
        private Map f55455f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f55450a == null) {
                str = " transportName";
            }
            if (this.f55452c == null) {
                str = str + " encodedPayload";
            }
            if (this.f55453d == null) {
                str = str + " eventMillis";
            }
            if (this.f55454e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f55455f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f55450a, this.f55451b, this.f55452c, this.f55453d.longValue(), this.f55454e.longValue(), this.f55455f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f55455f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f55455f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f55451b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f55452c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f55453d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f55450a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f55454e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f55449f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f55445b;
    }

    @Override // zb.i
    public h e() {
        return this.f55446c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f55444a.equals(iVar.j()) && ((num = this.f55445b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f55446c.equals(iVar.e()) && this.f55447d == iVar.f() && this.f55448e == iVar.k() && this.f55449f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f55447d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55444a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f55445b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f55447d;
        long j11 = this.f55448e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f55446c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f55449f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f55444a;
    }

    @Override // zb.i
    public long k() {
        return this.f55448e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f55444a + ", code=" + this.f55445b + ", encodedPayload=" + this.f55446c + ", eventMillis=" + this.f55447d + ", uptimeMillis=" + this.f55448e + ", autoMetadata=" + this.f55449f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f55444a = str;
        this.f55445b = num;
        this.f55446c = hVar;
        this.f55447d = j10;
        this.f55448e = j11;
        this.f55449f = map;
    }
}
