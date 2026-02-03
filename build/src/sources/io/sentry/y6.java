package io.sentry;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y6 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private String f30547d;

    /* renamed from: e  reason: collision with root package name */
    private Object f30548e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30549i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public y6 a(e3 e3Var, ILogger iLogger) {
            e3Var.r();
            String str = null;
            Object obj = null;
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String m02 = e3Var.m0();
                m02.getClass();
                if (!m02.equals("type")) {
                    if (!m02.equals("value")) {
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.v1(iLogger, hashMap, m02);
                    } else {
                        obj = e3Var.V1();
                    }
                } else {
                    str = e3Var.r1();
                }
            }
            e3Var.y();
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
        this.f30547d = str;
        if (obj != null && str.equals(InquiryField.StringField.TYPE)) {
            this.f30548e = obj.toString();
        } else {
            this.f30548e = obj;
        }
    }

    public void a(Map map) {
        this.f30549i = map;
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        f3Var.e("type").j(iLogger, this.f30547d);
        f3Var.e("value").j(iLogger, this.f30548e);
        Map map = this.f30549i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30549i.get(str));
            }
        }
        f3Var.y();
    }
}
