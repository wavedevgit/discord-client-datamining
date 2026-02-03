package net.time4j;

import java.util.Comparator;
import mt.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class p0 implements mt.d0, Comparator {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f40700d;

    private p0(boolean z10) {
        this.f40700d = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Comparator a() {
        return new p0(false);
    }

    static int b(mt.w wVar, mt.w wVar2) {
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
    public static p0 l() {
        return new p0(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p0 m() {
        return new p0(true);
    }

    @Override // java.util.Comparator
    /* renamed from: c */
    public int compare(l0.a aVar, l0.a aVar2) {
        return b((mt.w) aVar.b(), (mt.w) aVar2.b());
    }
}
