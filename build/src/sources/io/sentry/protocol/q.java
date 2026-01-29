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
    private String f30448d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f30449e;

    /* renamed from: i  reason: collision with root package name */
    private Integer f30450i;

    /* renamed from: o  reason: collision with root package name */
    private Integer f30451o;

    /* renamed from: p  reason: collision with root package name */
    private Map f30452p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public q a(e3 e3Var, ILogger iLogger) {
            q qVar = new q();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case 270207856:
                        if (l02.equals("sdk_name")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 696101379:
                        if (l02.equals("version_patchlevel")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 1111241618:
                        if (l02.equals("version_major")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 1111483790:
                        if (l02.equals("version_minor")) {
                            c10 = 3;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        qVar.f30448d = e3Var.r1();
                        break;
                    case 1:
                        qVar.f30451o = e3Var.j1();
                        break;
                    case 2:
                        qVar.f30449e = e3Var.j1();
                        break;
                    case 3:
                        qVar.f30450i = e3Var.j1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                        break;
                }
            }
            e3Var.y();
            qVar.e(hashMap);
            return qVar;
        }
    }

    public void e(Map map) {
        this.f30452p = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30448d != null) {
            f3Var.e("sdk_name").f(this.f30448d);
        }
        if (this.f30449e != null) {
            f3Var.e("version_major").i(this.f30449e);
        }
        if (this.f30450i != null) {
            f3Var.e("version_minor").i(this.f30450i);
        }
        if (this.f30451o != null) {
            f3Var.e("version_patchlevel").i(this.f30451o);
        }
        Map map = this.f30452p;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30452p.get(str));
            }
        }
        f3Var.y();
    }
}
