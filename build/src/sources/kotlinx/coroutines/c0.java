package kotlinx.coroutines;

import gs.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 {

    /* renamed from: a  reason: collision with root package name */
    private static final ls.e0 f36328a = new ls.e0("COMPLETING_ALREADY");

    /* renamed from: b  reason: collision with root package name */
    public static final ls.e0 f36329b = new ls.e0("COMPLETING_WAITING_CHILDREN");

    /* renamed from: c  reason: collision with root package name */
    private static final ls.e0 f36330c = new ls.e0("COMPLETING_RETRY");

    /* renamed from: d  reason: collision with root package name */
    private static final ls.e0 f36331d = new ls.e0("TOO_LATE_TO_CANCEL");

    /* renamed from: e  reason: collision with root package name */
    private static final ls.e0 f36332e = new ls.e0("SEALED");

    /* renamed from: f  reason: collision with root package name */
    private static final p f36333f = new p(false);

    /* renamed from: g  reason: collision with root package name */
    private static final p f36334g = new p(true);

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
        if (vVar != null && (w0Var = vVar.f36375a) != null) {
            return w0Var;
        }
        return obj;
    }
}
