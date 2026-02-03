package vn;

import android.content.Context;
import android.content.SharedPreferences;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f51448a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f51449b;

    /* renamed from: c  reason: collision with root package name */
    private String f51450c;

    public j(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f51448a = context;
        this.f51449b = jr.l.b(new Function0() { // from class: vn.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SharedPreferences e10;
                e10 = j.e(j.this);
                return e10;
            }
        });
    }

    private final SharedPreferences d() {
        return (SharedPreferences) this.f51449b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SharedPreferences e(j jVar) {
        return jVar.f51448a.getSharedPreferences("com.withpersona.sdk2.prefs", 0);
    }

    @Override // vn.a
    public void a(String str) {
        String str2;
        if (!Intrinsics.areEqual(str, this.f51450c)) {
            str2 = str;
        } else {
            str2 = null;
        }
        if (str2 != null) {
            this.f51450c = str;
            d().edit().putString("DEVICE_ID", this.f51450c).apply();
        }
    }

    @Override // vn.a
    public String b() {
        String str = this.f51450c;
        if (str == null) {
            return d().getString("DEVICE_ID", null);
        }
        return str;
    }
}
