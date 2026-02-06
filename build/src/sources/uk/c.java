package uk;

import hk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f51576a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f51577b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f51578c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f51576a = i10;
        this.f51577b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f51578c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f51578c;
    }

    public int[] b() {
        return this.f51577b;
    }

    public int c() {
        return this.f51576a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f51576a != ((c) obj).f51576a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f51576a;
    }
}
