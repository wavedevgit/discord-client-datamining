package y0;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import u0.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d extends e {

    /* renamed from: m  reason: collision with root package name */
    private static final a f55281m = new a(null);

    /* renamed from: n  reason: collision with root package name */
    public static final int f55282n = 8;

    /* renamed from: o  reason: collision with root package name */
    private static final int[] f55283o = new int[0];

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f55284f;

    /* renamed from: g  reason: collision with root package name */
    private final Function1 f55285g;

    /* renamed from: h  reason: collision with root package name */
    private int f55286h;

    /* renamed from: i  reason: collision with root package name */
    private u0.p f55287i;

    /* renamed from: j  reason: collision with root package name */
    private h f55288j;

    /* renamed from: k  reason: collision with root package name */
    private int[] f55289k;

    /* renamed from: l  reason: collision with root package name */
    private int f55290l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public d(long j10, h hVar, Function1 function1, Function1 function12) {
        super(j10, hVar, null);
        this.f55284f = function1;
        this.f55285g = function12;
        this.f55288j = h.f55302p.a();
        this.f55289k = f55283o;
        this.f55290l = 1;
    }

    @Override // y0.e
    public boolean c() {
        return false;
    }

    @Override // y0.e
    public int e() {
        return this.f55286h;
    }

    @Override // y0.e
    public Function1 f() {
        return this.f55285g;
    }

    @Override // y0.e
    public void g(n nVar) {
        u0.p i10 = i();
        if (i10 == null) {
            i10 = t.a();
            k(i10);
        }
        i10.f(nVar);
    }

    @Override // y0.e
    public void h(int i10) {
        this.f55286h = i10;
    }

    public u0.p i() {
        return this.f55287i;
    }

    @Override // y0.e
    /* renamed from: j */
    public Function1 b() {
        return this.f55284f;
    }

    public void k(u0.p pVar) {
        this.f55287i = pVar;
    }
}
