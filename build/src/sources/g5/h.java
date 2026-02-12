package g5;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.view.View;
import android.widget.ImageView;
import androidx.lifecycle.Lifecycle;
import e5.c;
import g5.n;
import j5.a;
import j5.c;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
import okhttp3.Headers;
import x4.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {
    private final Lifecycle A;
    private final h5.j B;
    private final h5.h C;
    private final n D;
    private final c.b E;
    private final Integer F;
    private final Drawable G;
    private final Integer H;
    private final Drawable I;
    private final Integer J;
    private final Drawable K;
    private final d L;
    private final c M;

    /* renamed from: a  reason: collision with root package name */
    private final Context f24808a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f24809b;

    /* renamed from: c  reason: collision with root package name */
    private final i5.c f24810c;

    /* renamed from: d  reason: collision with root package name */
    private final b f24811d;

    /* renamed from: e  reason: collision with root package name */
    private final c.b f24812e;

    /* renamed from: f  reason: collision with root package name */
    private final String f24813f;

    /* renamed from: g  reason: collision with root package name */
    private final Bitmap.Config f24814g;

    /* renamed from: h  reason: collision with root package name */
    private final ColorSpace f24815h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f24816i;

    /* renamed from: j  reason: collision with root package name */
    private final Pair f24817j;

    /* renamed from: k  reason: collision with root package name */
    private final k.a f24818k;

    /* renamed from: l  reason: collision with root package name */
    private final List f24819l;

    /* renamed from: m  reason: collision with root package name */
    private final c.a f24820m;

    /* renamed from: n  reason: collision with root package name */
    private final Headers f24821n;

    /* renamed from: o  reason: collision with root package name */
    private final s f24822o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f24823p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f24824q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f24825r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f24826s;

    /* renamed from: t  reason: collision with root package name */
    private final g5.b f24827t;

    /* renamed from: u  reason: collision with root package name */
    private final g5.b f24828u;

    /* renamed from: v  reason: collision with root package name */
    private final g5.b f24829v;

    /* renamed from: w  reason: collision with root package name */
    private final CoroutineDispatcher f24830w;

    /* renamed from: x  reason: collision with root package name */
    private final CoroutineDispatcher f24831x;

    /* renamed from: y  reason: collision with root package name */
    private final CoroutineDispatcher f24832y;

    /* renamed from: z  reason: collision with root package name */
    private final CoroutineDispatcher f24833z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(h hVar);

        void b(h hVar, q qVar);

        void c(h hVar, f fVar);

        void d(h hVar);
    }

    public /* synthetic */ h(Context context, Object obj, i5.c cVar, b bVar, c.b bVar2, String str, Bitmap.Config config, ColorSpace colorSpace, h5.e eVar, Pair pair, k.a aVar, List list, c.a aVar2, Headers headers, s sVar, boolean z10, boolean z11, boolean z12, boolean z13, g5.b bVar3, g5.b bVar4, g5.b bVar5, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, Lifecycle lifecycle, h5.j jVar, h5.h hVar, n nVar, c.b bVar6, Integer num, Drawable drawable, Integer num2, Drawable drawable2, Integer num3, Drawable drawable3, d dVar, c cVar2, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, obj, cVar, bVar, bVar2, str, config, colorSpace, eVar, pair, aVar, list, aVar2, headers, sVar, z10, z11, z12, z13, bVar3, bVar4, bVar5, coroutineDispatcher, coroutineDispatcher2, coroutineDispatcher3, coroutineDispatcher4, lifecycle, jVar, hVar, nVar, bVar6, num, drawable, num2, drawable2, num3, drawable3, dVar, cVar2);
    }

    public static /* synthetic */ a R(h hVar, Context context, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            context = hVar.f24808a;
        }
        return hVar.Q(context);
    }

    public final b A() {
        return this.f24811d;
    }

    public final c.b B() {
        return this.f24812e;
    }

    public final g5.b C() {
        return this.f24827t;
    }

    public final g5.b D() {
        return this.f24829v;
    }

    public final n E() {
        return this.D;
    }

    public final Drawable F() {
        return k5.i.c(this, this.G, this.F, this.M.n());
    }

    public final c.b G() {
        return this.E;
    }

    public final h5.e H() {
        return this.f24816i;
    }

    public final boolean I() {
        return this.f24826s;
    }

    public final h5.h J() {
        return this.C;
    }

    public final h5.j K() {
        return this.B;
    }

    public final s L() {
        return this.f24822o;
    }

    public final i5.c M() {
        return this.f24810c;
    }

    public final CoroutineDispatcher N() {
        return this.f24833z;
    }

    public final List O() {
        return this.f24819l;
    }

    public final c.a P() {
        return this.f24820m;
    }

    public final a Q(Context context) {
        return new a(this, context);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (Intrinsics.areEqual(this.f24808a, hVar.f24808a) && Intrinsics.areEqual(this.f24809b, hVar.f24809b) && Intrinsics.areEqual(this.f24810c, hVar.f24810c) && Intrinsics.areEqual(this.f24811d, hVar.f24811d) && Intrinsics.areEqual(this.f24812e, hVar.f24812e) && Intrinsics.areEqual(this.f24813f, hVar.f24813f) && this.f24814g == hVar.f24814g) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f24815h, hVar.f24815h)) && this.f24816i == hVar.f24816i && Intrinsics.areEqual(this.f24817j, hVar.f24817j) && Intrinsics.areEqual(this.f24818k, hVar.f24818k) && Intrinsics.areEqual(this.f24819l, hVar.f24819l) && Intrinsics.areEqual(this.f24820m, hVar.f24820m) && Intrinsics.areEqual(this.f24821n, hVar.f24821n) && Intrinsics.areEqual(this.f24822o, hVar.f24822o) && this.f24823p == hVar.f24823p && this.f24824q == hVar.f24824q && this.f24825r == hVar.f24825r && this.f24826s == hVar.f24826s && this.f24827t == hVar.f24827t && this.f24828u == hVar.f24828u && this.f24829v == hVar.f24829v && Intrinsics.areEqual(this.f24830w, hVar.f24830w) && Intrinsics.areEqual(this.f24831x, hVar.f24831x) && Intrinsics.areEqual(this.f24832y, hVar.f24832y) && Intrinsics.areEqual(this.f24833z, hVar.f24833z) && Intrinsics.areEqual(this.E, hVar.E) && Intrinsics.areEqual(this.F, hVar.F) && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.A, hVar.A) && Intrinsics.areEqual(this.B, hVar.B) && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && Intrinsics.areEqual(this.L, hVar.L) && Intrinsics.areEqual(this.M, hVar.M)) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final boolean g() {
        return this.f24823p;
    }

    public final boolean h() {
        return this.f24824q;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        int i21;
        int i22;
        int hashCode = ((this.f24808a.hashCode() * 31) + this.f24809b.hashCode()) * 31;
        i5.c cVar = this.f24810c;
        int i23 = 0;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i24 = (hashCode + i10) * 31;
        b bVar = this.f24811d;
        if (bVar != null) {
            i11 = bVar.hashCode();
        } else {
            i11 = 0;
        }
        int i25 = (i24 + i11) * 31;
        c.b bVar2 = this.f24812e;
        if (bVar2 != null) {
            i12 = bVar2.hashCode();
        } else {
            i12 = 0;
        }
        int i26 = (i25 + i12) * 31;
        String str = this.f24813f;
        if (str != null) {
            i13 = str.hashCode();
        } else {
            i13 = 0;
        }
        int hashCode2 = (((i26 + i13) * 31) + this.f24814g.hashCode()) * 31;
        ColorSpace colorSpace = this.f24815h;
        if (colorSpace != null) {
            i14 = colorSpace.hashCode();
        } else {
            i14 = 0;
        }
        int hashCode3 = (((hashCode2 + i14) * 31) + this.f24816i.hashCode()) * 31;
        Pair pair = this.f24817j;
        if (pair != null) {
            i15 = pair.hashCode();
        } else {
            i15 = 0;
        }
        int i27 = (hashCode3 + i15) * 31;
        k.a aVar = this.f24818k;
        if (aVar != null) {
            i16 = aVar.hashCode();
        } else {
            i16 = 0;
        }
        int hashCode4 = (((((((((((((((((((((((((((((((((((((((i27 + i16) * 31) + this.f24819l.hashCode()) * 31) + this.f24820m.hashCode()) * 31) + this.f24821n.hashCode()) * 31) + this.f24822o.hashCode()) * 31) + Boolean.hashCode(this.f24823p)) * 31) + Boolean.hashCode(this.f24824q)) * 31) + Boolean.hashCode(this.f24825r)) * 31) + Boolean.hashCode(this.f24826s)) * 31) + this.f24827t.hashCode()) * 31) + this.f24828u.hashCode()) * 31) + this.f24829v.hashCode()) * 31) + this.f24830w.hashCode()) * 31) + this.f24831x.hashCode()) * 31) + this.f24832y.hashCode()) * 31) + this.f24833z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31;
        c.b bVar3 = this.E;
        if (bVar3 != null) {
            i17 = bVar3.hashCode();
        } else {
            i17 = 0;
        }
        int i28 = (hashCode4 + i17) * 31;
        Integer num = this.F;
        if (num != null) {
            i18 = num.hashCode();
        } else {
            i18 = 0;
        }
        int i29 = (i28 + i18) * 31;
        Drawable drawable = this.G;
        if (drawable != null) {
            i19 = drawable.hashCode();
        } else {
            i19 = 0;
        }
        int i30 = (i29 + i19) * 31;
        Integer num2 = this.H;
        if (num2 != null) {
            i20 = num2.hashCode();
        } else {
            i20 = 0;
        }
        int i31 = (i30 + i20) * 31;
        Drawable drawable2 = this.I;
        if (drawable2 != null) {
            i21 = drawable2.hashCode();
        } else {
            i21 = 0;
        }
        int i32 = (i31 + i21) * 31;
        Integer num3 = this.J;
        if (num3 != null) {
            i22 = num3.hashCode();
        } else {
            i22 = 0;
        }
        int i33 = (i32 + i22) * 31;
        Drawable drawable3 = this.K;
        if (drawable3 != null) {
            i23 = drawable3.hashCode();
        }
        return ((((i33 + i23) * 31) + this.L.hashCode()) * 31) + this.M.hashCode();
    }

    public final boolean i() {
        return this.f24825r;
    }

    public final Bitmap.Config j() {
        return this.f24814g;
    }

    public final ColorSpace k() {
        return this.f24815h;
    }

    public final Context l() {
        return this.f24808a;
    }

    public final Object m() {
        return this.f24809b;
    }

    public final CoroutineDispatcher n() {
        return this.f24832y;
    }

    public final k.a o() {
        return this.f24818k;
    }

    public final c p() {
        return this.M;
    }

    public final d q() {
        return this.L;
    }

    public final String r() {
        return this.f24813f;
    }

    public final g5.b s() {
        return this.f24828u;
    }

    public final Drawable t() {
        return k5.i.c(this, this.I, this.H, this.M.h());
    }

    public final Drawable u() {
        return k5.i.c(this, this.K, this.J, this.M.i());
    }

    public final CoroutineDispatcher v() {
        return this.f24831x;
    }

    public final Pair w() {
        return this.f24817j;
    }

    public final Headers x() {
        return this.f24821n;
    }

    public final CoroutineDispatcher y() {
        return this.f24830w;
    }

    public final Lifecycle z() {
        return this.A;
    }

    private h(Context context, Object obj, i5.c cVar, b bVar, c.b bVar2, String str, Bitmap.Config config, ColorSpace colorSpace, h5.e eVar, Pair pair, k.a aVar, List list, c.a aVar2, Headers headers, s sVar, boolean z10, boolean z11, boolean z12, boolean z13, g5.b bVar3, g5.b bVar4, g5.b bVar5, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, Lifecycle lifecycle, h5.j jVar, h5.h hVar, n nVar, c.b bVar6, Integer num, Drawable drawable, Integer num2, Drawable drawable2, Integer num3, Drawable drawable3, d dVar, c cVar2) {
        this.f24808a = context;
        this.f24809b = obj;
        this.f24810c = cVar;
        this.f24811d = bVar;
        this.f24812e = bVar2;
        this.f24813f = str;
        this.f24814g = config;
        this.f24815h = colorSpace;
        this.f24816i = eVar;
        this.f24817j = pair;
        this.f24818k = aVar;
        this.f24819l = list;
        this.f24820m = aVar2;
        this.f24821n = headers;
        this.f24822o = sVar;
        this.f24823p = z10;
        this.f24824q = z11;
        this.f24825r = z12;
        this.f24826s = z13;
        this.f24827t = bVar3;
        this.f24828u = bVar4;
        this.f24829v = bVar5;
        this.f24830w = coroutineDispatcher;
        this.f24831x = coroutineDispatcher2;
        this.f24832y = coroutineDispatcher3;
        this.f24833z = coroutineDispatcher4;
        this.A = lifecycle;
        this.B = jVar;
        this.C = hVar;
        this.D = nVar;
        this.E = bVar6;
        this.F = num;
        this.G = drawable;
        this.H = num2;
        this.I = drawable2;
        this.J = num3;
        this.K = drawable3;
        this.L = dVar;
        this.M = cVar2;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        private CoroutineDispatcher A;
        private n.a B;
        private c.b C;
        private Integer D;
        private Drawable E;
        private Integer F;
        private Drawable G;
        private Integer H;
        private Drawable I;
        private Lifecycle J;
        private h5.j K;
        private h5.h L;
        private Lifecycle M;
        private h5.j N;
        private h5.h O;

        /* renamed from: a  reason: collision with root package name */
        private final Context f24834a;

        /* renamed from: b  reason: collision with root package name */
        private c f24835b;

        /* renamed from: c  reason: collision with root package name */
        private Object f24836c;

        /* renamed from: d  reason: collision with root package name */
        private i5.c f24837d;

        /* renamed from: e  reason: collision with root package name */
        private b f24838e;

        /* renamed from: f  reason: collision with root package name */
        private c.b f24839f;

        /* renamed from: g  reason: collision with root package name */
        private String f24840g;

        /* renamed from: h  reason: collision with root package name */
        private Bitmap.Config f24841h;

        /* renamed from: i  reason: collision with root package name */
        private ColorSpace f24842i;

        /* renamed from: j  reason: collision with root package name */
        private h5.e f24843j;

        /* renamed from: k  reason: collision with root package name */
        private Pair f24844k;

        /* renamed from: l  reason: collision with root package name */
        private k.a f24845l;

        /* renamed from: m  reason: collision with root package name */
        private List f24846m;

        /* renamed from: n  reason: collision with root package name */
        private c.a f24847n;

        /* renamed from: o  reason: collision with root package name */
        private Headers.a f24848o;

        /* renamed from: p  reason: collision with root package name */
        private Map f24849p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f24850q;

        /* renamed from: r  reason: collision with root package name */
        private Boolean f24851r;

        /* renamed from: s  reason: collision with root package name */
        private Boolean f24852s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f24853t;

        /* renamed from: u  reason: collision with root package name */
        private g5.b f24854u;

        /* renamed from: v  reason: collision with root package name */
        private g5.b f24855v;

        /* renamed from: w  reason: collision with root package name */
        private g5.b f24856w;

        /* renamed from: x  reason: collision with root package name */
        private CoroutineDispatcher f24857x;

        /* renamed from: y  reason: collision with root package name */
        private CoroutineDispatcher f24858y;

        /* renamed from: z  reason: collision with root package name */
        private CoroutineDispatcher f24859z;

        public a(Context context) {
            this.f24834a = context;
            this.f24835b = k5.i.b();
            this.f24836c = null;
            this.f24837d = null;
            this.f24838e = null;
            this.f24839f = null;
            this.f24840g = null;
            this.f24841h = null;
            if (Build.VERSION.SDK_INT >= 26) {
                this.f24842i = null;
            }
            this.f24843j = null;
            this.f24844k = null;
            this.f24845l = null;
            this.f24846m = CollectionsKt.l();
            this.f24847n = null;
            this.f24848o = null;
            this.f24849p = null;
            this.f24850q = true;
            this.f24851r = null;
            this.f24852s = null;
            this.f24853t = true;
            this.f24854u = null;
            this.f24855v = null;
            this.f24856w = null;
            this.f24857x = null;
            this.f24858y = null;
            this.f24859z = null;
            this.A = null;
            this.B = null;
            this.C = null;
            this.D = null;
            this.E = null;
            this.F = null;
            this.G = null;
            this.H = null;
            this.I = null;
            this.J = null;
            this.K = null;
            this.L = null;
            this.M = null;
            this.N = null;
            this.O = null;
        }

        private final void j() {
            this.O = null;
        }

        private final void k() {
            this.M = null;
            this.N = null;
            this.O = null;
        }

        private final Lifecycle l() {
            Context context;
            i5.c cVar = this.f24837d;
            if (cVar instanceof i5.d) {
                context = ((i5.d) cVar).getView().getContext();
            } else {
                context = this.f24834a;
            }
            Lifecycle c10 = k5.d.c(context);
            if (c10 == null) {
                return g.f24806b;
            }
            return c10;
        }

        private final h5.h m() {
            h5.l lVar;
            i5.d dVar;
            View view;
            h5.j jVar = this.K;
            View view2 = null;
            if (jVar instanceof h5.l) {
                lVar = (h5.l) jVar;
            } else {
                lVar = null;
            }
            if (lVar != null && (view = lVar.getView()) != null) {
                view2 = view;
            } else {
                i5.c cVar = this.f24837d;
                if (cVar instanceof i5.d) {
                    dVar = (i5.d) cVar;
                } else {
                    dVar = null;
                }
                if (dVar != null) {
                    view2 = dVar.getView();
                }
            }
            if (view2 instanceof ImageView) {
                return k5.k.n((ImageView) view2);
            }
            return h5.h.f26198e;
        }

        private final h5.j n() {
            ImageView.ScaleType scaleType;
            i5.c cVar = this.f24837d;
            if (cVar instanceof i5.d) {
                View view = ((i5.d) cVar).getView();
                if ((view instanceof ImageView) && ((scaleType = ((ImageView) view).getScaleType()) == ImageView.ScaleType.CENTER || scaleType == ImageView.ScaleType.MATRIX)) {
                    return h5.k.a(h5.i.f26202d);
                }
                return h5.m.b(view, false, 2, null);
            }
            return new h5.d(this.f24834a);
        }

        public final h a() {
            Headers headers;
            s sVar;
            boolean c10;
            boolean d10;
            n nVar;
            Context context = this.f24834a;
            Object obj = this.f24836c;
            if (obj == null) {
                obj = j.f24860a;
            }
            Object obj2 = obj;
            i5.c cVar = this.f24837d;
            b bVar = this.f24838e;
            c.b bVar2 = this.f24839f;
            String str = this.f24840g;
            Bitmap.Config config = this.f24841h;
            if (config == null) {
                config = this.f24835b.e();
            }
            Bitmap.Config config2 = config;
            ColorSpace colorSpace = this.f24842i;
            h5.e eVar = this.f24843j;
            if (eVar == null) {
                eVar = this.f24835b.o();
            }
            h5.e eVar2 = eVar;
            Pair pair = this.f24844k;
            k.a aVar = this.f24845l;
            List list = this.f24846m;
            c.a aVar2 = this.f24847n;
            if (aVar2 == null) {
                aVar2 = this.f24835b.q();
            }
            c.a aVar3 = aVar2;
            Headers.a aVar4 = this.f24848o;
            if (aVar4 != null) {
                headers = aVar4.f();
            } else {
                headers = null;
            }
            Headers x10 = k5.k.x(headers);
            Map map = this.f24849p;
            if (map != null) {
                sVar = s.f24891b.a(map);
            } else {
                sVar = null;
            }
            s w10 = k5.k.w(sVar);
            boolean z10 = this.f24850q;
            Boolean bool = this.f24851r;
            if (bool != null) {
                c10 = bool.booleanValue();
            } else {
                c10 = this.f24835b.c();
            }
            boolean z11 = c10;
            Boolean bool2 = this.f24852s;
            if (bool2 != null) {
                d10 = bool2.booleanValue();
            } else {
                d10 = this.f24835b.d();
            }
            boolean z12 = d10;
            boolean z13 = this.f24853t;
            g5.b bVar3 = this.f24854u;
            if (bVar3 == null) {
                bVar3 = this.f24835b.l();
            }
            g5.b bVar4 = bVar3;
            g5.b bVar5 = this.f24855v;
            if (bVar5 == null) {
                bVar5 = this.f24835b.g();
            }
            g5.b bVar6 = bVar5;
            g5.b bVar7 = this.f24856w;
            if (bVar7 == null) {
                bVar7 = this.f24835b.m();
            }
            g5.b bVar8 = bVar7;
            CoroutineDispatcher coroutineDispatcher = this.f24857x;
            if (coroutineDispatcher == null) {
                coroutineDispatcher = this.f24835b.k();
            }
            CoroutineDispatcher coroutineDispatcher2 = coroutineDispatcher;
            CoroutineDispatcher coroutineDispatcher3 = this.f24858y;
            if (coroutineDispatcher3 == null) {
                coroutineDispatcher3 = this.f24835b.j();
            }
            CoroutineDispatcher coroutineDispatcher4 = coroutineDispatcher3;
            CoroutineDispatcher coroutineDispatcher5 = this.f24859z;
            if (coroutineDispatcher5 == null) {
                coroutineDispatcher5 = this.f24835b.f();
            }
            CoroutineDispatcher coroutineDispatcher6 = coroutineDispatcher5;
            CoroutineDispatcher coroutineDispatcher7 = this.A;
            if (coroutineDispatcher7 == null) {
                coroutineDispatcher7 = this.f24835b.p();
            }
            CoroutineDispatcher coroutineDispatcher8 = coroutineDispatcher7;
            Lifecycle lifecycle = this.J;
            if (lifecycle == null && (lifecycle = this.M) == null) {
                lifecycle = l();
            }
            Lifecycle lifecycle2 = lifecycle;
            h5.j jVar = this.K;
            if (jVar == null && (jVar = this.N) == null) {
                jVar = n();
            }
            h5.j jVar2 = jVar;
            h5.h hVar = this.L;
            if (hVar == null && (hVar = this.O) == null) {
                hVar = m();
            }
            h5.h hVar2 = hVar;
            n.a aVar5 = this.B;
            if (aVar5 != null) {
                nVar = aVar5.a();
            } else {
                nVar = null;
            }
            return new h(context, obj2, cVar, bVar, bVar2, str, config2, colorSpace, eVar2, pair, aVar, list, aVar3, x10, w10, z10, z11, z12, z13, bVar4, bVar6, bVar8, coroutineDispatcher2, coroutineDispatcher4, coroutineDispatcher6, coroutineDispatcher8, lifecycle2, jVar2, hVar2, k5.k.v(nVar), this.C, this.D, this.E, this.F, this.G, this.H, this.I, new d(this.J, this.K, this.L, this.f24857x, this.f24858y, this.f24859z, this.A, this.f24847n, this.f24843j, this.f24841h, this.f24851r, this.f24852s, this.f24854u, this.f24855v, this.f24856w), this.f24835b, null);
        }

        public final a b(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0416a(i10, false, 2, null);
            } else {
                aVar = c.a.f30835b;
            }
            t(aVar);
            return this;
        }

        public final a c(boolean z10) {
            int i10;
            if (z10) {
                i10 = 100;
            } else {
                i10 = 0;
            }
            return b(i10);
        }

        public final a d(Object obj) {
            this.f24836c = obj;
            return this;
        }

        public final a e(k.a aVar) {
            this.f24845l = aVar;
            return this;
        }

        public final a f(c cVar) {
            this.f24835b = cVar;
            j();
            return this;
        }

        public final a g(c.b bVar) {
            this.f24839f = bVar;
            return this;
        }

        public final a h(String str) {
            c.b bVar = null;
            if (str != null) {
                bVar = new c.b(str, null, 2, null);
            }
            return g(bVar);
        }

        public final a i(Drawable drawable) {
            this.E = drawable;
            this.D = 0;
            return this;
        }

        public final a o(int i10, int i11) {
            return p(h5.b.a(i10, i11));
        }

        public final a p(h5.i iVar) {
            return q(h5.k.a(iVar));
        }

        public final a q(h5.j jVar) {
            this.K = jVar;
            k();
            return this;
        }

        public final a r(ImageView imageView) {
            return s(new i5.b(imageView));
        }

        public final a s(i5.c cVar) {
            this.f24837d = cVar;
            k();
            return this;
        }

        public final a t(c.a aVar) {
            this.f24847n = aVar;
            return this;
        }

        public a(h hVar, Context context) {
            this.f24834a = context;
            this.f24835b = hVar.p();
            this.f24836c = hVar.m();
            this.f24837d = hVar.M();
            this.f24838e = hVar.A();
            this.f24839f = hVar.B();
            this.f24840g = hVar.r();
            this.f24841h = hVar.q().c();
            if (Build.VERSION.SDK_INT >= 26) {
                this.f24842i = hVar.k();
            }
            this.f24843j = hVar.q().k();
            this.f24844k = hVar.w();
            this.f24845l = hVar.o();
            this.f24846m = hVar.O();
            this.f24847n = hVar.q().o();
            this.f24848o = hVar.x().g();
            this.f24849p = o0.y(hVar.L().a());
            this.f24850q = hVar.g();
            this.f24851r = hVar.q().a();
            this.f24852s = hVar.q().b();
            this.f24853t = hVar.I();
            this.f24854u = hVar.q().i();
            this.f24855v = hVar.q().e();
            this.f24856w = hVar.q().j();
            this.f24857x = hVar.q().g();
            this.f24858y = hVar.q().f();
            this.f24859z = hVar.q().d();
            this.A = hVar.q().n();
            this.B = hVar.E().d();
            this.C = hVar.G();
            this.D = hVar.F;
            this.E = hVar.G;
            this.F = hVar.H;
            this.G = hVar.I;
            this.H = hVar.J;
            this.I = hVar.K;
            this.J = hVar.q().h();
            this.K = hVar.q().m();
            this.L = hVar.q().l();
            if (hVar.l() == context) {
                this.M = hVar.z();
                this.N = hVar.K();
                this.O = hVar.J();
                return;
            }
            this.M = null;
            this.N = null;
            this.O = null;
        }
    }
}
