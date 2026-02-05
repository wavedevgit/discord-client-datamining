package g4;

import android.webkit.WebSettings;
import org.chromium.support_lib_boundary.WebSettingsBoundaryInterface;
import org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    private final WebkitToCompatConverterBoundaryInterface f23683a;

    public i(WebkitToCompatConverterBoundaryInterface webkitToCompatConverterBoundaryInterface) {
        this.f23683a = webkitToCompatConverterBoundaryInterface;
    }

    public d a(WebSettings webSettings) {
        return new d((WebSettingsBoundaryInterface) fv.a.a(WebSettingsBoundaryInterface.class, this.f23683a.convertSettings(webSettings)));
    }
}
