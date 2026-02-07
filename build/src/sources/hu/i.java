package hu;

import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.HttpUrl;
import okhttp3.Request;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public static final i f26561a = new i();

    private i() {
    }

    private final boolean b(Request request, Proxy.Type type) {
        if (!request.i() && type == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final String a(Request request, Proxy.Type proxyType) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(proxyType, "proxyType");
        StringBuilder sb2 = new StringBuilder();
        sb2.append(request.j());
        sb2.append(' ');
        i iVar = f26561a;
        if (iVar.b(request, proxyType)) {
            sb2.append(request.n());
        } else {
            sb2.append(iVar.c(request.n()));
        }
        sb2.append(" HTTP/1.1");
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        return sb3;
    }

    public final String c(HttpUrl url) {
        Intrinsics.checkNotNullParameter(url, "url");
        String d10 = url.d();
        String f10 = url.f();
        if (f10 != null) {
            return d10 + '?' + f10;
        }
        return d10;
    }
}
