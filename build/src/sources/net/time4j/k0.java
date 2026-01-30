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
    private static final kt.i f40748k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f40749l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f40750m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f40751n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f40752o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f40753p;

    /* renamed from: a  reason: collision with root package name */
    private final kt.p f40754a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f40755b;

    /* renamed from: c  reason: collision with root package name */
    private final gt.e f40756c;

    /* renamed from: d  reason: collision with root package name */
    private final char f40757d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40758e;

    /* renamed from: f  reason: collision with root package name */
    private final w f40759f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f40760g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f40761h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40762i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40763j;

    static {
        kt.i iVar = null;
        int i10 = 0;
        for (kt.i iVar2 : gt.d.c().g(kt.i.class)) {
            int length = iVar2.a().length;
            if (length >= i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = kt.i.f36603a;
        }
        f40748k = iVar;
        f40749l = new ConcurrentHashMap();
        f fVar = f.f40567o;
        f fVar2 = f.f40569q;
        f fVar3 = f.f40571s;
        g gVar = g.f40604d;
        g gVar2 = g.f40605e;
        g gVar3 = g.f40606i;
        w[] wVarArr = {fVar, fVar2, f.f40570r, fVar3, gVar, gVar2, gVar3};
        f40750m = wVarArr;
        f40751n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f40609q);
        f40752o = Collections.unmodifiableSet(hashSet);
        f40753p = 63072000L;
    }

    private k0(Locale locale, gt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f40754a = kt.p.f(locale, kt.k.CARDINALS);
                this.f40755b = locale;
                this.f40756c = eVar;
                this.f40757d = c10;
                this.f40759f = wVar;
                this.f40758e = str;
                this.f40760g = z10;
                this.f40761h = z11;
                this.f40762i = str2;
                this.f40763j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f40749l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f40803e;
            kt.i iVar = f40748k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f40606i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f40755b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
