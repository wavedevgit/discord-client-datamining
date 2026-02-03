package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f36264a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36265b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36266c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36267d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f36268a;

        /* renamed from: b  reason: collision with root package name */
        private String f36269b;

        /* renamed from: c  reason: collision with root package name */
        private String f36270c;

        /* renamed from: d  reason: collision with root package name */
        private String f36271d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f36268a == null) {
                str = " glVersion";
            }
            if (this.f36269b == null) {
                str = str + " eglVersion";
            }
            if (this.f36270c == null) {
                str = str + " glExtensions";
            }
            if (this.f36271d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f36268a, this.f36269b, this.f36270c, this.f36271d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f36271d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f36269b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f36270c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f36268a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f36267d;
    }

    @Override // l0.e
    public String c() {
        return this.f36265b;
    }

    @Override // l0.e
    public String d() {
        return this.f36266c;
    }

    @Override // l0.e
    public String e() {
        return this.f36264a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f36264a.equals(eVar.e()) && this.f36265b.equals(eVar.c()) && this.f36266c.equals(eVar.d()) && this.f36267d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f36264a.hashCode() ^ 1000003) * 1000003) ^ this.f36265b.hashCode()) * 1000003) ^ this.f36266c.hashCode()) * 1000003) ^ this.f36267d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f36264a + ", eglVersion=" + this.f36265b + ", glExtensions=" + this.f36266c + ", eglExtensions=" + this.f36267d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f36264a = str;
        this.f36265b = str2;
        this.f36266c = str3;
        this.f36267d = str4;
    }
}
