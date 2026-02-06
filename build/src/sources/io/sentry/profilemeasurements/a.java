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
    private Map f28397d;

    /* renamed from: e  reason: collision with root package name */
    private String f28398e;

    /* renamed from: i  reason: collision with root package name */
    private Collection f28399i;

    /* renamed from: io.sentry.profilemeasurements.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0401a implements m1 {
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
                        String q12 = e3Var.q1();
                        if (q12 != null) {
                            aVar.f28398e = q12;
                        }
                    }
                } else {
                    List g22 = e3Var.g2(iLogger, new b.a());
                    if (g22 != null) {
                        aVar.f28399i = g22;
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
        this.f28397d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (y.a(this.f28397d, aVar.f28397d) && this.f28398e.equals(aVar.f28398e) && new ArrayList(this.f28399i).equals(new ArrayList(aVar.f28399i))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f28397d, this.f28398e, this.f28399i);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("unit").j(iLogger, this.f28398e);
        f3Var.e("values").j(iLogger, this.f28399i);
        Map map = this.f28397d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28397d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public a(String str, Collection collection) {
        this.f28398e = str;
        this.f28399i = collection;
    }
}
