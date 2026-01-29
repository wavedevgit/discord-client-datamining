package y0;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: d  reason: collision with root package name */
    public static final a f53848d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final int f53849e = 8;

    /* renamed from: a  reason: collision with root package name */
    private h f53850a;

    /* renamed from: b  reason: collision with root package name */
    private long f53851b;

    /* renamed from: c  reason: collision with root package name */
    private int f53852c;

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
        return this.f53850a;
    }

    public abstract Function1 b();

    public abstract boolean c();

    public long d() {
        return this.f53851b;
    }

    public abstract int e();

    public abstract Function1 f();

    public abstract void g(n nVar);

    public abstract void h(int i10);

    private e(long j10, h hVar) {
        this.f53850a = hVar;
        this.f53851b = j10;
        this.f53852c = j10 != k.c() ? k.n(j10, a()) : -1;
    }
}
