package vk;

import ik.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f52484a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f52485b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f52486c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f52484a = i10;
        this.f52485b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f52486c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f52486c;
    }

    public int[] b() {
        return this.f52485b;
    }

    public int c() {
        return this.f52484a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f52484a != ((c) obj).f52484a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f52484a;
    }
}
