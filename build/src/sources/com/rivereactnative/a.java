package com.rivereactnative;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.rivereactnative.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0216a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f18472a;

        public C0216a(boolean z10) {
            super(null);
            this.f18472a = z10;
        }

        public final boolean a() {
            return this.f18472a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof C0216a) && this.f18472a == ((C0216a) obj).f18472a;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f18472a);
        }

        public String toString() {
            boolean z10 = this.f18472a;
            return "AutoBind(autoBind=" + z10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        public static final b f18473a = new b();

        private b() {
            super(null);
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof b);
        }

        public int hashCode() {
            return -1653671279;
        }

        public String toString() {
            return "Empty";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a {

        /* renamed from: a  reason: collision with root package name */
        private final int f18474a;

        public c(int i10) {
            super(null);
            this.f18474a = i10;
        }

        public final int a() {
            return this.f18474a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof c) && this.f18474a == ((c) obj).f18474a;
        }

        public int hashCode() {
            return Integer.hashCode(this.f18474a);
        }

        public String toString() {
            int i10 = this.f18474a;
            return "Index(index=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f18475a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String name) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            this.f18475a = name;
        }

        public final String a() {
            return this.f18475a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof d) && Intrinsics.areEqual(this.f18475a, ((d) obj).f18475a);
        }

        public int hashCode() {
            return this.f18475a.hashCode();
        }

        public String toString() {
            String str = this.f18475a;
            return "Name(name=" + str + ")";
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
