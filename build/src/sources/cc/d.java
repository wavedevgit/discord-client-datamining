package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f7477c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f7478a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7479b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f7480a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f7481b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f7480a, Collections.unmodifiableList(this.f7481b));
        }

        public a b(List list) {
            this.f7481b = list;
            return this;
        }

        public a c(String str) {
            this.f7480a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f7478a = str;
        this.f7479b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f7479b;
    }

    public String b() {
        return this.f7478a;
    }
}
