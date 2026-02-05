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
    private static final qt.i f40110k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f40111l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f40112m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f40113n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f40114o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f40115p;

    /* renamed from: a  reason: collision with root package name */
    private final qt.p f40116a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f40117b;

    /* renamed from: c  reason: collision with root package name */
    private final nt.e f40118c;

    /* renamed from: d  reason: collision with root package name */
    private final char f40119d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40120e;

    /* renamed from: f  reason: collision with root package name */
    private final w f40121f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f40122g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f40123h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40124i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40125j;

    static {
        qt.i iVar = null;
        int i10 = 0;
        for (qt.i iVar2 : nt.d.c().g(qt.i.class)) {
            int length = iVar2.a().length;
            if (length >= i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = qt.i.f48145a;
        }
        f40110k = iVar;
        f40111l = new ConcurrentHashMap();
        f fVar = f.f39929o;
        f fVar2 = f.f39931q;
        f fVar3 = f.f39933s;
        g gVar = g.f39966d;
        g gVar2 = g.f39967e;
        g gVar3 = g.f39968i;
        w[] wVarArr = {fVar, fVar2, f.f39932r, fVar3, gVar, gVar2, gVar3};
        f40112m = wVarArr;
        f40113n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f39971q);
        f40114o = Collections.unmodifiableSet(hashSet);
        f40115p = 63072000L;
    }

    private k0(Locale locale, nt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f40116a = qt.p.f(locale, qt.k.CARDINALS);
                this.f40117b = locale;
                this.f40118c = eVar;
                this.f40119d = c10;
                this.f40121f = wVar;
                this.f40120e = str;
                this.f40122g = z10;
                this.f40123h = z11;
                this.f40124i = str2;
                this.f40125j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f40111l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f40165e;
            qt.i iVar = f40110k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f39968i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f40117b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
