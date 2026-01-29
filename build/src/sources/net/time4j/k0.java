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
    private static final kt.i f40732k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f40733l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f40734m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f40735n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f40736o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f40737p;

    /* renamed from: a  reason: collision with root package name */
    private final kt.p f40738a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f40739b;

    /* renamed from: c  reason: collision with root package name */
    private final gt.e f40740c;

    /* renamed from: d  reason: collision with root package name */
    private final char f40741d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40742e;

    /* renamed from: f  reason: collision with root package name */
    private final w f40743f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f40744g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f40745h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40746i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40747j;

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
            iVar = kt.i.f36587a;
        }
        f40732k = iVar;
        f40733l = new ConcurrentHashMap();
        f fVar = f.f40551o;
        f fVar2 = f.f40553q;
        f fVar3 = f.f40555s;
        g gVar = g.f40588d;
        g gVar2 = g.f40589e;
        g gVar3 = g.f40590i;
        w[] wVarArr = {fVar, fVar2, f.f40554r, fVar3, gVar, gVar2, gVar3};
        f40734m = wVarArr;
        f40735n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f40593q);
        f40736o = Collections.unmodifiableSet(hashSet);
        f40737p = 63072000L;
    }

    private k0(Locale locale, gt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f40738a = kt.p.f(locale, kt.k.CARDINALS);
                this.f40739b = locale;
                this.f40740c = eVar;
                this.f40741d = c10;
                this.f40743f = wVar;
                this.f40742e = str;
                this.f40744g = z10;
                this.f40745h = z11;
                this.f40746i = str2;
                this.f40747j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f40733l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f40787e;
            kt.i iVar = f40732k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f40590i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f40739b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
