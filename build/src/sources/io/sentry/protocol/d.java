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
    private q f29903d;

    /* renamed from: e  reason: collision with root package name */
    private List f29904e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29905i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public d a(e3 e3Var, ILogger iLogger) {
            d dVar = new d();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (m02.equals("images")) {
                    dVar.f29904e = e3Var.g2(iLogger, new DebugImage.a());
                } else if (m02.equals("sdk_info")) {
                    dVar.f29903d = (q) e3Var.H0(iLogger, new q.a());
                } else {
                    if (hashMap == null) {
                        hashMap = new HashMap();
                    }
                    e3Var.v1(iLogger, hashMap, m02);
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
        return this.f29904e;
    }

    public void e(List list) {
        ArrayList arrayList;
        if (list != null) {
            arrayList = new ArrayList(list);
        } else {
            arrayList = null;
        }
        this.f29904e = arrayList;
    }

    public void f(Map map) {
        this.f29905i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f29903d != null) {
            f3Var.e("sdk_info").j(iLogger, this.f29903d);
        }
        if (this.f29904e != null) {
            f3Var.e("images").j(iLogger, this.f29904e);
        }
        Map map = this.f29905i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29905i.get(str));
            }
        }
        f3Var.y();
    }
}
