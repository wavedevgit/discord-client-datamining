package gf;

import com.google.android.gms.tasks.Task;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final m0 f24875a = new j0();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        Object a(ef.k kVar);
    }

    public static Task a(ef.g gVar, a aVar) {
        m0 m0Var = f24875a;
        xg.k kVar = new xg.k();
        gVar.addStatusListener(new k0(gVar, kVar, aVar, m0Var));
        return kVar.a();
    }

    public static Task b(ef.g gVar) {
        return a(gVar, new l0());
    }
}
