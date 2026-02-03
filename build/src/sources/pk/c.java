package pk;

import ck.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f46156a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f46157b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f46158c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f46156a = i10;
        this.f46157b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f46158c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f46158c;
    }

    public int[] b() {
        return this.f46157b;
    }

    public int c() {
        return this.f46156a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f46156a != ((c) obj).f46156a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f46156a;
    }
}
