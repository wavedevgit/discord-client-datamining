package uj;

import android.content.Context;
import android.content.SharedPreferences;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class m {

    /* renamed from: b  reason: collision with root package name */
    public static final vi.c f51611b = vi.c.c(m.class).b(vi.q.j(i.class)).b(vi.q.j(Context.class)).e(new vi.g() { // from class: uj.e0
        @Override // vi.g
        public final Object a(vi.d dVar) {
            return new m((Context) dVar.a(Context.class));
        }
    }).d();

    /* renamed from: a  reason: collision with root package name */
    protected final Context f51612a;

    public m(Context context) {
        this.f51612a = context;
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
        return this.f51612a.getSharedPreferences("com.google.mlkit.internal", 0);
    }
}
