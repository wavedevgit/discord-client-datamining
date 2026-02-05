package com.facebook.imagepipeline.backends.okhttp3;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends Exception {

    /* renamed from: i  reason: collision with root package name */
    public static final a f10414i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Integer f10415d;

    /* renamed from: e  reason: collision with root package name */
    private final Headers f10416e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a(Response response) {
            Integer num;
            Intrinsics.checkNotNullParameter(response, "response");
            Response K0 = response.K0();
            Headers headers = null;
            if (K0 != null) {
                num = Integer.valueOf(K0.L());
            } else {
                num = null;
            }
            Response K02 = response.K0();
            if (K02 != null) {
                headers = K02.E0();
            }
            return new c(num, headers);
        }

        private a() {
        }
    }

    public c(Integer num, Headers headers) {
        this.f10415d = num;
        this.f10416e = headers;
    }
}
