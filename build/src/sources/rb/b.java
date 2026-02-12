package rb;

import a0.c2;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f46210a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static boolean f46211b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract a a(String str, int i10);

        public abstract a b(String str, Object obj);

        public abstract void c();
    }

    /* renamed from: rb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0631b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f46212a;

        public C0631b(long j10) {
            this.f46212a = j10;
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
            rb.a.i(this.f46212a);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f46213a;

        /* renamed from: b  reason: collision with root package name */
        private final String f46214b;

        /* renamed from: c  reason: collision with root package name */
        private final List f46215c;

        public c(long j10, String sectionName) {
            Intrinsics.checkNotNullParameter(sectionName, "sectionName");
            this.f46213a = j10;
            this.f46214b = sectionName;
            this.f46215c = new ArrayList();
        }

        private final void d(String str, String str2) {
            List list = this.f46215c;
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
            long j10 = this.f46213a;
            String str2 = this.f46214b;
            if (b.f46211b && !this.f46215c.isEmpty()) {
                str = " (" + c2.a(", ", this.f46215c) + ")";
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
        return new C0631b(j10);
    }
}
