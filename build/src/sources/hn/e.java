package hn;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f26236a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26237b;

    /* renamed from: c  reason: collision with root package name */
    private final String f26238c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f26239d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f26240e;

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
            private final a f26245a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(a button) {
                super(null);
                Intrinsics.checkNotNullParameter(button, "button");
                this.f26245a = button;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && this.f26245a == ((a) obj).f26245a) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f26245a.hashCode();
            }

            public String toString() {
                return "ButtonClicked(button=" + this.f26245a + ')';
            }
        }

        /* renamed from: hn.e$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0359b extends b {

            /* renamed from: a  reason: collision with root package name */
            public static final C0359b f26246a = new C0359b();

            private C0359b() {
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
        this.f26236a = buttons;
        this.f26237b = message;
        this.f26238c = title;
        this.f26239d = z10;
        this.f26240e = onEvent;
    }

    public final Map a() {
        return this.f26236a;
    }

    public final boolean b() {
        return this.f26239d;
    }

    public final String c() {
        return this.f26237b;
    }

    public final Function1 d() {
        return this.f26240e;
    }

    public final String e() {
        return this.f26238c;
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
            if (Intrinsics.areEqual(this.f26236a, eVar.f26236a) && Intrinsics.areEqual(this.f26237b, eVar.f26237b) && Intrinsics.areEqual(this.f26238c, eVar.f26238c) && this.f26239d == eVar.f26239d) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.AlertScreen");
    }

    public int hashCode() {
        return (((((this.f26236a.hashCode() * 31) + this.f26237b.hashCode()) * 31) + this.f26238c.hashCode()) * 31) + Boolean.hashCode(this.f26239d);
    }

    public String toString() {
        return "AlertScreen(buttons=" + this.f26236a + ", message=" + this.f26237b + ", title=" + this.f26238c + ", cancelable=" + this.f26239d + ", onEvent=" + this.f26240e + ')';
    }

    public /* synthetic */ e(Map map, String str, String str2, boolean z10, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map, (i10 & 2) != 0 ? "" : str, (i10 & 4) != 0 ? "" : str2, (i10 & 8) != 0 ? true : z10, function1);
    }
}
