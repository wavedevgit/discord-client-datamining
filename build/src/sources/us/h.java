package us;

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
    private static final a f51044a = b.a(c.f51003d);

    /* renamed from: b  reason: collision with root package name */
    private static final a f51045b = b.a(d.f51019d);

    /* renamed from: c  reason: collision with root package name */
    private static final a f51046c = b.a(e.f51027d);

    /* renamed from: d  reason: collision with root package name */
    private static final a f51047d = b.a(f.f51034d);

    /* renamed from: e  reason: collision with root package name */
    private static final a f51048e = b.a(g.f51039d);

    /* JADX INFO: Access modifiers changed from: private */
    public static final KType a(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return ss.d.b(m(it), CollectionsKt.l(), false, CollectionsKt.l());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ConcurrentHashMap b(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new ConcurrentHashMap();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KType c(Class it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return ss.d.b(m(it), CollectionsKt.l(), true, CollectionsKt.l());
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
                return (KType) f51047d.a(jClass);
            }
            return (KType) f51046c.a(jClass);
        }
        return l(jClass, arguments, z10);
    }

    private static final KType l(Class cls, List list, boolean z10) {
        ConcurrentHashMap concurrentHashMap = (ConcurrentHashMap) f51048e.a(cls);
        Pair a10 = as.v.a(list, Boolean.valueOf(z10));
        Object obj = concurrentHashMap.get(a10);
        if (obj == null) {
            KType b10 = ss.d.b(m(cls), list, z10, CollectionsKt.l());
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
        Object a10 = f51044a.a(jClass);
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type kotlin.reflect.jvm.internal.KClassImpl<T of kotlin.reflect.jvm.internal.CachesKt.getOrCreateKotlinClass>");
        return (w0) a10;
    }

    public static final KDeclarationContainer n(Class jClass) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        return (KDeclarationContainer) f51045b.a(jClass);
    }
}
