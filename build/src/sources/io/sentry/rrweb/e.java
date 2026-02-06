package io.sentry.rrweb;

import com.facebook.react.devsupport.StackTraceHelper;
import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.rrweb.b;
import io.sentry.rrweb.d;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends d implements w1 {

    /* renamed from: o  reason: collision with root package name */
    private b f28785o;

    /* renamed from: p  reason: collision with root package name */
    private int f28786p;

    /* renamed from: q  reason: collision with root package name */
    private float f28787q;

    /* renamed from: r  reason: collision with root package name */
    private float f28788r;

    /* renamed from: s  reason: collision with root package name */
    private int f28789s;

    /* renamed from: t  reason: collision with root package name */
    private int f28790t;

    /* renamed from: u  reason: collision with root package name */
    private Map f28791u;

    /* renamed from: v  reason: collision with root package name */
    private Map f28792v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(e eVar, e3 e3Var, ILogger iLogger) {
            d.a aVar = new d.a();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case 120:
                        if (o02.equals("x")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 121:
                        if (o02.equals("y")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3355:
                        if (o02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 768858903:
                        if (o02.equals("pointerType")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1565043768:
                        if (o02.equals("pointerId")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        eVar.f28787q = e3Var.nextFloat();
                        break;
                    case 1:
                        eVar.f28788r = e3Var.nextFloat();
                        break;
                    case 2:
                        eVar.f28786p = e3Var.nextInt();
                        break;
                    case 3:
                        eVar.f28785o = (b) e3Var.G0(iLogger, new b.a());
                        break;
                    case 4:
                        eVar.f28789s = e3Var.nextInt();
                        break;
                    case 5:
                        eVar.f28790t = e3Var.nextInt();
                        break;
                    default:
                        if (!aVar.a(eVar, o02, e3Var, iLogger)) {
                            if (hashMap == null) {
                                hashMap = new HashMap();
                            }
                            e3Var.u1(iLogger, hashMap, o02);
                            break;
                        } else {
                            break;
                        }
                }
            }
            eVar.p(hashMap);
            e3Var.D();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public e a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            e eVar = new e();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("data")) {
                    if (!aVar.a(eVar, o02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                    }
                } else {
                    c(eVar, e3Var, iLogger);
                }
            }
            eVar.t(hashMap);
            e3Var.D();
            return eVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements w1 {
        MouseUp,
        MouseDown,
        Click,
        ContextMenu,
        DblClick,
        Focus,
        Blur,
        TouchStart,
        TouchMove_Departed,
        TouchEnd,
        TouchCancel;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements m1 {
            @Override // io.sentry.m1
            /* renamed from: b */
            public b a(e3 e3Var, ILogger iLogger) {
                return b.values()[e3Var.nextInt()];
            }
        }

        @Override // io.sentry.w1
        public void serialize(@NotNull f3 f3Var, @NotNull ILogger iLogger) {
            f3Var.b(ordinal());
        }
    }

    public e() {
        super(d.b.MouseInteraction);
        this.f28789s = 2;
    }

    private void o(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new d.c().a(this, f3Var, iLogger);
        f3Var.e("type").j(iLogger, this.f28785o);
        f3Var.e(StackTraceHelper.ID_KEY).b(this.f28786p);
        f3Var.e("x").c(this.f28787q);
        f3Var.e("y").c(this.f28788r);
        f3Var.e("pointerType").b(this.f28789s);
        f3Var.e("pointerId").b(this.f28790t);
        Map map = this.f28792v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28792v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void p(Map map) {
        this.f28792v = map;
    }

    public void q(int i10) {
        this.f28786p = i10;
    }

    public void r(b bVar) {
        this.f28785o = bVar;
    }

    public void s(int i10) {
        this.f28790t = i10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        new b.C0406b().a(this, f3Var, iLogger);
        f3Var.e("data");
        o(f3Var, iLogger);
        Map map = this.f28791u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f28791u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.D();
    }

    public void t(Map map) {
        this.f28791u = map;
    }

    public void u(float f10) {
        this.f28787q = f10;
    }

    public void v(float f10) {
        this.f28788r = f10;
    }
}
