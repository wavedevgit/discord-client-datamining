package bu;

import kotlin.jvm.internal.Intrinsics;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0116a f7100a = C0116a.f7103a;

    /* renamed from: b  reason: collision with root package name */
    public static final a f7101b = new C0116a.C0117a();

    /* renamed from: c  reason: collision with root package name */
    public static final a f7102c = new du.a(null, 1, null);

    /* renamed from: bu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0116a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0116a f7103a = new C0116a();

        /* renamed from: bu.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class C0117a implements a {
            @Override // bu.a
            public Request a(k kVar, Response response) {
                Intrinsics.checkNotNullParameter(response, "response");
                return null;
            }
        }

        private C0116a() {
        }
    }

    Request a(k kVar, Response response);
}
