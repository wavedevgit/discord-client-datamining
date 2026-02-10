package net.time4j;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k0 {

    /* renamed from: k  reason: collision with root package name */
    private static final tt.i f38605k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f38606l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f38607m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f38608n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f38609o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f38610p;

    /* renamed from: a  reason: collision with root package name */
    private final tt.p f38611a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f38612b;

    /* renamed from: c  reason: collision with root package name */
    private final qt.e f38613c;

    /* renamed from: d  reason: collision with root package name */
    private final char f38614d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38615e;

    /* renamed from: f  reason: collision with root package name */
    private final w f38616f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f38617g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f38618h;

    /* renamed from: i  reason: collision with root package name */
    private final String f38619i;

    /* renamed from: j  reason: collision with root package name */
    private final String f38620j;

    static {
        tt.i iVar = null;
        int i10 = 0;
        for (tt.i iVar2 : qt.d.c().g(tt.i.class)) {
            int length = iVar2.a().length;
            if (length >= i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = tt.i.f51061a;
        }
        f38605k = iVar;
        f38606l = new ConcurrentHashMap();
        f fVar = f.f38424o;
        f fVar2 = f.f38426q;
        f fVar3 = f.f38428s;
        g gVar = g.f38461d;
        g gVar2 = g.f38462e;
        g gVar3 = g.f38463i;
        w[] wVarArr = {fVar, fVar2, f.f38427r, fVar3, gVar, gVar2, gVar3};
        f38607m = wVarArr;
        f38608n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f38466q);
        f38609o = Collections.unmodifiableSet(hashSet);
        f38610p = 63072000L;
    }

    private k0(Locale locale, qt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f38611a = tt.p.f(locale, tt.k.CARDINALS);
                this.f38612b = locale;
                this.f38613c = eVar;
                this.f38614d = c10;
                this.f38616f = wVar;
                this.f38615e = str;
                this.f38617g = z10;
                this.f38618h = z11;
                this.f38619i = str2;
                this.f38620j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f38606l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f38660e;
            tt.i iVar = f38605k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f38463i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f38612b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
