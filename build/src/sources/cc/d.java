package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f8072c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f8073a;

    /* renamed from: b  reason: collision with root package name */
    private final List f8074b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f8075a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f8076b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f8075a, Collections.unmodifiableList(this.f8076b));
        }

        public a b(List list) {
            this.f8076b = list;
            return this;
        }

        public a c(String str) {
            this.f8075a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f8073a = str;
        this.f8074b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f8074b;
    }

    public String b() {
        return this.f8073a;
    }
}
