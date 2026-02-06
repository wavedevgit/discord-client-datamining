package io.sentry.util;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.f3;
import io.sentry.w1;
import java.net.InetAddress;
import java.net.URI;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Currency;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicIntegerArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements f3 {

    /* renamed from: a  reason: collision with root package name */
    final Map f28973a;

    /* renamed from: b  reason: collision with root package name */
    final ArrayDeque f28974b;

    public x(Map map) {
        this.f28973a = map;
        ArrayDeque arrayDeque = new ArrayDeque();
        this.f28974b = arrayDeque;
        arrayDeque.addLast(map);
    }

    private void B(ILogger iLogger, TimeZone timeZone) {
        try {
            f(timeZone.getID());
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when serializing TimeZone", e10);
            l();
        }
    }

    private Map s() {
        Object peekLast = this.f28974b.peekLast();
        if (peekLast != null) {
            if (peekLast instanceof Map) {
                return (Map) peekLast;
            }
            throw new IllegalStateException("Stack element is not a Map.");
        }
        throw new IllegalStateException("Stack is empty.");
    }

    private void t(Object obj) {
        Object peekLast = this.f28974b.peekLast();
        if (peekLast instanceof List) {
            ((List) peekLast).add(obj);
        } else if (peekLast instanceof String) {
            s().put((String) this.f28974b.removeLast(), obj);
        } else {
            throw new IllegalStateException("Invalid stack state, expected array or string on top");
        }
    }

    private void w(ILogger iLogger, Collection collection) {
        x();
        for (Object obj : collection) {
            j(iLogger, obj);
        }
        v();
    }

    private void y(ILogger iLogger, Date date) {
        try {
            f(io.sentry.k.h(date));
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when serializing Date", e10);
            l();
        }
    }

    private void z(ILogger iLogger, Map map) {
        u();
        for (Object obj : map.keySet()) {
            if (obj instanceof String) {
                e((String) obj);
                j(iLogger, map.get(obj));
            }
        }
        D();
    }

    @Override // io.sentry.f3
    public void A(boolean z10) {
    }

    @Override // io.sentry.f3
    /* renamed from: C */
    public x c(double d10) {
        t(Double.valueOf(d10));
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: E */
    public x b(long j10) {
        t(Long.valueOf(j10));
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: F */
    public x j(ILogger iLogger, Object obj) {
        if (obj == null) {
            l();
            return this;
        } else if (obj instanceof Character) {
            f(Character.toString(((Character) obj).charValue()));
            return this;
        } else if (obj instanceof String) {
            f((String) obj);
            return this;
        } else if (obj instanceof Boolean) {
            d(((Boolean) obj).booleanValue());
            return this;
        } else if (obj instanceof Number) {
            i((Number) obj);
            return this;
        } else if (obj instanceof Date) {
            y(iLogger, (Date) obj);
            return this;
        } else if (obj instanceof TimeZone) {
            B(iLogger, (TimeZone) obj);
            return this;
        } else if (obj instanceof w1) {
            ((w1) obj).serialize(this, iLogger);
            return this;
        } else if (obj instanceof Collection) {
            w(iLogger, (Collection) obj);
            return this;
        } else if (obj.getClass().isArray()) {
            w(iLogger, Arrays.asList((Object[]) obj));
            return this;
        } else if (obj instanceof Map) {
            z(iLogger, (Map) obj);
            return this;
        } else if (obj instanceof Locale) {
            f(obj.toString());
            return this;
        } else if (obj instanceof AtomicIntegerArray) {
            w(iLogger, q.a((AtomicIntegerArray) obj));
            return this;
        } else if (obj instanceof AtomicBoolean) {
            d(((AtomicBoolean) obj).get());
            return this;
        } else if (obj instanceof URI) {
            f(obj.toString());
            return this;
        } else if (obj instanceof InetAddress) {
            f(obj.toString());
            return this;
        } else if (obj instanceof UUID) {
            f(obj.toString());
            return this;
        } else if (obj instanceof Currency) {
            f(obj.toString());
            return this;
        } else if (obj instanceof Calendar) {
            z(iLogger, q.d((Calendar) obj));
            return this;
        } else if (obj.getClass().isEnum()) {
            f(obj.toString());
            return this;
        } else {
            iLogger.c(SentryLevel.WARNING, "Failed serializing unknown object.", obj);
            return this;
        }
    }

    @Override // io.sentry.f3
    /* renamed from: G */
    public x k(Boolean bool) {
        t(bool);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: H */
    public x i(Number number) {
        t(number);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: I */
    public x f(String str) {
        t(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: J */
    public x d(boolean z10) {
        t(Boolean.valueOf(z10));
        return this;
    }

    @Override // io.sentry.f3
    public String a() {
        return null;
    }

    @Override // io.sentry.f3
    public f3 g(String str) {
        return this;
    }

    @Override // io.sentry.f3
    public void h(String str) {
    }

    @Override // io.sentry.f3
    /* renamed from: m */
    public x x() {
        this.f28974b.add(new ArrayList());
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: n */
    public x u() {
        this.f28974b.addLast(new HashMap());
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: o */
    public x v() {
        D();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: p */
    public x D() {
        t(this.f28974b.removeLast());
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: q */
    public x e(String str) {
        this.f28974b.add(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: r */
    public x l() {
        t(null);
        return this;
    }
}
