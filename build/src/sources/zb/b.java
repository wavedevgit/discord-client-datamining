package zb;

import java.util.Map;
import zb.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b extends i {

    /* renamed from: a  reason: collision with root package name */
    private final String f55727a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f55728b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55729c;

    /* renamed from: d  reason: collision with root package name */
    private final long f55730d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55731e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f55732f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0782b extends i.a {

        /* renamed from: a  reason: collision with root package name */
        private String f55733a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f55734b;

        /* renamed from: c  reason: collision with root package name */
        private h f55735c;

        /* renamed from: d  reason: collision with root package name */
        private Long f55736d;

        /* renamed from: e  reason: collision with root package name */
        private Long f55737e;

        /* renamed from: f  reason: collision with root package name */
        private Map f55738f;

        @Override // zb.i.a
        public i d() {
            String str = "";
            if (this.f55733a == null) {
                str = " transportName";
            }
            if (this.f55735c == null) {
                str = str + " encodedPayload";
            }
            if (this.f55736d == null) {
                str = str + " eventMillis";
            }
            if (this.f55737e == null) {
                str = str + " uptimeMillis";
            }
            if (this.f55738f == null) {
                str = str + " autoMetadata";
            }
            if (str.isEmpty()) {
                return new b(this.f55733a, this.f55734b, this.f55735c, this.f55736d.longValue(), this.f55737e.longValue(), this.f55738f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.i.a
        protected Map e() {
            Map map = this.f55738f;
            if (map != null) {
                return map;
            }
            throw new IllegalStateException("Property \"autoMetadata\" has not been set");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // zb.i.a
        public i.a f(Map map) {
            if (map != null) {
                this.f55738f = map;
                return this;
            }
            throw new NullPointerException("Null autoMetadata");
        }

        @Override // zb.i.a
        public i.a g(Integer num) {
            this.f55734b = num;
            return this;
        }

        @Override // zb.i.a
        public i.a h(h hVar) {
            if (hVar != null) {
                this.f55735c = hVar;
                return this;
            }
            throw new NullPointerException("Null encodedPayload");
        }

        @Override // zb.i.a
        public i.a i(long j10) {
            this.f55736d = Long.valueOf(j10);
            return this;
        }

        @Override // zb.i.a
        public i.a j(String str) {
            if (str != null) {
                this.f55733a = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }

        @Override // zb.i.a
        public i.a k(long j10) {
            this.f55737e = Long.valueOf(j10);
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // zb.i
    public Map c() {
        return this.f55732f;
    }

    @Override // zb.i
    public Integer d() {
        return this.f55728b;
    }

    @Override // zb.i
    public h e() {
        return this.f55729c;
    }

    public boolean equals(Object obj) {
        Integer num;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f55727a.equals(iVar.j()) && ((num = this.f55728b) != null ? num.equals(iVar.d()) : iVar.d() == null) && this.f55729c.equals(iVar.e()) && this.f55730d == iVar.f() && this.f55731e == iVar.k() && this.f55732f.equals(iVar.c())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.i
    public long f() {
        return this.f55730d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (this.f55727a.hashCode() ^ 1000003) * 1000003;
        Integer num = this.f55728b;
        if (num == null) {
            hashCode = 0;
        } else {
            hashCode = num.hashCode();
        }
        long j10 = this.f55730d;
        long j11 = this.f55731e;
        return ((((((((hashCode2 ^ hashCode) * 1000003) ^ this.f55729c.hashCode()) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f55732f.hashCode();
    }

    @Override // zb.i
    public String j() {
        return this.f55727a;
    }

    @Override // zb.i
    public long k() {
        return this.f55731e;
    }

    public String toString() {
        return "EventInternal{transportName=" + this.f55727a + ", code=" + this.f55728b + ", encodedPayload=" + this.f55729c + ", eventMillis=" + this.f55730d + ", uptimeMillis=" + this.f55731e + ", autoMetadata=" + this.f55732f + "}";
    }

    private b(String str, Integer num, h hVar, long j10, long j11, Map map) {
        this.f55727a = str;
        this.f55728b = num;
        this.f55729c = hVar;
        this.f55730d = j10;
        this.f55731e = j11;
        this.f55732f = map;
    }
}
