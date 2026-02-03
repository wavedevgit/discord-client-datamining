package g4;

import org.chromium.support_lib_boundary.WebSettingsBoundaryInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private WebSettingsBoundaryInterface f25759a;

    public d(WebSettingsBoundaryInterface webSettingsBoundaryInterface) {
        this.f25759a = webSettingsBoundaryInterface;
    }

    public void a(int i10) {
        this.f25759a.setForceDark(i10);
    }

    public void b(int i10) {
        this.f25759a.setForceDarkBehavior(i10);
    }
}
