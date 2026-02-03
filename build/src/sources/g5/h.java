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
    private final Context f25030a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f25031b;

    /* renamed from: c  reason: collision with root package name */
    private final i5.c f25032c;

    /* renamed from: d  reason: collision with root package name */
    private final b f25033d;

    /* renamed from: e  reason: collision with root package name */
    private final c.b f25034e;

    /* renamed from: f  reason: collision with root package name */
    private final String f25035f;

    /* renamed from: g  reason: collision with root package name */
    private final Bitmap.Config f25036g;

    /* renamed from: h  reason: collision with root package name */
    private final ColorSpace f25037h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f25038i;

    /* renamed from: j  reason: collision with root package name */
    private final Pair f25039j;

    /* renamed from: k  reason: collision with root package name */
    private final k.a f25040k;

    /* renamed from: l  reason: collision with root package name */
    private final List f25041l;

    /* renamed from: m  reason: collision with root package name */
    private final c.a f25042m;

    /* renamed from: n  reason: collision with root package name */
    private final Headers f25043n;

    /* renamed from: o  reason: collision with root package name */
    private final s f25044o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f25045p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f25046q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f25047r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f25048s;

    /* renamed from: t  reason: collision with root package name */
    private final g5.b f25049t;

    /* renamed from: u  reason: collision with root package name */
    private final g5.b f25050u;

    /* renamed from: v  reason: collision with root package name */
    private final g5.b f25051v;

    /* renamed from: w  reason: collision with root package name */
    private final CoroutineDispatcher f25052w;

    /* renamed from: x  reason: collision with root package name */
    private final CoroutineDispatcher f25053x;

    /* renamed from: y  reason: collision with root package name */
    private final CoroutineDispatcher f25054y;

    /* renamed from: z  reason: collision with root package name */
    private final CoroutineDispatcher f25055z;

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
            context = hVar.f25030a;
        }
        return hVar.Q(context);
    }

    public final b A() {
        return this.f25033d;
    }

    public final c.b B() {
        return this.f25034e;
    }

    public final g5.b C() {
        return this.f25049t;
    }

    public final g5.b D() {
        return this.f25051v;
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
        return this.f25038i;
    }

    public final boolean I() {
        return this.f25048s;
    }

    public final h5.h J() {
        return this.C;
    }

    public final h5.j K() {
        return this.B;
    }

    public final s L() {
        return this.f25044o;
    }

    public final i5.c M() {
        return this.f25032c;
    }

    public final CoroutineDispatcher N() {
        return this.f25055z;
    }

    public final List O() {
        return this.f25041l;
    }

    public final c.a P() {
        return this.f25042m;
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
            if (Intrinsics.areEqual(this.f25030a, hVar.f25030a) && Intrinsics.areEqual(this.f25031b, hVar.f25031b) && Intrinsics.areEqual(this.f25032c, hVar.f25032c) && Intrinsics.areEqual(this.f25033d, hVar.f25033d) && Intrinsics.areEqual(this.f25034e, hVar.f25034e) && Intrinsics.areEqual(this.f25035f, hVar.f25035f) && this.f25036g == hVar.f25036g) {
                if ((Build.VERSION.SDK_INT < 26 || Intrinsics.areEqual(this.f25037h, hVar.f25037h)) && this.f25038i == hVar.f25038i && Intrinsics.areEqual(this.f25039j, hVar.f25039j) && Intrinsics.areEqual(this.f25040k, hVar.f25040k) && Intrinsics.areEqual(this.f25041l, hVar.f25041l) && Intrinsics.areEqual(this.f25042m, hVar.f25042m) && Intrinsics.areEqual(this.f25043n, hVar.f25043n) && Intrinsics.areEqual(this.f25044o, hVar.f25044o) && this.f25045p == hVar.f25045p && this.f25046q == hVar.f25046q && this.f25047r == hVar.f25047r && this.f25048s == hVar.f25048s && this.f25049t == hVar.f25049t && this.f25050u == hVar.f25050u && this.f25051v == hVar.f25051v && Intrinsics.areEqual(this.f25052w, hVar.f25052w) && Intrinsics.areEqual(this.f25053x, hVar.f25053x) && Intrinsics.areEqual(this.f25054y, hVar.f25054y) && Intrinsics.areEqual(this.f25055z, hVar.f25055z) && Intrinsics.areEqual(this.E, hVar.E) && Intrinsics.areEqual(this.F, hVar.F) && Intrinsics.areEqual(this.G, hVar.G) && Intrinsics.areEqual(this.H, hVar.H) && Intrinsics.areEqual(this.I, hVar.I) && Intrinsics.areEqual(this.J, hVar.J) && Intrinsics.areEqual(this.K, hVar.K) && Intrinsics.areEqual(this.A, hVar.A) && Intrinsics.areEqual(this.B, hVar.B) && this.C == hVar.C && Intrinsics.areEqual(this.D, hVar.D) && Intrinsics.areEqual(this.L, hVar.L) && Intrinsics.areEqual(this.M, hVar.M)) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public final boolean g() {
        return this.f25045p;
    }

    public final boolean h() {
        return this.f25046q;
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
        int hashCode = ((this.f25030a.hashCode() * 31) + this.f25031b.hashCode()) * 31;
        i5.c cVar = this.f25032c;
        int i23 = 0;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        int i24 = (hashCode + i10) * 31;
        b bVar = this.f25033d;
        if (bVar != null) {
            i11 = bVar.hashCode();
        } else {
            i11 = 0;
        }
        int i25 = (i24 + i11) * 31;
        c.b bVar2 = this.f25034e;
        if (bVar2 != null) {
            i12 = bVar2.hashCode();
        } else {
            i12 = 0;
        }
        int i26 = (i25 + i12) * 31;
        String str = this.f25035f;
        if (str != null) {
            i13 = str.hashCode();
        } else {
            i13 = 0;
        }
        int hashCode2 = (((i26 + i13) * 31) + this.f25036g.hashCode()) * 31;
        ColorSpace colorSpace = this.f25037h;
        if (colorSpace != null) {
            i14 = colorSpace.hashCode();
        } else {
            i14 = 0;
        }
        int hashCode3 = (((hashCode2 + i14) * 31) + this.f25038i.hashCode()) * 31;
        Pair pair = this.f25039j;
        if (pair != null) {
            i15 = pair.hashCode();
        } else {
            i15 = 0;
        }
        int i27 = (hashCode3 + i15) * 31;
        k.a aVar = this.f25040k;
        if (aVar != null) {
            i16 = aVar.hashCode();
        } else {
            i16 = 0;
        }
        int hashCode4 = (((((((((((((((((((((((((((((((((((((((i27 + i16) * 31) + this.f25041l.hashCode()) * 31) + this.f25042m.hashCode()) * 31) + this.f25043n.hashCode()) * 31) + this.f25044o.hashCode()) * 31) + Boolean.hashCode(this.f25045p)) * 31) + Boolean.hashCode(this.f25046q)) * 31) + Boolean.hashCode(this.f25047r)) * 31) + Boolean.hashCode(this.f25048s)) * 31) + this.f25049t.hashCode()) * 31) + this.f25050u.hashCode()) * 31) + this.f25051v.hashCode()) * 31) + this.f25052w.hashCode()) * 31) + this.f25053x.hashCode()) * 31) + this.f25054y.hashCode()) * 31) + this.f25055z.hashCode()) * 31) + this.A.hashCode()) * 31) + this.B.hashCode()) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31;
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
        return this.f25047r;
    }

    public final Bitmap.Config j() {
        return this.f25036g;
    }

    public final ColorSpace k() {
        return this.f25037h;
    }

    public final Context l() {
        return this.f25030a;
    }

    public final Object m() {
        return this.f25031b;
    }

    public final CoroutineDispatcher n() {
        return this.f25054y;
    }

    public final k.a o() {
        return this.f25040k;
    }

    public final c p() {
        return this.M;
    }

    public final d q() {
        return this.L;
    }

    public final String r() {
        return this.f25035f;
    }

    public final g5.b s() {
        return this.f25050u;
    }

    public final Drawable t() {
        return k5.i.c(this, this.I, this.H, this.M.h());
    }

    public final Drawable u() {
        return k5.i.c(this, this.K, this.J, this.M.i());
    }

    public final CoroutineDispatcher v() {
        return this.f25053x;
    }

    public final Pair w() {
        return this.f25039j;
    }

    public final Headers x() {
        return this.f25043n;
    }

    public final CoroutineDispatcher y() {
        return this.f25052w;
    }

    public final Lifecycle z() {
        return this.A;
    }

    private h(Context context, Object obj, i5.c cVar, b bVar, c.b bVar2, String str, Bitmap.Config config, ColorSpace colorSpace, h5.e eVar, Pair pair, k.a aVar, List list, c.a aVar2, Headers headers, s sVar, boolean z10, boolean z11, boolean z12, boolean z13, g5.b bVar3, g5.b bVar4, g5.b bVar5, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, Lifecycle lifecycle, h5.j jVar, h5.h hVar, n nVar, c.b bVar6, Integer num, Drawable drawable, Integer num2, Drawable drawable2, Integer num3, Drawable drawable3, d dVar, c cVar2) {
        this.f25030a = context;
        this.f25031b = obj;
        this.f25032c = cVar;
        this.f25033d = bVar;
        this.f25034e = bVar2;
        this.f25035f = str;
        this.f25036g = config;
        this.f25037h = colorSpace;
        this.f25038i = eVar;
        this.f25039j = pair;
        this.f25040k = aVar;
        this.f25041l = list;
        this.f25042m = aVar2;
        this.f25043n = headers;
        this.f25044o = sVar;
        this.f25045p = z10;
        this.f25046q = z11;
        this.f25047r = z12;
        this.f25048s = z13;
        this.f25049t = bVar3;
        this.f25050u = bVar4;
        this.f25051v = bVar5;
        this.f25052w = coroutineDispatcher;
        this.f25053x = coroutineDispatcher2;
        this.f25054y = coroutineDispatcher3;
        this.f25055z = coroutineDispatcher4;
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
        private final Context f25056a;

        /* renamed from: b  reason: collision with root package name */
        private c f25057b;

        /* renamed from: c  reason: collision with root package name */
        private Object f25058c;

        /* renamed from: d  reason: collision with root package name */
        private i5.c f25059d;

        /* renamed from: e  reason: collision with root package name */
        private b f25060e;

        /* renamed from: f  reason: collision with root package name */
        private c.b f25061f;

        /* renamed from: g  reason: collision with root package name */
        private String f25062g;

        /* renamed from: h  reason: collision with root package name */
        private Bitmap.Config f25063h;

        /* renamed from: i  reason: collision with root package name */
        private ColorSpace f25064i;

        /* renamed from: j  reason: collision with root package name */
        private h5.e f25065j;

        /* renamed from: k  reason: collision with root package name */
        private Pair f25066k;

        /* renamed from: l  reason: collision with root package name */
        private k.a f25067l;

        /* renamed from: m  reason: collision with root package name */
        private List f25068m;

        /* renamed from: n  reason: collision with root package name */
        private c.a f25069n;

        /* renamed from: o  reason: collision with root package name */
        private Headers.a f25070o;

        /* renamed from: p  reason: collision with root package name */
        private Map f25071p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f25072q;

        /* renamed from: r  reason: collision with root package name */
        private Boolean f25073r;

        /* renamed from: s  reason: collision with root package name */
        private Boolean f25074s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f25075t;

        /* renamed from: u  reason: collision with root package name */
        private g5.b f25076u;

        /* renamed from: v  reason: collision with root package name */
        private g5.b f25077v;

        /* renamed from: w  reason: collision with root package name */
        private g5.b f25078w;

        /* renamed from: x  reason: collision with root package name */
        private CoroutineDispatcher f25079x;

        /* renamed from: y  reason: collision with root package name */
        private CoroutineDispatcher f25080y;

        /* renamed from: z  reason: collision with root package name */
        private CoroutineDispatcher f25081z;

        public a(Context context) {
            this.f25056a = context;
            this.f25057b = k5.i.b();
            this.f25058c = null;
            this.f25059d = null;
            this.f25060e = null;
            this.f25061f = null;
            this.f25062g = null;
            this.f25063h = null;
            if (Build.VERSION.SDK_INT >= 26) {
                this.f25064i = null;
            }
            this.f25065j = null;
            this.f25066k = null;
            this.f25067l = null;
            this.f25068m = CollectionsKt.l();
            this.f25069n = null;
            this.f25070o = null;
            this.f25071p = null;
            this.f25072q = true;
            this.f25073r = null;
            this.f25074s = null;
            this.f25075t = true;
            this.f25076u = null;
            this.f25077v = null;
            this.f25078w = null;
            this.f25079x = null;
            this.f25080y = null;
            this.f25081z = null;
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
            i5.c cVar = this.f25059d;
            if (cVar instanceof i5.d) {
                context = ((i5.d) cVar).getView().getContext();
            } else {
                context = this.f25056a;
            }
            Lifecycle c10 = k5.d.c(context);
            if (c10 == null) {
                return g.f25028b;
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
                i5.c cVar = this.f25059d;
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
            return h5.h.f26828e;
        }

        private final h5.j n() {
            ImageView.ScaleType scaleType;
            i5.c cVar = this.f25059d;
            if (cVar instanceof i5.d) {
                View view = ((i5.d) cVar).getView();
                if ((view instanceof ImageView) && ((scaleType = ((ImageView) view).getScaleType()) == ImageView.ScaleType.CENTER || scaleType == ImageView.ScaleType.MATRIX)) {
                    return h5.k.a(h5.i.f26832d);
                }
                return h5.m.b(view, false, 2, null);
            }
            return new h5.d(this.f25056a);
        }

        public final h a() {
            Headers headers;
            s sVar;
            boolean c10;
            boolean d10;
            n nVar;
            Context context = this.f25056a;
            Object obj = this.f25058c;
            if (obj == null) {
                obj = j.f25082a;
            }
            Object obj2 = obj;
            i5.c cVar = this.f25059d;
            b bVar = this.f25060e;
            c.b bVar2 = this.f25061f;
            String str = this.f25062g;
            Bitmap.Config config = this.f25063h;
            if (config == null) {
                config = this.f25057b.e();
            }
            Bitmap.Config config2 = config;
            ColorSpace colorSpace = this.f25064i;
            h5.e eVar = this.f25065j;
            if (eVar == null) {
                eVar = this.f25057b.o();
            }
            h5.e eVar2 = eVar;
            Pair pair = this.f25066k;
            k.a aVar = this.f25067l;
            List list = this.f25068m;
            c.a aVar2 = this.f25069n;
            if (aVar2 == null) {
                aVar2 = this.f25057b.q();
            }
            c.a aVar3 = aVar2;
            Headers.a aVar4 = this.f25070o;
            if (aVar4 != null) {
                headers = aVar4.f();
            } else {
                headers = null;
            }
            Headers x10 = k5.k.x(headers);
            Map map = this.f25071p;
            if (map != null) {
                sVar = s.f25113b.a(map);
            } else {
                sVar = null;
            }
            s w10 = k5.k.w(sVar);
            boolean z10 = this.f25072q;
            Boolean bool = this.f25073r;
            if (bool != null) {
                c10 = bool.booleanValue();
            } else {
                c10 = this.f25057b.c();
            }
            boolean z11 = c10;
            Boolean bool2 = this.f25074s;
            if (bool2 != null) {
                d10 = bool2.booleanValue();
            } else {
                d10 = this.f25057b.d();
            }
            boolean z12 = d10;
            boolean z13 = this.f25075t;
            g5.b bVar3 = this.f25076u;
            if (bVar3 == null) {
                bVar3 = this.f25057b.l();
            }
            g5.b bVar4 = bVar3;
            g5.b bVar5 = this.f25077v;
            if (bVar5 == null) {
                bVar5 = this.f25057b.g();
            }
            g5.b bVar6 = bVar5;
            g5.b bVar7 = this.f25078w;
            if (bVar7 == null) {
                bVar7 = this.f25057b.m();
            }
            g5.b bVar8 = bVar7;
            CoroutineDispatcher coroutineDispatcher = this.f25079x;
            if (coroutineDispatcher == null) {
                coroutineDispatcher = this.f25057b.k();
            }
            CoroutineDispatcher coroutineDispatcher2 = coroutineDispatcher;
            CoroutineDispatcher coroutineDispatcher3 = this.f25080y;
            if (coroutineDispatcher3 == null) {
                coroutineDispatcher3 = this.f25057b.j();
            }
            CoroutineDispatcher coroutineDispatcher4 = coroutineDispatcher3;
            CoroutineDispatcher coroutineDispatcher5 = this.f25081z;
            if (coroutineDispatcher5 == null) {
                coroutineDispatcher5 = this.f25057b.f();
            }
            CoroutineDispatcher coroutineDispatcher6 = coroutineDispatcher5;
            CoroutineDispatcher coroutineDispatcher7 = this.A;
            if (coroutineDispatcher7 == null) {
                coroutineDispatcher7 = this.f25057b.p();
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
            return new h(context, obj2, cVar, bVar, bVar2, str, config2, colorSpace, eVar2, pair, aVar, list, aVar3, x10, w10, z10, z11, z12, z13, bVar4, bVar6, bVar8, coroutineDispatcher2, coroutineDispatcher4, coroutineDispatcher6, coroutineDispatcher8, lifecycle2, jVar2, hVar2, k5.k.v(nVar), this.C, this.D, this.E, this.F, this.G, this.H, this.I, new d(this.J, this.K, this.L, this.f25079x, this.f25080y, this.f25081z, this.A, this.f25069n, this.f25065j, this.f25063h, this.f25073r, this.f25074s, this.f25076u, this.f25077v, this.f25078w), this.f25057b, null);
        }

        public final a b(int i10) {
            c.a aVar;
            if (i10 > 0) {
                aVar = new a.C0412a(i10, false, 2, null);
            } else {
                aVar = c.a.f31410b;
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
            this.f25058c = obj;
            return this;
        }

        public final a e(k.a aVar) {
            this.f25067l = aVar;
            return this;
        }

        public final a f(c cVar) {
            this.f25057b = cVar;
            j();
            return this;
        }

        public final a g(c.b bVar) {
            this.f25061f = bVar;
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
            this.f25059d = cVar;
            k();
            return this;
        }

        public final a t(c.a aVar) {
            this.f25069n = aVar;
            return this;
        }

        public a(h hVar, Context context) {
            this.f25056a = context;
            this.f25057b = hVar.p();
            this.f25058c = hVar.m();
            this.f25059d = hVar.M();
            this.f25060e = hVar.A();
            this.f25061f = hVar.B();
            this.f25062g = hVar.r();
            this.f25063h = hVar.q().c();
            if (Build.VERSION.SDK_INT >= 26) {
                this.f25064i = hVar.k();
            }
            this.f25065j = hVar.q().k();
            this.f25066k = hVar.w();
            this.f25067l = hVar.o();
            this.f25068m = hVar.O();
            this.f25069n = hVar.q().o();
            this.f25070o = hVar.x().g();
            this.f25071p = o0.y(hVar.L().a());
            this.f25072q = hVar.g();
            this.f25073r = hVar.q().a();
            this.f25074s = hVar.q().b();
            this.f25075t = hVar.I();
            this.f25076u = hVar.q().i();
            this.f25077v = hVar.q().e();
            this.f25078w = hVar.q().j();
            this.f25079x = hVar.q().g();
            this.f25080y = hVar.q().f();
            this.f25081z = hVar.q().d();
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
