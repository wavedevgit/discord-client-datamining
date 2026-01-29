package okhttp3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Interceptor {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface Chain {
        Response a(Request request);

        Call call();

        Request h();
    }

    Response intercept(Chain chain);
}
