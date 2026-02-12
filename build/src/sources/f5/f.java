package f5;

import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final Response f23598d;

    public f(Response response) {
        super("HTTP " + response.z() + ": " + response.E0());
        this.f23598d = response;
    }
}
