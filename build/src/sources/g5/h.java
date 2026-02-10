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
    private final Context f23507a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f23508b;

    /* renamed from: c  reason: collision with root package name */
    private final i5.c f23509c;

    /* renamed from: d  reason: collision with root package name */
    private final b f23510d;

    /* renamed from: e  reason: collision with root package name */
    private final c.b f23511e;

    /* renamed from: f  reason: collision with root package name */
    private final String f23512f;

    /* renamed from: g  reason: collision with root package name */
    private final Bitmap.Config f23513g;

    /* renamed from: h  reason: collision with root package name */
    private final ColorSpace f23514h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f23515i;

    /* renamed from: j  reason: collision with root package name */
    private final Pair f23516j;

    /* renamed from: k  reason: collision with root package name */
    private final k.a f23517k;

    /* renamed from: l  reason: collision with root package name */
    private final List f23518l;

    /* renamed from: m  reason: collision with root package name */
    private final c.a f23519m;

    /* renamed from: n  reason: collision with root package name */
    private final Headers f23520n;

    /* renamed from: o  reason: collision with root package name */
    private final s f23521o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f23522p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f23523q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f23524r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f23525s;

    /* renamed from: t  reason: collision with root package name */
    private final g5.b f23526t;

    /* renamed from: u  reason: collision with root package name */
    private final g5.b f23527u;

    /* renamed from: v  reason: collision with root package name */
    private final g5.b f23528v;

    /* renamed from: w  reason: collision with root package name */
    private final CoroutineDispatcher f23529w;

    /* renamed from: x  reason: collision with root package name */
    private final CoroutineDispatcher f23530x;

    /* renamed from: y  reason: collision with root package name */
    private final CoroutineDispatcher f23531y;

    /* renamed from: z  reason: collision with root package name */
    private final CoroutineDispatcher f23532z;

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
            context = hVar.f23507a;
        }
        return hVar.Q(context);
    }

    public final b A() {
        return this.f23510d;
    }

    public final c.b B() {
        return this.f23511e;
    }

    public final g5.b C() {
        return this.f23526t;
    }

    public final g5.b D() {
        return this.f23528v;
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
        return this.f23515i;
    }

    public final boolean I() {
        return this.f23525s;
    }

    public final h5.h J() {
        return this.C;
    }

    public final h5.j K() {
        return this.B;
    }

    public final s L() {
        return this.f23521o;
    }

    public final i5.c M() {
        return this.f23509c;
    }

    public final CoroutineDispatcher N() {
        return this.f23532z;
    }

    public final List O() {
        return this.f23518l;
    }

    public final c.a P() {
        return this.f23519m;
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
            if (Intrinsics.areEqual(this.f23507a, hVar.f23507a) && Intrinsics.areEqual(this.f23508b, hVar.f23508b) && Intrinsics.areEqual(this.f23509c, hVar.f23509c) && Intrinsics.areEqual(this.f23510d, hVar.f23510d) && Intrinsics.areEqual(this.f23511e, hVar.f23511e) && Intrinsics.areEqual(this.f23512f, hVar.f23512f) && this.f23513g == hVar.f23513g) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f23514h, hVar.f23514h)) && this.f23515i == hVar.f23515i && Intrinsics.areEqual(this.f23516j, hVar.f23516j) && Intrinsics.areEqual(this.f23517k, hVar.f23517k) && Intrinsics.areEqual(this.f23518l, hVar.f23518l) && Intrinsics.areEqual(this.f23519m, hVar.f23519m) && Intrinsics.areEqual(this.f23520n, hVar.f23520n) && Intrinsics.areEqual(this.f23521o, hVar.f23521o) && this.f23522p == hVar.f23522p && this.f23523q == hVar.f23523q && this.f23524r == hVar.f23524r && this.f23525s == hVar.f23525s && this.f23526t == hVar.f23526t && this.f23527u == hVar.f23527u && this.f23528v == hVar.f23528v && Intrinsics.areEqual(this.f23529w, hVar.f23529w) && Intrinsics.areEqual(this.f23530x, hVar.f23530x) && Intrinsics.areEqual(this.f23531y, hVar.f23531y) && Intrinsics.areEqual(this.f23532z, hVar.f23532z) && Intrinsics.areEqual(this.E, hVar.E) && Intrinsics.areEqual(this.F, hVar.F) && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.A, hVar.A) && Intrinsics.areEqual(this.B, hVar.B) && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && Intrinsics.areEqual(this.L, hVar.L) && Intrinsics.areEqual(this.M, hVar.M)) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final boolean g() {
        return this.f23522p;
    }

    public final boolean h() {
        return this.f23523q;
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
        int hashCode = ((this.f23507a.hashCode() * 31) + this.f23508b.hashCode()) * 31;
        i5.c cVar = this.f23509c;
        int i23 = 0;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i24 = (hashCode + i10) * 31;
        b bVar = this.f23510d;
        if (bVar != null) {
            i11 = bVar.hashCode();
        } else {
            i11 = 0;
        }
        int i25 = (i24 + i11) * 31;
        c.b bVar2 = this.f23511e;
        if (bVar2 != null) {
            i12 = bVar2.hashCode();
        } else {
            i12 = 0;
        }
        int i26 = (i25 + i12) * 31;
        String str = this.f23512f;
        if (str != null) {
            i13 = str.hashCode();
        } else {
            i13 = 0;
        }
        int hashCode2 = (((i26 + i13) * 31) + this.f23513g.hashCode()) * 31;
        ColorSpace colorSpace = this.f23514h;
        if (colorSpace != null) {
            i14 = colorSpace.hashCode();
        } else {
            i14 = 0;
        }
        int hashCode3 = (((hashCode2 + i14) * 31) + this.f23515i.hashCode()) * 31;
        Pair pair = this.f23516j;
        if (pair != null) {
            i15 = pair.hashCode();
        } else {
            i15 = 0;
        }
        int i27 = (hashCode3 + i15) * 31;
        k.a aVar = this.f23517k;
        if (aVar != null) {
            i16 = aVar.hashCode();
        } else {
            i16 = 0;
        }
        int hashCode4 = (((((((((((((((((((((((((((((((((((((((i27 + i16) * 31) + this.f23518l.hashCode()) * 31) + this.f23519m.hashCode()) * 31) + this.f23520n.hashCode()) * 31) + this.f23521o.hashCode()) * 31) + Boolean.hashCode(this.f23522p)) * 31) + Boolean.hashCode(this.f23523q)) * 31) + Boolean.hashCode(this.f23524r)) * 31) + Boolean.hashCode(this.f23525s)) * 31) + this.f23526t.hashCode()) * 31) + this.f23527u.hashCode()) * 31) + this.f23528v.hashCode()) * 31) + this.f23529w.hashCode()) * 31) + this.f23530x.hashCode()) * 31) + this.f23531y.hashCode()) * 31) + this.f23532z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31;
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
        return this.f23524r;
    }

    public final Bitmap.Config j() {
        return this.f23513g;
    }

    public final ColorSpace k() {
        return this.f23514h;
    }

    public final Context l() {
        return this.f23507a;
    }

    public final Object m() {
        return this.f23508b;
    }

    public final CoroutineDispatcher n() {
        return this.f23531y;
    }

    public final k.a o() {
        return this.f23517k;
    }

    public final c p() {
        return this.M;
    }

    public final d q() {
        return this.L;
    }

    public final String r() {
        return this.f23512f;
    }

    public final g5.b s() {
        return this.f23527u;
    }

    public final Drawable t() {
        return k5.i.c(this, this.I, this.H, this.M.h());
    }

    public final Drawable u() {
        return k5.i.c(this, this.K, this.J, this.M.i());
    }

    public final CoroutineDispatcher v() {
        return this.f23530x;
    }

    public final Pair w() {
        return this.f23516j;
    }

    public final Headers x() {
        return this.f23520n;
    }

    public final CoroutineDispatcher y() {
        return this.f23529w;
    }

    public final Lifecycle z() {
        return this.A;
    }

    private h(Context context, Object obj, i5.c cVar, b bVar, c.b bVar2, String str, Bitmap.Config config, ColorSpace colorSpace, h5.e eVar, Pair pair, k.a aVar, List list, c.a aVar2, Headers headers, s sVar, boolean z10, boolean z11, boolean z12, boolean z13, g5.b bVar3, g5.b bVar4, g5.b bVar5, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, Lifecycle lifecycle, h5.j jVar, h5.h hVar, n nVar, c.b bVar6, Integer num, Drawable drawable, Integer num2, Drawable drawable2, Integer num3, Drawable drawable3, d dVar, c cVar2) {
        this.f23507a = context;
        this.f23508b = obj;
        this.f23509c = cVar;
        this.f23510d = bVar;
        this.f23511e = bVar2;
        this.f23512f = str;
        this.f23513g = config;
        this.f23514h = colorSpace;
        this.f23515i = eVar;
        this.f23516j = pair;
        this.f23517k = aVar;
        this.f23518l = list;
        this.f23519m = aVar2;
        this.f23520n = headers;
        this.f23521o = sVar;
        this.f23522p = z10;
        this.f23523q = z11;
        this.f23524r = z12;
        this.f23525s = z13;
        this.f23526t = bVar3;
        this.f23527u = bVar4;
        this.f23528v = bVar5;
        this.f23529w = coroutineDispatcher;
        this.f23530x = coroutineDispatcher2;
        this.f23531y = coroutineDispatcher3;
        this.f23532z = coroutineDispatcher4;
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
        private final Context f23533a;

        /* renamed from: b  reason: collision with root package name */
        private c f23534b;

        /* renamed from: c  reason: collision with root package name */
        private Object f23535c;

        /* renamed from: d  reason: collision with root package name */
        private i5.c f23536d;

        /* renamed from: e  reason: collision with root package name */
        private b f23537e;

        /* renamed from: f  reason: collision with root package name */
        private c.b f23538f;

        /* renamed from: g  reason: collision with root package name */
        private String f23539g;

        /* renamed from: h  reason: collision with root package name */
        private Bitmap.Config f23540h;

        /* renamed from: i  reason: collision with root package name */
        private ColorSpace f23541i;

        /* renamed from: j  reason: collision with root package name */
        private h5.e f23542j;

        /* renamed from: k  reason: collision with root package name */
        private Pair f23543k;

        /* renamed from: l  reason: collision with root package name */
        private k.a f23544l;

        /* renamed from: m  reason: collision with root package name */
        private List f23545m;

        /* renamed from: n  reason: collision with root package name */
        private c.a f23546n;

        /* renamed from: o  reason: collision with root package name */
        private Headers.a f23547o;

        /* renamed from: p  reason: collision with root package name */
        private Map f23548p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f23549q;

        /* renamed from: r  reason: collision with root package name */
        private Boolean f23550r;

        /* renamed from: s  reason: collision with root package name */
        private Boolean f23551s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f23552t;

        /* renamed from: u  reason: collision with root package name */
        private g5.b f23553u;

        /* renamed from: v  reason: collision with root package name */
        private g5.b f23554v;

        /* renamed from: w  reason: collision with root package name */
        private g5.b f23555w;

        /* renamed from: x  reason: collision with root package name */
        private CoroutineDispatcher f23556x;

        /* renamed from: y  reason: collision with root package name */
        private CoroutineDispatcher f23557y;

        /* renamed from: z  reason: collision with root package name */
        private CoroutineDispatcher f23558z;

        public a(Context context) {
            this.f23533a = context;
            this.f23534b = k5.i.b();
            this.f23535c = null;
            this.f23536d = null;
            this.f23537e = null;
            this.f23538f = null;
            this.f23539g = null;
            this.f23540h = null;
            if (Build.VERSION.SDK_INT >= 26) {
                this.f23541i = null;
            }
            this.f23542j = null;
            this.f23543k = null;
            this.f23544l = null;
            this.f23545m = CollectionsKt.l();
            this.f23546n = null;
            this.f23547o = null;
            this.f23548p = null;
            this.f23549q = true;
            this.f23550r = null;
            this.f23551s = null;
            this.f23552t = true;
            this.f23553u = null;
            this.f23554v = null;
            this.f23555w = null;
            this.f23556x = null;
            this.f23557y = null;
            this.f23558z = null;
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
            i5.c cVar = this.f23536d;
            if (cVar instanceof i5.d) {
                context = ((i5.d) cVar).getView().getContext();
            } else {
                context = this.f23533a;
            }
            Lifecycle c10 = k5.d.c(context);
            if (c10 == null) {
                return g.f23505b;
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
                i5.c cVar = this.f23536d;
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
            return h5.h.f24979e;
        }

        private final h5.j n() {
            ImageView.ScaleType scaleType;
            i5.c cVar = this.f23536d;
            if (cVar instanceof i5.d) {
                View view = ((i5.d) cVar).getView();
                if ((view instanceof ImageView) && ((scaleType = ((ImageView) view).getScaleType()) == ImageView.ScaleType.CENTER || scaleType == ImageView.ScaleType.MATRIX)) {
                    return h5.k.a(h5.i.f24983d);
                }
                return h5.m.b(view, false, 2, null);
            }
            return new h5.d(this.f23533a);
        }

        public final h a() {
            Headers headers;
            s sVar;
            boolean c10;
            boolean d10;
            n nVar;
            Context context = this.f23533a;
            Object obj = this.f23535c;
            if (obj == null) {
                obj = j.f23559a;
            }
            Object obj2 = obj;
            i5.c cVar = this.f23536d;
            b bVar = this.f23537e;
            c.b bVar2 = this.f23538f;
            String str = this.f23539g;
            Bitmap.Config config = this.f23540h;
            if (config == null) {
                config = this.f23534b.e();
            }
            Bitmap.Config config2 = config;
            ColorSpace colorSpace = this.f23541i;
            h5.e eVar = this.f23542j;
            if (eVar == null) {
                eVar = this.f23534b.o();
            }
            h5.e eVar2 = eVar;
            Pair pair = this.f23543k;
            k.a aVar = this.f23544l;
            List list = this.f23545m;
            c.a aVar2 = this.f23546n;
            if (aVar2 == null) {
                aVar2 = this.f23534b.q();
            }
            c.a aVar3 = aVar2;
            Headers.a aVar4 = this.f23547o;
            if (aVar4 != null) {
                headers = aVar4.f();
            } else {
                headers = null;
            }
            Headers x10 = k5.k.x(headers);
            Map map = this.f23548p;
            if (map != null) {
                sVar = s.f23590b.a(map);
            } else {
                sVar = null;
            }
            s w10 = k5.k.w(sVar);
            boolean z10 = this.f23549q;
            Boolean bool = this.f23550r;
            if (bool != null) {
                c10 = bool.booleanValue();
            } else {
                c10 = this.f23534b.c();
            }
            boolean z11 = c10;
            Boolean bool2 = this.f23551s;
            if (bool2 != null) {
                d10 = bool2.booleanValue();
            } else {
                d10 = this.f23534b.d();
            }
            boolean z12 = d10;
            boolean z13 = this.f23552t;
            g5.b bVar3 = this.f23553u;
            if (bVar3 == null) {
                bVar3 = this.f23534b.l();
            }
            g5.b bVar4 = bVar3;
            g5.b bVar5 = this.f23554v;
            if (bVar5 == null) {
                bVar5 = this.f23534b.g();
            }
            g5.b bVar6 = bVar5;
            g5.b bVar7 = this.f23555w;
            if (bVar7 == null) {
                bVar7 = this.f23534b.m();
            }
            g5.b bVar8 = bVar7;
            CoroutineDispatcher coroutineDispatcher = this.f23556x;
            if (coroutineDispatcher == null) {
                coroutineDispatcher = this.f23534b.k();
            }
            CoroutineDispatcher coroutineDispatcher2 = coroutineDispatcher;
            CoroutineDispatcher coroutineDispatcher3 = this.f23557y;
            if (coroutineDispatcher3 == null) {
                coroutineDispatcher3 = this.f23534b.j();
            }
            CoroutineDispatcher coroutineDispatcher4 = coroutineDispatcher3;
            CoroutineDispatcher coroutineDispatcher5 = this.f23558z;
            if (coroutineDispatcher5 == null) {
                coroutineDispatcher5 = this.f23534b.f();
            }
            CoroutineDispatcher coroutineDispatcher6 = coroutineDispatcher5;
            CoroutineDispatcher coroutineDispatcher7 = this.A;
            if (coroutineDispatcher7 == null) {
                coroutineDispatcher7 = this.f23534b.p();
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
            return new h(context, obj2, cVar, bVar, bVar2, str, config2, colorSpace, eVar2, pair, aVar, list, aVar3, x10, w10, z10, z11, z12, z13, bVar4, bVar6, bVar8, coroutineDispatcher2, coroutineDispatcher4, coroutineDispatcher6, coroutineDispatcher8, lifecycle2, jVar2, hVar2, k5.k.v(nVar), this.C, this.D, this.E, this.F, this.G, this.H, this.I, new d(this.J, this.K, this.L, this.f23556x, this.f23557y, this.f23558z, this.A, this.f23546n, this.f23542j, this.f23540h, this.f23550r, this.f23551s, this.f23553u, this.f23554v, this.f23555w), this.f23534b, null);
        }

        public final a b(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0448a(i10, false, 2, null);
            } else {
                aVar = c.a.f30034b;
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
            this.f23535c = obj;
            return this;
        }

        public final a e(k.a aVar) {
            this.f23544l = aVar;
            return this;
        }

        public final a f(c cVar) {
            this.f23534b = cVar;
            j();
            return this;
        }

        public final a g(c.b bVar) {
            this.f23538f = bVar;
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
            this.f23536d = cVar;
            k();
            return this;
        }

        public final a t(c.a aVar) {
            this.f23546n = aVar;
            return this;
        }

        public a(h hVar, Context context) {
            this.f23533a = context;
            this.f23534b = hVar.p();
            this.f23535c = hVar.m();
            this.f23536d = hVar.M();
            this.f23537e = hVar.A();
            this.f23538f = hVar.B();
            this.f23539g = hVar.r();
            this.f23540h = hVar.q().c();
            if (Build.VERSION.SDK_INT >= 26) {
                this.f23541i = hVar.k();
            }
            this.f23542j = hVar.q().k();
            this.f23543k = hVar.w();
            this.f23544l = hVar.o();
            this.f23545m = hVar.O();
            this.f23546n = hVar.q().o();
            this.f23547o = hVar.x().g();
            this.f23548p = o0.y(hVar.L().a());
            this.f23549q = hVar.g();
            this.f23550r = hVar.q().a();
            this.f23551s = hVar.q().b();
            this.f23552t = hVar.I();
            this.f23553u = hVar.q().i();
            this.f23554v = hVar.q().e();
            this.f23555w = hVar.q().j();
            this.f23556x = hVar.q().g();
            this.f23557y = hVar.q().f();
            this.f23558z = hVar.q().d();
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
