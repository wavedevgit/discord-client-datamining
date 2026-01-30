package k4;

import android.content.Context;
import androidx.work.WorkerParameters;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    private static final String f32959a = m.i("WorkerFactory");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends a0 {
        a() {
        }

        @Override // k4.a0
        public androidx.work.c a(Context context, String str, WorkerParameters workerParameters) {
            return null;
        }
    }

    public static a0 c() {
        return new a();
    }

    public abstract androidx.work.c a(Context context, String str, WorkerParameters workerParameters);

    public final androidx.work.c b(Context context, String str, WorkerParameters workerParameters) {
        Class cls;
        androidx.work.c a10 = a(context, str, workerParameters);
        if (a10 == null) {
            try {
                cls = Class.forName(str).asSubclass(androidx.work.c.class);
            } catch (Throwable th2) {
                m e10 = m.e();
                String str2 = f32959a;
                e10.d(str2, "Invalid class: " + str, th2);
                cls = null;
            }
            if (cls != null) {
                try {
                    a10 = (androidx.work.c) cls.getDeclaredConstructor(Context.class, WorkerParameters.class).newInstance(context, workerParameters);
                } catch (Throwable th3) {
                    m e11 = m.e();
                    String str3 = f32959a;
                    e11.d(str3, "Could not instantiate " + str, th3);
                }
            }
        }
        if (a10 != null && a10.k()) {
            String name = getClass().getName();
            throw new IllegalStateException("WorkerFactory (" + name + ") returned an instance of a ListenableWorker (" + str + ") which has already been invoked. createWorker() must always return a new instance of a ListenableWorker.");
        }
        return a10;
    }
}
