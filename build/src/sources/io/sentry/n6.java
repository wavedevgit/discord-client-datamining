package io.sentry;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n6 {

    /* renamed from: a  reason: collision with root package name */
    private final o7 f30235a;

    public n6(o7 o7Var) {
        this.f30235a = (o7) io.sentry.util.y.c(o7Var, "The SentryStackTraceFactory is required.");
    }

    private io.sentry.protocol.s c(Throwable th2, io.sentry.protocol.l lVar, Long l10, List list, boolean z10) {
        String str;
        Package r02 = th2.getClass().getPackage();
        String name = th2.getClass().getName();
        io.sentry.protocol.s sVar = new io.sentry.protocol.s();
        String message = th2.getMessage();
        if (r02 != null) {
            name = name.replace(r02.getName() + ".", "");
        }
        if (r02 != null) {
            str = r02.getName();
        } else {
            str = null;
        }
        if (list != null && !list.isEmpty()) {
            io.sentry.protocol.b0 b0Var = new io.sentry.protocol.b0(list);
            if (z10) {
                b0Var.f(Boolean.TRUE);
            }
            sVar.o(b0Var);
        }
        sVar.p(l10);
        sVar.q(name);
        sVar.m(lVar);
        sVar.n(str);
        sVar.s(message);
        return sVar;
    }

    private List e(Deque deque) {
        return new ArrayList(deque);
    }

    Deque a(Throwable th2) {
        return b(th2, new AtomicInteger(-1), new HashSet(), new ArrayDeque(), null);
    }

    Deque b(Throwable th2, AtomicInteger atomicInteger, HashSet hashSet, Deque deque, String str) {
        io.sentry.protocol.l lVar;
        Thread currentThread;
        Throwable th3;
        boolean z10;
        Deque deque2 = deque;
        String str2 = str;
        int i10 = atomicInteger.get();
        Throwable th4 = th2;
        while (th4 != null) {
            HashSet hashSet2 = hashSet;
            if (!hashSet2.add(th4)) {
                break;
            }
            if (str2 == null) {
                str2 = "chained";
            }
            int i11 = 0;
            if (th4 instanceof io.sentry.exception.a) {
                io.sentry.exception.a aVar = (io.sentry.exception.a) th4;
                lVar = aVar.a();
                Throwable c10 = aVar.c();
                currentThread = aVar.b();
                z10 = aVar.d();
                th3 = c10;
            } else {
                lVar = new io.sentry.protocol.l();
                currentThread = Thread.currentThread();
                th3 = th4;
                z10 = false;
            }
            io.sentry.protocol.l lVar2 = lVar;
            deque2.addFirst(c(th3, lVar2, Long.valueOf(currentThread.getId()), this.f30235a.a(th3.getStackTrace(), Boolean.FALSE.equals(lVar2.l())), z10));
            if (lVar2.k() == null) {
                lVar2.p(str2);
            }
            if (atomicInteger.get() >= 0) {
                lVar2.o(Integer.valueOf(i10));
            }
            int incrementAndGet = atomicInteger.incrementAndGet();
            lVar2.m(Integer.valueOf(incrementAndGet));
            Throwable[] suppressed = th3.getSuppressed();
            if (suppressed != null && suppressed.length > 0) {
                int length = suppressed.length;
                while (i11 < length) {
                    b(suppressed[i11], atomicInteger, hashSet2, deque2, "suppressed");
                    i11++;
                    hashSet2 = hashSet;
                    deque2 = deque;
                }
            }
            th4 = th3.getCause();
            str2 = null;
            deque2 = deque;
            i10 = incrementAndGet;
        }
        return deque;
    }

    public List d(Throwable th2) {
        return e(a(th2));
    }

    public List f(io.sentry.protocol.c0 c0Var, io.sentry.protocol.l lVar, Throwable th2) {
        io.sentry.protocol.b0 n10 = c0Var.n();
        if (n10 == null) {
            return new ArrayList(0);
        }
        ArrayList arrayList = new ArrayList(1);
        arrayList.add(c(th2, lVar, c0Var.l(), n10.d(), true));
        return arrayList;
    }
}
