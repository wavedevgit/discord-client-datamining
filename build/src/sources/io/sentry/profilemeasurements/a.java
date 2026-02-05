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
    private Map f29253d;

    /* renamed from: e  reason: collision with root package name */
    private String f29254e;

    /* renamed from: i  reason: collision with root package name */
    private Collection f29255i;

    /* renamed from: io.sentry.profilemeasurements.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0407a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            a aVar = new a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("values")) {
                    if (!m02.equals("unit")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 != null) {
                            aVar.f29254e = r12;
                        }
                    }
                } else {
                    List g22 = e3Var.g2(iLogger, new b.a());
                    if (g22 != null) {
                        aVar.f29255i = g22;
                    }
                }
            }
            aVar.c(concurrentHashMap);
            e3Var.z();
            return aVar;
        }
    }

    public a() {
        this("unknown", new ArrayList());
    }

    public void c(Map map) {
        this.f29253d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (y.a(this.f29253d, aVar.f29253d) && this.f29254e.equals(aVar.f29254e) && new ArrayList(this.f29255i).equals(new ArrayList(aVar.f29255i))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f29253d, this.f29254e, this.f29255i);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("unit").j(iLogger, this.f29254e);
        f3Var.e("values").j(iLogger, this.f29255i);
        Map map = this.f29253d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29253d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public a(String str, Collection collection) {
        this.f29254e = str;
        this.f29255i = collection;
    }
}
