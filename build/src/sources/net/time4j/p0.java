package net.time4j;

import java.util.Comparator;
import pt.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class p0 implements pt.d0, Comparator {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f40160d;

    private p0(boolean z10) {
        this.f40160d = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Comparator a() {
        return new p0(false);
    }

    static int b(pt.w wVar, pt.w wVar2) {
        int compare = Double.compare(wVar2.getLength(), wVar.getLength());
        if (compare == 0 && !wVar.equals(wVar2)) {
            throw new IllegalArgumentException("Mixing different units of same length not allowed.");
        }
        return compare;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p0 h() {
        return new p0(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p0 j() {
        return new p0(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p0 k() {
        return new p0(true);
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(l0.a aVar, l0.a aVar2) {
        return b((pt.w) aVar.b(), (pt.w) aVar2.b());
    }
}
