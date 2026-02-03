package cu;

import okhttp3.Request;
import okhttp3.Response;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d {
    void a();

    Source b(Response response);

    bu.f c();

    void cancel();

    long d(Response response);

    Sink e(Request request, long j10);

    void f(Request request);

    Response.a g(boolean z10);

    void h();
}
