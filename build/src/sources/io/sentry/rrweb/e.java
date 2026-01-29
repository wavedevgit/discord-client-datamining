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
    private b f30640o;

    /* renamed from: p  reason: collision with root package name */
    private int f30641p;

    /* renamed from: q  reason: collision with root package name */
    private float f30642q;

    /* renamed from: r  reason: collision with root package name */
    private float f30643r;

    /* renamed from: s  reason: collision with root package name */
    private int f30644s;

    /* renamed from: t  reason: collision with root package name */
    private int f30645t;

    /* renamed from: u  reason: collision with root package name */
    private Map f30646u;

    /* renamed from: v  reason: collision with root package name */
    private Map f30647v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(e eVar, e3 e3Var, ILogger iLogger) {
            d.a aVar = new d.a();
            e3Var.r();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                char c10 = 65535;
                switch (l02.hashCode()) {
                    case 120:
                        if (l02.equals("x")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 121:
                        if (l02.equals("y")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3355:
                        if (l02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3575610:
                        if (l02.equals("type")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 768858903:
                        if (l02.equals("pointerType")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1565043768:
                        if (l02.equals("pointerId")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        eVar.f30642q = e3Var.nextFloat();
                        break;
                    case 1:
                        eVar.f30643r = e3Var.nextFloat();
                        break;
                    case 2:
                        eVar.f30641p = e3Var.nextInt();
                        break;
                    case 3:
                        eVar.f30640o = (b) e3Var.G0(iLogger, new b.a());
                        break;
                    case 4:
                        eVar.f30644s = e3Var.nextInt();
                        break;
                    case 5:
                        eVar.f30645t = e3Var.nextInt();
                        break;
                    default:
                        if (!aVar.a(eVar, l02, e3Var, iLogger)) {
                            if (hashMap == null) {
                                hashMap = new HashMap();
                            }
                            e3Var.v1(iLogger, hashMap, l02);
                            break;
                        } else {
                            break;
                        }
                }
            }
            eVar.p(hashMap);
            e3Var.y();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public e a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            e eVar = new e();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String l02 = e3Var.l0();
                l02.getClass();
                if (!l02.equals("data")) {
                    if (!aVar.a(eVar, l02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, l02);
                    }
                } else {
                    c(eVar, e3Var, iLogger);
                }
            }
            eVar.t(hashMap);
            e3Var.y();
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
        this.f30644s = 2;
    }

    private void o(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new d.c().a(this, f3Var, iLogger);
        f3Var.e("type").j(iLogger, this.f30640o);
        f3Var.e(StackTraceHelper.ID_KEY).b(this.f30641p);
        f3Var.e("x").c(this.f30642q);
        f3Var.e("y").c(this.f30643r);
        f3Var.e("pointerType").b(this.f30644s);
        f3Var.e("pointerId").b(this.f30645t);
        Map map = this.f30647v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30647v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void p(Map map) {
        this.f30647v = map;
    }

    public void q(int i10) {
        this.f30641p = i10;
    }

    public void r(b bVar) {
        this.f30640o = bVar;
    }

    public void s(int i10) {
        this.f30645t = i10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        new b.C0403b().a(this, f3Var, iLogger);
        f3Var.e("data");
        o(f3Var, iLogger);
        Map map = this.f30646u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f30646u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.y();
    }

    public void t(Map map) {
        this.f30646u = map;
    }

    public void u(float f10) {
        this.f30642q = f10;
    }

    public void v(float f10) {
        this.f30643r = f10;
    }
}
