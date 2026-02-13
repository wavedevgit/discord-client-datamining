package nm;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends Event {

    /* renamed from: f  reason: collision with root package name */
    public static final a f38553f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final a.EnumC0535a f38554g = a.EnumC0535a.f38563e;

    /* renamed from: h  reason: collision with root package name */
    private static final a.EnumC0535a f38555h = a.EnumC0535a.f38564i;

    /* renamed from: i  reason: collision with root package name */
    private static final a.EnumC0535a f38556i = a.EnumC0535a.f38565o;

    /* renamed from: j  reason: collision with root package name */
    private static final a.EnumC0535a f38557j = a.EnumC0535a.f38566p;

    /* renamed from: a  reason: collision with root package name */
    private final a.EnumC0535a f38558a;

    /* renamed from: b  reason: collision with root package name */
    private final double f38559b;

    /* renamed from: c  reason: collision with root package name */
    private final double f38560c;

    /* renamed from: d  reason: collision with root package name */
    private final int f38561d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38562e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* renamed from: nm.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class EnumC0535a {

            /* renamed from: e  reason: collision with root package name */
            public static final EnumC0535a f38563e = new EnumC0535a("Move", 0, "topKeyboardMove");

            /* renamed from: i  reason: collision with root package name */
            public static final EnumC0535a f38564i = new EnumC0535a("Start", 1, "topKeyboardMoveStart");

            /* renamed from: o  reason: collision with root package name */
            public static final EnumC0535a f38565o = new EnumC0535a("End", 2, "topKeyboardMoveEnd");

            /* renamed from: p  reason: collision with root package name */
            public static final EnumC0535a f38566p = new EnumC0535a("Interactive", 3, "topKeyboardMoveInteractive");

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ EnumC0535a[] f38567q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f38568r;

            /* renamed from: d  reason: collision with root package name */
            private final String f38569d;

            static {
                EnumC0535a[] a10 = a();
                f38567q = a10;
                f38568r = hs.a.a(a10);
            }

            private EnumC0535a(String str, int i10, String str2) {
                this.f38569d = str2;
            }

            private static final /* synthetic */ EnumC0535a[] a() {
                return new EnumC0535a[]{f38563e, f38564i, f38565o, f38566p};
            }

            public static EnumC0535a valueOf(String str) {
                return (EnumC0535a) Enum.valueOf(EnumC0535a.class, str);
            }

            public static EnumC0535a[] values() {
                return (EnumC0535a[]) f38567q.clone();
            }

            public final String d() {
                return this.f38569d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final EnumC0535a a() {
            return f.f38556i;
        }

        public final EnumC0535a b() {
            return f.f38557j;
        }

        public final EnumC0535a c() {
            return f.f38554g;
        }

        public final EnumC0535a d() {
            return f.f38555h;
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(int i10, int i11, a.EnumC0535a event, double d10, double d11, int i12, int i13) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(event, "event");
        this.f38558a = event;
        this.f38559b = d10;
        this.f38560c = d11;
        this.f38561d = i12;
        this.f38562e = i13;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) 0;
    }

    @Override // com.facebook.react.uimanager.events.Event
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.f38560c);
        createMap.putDouble("height", this.f38559b);
        createMap.putInt("duration", this.f38561d);
        createMap.putInt("target", this.f38562e);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public String getEventName() {
        return this.f38558a.d();
    }
}
