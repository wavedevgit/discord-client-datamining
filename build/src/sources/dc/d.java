package dc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f21549c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f21550a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21551b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f21552a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f21553b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f21552a, Collections.unmodifiableList(this.f21553b));
        }

        public a b(List list) {
            this.f21553b = list;
            return this;
        }

        public a c(String str) {
            this.f21552a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f21550a = str;
        this.f21551b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f21551b;
    }

    public String b() {
        return this.f21550a;
    }
}
