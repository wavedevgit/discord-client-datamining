package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f56047a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f56048b;

    /* renamed from: c  reason: collision with root package name */
    private final h f56049c;

    /* renamed from: d  reason: collision with root package name */
    private final long f56050d;

    /* renamed from: e  reason: collision with root package name */
    private final long f56051e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f56052f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0768b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f56053a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f56054b;

        /* renamed from: c  reason: collision with root package name */
        private h f56055c;

        /* renamed from: d  reason: collision with root package name */
        private Long f56056d;

        /* renamed from: e  reason: collision with root package name */
        private Long f56057e;

        /* renamed from: f  reason: collision with root package name */
        private Map f56058f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f56053a == null) {
                str = " transportName";
            }
            if (this.f56055c == null) {
                str = str + " encodedPayload";
            }
            if (this.f56056d == null) {
                str = str + " eventMillis";
            }
            if (this.f56057e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f56058f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f56053a, this.f56054b, this.f56055c, this.f56056d.longValue(), this.f56057e.longValue(), this.f56058f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f56058f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f56058f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f56054b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f56055c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f56056d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f56053a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f56057e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f56052f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f56048b;
    }

    @Override // zb.i
    public h e() {
        return this.f56049c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f56047a.equals(iVar.j()) && ((num = this.f56048b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f56049c.equals(iVar.e()) && this.f56050d == iVar.f() && this.f56051e == iVar.k() && this.f56052f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f56050d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f56047a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f56048b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f56050d;
        long j11 = this.f56051e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f56049c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f56052f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f56047a;
    }

    @Override // zb.i
    public long k() {
        return this.f56051e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f56047a + ", code=" + this.f56048b + ", encodedPayload=" + this.f56049c + ", eventMillis=" + this.f56050d + ", uptimeMillis=" + this.f56051e + ", autoMetadata=" + this.f56052f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f56047a = str;
        this.f56048b = num;
        this.f56049c = hVar;
        this.f56050d = j10;
        this.f56051e = j11;
        this.f56052f = map;
    }
}
