package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class al {

    /* renamed from: a  reason: collision with root package name */
    private static al f37538a;

    private al() {
    }

    public static synchronized al a() {
        al alVar;
        synchronized (al.class) {
            try {
                if (f37538a == null) {
                    f37538a = new al();
                }
                alVar = f37538a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return alVar;
    }
}
