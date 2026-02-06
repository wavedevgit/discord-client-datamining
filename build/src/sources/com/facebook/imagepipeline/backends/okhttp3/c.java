package com.facebook.imagepipeline.backends.okhttp3;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends Exception {

    /* renamed from: i  reason: collision with root package name */
    public static final a f10313i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Integer f10314d;

    /* renamed from: e  reason: collision with root package name */
    private final Headers f10315e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(Response response) {
            Integer num;
            Intrinsics.checkNotNullParameter(response, "response");
            Response J0 = response.J0();
            Headers headers = null;
            if (J0 != null) {
                num = Integer.valueOf(J0.z());
            } else {
                num = null;
            }
            Response J02 = response.J0();
            if (J02 != null) {
                headers = J02.E0();
            }
            return new c(num, headers);
        }

        private a() {
        }
    }

    public c(Integer num, Headers headers) {
        this.f10314d = num;
        this.f10315e = headers;
    }
}
