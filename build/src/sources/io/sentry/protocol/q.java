package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29777d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29778e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f29779i;

    /* renamed from: o  reason: collision with root package name */
    private Integer f29780o;

    /* renamed from: p  reason: collision with root package name */
    private Map f29781p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public q a(e3 e3Var, ILogger iLogger) {
            q qVar = new q();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case 270207856:
                        if (o02.equals("sdk_name")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 696101379:
                        if (o02.equals("version_patchlevel")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1111241618:
                        if (o02.equals("version_major")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 1111483790:
                        if (o02.equals("version_minor")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        qVar.f29777d = e3Var.r1();
                        break;
                    case 1:
                        qVar.f29780o = e3Var.l1();
                        break;
                    case 2:
                        qVar.f29778e = e3Var.l1();
                        break;
                    case 3:
                        qVar.f29779i = e3Var.l1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            qVar.e(hashMap);
            return qVar;
        }
    }

    public void e(Map map) {
        this.f29781p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f29777d != null) {
            f3Var.e("sdk_name").f(this.f29777d);
        }
        if (this.f29778e != null) {
            f3Var.e("version_major").i(this.f29778e);
        }
        if (this.f29779i != null) {
            f3Var.e("version_minor").i(this.f29779i);
        }
        if (this.f29780o != null) {
            f3Var.e("version_patchlevel").i(this.f29780o);
        }
        Map map = this.f29781p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29781p.get(str));
            }
        }
        f3Var.D();
    }
}
