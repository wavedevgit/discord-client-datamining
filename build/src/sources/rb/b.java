package rb;

import a0.c2;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f47755a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static boolean f47756b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract a a(String str, int i10);

        public abstract a b(String str, Object obj);

        public abstract void c();
    }

    /* renamed from: rb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0654b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f47757a;

        public C0654b(long j10) {
            this.f47757a = j10;
        }

        @Override // rb.b.a
        public a a(String key, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            return this;
        }

        @Override // rb.b.a
        public a b(String key, Object value) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(value, "value");
            return this;
        }

        @Override // rb.b.a
        public void c() {
            rb.a.i(this.f47757a);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f47758a;

        /* renamed from: b  reason: collision with root package name */
        private final String f47759b;

        /* renamed from: c  reason: collision with root package name */
        private final List f47760c;

        public c(long j10, String sectionName) {
            Intrinsics.checkNotNullParameter(sectionName, "sectionName");
            this.f47758a = j10;
            this.f47759b = sectionName;
            this.f47760c = new ArrayList();
        }

        private final void d(String str, String str2) {
            List list = this.f47760c;
            list.add(str + ": " + str2);
        }

        @Override // rb.b.a
        public a a(String key, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            d(key, String.valueOf(i10));
            return this;
        }

        @Override // rb.b.a
        public a b(String key, Object value) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(value, "value");
            d(key, value.toString());
            return this;
        }

        @Override // rb.b.a
        public void c() {
            String str;
            long j10 = this.f47758a;
            String str2 = this.f47759b;
            if (b.f47756b && !this.f47760c.isEmpty()) {
                str = " (" + c2.a(", ", this.f47760c) + ")";
            } else {
                str = "";
            }
            rb.a.c(j10, str2 + str);
        }
    }

    private b() {
    }

    public static final a a(long j10, String sectionName) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        return new c(j10, sectionName);
    }

    public static final a b(long j10) {
        return new C0654b(j10);
    }
}
