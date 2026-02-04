package st;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum d {
    tl("fil"),
    no("nb"),
    in(StackTraceHelper.ID_KEY),
    iw("he");
    

    /* renamed from: p  reason: collision with root package name */
    static final d[] f49633p = values();
    private final String alias;

    d(String str) {
        this.alias = str;
    }

    public static String a(Locale locale) {
        d[] dVarArr;
        String language = locale.getLanguage();
        if (language.equals("no") && locale.getVariant().equals("NY") && locale.getCountry().equals("NO")) {
            return "nn";
        }
        for (d dVar : f49633p) {
            if (language.equals(dVar.name())) {
                return dVar.alias;
            }
        }
        return language;
    }
}
