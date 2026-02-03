package dp;

import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okio.Buffer;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    public static final a f22051a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Set a() {
            return x0.c(p.f22069d);
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Response c(c cVar, Interceptor.Chain chain) {
        String str;
        Intrinsics.checkNotNullParameter(chain, "chain");
        Request h10 = chain.h();
        RequestBody c10 = h10.c();
        if ((Intrinsics.areEqual(CollectionsKt.z0(h10.n().n()), "transition") || Intrinsics.areEqual(CollectionsKt.z0(h10.n().n()), "government-id-classification")) && c10 != null && cVar.c()) {
            String a10 = c.f22039d.a(cVar.a());
            MediaType contentType = c10.contentType();
            if (contentType != null) {
                str = contentType.g();
            } else {
                str = null;
            }
            if (Intrinsics.areEqual(str, "form-data")) {
                MultipartBody multipartBody = (MultipartBody) c10;
                MultipartBody.Builder e10 = new MultipartBody.Builder(null, 1, null).e(multipartBody.contentType());
                for (MultipartBody.b bVar : multipartBody.b()) {
                    e10.c(bVar);
                }
                return chain.a(h10.k().g(h10.j(), e10.a("meta[workflowInitialVariables][debugForcedStatus]", a10).d()).b());
            } else if (Intrinsics.areEqual(str, "json")) {
                Buffer buffer = new Buffer();
                c10.writeTo(buffer);
                JSONObject jSONObject = new JSONObject(buffer.T1());
                JSONObject optJSONObject = jSONObject.optJSONObject("meta");
                if (optJSONObject == null) {
                    optJSONObject = new JSONObject();
                }
                optJSONObject.put("workflowInitialVariables", new JSONObject().put("debugForcedStatus", a10));
                jSONObject.put("meta", optJSONObject);
                RequestBody.Companion companion = RequestBody.Companion;
                String jSONObject2 = jSONObject.toString();
                Intrinsics.checkNotNullExpressionValue(jSONObject2, "toString(...)");
                return chain.a(h10.k().g(h10.j(), companion.b(jSONObject2, c10.contentType())).b());
            } else {
                return chain.a(h10);
            }
        }
        return chain.a(h10);
    }

    public static final Set d() {
        return f22051a.a();
    }

    public final Interceptor b(final c flags) {
        Intrinsics.checkNotNullParameter(flags, "flags");
        return new Interceptor() { // from class: dp.e
            @Override // okhttp3.Interceptor
            public final Response intercept(Interceptor.Chain chain) {
                Response c10;
                c10 = f.c(c.this, chain);
                return c10;
            }
        };
    }
}
