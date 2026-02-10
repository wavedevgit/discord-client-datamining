package wj;

import android.content.Context;
import android.content.SharedPreferences;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: b  reason: collision with root package name */
    public static final xi.c f52823b = xi.c.c(m.class).b(xi.q.j(i.class)).b(xi.q.j(Context.class)).e(new xi.g() { // from class: wj.e0
        @Override // xi.g
        public final Object a(xi.d dVar) {
            return new m((Context) dVar.a(Context.class));
        }
    }).d();

    /* renamed from: a  reason: collision with root package name */
    protected final Context f52824a;

    public m(Context context) {
        this.f52824a = context;
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
        return this.f52824a.getSharedPreferences("com.google.mlkit.internal", 0);
    }
}
