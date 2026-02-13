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
    private String f30345d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30346e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f30347i;

    /* renamed from: o  reason: collision with root package name */
    private Integer f30348o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30349p;

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
                        qVar.f30345d = e3Var.r1();
                        break;
                    case 1:
                        qVar.f30348o = e3Var.l1();
                        break;
                    case 2:
                        qVar.f30346e = e3Var.l1();
                        break;
                    case 3:
                        qVar.f30347i = e3Var.l1();
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
        this.f30349p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f30345d != null) {
            f3Var.e("sdk_name").f(this.f30345d);
        }
        if (this.f30346e != null) {
            f3Var.e("version_major").i(this.f30346e);
        }
        if (this.f30347i != null) {
            f3Var.e("version_minor").i(this.f30347i);
        }
        if (this.f30348o != null) {
            f3Var.e("version_patchlevel").i(this.f30348o);
        }
        Map map = this.f30349p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30349p.get(str));
            }
        }
        f3Var.D();
    }
}
