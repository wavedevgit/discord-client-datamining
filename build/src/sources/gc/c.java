package gc;

import gc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f25906a;

    /* renamed from: b  reason: collision with root package name */
    private final long f25907b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f25908c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f25909a;

        /* renamed from: b  reason: collision with root package name */
        private Long f25910b;

        /* renamed from: c  reason: collision with root package name */
        private Set f25911c;

        @Override // gc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f25909a == null) {
                str = " delta";
            }
            if (this.f25910b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f25911c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f25909a.longValue(), this.f25910b.longValue(), this.f25911c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // gc.f.b.a
        public f.b.a b(long j10) {
            this.f25909a = Long.valueOf(j10);
            return this;
        }

        @Override // gc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f25911c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // gc.f.b.a
        public f.b.a d(long j10) {
            this.f25910b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // gc.f.b
    long b() {
        return this.f25906a;
    }

    @Override // gc.f.b
    Set c() {
        return this.f25908c;
    }

    @Override // gc.f.b
    long d() {
        return this.f25907b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f25906a == bVar.b() && this.f25907b == bVar.d() && this.f25908c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f25906a;
        long j11 = this.f25907b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f25908c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f25906a + ", maxAllowedDelay=" + this.f25907b + ", flags=" + this.f25908c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f25906a = j10;
        this.f25907b = j11;
        this.f25908c = set;
    }
}
