package un;

import android.content.Context;
import android.content.SharedPreferences;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f50492a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f50493b;

    /* renamed from: c  reason: collision with root package name */
    private String f50494c;

    public j(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f50492a = context;
        this.f50493b = ir.l.b(new Function0() { // from class: un.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SharedPreferences e10;
                e10 = j.e(j.this);
                return e10;
            }
        });
    }

    private final SharedPreferences d() {
        return (SharedPreferences) this.f50493b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SharedPreferences e(j jVar) {
        return jVar.f50492a.getSharedPreferences("com.withpersona.sdk2.prefs", 0);
    }

    @Override // un.a
    public void a(String str) {
        String str2;
        if (!Intrinsics.areEqual(str, this.f50494c)) {
            str2 = str;
        } else {
            str2 = null;
        }
        if (str2 != null) {
            this.f50494c = str;
            d().edit().putString("DEVICE_ID", this.f50494c).apply();
        }
    }

    @Override // un.a
    public String b() {
        String str = this.f50494c;
        if (str == null) {
            return d().getString("DEVICE_ID", null);
        }
        return str;
    }
}
