package net.time4j.history;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final j f38543d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38544e;

    /* renamed from: i  reason: collision with root package name */
    private final int f38545i;

    /* renamed from: o  reason: collision with root package name */
    private final int f38546o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(j jVar, int i10, int i11, int i12) {
        this.f38543d = jVar;
        this.f38544e = i10;
        this.f38545i = i11;
        this.f38546o = i12;
    }

    public static h i(j jVar, int i10, int i11, int i12) {
        return k(jVar, i10, i11, i12, wt.a.DUAL_DATING, o.f38570d);
    }

    public static h k(j jVar, int i10, int i11, int i12, wt.a aVar, o oVar) {
        j jVar2;
        int i13;
        int i14;
        if (jVar != null) {
            boolean z10 = true;
            if (i12 >= 1 && i12 <= 31) {
                if (i11 >= 1 && i11 <= 12) {
                    if (jVar == j.BYZANTINE) {
                        if (i10 < 0 || (i10 == 0 && i11 < 9)) {
                            throw new IllegalArgumentException("Before creation of the world: " + l(jVar, i10, i11, i12));
                        }
                    } else if (i10 < 1) {
                        throw new IllegalArgumentException("Year of era must be positive: " + l(jVar, i10, i11, i12));
                    }
                    if (!aVar.equals(wt.a.DUAL_DATING)) {
                        n f10 = oVar.f(jVar, i10);
                        if (aVar != wt.a.AFTER_NEW_YEAR) {
                            z10 = false;
                        }
                        jVar2 = jVar;
                        i13 = i11;
                        i14 = i12;
                        i10 = f10.e(z10, oVar, jVar2, i10, i13, i14);
                    } else {
                        jVar2 = jVar;
                        i13 = i11;
                        i14 = i12;
                    }
                    return new h(jVar2, i10, i13, i14);
                }
                throw new IllegalArgumentException("Month out of range: " + l(jVar, i10, i11, i12));
            }
            throw new IllegalArgumentException("Day of month out of range: " + l(jVar, i10, i11, i12));
        }
        throw new NullPointerException("Missing historic era.");
    }

    private static String l(j jVar, int i10, int i11, int i12) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(jVar);
        sb2.append('-');
        String valueOf = String.valueOf(i10);
        for (int length = 4 - valueOf.length(); length > 0; length--) {
            sb2.append('0');
        }
        sb2.append(valueOf);
        sb2.append('-');
        if (i11 < 10) {
            sb2.append('0');
        }
        sb2.append(i11);
        sb2.append('-');
        if (i12 < 10) {
            sb2.append('0');
        }
        sb2.append(i12);
        return sb2.toString();
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(h hVar) {
        int a10 = this.f38543d.a(this.f38544e);
        int a11 = hVar.f38543d.a(hVar.f38544e);
        if (a10 < a11) {
            return -1;
        }
        if (a10 > a11) {
            return 1;
        }
        int f10 = f() - hVar.f();
        if (f10 == 0) {
            f10 = d() - hVar.d();
        }
        if (f10 < 0) {
            return -1;
        }
        if (f10 > 0) {
            return 1;
        }
        return 0;
    }

    public int d() {
        return this.f38546o;
    }

    public j e() {
        return this.f38543d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f38543d == hVar.f38543d && this.f38544e == hVar.f38544e && this.f38545i == hVar.f38545i && this.f38546o == hVar.f38546o) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        return this.f38545i;
    }

    public int g() {
        return this.f38544e;
    }

    public int h(o oVar) {
        return oVar.c(this);
    }

    public int hashCode() {
        int i10 = (this.f38544e * 1000) + (this.f38545i * 32) + this.f38546o;
        if (this.f38543d == j.AD) {
            return i10;
        }
        return -i10;
    }

    public String toString() {
        return l(this.f38543d, this.f38544e, this.f38545i, this.f38546o);
    }
}
