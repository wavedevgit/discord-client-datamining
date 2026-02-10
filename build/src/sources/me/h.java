package me;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {
    public static String b(com.google.android.exoplayer2.trackselection.g gVar) {
        boolean z10;
        if (gVar != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        int k10 = oe.c0.k(gVar.q().f11727w);
        if (k10 == -1) {
            k10 = oe.c0.k(gVar.q().f11726v);
        }
        if (k10 == 1) {
            return "a";
        }
        if (k10 == 2) {
            return "v";
        }
        return null;
    }

    public abstract oi.t a();

    public abstract h c(long j10);

    public abstract h d(String str);
}
