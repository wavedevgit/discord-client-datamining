package g4;

import android.webkit.WebSettings;
import org.chromium.support_lib_boundary.WebSettingsBoundaryInterface;
import org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    private final WebkitToCompatConverterBoundaryInterface f24984a;

    public i(WebkitToCompatConverterBoundaryInterface webkitToCompatConverterBoundaryInterface) {
        this.f24984a = webkitToCompatConverterBoundaryInterface;
    }

    public d a(WebSettings webSettings) {
        return new d((WebSettingsBoundaryInterface) cv.a.a(WebSettingsBoundaryInterface.class, this.f24984a.convertSettings(webSettings)));
    }
}
