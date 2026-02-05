package sj;

import android.content.Context;
import android.content.SharedPreferences;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: b  reason: collision with root package name */
    public static final ti.c f49694b = ti.c.c(m.class).b(ti.q.j(i.class)).b(ti.q.j(Context.class)).e(new ti.g() { // from class: sj.e0
        @Override // ti.g
        public final Object a(ti.d dVar) {
            return new m((Context) dVar.a(Context.class));
        }
    }).d();

    /* renamed from: a  reason: collision with root package name */
    protected final Context f49695a;

    public m(Context context) {
        this.f49695a = context;
    }

    public synchronized String a() {
        String string = b().getString("ml_sdk_instance_id", null);
        if (string != null) {
            return string;
        }
        String uuid = UUID.randomUUID().toString();
        b().edit().putString("ml_sdk_instance_id", uuid).apply();
        return uuid;
    }

    protected final SharedPreferences b() {
        return this.f49695a.getSharedPreferences("com.google.mlkit.internal", 0);
    }
}
