package ao;

import android.content.Context;
import android.content.SharedPreferences;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f5904a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f5905b;

    /* renamed from: c  reason: collision with root package name */
    private String f5906c;

    public j(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f5904a = context;
        this.f5905b = or.l.a(new Function0() { // from class: ao.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SharedPreferences e10;
                e10 = j.e(j.this);
                return e10;
            }
        });
    }

    private final SharedPreferences d() {
        return (SharedPreferences) this.f5905b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SharedPreferences e(j jVar) {
        return jVar.f5904a.getSharedPreferences("com.withpersona.sdk2.prefs", 0);
    }

    @Override // ao.a
    public void a(String str) {
        String str2;
        if (!Intrinsics.areEqual(str, this.f5906c)) {
            str2 = str;
        } else {
            str2 = null;
        }
        if (str2 != null) {
            this.f5906c = str;
            d().edit().putString("DEVICE_ID", this.f5906c).apply();
        }
    }

    @Override // ao.a
    public String b() {
        String str = this.f5906c;
        if (str == null) {
            return d().getString("DEVICE_ID", null);
        }
        return str;
    }
}
