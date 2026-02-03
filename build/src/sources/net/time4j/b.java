package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class b extends nt.d implements c {

    /* renamed from: e  reason: collision with root package name */
    private final transient o f40297e;

    /* renamed from: i  reason: collision with root package name */
    private final transient o f40298i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(String str) {
        super(str);
        this.f40297e = new s0(this, 0);
        this.f40298i = new s0(this, 1);
    }

    public o F(Comparable comparable) {
        return new s0(this, 6, comparable);
    }
}
