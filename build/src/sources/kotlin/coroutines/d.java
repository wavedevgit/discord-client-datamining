package kotlin.coroutines;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface d extends CoroutineContext.Element {
    @NotNull

    /* renamed from: h  reason: collision with root package name */
    public static final b f33370h = b.f33371d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static CoroutineContext.Element a(d dVar, CoroutineContext.b key) {
            CoroutineContext.Element b10;
            Intrinsics.checkNotNullParameter(key, "key");
            if (key instanceof kotlin.coroutines.b) {
                kotlin.coroutines.b bVar = (kotlin.coroutines.b) key;
                if (!bVar.a(dVar.getKey()) || (b10 = bVar.b(dVar)) == null) {
                    return null;
                }
                return b10;
            } else if (d.f33370h != key) {
                return null;
            } else {
                Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type E of kotlin.coroutines.ContinuationInterceptor.get");
                return dVar;
            }
        }

        public static CoroutineContext b(d dVar, CoroutineContext.b key) {
            Intrinsics.checkNotNullParameter(key, "key");
            if (key instanceof kotlin.coroutines.b) {
                kotlin.coroutines.b bVar = (kotlin.coroutines.b) key;
                if (bVar.a(dVar.getKey()) && bVar.b(dVar) != null) {
                    return e.f33372d;
                }
                return dVar;
            } else if (d.f33370h == key) {
                return e.f33372d;
            } else {
                return dVar;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements CoroutineContext.b {

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ b f33371d = new b();

        private b() {
        }
    }

    Continuation E(Continuation continuation);

    void n(Continuation continuation);
}
