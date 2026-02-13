package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class u0 implements bu.v {

    /* renamed from: d  reason: collision with root package name */
    private final bu.v f38358d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f38359e;

    private u0(bu.v vVar, Object obj) {
        this.f38358d = vVar;
        this.f38359e = obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static u0 a(bu.v vVar, Object obj) {
        return new u0(vVar, obj);
    }

    @Override // bu.v
    public Object apply(Object obj) {
        return this.f38358d.apply(obj);
    }
}
