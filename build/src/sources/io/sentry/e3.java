package io.sentry;

import java.io.Closeable;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface e3 extends Closeable {
    static Date R0(String str, ILogger iLogger) {
        if (str == null) {
            return null;
        }
        try {
            try {
                return k.f(str);
            } catch (Exception e10) {
                iLogger.b(SentryLevel.ERROR, "Error when deserializing millis timestamp format.", e10);
                return null;
            }
        } catch (Exception unused) {
            return k.g(str);
        }
    }

    void A(boolean z10);

    void D();

    Object G0(ILogger iLogger, m1 m1Var);

    Float N1();

    void S();

    Object U1();

    TimeZone Z(ILogger iLogger);

    String e1();

    List g2(ILogger iLogger, m1 m1Var);

    boolean hasNext();

    Integer j1();

    Long l1();

    Double n0();

    double nextDouble();

    float nextFloat();

    int nextInt();

    long nextLong();

    String o0();

    io.sentry.vendor.gson.stream.b peek();

    String q1();

    Map t1(ILogger iLogger, m1 m1Var);

    void u();

    Date u0(ILogger iLogger);

    void u1(ILogger iLogger, Map map, String str);

    void v();

    void x();

    Boolean y0();
}
