package okhttp3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Call extends Cloneable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface Factory {
        Call a(Request request);
    }

    boolean C();

    void J0(bu.b bVar);

    void cancel();

    Response execute();

    Request g();
}
