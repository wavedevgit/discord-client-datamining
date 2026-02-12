package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class al {

    /* renamed from: a  reason: collision with root package name */
    private static al f39101a;

    private al() {
    }

    public static synchronized al a() {
        al alVar;
        synchronized (al.class) {
            try {
                if (f39101a == null) {
                    f39101a = new al();
                }
                alVar = f39101a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return alVar;
    }
}
