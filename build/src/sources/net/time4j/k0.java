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
    private static final st.i f39465k;

    /* renamed from: l  reason: collision with root package name */
    private static final ConcurrentMap f39466l;

    /* renamed from: m  reason: collision with root package name */
    private static final w[] f39467m;

    /* renamed from: n  reason: collision with root package name */
    private static final w[] f39468n;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f39469o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f39470p;

    /* renamed from: a  reason: collision with root package name */
    private final st.p f39471a;

    /* renamed from: b  reason: collision with root package name */
    private final Locale f39472b;

    /* renamed from: c  reason: collision with root package name */
    private final pt.e f39473c;

    /* renamed from: d  reason: collision with root package name */
    private final char f39474d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39475e;

    /* renamed from: f  reason: collision with root package name */
    private final w f39476f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f39477g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f39478h;

    /* renamed from: i  reason: collision with root package name */
    private final String f39479i;

    /* renamed from: j  reason: collision with root package name */
    private final String f39480j;

    static {
        st.i iVar = null;
        int i10 = 0;
        for (st.i iVar2 : pt.d.c().g(st.i.class)) {
            int length = iVar2.a().length;
            if (length >= i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = st.i.f50169a;
        }
        f39465k = iVar;
        f39466l = new ConcurrentHashMap();
        f fVar = f.f39284o;
        f fVar2 = f.f39286q;
        f fVar3 = f.f39288s;
        g gVar = g.f39321d;
        g gVar2 = g.f39322e;
        g gVar3 = g.f39323i;
        w[] wVarArr = {fVar, fVar2, f.f39287r, fVar3, gVar, gVar2, gVar3};
        f39467m = wVarArr;
        f39468n = new w[]{fVar, fVar2, fVar3, gVar, gVar2, gVar3};
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, wVarArr);
        hashSet.add(g.f39326q);
        f39469o = Collections.unmodifiableSet(hashSet);
        f39470p = 63072000L;
    }

    private k0(Locale locale, pt.e eVar, char c10, String str, w wVar, boolean z10, boolean z11, String str2, String str3) {
        if (wVar != null) {
            if (eVar != null) {
                this.f39471a = st.p.f(locale, st.k.CARDINALS);
                this.f39472b = locale;
                this.f39473c = eVar;
                this.f39474d = c10;
                this.f39476f = wVar;
                this.f39475e = str;
                this.f39477g = z10;
                this.f39478h = z11;
                this.f39479i = str2;
                this.f39480j = str3;
                return;
            }
            throw new NullPointerException("Missing reference clock.");
        }
        throw new NullPointerException("Missing zero time unit.");
    }

    public static k0 b(Locale locale) {
        ConcurrentMap concurrentMap = f39466l;
        k0 k0Var = (k0) concurrentMap.get(locale);
        if (k0Var == null) {
            q0 q0Var = q0.f39520e;
            st.i iVar = f39465k;
            k0 k0Var2 = new k0(locale, q0Var, iVar.f(locale), iVar.e(locale), g.f39323i, false, false, null, null);
            k0 k0Var3 = (k0) concurrentMap.putIfAbsent(locale, k0Var2);
            if (k0Var3 != null) {
                return k0Var3;
            }
            return k0Var2;
        }
        return k0Var;
    }

    public Locale a() {
        return this.f39472b;
    }

    public String c() {
        return t0.h(a()).b();
    }
}
