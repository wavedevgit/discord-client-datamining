package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f35632a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35633b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35634c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35635d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35636a;

        /* renamed from: b  reason: collision with root package name */
        private String f35637b;

        /* renamed from: c  reason: collision with root package name */
        private String f35638c;

        /* renamed from: d  reason: collision with root package name */
        private String f35639d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f35636a == null) {
                str = " glVersion";
            }
            if (this.f35637b == null) {
                str = str + " eglVersion";
            }
            if (this.f35638c == null) {
                str = str + " glExtensions";
            }
            if (this.f35639d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f35636a, this.f35637b, this.f35638c, this.f35639d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f35639d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f35637b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f35638c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f35636a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f35635d;
    }

    @Override // l0.e
    public String c() {
        return this.f35633b;
    }

    @Override // l0.e
    public String d() {
        return this.f35634c;
    }

    @Override // l0.e
    public String e() {
        return this.f35632a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f35632a.equals(eVar.e()) && this.f35633b.equals(eVar.c()) && this.f35634c.equals(eVar.d()) && this.f35635d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f35632a.hashCode() ^ 1000003) * 1000003) ^ this.f35633b.hashCode()) * 1000003) ^ this.f35634c.hashCode()) * 1000003) ^ this.f35635d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f35632a + ", eglVersion=" + this.f35633b + ", glExtensions=" + this.f35634c + ", eglExtensions=" + this.f35635d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f35632a = str;
        this.f35633b = str2;
        this.f35634c = str3;
        this.f35635d = str4;
    }
}
