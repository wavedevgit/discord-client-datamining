package qf;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c {

    /* renamed from: b  reason: collision with root package name */
    private static final c f44120b = new c();

    /* renamed from: a  reason: collision with root package name */
    private b f44121a = null;

    public static b a(Context context) {
        return f44120b.b(context);
    }

    public final synchronized b b(Context context) {
        try {
            if (this.f44121a == null) {
                if (context.getApplicationContext() != null) {
                    context = context.getApplicationContext();
                }
                this.f44121a = new b(context);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f44121a;
    }
}
