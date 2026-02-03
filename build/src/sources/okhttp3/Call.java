package okhttp3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Call extends Cloneable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface Factory {
        Call a(Request request);
    }

    void cancel();

    Response execute();

    Request h();

    void t0(ut.b bVar);

    boolean x();
}
