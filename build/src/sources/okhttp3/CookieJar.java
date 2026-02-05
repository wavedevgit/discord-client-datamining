package okhttp3;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface CookieJar {

    /* renamed from: a  reason: collision with root package name */
    public static final a f43732a = a.f43734a;

    /* renamed from: b  reason: collision with root package name */
    public static final CookieJar f43733b = new a.C0552a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f43734a = new a();

        /* renamed from: okhttp3.CookieJar$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class C0552a implements CookieJar {
            @Override // okhttp3.CookieJar
            public List loadForRequest(HttpUrl url) {
                Intrinsics.checkNotNullParameter(url, "url");
                return CollectionsKt.l();
            }

            @Override // okhttp3.CookieJar
            public void saveFromResponse(HttpUrl url, List cookies) {
                Intrinsics.checkNotNullParameter(url, "url");
                Intrinsics.checkNotNullParameter(cookies, "cookies");
            }
        }

        private a() {
        }
    }

    List loadForRequest(HttpUrl httpUrl);

    void saveFromResponse(HttpUrl httpUrl, List list);
}
