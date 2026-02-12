package xk;

import kk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f54881a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f54882b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f54883c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f54881a = i10;
        this.f54882b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f54883c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f54883c;
    }

    public int[] b() {
        return this.f54882b;
    }

    public int c() {
        return this.f54881a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f54881a != ((c) obj).f54881a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f54881a;
    }
}
