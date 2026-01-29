package com.facebook.datasource;

import java.util.Map;
import java.util.concurrent.Executor;
import y8.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface DataSource {
    boolean a();

    Throwable b();

    void c(e eVar, Executor executor);

    boolean close();

    float d();

    boolean e();

    Map getExtras();

    Object getResult();

    boolean isFinished();
}
