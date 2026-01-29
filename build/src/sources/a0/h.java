package a0;

import a0.m2;
import android.util.Range;
import android.util.Size;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class h extends m2 {

    /* renamed from: b  reason: collision with root package name */
    private final Size f62b;

    /* renamed from: c  reason: collision with root package name */
    private final x.z f63c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f64d;

    /* renamed from: e  reason: collision with root package name */
    private final r0 f65e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f66f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends m2.a {

        /* renamed from: a  reason: collision with root package name */
        private Size f67a;

        /* renamed from: b  reason: collision with root package name */
        private x.z f68b;

        /* renamed from: c  reason: collision with root package name */
        private Range f69c;

        /* renamed from: d  reason: collision with root package name */
        private r0 f70d;

        /* renamed from: e  reason: collision with root package name */
        private Boolean f71e;

        @Override // a0.m2.a
        public m2 a() {
            String str = "";
            if (this.f67a == null) {
                str = " resolution";
            }
            if (this.f68b == null) {
                str = str + " dynamicRange";
            }
            if (this.f69c == null) {
                str = str + " expectedFrameRateRange";
            }
            if (this.f71e == null) {
                str = str + " zslDisabled";
            }
            if (str.isEmpty()) {
                return new h(this.f67a, this.f68b, this.f69c, this.f70d, this.f71e.booleanValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // a0.m2.a
        public m2.a b(x.z zVar) {
            if (zVar != null) {
                this.f68b = zVar;
                return this;
            }
            throw new NullPointerException("Null dynamicRange");
        }

        @Override // a0.m2.a
        public m2.a c(Range range) {
            if (range != null) {
                this.f69c = range;
                return this;
            }
            throw new NullPointerException("Null expectedFrameRateRange");
        }

        @Override // a0.m2.a
        public m2.a d(r0 r0Var) {
            this.f70d = r0Var;
            return this;
        }

        @Override // a0.m2.a
        public m2.a e(Size size) {
            if (size != null) {
                this.f67a = size;
                return this;
            }
            throw new NullPointerException("Null resolution");
        }

        @Override // a0.m2.a
        public m2.a f(boolean z10) {
            this.f71e = Boolean.valueOf(z10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(m2 m2Var) {
            this.f67a = m2Var.e();
            this.f68b = m2Var.b();
            this.f69c = m2Var.c();
            this.f70d = m2Var.d();
            this.f71e = Boolean.valueOf(m2Var.f());
        }
    }

    @Override // a0.m2
    public x.z b() {
        return this.f63c;
    }

    @Override // a0.m2
    public Range c() {
        return this.f64d;
    }

    @Override // a0.m2
    public r0 d() {
        return this.f65e;
    }

    @Override // a0.m2
    public Size e() {
        return this.f62b;
    }

    public boolean equals(Object obj) {
        r0 r0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof m2) {
            m2 m2Var = (m2) obj;
            if (this.f62b.equals(m2Var.e()) && this.f63c.equals(m2Var.b()) && this.f64d.equals(m2Var.c()) && ((r0Var = this.f65e) != null ? r0Var.equals(m2Var.d()) : m2Var.d() == null) && this.f66f == m2Var.f()) {
                return true;
            }
        }
        return false;
    }

    @Override // a0.m2
    public boolean f() {
        return this.f66f;
    }

    @Override // a0.m2
    public m2.a g() {
        return new b(this);
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((((this.f62b.hashCode() ^ 1000003) * 1000003) ^ this.f63c.hashCode()) * 1000003) ^ this.f64d.hashCode()) * 1000003;
        r0 r0Var = this.f65e;
        if (r0Var == null) {
            hashCode = 0;
        } else {
            hashCode = r0Var.hashCode();
        }
        int i11 = (hashCode2 ^ hashCode) * 1000003;
        if (this.f66f) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "StreamSpec{resolution=" + this.f62b + ", dynamicRange=" + this.f63c + ", expectedFrameRateRange=" + this.f64d + ", implementationOptions=" + this.f65e + ", zslDisabled=" + this.f66f + "}";
    }

    private h(Size size, x.z zVar, Range range, r0 r0Var, boolean z10) {
        this.f62b = size;
        this.f63c = zVar;
        this.f64d = range;
        this.f65e = r0Var;
        this.f66f = z10;
    }
}
