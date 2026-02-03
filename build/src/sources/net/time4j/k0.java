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
    private static final nt.i f40650k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f40651l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f40652m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f40653n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f40654o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f40655p;

    /* renamed from: a  reason: collision with root package name */
    private final nt.p f40656a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f40657b;

    /* renamed from: c  reason: collision with root package name */
    private final kt.e f40658c;

    /* renamed from: d  reason: collision with root package name */
    private final char f40659d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40660e;

    /* renamed from: f  reason: collision with root package name */
    private final w f40661f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f40662g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f40663h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40664i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40665j;

    static {
        nt.i iVar = null;
        int i10 = 0;
        for (nt.i iVar2 : kt.d.c().g(nt.i.class)) {
            int length = iVar2.a().length;
            if (length >= i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = nt.i.f42085a;
        }
        f40650k = iVar;
        f40651l = new ConcurrentHashMap();
        f fVar = f.f40469o;
        f fVar2 = f.f40471q;
        f fVar3 = f.f40473s;
        g gVar = g.f40506d;
        g gVar2 = g.f40507e;
        g gVar3 = g.f40508i;
        w[] wVarArr = {fVar, fVar2, f.f40472r, fVar3, gVar, gVar2, gVar3};
        f40652m = wVarArr;
        f40653n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f40511q);
        f40654o = Collections.unmodifiableSet(hashSet);
        f40655p = 63072000L;
    }

    private k0(Locale locale, kt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f40656a = nt.p.f(locale, nt.k.CARDINALS);
                this.f40657b = locale;
                this.f40658c = eVar;
                this.f40659d = c10;
                this.f40661f = wVar;
                this.f40660e = str;
                this.f40662g = z10;
                this.f40663h = z11;
                this.f40664i = str2;
                this.f40665j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f40651l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f40705e;
            nt.i iVar = f40650k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f40508i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f40657b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
