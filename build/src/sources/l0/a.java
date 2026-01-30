package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f36681a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36682b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36683c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36684d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f36685a;

        /* renamed from: b  reason: collision with root package name */
        private String f36686b;

        /* renamed from: c  reason: collision with root package name */
        private String f36687c;

        /* renamed from: d  reason: collision with root package name */
        private String f36688d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f36685a == null) {
                str = " glVersion";
            }
            if (this.f36686b == null) {
                str = str + " eglVersion";
            }
            if (this.f36687c == null) {
                str = str + " glExtensions";
            }
            if (this.f36688d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f36685a, this.f36686b, this.f36687c, this.f36688d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f36688d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f36686b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f36687c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f36685a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f36684d;
    }

    @Override // l0.e
    public String c() {
        return this.f36682b;
    }

    @Override // l0.e
    public String d() {
        return this.f36683c;
    }

    @Override // l0.e
    public String e() {
        return this.f36681a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f36681a.equals(eVar.e()) && this.f36682b.equals(eVar.c()) && this.f36683c.equals(eVar.d()) && this.f36684d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f36681a.hashCode() ^ 1000003) * 1000003) ^ this.f36682b.hashCode()) * 1000003) ^ this.f36683c.hashCode()) * 1000003) ^ this.f36684d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f36681a + ", eglVersion=" + this.f36682b + ", glExtensions=" + this.f36683c + ", eglExtensions=" + this.f36684d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f36681a = str;
        this.f36682b = str2;
        this.f36683c = str3;
        this.f36684d = str4;
    }
}
