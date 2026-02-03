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
    private String f30030d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30031e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f30032i;

    /* renamed from: o  reason: collision with root package name */
    private Integer f30033o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30034p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public q a(e3 e3Var, ILogger iLogger) {
            q qVar = new q();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case 270207856:
                        if (m02.equals("sdk_name")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 696101379:
                        if (m02.equals("version_patchlevel")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1111241618:
                        if (m02.equals("version_major")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 1111483790:
                        if (m02.equals("version_minor")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        qVar.f30030d = e3Var.r1();
                        break;
                    case 1:
                        qVar.f30033o = e3Var.k1();
                        break;
                    case 2:
                        qVar.f30031e = e3Var.k1();
                        break;
                    case 3:
                        qVar.f30032i = e3Var.k1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.y();
            qVar.e(hashMap);
            return qVar;
        }
    }

    public void e(Map map) {
        this.f30034p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30030d != null) {
            f3Var.e("sdk_name").f(this.f30030d);
        }
        if (this.f30031e != null) {
            f3Var.e("version_major").i(this.f30031e);
        }
        if (this.f30032i != null) {
            f3Var.e("version_minor").i(this.f30032i);
        }
        if (this.f30033o != null) {
            f3Var.e("version_patchlevel").i(this.f30033o);
        }
        Map map = this.f30034p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30034p.get(str));
            }
        }
        f3Var.y();
    }
}
