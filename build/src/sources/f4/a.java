package f4;

import android.webkit.WebSettings;
import g4.d;
import g4.e;
import g4.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {
    private static d a(WebSettings webSettings) {
        return f.c().a(webSettings);
    }

    public static void b(WebSettings webSettings, int i10) {
        e eVar = e.FORCE_DARK;
        if (eVar.h()) {
            webSettings.setForceDark(i10);
        } else if (eVar.i()) {
            a(webSettings).a(i10);
        } else {
            throw e.e();
        }
    }

    public static void c(WebSettings webSettings, int i10) {
        if (e.FORCE_DARK_STRATEGY.i()) {
            a(webSettings).b(i10);
            return;
        }
        throw e.e();
    }
}
