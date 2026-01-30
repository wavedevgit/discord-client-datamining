package h5;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements j {

    /* renamed from: a  reason: collision with root package name */
    private final i f27366a;

    public f(i iVar) {
        this.f27366a = iVar;
    }

    @Override // h5.j
    public Object a(Continuation continuation) {
        return this.f27366a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof f) && Intrinsics.areEqual(this.f27366a, ((f) obj).f27366a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f27366a.hashCode();
    }
}
