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
    private final Context f24807a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f24808b;

    /* renamed from: c  reason: collision with root package name */
    private final i5.c f24809c;

    /* renamed from: d  reason: collision with root package name */
    private final b f24810d;

    /* renamed from: e  reason: collision with root package name */
    private final c.b f24811e;

    /* renamed from: f  reason: collision with root package name */
    private final String f24812f;

    /* renamed from: g  reason: collision with root package name */
    private final Bitmap.Config f24813g;

    /* renamed from: h  reason: collision with root package name */
    private final ColorSpace f24814h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f24815i;

    /* renamed from: j  reason: collision with root package name */
    private final Pair f24816j;

    /* renamed from: k  reason: collision with root package name */
    private final k.a f24817k;

    /* renamed from: l  reason: collision with root package name */
    private final List f24818l;

    /* renamed from: m  reason: collision with root package name */
    private final c.a f24819m;

    /* renamed from: n  reason: collision with root package name */
    private final Headers f24820n;

    /* renamed from: o  reason: collision with root package name */
    private final s f24821o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f24822p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f24823q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f24824r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f24825s;

    /* renamed from: t  reason: collision with root package name */
    private final g5.b f24826t;

    /* renamed from: u  reason: collision with root package name */
    private final g5.b f24827u;

    /* renamed from: v  reason: collision with root package name */
    private final g5.b f24828v;

    /* renamed from: w  reason: collision with root package name */
    private final CoroutineDispatcher f24829w;

    /* renamed from: x  reason: collision with root package name */
    private final CoroutineDispatcher f24830x;

    /* renamed from: y  reason: collision with root package name */
    private final CoroutineDispatcher f24831y;

    /* renamed from: z  reason: collision with root package name */
    private final CoroutineDispatcher f24832z;

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
            context = hVar.f24807a;
        }
        return hVar.Q(context);
    }

    public final b A() {
        return this.f24810d;
    }

    public final c.b B() {
        return this.f24811e;
    }

    public final g5.b C() {
        return this.f24826t;
    }

    public final g5.b D() {
        return this.f24828v;
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
        return this.f24815i;
    }

    public final boolean I() {
        return this.f24825s;
    }

    public final h5.h J() {
        return this.C;
    }

    public final h5.j K() {
        return this.B;
    }

    public final s L() {
        return this.f24821o;
    }

    public final i5.c M() {
        return this.f24809c;
    }

    public final CoroutineDispatcher N() {
        return this.f24832z;
    }

    public final List O() {
        return this.f24818l;
    }

    public final c.a P() {
        return this.f24819m;
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
            if (Intrinsics.areEqual(this.f24807a, hVar.f24807a) && Intrinsics.areEqual(this.f24808b, hVar.f24808b) && Intrinsics.areEqual(this.f24809c, hVar.f24809c) && Intrinsics.areEqual(this.f24810d, hVar.f24810d) && Intrinsics.areEqual(this.f24811e, hVar.f24811e) && Intrinsics.areEqual(this.f24812f, hVar.f24812f) && this.f24813g == hVar.f24813g) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f24814h, hVar.f24814h)) && this.f24815i == hVar.f24815i && Intrinsics.areEqual(this.f24816j, hVar.f24816j) && Intrinsics.areEqual(this.f24817k, hVar.f24817k) && Intrinsics.areEqual(this.f24818l, hVar.f24818l) && Intrinsics.areEqual(this.f24819m, hVar.f24819m) && Intrinsics.areEqual(this.f24820n, hVar.f24820n) && Intrinsics.areEqual(this.f24821o, hVar.f24821o) && this.f24822p == hVar.f24822p && this.f24823q == hVar.f24823q && this.f24824r == hVar.f24824r && this.f24825s == hVar.f24825s && this.f24826t == hVar.f24826t && this.f24827u == hVar.f24827u && this.f24828v == hVar.f24828v && Intrinsics.areEqual(this.f24829w, hVar.f24829w) && Intrinsics.areEqual(this.f24830x, hVar.f24830x) && Intrinsics.areEqual(this.f24831y, hVar.f24831y) && Intrinsics.areEqual(this.f24832z, hVar.f24832z) && Intrinsics.areEqual(this.E, hVar.E) && Intrinsics.areEqual(this.F, hVar.F) && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.A, hVar.A) && Intrinsics.areEqual(this.B, hVar.B) && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && Intrinsics.areEqual(this.L, hVar.L) && Intrinsics.areEqual(this.M, hVar.M)) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final boolean g() {
        return this.f24822p;
    }

    public final boolean h() {
        return this.f24823q;
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
        int hashCode = ((this.f24807a.hashCode() * 31) + this.f24808b.hashCode()) * 31;
        i5.c cVar = this.f24809c;
        int i23 = 0;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i24 = (hashCode + i10) * 31;
        b bVar = this.f24810d;
        if (bVar != null) {
            i11 = bVar.hashCode();
        } else {
            i11 = 0;
        }
        int i25 = (i24 + i11) * 31;
        c.b bVar2 = this.f24811e;
        if (bVar2 != null) {
            i12 = bVar2.hashCode();
        } else {
            i12 = 0;
        }
        int i26 = (i25 + i12) * 31;
        String str = this.f24812f;
        if (str != null) {
            i13 = str.hashCode();
        } else {
            i13 = 0;
        }
        int hashCode2 = (((i26 + i13) * 31) + this.f24813g.hashCode()) * 31;
        ColorSpace colorSpace = this.f24814h;
        if (colorSpace != null) {
            i14 = colorSpace.hashCode();
        } else {
            i14 = 0;
        }
        int hashCode3 = (((hashCode2 + i14) * 31) + this.f24815i.hashCode()) * 31;
        Pair pair = this.f24816j;
        if (pair != null) {
            i15 = pair.hashCode();
        } else {
            i15 = 0;
        }
        int i27 = (hashCode3 + i15) * 31;
        k.a aVar = this.f24817k;
        if (aVar != null) {
            i16 = aVar.hashCode();
        } else {
            i16 = 0;
        }
        int hashCode4 = (((((((((((((((((((((((((((((((((((((((i27 + i16) * 31) + this.f24818l.hashCode()) * 31) + this.f24819m.hashCode()) * 31) + this.f24820n.hashCode()) * 31) + this.f24821o.hashCode()) * 31) + Boolean.hashCode(this.f24822p)) * 31) + Boolean.hashCode(this.f24823q)) * 31) + Boolean.hashCode(this.f24824r)) * 31) + Boolean.hashCode(this.f24825s)) * 31) + this.f24826t.hashCode()) * 31) + this.f24827u.hashCode()) * 31) + this.f24828v.hashCode()) * 31) + this.f24829w.hashCode()) * 31) + this.f24830x.hashCode()) * 31) + this.f24831y.hashCode()) * 31) + this.f24832z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31;
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
        return this.f24824r;
    }

    public final Bitmap.Config j() {
        return this.f24813g;
    }

    public final ColorSpace k() {
        return this.f24814h;
    }

    public final Context l() {
        return this.f24807a;
    }

    public final Object m() {
        return this.f24808b;
    }

    public final CoroutineDispatcher n() {
        return this.f24831y;
    }

    public final k.a o() {
        return this.f24817k;
    }

    public final c p() {
        return this.M;
    }

    public final d q() {
        return this.L;
    }

    public final String r() {
        return this.f24812f;
    }

    public final g5.b s() {
        return this.f24827u;
    }

    public final Drawable t() {
        return k5.i.c(this, this.I, this.H, this.M.h());
    }

    public final Drawable u() {
        return k5.i.c(this, this.K, this.J, this.M.i());
    }

    public final CoroutineDispatcher v() {
        return this.f24830x;
    }

    public final Pair w() {
        return this.f24816j;
    }

    public final Headers x() {
        return this.f24820n;
    }

    public final CoroutineDispatcher y() {
        return this.f24829w;
    }

    public final Lifecycle z() {
        return this.A;
    }

    private h(Context context, Object obj, i5.c cVar, b bVar, c.b bVar2, String str, Bitmap.Config config, ColorSpace colorSpace, h5.e eVar, Pair pair, k.a aVar, List list, c.a aVar2, Headers headers, s sVar, boolean z10, boolean z11, boolean z12, boolean z13, g5.b bVar3, g5.b bVar4, g5.b bVar5, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, Lifecycle lifecycle, h5.j jVar, h5.h hVar, n nVar, c.b bVar6, Integer num, Drawable drawable, Integer num2, Drawable drawable2, Integer num3, Drawable drawable3, d dVar, c cVar2) {
        this.f24807a = context;
        this.f24808b = obj;
        this.f24809c = cVar;
        this.f24810d = bVar;
        this.f24811e = bVar2;
        this.f24812f = str;
        this.f24813g = config;
        this.f24814h = colorSpace;
        this.f24815i = eVar;
        this.f24816j = pair;
        this.f24817k = aVar;
        this.f24818l = list;
        this.f24819m = aVar2;
        this.f24820n = headers;
        this.f24821o = sVar;
        this.f24822p = z10;
        this.f24823q = z11;
        this.f24824r = z12;
        this.f24825s = z13;
        this.f24826t = bVar3;
        this.f24827u = bVar4;
        this.f24828v = bVar5;
        this.f24829w = coroutineDispatcher;
        this.f24830x = coroutineDispatcher2;
        this.f24831y = coroutineDispatcher3;
        this.f24832z = coroutineDispatcher4;
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
        private final Context f24833a;

        /* renamed from: b  reason: collision with root package name */
        private c f24834b;

        /* renamed from: c  reason: collision with root package name */
        private Object f24835c;

        /* renamed from: d  reason: collision with root package name */
        private i5.c f24836d;

        /* renamed from: e  reason: collision with root package name */
        private b f24837e;

        /* renamed from: f  reason: collision with root package name */
        private c.b f24838f;

        /* renamed from: g  reason: collision with root package name */
        private String f24839g;

        /* renamed from: h  reason: collision with root package name */
        private Bitmap.Config f24840h;

        /* renamed from: i  reason: collision with root package name */
        private ColorSpace f24841i;

        /* renamed from: j  reason: collision with root package name */
        private h5.e f24842j;

        /* renamed from: k  reason: collision with root package name */
        private Pair f24843k;

        /* renamed from: l  reason: collision with root package name */
        private k.a f24844l;

        /* renamed from: m  reason: collision with root package name */
        private List f24845m;

        /* renamed from: n  reason: collision with root package name */
        private c.a f24846n;

        /* renamed from: o  reason: collision with root package name */
        private Headers.a f24847o;

        /* renamed from: p  reason: collision with root package name */
        private Map f24848p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f24849q;

        /* renamed from: r  reason: collision with root package name */
        private Boolean f24850r;

        /* renamed from: s  reason: collision with root package name */
        private Boolean f24851s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f24852t;

        /* renamed from: u  reason: collision with root package name */
        private g5.b f24853u;

        /* renamed from: v  reason: collision with root package name */
        private g5.b f24854v;

        /* renamed from: w  reason: collision with root package name */
        private g5.b f24855w;

        /* renamed from: x  reason: collision with root package name */
        private CoroutineDispatcher f24856x;

        /* renamed from: y  reason: collision with root package name */
        private CoroutineDispatcher f24857y;

        /* renamed from: z  reason: collision with root package name */
        private CoroutineDispatcher f24858z;

        public a(Context context) {
            this.f24833a = context;
            this.f24834b = k5.i.b();
            this.f24835c = null;
            this.f24836d = null;
            this.f24837e = null;
            this.f24838f = null;
            this.f24839g = null;
            this.f24840h = null;
            if (Build.VERSION.SDK_INT >= 26) {
                this.f24841i = null;
            }
            this.f24842j = null;
            this.f24843k = null;
            this.f24844l = null;
            this.f24845m = CollectionsKt.l();
            this.f24846n = null;
            this.f24847o = null;
            this.f24848p = null;
            this.f24849q = true;
            this.f24850r = null;
            this.f24851s = null;
            this.f24852t = true;
            this.f24853u = null;
            this.f24854v = null;
            this.f24855w = null;
            this.f24856x = null;
            this.f24857y = null;
            this.f24858z = null;
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
            i5.c cVar = this.f24836d;
            if (cVar instanceof i5.d) {
                context = ((i5.d) cVar).getView().getContext();
            } else {
                context = this.f24833a;
            }
            Lifecycle c10 = k5.d.c(context);
            if (c10 == null) {
                return g.f24805b;
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
                i5.c cVar = this.f24836d;
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
            return h5.h.f26197e;
        }

        private final h5.j n() {
            ImageView.ScaleType scaleType;
            i5.c cVar = this.f24836d;
            if (cVar instanceof i5.d) {
                View view = ((i5.d) cVar).getView();
                if ((view instanceof ImageView) && ((scaleType = ((ImageView) view).getScaleType()) == ImageView.ScaleType.CENTER || scaleType == ImageView.ScaleType.MATRIX)) {
                    return h5.k.a(h5.i.f26201d);
                }
                return h5.m.b(view, false, 2, null);
            }
            return new h5.d(this.f24833a);
        }

        public final h a() {
            Headers headers;
            s sVar;
            boolean c10;
            boolean d10;
            n nVar;
            Context context = this.f24833a;
            Object obj = this.f24835c;
            if (obj == null) {
                obj = j.f24859a;
            }
            Object obj2 = obj;
            i5.c cVar = this.f24836d;
            b bVar = this.f24837e;
            c.b bVar2 = this.f24838f;
            String str = this.f24839g;
            Bitmap.Config config = this.f24840h;
            if (config == null) {
                config = this.f24834b.e();
            }
            Bitmap.Config config2 = config;
            ColorSpace colorSpace = this.f24841i;
            h5.e eVar = this.f24842j;
            if (eVar == null) {
                eVar = this.f24834b.o();
            }
            h5.e eVar2 = eVar;
            Pair pair = this.f24843k;
            k.a aVar = this.f24844l;
            List list = this.f24845m;
            c.a aVar2 = this.f24846n;
            if (aVar2 == null) {
                aVar2 = this.f24834b.q();
            }
            c.a aVar3 = aVar2;
            Headers.a aVar4 = this.f24847o;
            if (aVar4 != null) {
                headers = aVar4.f();
            } else {
                headers = null;
            }
            Headers x10 = k5.k.x(headers);
            Map map = this.f24848p;
            if (map != null) {
                sVar = s.f24890b.a(map);
            } else {
                sVar = null;
            }
            s w10 = k5.k.w(sVar);
            boolean z10 = this.f24849q;
            Boolean bool = this.f24850r;
            if (bool != null) {
                c10 = bool.booleanValue();
            } else {
                c10 = this.f24834b.c();
            }
            boolean z11 = c10;
            Boolean bool2 = this.f24851s;
            if (bool2 != null) {
                d10 = bool2.booleanValue();
            } else {
                d10 = this.f24834b.d();
            }
            boolean z12 = d10;
            boolean z13 = this.f24852t;
            g5.b bVar3 = this.f24853u;
            if (bVar3 == null) {
                bVar3 = this.f24834b.l();
            }
            g5.b bVar4 = bVar3;
            g5.b bVar5 = this.f24854v;
            if (bVar5 == null) {
                bVar5 = this.f24834b.g();
            }
            g5.b bVar6 = bVar5;
            g5.b bVar7 = this.f24855w;
            if (bVar7 == null) {
                bVar7 = this.f24834b.m();
            }
            g5.b bVar8 = bVar7;
            CoroutineDispatcher coroutineDispatcher = this.f24856x;
            if (coroutineDispatcher == null) {
                coroutineDispatcher = this.f24834b.k();
            }
            CoroutineDispatcher coroutineDispatcher2 = coroutineDispatcher;
            CoroutineDispatcher coroutineDispatcher3 = this.f24857y;
            if (coroutineDispatcher3 == null) {
                coroutineDispatcher3 = this.f24834b.j();
            }
            CoroutineDispatcher coroutineDispatcher4 = coroutineDispatcher3;
            CoroutineDispatcher coroutineDispatcher5 = this.f24858z;
            if (coroutineDispatcher5 == null) {
                coroutineDispatcher5 = this.f24834b.f();
            }
            CoroutineDispatcher coroutineDispatcher6 = coroutineDispatcher5;
            CoroutineDispatcher coroutineDispatcher7 = this.A;
            if (coroutineDispatcher7 == null) {
                coroutineDispatcher7 = this.f24834b.p();
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
            return new h(context, obj2, cVar, bVar, bVar2, str, config2, colorSpace, eVar2, pair, aVar, list, aVar3, x10, w10, z10, z11, z12, z13, bVar4, bVar6, bVar8, coroutineDispatcher2, coroutineDispatcher4, coroutineDispatcher6, coroutineDispatcher8, lifecycle2, jVar2, hVar2, k5.k.v(nVar), this.C, this.D, this.E, this.F, this.G, this.H, this.I, new d(this.J, this.K, this.L, this.f24856x, this.f24857y, this.f24858z, this.A, this.f24846n, this.f24842j, this.f24840h, this.f24850r, this.f24851s, this.f24853u, this.f24854v, this.f24855w), this.f24834b, null);
        }

        public final a b(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0416a(i10, false, 2, null);
            } else {
                aVar = c.a.f30834b;
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
            this.f24835c = obj;
            return this;
        }

        public final a e(k.a aVar) {
            this.f24844l = aVar;
            return this;
        }

        public final a f(c cVar) {
            this.f24834b = cVar;
            j();
            return this;
        }

        public final a g(c.b bVar) {
            this.f24838f = bVar;
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
            this.f24836d = cVar;
            k();
            return this;
        }

        public final a t(c.a aVar) {
            this.f24846n = aVar;
            return this;
        }

        public a(h hVar, Context context) {
            this.f24833a = context;
            this.f24834b = hVar.p();
            this.f24835c = hVar.m();
            this.f24836d = hVar.M();
            this.f24837e = hVar.A();
            this.f24838f = hVar.B();
            this.f24839g = hVar.r();
            this.f24840h = hVar.q().c();
            if (Build.VERSION.SDK_INT >= 26) {
                this.f24841i = hVar.k();
            }
            this.f24842j = hVar.q().k();
            this.f24843k = hVar.w();
            this.f24844l = hVar.o();
            this.f24845m = hVar.O();
            this.f24846n = hVar.q().o();
            this.f24847o = hVar.x().g();
            this.f24848p = o0.y(hVar.L().a());
            this.f24849q = hVar.g();
            this.f24850r = hVar.q().a();
            this.f24851s = hVar.q().b();
            this.f24852t = hVar.I();
            this.f24853u = hVar.q().i();
            this.f24854v = hVar.q().e();
            this.f24855w = hVar.q().j();
            this.f24856x = hVar.q().g();
            this.f24857y = hVar.q().f();
            this.f24858z = hVar.q().d();
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
