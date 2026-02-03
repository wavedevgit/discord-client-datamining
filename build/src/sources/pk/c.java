package pk;

import ck.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f46114a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f46115b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f46116c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f46114a = i10;
        this.f46115b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f46116c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f46116c;
    }

    public int[] b() {
        return this.f46115b;
    }

    public int c() {
        return this.f46114a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f46114a != ((c) obj).f46114a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f46114a;
    }
}
