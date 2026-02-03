package an;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f729a;

    /* renamed from: b  reason: collision with root package name */
    private final String f730b;

    /* renamed from: c  reason: collision with root package name */
    private final String f731c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f732d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f733e;

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
            private final a f738a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(a button) {
                super(null);
                Intrinsics.checkNotNullParameter(button, "button");
                this.f738a = button;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && this.f738a == ((a) obj).f738a) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f738a.hashCode();
            }

            public String toString() {
                return "ButtonClicked(button=" + this.f738a + ')';
            }
        }

        /* renamed from: an.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0014b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0014b f739a = new C0014b();

            private C0014b() {
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
        this.f729a = buttons;
        this.f730b = message;
        this.f731c = title;
        this.f732d = z10;
        this.f733e = onEvent;
    }

    public final Map a() {
        return this.f729a;
    }

    public final boolean b() {
        return this.f732d;
    }

    public final String c() {
        return this.f730b;
    }

    public final Function1 d() {
        return this.f733e;
    }

    public final String e() {
        return this.f731c;
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
            if (Intrinsics.areEqual(this.f729a, eVar.f729a) && Intrinsics.areEqual(this.f730b, eVar.f730b) && Intrinsics.areEqual(this.f731c, eVar.f731c) && this.f732d == eVar.f732d) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.AlertScreen");
    }

    public int hashCode() {
        return (((((this.f729a.hashCode() * 31) + this.f730b.hashCode()) * 31) + this.f731c.hashCode()) * 31) + Boolean.hashCode(this.f732d);
    }

    public String toString() {
        return "AlertScreen(buttons=" + this.f729a + ", message=" + this.f730b + ", title=" + this.f731c + ", cancelable=" + this.f732d + ", onEvent=" + this.f733e + ')';
    }

    public /* synthetic */ e(Map map, String str, String str2, boolean z10, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map, (i10 & 2) != 0 ? "" : str, (i10 & 4) != 0 ? "" : str2, (i10 & 8) != 0 ? true : z10, function1);
    }
}
