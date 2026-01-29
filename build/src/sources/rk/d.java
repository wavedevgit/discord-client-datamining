package rk;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends h {
    /* JADX INFO: Access modifiers changed from: package-private */
    public d(gk.a aVar) {
        super(aVar);
    }

    @Override // rk.j
    public String d() {
        if (c().l() >= 48) {
            StringBuilder sb2 = new StringBuilder();
            f(sb2, 8);
            int f10 = b().f(48, 2);
            sb2.append("(393");
            sb2.append(f10);
            sb2.append(')');
            int f11 = b().f(50, 10);
            if (f11 / 100 == 0) {
                sb2.append('0');
            }
            if (f11 / 10 == 0) {
                sb2.append('0');
            }
            sb2.append(f11);
            sb2.append(b().c(60, null).b());
            return sb2.toString();
        }
        throw ck.k.a();
    }
}
