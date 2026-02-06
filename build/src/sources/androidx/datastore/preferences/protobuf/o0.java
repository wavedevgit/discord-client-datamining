package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface o0 extends p0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a extends p0, Cloneable {
        a P(o0 o0Var);

        o0 s();
    }

    void a(j jVar);

    int getSerializedSize();

    a newBuilderForType();

    a toBuilder();
}
