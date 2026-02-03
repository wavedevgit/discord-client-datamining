package pj;

import android.content.Context;
import android.content.pm.PackageManager;
import android.text.TextUtils;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final gf.i f46032a = new gf.i("CommonUtils", "");

    public static String a(Context context) {
        try {
            return String.valueOf(context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionCode);
        } catch (PackageManager.NameNotFoundException e10) {
            f46032a.c("CommonUtils", "Exception thrown when trying to get app version ".concat(e10.toString()));
            return "";
        }
    }

    public static String b(Locale locale) {
        if (com.google.android.gms.common.util.k.c()) {
            return locale.toLanguageTag();
        }
        StringBuilder sb2 = new StringBuilder(locale.getLanguage());
        if (!TextUtils.isEmpty(locale.getCountry())) {
            sb2.append("-");
            sb2.append(locale.getCountry());
        }
        if (!TextUtils.isEmpty(locale.getVariant())) {
            sb2.append("-");
            sb2.append(locale.getVariant());
        }
        return sb2.toString();
    }
}
