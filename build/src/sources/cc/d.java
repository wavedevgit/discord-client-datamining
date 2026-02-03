package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f7059c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f7060a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7061b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f7062a = "";

        /* renamed from: b  reason: collision with root package name */
        private List f7063b = new ArrayList();

        a() {
        }

        public d a() {
            return new d(this.f7062a, Collections.unmodifiableList(this.f7063b));
        }

        public a b(List list) {
            this.f7063b = list;
            return this;
        }

        public a c(String str) {
            this.f7062a = str;
            return this;
        }
    }

    d(String str, List list) {
        this.f7060a = str;
        this.f7061b = list;
    }

    public static a c() {
        return new a();
    }

    public List a() {
        return this.f7061b;
    }

    public String b() {
        return this.f7060a;
    }
}
