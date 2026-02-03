package com.google.android.play.core.assetpacks;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u2 {

    /* renamed from: d  reason: collision with root package name */
    private static final th.k0 f16689d = new th.k0("ExtractorTaskFinder");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16690a;

    /* renamed from: b  reason: collision with root package name */
    private final n0 f16691b;

    /* renamed from: c  reason: collision with root package name */
    private final d1 f16692c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(r2 r2Var, n0 n0Var, d1 d1Var) {
        this.f16690a = r2Var;
        this.f16691b = n0Var;
        this.f16692c = d1Var;
    }

    private final boolean b(o2 o2Var, p2 p2Var) {
        n2 n2Var = o2Var.f16581c;
        String str = n2Var.f16566a;
        long j10 = n2Var.f16567b;
        return new b4(this.f16691b, str, o2Var.f16580b, j10, p2Var.f16594a).m();
    }

    private static boolean c(p2 p2Var) {
        int i10 = p2Var.f16599f;
        if (i10 == 1 || i10 == 2) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final t2 a() {
        t2 t2Var;
        l1 l1Var;
        t2 t2Var2;
        l1 l1Var2;
        s3 s3Var;
        int i10;
        try {
            this.f16690a.j();
            ArrayList arrayList = new ArrayList();
            for (o2 o2Var : this.f16690a.i().values()) {
                if (m0.b(o2Var.f16581c.f16569d)) {
                    arrayList.add(o2Var);
                }
            }
            if (!arrayList.isEmpty()) {
                Map F = this.f16691b.F();
                Iterator it = arrayList.iterator();
                while (true) {
                    if (!it.hasNext()) {
                        t2Var = null;
                        break;
                    }
                    o2 o2Var2 = (o2) it.next();
                    Long l10 = (Long) F.get(o2Var2.f16581c.f16566a);
                    if (l10 != null && o2Var2.f16581c.f16567b == l10.longValue()) {
                        f16689d.a("Found promote pack task for session %s with pack %s.", Integer.valueOf(o2Var2.f16579a), o2Var2.f16581c.f16566a);
                        int i11 = o2Var2.f16579a;
                        String str = o2Var2.f16581c.f16566a;
                        t2Var = new v3(i11, str, this.f16691b.p(str), o2Var2.f16580b, o2Var2.f16581c.f16567b);
                        break;
                    }
                }
                if (t2Var == null) {
                    Iterator it2 = arrayList.iterator();
                    while (true) {
                        if (!it2.hasNext()) {
                            t2Var = null;
                            break;
                        }
                        o2 o2Var3 = (o2) it2.next();
                        try {
                            n0 n0Var = this.f16691b;
                            n2 n2Var = o2Var3.f16581c;
                            if (n0Var.q(n2Var.f16566a, o2Var3.f16580b, n2Var.f16567b) == o2Var3.f16581c.f16571f.size()) {
                                f16689d.a("Found final move task for session %s with pack %s.", Integer.valueOf(o2Var3.f16579a), o2Var3.f16581c.f16566a);
                                int i12 = o2Var3.f16579a;
                                n2 n2Var2 = o2Var3.f16581c;
                                t2Var = new i3(i12, n2Var2.f16566a, o2Var3.f16580b, n2Var2.f16567b, n2Var2.f16568c);
                                break;
                            }
                        } catch (IOException e10) {
                            throw new w1(String.format("Failed to check number of completed merges for session %s, pack %s", Integer.valueOf(o2Var3.f16579a), o2Var3.f16581c.f16566a), e10, o2Var3.f16579a);
                        }
                    }
                    if (t2Var == null) {
                        Iterator it3 = arrayList.iterator();
                        loop3: while (true) {
                            if (!it3.hasNext()) {
                                t2Var2 = null;
                                break;
                            }
                            o2 o2Var4 = (o2) it3.next();
                            n2 n2Var3 = o2Var4.f16581c;
                            if (m0.b(n2Var3.f16569d)) {
                                for (p2 p2Var : n2Var3.f16571f) {
                                    n0 n0Var2 = this.f16691b;
                                    n2 n2Var4 = o2Var4.f16581c;
                                    if (n0Var2.D(n2Var4.f16566a, o2Var4.f16580b, n2Var4.f16567b, p2Var.f16594a).exists()) {
                                        f16689d.a("Found merge task for session %s with pack %s and slice %s.", Integer.valueOf(o2Var4.f16579a), o2Var4.f16581c.f16566a, p2Var.f16594a);
                                        int i13 = o2Var4.f16579a;
                                        n2 n2Var5 = o2Var4.f16581c;
                                        t2Var2 = new f3(i13, n2Var5.f16566a, o2Var4.f16580b, n2Var5.f16567b, p2Var.f16594a);
                                        break loop3;
                                    }
                                }
                                continue;
                            }
                        }
                        if (t2Var2 == null) {
                            Iterator it4 = arrayList.iterator();
                            loop5: while (true) {
                                if (!it4.hasNext()) {
                                    t2Var2 = null;
                                    break;
                                }
                                o2 o2Var5 = (o2) it4.next();
                                n2 n2Var6 = o2Var5.f16581c;
                                if (m0.b(n2Var6.f16569d)) {
                                    for (p2 p2Var2 : n2Var6.f16571f) {
                                        if (b(o2Var5, p2Var2)) {
                                            n0 n0Var3 = this.f16691b;
                                            n2 n2Var7 = o2Var5.f16581c;
                                            if (n0Var3.C(n2Var7.f16566a, o2Var5.f16580b, n2Var7.f16567b, p2Var2.f16594a).exists()) {
                                                f16689d.a("Found verify task for session %s with pack %s and slice %s.", Integer.valueOf(o2Var5.f16579a), o2Var5.f16581c.f16566a, p2Var2.f16594a);
                                                int i14 = o2Var5.f16579a;
                                                n2 n2Var8 = o2Var5.f16581c;
                                                t2Var2 = new e4(i14, n2Var8.f16566a, o2Var5.f16580b, n2Var8.f16567b, p2Var2.f16594a, p2Var2.f16595b, p2Var2.f16596c);
                                                break loop5;
                                            }
                                        }
                                    }
                                    continue;
                                }
                            }
                            if (t2Var2 == null) {
                                Iterator it5 = arrayList.iterator();
                                loop7: while (true) {
                                    if (!it5.hasNext()) {
                                        l1Var2 = null;
                                        break;
                                    }
                                    o2 o2Var6 = (o2) it5.next();
                                    n2 n2Var9 = o2Var6.f16581c;
                                    if (m0.b(n2Var9.f16569d)) {
                                        for (p2 p2Var3 : n2Var9.f16571f) {
                                            if (!c(p2Var3)) {
                                                n0 n0Var4 = this.f16691b;
                                                n2 n2Var10 = o2Var6.f16581c;
                                                try {
                                                    i10 = new b4(n0Var4, n2Var10.f16566a, o2Var6.f16580b, n2Var10.f16567b, p2Var3.f16594a).a();
                                                } catch (IOException e11) {
                                                    f16689d.b("Slice checkpoint corrupt, restarting extraction. %s", e11);
                                                    i10 = 0;
                                                }
                                                if (i10 != -1 && ((m2) p2Var3.f16597d.get(i10)).f16550a) {
                                                    f16689d.a("Found extraction task using compression format %s for session %s, pack %s, slice %s, chunk %s.", Integer.valueOf(p2Var3.f16598e), Integer.valueOf(o2Var6.f16579a), o2Var6.f16581c.f16566a, p2Var3.f16594a, Integer.valueOf(i10));
                                                    InputStream a10 = this.f16692c.a(o2Var6.f16579a, o2Var6.f16581c.f16566a, p2Var3.f16594a, i10);
                                                    int i15 = o2Var6.f16579a;
                                                    n2 n2Var11 = o2Var6.f16581c;
                                                    String str2 = n2Var11.f16566a;
                                                    int i16 = o2Var6.f16580b;
                                                    long j10 = n2Var11.f16567b;
                                                    String str3 = n2Var11.f16568c;
                                                    String str4 = p2Var3.f16594a;
                                                    int i17 = p2Var3.f16598e;
                                                    int size = p2Var3.f16597d.size();
                                                    n2 n2Var12 = o2Var6.f16581c;
                                                    l1Var2 = new l1(i15, str2, i16, j10, str3, str4, i17, i10, size, n2Var12.f16570e, n2Var12.f16569d, a10);
                                                    break loop7;
                                                }
                                            }
                                        }
                                        continue;
                                    }
                                }
                                if (l1Var2 != null) {
                                    l1Var = l1Var2;
                                    return l1Var;
                                }
                                Iterator it6 = arrayList.iterator();
                                loop9: while (true) {
                                    if (!it6.hasNext()) {
                                        s3Var = null;
                                        break;
                                    }
                                    o2 o2Var7 = (o2) it6.next();
                                    n2 n2Var13 = o2Var7.f16581c;
                                    if (m0.b(n2Var13.f16569d)) {
                                        for (p2 p2Var4 : n2Var13.f16571f) {
                                            if (c(p2Var4) && ((m2) p2Var4.f16597d.get(0)).f16550a && !b(o2Var7, p2Var4)) {
                                                f16689d.a("Found patch slice task using patch format %s for session %s, pack %s, slice %s.", Integer.valueOf(p2Var4.f16599f), Integer.valueOf(o2Var7.f16579a), o2Var7.f16581c.f16566a, p2Var4.f16594a);
                                                InputStream a11 = this.f16692c.a(o2Var7.f16579a, o2Var7.f16581c.f16566a, p2Var4.f16594a, 0);
                                                int i18 = o2Var7.f16579a;
                                                String str5 = o2Var7.f16581c.f16566a;
                                                s3Var = new s3(i18, str5, this.f16691b.p(str5), this.f16691b.r(o2Var7.f16581c.f16566a), o2Var7.f16580b, o2Var7.f16581c.f16567b, p2Var4.f16599f, p2Var4.f16594a, p2Var4.f16596c, a11);
                                                break loop9;
                                            }
                                        }
                                        continue;
                                    }
                                }
                                if (s3Var != null) {
                                    this.f16690a.l();
                                    return s3Var;
                                }
                            }
                        }
                        l1Var = t2Var2;
                        return l1Var;
                    }
                }
                l1Var = t2Var;
                return l1Var;
            }
            l1Var = null;
            return l1Var;
        } finally {
            this.f16690a.l();
        }
    }
}
