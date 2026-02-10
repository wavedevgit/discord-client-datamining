package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f35364a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35365b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35366c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35367d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35368a;

        /* renamed from: b  reason: collision with root package name */
        private String f35369b;

        /* renamed from: c  reason: collision with root package name */
        private String f35370c;

        /* renamed from: d  reason: collision with root package name */
        private String f35371d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f35368a == null) {
                str = " glVersion";
            }
            if (this.f35369b == null) {
                str = str + " eglVersion";
            }
            if (this.f35370c == null) {
                str = str + " glExtensions";
            }
            if (this.f35371d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f35368a, this.f35369b, this.f35370c, this.f35371d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f35371d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f35369b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f35370c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f35368a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f35367d;
    }

    @Override // l0.e
    public String c() {
        return this.f35365b;
    }

    @Override // l0.e
    public String d() {
        return this.f35366c;
    }

    @Override // l0.e
    public String e() {
        return this.f35364a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f35364a.equals(eVar.e()) && this.f35365b.equals(eVar.c()) && this.f35366c.equals(eVar.d()) && this.f35367d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f35364a.hashCode() ^ 1000003) * 1000003) ^ this.f35365b.hashCode()) * 1000003) ^ this.f35366c.hashCode()) * 1000003) ^ this.f35367d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f35364a + ", eglVersion=" + this.f35365b + ", glExtensions=" + this.f35366c + ", eglExtensions=" + this.f35367d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f35364a = str;
        this.f35365b = str2;
        this.f35366c = str3;
        this.f35367d = str4;
    }
}
