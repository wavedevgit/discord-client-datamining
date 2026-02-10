package ji;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    private static final AtomicReference f30185a = new AtomicReference(null);

    public static void a(i iVar) {
        AtomicReference atomicReference = f30185a;
        while (!p0.d.a(atomicReference, null, iVar) && atomicReference.get() == null) {
        }
    }
}
