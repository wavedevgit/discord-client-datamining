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
    private Map f30268d;

    /* renamed from: e  reason: collision with root package name */
    private String f30269e;

    /* renamed from: i  reason: collision with root package name */
    private Collection f30270i;

    /* renamed from: io.sentry.profilemeasurements.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0398a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            a aVar = new a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("values")) {
                    if (!l02.equals("unit")) {
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, l02);
                    } else {
                        String r12 = e3Var.r1();
                        if (r12 != null) {
                            aVar.f30269e = r12;
                        }
                    }
                } else {
                    List g22 = e3Var.g2(iLogger, new b.a());
                    if (g22 != null) {
                        aVar.f30270i = g22;
                    }
                }
            }
            aVar.c(concurrentHashMap);
            e3Var.y();
            return aVar;
        }
    }

    public a() {
        this("unknown", new ArrayList());
    }

    public void c(Map map) {
        this.f30268d = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && a.class == obj.getClass()) {
            a aVar = (a) obj;
            if (y.a(this.f30268d, aVar.f30268d) && this.f30269e.equals(aVar.f30269e) && new ArrayList(this.f30270i).equals(new ArrayList(aVar.f30270i))) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return y.b(this.f30268d, this.f30269e, this.f30270i);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("unit").j(iLogger, this.f30269e);
        f3Var.e("values").j(iLogger, this.f30270i);
        Map map = this.f30268d;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30268d.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public a(String str, Collection collection) {
        this.f30269e = str;
        this.f30270i = collection;
    }
}
