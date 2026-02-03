package io.sentry;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import io.sentry.rrweb.d;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v3 implements w1 {

    /* renamed from: d  reason: collision with root package name */
    private Integer f30780d;

    /* renamed from: e  reason: collision with root package name */
    private List f30781e;

    /* renamed from: i  reason: collision with root package name */
    private Map f30782i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f30783a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f30784b;

        static {
            int[] iArr = new int[io.sentry.rrweb.c.values().length];
            f30784b = iArr;
            try {
                iArr[io.sentry.rrweb.c.IncrementalSnapshot.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f30784b[io.sentry.rrweb.c.Meta.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f30784b[io.sentry.rrweb.c.Custom.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[d.b.values().length];
            f30783a = iArr2;
            try {
                iArr2[d.b.MouseInteraction.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f30783a[d.b.TouchMove.ordinal()] = 2;
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
        return this.f30781e;
    }

    public void b(List list) {
        this.f30781e = list;
    }

    public void c(Integer num) {
        this.f30780d = num;
    }

    public void d(Map map) {
        this.f30782i = map;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && v3.class == obj.getClass()) {
            v3 v3Var = (v3) obj;
            if (io.sentry.util.y.a(this.f30780d, v3Var.f30780d) && io.sentry.util.y.a(this.f30781e, v3Var.f30781e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return io.sentry.util.y.b(this.f30780d, this.f30781e);
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.r();
        if (this.f30780d != null) {
            f3Var.e("segment_id").i(this.f30780d);
        }
        Map map = this.f30782i;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.f30782i.get(str));
            }
        }
        f3Var.y();
        f3Var.v(true);
        if (this.f30780d != null) {
            f3Var.g(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        }
        List list = this.f30781e;
        if (list != null) {
            f3Var.j(iLogger, list);
        }
        f3Var.v(false);
    }
}
