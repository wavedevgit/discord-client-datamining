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
    private Map f28645d;

    /* renamed from: e  reason: collision with root package name */
    private String f28646e;

    /* renamed from: i  reason: collision with root package name */
    private Collection f28647i;

    /* renamed from: io.sentry.profilemeasurements.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0427a implements m1 {
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
                        e3Var.p1(iLogger, concurrentHashMap, o02);
                    } else {
                        String m12 = e3Var.m1();
                        if (m12 != null) {
                            aVar.f28646e = m12;
                        }
                    }
                } else {
                    List f22 = e3Var.f2(iLogger, new b.a());
                    if (f22 != null) {
                        aVar.f28647i = f22;
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
        this.f28645d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (y.a(this.f28645d, aVar.f28645d) && this.f28646e.equals(aVar.f28646e) && new ArrayList(this.f28647i).equals(new ArrayList(aVar.f28647i))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f28645d, this.f28646e, this.f28647i);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("unit").j(iLogger, this.f28646e);
        f3Var.e("values").j(iLogger, this.f28647i);
        Map map = this.f28645d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28645d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public a(String str, Collection collection) {
        this.f28646e = str;
        this.f28647i = collection;
    }
}
