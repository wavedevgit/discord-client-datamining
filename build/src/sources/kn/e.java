package kn;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f31939a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31940b;

    /* renamed from: c  reason: collision with root package name */
    private final String f31941c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f31942d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f31943e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        POSITIVE,
        NEGATIVE,
        NEUTRAL
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final a f31948a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(a button) {
                super(null);
                Intrinsics.checkNotNullParameter(button, "button");
                this.f31948a = button;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && this.f31948a == ((a) obj).f31948a) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f31948a.hashCode();
            }

            public String toString() {
                return "ButtonClicked(button=" + this.f31948a + ')';
            }
        }

        /* renamed from: kn.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0450b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0450b f31949a = new C0450b();

            private C0450b() {
                super(null);
            }
        }

        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public e(Map buttons, String message, String title, boolean z10, Function1 onEvent) {
        Intrinsics.checkNotNullParameter(buttons, "buttons");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(onEvent, "onEvent");
        this.f31939a = buttons;
        this.f31940b = message;
        this.f31941c = title;
        this.f31942d = z10;
        this.f31943e = onEvent;
    }

    public final Map a() {
        return this.f31939a;
    }

    public final boolean b() {
        return this.f31942d;
    }

    public final String c() {
        return this.f31940b;
    }

    public final Function1 d() {
        return this.f31943e;
    }

    public final String e() {
        return this.f31941c;
    }

    public boolean equals(Object obj) {
        Class<?> cls;
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            cls = null;
        } else {
            cls = obj.getClass();
        }
        if (!Intrinsics.areEqual(e.class, cls)) {
            return false;
        }
        if (obj != null) {
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f31939a, eVar.f31939a) && Intrinsics.areEqual(this.f31940b, eVar.f31940b) && Intrinsics.areEqual(this.f31941c, eVar.f31941c) && this.f31942d == eVar.f31942d) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.AlertScreen");
    }

    public int hashCode() {
        return (((((this.f31939a.hashCode() * 31) + this.f31940b.hashCode()) * 31) + this.f31941c.hashCode()) * 31) + Boolean.hashCode(this.f31942d);
    }

    public String toString() {
        return "AlertScreen(buttons=" + this.f31939a + ", message=" + this.f31940b + ", title=" + this.f31941c + ", cancelable=" + this.f31942d + ", onEvent=" + this.f31943e + ')';
    }

    public /* synthetic */ e(Map map, String str, String str2, boolean z10, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map, (i10 & 2) != 0 ? "" : str, (i10 & 4) != 0 ? "" : str2, (i10 & 8) != 0 ? true : z10, function1);
    }
}
