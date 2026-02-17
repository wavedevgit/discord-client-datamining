package ng;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends v0 {

    /* renamed from: i  reason: collision with root package name */
    private final f f38405i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(f fVar, int i10) {
        super(fVar.size(), i10);
        this.f38405i = fVar;
    }

    @Override // ng.v0
    protected final Object a(int i10) {
        return this.f38405i.get(i10);
    }
}
