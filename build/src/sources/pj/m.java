package pj;

import android.content.Context;
import android.content.SharedPreferences;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: b  reason: collision with root package name */
    public static final qi.c f46078b = qi.c.c(m.class).b(qi.q.j(i.class)).b(qi.q.j(Context.class)).e(new qi.g() { // from class: pj.e0
        @Override // qi.g
        public final Object a(qi.d dVar) {
            return new m((Context) dVar.a(Context.class));
        }
    }).d();

    /* renamed from: a  reason: collision with root package name */
    protected final Context f46079a;

    public m(Context context) {
        this.f46079a = context;
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
        return this.f46079a.getSharedPreferences("com.google.mlkit.internal", 0);
    }
}
