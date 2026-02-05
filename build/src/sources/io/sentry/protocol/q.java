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
    private String f29449d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f29450e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f29451i;

    /* renamed from: o  reason: collision with root package name */
    private Integer f29452o;

    /* renamed from: p  reason: collision with root package name */
    private Map f29453p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public q a(e3 e3Var, ILogger iLogger) {
            q qVar = new q();
            e3Var.s();
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
                        qVar.f29449d = e3Var.r1();
                        break;
                    case 1:
                        qVar.f29452o = e3Var.k1();
                        break;
                    case 2:
                        qVar.f29450e = e3Var.k1();
                        break;
                    case 3:
                        qVar.f29451i = e3Var.k1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                        break;
                }
            }
            e3Var.z();
            qVar.e(hashMap);
            return qVar;
        }
    }

    public void e(Map map) {
        this.f29453p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        if (this.f29449d != null) {
            f3Var.e("sdk_name").f(this.f29449d);
        }
        if (this.f29450e != null) {
            f3Var.e("version_major").i(this.f29450e);
        }
        if (this.f29451i != null) {
            f3Var.e("version_minor").i(this.f29451i);
        }
        if (this.f29452o != null) {
            f3Var.e("version_patchlevel").i(this.f29452o);
        }
        Map map = this.f29453p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29453p.get(str));
            }
        }
        f3Var.z();
    }
}
