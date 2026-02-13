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
    private static final cu.i f38178k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f38179l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f38180m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f38181n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f38182o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f38183p;

    /* renamed from: a  reason: collision with root package name */
    private final cu.p f38184a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f38185b;

    /* renamed from: c  reason: collision with root package name */
    private final zt.e f38186c;

    /* renamed from: d  reason: collision with root package name */
    private final char f38187d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38188e;

    /* renamed from: f  reason: collision with root package name */
    private final w f38189f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f38190g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f38191h;

    /* renamed from: i  reason: collision with root package name */
    private final String f38192i;

    /* renamed from: j  reason: collision with root package name */
    private final String f38193j;

    static {
        cu.i iVar = null;
        int i10 = 0;
        for (cu.i iVar2 : zt.d.c().g(cu.i.class)) {
            int length = iVar2.a().length;
            if (length >= i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = cu.i.f21168a;
        }
        f38178k = iVar;
        f38179l = new ConcurrentHashMap();
        f fVar = f.f37997o;
        f fVar2 = f.f37999q;
        f fVar3 = f.f38001s;
        g gVar = g.f38034d;
        g gVar2 = g.f38035e;
        g gVar3 = g.f38036i;
        w[] wVarArr = {fVar, fVar2, f.f38000r, fVar3, gVar, gVar2, gVar3};
        f38180m = wVarArr;
        f38181n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f38039q);
        f38182o = Collections.unmodifiableSet(hashSet);
        f38183p = 63072000L;
    }

    private k0(Locale locale, zt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f38184a = cu.p.f(locale, cu.k.CARDINALS);
                this.f38185b = locale;
                this.f38186c = eVar;
                this.f38187d = c10;
                this.f38189f = wVar;
                this.f38188e = str;
                this.f38190g = z10;
                this.f38191h = z11;
                this.f38192i = str2;
                this.f38193j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f38179l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f38233e;
            cu.i iVar = f38178k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f38036i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f38185b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
