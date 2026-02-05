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
    private b f29641o;

    /* renamed from: p  reason: collision with root package name */
    private int f29642p;

    /* renamed from: q  reason: collision with root package name */
    private float f29643q;

    /* renamed from: r  reason: collision with root package name */
    private float f29644r;

    /* renamed from: s  reason: collision with root package name */
    private int f29645s;

    /* renamed from: t  reason: collision with root package name */
    private int f29646t;

    /* renamed from: u  reason: collision with root package name */
    private Map f29647u;

    /* renamed from: v  reason: collision with root package name */
    private Map f29648v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        private void c(e eVar, e3 e3Var, ILogger iLogger) {
            d.a aVar = new d.a();
            e3Var.s();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                char c10 = 65535;
                switch (m02.hashCode()) {
                    case 120:
                        if (m02.equals("x")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case 121:
                        if (m02.equals("y")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case 3355:
                        if (m02.equals(StackTraceHelper.ID_KEY)) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case 3575610:
                        if (m02.equals("type")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 768858903:
                        if (m02.equals("pointerType")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 1565043768:
                        if (m02.equals("pointerId")) {
                            c10 = 5;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        eVar.f29643q = e3Var.nextFloat();
                        break;
                    case 1:
                        eVar.f29644r = e3Var.nextFloat();
                        break;
                    case 2:
                        eVar.f29642p = e3Var.nextInt();
                        break;
                    case 3:
                        eVar.f29641o = (b) e3Var.G0(iLogger, new b.a());
                        break;
                    case 4:
                        eVar.f29645s = e3Var.nextInt();
                        break;
                    case 5:
                        eVar.f29646t = e3Var.nextInt();
                        break;
                    default:
                        if (!aVar.a(eVar, m02, e3Var, iLogger)) {
                            if (hashMap == null) {
                                hashMap = new HashMap();
                            }
                            e3Var.v1(iLogger, hashMap, m02);
                            break;
                        } else {
                            break;
                        }
                }
            }
            eVar.p(hashMap);
            e3Var.z();
        }

        @Override // io.sentry.m1
        /* renamed from: b */
        public e a(e3 e3Var, ILogger iLogger) {
            e3Var.s();
            e eVar = new e();
            b.a aVar = new b.a();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("data")) {
                    if (!aVar.a(eVar, m02, e3Var, iLogger)) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    }
                } else {
                    c(eVar, e3Var, iLogger);
                }
            }
            eVar.t(hashMap);
            e3Var.z();
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
        this.f29645s = 2;
    }

    private void o(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new d.c().a(this, f3Var, iLogger);
        f3Var.e("type").j(iLogger, this.f29641o);
        f3Var.e(StackTraceHelper.ID_KEY).b(this.f29642p);
        f3Var.e("x").c(this.f29643q);
        f3Var.e("y").c(this.f29644r);
        f3Var.e("pointerType").b(this.f29645s);
        f3Var.e("pointerId").b(this.f29646t);
        Map map = this.f29648v;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29648v.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public void p(Map map) {
        this.f29648v = map;
    }

    public void q(int i10) {
        this.f29642p = i10;
    }

    public void r(b bVar) {
        this.f29641o = bVar;
    }

    public void s(int i10) {
        this.f29646t = i10;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.s();
        new b.C0412b().a(this, f3Var, iLogger);
        f3Var.e("data");
        o(f3Var, iLogger);
        Map map = this.f29647u;
        if (map != null) {
            for (String str : map.keySet()) {
                Object obj = this.f29647u.get(str);
                f3Var.e(str);
                f3Var.j(iLogger, obj);
            }
        }
        f3Var.z();
    }

    public void t(Map map) {
        this.f29647u = map;
    }

    public void u(float f10) {
        this.f29643q = f10;
    }

    public void v(float f10) {
        this.f29644r = f10;
    }
}
