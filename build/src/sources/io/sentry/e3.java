package io.sentry;

import java.io.Closeable;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface e3 extends Closeable {
    static Date P0(String str, ILogger iLogger) {
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

    Object G0(ILogger iLogger, m1 m1Var);

    Float O1();

    void P();

    Object V1();

    TimeZone W(ILogger iLogger);

    String e1();

    List g2(ILogger iLogger, m1 m1Var);

    boolean hasNext();

    Integer j1();

    Double k0();

    String l0();

    Long m1();

    double nextDouble();

    float nextFloat();

    int nextInt();

    long nextLong();

    io.sentry.vendor.gson.stream.b peek();

    void r();

    Date r0(ILogger iLogger);

    String r1();

    void s();

    void u();

    Map u1(ILogger iLogger, m1 m1Var);

    void v(boolean z10);

    Boolean v0();

    void v1(ILogger iLogger, Map map, String str);

    void y();
}
