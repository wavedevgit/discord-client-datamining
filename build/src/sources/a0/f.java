package a0;

import a0.i2;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f extends i2.f {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f40a;

    /* renamed from: b  reason: collision with root package name */
    private final List f41b;

    /* renamed from: c  reason: collision with root package name */
    private final String f42c;

    /* renamed from: d  reason: collision with root package name */
    private final int f43d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44e;

    /* renamed from: f  reason: collision with root package name */
    private final x.z f45f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends i2.f.a {

        /* renamed from: a  reason: collision with root package name */
        private w0 f46a;

        /* renamed from: b  reason: collision with root package name */
        private List f47b;

        /* renamed from: c  reason: collision with root package name */
        private String f48c;

        /* renamed from: d  reason: collision with root package name */
        private Integer f49d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f50e;

        /* renamed from: f  reason: collision with root package name */
        private x.z f51f;

        @Override // a0.i2.f.a
        public i2.f a() {
            String str = "";
            if (this.f46a == null) {
                str = " surface";
            }
            if (this.f47b == null) {
                str = str + " sharedSurfaces";
            }
            if (this.f49d == null) {
                str = str + " mirrorMode";
            }
            if (this.f50e == null) {
                str = str + " surfaceGroupId";
            }
            if (this.f51f == null) {
                str = str + " dynamicRange";
            }
            if (str.isEmpty()) {
                return new f(this.f46a, this.f47b, this.f48c, this.f49d.intValue(), this.f50e.intValue(), this.f51f);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // a0.i2.f.a
        public i2.f.a b(x.z zVar) {
            if (zVar != null) {
                this.f51f = zVar;
                return this;
            }
            throw new NullPointerException("Null dynamicRange");
        }

        @Override // a0.i2.f.a
        public i2.f.a c(int i10) {
            this.f49d = Integer.valueOf(i10);
            return this;
        }

        @Override // a0.i2.f.a
        public i2.f.a d(String str) {
            this.f48c = str;
            return this;
        }

        @Override // a0.i2.f.a
        public i2.f.a e(List list) {
            if (list != null) {
                this.f47b = list;
                return this;
            }
            throw new NullPointerException("Null sharedSurfaces");
        }

        @Override // a0.i2.f.a
        public i2.f.a f(int i10) {
            this.f50e = Integer.valueOf(i10);
            return this;
        }

        public i2.f.a g(w0 w0Var) {
            if (w0Var != null) {
                this.f46a = w0Var;
                return this;
            }
            throw new NullPointerException("Null surface");
        }
    }

    @Override // a0.i2.f
    public x.z b() {
        return this.f45f;
    }

    @Override // a0.i2.f
    public int c() {
        return this.f43d;
    }

    @Override // a0.i2.f
    public String d() {
        return this.f42c;
    }

    @Override // a0.i2.f
    public List e() {
        return this.f41b;
    }

    public boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (obj instanceof i2.f) {
            i2.f fVar = (i2.f) obj;
            if (this.f40a.equals(fVar.f()) && this.f41b.equals(fVar.e()) && ((str = this.f42c) != null ? str.equals(fVar.d()) : fVar.d() == null) && this.f43d == fVar.c() && this.f44e == fVar.g() && this.f45f.equals(fVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // a0.i2.f
    public w0 f() {
        return this.f40a;
    }

    @Override // a0.i2.f
    public int g() {
        return this.f44e;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (((this.f40a.hashCode() ^ 1000003) * 1000003) ^ this.f41b.hashCode()) * 1000003;
        String str = this.f42c;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((((((hashCode2 ^ hashCode) * 1000003) ^ this.f43d) * 1000003) ^ this.f44e) * 1000003) ^ this.f45f.hashCode();
    }

    public String toString() {
        return "OutputConfig{surface=" + this.f40a + ", sharedSurfaces=" + this.f41b + ", physicalCameraId=" + this.f42c + ", mirrorMode=" + this.f43d + ", surfaceGroupId=" + this.f44e + ", dynamicRange=" + this.f45f + "}";
    }

    private f(w0 w0Var, List list, String str, int i10, int i11, x.z zVar) {
        this.f40a = w0Var;
        this.f41b = list;
        this.f42c = str;
        this.f43d = i10;
        this.f44e = i11;
        this.f45f = zVar;
    }
}
