package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kc extends h6 {

    /* renamed from: i  reason: collision with root package name */
    private final mc f42178i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public kc(mc mcVar, int i10) {
        super(mcVar.size(), i10);
        this.f42178i = mcVar;
    }

    @Override // pg.h6
    protected final Object a(int i10) {
        return this.f42178i.get(i10);
    }
}
