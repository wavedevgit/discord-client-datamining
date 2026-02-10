package qf;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c {

    /* renamed from: b  reason: collision with root package name */
    private static final c f45452b = new c();

    /* renamed from: a  reason: collision with root package name */
    private b f45453a = null;

    public static b a(Context context) {
        return f45452b.b(context);
    }

    public final synchronized b b(Context context) {
        try {
            if (this.f45453a == null) {
                if (context.getApplicationContext() != null) {
                    context = context.getApplicationContext();
                }
                this.f45453a = new b(context);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f45453a;
    }
}
