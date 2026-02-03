package kotlinx.coroutines;

import hs.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 {

    /* renamed from: a  reason: collision with root package name */
    private static final ms.e0 f36104a = new ms.e0("COMPLETING_ALREADY");

    /* renamed from: b  reason: collision with root package name */
    public static final ms.e0 f36105b = new ms.e0("COMPLETING_WAITING_CHILDREN");

    /* renamed from: c  reason: collision with root package name */
    private static final ms.e0 f36106c = new ms.e0("COMPLETING_RETRY");

    /* renamed from: d  reason: collision with root package name */
    private static final ms.e0 f36107d = new ms.e0("TOO_LATE_TO_CANCEL");

    /* renamed from: e  reason: collision with root package name */
    private static final ms.e0 f36108e = new ms.e0("SEALED");

    /* renamed from: f  reason: collision with root package name */
    private static final p f36109f = new p(false);

    /* renamed from: g  reason: collision with root package name */
    private static final p f36110g = new p(true);

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
        if (vVar != null && (w0Var = vVar.f36151a) != null) {
            return w0Var;
        }
        return obj;
    }
}
