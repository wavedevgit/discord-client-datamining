package ni;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements z {

    /* renamed from: a  reason: collision with root package name */
    private final Object f38466a;

    private a0(Object obj) {
        this.f38466a = obj;
    }

    public static z b(Object obj) {
        if (obj != null) {
            return new a0(obj);
        }
        throw new NullPointerException("instance cannot be null");
    }

    @Override // ni.e0
    public final Object a() {
        return this.f38466a;
    }
}
