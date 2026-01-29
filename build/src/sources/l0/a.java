package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f36665a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36666b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36667c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36668d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f36669a;

        /* renamed from: b  reason: collision with root package name */
        private String f36670b;

        /* renamed from: c  reason: collision with root package name */
        private String f36671c;

        /* renamed from: d  reason: collision with root package name */
        private String f36672d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f36669a == null) {
                str = " glVersion";
            }
            if (this.f36670b == null) {
                str = str + " eglVersion";
            }
            if (this.f36671c == null) {
                str = str + " glExtensions";
            }
            if (this.f36672d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f36669a, this.f36670b, this.f36671c, this.f36672d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f36672d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f36670b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f36671c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f36669a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f36668d;
    }

    @Override // l0.e
    public String c() {
        return this.f36666b;
    }

    @Override // l0.e
    public String d() {
        return this.f36667c;
    }

    @Override // l0.e
    public String e() {
        return this.f36665a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f36665a.equals(eVar.e()) && this.f36666b.equals(eVar.c()) && this.f36667c.equals(eVar.d()) && this.f36668d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f36665a.hashCode() ^ 1000003) * 1000003) ^ this.f36666b.hashCode()) * 1000003) ^ this.f36667c.hashCode()) * 1000003) ^ this.f36668d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f36665a + ", eglVersion=" + this.f36666b + ", glExtensions=" + this.f36667c + ", eglExtensions=" + this.f36668d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f36665a = str;
        this.f36666b = str2;
        this.f36667c = str3;
        this.f36668d = str4;
    }
}
