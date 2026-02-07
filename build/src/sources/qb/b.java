package qb;

import a0.c2;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f46637a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static boolean f46638b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract a a(String str, int i10);

        public abstract a b(String str, Object obj);

        public abstract void c();
    }

    /* renamed from: qb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0601b extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f46639a;

        public C0601b(long j10) {
            this.f46639a = j10;
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
            qb.a.i(this.f46639a);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends a {

        /* renamed from: a  reason: collision with root package name */
        private final long f46640a;

        /* renamed from: b  reason: collision with root package name */
        private final String f46641b;

        /* renamed from: c  reason: collision with root package name */
        private final List f46642c;

        public c(long j10, String sectionName) {
            Intrinsics.checkNotNullParameter(sectionName, "sectionName");
            this.f46640a = j10;
            this.f46641b = sectionName;
            this.f46642c = new ArrayList();
        }

        private final void d(String str, String str2) {
            List list = this.f46642c;
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
            long j10 = this.f46640a;
            String str2 = this.f46641b;
            if (b.f46638b && !this.f46642c.isEmpty()) {
                str = " (" + c2.a(", ", this.f46642c) + ")";
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
        return new C0601b(j10);
    }
}
