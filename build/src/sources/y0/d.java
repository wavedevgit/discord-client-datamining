package y0;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import u0.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d extends e {

    /* renamed from: m  reason: collision with root package name */
    private static final a f54280m = new a(null);

    /* renamed from: n  reason: collision with root package name */
    public static final int f54281n = 8;

    /* renamed from: o  reason: collision with root package name */
    private static final int[] f54282o = new int[0];

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f54283f;

    /* renamed from: g  reason: collision with root package name */
    private final Function1 f54284g;

    /* renamed from: h  reason: collision with root package name */
    private int f54285h;

    /* renamed from: i  reason: collision with root package name */
    private u0.p f54286i;

    /* renamed from: j  reason: collision with root package name */
    private h f54287j;

    /* renamed from: k  reason: collision with root package name */
    private int[] f54288k;

    /* renamed from: l  reason: collision with root package name */
    private int f54289l;

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
        this.f54283f = function1;
        this.f54284g = function12;
        this.f54287j = h.f54301p.a();
        this.f54288k = f54282o;
        this.f54289l = 1;
    }

    @Override // y0.e
    public boolean c() {
        return false;
    }

    @Override // y0.e
    public int e() {
        return this.f54285h;
    }

    @Override // y0.e
    public Function1 f() {
        return this.f54284g;
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
        this.f54285h = i10;
    }

    public u0.p i() {
        return this.f54286i;
    }

    @Override // y0.e
    /* renamed from: j */
    public Function1 b() {
        return this.f54283f;
    }

    public void k(u0.p pVar) {
        this.f54286i = pVar;
    }
}
