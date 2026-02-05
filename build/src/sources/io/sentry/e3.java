package io.sentry;

import java.io.Closeable;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface e3 extends Closeable {
    static Date Q0(String str, ILogger iLogger) {
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

    TimeZone X(ILogger iLogger);

    String f1();

    List g2(ILogger iLogger, m1 m1Var);

    boolean hasNext();

    Integer k1();

    Double l0();

    String m0();

    Long m1();

    double nextDouble();

    float nextFloat();

    int nextInt();

    long nextLong();

    io.sentry.vendor.gson.stream.b peek();

    String r1();

    void s();

    Date s0(ILogger iLogger);

    void t();

    Map u1(ILogger iLogger, m1 m1Var);

    void v();

    void v1(ILogger iLogger, Map map, String str);

    void w(boolean z10);

    Boolean w0();

    void z();
}
