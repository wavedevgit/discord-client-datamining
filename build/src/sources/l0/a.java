package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f35467a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35468b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35469c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35470d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35471a;

        /* renamed from: b  reason: collision with root package name */
        private String f35472b;

        /* renamed from: c  reason: collision with root package name */
        private String f35473c;

        /* renamed from: d  reason: collision with root package name */
        private String f35474d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f35471a == null) {
                str = " glVersion";
            }
            if (this.f35472b == null) {
                str = str + " eglVersion";
            }
            if (this.f35473c == null) {
                str = str + " glExtensions";
            }
            if (this.f35474d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f35471a, this.f35472b, this.f35473c, this.f35474d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f35474d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f35472b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f35473c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f35471a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f35470d;
    }

    @Override // l0.e
    public String c() {
        return this.f35468b;
    }

    @Override // l0.e
    public String d() {
        return this.f35469c;
    }

    @Override // l0.e
    public String e() {
        return this.f35467a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f35467a.equals(eVar.e()) && this.f35468b.equals(eVar.c()) && this.f35469c.equals(eVar.d()) && this.f35470d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f35467a.hashCode() ^ 1000003) * 1000003) ^ this.f35468b.hashCode()) * 1000003) ^ this.f35469c.hashCode()) * 1000003) ^ this.f35470d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f35467a + ", eglVersion=" + this.f35468b + ", glExtensions=" + this.f35469c + ", eglExtensions=" + this.f35470d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f35467a = str;
        this.f35468b = str2;
        this.f35469c = str3;
        this.f35470d = str4;
    }
}
