package im;

import android.content.Intent;
import android.os.Build;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f26863a = new d();

    private d() {
    }

    public final Intent a(f options) {
        String str;
        Intrinsics.checkNotNullParameter(options, "options");
        Intent intent = new Intent(options.a());
        String[] f10 = options.f();
        if (f10.length > 1) {
            intent.putExtra("android.intent.extra.MIME_TYPES", f10);
            str = options.d();
        } else {
            str = f10[0];
        }
        intent.setType(str);
        if (Build.VERSION.SDK_INT >= 26 && options.c() != null) {
            intent.putExtra("android.provider.extra.INITIAL_URI", options.c());
        }
        if (!options.b()) {
            intent.addCategory("android.intent.category.OPENABLE");
        }
        intent.putExtra("android.intent.extra.LOCAL_ONLY", options.e());
        intent.putExtra("android.intent.extra.ALLOW_MULTIPLE", options.g());
        return intent;
    }
}
