package io.sentry;

import java.net.InetAddress;
import java.net.URI;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Currency;
import java.util.Date;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicIntegerArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t1 {

    /* renamed from: a  reason: collision with root package name */
    public final v1 f30659a;

    public t1(int i10) {
        this.f30659a = new v1(i10);
    }

    private void b(f3 f3Var, ILogger iLogger, Collection collection) {
        f3Var.u();
        for (Object obj : collection) {
            a(f3Var, iLogger, obj);
        }
        f3Var.s();
    }

    private void c(f3 f3Var, ILogger iLogger, Date date) {
        try {
            f3Var.f(k.h(date));
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when serializing Date", e10);
            f3Var.l();
        }
    }

    private void d(f3 f3Var, ILogger iLogger, Map map) {
        f3Var.r();
        for (Object obj : map.keySet()) {
            if (obj instanceof String) {
                f3Var.e((String) obj);
                a(f3Var, iLogger, map.get(obj));
            }
        }
        f3Var.y();
    }

    private void e(f3 f3Var, ILogger iLogger, TimeZone timeZone) {
        try {
            f3Var.f(timeZone.getID());
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when serializing TimeZone", e10);
            f3Var.l();
        }
    }

    public void a(f3 f3Var, ILogger iLogger, Object obj) {
        if (obj == null) {
            f3Var.l();
        } else if (obj instanceof Character) {
            f3Var.f(Character.toString(((Character) obj).charValue()));
        } else if (obj instanceof String) {
            f3Var.f((String) obj);
        } else if (obj instanceof Boolean) {
            f3Var.d(((Boolean) obj).booleanValue());
        } else if (obj instanceof Number) {
            f3Var.i((Number) obj);
        } else if (obj instanceof Date) {
            c(f3Var, iLogger, (Date) obj);
        } else if (obj instanceof TimeZone) {
            e(f3Var, iLogger, (TimeZone) obj);
        } else if (obj instanceof w1) {
            ((w1) obj).serialize(f3Var, iLogger);
        } else if (obj instanceof Collection) {
            b(f3Var, iLogger, (Collection) obj);
        } else if (obj.getClass().isArray()) {
            b(f3Var, iLogger, Arrays.asList((Object[]) obj));
        } else if (obj instanceof Map) {
            d(f3Var, iLogger, (Map) obj);
        } else if (obj instanceof Locale) {
            f3Var.f(obj.toString());
        } else if (obj instanceof AtomicIntegerArray) {
            b(f3Var, iLogger, io.sentry.util.q.a((AtomicIntegerArray) obj));
        } else if (obj instanceof AtomicBoolean) {
            f3Var.d(((AtomicBoolean) obj).get());
        } else if (obj instanceof URI) {
            f3Var.f(obj.toString());
        } else if (obj instanceof InetAddress) {
            f3Var.f(obj.toString());
        } else if (obj instanceof UUID) {
            f3Var.f(obj.toString());
        } else if (obj instanceof Currency) {
            f3Var.f(obj.toString());
        } else if (obj instanceof Calendar) {
            d(f3Var, iLogger, io.sentry.util.q.d((Calendar) obj));
        } else if (obj.getClass().isEnum()) {
            f3Var.f(obj.toString());
        } else {
            try {
                a(f3Var, iLogger, this.f30659a.d(obj, iLogger));
            } catch (Exception e10) {
                iLogger.b(SentryLevel.ERROR, "Failed serializing unknown object.", e10);
                f3Var.f("[OBJECT]");
            }
        }
    }
}
