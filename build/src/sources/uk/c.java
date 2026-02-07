package uk;

import hk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f51624a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f51625b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f51626c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f51624a = i10;
        this.f51625b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f51626c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f51626c;
    }

    public int[] b() {
        return this.f51625b;
    }

    public int c() {
        return this.f51624a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f51624a != ((c) obj).f51624a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f51624a;
    }
}
