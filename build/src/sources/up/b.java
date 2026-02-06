package up;

import br.d;
import br.g;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements d {

    /* renamed from: a  reason: collision with root package name */
    private final a f52084a;

    public b(a aVar) {
        this.f52084a = aVar;
    }

    public static b a(a aVar) {
        return new b(aVar);
    }

    public static CoroutineDispatcher c(a aVar) {
        return (CoroutineDispatcher) g.d(aVar.a());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public CoroutineDispatcher get() {
        return c(this.f52084a);
    }
}
