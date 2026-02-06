package ki;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f31659a;

    private a0(Object obj) {
        this.f31659a = obj;
    }

    public static z b(Object obj) {
        if (obj != null) {
            return new a0(obj);
        }
        throw new NullPointerException("instance cannot be null");
    }

    @Override // ki.e0
    public final Object a() {
        return this.f31659a;
    }
}
