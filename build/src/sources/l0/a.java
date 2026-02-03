package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f36795a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36796b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36797c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36798d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f36799a;

        /* renamed from: b  reason: collision with root package name */
        private String f36800b;

        /* renamed from: c  reason: collision with root package name */
        private String f36801c;

        /* renamed from: d  reason: collision with root package name */
        private String f36802d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f36799a == null) {
                str = " glVersion";
            }
            if (this.f36800b == null) {
                str = str + " eglVersion";
            }
            if (this.f36801c == null) {
                str = str + " glExtensions";
            }
            if (this.f36802d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f36799a, this.f36800b, this.f36801c, this.f36802d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f36802d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f36800b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f36801c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f36799a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f36798d;
    }

    @Override // l0.e
    public String c() {
        return this.f36796b;
    }

    @Override // l0.e
    public String d() {
        return this.f36797c;
    }

    @Override // l0.e
    public String e() {
        return this.f36795a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f36795a.equals(eVar.e()) && this.f36796b.equals(eVar.c()) && this.f36797c.equals(eVar.d()) && this.f36798d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f36795a.hashCode() ^ 1000003) * 1000003) ^ this.f36796b.hashCode()) * 1000003) ^ this.f36797c.hashCode()) * 1000003) ^ this.f36798d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f36795a + ", eglVersion=" + this.f36796b + ", glExtensions=" + this.f36797c + ", eglExtensions=" + this.f36798d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f36795a = str;
        this.f36796b = str2;
        this.f36797c = str3;
        this.f36798d = str4;
    }
}
