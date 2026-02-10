package y0;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import u0.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d extends e {

    /* renamed from: m  reason: collision with root package name */
    private static final a f55349m = new a(null);

    /* renamed from: n  reason: collision with root package name */
    public static final int f55350n = 8;

    /* renamed from: o  reason: collision with root package name */
    private static final int[] f55351o = new int[0];

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f55352f;

    /* renamed from: g  reason: collision with root package name */
    private final Function1 f55353g;

    /* renamed from: h  reason: collision with root package name */
    private int f55354h;

    /* renamed from: i  reason: collision with root package name */
    private u0.p f55355i;

    /* renamed from: j  reason: collision with root package name */
    private h f55356j;

    /* renamed from: k  reason: collision with root package name */
    private int[] f55357k;

    /* renamed from: l  reason: collision with root package name */
    private int f55358l;

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
        this.f55352f = function1;
        this.f55353g = function12;
        this.f55356j = h.f55370p.a();
        this.f55357k = f55351o;
        this.f55358l = 1;
    }

    @Override // y0.e
    public boolean c() {
        return false;
    }

    @Override // y0.e
    public int e() {
        return this.f55354h;
    }

    @Override // y0.e
    public Function1 f() {
        return this.f55353g;
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
        this.f55354h = i10;
    }

    public u0.p i() {
        return this.f55355i;
    }

    @Override // y0.e
    /* renamed from: j */
    public Function1 b() {
        return this.f55352f;
    }

    public void k(u0.p pVar) {
        this.f55355i = pVar;
    }
}
