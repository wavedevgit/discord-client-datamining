package pf;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c {

    /* renamed from: b  reason: collision with root package name */
    private static final c f43938b = new c();

    /* renamed from: a  reason: collision with root package name */
    private b f43939a = null;

    public static b a(Context context) {
        return f43938b.b(context);
    }

    public final synchronized b b(Context context) {
        try {
            if (this.f43939a == null) {
                if (context.getApplicationContext() != null) {
                    context = context.getApplicationContext();
                }
                this.f43939a = new b(context);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f43939a;
    }
}
