package io.sentry;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f29158d;

    /* renamed from: e  reason: collision with root package name */
    private Object f29159e;

    /* renamed from: i  reason: collision with root package name */
    private Map f29160i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public y6 a(e3 e3Var, ILogger iLogger) {
            e3Var.u();
            String str = null;
            Object obj = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                if (!o02.equals("type")) {
                    if (!o02.equals("value")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                    } else {
                        obj = e3Var.U1();
                    }
                } else {
                    str = e3Var.q1();
                }
            }
            e3Var.D();
            if (str != null) {
                y6 y6Var = new y6(str, obj);
                y6Var.a(hashMap);
                return y6Var;
            }
            IllegalStateException illegalStateException = new IllegalStateException("Missing required field \"type\"");
            iLogger.b(SentryLevel.ERROR, "Missing required field \"type\"", illegalStateException);
            throw illegalStateException;
        }
    }

    public y6(String str, Object obj) {
        this.f29158d = str;
        if (obj != null && str.equals(InquiryField.StringField.TYPE)) {
            this.f29159e = obj.toString();
        } else {
            this.f29159e = obj;
        }
    }

    public void a(Map map) {
        this.f29160i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        f3Var.e("type").j(iLogger, this.f29158d);
        f3Var.e("value").j(iLogger, this.f29159e);
        Map map = this.f29160i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f29160i.get(str));
            }
        }
        f3Var.D();
    }
}
