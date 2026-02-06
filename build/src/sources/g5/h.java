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
    private final Context f23982a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f23983b;

    /* renamed from: c  reason: collision with root package name */
    private final i5.c f23984c;

    /* renamed from: d  reason: collision with root package name */
    private final b f23985d;

    /* renamed from: e  reason: collision with root package name */
    private final c.b f23986e;

    /* renamed from: f  reason: collision with root package name */
    private final String f23987f;

    /* renamed from: g  reason: collision with root package name */
    private final Bitmap.Config f23988g;

    /* renamed from: h  reason: collision with root package name */
    private final ColorSpace f23989h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f23990i;

    /* renamed from: j  reason: collision with root package name */
    private final Pair f23991j;

    /* renamed from: k  reason: collision with root package name */
    private final k.a f23992k;

    /* renamed from: l  reason: collision with root package name */
    private final List f23993l;

    /* renamed from: m  reason: collision with root package name */
    private final c.a f23994m;

    /* renamed from: n  reason: collision with root package name */
    private final Headers f23995n;

    /* renamed from: o  reason: collision with root package name */
    private final s f23996o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f23997p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f23998q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f23999r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f24000s;

    /* renamed from: t  reason: collision with root package name */
    private final g5.b f24001t;

    /* renamed from: u  reason: collision with root package name */
    private final g5.b f24002u;

    /* renamed from: v  reason: collision with root package name */
    private final g5.b f24003v;

    /* renamed from: w  reason: collision with root package name */
    private final CoroutineDispatcher f24004w;

    /* renamed from: x  reason: collision with root package name */
    private final CoroutineDispatcher f24005x;

    /* renamed from: y  reason: collision with root package name */
    private final CoroutineDispatcher f24006y;

    /* renamed from: z  reason: collision with root package name */
    private final CoroutineDispatcher f24007z;

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
            context = hVar.f23982a;
        }
        return hVar.Q(context);
    }

    public final b A() {
        return this.f23985d;
    }

    public final c.b B() {
        return this.f23986e;
    }

    public final g5.b C() {
        return this.f24001t;
    }

    public final g5.b D() {
        return this.f24003v;
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
        return this.f23990i;
    }

    public final boolean I() {
        return this.f24000s;
    }

    public final h5.h J() {
        return this.C;
    }

    public final h5.j K() {
        return this.B;
    }

    public final s L() {
        return this.f23996o;
    }

    public final i5.c M() {
        return this.f23984c;
    }

    public final CoroutineDispatcher N() {
        return this.f24007z;
    }

    public final List O() {
        return this.f23993l;
    }

    public final c.a P() {
        return this.f23994m;
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
            if (Intrinsics.areEqual(this.f23982a, hVar.f23982a) && Intrinsics.areEqual(this.f23983b, hVar.f23983b) && Intrinsics.areEqual(this.f23984c, hVar.f23984c) && Intrinsics.areEqual(this.f23985d, hVar.f23985d) && Intrinsics.areEqual(this.f23986e, hVar.f23986e) && Intrinsics.areEqual(this.f23987f, hVar.f23987f) && this.f23988g == hVar.f23988g) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f23989h, hVar.f23989h)) && this.f23990i == hVar.f23990i && Intrinsics.areEqual(this.f23991j, hVar.f23991j) && Intrinsics.areEqual(this.f23992k, hVar.f23992k) && Intrinsics.areEqual(this.f23993l, hVar.f23993l) && Intrinsics.areEqual(this.f23994m, hVar.f23994m) && Intrinsics.areEqual(this.f23995n, hVar.f23995n) && Intrinsics.areEqual(this.f23996o, hVar.f23996o) && this.f23997p == hVar.f23997p && this.f23998q == hVar.f23998q && this.f23999r == hVar.f23999r && this.f24000s == hVar.f24000s && this.f24001t == hVar.f24001t && this.f24002u == hVar.f24002u && this.f24003v == hVar.f24003v && Intrinsics.areEqual(this.f24004w, hVar.f24004w) && Intrinsics.areEqual(this.f24005x, hVar.f24005x) && Intrinsics.areEqual(this.f24006y, hVar.f24006y) && Intrinsics.areEqual(this.f24007z, hVar.f24007z) && Intrinsics.areEqual(this.E, hVar.E) && Intrinsics.areEqual(this.F, hVar.F) && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.A, hVar.A) && Intrinsics.areEqual(this.B, hVar.B) && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && Intrinsics.areEqual(this.L, hVar.L) && Intrinsics.areEqual(this.M, hVar.M)) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final boolean g() {
        return this.f23997p;
    }

    public final boolean h() {
        return this.f23998q;
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
        int hashCode = ((this.f23982a.hashCode() * 31) + this.f23983b.hashCode()) * 31;
        i5.c cVar = this.f23984c;
        int i23 = 0;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i24 = (hashCode + i10) * 31;
        b bVar = this.f23985d;
        if (bVar != null) {
            i11 = bVar.hashCode();
        } else {
            i11 = 0;
        }
        int i25 = (i24 + i11) * 31;
        c.b bVar2 = this.f23986e;
        if (bVar2 != null) {
            i12 = bVar2.hashCode();
        } else {
            i12 = 0;
        }
        int i26 = (i25 + i12) * 31;
        String str = this.f23987f;
        if (str != null) {
            i13 = str.hashCode();
        } else {
            i13 = 0;
        }
        int hashCode2 = (((i26 + i13) * 31) + this.f23988g.hashCode()) * 31;
        ColorSpace colorSpace = this.f23989h;
        if (colorSpace != null) {
            i14 = colorSpace.hashCode();
        } else {
            i14 = 0;
        }
        int hashCode3 = (((hashCode2 + i14) * 31) + this.f23990i.hashCode()) * 31;
        Pair pair = this.f23991j;
        if (pair != null) {
            i15 = pair.hashCode();
        } else {
            i15 = 0;
        }
        int i27 = (hashCode3 + i15) * 31;
        k.a aVar = this.f23992k;
        if (aVar != null) {
            i16 = aVar.hashCode();
        } else {
            i16 = 0;
        }
        int hashCode4 = (((((((((((((((((((((((((((((((((((((((i27 + i16) * 31) + this.f23993l.hashCode()) * 31) + this.f23994m.hashCode()) * 31) + this.f23995n.hashCode()) * 31) + this.f23996o.hashCode()) * 31) + Boolean.hashCode(this.f23997p)) * 31) + Boolean.hashCode(this.f23998q)) * 31) + Boolean.hashCode(this.f23999r)) * 31) + Boolean.hashCode(this.f24000s)) * 31) + this.f24001t.hashCode()) * 31) + this.f24002u.hashCode()) * 31) + this.f24003v.hashCode()) * 31) + this.f24004w.hashCode()) * 31) + this.f24005x.hashCode()) * 31) + this.f24006y.hashCode()) * 31) + this.f24007z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31;
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
        return this.f23999r;
    }

    public final Bitmap.Config j() {
        return this.f23988g;
    }

    public final ColorSpace k() {
        return this.f23989h;
    }

    public final Context l() {
        return this.f23982a;
    }

    public final Object m() {
        return this.f23983b;
    }

    public final CoroutineDispatcher n() {
        return this.f24006y;
    }

    public final k.a o() {
        return this.f23992k;
    }

    public final c p() {
        return this.M;
    }

    public final d q() {
        return this.L;
    }

    public final String r() {
        return this.f23987f;
    }

    public final g5.b s() {
        return this.f24002u;
    }

    public final Drawable t() {
        return k5.i.c(this, this.I, this.H, this.M.h());
    }

    public final Drawable u() {
        return k5.i.c(this, this.K, this.J, this.M.i());
    }

    public final CoroutineDispatcher v() {
        return this.f24005x;
    }

    public final Pair w() {
        return this.f23991j;
    }

    public final Headers x() {
        return this.f23995n;
    }

    public final CoroutineDispatcher y() {
        return this.f24004w;
    }

    public final Lifecycle z() {
        return this.A;
    }

    private h(Context context, Object obj, i5.c cVar, b bVar, c.b bVar2, String str, Bitmap.Config config, ColorSpace colorSpace, h5.e eVar, Pair pair, k.a aVar, List list, c.a aVar2, Headers headers, s sVar, boolean z10, boolean z11, boolean z12, boolean z13, g5.b bVar3, g5.b bVar4, g5.b bVar5, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, Lifecycle lifecycle, h5.j jVar, h5.h hVar, n nVar, c.b bVar6, Integer num, Drawable drawable, Integer num2, Drawable drawable2, Integer num3, Drawable drawable3, d dVar, c cVar2) {
        this.f23982a = context;
        this.f23983b = obj;
        this.f23984c = cVar;
        this.f23985d = bVar;
        this.f23986e = bVar2;
        this.f23987f = str;
        this.f23988g = config;
        this.f23989h = colorSpace;
        this.f23990i = eVar;
        this.f23991j = pair;
        this.f23992k = aVar;
        this.f23993l = list;
        this.f23994m = aVar2;
        this.f23995n = headers;
        this.f23996o = sVar;
        this.f23997p = z10;
        this.f23998q = z11;
        this.f23999r = z12;
        this.f24000s = z13;
        this.f24001t = bVar3;
        this.f24002u = bVar4;
        this.f24003v = bVar5;
        this.f24004w = coroutineDispatcher;
        this.f24005x = coroutineDispatcher2;
        this.f24006y = coroutineDispatcher3;
        this.f24007z = coroutineDispatcher4;
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
        private final Context f24008a;

        /* renamed from: b  reason: collision with root package name */
        private c f24009b;

        /* renamed from: c  reason: collision with root package name */
        private Object f24010c;

        /* renamed from: d  reason: collision with root package name */
        private i5.c f24011d;

        /* renamed from: e  reason: collision with root package name */
        private b f24012e;

        /* renamed from: f  reason: collision with root package name */
        private c.b f24013f;

        /* renamed from: g  reason: collision with root package name */
        private String f24014g;

        /* renamed from: h  reason: collision with root package name */
        private Bitmap.Config f24015h;

        /* renamed from: i  reason: collision with root package name */
        private ColorSpace f24016i;

        /* renamed from: j  reason: collision with root package name */
        private h5.e f24017j;

        /* renamed from: k  reason: collision with root package name */
        private Pair f24018k;

        /* renamed from: l  reason: collision with root package name */
        private k.a f24019l;

        /* renamed from: m  reason: collision with root package name */
        private List f24020m;

        /* renamed from: n  reason: collision with root package name */
        private c.a f24021n;

        /* renamed from: o  reason: collision with root package name */
        private Headers.a f24022o;

        /* renamed from: p  reason: collision with root package name */
        private Map f24023p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f24024q;

        /* renamed from: r  reason: collision with root package name */
        private Boolean f24025r;

        /* renamed from: s  reason: collision with root package name */
        private Boolean f24026s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f24027t;

        /* renamed from: u  reason: collision with root package name */
        private g5.b f24028u;

        /* renamed from: v  reason: collision with root package name */
        private g5.b f24029v;

        /* renamed from: w  reason: collision with root package name */
        private g5.b f24030w;

        /* renamed from: x  reason: collision with root package name */
        private CoroutineDispatcher f24031x;

        /* renamed from: y  reason: collision with root package name */
        private CoroutineDispatcher f24032y;

        /* renamed from: z  reason: collision with root package name */
        private CoroutineDispatcher f24033z;

        public a(Context context) {
            this.f24008a = context;
            this.f24009b = k5.i.b();
            this.f24010c = null;
            this.f24011d = null;
            this.f24012e = null;
            this.f24013f = null;
            this.f24014g = null;
            this.f24015h = null;
            if (Build.VERSION.SDK_INT >= 26) {
                this.f24016i = null;
            }
            this.f24017j = null;
            this.f24018k = null;
            this.f24019l = null;
            this.f24020m = CollectionsKt.l();
            this.f24021n = null;
            this.f24022o = null;
            this.f24023p = null;
            this.f24024q = true;
            this.f24025r = null;
            this.f24026s = null;
            this.f24027t = true;
            this.f24028u = null;
            this.f24029v = null;
            this.f24030w = null;
            this.f24031x = null;
            this.f24032y = null;
            this.f24033z = null;
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
            i5.c cVar = this.f24011d;
            if (cVar instanceof i5.d) {
                context = ((i5.d) cVar).getView().getContext();
            } else {
                context = this.f24008a;
            }
            Lifecycle c10 = k5.d.c(context);
            if (c10 == null) {
                return g.f23980b;
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
                i5.c cVar = this.f24011d;
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
            return h5.h.f25797e;
        }

        private final h5.j n() {
            ImageView.ScaleType scaleType;
            i5.c cVar = this.f24011d;
            if (cVar instanceof i5.d) {
                View view = ((i5.d) cVar).getView();
                if ((view instanceof ImageView) && ((scaleType = ((ImageView) view).getScaleType()) == ImageView.ScaleType.CENTER || scaleType == ImageView.ScaleType.MATRIX)) {
                    return h5.k.a(h5.i.f25801d);
                }
                return h5.m.b(view, false, 2, null);
            }
            return new h5.d(this.f24008a);
        }

        public final h a() {
            Headers headers;
            s sVar;
            boolean c10;
            boolean d10;
            n nVar;
            Context context = this.f24008a;
            Object obj = this.f24010c;
            if (obj == null) {
                obj = j.f24034a;
            }
            Object obj2 = obj;
            i5.c cVar = this.f24011d;
            b bVar = this.f24012e;
            c.b bVar2 = this.f24013f;
            String str = this.f24014g;
            Bitmap.Config config = this.f24015h;
            if (config == null) {
                config = this.f24009b.e();
            }
            Bitmap.Config config2 = config;
            ColorSpace colorSpace = this.f24016i;
            h5.e eVar = this.f24017j;
            if (eVar == null) {
                eVar = this.f24009b.o();
            }
            h5.e eVar2 = eVar;
            Pair pair = this.f24018k;
            k.a aVar = this.f24019l;
            List list = this.f24020m;
            c.a aVar2 = this.f24021n;
            if (aVar2 == null) {
                aVar2 = this.f24009b.q();
            }
            c.a aVar3 = aVar2;
            Headers.a aVar4 = this.f24022o;
            if (aVar4 != null) {
                headers = aVar4.f();
            } else {
                headers = null;
            }
            Headers x10 = k5.k.x(headers);
            Map map = this.f24023p;
            if (map != null) {
                sVar = s.f24065b.a(map);
            } else {
                sVar = null;
            }
            s w10 = k5.k.w(sVar);
            boolean z10 = this.f24024q;
            Boolean bool = this.f24025r;
            if (bool != null) {
                c10 = bool.booleanValue();
            } else {
                c10 = this.f24009b.c();
            }
            boolean z11 = c10;
            Boolean bool2 = this.f24026s;
            if (bool2 != null) {
                d10 = bool2.booleanValue();
            } else {
                d10 = this.f24009b.d();
            }
            boolean z12 = d10;
            boolean z13 = this.f24027t;
            g5.b bVar3 = this.f24028u;
            if (bVar3 == null) {
                bVar3 = this.f24009b.l();
            }
            g5.b bVar4 = bVar3;
            g5.b bVar5 = this.f24029v;
            if (bVar5 == null) {
                bVar5 = this.f24009b.g();
            }
            g5.b bVar6 = bVar5;
            g5.b bVar7 = this.f24030w;
            if (bVar7 == null) {
                bVar7 = this.f24009b.m();
            }
            g5.b bVar8 = bVar7;
            CoroutineDispatcher coroutineDispatcher = this.f24031x;
            if (coroutineDispatcher == null) {
                coroutineDispatcher = this.f24009b.k();
            }
            CoroutineDispatcher coroutineDispatcher2 = coroutineDispatcher;
            CoroutineDispatcher coroutineDispatcher3 = this.f24032y;
            if (coroutineDispatcher3 == null) {
                coroutineDispatcher3 = this.f24009b.j();
            }
            CoroutineDispatcher coroutineDispatcher4 = coroutineDispatcher3;
            CoroutineDispatcher coroutineDispatcher5 = this.f24033z;
            if (coroutineDispatcher5 == null) {
                coroutineDispatcher5 = this.f24009b.f();
            }
            CoroutineDispatcher coroutineDispatcher6 = coroutineDispatcher5;
            CoroutineDispatcher coroutineDispatcher7 = this.A;
            if (coroutineDispatcher7 == null) {
                coroutineDispatcher7 = this.f24009b.p();
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
            return new h(context, obj2, cVar, bVar, bVar2, str, config2, colorSpace, eVar2, pair, aVar, list, aVar3, x10, w10, z10, z11, z12, z13, bVar4, bVar6, bVar8, coroutineDispatcher2, coroutineDispatcher4, coroutineDispatcher6, coroutineDispatcher8, lifecycle2, jVar2, hVar2, k5.k.v(nVar), this.C, this.D, this.E, this.F, this.G, this.H, this.I, new d(this.J, this.K, this.L, this.f24031x, this.f24032y, this.f24033z, this.A, this.f24021n, this.f24017j, this.f24015h, this.f24025r, this.f24026s, this.f24028u, this.f24029v, this.f24030w), this.f24009b, null);
        }

        public final a b(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0414a(i10, false, 2, null);
            } else {
                aVar = c.a.f29732b;
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
            this.f24010c = obj;
            return this;
        }

        public final a e(k.a aVar) {
            this.f24019l = aVar;
            return this;
        }

        public final a f(c cVar) {
            this.f24009b = cVar;
            j();
            return this;
        }

        public final a g(c.b bVar) {
            this.f24013f = bVar;
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
            this.f24011d = cVar;
            k();
            return this;
        }

        public final a t(c.a aVar) {
            this.f24021n = aVar;
            return this;
        }

        public a(h hVar, Context context) {
            this.f24008a = context;
            this.f24009b = hVar.p();
            this.f24010c = hVar.m();
            this.f24011d = hVar.M();
            this.f24012e = hVar.A();
            this.f24013f = hVar.B();
            this.f24014g = hVar.r();
            this.f24015h = hVar.q().c();
            if (Build.VERSION.SDK_INT >= 26) {
                this.f24016i = hVar.k();
            }
            this.f24017j = hVar.q().k();
            this.f24018k = hVar.w();
            this.f24019l = hVar.o();
            this.f24020m = hVar.O();
            this.f24021n = hVar.q().o();
            this.f24022o = hVar.x().g();
            this.f24023p = o0.y(hVar.L().a());
            this.f24024q = hVar.g();
            this.f24025r = hVar.q().a();
            this.f24026s = hVar.q().b();
            this.f24027t = hVar.I();
            this.f24028u = hVar.q().i();
            this.f24029v = hVar.q().e();
            this.f24030w = hVar.q().j();
            this.f24031x = hVar.q().g();
            this.f24032y = hVar.q().f();
            this.f24033z = hVar.q().d();
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
