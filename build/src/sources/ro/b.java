package ro;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import wg.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final /* synthetic */ class b implements g {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ Function1 f48435a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Function1 function) {
        Intrinsics.checkNotNullParameter(function, "function");
        this.f48435a = function;
    }

    @Override // wg.g
    public final /* synthetic */ void onSuccess(Object obj) {
        this.f48435a.invoke(obj);
    }
}
