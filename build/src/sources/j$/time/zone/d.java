package j$.time.zone;

import java.security.PrivilegedAction;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class d implements PrivilegedAction {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ List f31671a;

    public d(List list) {
        this.f31671a = list;
    }

    @Override // java.security.PrivilegedAction
    public final Object run() {
        String property = System.getProperty("java.time.zone.DefaultZoneRulesProvider");
        if (property != null) {
            try {
                e eVar = (e) e.class.cast(Class.forName(property, true, e.class.getClassLoader()).newInstance());
                e.b(eVar);
                ((ArrayList) this.f31671a).add(eVar);
                return null;
            } catch (Exception e10) {
                throw new Error(e10);
            }
        }
        e.b(new e());
        return null;
    }
}
