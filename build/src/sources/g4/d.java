package g4;

import org.chromium.support_lib_boundary.WebSettingsBoundaryInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private WebSettingsBoundaryInterface f25664a;

    public d(WebSettingsBoundaryInterface webSettingsBoundaryInterface) {
        this.f25664a = webSettingsBoundaryInterface;
    }

    public void a(int i10) {
        this.f25664a.setForceDark(i10);
    }

    public void b(int i10) {
        this.f25664a.setForceDarkBehavior(i10);
    }
}
