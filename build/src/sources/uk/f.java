package uk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class f extends i {
    /* JADX INFO: Access modifiers changed from: package-private */
    public f(jk.a aVar) {
        super(aVar);
    }

    @Override // uk.j
    public String d() {
        if (c().l() == 60) {
            StringBuilder sb2 = new StringBuilder();
            f(sb2, 5);
            j(sb2, 45, 15);
            return sb2.toString();
        }
        throw fk.k.a();
    }
}
