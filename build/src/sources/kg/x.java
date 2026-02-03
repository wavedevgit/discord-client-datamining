package kg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x extends v {

    /* renamed from: i  reason: collision with root package name */
    private final z f32367i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(z zVar, int i10) {
        super(zVar.size(), i10);
        this.f32367i = zVar;
    }

    @Override // kg.v
    protected final Object a(int i10) {
        return this.f32367i.get(i10);
    }
}
