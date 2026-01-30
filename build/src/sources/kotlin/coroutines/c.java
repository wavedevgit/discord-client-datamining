package kotlin.coroutines;

import java.io.Serializable;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements CoroutineContext, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f33368d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext.Element f33369e;

    public c(CoroutineContext left, CoroutineContext.Element element) {
        Intrinsics.checkNotNullParameter(left, "left");
        Intrinsics.checkNotNullParameter(element, "element");
        this.f33368d = left;
        this.f33369e = element;
    }

    private final boolean c(CoroutineContext.Element element) {
        return Intrinsics.areEqual(l(element.getKey()), element);
    }

    private final boolean d(c cVar) {
        while (c(cVar.f33369e)) {
            CoroutineContext coroutineContext = cVar.f33368d;
            if (coroutineContext instanceof c) {
                cVar = (c) coroutineContext;
            } else {
                Intrinsics.checkNotNull(coroutineContext, "null cannot be cast to non-null type kotlin.coroutines.CoroutineContext.Element");
                return c((CoroutineContext.Element) coroutineContext);
            }
        }
        return false;
    }

    private final int e() {
        int i10 = 2;
        c cVar = this;
        while (true) {
            CoroutineContext coroutineContext = cVar.f33368d;
            if (coroutineContext instanceof c) {
                cVar = (c) coroutineContext;
            } else {
                cVar = null;
            }
            if (cVar == null) {
                return i10;
            }
            i10++;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String f(String acc, CoroutineContext.Element element) {
        Intrinsics.checkNotNullParameter(acc, "acc");
        Intrinsics.checkNotNullParameter(element, "element");
        if (acc.length() == 0) {
            return element.toString();
        }
        return acc + ", " + element;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        return operation.invoke(this.f33368d.A1(obj, operation), this.f33369e);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext U0(CoroutineContext coroutineContext) {
        return CoroutineContext.a.b(this, coroutineContext);
    }

    public boolean equals(Object obj) {
        if (this != obj) {
            if (obj instanceof c) {
                c cVar = (c) obj;
                if (cVar.e() != e() || !cVar.d(this)) {
                    return false;
                }
                return true;
            }
            return false;
        }
        return true;
    }

    public int hashCode() {
        return this.f33368d.hashCode() + this.f33369e.hashCode();
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        c cVar = this;
        while (true) {
            CoroutineContext.Element l10 = cVar.f33369e.l(key);
            if (l10 != null) {
                return l10;
            }
            CoroutineContext coroutineContext = cVar.f33368d;
            if (coroutineContext instanceof c) {
                cVar = (c) coroutineContext;
            } else {
                return coroutineContext.l(key);
            }
        }
    }

    public String toString() {
        return '[' + ((String) A1("", new Function2() { // from class: nr.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                String f10;
                f10 = kotlin.coroutines.c.f((String) obj, (CoroutineContext.Element) obj2);
                return f10;
            }
        })) + ']';
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f33369e.l(key) != null) {
            return this.f33368d;
        }
        CoroutineContext x12 = this.f33368d.x1(key);
        if (x12 == this.f33368d) {
            return this;
        }
        if (x12 == e.f33372d) {
            return this.f33369e;
        }
        return new c(x12, this.f33369e);
    }
}
