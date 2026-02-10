package dc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f21548c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f21549a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21550b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f21551a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f21552b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f21551a, Collections.unmodifiableList(this.f21552b));
        }

        public a b(List list) {
            this.f21552b = list;
            return this;
        }

        public a c(String str) {
            this.f21551a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f21549a = str;
        this.f21550b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f21550b;
    }

    public String b() {
        return this.f21549a;
    }
}
