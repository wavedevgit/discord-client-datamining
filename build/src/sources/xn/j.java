package xn;

import android.content.Context;
import android.content.SharedPreferences;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f53484a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f53485b;

    /* renamed from: c  reason: collision with root package name */
    private String f53486c;

    public j(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f53484a = context;
        this.f53485b = lr.l.a(new Function0() { // from class: xn.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SharedPreferences e10;
                e10 = j.e(j.this);
                return e10;
            }
        });
    }

    private final SharedPreferences d() {
        return (SharedPreferences) this.f53485b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SharedPreferences e(j jVar) {
        return jVar.f53484a.getSharedPreferences("com.withpersona.sdk2.prefs", 0);
    }

    @Override // xn.a
    public void a(String str) {
        String str2;
        if (!Intrinsics.areEqual(str, this.f53486c)) {
            str2 = str;
        } else {
            str2 = null;
        }
        if (str2 != null) {
            this.f53486c = str;
            d().edit().putString("DEVICE_ID", this.f53486c).apply();
        }
    }

    @Override // xn.a
    public String b() {
        String str = this.f53486c;
        if (str == null) {
            return d().getString("DEVICE_ID", null);
        }
        return str;
    }
}
