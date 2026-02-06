package ks;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KDeclarationContainer;
import kotlin.reflect.KType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final a f35312a = b.a(c.f35271d);

    /* renamed from: b  reason: collision with root package name */
    private static final a f35313b = b.a(d.f35287d);

    /* renamed from: c  reason: collision with root package name */
    private static final a f35314c = b.a(e.f35295d);

    /* renamed from: d  reason: collision with root package name */
    private static final a f35315d = b.a(f.f35302d);

    /* renamed from: e  reason: collision with root package name */
    private static final a f35316e = b.a(g.f35307d);

    /* JADX INFO: Access modifiers changed from: private */
    public static final KType a(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return is.d.b(m(it), CollectionsKt.l(), false, CollectionsKt.l());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ConcurrentHashMap b(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ConcurrentHashMap();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KType c(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return is.d.b(m(it), CollectionsKt.l(), true, CollectionsKt.l());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 d(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new w0(it);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final u1 e(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new u1(it);
    }

    public static final KType k(Class jClass, List arguments, boolean z10) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        if (arguments.isEmpty()) {
            if (z10) {
                return (KType) f35315d.a(jClass);
            }
            return (KType) f35314c.a(jClass);
        }
        return l(jClass, arguments, z10);
    }

    private static final KType l(Class cls, List list, boolean z10) {
        ConcurrentHashMap concurrentHashMap = (ConcurrentHashMap) f35316e.a(cls);
        Pair a10 = qr.v.a(list, Boolean.valueOf(z10));
        Object obj = concurrentHashMap.get(a10);
        if (obj == null) {
            KType b10 = is.d.b(m(cls), list, z10, CollectionsKt.l());
            Object putIfAbsent = concurrentHashMap.putIfAbsent(a10, b10);
            if (putIfAbsent == null) {
                obj = b10;
            } else {
                obj = putIfAbsent;
            }
        }
        Intrinsics.checkNotNullExpressionValue(obj, "getOrPut(...)");
        return (KType) obj;
    }

    public static final w0 m(Class jClass) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        Object a10 = f35312a.a(jClass);
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type kotlin.reflect.jvm.internal.KClassImpl<T of kotlin.reflect.jvm.internal.CachesKt.getOrCreateKotlinClass>");
        return (w0) a10;
    }

    public static final KDeclarationContainer n(Class jClass) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        return (KDeclarationContainer) f35313b.a(jClass);
    }
}
