package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class fc {

    /* renamed from: a  reason: collision with root package name */
    private static ec f41210a;

    public static synchronized wb a(rb rbVar) {
        wb wbVar;
        synchronized (fc.class) {
            try {
                if (f41210a == null) {
                    f41210a = new ec(null);
                }
                wbVar = (wb) f41210a.b(rbVar);
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
