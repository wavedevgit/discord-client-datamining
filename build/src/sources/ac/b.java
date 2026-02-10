package ac;

import ac.i;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f563a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f564b;

    /* renamed from: c  reason: collision with root package name */
    private final h f565c;

    /* renamed from: d  reason: collision with root package name */
    private final long f566d;

    /* renamed from: e  reason: collision with root package name */
    private final long f567e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f568f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: ac.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0007b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f569a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f570b;

        /* renamed from: c  reason: collision with root package name */
        private h f571c;

        /* renamed from: d  reason: collision with root package name */
        private Long f572d;

        /* renamed from: e  reason: collision with root package name */
        private Long f573e;

        /* renamed from: f  reason: collision with root package name */
        private Map f574f;

        @Override // ac.i.a
        public i d() {
            String str = "";
            if (this.f569a == null) {
                str = " transportName";
            }
            if (this.f571c == null) {
                str = str + " encodedPayload";
            }
            if (this.f572d == null) {
                str = str + " eventMillis";
            }
            if (this.f573e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f574f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f569a, this.f570b, this.f571c, this.f572d.longValue(), this.f573e.longValue(), this.f574f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ac.i.a
        protected Map e() {
            Map map = this.f574f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // ac.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f574f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // ac.i.a
        public i.a g(Integer num) {
            this.f570b = num;
            return this;
        }

        @Override // ac.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f571c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // ac.i.a
        public i.a i(long j10) {
            this.f572d = Long.valueOf(j10);
            return this;
        }

        @Override // ac.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f569a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // ac.i.a
        public i.a k(long j10) {
            this.f573e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ac.i
    public Map c() {
        return this.f568f;
    }

    @Override // ac.i
    public Integer d() {
        return this.f564b;
    }

    @Override // ac.i
    public h e() {
        return this.f565c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f563a.equals(iVar.j()) && ((num = this.f564b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f565c.equals(iVar.e()) && this.f566d == iVar.f() && this.f567e == iVar.k() && this.f568f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // ac.i
    public long f() {
        return this.f566d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f563a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f564b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f566d;
        long j11 = this.f567e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f565c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f568f.hashCode();
    }

    @Override // ac.i
    public String j() {
        return this.f563a;
    }

    @Override // ac.i
    public long k() {
        return this.f567e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f563a + ", code=" + this.f564b + ", encodedPayload=" + this.f565c + ", eventMillis=" + this.f566d + ", uptimeMillis=" + this.f567e + ", autoMetadata=" + this.f568f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f563a = str;
        this.f564b = num;
        this.f565c = hVar;
        this.f566d = j10;
        this.f567e = j11;
        this.f568f = map;
    }
}
