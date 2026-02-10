package dc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f20601c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f20602a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20603b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f20604a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f20605b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f20604a, Collections.unmodifiableList(this.f20605b));
        }

        public a b(List list) {
            this.f20605b = list;
            return this;
        }

        public a c(String str) {
            this.f20604a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f20602a = str;
        this.f20603b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f20603b;
    }

    public String b() {
        return this.f20602a;
    }
}
