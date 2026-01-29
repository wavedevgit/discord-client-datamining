package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f8216c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f8217a;

    /* renamed from: b  reason: collision with root package name */
    private final List f8218b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f8219a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f8220b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f8219a, Collections.unmodifiableList(this.f8220b));
        }

        public a b(List list) {
            this.f8220b = list;
            return this;
        }

        public a c(String str) {
            this.f8219a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f8217a = str;
        this.f8218b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f8218b;
    }

    public String b() {
        return this.f8217a;
    }
}
