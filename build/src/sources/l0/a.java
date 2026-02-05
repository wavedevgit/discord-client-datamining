package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f36191a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36192b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36193c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36194d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f36195a;

        /* renamed from: b  reason: collision with root package name */
        private String f36196b;

        /* renamed from: c  reason: collision with root package name */
        private String f36197c;

        /* renamed from: d  reason: collision with root package name */
        private String f36198d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f36195a == null) {
                str = " glVersion";
            }
            if (this.f36196b == null) {
                str = str + " eglVersion";
            }
            if (this.f36197c == null) {
                str = str + " glExtensions";
            }
            if (this.f36198d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f36195a, this.f36196b, this.f36197c, this.f36198d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f36198d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f36196b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f36197c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f36195a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f36194d;
    }

    @Override // l0.e
    public String c() {
        return this.f36192b;
    }

    @Override // l0.e
    public String d() {
        return this.f36193c;
    }

    @Override // l0.e
    public String e() {
        return this.f36191a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f36191a.equals(eVar.e()) && this.f36192b.equals(eVar.c()) && this.f36193c.equals(eVar.d()) && this.f36194d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f36191a.hashCode() ^ 1000003) * 1000003) ^ this.f36192b.hashCode()) * 1000003) ^ this.f36193c.hashCode()) * 1000003) ^ this.f36194d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f36191a + ", eglVersion=" + this.f36192b + ", glExtensions=" + this.f36193c + ", eglExtensions=" + this.f36194d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f36191a = str;
        this.f36192b = str2;
        this.f36193c = str3;
        this.f36194d = str4;
    }
}
