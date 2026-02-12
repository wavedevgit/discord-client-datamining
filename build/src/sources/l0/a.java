package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f35365a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35366b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35367c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35368d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35369a;

        /* renamed from: b  reason: collision with root package name */
        private String f35370b;

        /* renamed from: c  reason: collision with root package name */
        private String f35371c;

        /* renamed from: d  reason: collision with root package name */
        private String f35372d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f35369a == null) {
                str = " glVersion";
            }
            if (this.f35370b == null) {
                str = str + " eglVersion";
            }
            if (this.f35371c == null) {
                str = str + " glExtensions";
            }
            if (this.f35372d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f35369a, this.f35370b, this.f35371c, this.f35372d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f35372d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f35370b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f35371c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f35369a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f35368d;
    }

    @Override // l0.e
    public String c() {
        return this.f35366b;
    }

    @Override // l0.e
    public String d() {
        return this.f35367c;
    }

    @Override // l0.e
    public String e() {
        return this.f35365a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f35365a.equals(eVar.e()) && this.f35366b.equals(eVar.c()) && this.f35367c.equals(eVar.d()) && this.f35368d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f35365a.hashCode() ^ 1000003) * 1000003) ^ this.f35366b.hashCode()) * 1000003) ^ this.f35367c.hashCode()) * 1000003) ^ this.f35368d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f35365a + ", eglVersion=" + this.f35366b + ", glExtensions=" + this.f35367c + ", eglExtensions=" + this.f35368d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f35365a = str;
        this.f35366b = str2;
        this.f35367c = str3;
        this.f35368d = str4;
    }
}
