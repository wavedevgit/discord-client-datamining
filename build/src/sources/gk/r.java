package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r implements h0 {

    /* renamed from: a  reason: collision with root package name */
    private static final r f25342a = new r();

    private r() {
    }

    public static r c() {
        return f25342a;
    }

    @Override // gk.h0
    public g0 a(Class cls) {
        if (s.class.isAssignableFrom(cls)) {
            try {
                return (g0) s.l(cls.asSubclass(s.class)).b();
            } catch (Exception e10) {
                throw new RuntimeException("Unable to get message info for " + cls.getName(), e10);
            }
        }
        throw new IllegalArgumentException("Unsupported message type: " + cls.getName());
    }

    @Override // gk.h0
    public boolean b(Class cls) {
        return s.class.isAssignableFrom(cls);
    }
}
