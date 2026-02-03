package com.rivereactnative;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: com.rivereactnative.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0198a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f17197a;

        public C0198a(boolean z10) {
            super(null);
            this.f17197a = z10;
        }

        public final boolean a() {
            return this.f17197a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof C0198a) && this.f17197a == ((C0198a) obj).f17197a;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f17197a);
        }

        public String toString() {
            boolean z10 = this.f17197a;
            return "AutoBind(autoBind=" + z10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        public static final b f17198a = new b();

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
        private final int f17199a;

        public c(int i10) {
            super(null);
            this.f17199a = i10;
        }

        public final int a() {
            return this.f17199a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof c) && this.f17199a == ((c) obj).f17199a;
        }

        public int hashCode() {
            return Integer.hashCode(this.f17199a);
        }

        public String toString() {
            int i10 = this.f17199a;
            return "Index(index=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a {

        /* renamed from: a  reason: collision with root package name */
        private final String f17200a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String name) {
            super(null);
            Intrinsics.checkNotNullParameter(name, "name");
            this.f17200a = name;
        }

        public final String a() {
            return this.f17200a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof d) && Intrinsics.areEqual(this.f17200a, ((d) obj).f17200a);
        }

        public int hashCode() {
            return this.f17200a.hashCode();
        }

        public String toString() {
            String str = this.f17200a;
            return "Name(name=" + str + ")";
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
