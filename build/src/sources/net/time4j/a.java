package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a extends cu.d implements c {

    /* renamed from: e  reason: collision with root package name */
    private final transient o f37762e;

    /* renamed from: i  reason: collision with root package name */
    private final transient o f37763i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str) {
        super(str);
        this.f37762e = new i(this, 0);
        this.f37763i = new i(this, 1);
    }

    public o F(Comparable comparable) {
        return new i(this, 6, comparable);
    }
}
