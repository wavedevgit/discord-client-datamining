package io.sentry.react;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.events.PointerEventHelper;
import io.sentry.Breadcrumb;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t extends io.sentry.android.replay.a {
    public static String i(Object obj) {
        if (!(obj instanceof List)) {
            return null;
        }
        List list = (List) obj;
        if (list.isEmpty()) {
            return null;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int min = Math.min(3, list.size() - 1); min >= 0; min--) {
            Object obj2 = list.get(min);
            if (!(obj2 instanceof Map)) {
                return null;
            }
            Map map = (Map) obj2;
            Object obj3 = map.get(StackTraceHelper.NAME_KEY);
            Object obj4 = map.get("label");
            boolean z10 = obj4 instanceof String;
            if (!(obj3 instanceof String) && !z10) {
                return null;
            }
            if (z10) {
                sb2.append(obj4);
            } else {
                sb2.append(obj3);
            }
            Object obj5 = map.get("element");
            Object obj6 = map.get("file");
            boolean z11 = obj5 instanceof String;
            boolean z12 = obj6 instanceof String;
            if (z11 && z12) {
                sb2.append('(');
                sb2.append(obj5);
                sb2.append(", ");
                sb2.append(obj6);
                sb2.append(')');
            } else if (z11) {
                sb2.append('(');
                sb2.append(obj5);
                sb2.append(')');
            } else if (z12) {
                sb2.append('(');
                sb2.append(obj6);
                sb2.append(')');
            }
            if (min > 0) {
                sb2.append(" > ");
            }
        }
        return sb2.toString();
    }

    private void j(io.sentry.rrweb.a aVar, Breadcrumb breadcrumb) {
        aVar.w(breadcrumb.q());
        aVar.u(breadcrumb.p());
        aVar.f(breadcrumb.t().getTime());
        aVar.r(breadcrumb.t().getTime() / 1000.0d);
        aVar.s("default");
    }

    @Override // io.sentry.android.replay.a, io.sentry.t3
    public io.sentry.rrweb.b a(Breadcrumb breadcrumb) {
        if (breadcrumb.m() == null || "sentry.event".equals(breadcrumb.m()) || "sentry.transaction".equals(breadcrumb.m()) || "http".equals(breadcrumb.m())) {
            return null;
        }
        if (PointerEventHelper.POINTER_TYPE_TOUCH.equals(breadcrumb.m())) {
            return h(breadcrumb);
        }
        if ("navigation".equals(breadcrumb.m())) {
            return f(breadcrumb);
        }
        if ("xhr".equals(breadcrumb.m())) {
            return g(breadcrumb);
        }
        io.sentry.rrweb.b a10 = super.a(breadcrumb);
        if ((a10 instanceof io.sentry.rrweb.a) && "navigation".equals(((io.sentry.rrweb.a) a10).n())) {
            return null;
        }
        return a10;
    }

    public io.sentry.rrweb.b f(Breadcrumb breadcrumb) {
        io.sentry.rrweb.a aVar = new io.sentry.rrweb.a();
        aVar.t(breadcrumb.m());
        j(aVar, breadcrumb);
        return aVar;
    }

    public io.sentry.rrweb.b g(Breadcrumb breadcrumb) {
        Double d10;
        Double d11;
        String str;
        if (breadcrumb.o("start_timestamp") instanceof Number) {
            d10 = (Double) breadcrumb.o("start_timestamp");
        } else {
            d10 = null;
        }
        if (breadcrumb.o("end_timestamp") instanceof Number) {
            d11 = (Double) breadcrumb.o("end_timestamp");
        } else {
            d11 = null;
        }
        if (breadcrumb.o("url") instanceof String) {
            str = (String) breadcrumb.o("url");
        } else {
            str = null;
        }
        if (d10 == null || d11 == null || str == null) {
            return null;
        }
        HashMap hashMap = new HashMap();
        if (breadcrumb.o("method") instanceof String) {
            hashMap.put("method", breadcrumb.o("method"));
        }
        if (breadcrumb.o("status_code") instanceof Double) {
            Double d12 = (Double) breadcrumb.o("status_code");
            if (d12.doubleValue() > 0.0d) {
                hashMap.put("statusCode", Integer.valueOf(d12.intValue()));
            }
        }
        if (breadcrumb.o("request_body_size") instanceof Double) {
            hashMap.put("requestBodySize", breadcrumb.o("request_body_size"));
        }
        if (breadcrumb.o("response_body_size") instanceof Double) {
            hashMap.put("responseBodySize", breadcrumb.o("response_body_size"));
        }
        io.sentry.rrweb.i iVar = new io.sentry.rrweb.i();
        iVar.s("resource.http");
        iVar.u(d10.doubleValue() / 1000.0d);
        iVar.r(d11.doubleValue() / 1000.0d);
        iVar.q(str);
        iVar.o(hashMap);
        return iVar;
    }

    public io.sentry.rrweb.b h(Breadcrumb breadcrumb) {
        io.sentry.rrweb.a aVar = new io.sentry.rrweb.a();
        aVar.t("ui.tap");
        aVar.x(i(breadcrumb.o("path")));
        j(aVar, breadcrumb);
        return aVar;
    }
}
