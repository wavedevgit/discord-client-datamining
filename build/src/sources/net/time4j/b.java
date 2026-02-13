package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class b extends cu.d implements c {

    /* renamed from: e  reason: collision with root package name */
    private final transient o f37825e;

    /* renamed from: i  reason: collision with root package name */
    private final transient o f37826i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(String str) {
        super(str);
        this.f37825e = new s0(this, 0);
        this.f37826i = new s0(this, 1);
    }

    public o F(Comparable comparable) {
        return new s0(this, 6, comparable);
    }
}
