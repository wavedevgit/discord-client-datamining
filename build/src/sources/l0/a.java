package l0;

import l0.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends e {

    /* renamed from: a  reason: collision with root package name */
    private final String f35933a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35934b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35935c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35936d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35937a;

        /* renamed from: b  reason: collision with root package name */
        private String f35938b;

        /* renamed from: c  reason: collision with root package name */
        private String f35939c;

        /* renamed from: d  reason: collision with root package name */
        private String f35940d;

        @Override // l0.e.a
        public e a() {
            String str = "";
            if (this.f35937a == null) {
                str = " glVersion";
            }
            if (this.f35938b == null) {
                str = str + " eglVersion";
            }
            if (this.f35939c == null) {
                str = str + " glExtensions";
            }
            if (this.f35940d == null) {
                str = str + " eglExtensions";
            }
            if (str.isEmpty()) {
                return new a(this.f35937a, this.f35938b, this.f35939c, this.f35940d);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // l0.e.a
        public e.a b(String str) {
            if (str != null) {
                this.f35940d = str;
                return this;
            }
            throw new NullPointerException("Null eglExtensions");
        }

        @Override // l0.e.a
        public e.a c(String str) {
            if (str != null) {
                this.f35938b = str;
                return this;
            }
            throw new NullPointerException("Null eglVersion");
        }

        @Override // l0.e.a
        public e.a d(String str) {
            if (str != null) {
                this.f35939c = str;
                return this;
            }
            throw new NullPointerException("Null glExtensions");
        }

        @Override // l0.e.a
        public e.a e(String str) {
            if (str != null) {
                this.f35937a = str;
                return this;
            }
            throw new NullPointerException("Null glVersion");
        }
    }

    @Override // l0.e
    public String b() {
        return this.f35936d;
    }

    @Override // l0.e
    public String c() {
        return this.f35934b;
    }

    @Override // l0.e
    public String d() {
        return this.f35935c;
    }

    @Override // l0.e
    public String e() {
        return this.f35933a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f35933a.equals(eVar.e()) && this.f35934b.equals(eVar.c()) && this.f35935c.equals(eVar.d()) && this.f35936d.equals(eVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f35933a.hashCode() ^ 1000003) * 1000003) ^ this.f35934b.hashCode()) * 1000003) ^ this.f35935c.hashCode()) * 1000003) ^ this.f35936d.hashCode();
    }

    public String toString() {
        return "GraphicDeviceInfo{glVersion=" + this.f35933a + ", eglVersion=" + this.f35934b + ", glExtensions=" + this.f35935c + ", eglExtensions=" + this.f35936d + "}";
    }

    private a(String str, String str2, String str3, String str4) {
        this.f35933a = str;
        this.f35934b = str2;
        this.f35935c = str3;
        this.f35936d = str4;
    }
}
