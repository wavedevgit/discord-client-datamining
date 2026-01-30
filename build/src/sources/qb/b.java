package qb;

import a0.c2;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f47072a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static boolean f47073b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract a a(String str, int i10);

        public abstract a b(String str, Object obj);

        public abstract void c();
    }

    /* renamed from: qb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0565b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f47074a;

        public C0565b(long j10) {
            this.f47074a = j10;
        }

        @Override // qb.b.a
        public a a(String key, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            return this;
        }

        @Override // qb.b.a
        public a b(String key, Object value) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(value, "value");
            return this;
        }

        @Override // qb.b.a
        public void c() {
            qb.a.i(this.f47074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f47075a;

        /* renamed from: b  reason: collision with root package name */
        private final String f47076b;

        /* renamed from: c  reason: collision with root package name */
        private final List f47077c;

        public c(long j10, String sectionName) {
            Intrinsics.checkNotNullParameter(sectionName, "sectionName");
            this.f47075a = j10;
            this.f47076b = sectionName;
            this.f47077c = new ArrayList();
        }

        private final void d(String str, String str2) {
            List list = this.f47077c;
            list.add(str + ": " + str2);
        }

        @Override // qb.b.a
        public a a(String key, int i10) {
            Intrinsics.checkNotNullParameter(key, "key");
            d(key, String.valueOf(i10));
            return this;
        }

        @Override // qb.b.a
        public a b(String key, Object value) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(value, "value");
            d(key, value.toString());
            return this;
        }

        @Override // qb.b.a
        public void c() {
            String str;
            long j10 = this.f47075a;
            String str2 = this.f47076b;
            if (b.f47073b && !this.f47077c.isEmpty()) {
                str = " (" + c2.a(", ", this.f47077c) + ")";
            } else {
                str = "";
            }
            qb.a.c(j10, str2 + str);
        }
    }

    private b() {
    }

    public static final a a(long j10, String sectionName) {
        Intrinsics.checkNotNullParameter(sectionName, "sectionName");
        return new c(j10, sectionName);
    }

    public static final a b(long j10) {
        return new C0565b(j10);
    }
}
