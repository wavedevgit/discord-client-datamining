package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class a extends kt.d implements c {

    /* renamed from: e  reason: collision with root package name */
    private final transient o f40316e;

    /* renamed from: i  reason: collision with root package name */
    private final transient o f40317i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str) {
        super(str);
        this.f40316e = new i(this, 0);
        this.f40317i = new i(this, 1);
    }

    public o F(Comparable comparable) {
        return new i(this, 6, comparable);
    }
}
