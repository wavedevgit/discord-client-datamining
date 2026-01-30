package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class fc {

    /* renamed from: a  reason: collision with root package name */
    private static ec f41226a;

    public static synchronized wb a(rb rbVar) {
        wb wbVar;
        synchronized (fc.class) {
            try {
                if (f41226a == null) {
                    f41226a = new ec(null);
                }
                wbVar = (wb) f41226a.b(rbVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return wbVar;
    }

    public static synchronized wb b(String str) {
        wb a10;
        synchronized (fc.class) {
            a10 = a(rb.d("vision-common").c());
        }
        return a10;
    }
}
