package io.sentry;

import java.io.Closeable;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface e3 extends Closeable {
    static Date M0(String str, ILogger iLogger) {
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

    Object E0(ILogger iLogger, m1 m1Var);

    Float M1();

    void T();

    Object T1();

    TimeZone b0(ILogger iLogger);

    String b1();

    List f2(ILogger iLogger, m1 m1Var);

    Integer g1();

    boolean hasNext();

    Long i1();

    String m1();

    Double n0();

    double nextDouble();

    float nextFloat();

    int nextInt();

    long nextLong();

    String o0();

    Map o1(ILogger iLogger, m1 m1Var);

    void p1(ILogger iLogger, Map map, String str);

    io.sentry.vendor.gson.stream.b peek();

    Date s0(ILogger iLogger);

    void u();

    void v();

    Boolean w0();

    void x();
}
