package yj;

import hf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f56151a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f56152b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f56153c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f56154a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f56155b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f56156c;

        public b a() {
            return new b(this.f56154a, this.f56155b, this.f56156c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f56154a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f56154a = i11 | this.f56154a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f56151a = i10;
        this.f56152b = z10;
        this.f56153c = executor;
    }

    public final int a() {
        return this.f56151a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f56153c;
    }

    public final boolean d() {
        return this.f56152b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f56151a == bVar.f56151a && this.f56152b == bVar.f56152b && o.a(this.f56153c, bVar.f56153c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f56151a), Boolean.valueOf(this.f56152b), this.f56153c, null);
    }
}
