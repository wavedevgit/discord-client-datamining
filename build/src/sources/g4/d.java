package g4;

import org.chromium.support_lib_boundary.WebSettingsBoundaryInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private WebSettingsBoundaryInterface f24734a;

    public d(WebSettingsBoundaryInterface webSettingsBoundaryInterface) {
        this.f24734a = webSettingsBoundaryInterface;
    }

    public void a(int i10) {
        this.f24734a.setForceDark(i10);
    }

    public void b(int i10) {
        this.f24734a.setForceDarkBehavior(i10);
    }
}
