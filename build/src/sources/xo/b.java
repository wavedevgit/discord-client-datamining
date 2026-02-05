package xo;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import xg.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final /* synthetic */ class b implements g {

    /* renamed from: a  reason: collision with root package name */
    private final /* synthetic */ Function1 f54048a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Function1 function) {
        Intrinsics.checkNotNullParameter(function, "function");
        this.f54048a = function;
    }

    @Override // xg.g
    public final /* synthetic */ void onSuccess(Object obj) {
        this.f54048a.invoke(obj);
    }
}
