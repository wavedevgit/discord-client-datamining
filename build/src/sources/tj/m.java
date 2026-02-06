package tj;

import android.content.Context;
import android.content.SharedPreferences;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: b  reason: collision with root package name */
    public static final ui.c f50658b = ui.c.c(m.class).b(ui.q.j(i.class)).b(ui.q.j(Context.class)).e(new ui.g() { // from class: tj.e0
        @Override // ui.g
        public final Object a(ui.d dVar) {
            return new m((Context) dVar.a(Context.class));
        }
    }).d();

    /* renamed from: a  reason: collision with root package name */
    protected final Context f50659a;

    public m(Context context) {
        this.f50659a = context;
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
        return this.f50659a.getSharedPreferences("com.google.mlkit.internal", 0);
    }
}
