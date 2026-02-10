package com.facebook.imagepipeline.backends.okhttp3;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends Exception {

    /* renamed from: i  reason: collision with root package name */
    public static final a f11030i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Integer f11031d;

    /* renamed from: e  reason: collision with root package name */
    private final Headers f11032e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(Response response) {
            Integer num;
            Intrinsics.checkNotNullParameter(response, "response");
            Response F0 = response.F0();
            Headers headers = null;
            if (F0 != null) {
                num = Integer.valueOf(F0.z());
            } else {
                num = null;
            }
            Response F02 = response.F0();
            if (F02 != null) {
                headers = F02.z0();
            }
            return new c(num, headers);
        }

        private a() {
        }
    }

    public c(Integer num, Headers headers) {
        this.f11031d = num;
        this.f11032e = headers;
    }
}
