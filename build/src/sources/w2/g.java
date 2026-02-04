package w2;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public static final g f51859a = new g();

    private g() {
    }

    public final f a(k serializer, x2.b bVar, List migrations, CoroutineScope scope, Function0 produceFile) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        Intrinsics.checkNotNullParameter(migrations, "migrations");
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(produceFile, "produceFile");
        return new m(produceFile, serializer, CollectionsKt.e(e.f51842a.b(migrations)), new x2.a(), scope);
    }
}
