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
    private static final yh.k0 f16171d = new yh.k0("ExtractorTaskFinder");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16172a;

    /* renamed from: b  reason: collision with root package name */
    private final n0 f16173b;

    /* renamed from: c  reason: collision with root package name */
    private final d1 f16174c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(r2 r2Var, n0 n0Var, d1 d1Var) {
        this.f16172a = r2Var;
        this.f16173b = n0Var;
        this.f16174c = d1Var;
    }

    private final boolean b(o2 o2Var, p2 p2Var) {
        n2 n2Var = o2Var.f16063c;
        String str = n2Var.f16048a;
        long j10 = n2Var.f16049b;
        return new b4(this.f16173b, str, o2Var.f16062b, j10, p2Var.f16076a).m();
    }

    private static boolean c(p2 p2Var) {
        int i10 = p2Var.f16081f;
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
            this.f16172a.j();
            ArrayList arrayList = new ArrayList();
            for (o2 o2Var : this.f16172a.i().values()) {
                if (m0.b(o2Var.f16063c.f16051d)) {
                    arrayList.add(o2Var);
                }
            }
            if (!arrayList.isEmpty()) {
                Map F = this.f16173b.F();
                Iterator it = arrayList.iterator();
                while (true) {
                    if (!it.hasNext()) {
                        t2Var = null;
                        break;
                    }
                    o2 o2Var2 = (o2) it.next();
                    Long l10 = (Long) F.get(o2Var2.f16063c.f16048a);
                    if (l10 != null && o2Var2.f16063c.f16049b == l10.longValue()) {
                        f16171d.a("Found promote pack task for session %s with pack %s.", Integer.valueOf(o2Var2.f16061a), o2Var2.f16063c.f16048a);
                        int i11 = o2Var2.f16061a;
                        String str = o2Var2.f16063c.f16048a;
                        t2Var = new v3(i11, str, this.f16173b.p(str), o2Var2.f16062b, o2Var2.f16063c.f16049b);
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
                            n0 n0Var = this.f16173b;
                            n2 n2Var = o2Var3.f16063c;
                            if (n0Var.q(n2Var.f16048a, o2Var3.f16062b, n2Var.f16049b) == o2Var3.f16063c.f16053f.size()) {
                                f16171d.a("Found final move task for session %s with pack %s.", Integer.valueOf(o2Var3.f16061a), o2Var3.f16063c.f16048a);
                                int i12 = o2Var3.f16061a;
                                n2 n2Var2 = o2Var3.f16063c;
                                t2Var = new i3(i12, n2Var2.f16048a, o2Var3.f16062b, n2Var2.f16049b, n2Var2.f16050c);
                                break;
                            }
                        } catch (IOException e10) {
                            throw new w1(String.format("Failed to check number of completed merges for session %s, pack %s", Integer.valueOf(o2Var3.f16061a), o2Var3.f16063c.f16048a), e10, o2Var3.f16061a);
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
                            n2 n2Var3 = o2Var4.f16063c;
                            if (m0.b(n2Var3.f16051d)) {
                                for (p2 p2Var : n2Var3.f16053f) {
                                    n0 n0Var2 = this.f16173b;
                                    n2 n2Var4 = o2Var4.f16063c;
                                    if (n0Var2.D(n2Var4.f16048a, o2Var4.f16062b, n2Var4.f16049b, p2Var.f16076a).exists()) {
                                        f16171d.a("Found merge task for session %s with pack %s and slice %s.", Integer.valueOf(o2Var4.f16061a), o2Var4.f16063c.f16048a, p2Var.f16076a);
                                        int i13 = o2Var4.f16061a;
                                        n2 n2Var5 = o2Var4.f16063c;
                                        t2Var2 = new f3(i13, n2Var5.f16048a, o2Var4.f16062b, n2Var5.f16049b, p2Var.f16076a);
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
                                n2 n2Var6 = o2Var5.f16063c;
                                if (m0.b(n2Var6.f16051d)) {
                                    for (p2 p2Var2 : n2Var6.f16053f) {
                                        if (b(o2Var5, p2Var2)) {
                                            n0 n0Var3 = this.f16173b;
                                            n2 n2Var7 = o2Var5.f16063c;
                                            if (n0Var3.C(n2Var7.f16048a, o2Var5.f16062b, n2Var7.f16049b, p2Var2.f16076a).exists()) {
                                                f16171d.a("Found verify task for session %s with pack %s and slice %s.", Integer.valueOf(o2Var5.f16061a), o2Var5.f16063c.f16048a, p2Var2.f16076a);
                                                int i14 = o2Var5.f16061a;
                                                n2 n2Var8 = o2Var5.f16063c;
                                                t2Var2 = new e4(i14, n2Var8.f16048a, o2Var5.f16062b, n2Var8.f16049b, p2Var2.f16076a, p2Var2.f16077b, p2Var2.f16078c);
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
                                    n2 n2Var9 = o2Var6.f16063c;
                                    if (m0.b(n2Var9.f16051d)) {
                                        for (p2 p2Var3 : n2Var9.f16053f) {
                                            if (!c(p2Var3)) {
                                                n0 n0Var4 = this.f16173b;
                                                n2 n2Var10 = o2Var6.f16063c;
                                                try {
                                                    i10 = new b4(n0Var4, n2Var10.f16048a, o2Var6.f16062b, n2Var10.f16049b, p2Var3.f16076a).a();
                                                } catch (IOException e11) {
                                                    f16171d.b("Slice checkpoint corrupt, restarting extraction. %s", e11);
                                                    i10 = 0;
                                                }
                                                if (i10 != -1 && ((m2) p2Var3.f16079d.get(i10)).f16032a) {
                                                    f16171d.a("Found extraction task using compression format %s for session %s, pack %s, slice %s, chunk %s.", Integer.valueOf(p2Var3.f16080e), Integer.valueOf(o2Var6.f16061a), o2Var6.f16063c.f16048a, p2Var3.f16076a, Integer.valueOf(i10));
                                                    InputStream a10 = this.f16174c.a(o2Var6.f16061a, o2Var6.f16063c.f16048a, p2Var3.f16076a, i10);
                                                    int i15 = o2Var6.f16061a;
                                                    n2 n2Var11 = o2Var6.f16063c;
                                                    String str2 = n2Var11.f16048a;
                                                    int i16 = o2Var6.f16062b;
                                                    long j10 = n2Var11.f16049b;
                                                    String str3 = n2Var11.f16050c;
                                                    String str4 = p2Var3.f16076a;
                                                    int i17 = p2Var3.f16080e;
                                                    int size = p2Var3.f16079d.size();
                                                    n2 n2Var12 = o2Var6.f16063c;
                                                    l1Var2 = new l1(i15, str2, i16, j10, str3, str4, i17, i10, size, n2Var12.f16052e, n2Var12.f16051d, a10);
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
                                    n2 n2Var13 = o2Var7.f16063c;
                                    if (m0.b(n2Var13.f16051d)) {
                                        for (p2 p2Var4 : n2Var13.f16053f) {
                                            if (c(p2Var4) && ((m2) p2Var4.f16079d.get(0)).f16032a && !b(o2Var7, p2Var4)) {
                                                f16171d.a("Found patch slice task using patch format %s for session %s, pack %s, slice %s.", Integer.valueOf(p2Var4.f16081f), Integer.valueOf(o2Var7.f16061a), o2Var7.f16063c.f16048a, p2Var4.f16076a);
                                                InputStream a11 = this.f16174c.a(o2Var7.f16061a, o2Var7.f16063c.f16048a, p2Var4.f16076a, 0);
                                                int i18 = o2Var7.f16061a;
                                                String str5 = o2Var7.f16063c.f16048a;
                                                s3Var = new s3(i18, str5, this.f16173b.p(str5), this.f16173b.r(o2Var7.f16063c.f16048a), o2Var7.f16062b, o2Var7.f16063c.f16049b, p2Var4.f16081f, p2Var4.f16076a, p2Var4.f16078c, a11);
                                                break loop9;
                                            }
                                        }
                                        continue;
                                    }
                                }
                                if (s3Var != null) {
                                    this.f16172a.l();
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
            this.f16172a.l();
        }
    }
}
