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
    private final Context f25738a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f25739b;

    /* renamed from: c  reason: collision with root package name */
    private final i5.c f25740c;

    /* renamed from: d  reason: collision with root package name */
    private final b f25741d;

    /* renamed from: e  reason: collision with root package name */
    private final c.b f25742e;

    /* renamed from: f  reason: collision with root package name */
    private final String f25743f;

    /* renamed from: g  reason: collision with root package name */
    private final Bitmap.Config f25744g;

    /* renamed from: h  reason: collision with root package name */
    private final ColorSpace f25745h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f25746i;

    /* renamed from: j  reason: collision with root package name */
    private final Pair f25747j;

    /* renamed from: k  reason: collision with root package name */
    private final k.a f25748k;

    /* renamed from: l  reason: collision with root package name */
    private final List f25749l;

    /* renamed from: m  reason: collision with root package name */
    private final c.a f25750m;

    /* renamed from: n  reason: collision with root package name */
    private final Headers f25751n;

    /* renamed from: o  reason: collision with root package name */
    private final s f25752o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f25753p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f25754q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f25755r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f25756s;

    /* renamed from: t  reason: collision with root package name */
    private final g5.b f25757t;

    /* renamed from: u  reason: collision with root package name */
    private final g5.b f25758u;

    /* renamed from: v  reason: collision with root package name */
    private final g5.b f25759v;

    /* renamed from: w  reason: collision with root package name */
    private final CoroutineDispatcher f25760w;

    /* renamed from: x  reason: collision with root package name */
    private final CoroutineDispatcher f25761x;

    /* renamed from: y  reason: collision with root package name */
    private final CoroutineDispatcher f25762y;

    /* renamed from: z  reason: collision with root package name */
    private final CoroutineDispatcher f25763z;

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
            context = hVar.f25738a;
        }
        return hVar.Q(context);
    }

    public final b A() {
        return this.f25741d;
    }

    public final c.b B() {
        return this.f25742e;
    }

    public final g5.b C() {
        return this.f25757t;
    }

    public final g5.b D() {
        return this.f25759v;
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
        return this.f25746i;
    }

    public final boolean I() {
        return this.f25756s;
    }

    public final h5.h J() {
        return this.C;
    }

    public final h5.j K() {
        return this.B;
    }

    public final s L() {
        return this.f25752o;
    }

    public final i5.c M() {
        return this.f25740c;
    }

    public final CoroutineDispatcher N() {
        return this.f25763z;
    }

    public final List O() {
        return this.f25749l;
    }

    public final c.a P() {
        return this.f25750m;
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
            if (Intrinsics.areEqual(this.f25738a, hVar.f25738a) && Intrinsics.areEqual(this.f25739b, hVar.f25739b) && Intrinsics.areEqual(this.f25740c, hVar.f25740c) && Intrinsics.areEqual(this.f25741d, hVar.f25741d) && Intrinsics.areEqual(this.f25742e, hVar.f25742e) && Intrinsics.areEqual(this.f25743f, hVar.f25743f) && this.f25744g == hVar.f25744g) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f25745h, hVar.f25745h)) && this.f25746i == hVar.f25746i && Intrinsics.areEqual(this.f25747j, hVar.f25747j) && Intrinsics.areEqual(this.f25748k, hVar.f25748k) && Intrinsics.areEqual(this.f25749l, hVar.f25749l) && Intrinsics.areEqual(this.f25750m, hVar.f25750m) && Intrinsics.areEqual(this.f25751n, hVar.f25751n) && Intrinsics.areEqual(this.f25752o, hVar.f25752o) && this.f25753p == hVar.f25753p && this.f25754q == hVar.f25754q && this.f25755r == hVar.f25755r && this.f25756s == hVar.f25756s && this.f25757t == hVar.f25757t && this.f25758u == hVar.f25758u && this.f25759v == hVar.f25759v && Intrinsics.areEqual(this.f25760w, hVar.f25760w) && Intrinsics.areEqual(this.f25761x, hVar.f25761x) && Intrinsics.areEqual(this.f25762y, hVar.f25762y) && Intrinsics.areEqual(this.f25763z, hVar.f25763z) && Intrinsics.areEqual(this.E, hVar.E) && Intrinsics.areEqual(this.F, hVar.F) && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.A, hVar.A) && Intrinsics.areEqual(this.B, hVar.B) && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && Intrinsics.areEqual(this.L, hVar.L) && Intrinsics.areEqual(this.M, hVar.M)) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final boolean g() {
        return this.f25753p;
    }

    public final boolean h() {
        return this.f25754q;
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
        int hashCode = ((this.f25738a.hashCode() * 31) + this.f25739b.hashCode()) * 31;
        i5.c cVar = this.f25740c;
        int i23 = 0;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i24 = (hashCode + i10) * 31;
        b bVar = this.f25741d;
        if (bVar != null) {
            i11 = bVar.hashCode();
        } else {
            i11 = 0;
        }
        int i25 = (i24 + i11) * 31;
        c.b bVar2 = this.f25742e;
        if (bVar2 != null) {
            i12 = bVar2.hashCode();
        } else {
            i12 = 0;
        }
        int i26 = (i25 + i12) * 31;
        String str = this.f25743f;
        if (str != null) {
            i13 = str.hashCode();
        } else {
            i13 = 0;
        }
        int hashCode2 = (((i26 + i13) * 31) + this.f25744g.hashCode()) * 31;
        ColorSpace colorSpace = this.f25745h;
        if (colorSpace != null) {
            i14 = colorSpace.hashCode();
        } else {
            i14 = 0;
        }
        int hashCode3 = (((hashCode2 + i14) * 31) + this.f25746i.hashCode()) * 31;
        Pair pair = this.f25747j;
        if (pair != null) {
            i15 = pair.hashCode();
        } else {
            i15 = 0;
        }
        int i27 = (hashCode3 + i15) * 31;
        k.a aVar = this.f25748k;
        if (aVar != null) {
            i16 = aVar.hashCode();
        } else {
            i16 = 0;
        }
        int hashCode4 = (((((((((((((((((((((((((((((((((((((((i27 + i16) * 31) + this.f25749l.hashCode()) * 31) + this.f25750m.hashCode()) * 31) + this.f25751n.hashCode()) * 31) + this.f25752o.hashCode()) * 31) + Boolean.hashCode(this.f25753p)) * 31) + Boolean.hashCode(this.f25754q)) * 31) + Boolean.hashCode(this.f25755r)) * 31) + Boolean.hashCode(this.f25756s)) * 31) + this.f25757t.hashCode()) * 31) + this.f25758u.hashCode()) * 31) + this.f25759v.hashCode()) * 31) + this.f25760w.hashCode()) * 31) + this.f25761x.hashCode()) * 31) + this.f25762y.hashCode()) * 31) + this.f25763z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31;
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
        return this.f25755r;
    }

    public final Bitmap.Config j() {
        return this.f25744g;
    }

    public final ColorSpace k() {
        return this.f25745h;
    }

    public final Context l() {
        return this.f25738a;
    }

    public final Object m() {
        return this.f25739b;
    }

    public final CoroutineDispatcher n() {
        return this.f25762y;
    }

    public final k.a o() {
        return this.f25748k;
    }

    public final c p() {
        return this.M;
    }

    public final d q() {
        return this.L;
    }

    public final String r() {
        return this.f25743f;
    }

    public final g5.b s() {
        return this.f25758u;
    }

    public final Drawable t() {
        return k5.i.c(this, this.I, this.H, this.M.h());
    }

    public final Drawable u() {
        return k5.i.c(this, this.K, this.J, this.M.i());
    }

    public final CoroutineDispatcher v() {
        return this.f25761x;
    }

    public final Pair w() {
        return this.f25747j;
    }

    public final Headers x() {
        return this.f25751n;
    }

    public final CoroutineDispatcher y() {
        return this.f25760w;
    }

    public final Lifecycle z() {
        return this.A;
    }

    private h(Context context, Object obj, i5.c cVar, b bVar, c.b bVar2, String str, Bitmap.Config config, ColorSpace colorSpace, h5.e eVar, Pair pair, k.a aVar, List list, c.a aVar2, Headers headers, s sVar, boolean z10, boolean z11, boolean z12, boolean z13, g5.b bVar3, g5.b bVar4, g5.b bVar5, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, Lifecycle lifecycle, h5.j jVar, h5.h hVar, n nVar, c.b bVar6, Integer num, Drawable drawable, Integer num2, Drawable drawable2, Integer num3, Drawable drawable3, d dVar, c cVar2) {
        this.f25738a = context;
        this.f25739b = obj;
        this.f25740c = cVar;
        this.f25741d = bVar;
        this.f25742e = bVar2;
        this.f25743f = str;
        this.f25744g = config;
        this.f25745h = colorSpace;
        this.f25746i = eVar;
        this.f25747j = pair;
        this.f25748k = aVar;
        this.f25749l = list;
        this.f25750m = aVar2;
        this.f25751n = headers;
        this.f25752o = sVar;
        this.f25753p = z10;
        this.f25754q = z11;
        this.f25755r = z12;
        this.f25756s = z13;
        this.f25757t = bVar3;
        this.f25758u = bVar4;
        this.f25759v = bVar5;
        this.f25760w = coroutineDispatcher;
        this.f25761x = coroutineDispatcher2;
        this.f25762y = coroutineDispatcher3;
        this.f25763z = coroutineDispatcher4;
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
        private final Context f25764a;

        /* renamed from: b  reason: collision with root package name */
        private c f25765b;

        /* renamed from: c  reason: collision with root package name */
        private Object f25766c;

        /* renamed from: d  reason: collision with root package name */
        private i5.c f25767d;

        /* renamed from: e  reason: collision with root package name */
        private b f25768e;

        /* renamed from: f  reason: collision with root package name */
        private c.b f25769f;

        /* renamed from: g  reason: collision with root package name */
        private String f25770g;

        /* renamed from: h  reason: collision with root package name */
        private Bitmap.Config f25771h;

        /* renamed from: i  reason: collision with root package name */
        private ColorSpace f25772i;

        /* renamed from: j  reason: collision with root package name */
        private h5.e f25773j;

        /* renamed from: k  reason: collision with root package name */
        private Pair f25774k;

        /* renamed from: l  reason: collision with root package name */
        private k.a f25775l;

        /* renamed from: m  reason: collision with root package name */
        private List f25776m;

        /* renamed from: n  reason: collision with root package name */
        private c.a f25777n;

        /* renamed from: o  reason: collision with root package name */
        private Headers.a f25778o;

        /* renamed from: p  reason: collision with root package name */
        private Map f25779p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f25780q;

        /* renamed from: r  reason: collision with root package name */
        private Boolean f25781r;

        /* renamed from: s  reason: collision with root package name */
        private Boolean f25782s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f25783t;

        /* renamed from: u  reason: collision with root package name */
        private g5.b f25784u;

        /* renamed from: v  reason: collision with root package name */
        private g5.b f25785v;

        /* renamed from: w  reason: collision with root package name */
        private g5.b f25786w;

        /* renamed from: x  reason: collision with root package name */
        private CoroutineDispatcher f25787x;

        /* renamed from: y  reason: collision with root package name */
        private CoroutineDispatcher f25788y;

        /* renamed from: z  reason: collision with root package name */
        private CoroutineDispatcher f25789z;

        public a(Context context) {
            this.f25764a = context;
            this.f25765b = k5.i.b();
            this.f25766c = null;
            this.f25767d = null;
            this.f25768e = null;
            this.f25769f = null;
            this.f25770g = null;
            this.f25771h = null;
            if (Build.VERSION.SDK_INT >= 26) {
                this.f25772i = null;
            }
            this.f25773j = null;
            this.f25774k = null;
            this.f25775l = null;
            this.f25776m = CollectionsKt.l();
            this.f25777n = null;
            this.f25778o = null;
            this.f25779p = null;
            this.f25780q = true;
            this.f25781r = null;
            this.f25782s = null;
            this.f25783t = true;
            this.f25784u = null;
            this.f25785v = null;
            this.f25786w = null;
            this.f25787x = null;
            this.f25788y = null;
            this.f25789z = null;
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
            i5.c cVar = this.f25767d;
            if (cVar instanceof i5.d) {
                context = ((i5.d) cVar).getView().getContext();
            } else {
                context = this.f25764a;
            }
            Lifecycle c10 = k5.d.c(context);
            if (c10 == null) {
                return g.f25736b;
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
                i5.c cVar = this.f25767d;
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
            return h5.h.f27354e;
        }

        private final h5.j n() {
            ImageView.ScaleType scaleType;
            i5.c cVar = this.f25767d;
            if (cVar instanceof i5.d) {
                View view = ((i5.d) cVar).getView();
                if ((view instanceof ImageView) && ((scaleType = ((ImageView) view).getScaleType()) == ImageView.ScaleType.CENTER || scaleType == ImageView.ScaleType.MATRIX)) {
                    return h5.k.a(h5.i.f27358d);
                }
                return h5.m.b(view, false, 2, null);
            }
            return new h5.d(this.f25764a);
        }

        public final h a() {
            Headers headers;
            s sVar;
            boolean c10;
            boolean d10;
            n nVar;
            Context context = this.f25764a;
            Object obj = this.f25766c;
            if (obj == null) {
                obj = j.f25790a;
            }
            Object obj2 = obj;
            i5.c cVar = this.f25767d;
            b bVar = this.f25768e;
            c.b bVar2 = this.f25769f;
            String str = this.f25770g;
            Bitmap.Config config = this.f25771h;
            if (config == null) {
                config = this.f25765b.e();
            }
            Bitmap.Config config2 = config;
            ColorSpace colorSpace = this.f25772i;
            h5.e eVar = this.f25773j;
            if (eVar == null) {
                eVar = this.f25765b.o();
            }
            h5.e eVar2 = eVar;
            Pair pair = this.f25774k;
            k.a aVar = this.f25775l;
            List list = this.f25776m;
            c.a aVar2 = this.f25777n;
            if (aVar2 == null) {
                aVar2 = this.f25765b.q();
            }
            c.a aVar3 = aVar2;
            Headers.a aVar4 = this.f25778o;
            if (aVar4 != null) {
                headers = aVar4.f();
            } else {
                headers = null;
            }
            Headers x10 = k5.k.x(headers);
            Map map = this.f25779p;
            if (map != null) {
                sVar = s.f25821b.a(map);
            } else {
                sVar = null;
            }
            s w10 = k5.k.w(sVar);
            boolean z10 = this.f25780q;
            Boolean bool = this.f25781r;
            if (bool != null) {
                c10 = bool.booleanValue();
            } else {
                c10 = this.f25765b.c();
            }
            boolean z11 = c10;
            Boolean bool2 = this.f25782s;
            if (bool2 != null) {
                d10 = bool2.booleanValue();
            } else {
                d10 = this.f25765b.d();
            }
            boolean z12 = d10;
            boolean z13 = this.f25783t;
            g5.b bVar3 = this.f25784u;
            if (bVar3 == null) {
                bVar3 = this.f25765b.l();
            }
            g5.b bVar4 = bVar3;
            g5.b bVar5 = this.f25785v;
            if (bVar5 == null) {
                bVar5 = this.f25765b.g();
            }
            g5.b bVar6 = bVar5;
            g5.b bVar7 = this.f25786w;
            if (bVar7 == null) {
                bVar7 = this.f25765b.m();
            }
            g5.b bVar8 = bVar7;
            CoroutineDispatcher coroutineDispatcher = this.f25787x;
            if (coroutineDispatcher == null) {
                coroutineDispatcher = this.f25765b.k();
            }
            CoroutineDispatcher coroutineDispatcher2 = coroutineDispatcher;
            CoroutineDispatcher coroutineDispatcher3 = this.f25788y;
            if (coroutineDispatcher3 == null) {
                coroutineDispatcher3 = this.f25765b.j();
            }
            CoroutineDispatcher coroutineDispatcher4 = coroutineDispatcher3;
            CoroutineDispatcher coroutineDispatcher5 = this.f25789z;
            if (coroutineDispatcher5 == null) {
                coroutineDispatcher5 = this.f25765b.f();
            }
            CoroutineDispatcher coroutineDispatcher6 = coroutineDispatcher5;
            CoroutineDispatcher coroutineDispatcher7 = this.A;
            if (coroutineDispatcher7 == null) {
                coroutineDispatcher7 = this.f25765b.p();
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
            return new h(context, obj2, cVar, bVar, bVar2, str, config2, colorSpace, eVar2, pair, aVar, list, aVar3, x10, w10, z10, z11, z12, z13, bVar4, bVar6, bVar8, coroutineDispatcher2, coroutineDispatcher4, coroutineDispatcher6, coroutineDispatcher8, lifecycle2, jVar2, hVar2, k5.k.v(nVar), this.C, this.D, this.E, this.F, this.G, this.H, this.I, new d(this.J, this.K, this.L, this.f25787x, this.f25788y, this.f25789z, this.A, this.f25777n, this.f25773j, this.f25771h, this.f25781r, this.f25782s, this.f25784u, this.f25785v, this.f25786w), this.f25765b, null);
        }

        public final a b(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0411a(i10, false, 2, null);
            } else {
                aVar = c.a.f31860b;
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
            this.f25766c = obj;
            return this;
        }

        public final a e(k.a aVar) {
            this.f25775l = aVar;
            return this;
        }

        public final a f(c cVar) {
            this.f25765b = cVar;
            j();
            return this;
        }

        public final a g(c.b bVar) {
            this.f25769f = bVar;
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
            this.f25767d = cVar;
            k();
            return this;
        }

        public final a t(c.a aVar) {
            this.f25777n = aVar;
            return this;
        }

        public a(h hVar, Context context) {
            this.f25764a = context;
            this.f25765b = hVar.p();
            this.f25766c = hVar.m();
            this.f25767d = hVar.M();
            this.f25768e = hVar.A();
            this.f25769f = hVar.B();
            this.f25770g = hVar.r();
            this.f25771h = hVar.q().c();
            if (Build.VERSION.SDK_INT >= 26) {
                this.f25772i = hVar.k();
            }
            this.f25773j = hVar.q().k();
            this.f25774k = hVar.w();
            this.f25775l = hVar.o();
            this.f25776m = hVar.O();
            this.f25777n = hVar.q().o();
            this.f25778o = hVar.x().g();
            this.f25779p = o0.y(hVar.L().a());
            this.f25780q = hVar.g();
            this.f25781r = hVar.q().a();
            this.f25782s = hVar.q().b();
            this.f25783t = hVar.I();
            this.f25784u = hVar.q().i();
            this.f25785v = hVar.q().e();
            this.f25786w = hVar.q().j();
            this.f25787x = hVar.q().g();
            this.f25788y = hVar.q().f();
            this.f25789z = hVar.q().d();
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
