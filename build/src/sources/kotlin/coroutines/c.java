package kotlin.coroutines;

import java.io.Serializable;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements CoroutineContext, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f32534d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext.Element f32535e;

    public c(CoroutineContext left, CoroutineContext.Element element) {
        Intrinsics.checkNotNullParameter(left, "left");
        Intrinsics.checkNotNullParameter(element, "element");
        this.f32534d = left;
        this.f32535e = element;
    }

    private final boolean c(CoroutineContext.Element element) {
        return Intrinsics.areEqual(l(element.getKey()), element);
    }

    private final boolean d(c cVar) {
        while (c(cVar.f32535e)) {
            CoroutineContext coroutineContext = cVar.f32534d;
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
            CoroutineContext coroutineContext = cVar.f32534d;
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
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return CoroutineContext.a.b(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext e1(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f32535e.l(key) != null) {
            return this.f32534d;
        }
        CoroutineContext e12 = this.f32534d.e1(key);
        if (e12 == this.f32534d) {
            return this;
        }
        if (e12 == e.f32538d) {
            return this.f32535e;
        }
        return new c(e12, this.f32535e);
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
        return this.f32534d.hashCode() + this.f32535e.hashCode();
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        c cVar = this;
        while (true) {
            CoroutineContext.Element l10 = cVar.f32535e.l(key);
            if (l10 != null) {
                return l10;
            }
            CoroutineContext coroutineContext = cVar.f32534d;
            if (coroutineContext instanceof c) {
                cVar = (c) coroutineContext;
            } else {
                return coroutineContext.l(key);
            }
        }
    }

    public String toString() {
        return '[' + ((String) y1("", new Function2() { // from class: qr.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                String f10;
                f10 = kotlin.coroutines.c.f((String) obj, (CoroutineContext.Element) obj2);
                return f10;
            }
        })) + ']';
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object y1(Object obj, Function2 operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        return operation.invoke(this.f32534d.y1(obj, operation), this.f32535e);
    }
}
