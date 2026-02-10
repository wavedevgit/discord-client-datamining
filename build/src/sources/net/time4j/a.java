package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a extends tt.d implements c {

    /* renamed from: e  reason: collision with root package name */
    private final transient o f38189e;

    /* renamed from: i  reason: collision with root package name */
    private final transient o f38190i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str) {
        super(str);
        this.f38189e = new i(this, 0);
        this.f38190i = new i(this, 1);
    }

    public o F(Comparable comparable) {
        return new i(this, 6, comparable);
    }
}
