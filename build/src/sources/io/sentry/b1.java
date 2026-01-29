package io.sentry;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b1 {
    void a(Object obj, Writer writer);

    void b(l5 l5Var, OutputStream outputStream);

    Object c(Reader reader, Class cls);

    l5 d(InputStream inputStream);

    Object e(Reader reader, Class cls, m1 m1Var);

    String f(Map map);
}
