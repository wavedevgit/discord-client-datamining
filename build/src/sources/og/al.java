package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class al {

    /* renamed from: a  reason: collision with root package name */
    private static al f39669a;

    private al() {
    }

    public static synchronized al a() {
        al alVar;
        synchronized (al.class) {
            try {
                if (f39669a == null) {
                    f39669a = new al();
                }
                alVar = f39669a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return alVar;
    }
}
