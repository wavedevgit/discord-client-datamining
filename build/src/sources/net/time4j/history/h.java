package net.time4j.history;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final j f40588d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40589e;

    /* renamed from: i  reason: collision with root package name */
    private final int f40590i;

    /* renamed from: o  reason: collision with root package name */
    private final int f40591o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(j jVar, int i10, int i11, int i12) {
        this.f40588d = jVar;
        this.f40589e = i10;
        this.f40590i = i11;
        this.f40591o = i12;
    }

    public static h i(j jVar, int i10, int i11, int i12) {
        return j(jVar, i10, i11, i12, qt.a.DUAL_DATING, o.f40615d);
    }

    public static h j(j jVar, int i10, int i11, int i12, qt.a aVar, o oVar) {
        j jVar2;
        int i13;
        int i14;
        if (jVar != null) {
            boolean z10 = true;
            if (i12 >= 1 && i12 <= 31) {
                if (i11 >= 1 && i11 <= 12) {
                    if (jVar == j.BYZANTINE) {
                        if (i10 < 0 || (i10 == 0 && i11 < 9)) {
                            throw new IllegalArgumentException("Before creation of the world: " + k(jVar, i10, i11, i12));
                        }
                    } else if (i10 < 1) {
                        throw new IllegalArgumentException("Year of era must be positive: " + k(jVar, i10, i11, i12));
                    }
                    if (!aVar.equals(qt.a.DUAL_DATING)) {
                        n f10 = oVar.f(jVar, i10);
                        if (aVar != qt.a.AFTER_NEW_YEAR) {
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
                throw new IllegalArgumentException("Month out of range: " + k(jVar, i10, i11, i12));
            }
            throw new IllegalArgumentException("Day of month out of range: " + k(jVar, i10, i11, i12));
        }
        throw new NullPointerException("Missing historic era.");
    }

    private static String k(j jVar, int i10, int i11, int i12) {
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
        int a10 = this.f40588d.a(this.f40589e);
        int a11 = hVar.f40588d.a(hVar.f40589e);
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
        return this.f40591o;
    }

    public j e() {
        return this.f40588d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f40588d == hVar.f40588d && this.f40589e == hVar.f40589e && this.f40590i == hVar.f40590i && this.f40591o == hVar.f40591o) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        return this.f40590i;
    }

    public int g() {
        return this.f40589e;
    }

    public int h(o oVar) {
        return oVar.c(this);
    }

    public int hashCode() {
        int i10 = (this.f40589e * 1000) + (this.f40590i * 32) + this.f40591o;
        if (this.f40588d == j.AD) {
            return i10;
        }
        return -i10;
    }

    public String toString() {
        return k(this.f40588d, this.f40589e, this.f40590i, this.f40591o);
    }
}
