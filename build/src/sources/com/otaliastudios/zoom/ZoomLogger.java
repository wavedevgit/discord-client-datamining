package com.otaliastudios.zoom;

import android.util.Log;
import java.util.Arrays;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ZoomLogger {

    /* renamed from: b  reason: collision with root package name */
    public static final a f17939b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private static int f17940c = 3;

    /* renamed from: d  reason: collision with root package name */
    private static String f17941d;

    /* renamed from: e  reason: collision with root package name */
    private static String f17942e;

    /* renamed from: a  reason: collision with root package name */
    private final String f17943a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final ZoomLogger a(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return new ZoomLogger(tag, null);
        }

        private a() {
        }
    }

    public /* synthetic */ ZoomLogger(String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(str);
    }

    private final boolean c(int i10) {
        if (f17940c <= i10) {
            return true;
        }
        return false;
    }

    private final String d(int i10, Object... objArr) {
        if (c(i10)) {
            return i.v0(objArr, " ", null, null, 0, null, null, 62, null);
        }
        return "";
    }

    public final void a(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (c(1)) {
            Log.i(this.f17943a, message);
            f17941d = message;
            f17942e = this.f17943a;
        }
    }

    public final void b(Object... data) {
        Intrinsics.checkNotNullParameter(data, "data");
        a(d(1, Arrays.copyOf(data, data.length)));
    }

    public final void e(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (c(0)) {
            Log.v(this.f17943a, message);
            f17941d = message;
            f17942e = this.f17943a;
        }
    }

    public final void f(Object... data) {
        Intrinsics.checkNotNullParameter(data, "data");
        e(d(0, Arrays.copyOf(data, data.length)));
    }

    public final void g(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (c(2)) {
            Log.w(this.f17943a, message);
            f17941d = message;
            f17942e = this.f17943a;
        }
    }

    public final void h(Object... data) {
        Intrinsics.checkNotNullParameter(data, "data");
        g(d(2, Arrays.copyOf(data, data.length)));
    }

    private ZoomLogger(String str) {
        this.f17943a = str;
    }
}
