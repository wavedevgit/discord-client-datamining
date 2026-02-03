package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class al {

    /* renamed from: a  reason: collision with root package name */
    private static al f37876a;

    private al() {
    }

    public static synchronized al a() {
        al alVar;
        synchronized (al.class) {
            try {
                if (f37876a == null) {
                    f37876a = new al();
                }
                alVar = f37876a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return alVar;
    }
}
