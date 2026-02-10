package xk;

import kk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f54880a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f54881b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f54882c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f54880a = i10;
        this.f54881b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f54882c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f54882c;
    }

    public int[] b() {
        return this.f54881b;
    }

    public int c() {
        return this.f54880a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f54880a != ((c) obj).f54880a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f54880a;
    }
}
