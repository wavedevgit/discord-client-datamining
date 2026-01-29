package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class v implements n0 {

    /* renamed from: a  reason: collision with root package name */
    private static final v f3827a = new v();

    private v() {
    }

    public static v c() {
        return f3827a;
    }

    @Override // androidx.datastore.preferences.protobuf.n0
    public m0 a(Class cls) {
        if (w.class.isAssignableFrom(cls)) {
            try {
                return (m0) w.o(cls.asSubclass(w.class)).h();
            } catch (Exception e10) {
                throw new RuntimeException("Unable to get message info for " + cls.getName(), e10);
            }
        }
        throw new IllegalArgumentException("Unsupported message type: " + cls.getName());
    }

    @Override // androidx.datastore.preferences.protobuf.n0
    public boolean b(Class cls) {
        return w.class.isAssignableFrom(cls);
    }
}
