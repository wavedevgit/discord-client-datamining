package sk;

import fk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f49730a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f49731b;

    /* renamed from: c  reason: collision with root package name */
    private final p[] f49732c;

    public c(int i10, int[] iArr, int i11, int i12, int i13) {
        this.f49730a = i10;
        this.f49731b = iArr;
        float f10 = i11;
        float f11 = i13;
        this.f49732c = new p[]{new p(f10, f11), new p(i12, f11)};
    }

    public p[] a() {
        return this.f49732c;
    }

    public int[] b() {
        return this.f49731b;
    }

    public int c() {
        return this.f49730a;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c) || this.f49730a != ((c) obj).f49730a) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f49730a;
    }
}
