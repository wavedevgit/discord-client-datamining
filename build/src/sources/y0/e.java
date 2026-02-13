package y0;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: d  reason: collision with root package name */
    public static final a f55859d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final int f55860e = 8;

    /* renamed from: a  reason: collision with root package name */
    private h f55861a;

    /* renamed from: b  reason: collision with root package name */
    private long f55862b;

    /* renamed from: c  reason: collision with root package name */
    private int f55863c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final e a() {
            return k.e();
        }

        private a() {
        }
    }

    public /* synthetic */ e(long j10, h hVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, hVar);
    }

    public h a() {
        return this.f55861a;
    }

    public abstract Function1 b();

    public abstract boolean c();

    public long d() {
        return this.f55862b;
    }

    public abstract int e();

    public abstract Function1 f();

    public abstract void g(n nVar);

    public abstract void h(int i10);

    private e(long j10, h hVar) {
        this.f55861a = hVar;
        this.f55862b = j10;
        this.f55863c = j10 != k.c() ? k.n(j10, a()) : -1;
    }
}
