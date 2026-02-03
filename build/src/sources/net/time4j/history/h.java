package net.time4j.history;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final j f40549d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40550e;

    /* renamed from: i  reason: collision with root package name */
    private final int f40551i;

    /* renamed from: o  reason: collision with root package name */
    private final int f40552o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(j jVar, int i10, int i11, int i12) {
        this.f40549d = jVar;
        this.f40550e = i10;
        this.f40551i = i11;
        this.f40552o = i12;
    }

    public static h i(j jVar, int i10, int i11, int i12) {
        return k(jVar, i10, i11, i12, ot.a.DUAL_DATING, o.f40576d);
    }

    public static h k(j jVar, int i10, int i11, int i12, ot.a aVar, o oVar) {
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
                    if (!aVar.equals(ot.a.DUAL_DATING)) {
                        n f10 = oVar.f(jVar, i10);
                        if (aVar != ot.a.AFTER_NEW_YEAR) {
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
        int a10 = this.f40549d.a(this.f40550e);
        int a11 = hVar.f40549d.a(hVar.f40550e);
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
        return this.f40552o;
    }

    public j e() {
        return this.f40549d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f40549d == hVar.f40549d && this.f40550e == hVar.f40550e && this.f40551i == hVar.f40551i && this.f40552o == hVar.f40552o) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        return this.f40551i;
    }

    public int g() {
        return this.f40550e;
    }

    public int h(o oVar) {
        return oVar.c(this);
    }

    public int hashCode() {
        int i10 = (this.f40550e * 1000) + (this.f40551i * 32) + this.f40552o;
        if (this.f40549d == j.AD) {
            return i10;
        }
        return -i10;
    }

    public String toString() {
        return l(this.f40549d, this.f40550e, this.f40551i, this.f40552o);
    }
}
