package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f7322c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f7323a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7324b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f7325a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f7326b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f7325a, Collections.unmodifiableList(this.f7326b));
        }

        public a b(List list) {
            this.f7326b = list;
            return this;
        }

        public a c(String str) {
            this.f7325a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f7323a = str;
        this.f7324b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f7324b;
    }

    public String b() {
        return this.f7323a;
    }
}
