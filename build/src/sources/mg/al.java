package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class al {

    /* renamed from: a  reason: collision with root package name */
    private static al f38099a;

    private al() {
    }

    public static synchronized al a() {
        al alVar;
        synchronized (al.class) {
            try {
                if (f38099a == null) {
                    f38099a = new al();
                }
                alVar = f38099a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return alVar;
    }
}
