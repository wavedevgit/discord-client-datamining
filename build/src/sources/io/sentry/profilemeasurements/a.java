package io.sentry.profilemeasurements;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.profilemeasurements.b;
import io.sentry.util.y;
import io.sentry.w1;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private Map f29581d;

    /* renamed from: e  reason: collision with root package name */
    private String f29582e;

    /* renamed from: i  reason: collision with root package name */
    private Collection f29583i;

    /* renamed from: io.sentry.profilemeasurements.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0402a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            a aVar = new a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("values")) {
                    if (!o02.equals("unit")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.u1(iLogger, concurrentHashMap, o02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 != null) {
                            aVar.f29582e = r12;
                        }
                    }
                } else {
                    List k22 = e3Var.k2(iLogger, new b.a());
                    if (k22 != null) {
                        aVar.f29583i = k22;
                    }
                }
            }
            aVar.c(concurrentHashMap);
            e3Var.D();
            return aVar;
        }
    }

    public a() {
        this("unknown", new ArrayList());
    }

    public void c(Map map) {
        this.f29581d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (y.a(this.f29581d, aVar.f29581d) && this.f29582e.equals(aVar.f29582e) && new ArrayList(this.f29583i).equals(new ArrayList(aVar.f29583i))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f29581d, this.f29582e, this.f29583i);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("unit").j(iLogger, this.f29582e);
        f3Var.e("values").j(iLogger, this.f29583i);
        Map map = this.f29581d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29581d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public a(String str, Collection collection) {
        this.f29582e = str;
        this.f29583i = collection;
    }
}
