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
    private static final cu.i f37609k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f37610l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f37611m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f37612n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f37613o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f37614p;

    /* renamed from: a  reason: collision with root package name */
    private final cu.p f37615a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f37616b;

    /* renamed from: c  reason: collision with root package name */
    private final zt.e f37617c;

    /* renamed from: d  reason: collision with root package name */
    private final char f37618d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37619e;

    /* renamed from: f  reason: collision with root package name */
    private final w f37620f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f37621g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f37622h;

    /* renamed from: i  reason: collision with root package name */
    private final String f37623i;

    /* renamed from: j  reason: collision with root package name */
    private final String f37624j;

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
            iVar = cu.i.f21167a;
        }
        f37609k = iVar;
        f37610l = new ConcurrentHashMap();
        f fVar = f.f37428o;
        f fVar2 = f.f37430q;
        f fVar3 = f.f37432s;
        g gVar = g.f37465d;
        g gVar2 = g.f37466e;
        g gVar3 = g.f37467i;
        w[] wVarArr = {fVar, fVar2, f.f37431r, fVar3, gVar, gVar2, gVar3};
        f37611m = wVarArr;
        f37612n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f37470q);
        f37613o = Collections.unmodifiableSet(hashSet);
        f37614p = 63072000L;
    }

    private k0(Locale locale, zt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f37615a = cu.p.f(locale, cu.k.CARDINALS);
                this.f37616b = locale;
                this.f37617c = eVar;
                this.f37618d = c10;
                this.f37620f = wVar;
                this.f37619e = str;
                this.f37621g = z10;
                this.f37622h = z11;
                this.f37623i = str2;
                this.f37624j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f37610l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f37664e;
            cu.i iVar = f37609k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f37467i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f37616b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
