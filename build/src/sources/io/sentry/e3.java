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

    void A(boolean z10);

    void D();

    Object I0(ILogger iLogger, m1 m1Var);

    Float R1();

    void T();

    Object Z1();

    TimeZone b0(ILogger iLogger);

    String g1();

    boolean hasNext();

    List k2(ILogger iLogger, m1 m1Var);

    Integer l1();

    Double n0();

    Long n1();

    double nextDouble();

    float nextFloat();

    int nextInt();

    long nextLong();

    String o0();

    io.sentry.vendor.gson.stream.b peek();

    String r1();

    Date s0(ILogger iLogger);

    Map t1(ILogger iLogger, m1 m1Var);

    void u();

    void u1(ILogger iLogger, Map map, String str);

    void v();

    Boolean w0();

    void x();
}
