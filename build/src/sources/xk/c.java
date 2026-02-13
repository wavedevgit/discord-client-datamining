package xk;

import kk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f55449a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f55450b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f55451c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f55449a = i10;
        this.f55450b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f55451c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f55451c;
    }

    public int[] b() {
        return this.f55450b;
    }

    public int c() {
        return this.f55449a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f55449a != ((c) obj).f55449a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f55449a;
    }
}
