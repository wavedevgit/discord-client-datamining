package kotlinx.coroutines;

import js.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 {

    /* renamed from: a  reason: collision with root package name */
    private static final os.e0 f35494a = new os.e0("COMPLETING_ALREADY");

    /* renamed from: b  reason: collision with root package name */
    public static final os.e0 f35495b = new os.e0("COMPLETING_WAITING_CHILDREN");

    /* renamed from: c  reason: collision with root package name */
    private static final os.e0 f35496c = new os.e0("COMPLETING_RETRY");

    /* renamed from: d  reason: collision with root package name */
    private static final os.e0 f35497d = new os.e0("TOO_LATE_TO_CANCEL");

    /* renamed from: e  reason: collision with root package name */
    private static final os.e0 f35498e = new os.e0("SEALED");

    /* renamed from: f  reason: collision with root package name */
    private static final p f35499f = new p(false);

    /* renamed from: g  reason: collision with root package name */
    private static final p f35500g = new p(true);

    public static final Object g(Object obj) {
        if (obj instanceof w0) {
            return new v((w0) obj);
        }
        return obj;
    }

    public static final Object h(Object obj) {
        v vVar;
        w0 w0Var;
        if (obj instanceof v) {
            vVar = (v) obj;
        } else {
            vVar = null;
        }
        if (vVar != null && (w0Var = vVar.f35541a) != null) {
            return w0Var;
        }
        return obj;
    }
}
