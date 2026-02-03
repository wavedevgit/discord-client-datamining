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
    final Map f30410a;

    /* renamed from: b  reason: collision with root package name */
    final ArrayDeque f30411b;

    public x(Map map) {
        this.f30410a = map;
        ArrayDeque arrayDeque = new ArrayDeque();
        this.f30411b = arrayDeque;
        arrayDeque.addLast(map);
    }

    private void A(ILogger iLogger, Date date) {
        try {
            f(io.sentry.k.h(date));
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when serializing Date", e10);
            l();
        }
    }

    private void B(ILogger iLogger, Map map) {
        r();
        for (Object obj : map.keySet()) {
            if (obj instanceof String) {
                e((String) obj);
                j(iLogger, map.get(obj));
            }
        }
        y();
    }

    private void C(ILogger iLogger, TimeZone timeZone) {
        try {
            f(timeZone.getID());
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when serializing TimeZone", e10);
            l();
        }
    }

    private Map w() {
        Object peekLast = this.f30411b.peekLast();
        if (peekLast != null) {
            if (peekLast instanceof Map) {
                return (Map) peekLast;
            }
            throw new IllegalStateException("Stack element is not a Map.");
        }
        throw new IllegalStateException("Stack is empty.");
    }

    private void x(Object obj) {
        Object peekLast = this.f30411b.peekLast();
        if (peekLast instanceof List) {
            ((List) peekLast).add(obj);
        } else if (peekLast instanceof String) {
            w().put((String) this.f30411b.removeLast(), obj);
        } else {
            throw new IllegalStateException("Invalid stack state, expected array or string on top");
        }
    }

    private void z(ILogger iLogger, Collection collection) {
        u();
        for (Object obj : collection) {
            j(iLogger, obj);
        }
        s();
    }

    @Override // io.sentry.f3
    /* renamed from: D */
    public x c(double d10) {
        x(Double.valueOf(d10));
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: E */
    public x b(long j10) {
        x(Long.valueOf(j10));
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
            A(iLogger, (Date) obj);
            return this;
        } else if (obj instanceof TimeZone) {
            C(iLogger, (TimeZone) obj);
            return this;
        } else if (obj instanceof w1) {
            ((w1) obj).serialize(this, iLogger);
            return this;
        } else if (obj instanceof Collection) {
            z(iLogger, (Collection) obj);
            return this;
        } else if (obj.getClass().isArray()) {
            z(iLogger, Arrays.asList((Object[]) obj));
            return this;
        } else if (obj instanceof Map) {
            B(iLogger, (Map) obj);
            return this;
        } else if (obj instanceof Locale) {
            f(obj.toString());
            return this;
        } else if (obj instanceof AtomicIntegerArray) {
            z(iLogger, q.a((AtomicIntegerArray) obj));
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
            B(iLogger, q.d((Calendar) obj));
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
        x(bool);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: H */
    public x i(Number number) {
        x(number);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: I */
    public x f(String str) {
        x(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: J */
    public x d(boolean z10) {
        x(Boolean.valueOf(z10));
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
    public x u() {
        this.f30411b.add(new ArrayList());
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: n */
    public x r() {
        this.f30411b.addLast(new HashMap());
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: o */
    public x s() {
        y();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: p */
    public x y() {
        x(this.f30411b.removeLast());
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: q */
    public x e(String str) {
        this.f30411b.add(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: t */
    public x l() {
        x(null);
        return this;
    }

    @Override // io.sentry.f3
    public void v(boolean z10) {
    }
}
