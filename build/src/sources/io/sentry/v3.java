package io.sentry;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import io.sentry.rrweb.d;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private Integer f28982d;

    /* renamed from: e  reason: collision with root package name */
    private List f28983e;

    /* renamed from: i  reason: collision with root package name */
    private Map f28984i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28985a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f28986b;

        static {
            int[] iArr = new int[io.sentry.rrweb.c.values().length];
            f28986b = iArr;
            try {
                iArr[io.sentry.rrweb.c.IncrementalSnapshot.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28986b[io.sentry.rrweb.c.Meta.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28986b[io.sentry.rrweb.c.Custom.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[d.b.values().length];
            f28985a = iArr2;
            try {
                iArr2[d.b.MouseInteraction.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f28985a[d.b.TouchMove.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements m1 {
        /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
        /* JADX WARN: Code restructure failed: missing block: B:38:0x00e0, code lost:
            if (r12.equals("breadcrumb") == false) goto L43;
         */
        @Override // io.sentry.m1
        /* renamed from: b */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public io.sentry.v3 a(io.sentry.e3 r17, io.sentry.ILogger r18) {
            /*
                Method dump skipped, instructions count: 434
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: io.sentry.v3.b.a(io.sentry.e3, io.sentry.ILogger):io.sentry.v3");
        }
    }

    public List a() {
        return this.f28983e;
    }

    public void b(List list) {
        this.f28983e = list;
    }

    public void c(Integer num) {
        this.f28982d = num;
    }

    public void d(Map map) {
        this.f28984i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && v3.class == obj.getClass()) {
            v3 v3Var = (v3) obj;
            if (io.sentry.util.y.a(this.f28982d, v3Var.f28982d) && io.sentry.util.y.a(this.f28983e, v3Var.f28983e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f28982d, this.f28983e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.u();
        if (this.f28982d != null) {
            f3Var.e("segment_id").i(this.f28982d);
        }
        Map map = this.f28984i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f28984i.get(str));
            }
        }
        f3Var.D();
        f3Var.A(true);
        if (this.f28982d != null) {
            f3Var.g(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        }
        List list = this.f28983e;
        if (list != null) {
            f3Var.j(iLogger, list);
        }
        f3Var.A(false);
    }
}
