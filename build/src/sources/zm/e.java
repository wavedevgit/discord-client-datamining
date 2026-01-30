package zm;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f55820a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55821b;

    /* renamed from: c  reason: collision with root package name */
    private final String f55822c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55823d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f55824e;

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
            private final a f55829a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(a button) {
                super(null);
                Intrinsics.checkNotNullParameter(button, "button");
                this.f55829a = button;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && this.f55829a == ((a) obj).f55829a) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f55829a.hashCode();
            }

            public String toString() {
                return "ButtonClicked(button=" + this.f55829a + ')';
            }
        }

        /* renamed from: zm.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0784b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0784b f55830a = new C0784b();

            private C0784b() {
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
        this.f55820a = buttons;
        this.f55821b = message;
        this.f55822c = title;
        this.f55823d = z10;
        this.f55824e = onEvent;
    }

    public final Map a() {
        return this.f55820a;
    }

    public final boolean b() {
        return this.f55823d;
    }

    public final String c() {
        return this.f55821b;
    }

    public final Function1 d() {
        return this.f55824e;
    }

    public final String e() {
        return this.f55822c;
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
            if (Intrinsics.areEqual(this.f55820a, eVar.f55820a) && Intrinsics.areEqual(this.f55821b, eVar.f55821b) && Intrinsics.areEqual(this.f55822c, eVar.f55822c) && this.f55823d == eVar.f55823d) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.AlertScreen");
    }

    public int hashCode() {
        return (((((this.f55820a.hashCode() * 31) + this.f55821b.hashCode()) * 31) + this.f55822c.hashCode()) * 31) + Boolean.hashCode(this.f55823d);
    }

    public String toString() {
        return "AlertScreen(buttons=" + this.f55820a + ", message=" + this.f55821b + ", title=" + this.f55822c + ", cancelable=" + this.f55823d + ", onEvent=" + this.f55824e + ')';
    }

    public /* synthetic */ e(Map map, String str, String str2, boolean z10, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map, (i10 & 2) != 0 ? "" : str, (i10 & 4) != 0 ? "" : str2, (i10 & 8) != 0 ? true : z10, function1);
    }
}
