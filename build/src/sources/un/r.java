package un;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.provider.Settings;
import com.google.android.gms.tasks.Task;
import java.security.MessageDigest;
import java.util.Arrays;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f50501a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f50502b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50503c;

    /* renamed from: d  reason: collision with root package name */
    private String f50504d;

    public r(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f50501a = context;
        this.f50502b = ir.l.b(new Function0() { // from class: un.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SharedPreferences j10;
                j10 = r.j(r.this);
                return j10;
            }
        });
        this.f50503c = g();
        this.f50504d = "";
    }

    private final String g() {
        if (Build.VERSION.SDK_INT < 26) {
            return "";
        }
        String string = i().getString("ANDROID_ID", null);
        if (string != null && !StringsKt.k0(string)) {
            return string;
        }
        String string2 = Settings.Secure.getString(this.f50501a.getContentResolver(), "android_id");
        if (string2 == null || StringsKt.k0(string2)) {
            return "";
        }
        MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
        String MODEL = Build.MODEL;
        Intrinsics.checkNotNullExpressionValue(MODEL, "MODEL");
        byte[] bytes = MODEL.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        byte[] digest = messageDigest.digest(bytes);
        Intrinsics.checkNotNull(digest);
        String str = string2 + kotlin.collections.i.s0(digest, "", null, null, 0, null, new Function1() { // from class: un.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence h10;
                h10 = r.h(((Byte) obj).byteValue());
                return h10;
            }
        }, 30, null);
        i().edit().putString("ANDROID_ID", str).apply();
        return str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence h(byte b10) {
        String format = String.format("%02x", Arrays.copyOf(new Object[]{Byte.valueOf(b10)}, 1));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    private final SharedPreferences i() {
        return (SharedPreferences) this.f50502b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SharedPreferences j(r rVar) {
        return rVar.f50501a.getSharedPreferences("com.withpersona.sdk2.prefs", 0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r rVar, te.c cVar) {
        rVar.f50504d = cVar.a();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(Function1 function1, Object obj) {
        function1.invoke(obj);
    }

    @Override // un.g
    public void a() {
        if (!StringsKt.k0(this.f50503c)) {
            return;
        }
        te.b a10 = te.a.a(this.f50501a);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        Task h10 = a10.h();
        Intrinsics.checkNotNullExpressionValue(h10, "getAppSetIdInfo(...)");
        final Function1 function1 = new Function1() { // from class: un.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k10;
                k10 = r.k(r.this, (te.c) obj);
                return k10;
            }
        };
        h10.g(new wg.g() { // from class: un.p
            @Override // wg.g
            public final void onSuccess(Object obj) {
                r.l(Function1.this, obj);
            }
        });
    }

    @Override // un.g
    public String b() {
        if (!StringsKt.k0(this.f50503c)) {
            return this.f50503c;
        }
        if (this.f50504d.length() == 0) {
            a();
        }
        return this.f50504d;
    }
}
