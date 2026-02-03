package h5;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements j {

    /* renamed from: a  reason: collision with root package name */
    private final i f26824a;

    public f(i iVar) {
        this.f26824a = iVar;
    }

    @Override // h5.j
    public Object a(Continuation continuation) {
        return this.f26824a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof f) && Intrinsics.areEqual(this.f26824a, ((f) obj).f26824a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f26824a.hashCode();
    }
}
