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
    private q f30321d;

    /* renamed from: e  reason: collision with root package name */
    private List f30322e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30323i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public d a(e3 e3Var, ILogger iLogger) {
            d dVar = new d();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (l02.equals("images")) {
                    dVar.f30322e = e3Var.g2(iLogger, new DebugImage.a());
                } else if (l02.equals("sdk_info")) {
                    dVar.f30321d = (q) e3Var.G0(iLogger, new q.a());
                } else {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.v1(iLogger, hashMap, l02);
                }
            }
            e3Var.y();
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
        return this.f30322e;
    }

    public void e(List list) {
        ArrayList arrayList;
        if (list != null) {
            arrayList = new ArrayList(list);
        } else {
            arrayList = null;
        }
        this.f30322e = arrayList;
    }

    public void f(Map map) {
        this.f30323i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30321d != null) {
            f3Var.e("sdk_info").j(iLogger, this.f30321d);
        }
        if (this.f30322e != null) {
            f3Var.e("images").j(iLogger, this.f30322e);
        }
        Map map = this.f30323i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30323i.get(str));
            }
        }
        f3Var.y();
    }
}
