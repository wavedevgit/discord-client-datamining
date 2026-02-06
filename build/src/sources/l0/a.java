package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f35584a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35585b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35586c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35587d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35588a;

        /* renamed from: b  reason: collision with root package name */
        private String f35589b;

        /* renamed from: c  reason: collision with root package name */
        private String f35590c;

        /* renamed from: d  reason: collision with root package name */
        private String f35591d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f35588a == null) {
                str = " glVersion";
            }
            if (this.f35589b == null) {
                str = str + " eglVersion";
            }
            if (this.f35590c == null) {
                str = str + " glExtensions";
            }
            if (this.f35591d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f35588a, this.f35589b, this.f35590c, this.f35591d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f35591d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f35589b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f35590c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f35588a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f35587d;
    }

    @Override // l0.e
    public String c() {
        return this.f35585b;
    }

    @Override // l0.e
    public String d() {
        return this.f35586c;
    }

    @Override // l0.e
    public String e() {
        return this.f35584a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f35584a.equals(eVar.e()) && this.f35585b.equals(eVar.c()) && this.f35586c.equals(eVar.d()) && this.f35587d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f35584a.hashCode() ^ 1000003) * 1000003) ^ this.f35585b.hashCode()) * 1000003) ^ this.f35586c.hashCode()) * 1000003) ^ this.f35587d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f35584a + ", eglVersion=" + this.f35585b + ", glExtensions=" + this.f35586c + ", eglExtensions=" + this.f35587d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f35584a = str;
        this.f35585b = str2;
        this.f35586c = str3;
        this.f35587d = str4;
    }
}
