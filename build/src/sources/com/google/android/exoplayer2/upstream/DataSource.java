package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import java.util.Collections;
import java.util.Map;
import le.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface DataSource extends le.j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface Factory {
        DataSource createDataSource();
    }

    long b(a aVar);

    void close();

    default Map d() {
        return Collections.EMPTY_MAP;
    }

    void j(c0 c0Var);

    Uri m();
}
