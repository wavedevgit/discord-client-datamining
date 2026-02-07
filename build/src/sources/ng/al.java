package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class al {

    /* renamed from: a  reason: collision with root package name */
    private static al f39749a;

    private al() {
    }

    public static synchronized al a() {
        al alVar;
        synchronized (al.class) {
            try {
                if (f39749a == null) {
                    f39749a = new al();
                }
                alVar = f39749a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return alVar;
    }
}
