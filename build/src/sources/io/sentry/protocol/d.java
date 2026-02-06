package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.k7;
import io.sentry.m1;
import io.sentry.protocol.DebugImage;
import io.sentry.protocol.q;
import io.sentry.w1;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private q f28466d;

    /* renamed from: e  reason: collision with root package name */
    private List f28467e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28468i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public d a(e3 e3Var, ILogger iLogger) {
            d dVar = new d();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (o02.equals("images")) {
                    dVar.f28467e = e3Var.g2(iLogger, new DebugImage.a());
                } else if (o02.equals("sdk_info")) {
                    dVar.f28466d = (q) e3Var.G0(iLogger, new q.a());
                } else {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.u1(iLogger, hashMap, o02);
                }
            }
            e3Var.D();
            dVar.f(hashMap);
            return dVar;
        }
    }

    public static d c(d dVar, k7 k7Var) {
        ArrayList arrayList = new ArrayList();
        if (k7Var.getProguardUuid() != null) {
            DebugImage debugImage = new DebugImage();
            debugImage.setType(DebugImage.PROGUARD);
            debugImage.setUuid(k7Var.getProguardUuid());
            arrayList.add(debugImage);
        }
        for (String str : k7Var.getBundleIds()) {
            DebugImage debugImage2 = new DebugImage();
            debugImage2.setType(DebugImage.JVM);
            debugImage2.setDebugId(str);
            arrayList.add(debugImage2);
        }
        if (!arrayList.isEmpty()) {
            if (dVar == null) {
                dVar = new d();
            }
            if (dVar.d() == null) {
                dVar.e(arrayList);
                return dVar;
            }
            dVar.d().addAll(arrayList);
            return dVar;
        }
        return null;
    }

    public List d() {
        return this.f28467e;
    }

    public void e(List list) {
        ArrayList arrayList;
        if (list != null) {
            arrayList = new ArrayList(list);
        } else {
            arrayList = null;
        }
        this.f28467e = arrayList;
    }

    public void f(Map map) {
        this.f28468i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28466d != null) {
            f3Var.e("sdk_info").j(iLogger, this.f28466d);
        }
        if (this.f28467e != null) {
            f3Var.e("images").j(iLogger, this.f28467e);
        }
        Map map = this.f28468i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28468i.get(str));
            }
        }
        f3Var.D();
    }
}
