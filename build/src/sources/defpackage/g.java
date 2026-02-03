package defpackage;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* renamed from: g  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* renamed from: g$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a extends g {

        /* renamed from: g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0344a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0344a f25629a = new C0344a();

            private C0344a() {
                super(null);
            }
        }

        /* renamed from: g$a$b */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class b extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final b f25630a = new b();

            private b() {
                super(null);
            }
        }

        /* renamed from: g$a$c */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class c extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final c f25631a = new c();

            private c() {
                super(null);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
            super(null);
        }
    }

    /* renamed from: g$b */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends g {

        /* renamed from: a  reason: collision with root package name */
        private final Object f25632a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Object value) {
            super(null);
            Intrinsics.checkNotNullParameter(value, "value");
            this.f25632a = value;
        }

        public final Object a() {
            return this.f25632a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof b) && Intrinsics.areEqual(this.f25632a, ((b) obj).f25632a);
        }

        public int hashCode() {
            return this.f25632a.hashCode();
        }

        public String toString() {
            Object obj = this.f25632a;
            return "Success(value=" + obj + ")";
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g() {
    }
}
