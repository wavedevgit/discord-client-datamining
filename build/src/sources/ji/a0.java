package ji;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f30911a;

    private a0(Object obj) {
        this.f30911a = obj;
    }

    public static z b(Object obj) {
        if (obj != null) {
            return new a0(obj);
        }
        throw new NullPointerException("instance cannot be null");
    }

    @Override // ji.e0
    public final Object a() {
        return this.f30911a;
    }
}
