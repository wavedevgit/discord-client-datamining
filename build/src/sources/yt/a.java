package yt;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.Interceptor;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Interceptor {

    /* renamed from: a  reason: collision with root package name */
    public static final a f54976a = new a();

    private a() {
    }

    @Override // okhttp3.Interceptor
    public Response intercept(Interceptor.Chain chain) {
        Intrinsics.checkNotNullParameter(chain, "chain");
        zt.g gVar = (zt.g) chain;
        return zt.g.c(gVar, 0, gVar.d().s(gVar), null, 0, 0, 0, 61, null).a(gVar.i());
    }
}
