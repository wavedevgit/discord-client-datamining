package kotlin.reflect.jvm.internal.impl.utils;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FunctionsKt {

    /* renamed from: a  reason: collision with root package name */
    private static final Function1 f36111a = kotlin.reflect.jvm.internal.impl.utils.a.f36131d;

    /* renamed from: b  reason: collision with root package name */
    private static final Function1 f36112b = b.f36133d;

    /* renamed from: c  reason: collision with root package name */
    private static final Function1 f36113c = a.f36117d;

    /* renamed from: d  reason: collision with root package name */
    private static final Function1 f36114d = c.f36134d;

    /* renamed from: e  reason: collision with root package name */
    private static final Function2 f36115e = d.f36135d;

    /* renamed from: f  reason: collision with root package name */
    private static final Function3 f36116f = e.f36136d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f36117d = new a();

        a() {
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Void invoke(Object obj) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean a(Object obj) {
        return true;
    }

    @NotNull
    public static final <T> Function1<T, Boolean> alwaysTrue() {
        return f36112b;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(Object obj) {
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(Object obj, Object obj2) {
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(Object obj, Object obj2, Object obj3) {
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object e(Object obj) {
        return obj;
    }

    @NotNull
    public static final Function3 getDO_NOTHING_3() {
        return f36116f;
    }
}
