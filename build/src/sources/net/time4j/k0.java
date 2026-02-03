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
    private static final lt.i f40611k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f40612l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f40613m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f40614n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f40615o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f40616p;

    /* renamed from: a  reason: collision with root package name */
    private final lt.p f40617a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f40618b;

    /* renamed from: c  reason: collision with root package name */
    private final ht.e f40619c;

    /* renamed from: d  reason: collision with root package name */
    private final char f40620d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40621e;

    /* renamed from: f  reason: collision with root package name */
    private final w f40622f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f40623g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f40624h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40625i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40626j;

    static {
        lt.i iVar = null;
        int i10 = 0;
        for (lt.i iVar2 : ht.d.c().g(lt.i.class)) {
            int length = iVar2.a().length;
            if (length >= i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = lt.i.f37685a;
        }
        f40611k = iVar;
        f40612l = new ConcurrentHashMap();
        f fVar = f.f40430o;
        f fVar2 = f.f40432q;
        f fVar3 = f.f40434s;
        g gVar = g.f40467d;
        g gVar2 = g.f40468e;
        g gVar3 = g.f40469i;
        w[] wVarArr = {fVar, fVar2, f.f40433r, fVar3, gVar, gVar2, gVar3};
        f40613m = wVarArr;
        f40614n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f40472q);
        f40615o = Collections.unmodifiableSet(hashSet);
        f40616p = 63072000L;
    }

    private k0(Locale locale, ht.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f40617a = lt.p.f(locale, lt.k.CARDINALS);
                this.f40618b = locale;
                this.f40619c = eVar;
                this.f40620d = c10;
                this.f40622f = wVar;
                this.f40621e = str;
                this.f40623g = z10;
                this.f40624h = z11;
                this.f40625i = str2;
                this.f40626j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f40612l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f40666e;
            lt.i iVar = f40611k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f40469i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f40618b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
