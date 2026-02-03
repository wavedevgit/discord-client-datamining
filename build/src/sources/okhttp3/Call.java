package okhttp3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Call extends Cloneable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface Factory {
        Call a(Request request);
    }

    void M0(wt.b bVar);

    void cancel();

    Response execute();

    Request h();

    boolean x();
}
