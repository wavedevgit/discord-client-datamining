package io.sentry.protocol.profiling;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.protocol.SentryStackFrame;
import io.sentry.protocol.profiling.b;
import io.sentry.protocol.profiling.c;
import io.sentry.w1;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private List f29437d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private List f29438e = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private List f29439i = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private Map f29440o = new HashMap();

    /* renamed from: p  reason: collision with root package name */
    private Map f29441p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public a a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            a aVar = new a();
            ConcurrentHashMap concurrentHashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case -1266514778:
                        if (m02.equals("frames")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -892498197:
                        if (m02.equals("stacks")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1864843273:
                        if (m02.equals("samples")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 2061486532:
                        if (m02.equals("thread_metadata")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        List g22 = e3Var.g2(iLogger, new SentryStackFrame.a());
                        if (g22 == null) {
                            break;
                        } else {
                            aVar.f29439i = g22;
                            break;
                        }
                    case 1:
                        List list = (List) e3Var.G0(iLogger, new c());
                        if (list == null) {
                            break;
                        } else {
                            aVar.f29438e = list;
                            break;
                        }
                    case 2:
                        List g23 = e3Var.g2(iLogger, new b.a());
                        if (g23 == null) {
                            break;
                        } else {
                            aVar.f29437d = g23;
                            break;
                        }
                    case 3:
                        Map u12 = e3Var.u1(iLogger, new c.a());
                        if (u12 == null) {
                            break;
                        } else {
                            aVar.f29440o = u12;
                            break;
                        }
                    default:
                        if (concurrentHashMap == null) {
                            concurrentHashMap = new ConcurrentHashMap();
                        }
                        e3Var.v1(iLogger, concurrentHashMap, m02);
                        break;
                }
            }
            aVar.e(concurrentHashMap);
            e3Var.z();
            return aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements m1 {
        private c() {
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public List a(e3 e3Var, ILogger iLogger) {
            ArrayList arrayList = new ArrayList();
            e3Var.v();
            while (e3Var.hasNext()) {
                ArrayList arrayList2 = new ArrayList();
                e3Var.v();
                while (e3Var.hasNext()) {
                    arrayList2.add(Integer.valueOf(e3Var.nextInt()));
                }
                e3Var.t();
                arrayList.add(arrayList2);
            }
            e3Var.t();
            return arrayList;
        }
    }

    public void e(Map map) {
        this.f29441p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        f3Var.e("samples").j(iLogger, this.f29437d);
        f3Var.e("stacks").j(iLogger, this.f29438e);
        f3Var.e("frames").j(iLogger, this.f29439i);
        f3Var.e("thread_metadata").j(iLogger, this.f29440o);
        Map map = this.f29441p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29441p.get(str));
            }
        }
        f3Var.z();
    }
}
