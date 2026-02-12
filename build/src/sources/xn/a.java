package xn;

import android.content.Context;
import android.net.Uri;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f54937a;

    /* renamed from: b  reason: collision with root package name */
    private final String f54938b;

    public a(Context context, String str) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f54937a = context;
        this.f54938b = str;
    }

    private final Uri a(String str, Context context) {
        return b.f54939a.b(context, str);
    }

    private final Uri b(Context context) {
        String str = this.f54938b;
        if (str == null) {
            return null;
        }
        try {
            Uri parse = Uri.parse(str);
            if (parse.getScheme() == null) {
                return a(str, context);
            }
            return parse;
        } catch (Exception unused) {
            return a(str, context);
        }
    }

    private final boolean d(Uri uri) {
        String scheme;
        if (uri == null || (scheme = uri.getScheme()) == null) {
            return false;
        }
        return StringsKt.P(scheme, "res", false, 2, null);
    }

    public final Uri c(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Uri b10 = b(context);
        if (d(b10)) {
            Intrinsics.checkNotNull(b10);
            String uri = b10.toString();
            Intrinsics.checkNotNullExpressionValue(uri, "toString(...)");
            String packageName = context.getPackageName();
            return Uri.parse(StringsKt.J(uri, "res:/", "android.resource://" + packageName + "/", false, 4, null));
        }
        return b10;
    }
}
